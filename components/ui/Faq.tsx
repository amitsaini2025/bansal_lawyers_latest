import type { FaqItem } from "@/types/content";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={`${item.question}-${index}`}>
          <summary>{item.question}</summary>
          <div>{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
