import { saveContentAction, deleteContentAction } from "@/lib/admin/actions";
import { ConfirmForm } from "@/components/admin/ConfirmForm";
import { BlogPhotoField } from "@/components/admin/BlogPhotoField";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { DEFAULT_BLOG_IMAGE } from "@/lib/blog/store";

export function ContentEditor({
  table,
  kind,
  record,
  categories = [],
}: {
  table: "blogs" | "blog_categories";
  kind: "blog" | "category";
  record: Record<string, unknown> | null;
  categories?: { id: number; name: string }[];
}) {
  const slug = String(record?.slug ?? record?.alias ?? "");
  const title = String(record?.title ?? record?.name ?? "");

  return (
    <div className="admin-form">
    <form action={saveContentAction} className="admin-form admin-form--inner" encType="multipart/form-data">
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
      <label>
        Status
        <select name="status" defaultValue={Number(record?.status) === 1 ? "1" : "0"}>
          <option value="1">Published</option>
          <option value="0">Draft</option>
        </select>
      </label>
      {kind === "blog" ? <BlogPhotoField {...blogPhoto(record)} /> : null}
      {kind === "blog" ? (
        <label>
          Short description
          <textarea name="short_description" rows={3} defaultValue={String(record?.short_description ?? "")} maxLength={255} />
        </label>
      ) : null}
      {kind === "blog" ? (
        <div className="rte-field">
          <span className="rte-field__label">Content</span>
          <RichTextEditor initialHtml={String(record?.description ?? "")} />
        </div>
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
      {kind === "blog" ? (
        <p className="admin-note">
          Published blog posts saved here appear on the public blog. New Grok posts arrive as drafts until you set status to Published.
        </p>
      ) : null}
    </div>
  );
}

function blogPhoto(record: Record<string, unknown> | null) {
  const paths = ["featured_image", "image", "thumbnail", "image_src"].map((key) => String(record?.[key] ?? ""));
  const src =
    paths.find((value) => value.startsWith("/images/blog/uploads/") && !value.endsWith("-thumb.webp")) ||
    paths.find((value) => value.startsWith("/images/") && value !== DEFAULT_BLOG_IMAGE) ||
    "";
  return { currentSrc: src, hasCustomPhoto: Boolean(src) };
}
