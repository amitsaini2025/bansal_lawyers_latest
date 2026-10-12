import { saveContentAction, deleteContentAction } from "@/lib/admin/actions";
import { ConfirmForm } from "@/components/admin/ConfirmForm";

export function ContentEditor({
  table,
  kind,
  record,
  categories = [],
}: {
  table: "blogs" | "blog_categories" | "cms_pages" | "recent_cases";
  kind: "blog" | "category" | "page" | "case";
  record: Record<string, unknown> | null;
  categories?: { id: number; name: string }[];
}) {
  const slug = String(record?.slug ?? record?.alias ?? "");
  const title = String(record?.title ?? record?.name ?? "");

  return (
    <div className="admin-form">
    <form action={saveContentAction} className="admin-form admin-form--inner">
      <input type="hidden" name="table" value={table} />
      {record ? <input type="hidden" name="id" value={String(record.id)} /> : null}
      <label>
        {kind === "category" ? "Name" : "Title"}
        <input name={kind === "category" ? "name" : "title"} defaultValue={title} required maxLength={250} />
      </label>
      <label>
        Slug
        <input name="slug" defaultValue={slug} maxLength={180} placeholder="Generated from the title if left blank" />
      </label>
      {kind === "blog" ? (
        <label>
          Category
          <select name="parent_category" defaultValue={String(record?.parent_category ?? "")}>
            <option value="">None</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      {kind === "category" ? (
        <label>
          Parent category
          <select name="parent_id" defaultValue={String(record?.parent_id ?? "0")}>
            <option value="0">None</option>
            {categories
              .filter((category) => category.id !== Number(record?.id))
              .map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </label>
      ) : null}
      {kind !== "case" ? (
        <label>
          Status
          <select name="status" defaultValue={String(record?.status ?? 0) === "1" ? "1" : "0"}>
            <option value="1">Published</option>
            <option value="0">Draft</option>
          </select>
        </label>
      ) : null}
      {kind === "blog" || kind === "page" ? (
        <label>
          Short description
          <textarea name="description" rows={3} defaultValue={String(record?.description ?? "")} maxLength={2000} />
        </label>
      ) : null}
      {kind === "page" ? (
        <>
          <label>
            Meta title
            <input name="meta_title" defaultValue={String(record?.meta_title ?? "")} maxLength={250} />
          </label>
          <label>
            Meta description
            <textarea name="meta_description" rows={3} defaultValue={String(record?.meta_description ?? "")} maxLength={500} />
          </label>
        </>
      ) : null}
      {kind !== "category" ? (
        <label>
          Content
          <textarea name="content" rows={16} defaultValue={String(record?.content ?? "")} />
        </label>
      ) : null}
      <button type="submit">{record ? "Save changes" : "Create"}</button>
    </form>
      {record ? (
        <ConfirmForm action={deleteContentAction} message="Delete this record? This cannot be undone.">
          <input type="hidden" name="table" value={table} />
          <input type="hidden" name="id" value={String(record.id)} />
          <button type="submit" className="admin-button--danger">
            Delete
          </button>
        </ConfirmForm>
      ) : null}
      {kind !== "category" ? (
        <p className="admin-note">
          Blog posts, CMS pages and case studies saved here update the shared database. The public pages on this
          website are still the pages built into the site, so a change here does not rewrite those pages.
        </p>
      ) : null}
    </div>
  );
}
