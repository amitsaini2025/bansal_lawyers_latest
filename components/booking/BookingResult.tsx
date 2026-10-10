import Link from "next/link";
import type { ReactNode } from "react";

const ICONS = {
  check: ["M20 6 9 17l-5-5"],
  alert: ["M12 9v4", "M12 17h.01", "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"],
} as const;

export interface BookingResultProps {
  tone: "success" | "warning";
  title: string;
  message: ReactNode;
  rows?: [string, string][];
  footer?: ReactNode;
  action: { href: string; label: string };
}

/** Outcome card shown after returning from the payment page, styled like the wizard's confirmation step. */
export function BookingResult({ tone, title, message, rows, footer, action }: BookingResultProps) {
  return (
    <div className="appt">
      <div className="appt-card">
        <div className="appt-panel-wrap">
          <section className={`appt-panel appt-success${tone === "warning" ? " appt-success--warning" : ""}`} role="status">
            <span className="appt-success__icon">
              <svg className="appt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[tone === "success" ? "check" : "alert"].map((d) => <path key={d} d={d} />)}
              </svg>
            </span>
            <h2 className="appt-panel__title">{title}</h2>
            <p className="appt-panel__subtitle">{message}</p>
            {rows && rows.length > 0 && (
              <dl className="appt-summary">
                {rows.map(([label, value]) => (
                  <div key={label} className="appt-summary__row">
                    <dt>{label}</dt>
                    <dd>{value || "—"}</dd>
                  </div>
                ))}
              </dl>
            )}
            {footer && <p className="appt-legal">{footer}</p>}
            <div className="appt-actions">
              <Link href={action.href} className="button button--primary">{action.label}</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
