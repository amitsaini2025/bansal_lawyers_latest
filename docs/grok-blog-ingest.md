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
{"ok":true,"endpoint":"/api/blog/ingest","method":"POST","configured":true}
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
  "body": "<h2>What the notice means</h2><p>Write the article here. Plain text is also accepted.</p>",
  "status": "draft"
}
```

`slug` is optional. If it is omitted, the site builds one from the title.

Use a category name that already exists when the post should be grouped: Family Law, Immigration Law, Commercial Law, Property Law, Administrative Law, Civil & Estate Law, or Legal Practice.

`"status": "draft"` keeps the post off the public site. Open it in `/admin/blogs`, check it, and set status to Published. It then appears at `/blog/<slug>`.

Send `"status": "published"` only when the post should go live with no review. `publish: true` does the same thing.

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
| 400 | Title, body, or slug is not usable. Title needs at least 8 characters. Body needs at least 80 characters of text. |
| 401 | The bearer token does not match `BLOG_INGEST_SECRET`. |
| 409 | That slug is already used, or it belongs to an article built into the site. Choose another slug. |
| 503 | The secret is not set, or MySQL is not available. |

## Code

- `app/api/blog/ingest/route.ts` receives the post.
- `lib/blog/ingest.ts` checks the secret and the JSON.
- `lib/blog/store.ts` writes the `blogs` row and reads published posts.
- `app/blog/page.tsx` and `app/blog/[slug]/page.tsx` show published database posts.
- `app/sitemap.ts` adds those published URLs.

HTML is reduced to `p`, `br`, `h2`, `h3`, `h4`, `ul`, `ol`, `li`, `strong`, `em`, `a`, and `blockquote`. Scripts and other tags are removed. Plain text is turned into paragraphs.
