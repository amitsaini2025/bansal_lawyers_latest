# Connect Grokbot to the blog

Grokbot can add blog posts by calling one private endpoint. Published posts appear on `/blog`. Drafts stay in `/admin/blogs` until a staff member publishes them.

The existing articles under `app/blog/<slug>/page.tsx` and `lib/blog-data.ts` stay as they are. New posts are rows in the MySQL `blogs` table. The public list and `/blog/[slug]` read published rows from that table.

## Production setup

1. Deploy this code, rebuild the Next.js app, and restart it.
2. Use the same MySQL database the admin already uses. The `blogs` table must exist there.
3. Add this to the server environment, next to the MySQL settings. Do not commit the real value, and do not put it in a `NEXT_PUBLIC_` variable.

```env
BLOG_INGEST_SECRET=paste-a-long-random-string-here
```

Generate the secret on the server:

```bash
openssl rand -hex 32
```

4. Restart the app after saving the variable.
5. Open `https://www.bansallawyers.com.au/api/blog/ingest`.

A working setup returns:

```json
{"ok":true,"endpoint":"/api/blog/ingest","method":"POST","update":"PATCH /api/blog/ingest/{id-or-slug}","delete":"DELETE /api/blog/ingest/{id-or-slug}","configured":true}
```

`"configured": false` means the secret is missing or the app was not restarted.

## Grokbot request

- Method: `POST`
- URL: `https://www.bansallawyers.com.au/api/blog/ingest`
- Header: `Authorization: Bearer <BLOG_INGEST_SECRET>`
- Header: `Content-Type: application/json`

```json
{
  "title": "Section 501 visa cancellation in Melbourne",
  "category": "Immigration Law",
  "short_description": "What a cancellation notice means and what to do before the deadline.",
  "body": "<h2>What the notice means</h2><p>A cancellation notice gives a deadline. Read the date on the letter, collect the documents it asks for, and get advice before you answer. This is general information for people in Melbourne, not advice about one visa.</p>",
  "status": "draft"
}
```

`slug` is optional. If it is omitted, the site builds one from the title.

Use a category name that already exists when the post should be grouped: Family Law, Immigration Law, Commercial Law, Property Law, Administrative Law, Civil & Estate Law, or Legal Practice.

`"status": "draft"` keeps the post off the public site. Open it in `/admin/blogs`, check it, and set status to Published. It then appears at `/blog/<slug>`.

Send `"status": "published"` only when the post should go live with no review. `publish: true` does the same thing.

## Update a database post

Grokbot can change a post it created, or any other row in the `blogs` table. Use the numeric `id` from the create response, or the post `slug`.

- Method: `PATCH` (a `POST` to the same URL does the same thing)
- URL: `https://www.bansallawyers.com.au/api/blog/ingest/<id-or-slug>`
- Header: `Authorization: Bearer <BLOG_INGEST_SECRET>`
- Header: `Content-Type: application/json`

Send only the fields that should change. Omitted fields stay as they are. Omitting `status` does not publish or unpublish the post.

```json
{
  "title": "Section 501 visa cancellation: what to do in Melbourne",
  "short_description": "How to read a cancellation notice and what to prepare before the deadline.",
  "body": "<h2>What the notice means</h2><p>A cancellation notice gives a deadline. Read the date on the letter, collect the documents it asks for, and get advice before you answer. This is general information for people in Melbourne, not advice about one visa.</p>"
}
```

A number in the URL is always the database id. Use the slug in the URL when the id is not known. A slug made only of digits would be read as an id, so avoid those.

A title still needs at least 8 characters. A new body still needs at least 80 characters of text. The same HTML tags are kept. A new slug that matches a page built into the site, or another database post, is rejected.

`200` returns the same `id`, `slug`, `status`, `publicUrl`, and `adminUrl` fields as a new draft. `404` means that id or slug is not a database post.

## Delete a database post

- Method: `DELETE`
- URL: `https://www.bansallawyers.com.au/api/blog/ingest/<id-or-slug>`
- Header: `Authorization: Bearer <BLOG_INGEST_SECRET>`

No JSON body is required. This removes that row. If the post was published, it leaves `/blog` immediately. Articles that are files in the site cannot be deleted this way; those requests return `404`.

`200`:

```json
{
  "ok": true,
  "id": 123,
  "slug": "section-501-visa-cancellation-in-melbourne",
  "deleted": true
}
```

## Success response

`201`:

```json
{
  "ok": true,
  "id": 123,
  "slug": "section-501-visa-cancellation-in-melbourne",
  "status": "draft",
  "publicUrl": null,
  "adminUrl": "/admin/blogs/123"
}
```

`publicUrl` is set only when the post is published.

## Errors

| Status | Meaning |
| --- | --- |
| 400 | Title, body, slug, or category is not usable, or an update sent no fields. Title needs at least 8 characters. Body needs at least 80 characters of text. |
| 401 | The bearer token does not match `BLOG_INGEST_SECRET`. |
| 404 | Update or delete could not find that id or slug in the `blogs` table. |
| 409 | That slug is already used, or it belongs to an article built into the site. Choose another slug. |
| 503 | The secret is not set, or MySQL is not available. |

## Code

- `app/api/blog/ingest/route.ts` receives a new post.
- `app/api/blog/ingest/[ref]/route.ts` updates or deletes a database post by id or slug.
- `lib/blog/ingest.ts` checks the secret and the JSON.
- `lib/blog/store.ts` writes the `blogs` row and reads published posts.
- `app/blog/page.tsx` and `app/blog/[slug]/page.tsx` show published database posts.
- `app/sitemap.ts` adds those published URLs.

HTML is reduced to `p`, `br`, `h2`, `h3`, `h4`, `ul`, `ol`, `li`, `strong`, `em`, `a`, and `blockquote`. Scripts and other tags are removed. Plain text is turned into paragraphs.
