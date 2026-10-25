# Toko-Fast — Admin Dashboard

Internal admin console for the Toko-Fast marketplace, built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Getting started

```bash
# from the repository root
npm install
npm run dev:admin
```

Open http://localhost:3001.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server (port 3001) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | TypeScript check (no emit) |

## Structure

- `src/app` — routes; route groups: `(auth)`, `(admin)`
- `src/components` — shared UI (ui, layout, dashboard, tables, charts, forms)
- `src/features` — feature modules (components/hooks/services/types per domain)
- `src/services` — API client (`api/`, with interceptors) plus per-domain services
- `src/analytics` — metrics, reports, and chart transformers
- `src/utils` — formatting, exports, validators
- `tests` — unit, integration, e2e, security

## Environment

Copy `.env.example` to `.env.local` and fill in the values.
