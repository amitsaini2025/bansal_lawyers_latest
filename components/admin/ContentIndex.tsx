import Link from "next/link";
import { Flash, Pager, queryHref } from "@/components/admin/AdminBits";
import { listBlogs, listCases, listCategories, listPages } from "@/lib/admin/data";
import { formatWhen, publishLabel } from "@/lib/admin/labels";

const loaders = {
  blogs: listBlogs,
  categories: listCategories,
  pages: listPages,
  cases: listCases,
} as const;

export async function ContentIndex({
  kind,
  title,
  path,
  search,
  page,
  notice,
  error,
  hint,
}: {
  kind: keyof typeof loaders;
  title: string;
  path: string;
  search: string;
  page: number;
  notice?: string;
  error?: string;
  hint: string;
}) {
  const result = await loaders[kind](search, page);
  return (
    <>
      <div className="admin-toolbar">
        <div>
          <h1>{title}</h1>
          <p className="admin-lead">{hint}</p>
        </div>
        <Link className="admin-link-button" href={`${path}/new`}>Add new</Link>
      </div>
      <Flash notice={notice} error={error || result.error} />
      <form className="admin-filters" action={path}>
        <label>
          Search
          <input name="q" defaultValue={search} />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {result.rows.length === 0 ? (
              <tr><td colSpan={4}>Nothing found.</td></tr>
            ) : result.rows.map((row) => (
              <tr key={String(row.id)}>
                <td><Link href={`${path}/${row.id}`}>{String(row.title || row.name || "Untitled")}</Link></td>
                <td>{String(row.slug || row.alias || "—")}</td>
                <td>{row.status == null || row.status === "" ? "—" : publishLabel(Number(row.status))}</td>
                <td>{formatWhen(row.updated_at || row.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pager page={result.page} pages={result.pages} hrefFor={(next) => queryHref(path, { q: search }, next)} />
    </>
  );
}
