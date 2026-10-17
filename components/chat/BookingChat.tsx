"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { TurnstileWidget } from "@/components/booking/TurnstileWidget";
import "./booking-chat.css";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  reply?: string;
  suggestions?: string[];
  draft?: Record<string, unknown>;
  needsTurnstile?: boolean;
  pendingBooking?: Record<string, unknown> | null;
  checkoutUrl?: string | null;
  booked?: boolean;
  message?: string;
}

export function BookingChat({ turnstileSiteKey }: { turnstileSiteKey?: string | null }) {
  const pathname = usePathname();
  const titleId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [draft, setDraft] = useState<Record<string, unknown>>({});
  const [pendingBooking, setPendingBooking] = useState<Record<string, unknown> | null>(null);
  const [needsTurnstile, setNeedsTurnstile] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onBookingPage = pathname.startsWith("/book-an-appointment");

  useEffect(() => {
    if (!open || started) return;
    setStarted(true);
    void send("", []);
    // The greeting is loaded once, the first time the panel opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, started]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const thread = threadRef.current;
    if (thread) thread.scrollTop = thread.scrollHeight;
  }, [messages, busy, suggestions, checkoutUrl]);

  async function send(nextText: string, history: ChatMessage[], token = "") {
    setBusy(true);
    setError(null);
    setCheckoutUrl(null);
    try {
      const response = await fetch("/api/chat/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "chat",
          text: nextText,
          messages: history,
          draft,
          turnstileToken: token,
        }),
      });
      const data = (await response.json()) as ChatResponse;
      if (!response.ok) {
        setError(data.message || "Please try again in a moment.");
        return;
      }
      applyResponse(data, nextText, history);
    } catch {
      setError("The booking assistant is unavailable. Please use the appointment form or call 0422 905 860.");
    } finally {
      setBusy(false);
    }
  }

  function applyResponse(data: ChatResponse, nextText: string, history: ChatMessage[]) {
    const reply = data.reply || "How can I help you book a consultation?";
    const assistant = { role: "assistant" as const, content: reply };
    const nextHistory = nextText
      ? [...history, { role: "user" as const, content: nextText }, assistant]
      : history.length === 0
        ? [assistant]
        : [...history, assistant];
    setMessages(nextHistory);
    setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
    if (data.draft && typeof data.draft === "object") setDraft(data.draft);
    setPendingBooking(data.pendingBooking ?? null);
    setNeedsTurnstile(data.needsTurnstile === true);
    setCheckoutUrl(data.checkoutUrl ?? null);
    if (data.booked) setTurnstileToken("");
  }

  async function confirmBooking(token: string) {
    if (!pendingBooking) return;
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/chat/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "confirm", booking: pendingBooking, turnstileToken: token }),
      });
      const data = (await response.json()) as ChatResponse;
      if (!response.ok) {
        setError(data.message || "Please try again in a moment.");
        return;
      }
      applyResponse(data, "", messages);
      if (!data.needsTurnstile) setPendingBooking(null);
    } catch {
      setError("The booking could not be confirmed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  function submitText(value: string) {
    const trimmed = value.trim();
    if (!trimmed || busy) return;
    setText("");
    setSuggestions([]);
    void send(trimmed, messages, turnstileToken);
  }

  return (
    <div className={`booking-chat${onBookingPage ? " booking-chat--on-form" : ""}`}>
      {open && (
        <section className="booking-chat__panel" role="dialog" aria-modal="false" aria-labelledby={titleId}>
          <header className="booking-chat__header">
            <div>
              <p className="booking-chat__eyebrow">Bansal Lawyers</p>
              <h2 id={titleId}>Chat with us</h2>
            </div>
            <button type="button" className="booking-chat__close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>

          <div className="booking-chat__thread" ref={threadRef} aria-live="polite">
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={`booking-chat__message booking-chat__message--${message.role}`}>
                {message.content}
              </p>
            ))}
            {busy && <p className="booking-chat__message booking-chat__message--assistant">One moment…</p>}
          </div>

          {checkoutUrl && (
            <a className="booking-chat__pay" href={checkoutUrl}>
              Continue to secure payment
            </a>
          )}

          {suggestions.length > 0 && !busy && (
            <div className="booking-chat__suggestions">
              {suggestions.map((suggestion) => (
                <button key={suggestion} type="button" onClick={() => submitText(suggestion)}>
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {needsTurnstile && turnstileSiteKey && (
            <div className="booking-chat__security">
              <TurnstileWidget siteKey={turnstileSiteKey} onToken={setTurnstileToken} />
              <button type="button" disabled={!turnstileToken || busy} onClick={() => void confirmBooking(turnstileToken)}>
                Confirm booking
              </button>
            </div>
          )}

          {error && <p className="booking-chat__error">{error}</p>}

          <form
            className="booking-chat__form"
            onSubmit={(event) => {
              event.preventDefault();
              submitText(text);
            }}
          >
            <label className="sr-only" htmlFor="booking-chat-input">
              Message the assistant
            </label>
            <textarea
              id="booking-chat-input"
              ref={inputRef}
              rows={2}
              value={text}
              placeholder="Type your message"
              onChange={(event) => setText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  submitText(text);
                }
              }}
            />
            <button type="submit" disabled={busy || !text.trim()}>
              Send
            </button>
          </form>
          <p className="booking-chat__note">Ask a question, or book a consultation. This chat does not give legal advice.</p>
        </section>
      )}

      <button
        type="button"
        className="booking-chat__launcher"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Chat with us"}
      </button>
    </div>
  );
}
