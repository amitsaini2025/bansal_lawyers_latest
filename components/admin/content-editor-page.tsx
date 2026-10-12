import Link from "next/link";
import { notFound } from "next/navigation";
import { Flash, messageOf } from "@/components/admin/AdminBits";
import { ContentEditor } from "@/components/admin/ContentEditor";
import { categoryOptions, getRecord } from "@/lib/admin/data";
import { positiveId } from "@/lib/admin/labels";

const editors = {
  blog: { table: "blogs", kind: "blog", list: "/admin/blogs", title: "Blog post" },
  category: { table: "blog_categories", kind: "category", list: "/admin/blog-categories", title: "Blog category" },
  page: { table: "cms_pages", kind: "page", list: "/admin/pages", title: "CMS page" },
  case: { table: "recent_cases", kind: "case", list: "/admin/cases", title: "Case study" },
} as const;

export function contentEditorPage(section: keyof typeof editors, mode: "new" | "edit") {
  const config = editors[section];
  return async function Page({
    params,
    searchParams,
  }: {
    params?: Promise<{ id: string }>;
    searchParams: Promise<{ notice?: string | string[]; error?: string | string[] }>;
  }) {
    const query = await searchParams;
    let record: Record<string, unknown> | null = null;
    if (mode === "edit") {
      const id = positiveId((await params)?.id ?? "");
      if (!id) notFound();
      const loaded = await getRecord(config.table, id);
      if (!loaded.row) notFound();
      record = loaded.row;
    }
    const categories = config.kind === "blog" || config.kind === "category" ? await categoryOptions() : [];

    return (
      <>
        <p><Link href={config.list}>Back to {config.title.toLowerCase()}s</Link></p>
        <h1>{record ? `Edit ${config.title.toLowerCase()}` : `New ${config.title.toLowerCase()}`}</h1>
        <Flash notice={messageOf(query.notice)} error={messageOf(query.error)} />
        <ContentEditor table={config.table} kind={config.kind} record={record} categories={categories} />
      </>
    );
  };
}
