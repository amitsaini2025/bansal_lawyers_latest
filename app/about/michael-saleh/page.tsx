import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { StructuredData } from "@/components/seo";
import { PractitionerProfile } from "@/components/team/PractitionerProfile";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Michael Saleh | Solicitor | Bansal Lawyers Melbourne",
  description: "Profile of Michael Saleh, Solicitor at Bansal Lawyers Melbourne. Admitted to the Supreme Court of Victoria with experience in criminal defence, family law, civil litigation and commercial disputes.",
  path: "/about/michael-saleh",
  keywords: ["Michael Saleh", "Michael Saleh Solicitor", "Michael Saleh Lawyer Melbourne", "Criminal Lawyer Michael Saleh", "Family Lawyer Michael Saleh", "Bansal Lawyers Solicitor"],
});

export default function MichaelSalehProfilePage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Michael Saleh" }];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <PractitionerProfile
        name="Michael Saleh"
        role="Solicitor"
        image="/images/team/michael-saleh-solicitor.png"
        imageAlt="Michael Saleh - Solicitor at Bansal Lawyers"
        summary="A solicitor and court advocate with experience across Victorian courts, tribunals, civil litigation, and criminal defence."
        credentials={[
          { label: "Admission", value: "Supreme Court of Victoria" },
          { label: "Education", value: "Bachelor of Laws, GDLP" },
          { label: "Languages", value: "English, Arabic" },
          { label: "Consultations", value: "In-person and virtual" },
        ]}
        trustItems={["Supreme Court of Victoria Admitted", "Magistrates' Court & FCFCOA Advocacy", "VCAT Dispute Resolution Experience", "Direct Practitioner Representation"]}
        biography={[
          "Michael Saleh is a solicitor at Bansal Lawyers. He is admitted to the Supreme Court of Victoria and holds a Bachelor of Laws and a Graduate Diploma of Legal Practice.",
          "Michael has experience across criminal defence, family law, civil litigation, and commercial disputes. He has appeared in the Magistrates’ Court of Victoria, the Federal Circuit and Family Court of Australia, and the Victorian Civil and Administrative Tribunal.",
          "His work involves helping clients understand legal documents, court processes, dispute strategy, and practical next steps. Michael takes a clear and measured approach when advising clients, especially in matters involving stress, urgency, or uncertainty.",
        ]}
        focusAreas={[
          { title: "Criminal defence & bail", description: "Police interview guidance, bail applications, traffic offences, assault, and court representation." },
          { title: "Family law & parenting", description: "Parenting orders, child custody disputes, intervention orders, and financial settlements." },
          { title: "Civil litigation & disputes", description: "Contract claims, debt disputes, court documents, and settlement negotiations." },
          { title: "Tribunals & VCAT", description: "VCAT hearings, tenancy disputes, and merits advocacy." },
        ]}
        ctaText="Schedule a Consultation With Michael Saleh"
      />
    </>
  );
}
