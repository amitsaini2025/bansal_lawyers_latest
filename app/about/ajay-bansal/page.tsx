import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { StructuredData } from "@/components/seo";
import { AjayBansalProfile } from "@/components/team/AjayBansalProfile";
import { createMetadata } from "@/lib/metadata";
import { createAjayBansalPageGraphSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Indian Lawyer Melbourne | Hindi & Punjabi Speaking Lawyer | Ajay Bansal",
  description:
    "Looking for the best Indian lawyer in Melbourne? Bansal Lawyers assists with family, criminal, civil, commercial and other legal matters. Contact our team to discuss your needs.",
  path: "/about/ajay-bansal",
  keywords: ["Ajay Bansal", "Ajay Bansal Lawyer Melbourne", "Principal Lawyer Bansal Lawyers", "Immigration Lawyer Ajay Bansal", "Melbourne Solicitor Ajay Bansal", "Bansal Lawyers Director"],
});

export default function AjayBansalProfilePage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Ajay Bansal" }];

  return (
    <>
      <StructuredData data={createAjayBansalPageGraphSchema()} />
      <Breadcrumbs items={breadcrumbs} />
      <AjayBansalProfile />
    </>
  );
}
