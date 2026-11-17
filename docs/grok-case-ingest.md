# Connect Grokbot to Success Stories

Grokbot can add a story by calling one private endpoint. It uses the same bearer token as the blog ingest (`BLOG_INGEST_SECRET`). Published stories appear on `/success-stories`. Drafts stay in `/admin/success-stories` until a staff member publishes them.

## Grokbot request

- Method: `POST`
- URL: `https://www.bansallawyers.com.au/api/success-stories/ingest`
- Header: `Authorization: Bearer <BLOG_INGEST_SECRET>`
- Header: `Content-Type: application/json`

```json
{
  "title": "When a tribunal copies the delegate's reasons",
  "category": "Immigration Law",
  "short_description": "A short note on why copied reasons can be a jurisdictional error.",
  "body": "<h2>What the court looked at</h2><p>Write the case update here. Plain text is also accepted. Keep it as general information, not advice for one person's matter.</p>",
  "status": "draft"
}
```

`slug` is optional. If it is omitted, the site builds one from the title.

`category` is the practice-area label on the card. Family Law, Immigration Law, Criminal Law, Commercial Law, Property Law, Civil & Estate Law, and Administrative Law match the labels already used on the site. `practice_area` is accepted as the same field.

`"status": "draft"` keeps the case off the public site. Open it in `/admin/success-stories`, check it, and set status to Published. It then appears at `/success-stories/<slug>`.

Send `"status": "published"` only when the case should go live with no review. `publish: true` does the same thing.

A working setup returns this from a GET with no token:

```json
{"ok":true,"endpoint":"/api/success-stories/ingest","method":"POST","configured":true}
```

`"configured": false` means `BLOG_INGEST_SECRET` is missing or the app was not restarted.

## Update a database case

- Method: `PATCH` (a `POST` to the same URL does the same thing)
- URL: `https://www.bansallawyers.com.au/api/success-stories/ingest/<id-or-slug>`
- Header: `Authorization: Bearer <BLOG_INGEST_SECRET>`

Send only the fields that should change. Omitting `status` does not publish or unpublish the case.

## Delete a database case

- Method: `DELETE`
- URL: `https://www.bansallawyers.com.au/api/success-stories/ingest/<id-or-slug>`
- Header: `Authorization: Bearer <BLOG_INGEST_SECRET>`

This removes that row. If the story was published, it leaves `/success-stories` immediately.

## Success response

`201` for a new case, `200` for an update:

```json
{
  "ok": true,
  "id": 123,
  "slug": "when-a-tribunal-copies-the-delegates-reasons",
  "status": "draft",
  "publicUrl": null,
  "adminUrl": "/admin/success-stories/123"
}
```

`publicUrl` is set only when the case is published.

## Errors

| Status | Meaning |
| --- | --- |
| 400 | Title, body, or slug is not usable, or an update sent no fields. Title needs at least 8 characters. Body needs at least 80 characters of text. |
| 401 | The bearer token does not match `BLOG_INGEST_SECRET`. |
| 404 | Update or delete could not find that id or slug. |
| 409 | That slug is already used by another database case. |
| 503 | The secret is not set, or MySQL is not available. |
