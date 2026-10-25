# Toko-Fast — Seller Dashboard

Seller-facing dashboard for the Toko-Fast marketplace, built with Next.js (App Router),
TypeScript, and Tailwind CSS.

## Getting started

```bash
# from the repository root
npm install
npm run dev:seller
```

Open http://localhost:3000.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check (no emit) |
| `npm run test` | Vitest unit tests |
| `npm run test:e2e` | Playwright end-to-end tests |

## Structure

- `src/app` — routes; route groups: `(auth)`, `(onboarding)`, `(dashboard)`
- `src/components` — shared UI (ui, layout, dashboard, charts, tables, forms, feedback)
- `src/features` — feature modules, one folder per domain
- `src/hooks`, `src/store` — shared hooks and Zustand stores
- `src/services` — API client (`api/`) plus per-domain services
- `src/lib` — auth (session/roles/permissions), security (csrf/sanitize/safe-redirect), monitoring
- `src/config` — site, navigation, permissions, and env configuration
- `src/utils` — formatting, calculations, exports
- `tests` — unit, integration, e2e, security, fixtures, mocks
- `docs` — architecture and workflow documentation

## Environment

Copy `.env.example` to `.env.local` and fill in the values.
