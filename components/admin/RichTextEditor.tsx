"use client";

import { useEffect, useRef, useState, type ClipboardEvent } from "react";
import { cleanEditorHtml, prepareEditorHtml } from "@/lib/blog/html";

const BLOCKS: { value: string; label: string }[] = [
  { value: "p", label: "Paragraph" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "blockquote", label: "Quote" },
];

function acceptableHref(value: string): boolean {
  const url = value.trim();
  if (url.startsWith("/") && !url.startsWith("//")) return true;
  if (/^https?:\/\//i.test(url)) return true;
  if (/^mailto:[^\s]+$/i.test(url)) return true;
  return false;
}

function blockFromSelection(root: HTMLElement): string {
  const node = window.getSelection()?.anchorNode;
  const el = node instanceof Element ? node : node?.parentElement;
  const block = el?.closest("h2, h3, h4, blockquote, p");
  if (!block || !root.contains(block)) return "p";
  return block.tagName.toLowerCase();
}

export function RichTextEditor({ initialHtml }: { initialHtml: string }) {
  const seed = useRef(prepareEditorHtml(initialHtml));
  const editorRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLTextAreaElement>(null);
  const rangeRef = useRef<Range | null>(null);
  const modeRef = useRef<"visual" | "html">("visual");
  const [mode, setMode] = useState<"visual" | "html">("visual");
  const [block, setBlock] = useState("p");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("https://");
  const [linkMessage, setLinkMessage] = useState("");

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor || editor.dataset.ready === "1") return;
    editor.innerHTML = seed.current || "<p><br></p>";
    editor.dataset.ready = "1";
  }, []);

  useEffect(() => {
    const form = fieldRef.current?.form;
    if (!form) return;
    const onSubmit = () => {
      const field = fieldRef.current;
      if (!field) return;
      const raw = modeRef.current === "html" ? field.value : editorRef.current?.innerHTML ?? field.value;
      field.value = cleanEditorHtml(raw);
    };
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  useEffect(() => {
    const onSelection = () => {
      const root = editorRef.current;
      const selection = window.getSelection();
      if (!root || !selection || selection.rangeCount === 0) return;
      const anchor = selection.anchorNode;
      if (!anchor || !root.contains(anchor)) return;
      rangeRef.current = selection.getRangeAt(0);
      const nextBlock = blockFromSelection(root);
      setBlock((current) => (current === nextBlock ? current : nextBlock));
      try {
        const nextBold = document.queryCommandState("bold");
        const nextItalic = document.queryCommandState("italic");
        setBold((current) => (current === nextBold ? current : nextBold));
        setItalic((current) => (current === nextItalic ? current : nextItalic));
      } catch {
        setBold(false);
        setItalic(false);
      }
    };
    document.addEventListener("selectionchange", onSelection);
    return () => document.removeEventListener("selectionchange", onSelection);
  }, []);

  function syncVisual() {
    const field = fieldRef.current;
    const editor = editorRef.current;
    if (!field || !editor) return;
    field.value = cleanEditorHtml(editor.innerHTML);
  }

  function restoreRange() {
    const selection = window.getSelection();
    const range = rangeRef.current;
    const editor = editorRef.current;
    if (!selection || !range || !editor) return;
    editor.focus();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("defaultParagraphSeparator", false, "p");
  }

  function run(command: string, value?: string) {
    restoreRange();
    document.execCommand(command, false, value);
    syncVisual();
  }

  function formatBlock(value: string) {
    restoreRange();
    const applied = document.execCommand("formatBlock", false, value);
    if (!applied) document.execCommand("formatBlock", false, `<${value}>`);
    setBlock(value);
    syncVisual();
  }

  function applyLink() {
    const url = linkUrl.trim();
    if (!acceptableHref(url)) {
      setLinkMessage("Use an https:// address, a /page path, or a mailto: address.");
      return;
    }
    setLinkMessage("");
    run("createLink", url);
    setLinkOpen(false);
  }

  function showSource() {
    const next = cleanEditorHtml(editorRef.current?.innerHTML ?? "");
    if (fieldRef.current) fieldRef.current.value = next;
    modeRef.current = "html";
    setMode("html");
    setLinkOpen(false);
  }

  function showVisual() {
    const next = cleanEditorHtml(fieldRef.current?.value ?? "");
    if (editorRef.current) editorRef.current.innerHTML = next || "<p><br></p>";
    if (fieldRef.current) fieldRef.current.value = next;
    modeRef.current = "visual";
    setMode("visual");
  }

  function onPaste(event: ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();
    const html = event.clipboardData.getData("text/html");
    const text = event.clipboardData.getData("text/plain");
    const fragment = prepareEditorHtml(html || text);
    if (!fragment) return;
    restoreRange();
    document.execCommand("insertHTML", false, fragment);
    syncVisual();
  }

  return (
    <div className="rte">
      <div className="rte__bar" role="toolbar" aria-label="Article formatting">
        <select
          aria-label="Text style"
          value={block}
          onChange={(event) => formatBlock(event.target.value)}
        >
          {BLOCKS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button type="button" aria-pressed={bold} onMouseDown={(event) => event.preventDefault()} onClick={() => run("bold")}>
          Bold
        </button>
        <button type="button" aria-pressed={italic} onMouseDown={(event) => event.preventDefault()} onClick={() => run("italic")}>
          Italic
        </button>
        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => run("insertUnorderedList")}>
          Bullets
        </button>
        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => run("insertOrderedList")}>
          Numbered
        </button>
        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => setLinkOpen((open) => !open)}>
          Link
        </button>
        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => run("unlink")}>
          Unlink
        </button>
        <button type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => run("removeFormat")}>
          Clear
        </button>
        {mode === "visual" ? (
          <button type="button" className="rte__mode" onClick={showSource}>
            HTML
          </button>
        ) : (
          <button type="button" className="rte__mode" onClick={showVisual}>
            Visual
          </button>
        )}
      </div>
      {linkOpen ? (
        <div className="rte__link">
          <input
            aria-label="Link address"
            value={linkUrl}
            onChange={(event) => setLinkUrl(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                applyLink();
              }
            }}
            placeholder="https:// or /contact"
          />
          <button type="button" onClick={applyLink}>
            Apply link
          </button>
          {linkMessage ? <p className="rte__link-error">{linkMessage}</p> : null}
        </div>
      ) : null}
      <div
        ref={editorRef}
        className="rte__surface"
        contentEditable={mode === "visual"}
        role="textbox"
        aria-multiline="true"
        aria-label="Content"
        hidden={mode !== "visual"}
        suppressContentEditableWarning
        onPaste={onPaste}
        onInput={syncVisual}
        onFocus={() => document.execCommand("defaultParagraphSeparator", false, "p")}
      />
      <textarea
        ref={fieldRef}
        name="body"
        className="rte__source"
        aria-label="Content HTML"
        hidden={mode !== "html"}
        defaultValue={seed.current}
        spellCheck={mode === "html"}
      />
      <p className="rte__hint">
        This is the article readers see. Headings, lists, bold, italic, quotes, and links are kept. HTML is only for a
        stubborn link or heading.
      </p>
    </div>
  );
}
