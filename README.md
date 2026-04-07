# Seattle Wall Co. — marketing site

Next.js (App Router) marketing site for a Seattle wall-printing business: gallery, pricing guidance, comparison table, FAQ with structured data, contact form with optional Resend email, and SEO primitives (metadata, `sitemap.xml`, `robots.txt`, Open Graph image).

## Development

This repo runs the dev server on **port 3010** on purpose, so it does not fight another app (for example Git Scout) that is already using **3000**.

```sh
cd /path/to/your-project   # the folder that contains package.json
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) (check the terminal if the port ever changes).

In Cursor: **File → Open Folder…** and pick **that same project root** (where `package.json` lives) so the integrated terminal runs `npm run dev` in the right place.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, JSON-LD |
| `RESEND_API_KEY` | Send lead notifications via [Resend](https://resend.com) |
| `CONTACT_INBOX_EMAIL` | Recipient for contact form |
| `RESEND_FROM_EMAIL` | Verified sender domain in Resend (use `onboarding@resend.dev` for tests) |

Without Resend configured, **production** submissions show a friendly error; **development** logs the message to the server console.

**Production email checklist (Vercel + Resend):**

1. Add `RESEND_API_KEY`, `CONTACT_INBOX_EMAIL` (your inbox), and `RESEND_FROM_EMAIL` in the Vercel project → Settings → Environment Variables (Production), then **Redeploy**.
2. In [Resend](https://resend.com), verify the domain you send **from** (e.g. `seattlewallco.com`) via their DNS records. Use an address like `hello@seattlewallco.com` as `RESEND_FROM_EMAIL`. The test address `onboarding@resend.dev` is only for limited testing and often fails for real customer inboxes until your domain is verified.
3. After a failed submit, check **Vercel → Deployment → Logs** for `[contact] Resend error` to see the API message (domain, validation, etc.).

## Content checklist before launch

1. Replace demo Unsplash assets in `src/data/gallery.ts` with your photography.
2. Update `src/lib/site.ts` with real phone, email, legal business name, and insurance/license copy in `TrustRow`.
3. Adjust pricing bands in `src/components/PricingSection.tsx` and the comparison copy in `src/components/CompareSection.tsx` so every claim is accurate.

## Deploy

Deploy to Vercel (or any Node host). Set environment variables in the hosting dashboard. See `docs/launch-playbook.md` for GBP and first-customer workflows.
