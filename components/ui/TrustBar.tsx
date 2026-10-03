import { Container } from "@/components/layout/Container";

function getTrustIcon(text: string) {
  const lower = text.toLowerCase();

  // 1. Direct Solicitor Contact / Communication / Call / Counsel
  if (
    lower.includes("solicitor contact") ||
    lower.includes("solicitor communication") ||
    lower.includes("direct solicitor") ||
    lower.includes("phone") ||
    lower.includes("urgent consultation") ||
    lower.includes("urgent appointment") ||
    lower.includes("urgent response")
  ) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  // 2. Team / Multidisciplinary / Multilingual / Partnership / Family
  if (
    lower.includes("team") ||
    lower.includes("multidisciplinary") ||
    lower.includes("multilingual") ||
    lower.includes("partner") ||
    lower.includes("parenting") ||
    lower.includes("child-focused") ||
    lower.includes("founders")
  ) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  // 3. Location / Melbourne Legal Practice / Collins Street Chambers / Office
  if (
    lower.includes("melbourne") ||
    lower.includes("collins") ||
    lower.includes("office") ||
    lower.includes("chambers") ||
    lower.includes("cbd")
  ) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="6" y1="10" x2="6" y2="21" />
        <line x1="10" y1="10" x2="10" y2="21" />
        <line x1="14" y1="10" x2="14" y2="21" />
        <line x1="18" y1="10" x2="18" y2="21" />
        <path d="M12 3L2 10h20L12 3z" />
      </svg>
    );
  }

  // 4. Court / Tribunal / Advocacy / Litigation / Dispute
  if (
    lower.includes("court") ||
    lower.includes("tribunal") ||
    lower.includes("aat") ||
    lower.includes("art") ||
    lower.includes("fcfcoa") ||
    lower.includes("advocacy") ||
    lower.includes("litigation") ||
    lower.includes("dispute") ||
    lower.includes("representation")
  ) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v18" />
        <path d="M3 7h18" />
        <path d="M6 7l-3 6h6l-3-6z" />
        <path d="M18 7l-3 6h6l-3-6z" />
        <path d="M7 21h10" />
      </svg>
    );
  }

  // 5. Defence / Bail / Rights / Protection / Police
  if (
    lower.includes("defence") ||
    lower.includes("police") ||
    lower.includes("bail") ||
    lower.includes("protection") ||
    lower.includes("safety") ||
    lower.includes("violence")
  ) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  // 6. Contracts / Document Preparation / Lease / Review / Section 32 / Advice
  if (
    lower.includes("contract") ||
    lower.includes("document") ||
    lower.includes("review") ||
    lower.includes("lease") ||
    lower.includes("plain-english") ||
    lower.includes("advice") ||
    lower.includes("commentary") ||
    lower.includes("agreement")
  ) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    );
  }

  // Fallback: Law Firm Verified Shield
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function TrustBar({ items }: { items: string[] }) {
  return (
    <aside className="trust-bar" aria-label="Trust indicators">
      <Container>
        <ul>
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>
              <span className="trust-bar__icon-badge" aria-hidden="true">
                {getTrustIcon(item)}
              </span>
              <span className="trust-bar__label">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </aside>
  );
}
