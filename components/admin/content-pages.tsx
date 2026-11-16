import { ContentIndex } from "@/components/admin/ContentIndex";
import { messageOf } from "@/components/admin/AdminBits";
import { pageNumber, searchTerm } from "@/lib/admin/labels";

const sections = {
  blogs: {
    kind: "blogs",
    title: "Blog posts",
    path: "/admin/blogs",
    hint: "Published posts appear on the public blog. Posts sent by Grok stay drafts until you publish them.",
  },
  categories: {
    kind: "categories",
    title: "Blog categories",
    path: "/admin/blog-categories",
    hint: "Categories used to group blog posts.",
  },
} as const;

export function contentListPage(section: keyof typeof sections) {
  const config = sections[section];
  return async function Page({
    searchParams,
  }: {
    searchParams: Promise<{ q?: string | string[]; page?: string | string[]; notice?: string | string[]; error?: string | string[] }>;
  }) {
    const query = await searchParams;
    return (
      <ContentIndex
        kind={config.kind}
        title={config.title}
        path={config.path}
        hint={config.hint}
        search={searchTerm(query.q)}
        page={pageNumber(query.page)}
        notice={messageOf(query.notice)}
        error={messageOf(query.error)}
      />
    );
  };
}
