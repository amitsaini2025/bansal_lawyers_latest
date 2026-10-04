import type { ProcessItem } from "@/types/content";

export function ProcessSteps({ items }: { items: ProcessItem[] }) {
  const columnClass = items.length === 3 ? "process-grid--three" : "process-grid--four";

  return (
    <ol className={`process-grid ${columnClass}`}>
      {items.map((item, index) => {
        // Strip duplicate numeric prefixes like "1. ", "2. "
        const cleanTitle = item.title.replace(/^0?\d+\.\s*/, "");
        return (
          <li key={`${item.title}-${index}`} className="process-card">
            <div className="process-card__header">
              <span className="process-number">{index + 1}</span>
            </div>
            <h3 className="process-card__title">{cleanTitle}</h3>
            <p className="process-card__description">{item.description}</p>
          </li>
        );
      })}
    </ol>
  );
}
