# Bansal Lawyers website

Next.js App Router website with server-rendered page content and small client components for navigation and forms. Use Node.js 24 LTS and npm.

## Development and checks

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

The framework's installed documentation lives in `node_modules/next/dist/docs/`. This version uses `retry`, rather than `reset`, in route error boundaries.

## UI and content boundaries

- `app/globals.css` retains the original styles and the appointment-booking placeholder.
- `app/refinements.css` contains navigation repairs and scoped page refinements.
- `components/layout/MainContent.tsx` excludes blog, legal-policy, recent-case listing and case-detail pages from page refinements.
- Existing page wording, form labels, consent wording, images and route paths are retained. Only contact delivery/error states add operational messages.
- The appointment panel remains a dummy for later booking-platform integration. It is independent of the contact form.

## Contact delivery setup

Copy `.env.example` to `.env.local` for local configuration; set the same server-only variables in the deployment host. Do not commit credentials or prefix delivery variables with `NEXT_PUBLIC_`.

- `CONTACT_FORM_WEBHOOK_URL`: HTTPS endpoint belonging to the approved email/form service or your own backend.
- `CONTACT_FORM_WEBHOOK_TOKEN`: optional bearer token required by that endpoint. Use an authenticated receiver for production.

The receiver gets JSON containing `name`, `email`, `phone`, `subject`, `matterType`, `message`, and `consent`. It must return 2xx only after accepting responsibility for delivery to the firm's inbox. Provider-specific field mappings belong in the receiver. No browser credentials, third-party scripts or direct browser submission are required.

Until configured, `/api/contact` returns 503. The form retains entered values and offers existing phone/email channels. It never displays a successful-delivery message for an unavailable or failed receiver.

The endpoint enforces same-origin JSON submissions, bounded request sizes, field validation, explicit consent, a honeypot, delivery timeouts, no redirects and a 20-request/minute per-process limit. It does not persist or log enquiry data. The receiver must handle enquiry data as confidential, implement its own spam protection and deliver reliably.

**Before launch:** configure distributed rate limiting at the hosting/service layer (the in-memory safety limit is not shared across instances), set secrets through the host, then test actual inbox delivery and failures in staging. No real provider credentials or live delivery were available during local verification.

## Security and release checks

Security headers disallow embedded objects, foreign base URLs, inline event attributes and cross-origin form actions; framing and opener restrictions also apply. This is a focused policy compatible with existing static rendering and inline styles, not a nonce-based restriction of all scripts. Review the policy when adding future booking scripts or changing embedding requirements.

Before release, verify mobile navigation at 320/375/390/430/768px, desktop navigation at 1024/1280px, Escape/Tab behavior, in-page links, form failure/success states, and the deferred editorial pages. Use a production preview for performance checks and validate Safari/iOS on real devices. No SEO work is part of these UI changes.
