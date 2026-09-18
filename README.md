# Bilto Oy — Vido Social website concept

Responsive Finnish sales demo prepared for Ville Olenius / Vido Social. This is not Bilto's official website. No live lead collection, tracking, analytics, cookies or external runtime resources.

## Run and verify

Requires Node.js 20+. No package installation needed.

```sh
npm test
npm run build
npm run dev
```

Development URL: http://localhost:4173. `npm run build` copies `public/` into `dist/`.

## Vercel deployment (not performed yet)

Import this repository into an appropriate Vercel team. Use framework **Other**, build command `npm run build`, output directory `dist`. The included `vercel.json` sets these defaults, defensive headers and noindex.

The connected team was on Hobby when checked. Vercel restricts Hobby to personal non-commercial use. Resolve the commercial hosting plan before deploying this sales demo. Do not activate a paid subscription without the account owner's approval. Vercel provides a `vercel.app` subdomain without a separate domain purchase; no particular hostname is guaranteed available.

## Before real launch

- Obtain Bilto's approval of content, references, photo publication rights and branding.
- Verify exact service scope, region, reference responsibilities and contact details.
- Replace the preview form with a secure real backend, validate input, add rate limiting and privacy notice. Add attachments only after secure file handling is implemented.
- Confirm the recipient. Do not silently send leads to Vido Social or another third party.
- Review the demo notice and noindex policy deliberately; never remove them automatically.
- Replace the concept favicon with an approved brand icon.

## Assets and provenance

All embedded photos and the logo were supplied by the user for this Bilto project. Files are resized/encoded for the web; no architectural imagery was generated or represented as a completed project.

| File | Supplied source |
|---|---|
| `interior.webp` | `61793c7d-5c95-4384-80c1-44ba43347c2a.png` |
| `sauna.webp` | `8600e058-93b2-49e6-af06-533388d7df84.png` |
| `bathroom.webp` | `f9d95751-2226-42f0-ae9a-7408c90ce9dd.png` |
| `flags.webp` | `986655ea-2be9-43fb-a230-2f6e0cc7323d.png` |
| `logo.png` | `c048a510-1664-4ec8-8f76-72feffd3a3be.png` |

Copy is based on the supplied audit of https://bilto.fi/ and its service/reference pages (18 September 2026). Project names are listed without invented scope, testimonials or performance claims. Company imagery and logo are not offered under an open reuse license.
