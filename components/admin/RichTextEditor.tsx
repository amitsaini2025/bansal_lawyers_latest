"use client";

import { useEffect, useRef, useState } from "react";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import { TextAlign } from "@tiptap/extension-text-align";
import { cleanEditorHtml, prepareEditorHtml } from "@/lib/blog/html";

const BLOCKS: { value: string; label: string }[] = [
  { value: "p", label: "Paragraph" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "blockquote", label: "Quote" },
];

function allowedHref(value: string): boolean {
  const url = value.trim();
  if (url.startsWith("/") && !url.startsWith("//")) return true;
  if (/^https?:\/\//i.test(url)) return true;
  if (/^mailto:[^\s]+$/i.test(url)) return true;
  return false;
}

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function RichTextEditor({ initialHtml }: { initialHtml: string }) {
  const seed = useRef(prepareEditorHtml(initialHtml) || "<p></p>");
  const fieldRef = useRef<HTMLTextAreaElement>(null);
  const modeRef = useRef<"visual" | "html">("visual");
  const [mode, setMode] = useState<"visual" | "html">("visual");
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("https://");
  const [linkMessage, setLinkMessage] = useState("");
  const [tableOpen, setTableOpen] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [tableMessage, setTableMessage] = useState("");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        code: false,
        codeBlock: false,
        link: {
          openOnClick: false,
          autolink: false,
          protocols: ["http", "https", "mailto"],
          isAllowedUri: (url) => allowedHref(url),
          HTMLAttributes: {},
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "tableCell", "tableHeader"],
        alignments: ["left", "center", "right"],
      }),
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: seed.current,
    editorProps: {
      attributes: {
        "aria-label": "Content",
      },
    },
    onUpdate: ({ editor: current }) => {
      if (modeRef.current !== "visual" || !fieldRef.current) return;
      fieldRef.current.value = cleanEditorHtml(current.getHTML());
    },
  });

  const active = useEditorState({
    editor,
    selector: ({ editor: current }) => {
      if (!current) {
        return { block: "p", bold: false, italic: false, underline: false, strike: false };
      }
      const block = current.isActive("heading", { level: 2 })
        ? "h2"
        : current.isActive("heading", { level: 3 })
          ? "h3"
          : current.isActive("heading", { level: 4 })
            ? "h4"
            : current.isActive("blockquote")
              ? "blockquote"
              : "p";
      return {
        block,
        bold: current.isActive("bold"),
        italic: current.isActive("italic"),
        underline: current.isActive("underline"),
        strike: current.isActive("strike"),
      };
    },
  });

  useEffect(() => {
    const form = fieldRef.current?.form;
    if (!form) return;
    const onSubmit = () => {
      const field = fieldRef.current;
      if (!field) return;
      const raw = modeRef.current === "html" ? field.value : editor?.getHTML() ?? field.value;
      field.value = cleanEditorHtml(raw);
    };
    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, [editor]);

  function formatBlock(value: string) {
    if (!editor) return;
    const chain = editor.chain().focus();
    if (value === "h2" || value === "h3" || value === "h4") {
      chain.setHeading({ level: Number(value.slice(1)) as 2 | 3 | 4 }).run();
      return;
    }
    if (value === "blockquote") {
      chain.setBlockquote().run();
      return;
    }
    chain.setParagraph().run();
  }

  function applyLink() {
    if (!editor) return;
    const url = linkUrl.trim();
    if (!allowedHref(url)) {
      setLinkMessage("Use an https:// address, a /page path, or a mailto: address.");
      return;
    }
    setLinkMessage("");
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setLinkOpen(false);
  }

  function insertTable() {
    if (!editor) return;
    const rows = clamp(tableRows, 2, 8);
    const cols = clamp(tableCols, 2, 6);
    const inserted = editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
    if (!inserted) {
      setTableMessage("Click in the article, outside an existing table, then insert.");
      return;
    }
    setTableMessage("");
    setTableOpen(false);
  }

  function changeTable(action: "row" | "column" | "delete-row" | "delete-table") {
    if (!editor) return;
    const chain = editor.chain().focus();
    const ran =
      action === "row"
        ? chain.addRowAfter().run()
        : action === "column"
          ? chain.addColumnAfter().run()
          : action === "delete-row"
            ? chain.deleteRow().run()
            : chain.deleteTable().run();
    setTableMessage(ran ? "" : "Click inside a table first.");
  }

  function showSource() {
    const next = cleanEditorHtml(editor?.getHTML() ?? fieldRef.current?.value ?? "");
    if (fieldRef.current) fieldRef.current.value = next;
    modeRef.current = "html";
    setMode("html");
    setLinkOpen(false);
    setTableOpen(false);
  }

  function showVisual() {
    const next = cleanEditorHtml(fieldRef.current?.value ?? "");
    editor?.commands.setContent(next || "<p></p>", { emitUpdate: false });
    if (fieldRef.current) fieldRef.current.value = next;
    modeRef.current = "visual";
    setMode("visual");
  }

  return (
    <div className="rte">
      <div className="rte__bar" role="toolbar" aria-label="Article formatting">
        <select aria-label="Text style" value={active?.block ?? "p"} onChange={(event) => formatBlock(event.target.value)}>
          {BLOCKS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button type="button" aria-pressed={active?.bold ?? false} onClick={() => editor?.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button type="button" aria-pressed={active?.italic ?? false} onClick={() => editor?.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button type="button" aria-pressed={active?.underline ?? false} onClick={() => editor?.chain().focus().toggleUnderline().run()}>
          Underline
        </button>
        <button type="button" aria-pressed={active?.strike ?? false} onClick={() => editor?.chain().focus().toggleStrike().run()}>
          Strike
        </button>
        <button type="button" aria-label="Align left" onClick={() => editor?.chain().focus().setTextAlign("left").run()}>
          Left
        </button>
        <button type="button" aria-label="Align centre" onClick={() => editor?.chain().focus().setTextAlign("center").run()}>
          Centre
        </button>
        <button type="button" aria-label="Align right" onClick={() => editor?.chain().focus().setTextAlign("right").run()}>
          Right
        </button>
        <button type="button" onClick={() => editor?.chain().focus().setHorizontalRule().run()}>
          Line
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()}>
          Bullets
        </button>
        <button type="button" onClick={() => editor?.chain().focus().toggleOrderedList().run()}>
          Numbered
        </button>
        <button type="button" onClick={() => setLinkOpen((open) => !open)}>
          Link
        </button>
        <button type="button" onClick={() => editor?.chain().focus().unsetLink().run()}>
          Unlink
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().unsetAllMarks().clearNodes().run()}
        >
          Clear
        </button>
        <button
          type="button"
          aria-pressed={tableOpen}
          onClick={() => {
            setTableOpen((open) => !open);
            setTableMessage("");
          }}
        >
          Table
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
      {tableOpen ? (
        <div className="rte__table">
          <label>
            Rows
            <input
              aria-label="Table rows"
              type="number"
              min={2}
              max={8}
              value={tableRows}
              onChange={(event) => setTableRows(Number(event.target.value))}
              onKeyDown={(event) => {
                if (event.key === "Enter") event.preventDefault();
              }}
            />
          </label>
          <label>
            Columns
            <input
              aria-label="Table columns"
              type="number"
              min={2}
              max={6}
              value={tableCols}
              onChange={(event) => setTableCols(Number(event.target.value))}
              onKeyDown={(event) => {
                if (event.key === "Enter") event.preventDefault();
              }}
            />
          </label>
          <button type="button" onClick={insertTable}>
            Insert table
          </button>
          <button type="button" onClick={() => changeTable("row")}>
            Add row
          </button>
          <button type="button" onClick={() => changeTable("column")}>
            Add column
          </button>
          <button type="button" onClick={() => changeTable("delete-row")}>
            Delete row
          </button>
          <button type="button" onClick={() => changeTable("delete-table")}>
            Delete table
          </button>
          {tableMessage ? <p className="rte__link-error">{tableMessage}</p> : null}
        </div>
      ) : null}
      <EditorContent editor={editor} className="rte__surface" hidden={mode !== "visual"} />
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
        Used for both blog posts and success stories. Headings, lists, tables, bold, italic, underline, strike,
        alignment, quotes, and links are kept. The first table row is a header.
      </p>
    </div>
  );
}
