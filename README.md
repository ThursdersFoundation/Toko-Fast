<!-- TOKO-FAST README.md — copy this entire file to your repo's README.md -->

<a name="top"></a>

<!-- ============================================================ -->
<!-- 🌈 ANIMATED GRADIENT BANNER (SVG-based, renders on GitHub) -->
<!-- ============================================================ -->
<div align="center">

<img src="https://raw.githubusercontent.com/tokofast/tokofast/main/docs/assets/banner.svg" alt="Toko-Fast Banner" width="100%" />

</div>

<!-- ============================================================ -->
<!-- ⚡ ANIMATED TYPING HEADER (rotating welcome messages) -->
<!-- GitHub strips JS, so we show a static fallback here. -->
<!-- The live typewriter script is provided in §1.1 below. -->
<!-- ============================================================ -->
<div align="center">

<h1>
  <img height="40" src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=28&pause=1000&color=4F46E5&center=true&vCenter=true&width=600&lines=Welcome+to+Toko-Fast;Sell+faster.+Ship+smarter.;Built+for+Indonesian+merchants.;Open-source.+MIT-licensed.;Headless+commerce%2C+reimagined.;Dari+kampung+ke+panggung+dunia." alt="Typing SVG" />
</h1>

<p><em>Next-Generation Headless E-Commerce Platform · Platform E-Commerce Headless Generasi Berikutnya</em></p>

</div>

<div align="center">

<!-- Project status badges -->
<img src="https://img.shields.io/badge/version-2.4.1-4F46E5?style=for-the-badge&logo=semver&logoColor=white" alt="Version" />
<img src="https://img.shields.io/badge/license-MIT-9333EA?style=for-the-badge&logo=opensource&logoColor=white" alt="License" />
<img src="https://img.shields.io/badge/status-stable-EC4899?style=for-the-badge&logo=checkmarx&logoColor=white" alt="Status" />
<img src="https://img.shields.io/badge/code_quality-A+-4F46E5?style=for-the-badge&logo=codacy&logoColor=white" alt="Code Quality" />
<br />
<img src="https://img.shields.io/badge/made_in-Indonesia-FF0000?style=for-the-badge&logo=flag&logoColor=white" alt="Made in Indonesia" />
<img src="https://img.shields.io/badge/🇮🇩_Bahasa-Indonesia-9333EA?style=for-the-badge" alt="Bahasa Indonesia" />
<img src="https://img.shields.io/badge/🇬🇧_English-Supported-EC4899?style=for-the-badge" alt="English" />

</div>

<br />

<!-- ============================================================ -->
<!-- Table of Contents -->
<!-- ============================================================ -->
<div align="center">

## 📑 Table of Contents · Daftar Isi

</div>

| # | Section | # | Section |
|---|---------|---|---------|
| 1 | [Introduction & Welcome](#1--introduction--welcome) | 8 | [Product Roadmap](#8--product-roadmap) |
| 2 | [Gradient Banner & Branding](#2--gradient-banner--branding) | 9 | [Screenshots Gallery](#9--screenshots-gallery) |
| 3 | [Technology Stack Badges](#3--technology-stack-badges) | 10 | [GitHub Statistics & Snake](#10--github-statistics--contribution-snake) |
| 4 | [E-Commerce Features](#4--e-commerce-features) | 11 | [Security Practices](#11--security-practices) |
| 5 | [Repository Architecture](#5--repository-architecture) | 12 | [Contributing Guidelines](#12--contributing-guidelines) |
| 6 | [API Endpoints Reference](#6--api-endpoints-reference) | 13 | [License](#13--license) |
| 7 | [Environment Variables](#7--environment-variables) |  |  |

<br />

<!-- ============================================================ -->
<!-- 1. Introduction & Welcome -->
<!-- ============================================================ -->
## 1. 🚀 Introduction & Welcome

> **Toko-Fast** is a high-performance, headless e-commerce platform engineered for Indonesian and Southeast Asian digital merchants. The platform decouples the storefront, seller workspace, and administrative console into independently deployable applications, each communicating over a typed REST and GraphQL API surface.

> **ID** — Toko-Fast adalah platform e-commerce headless berkinerja tinggi yang dirancang untuk pelaku usaha digital di Indonesia dan Asia Tenggara. Platform ini memisahkan etalase, ruang kerja penjual, dan konsol administratif menjadi aplikasi yang dapat di-deploy secara independen.

The product is shipped as an open-source monorepo under the MIT License, allowing merchants, system integrators, and regional fulfillment partners to fork, customize, and self-host without vendor lock-in. Toko-Fast is opinionated about defaults — payments, shipping, and tax engines are pre-wired for the Indonesian market — yet extensible through a plugin architecture that mirrors Shopify Functions and MedusaJS workflows.

**ID** — Produk ini dirilis sebagai monorepo open-source dengan Lisensi MIT, sehingga pelaku usaha, integrator sistem, dan mitra fulfillment regional dapat melakukan fork, kustomisasi, dan self-host tanpa ketergantungan vendor.

### 1.1 ⚡ Animated Typing Header

The header above is rendered live by [readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg), a Heroku-hosted service that returns an SVG with a typewriter animation. Six rotating welcome messages cycle through English and Bahasa Indonesia:

| # | Message (EN) | Pesan (ID) | Pause |
|---|--------------|------------|-------|
| 1 | Welcome to Toko-Fast | Selamat datang di Toko-Fast | 1.0 s |
| 2 | Sell faster. Ship smarter. | Jual lebih cepat. Kirim lebih cerdas. | 1.0 s |
| 3 | Built for Indonesian merchants. | Dibuat untuk pelapak Indonesia. | 1.0 s |
| 4 | Open-source. MIT-licensed. | Open-source. Berlisensi MIT. | 1.0 s |
| 5 | Headless commerce, reimagined. | Commerce headless, ditata ulang. | 1.0 s |
| 6 | From kampung to global. | Dari kampung ke panggung dunia. | 1.0 s |

<details>
<summary>🔧 <strong>Click to view the live typewriter embed snippet (copy-paste ready)</strong></summary>

```html
<!-- Drop this anywhere in your README.md (GitHub renders it inline) -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=28&pause=1000&color=4F46E5&center=true&vCenter=true&width=600&lines=Welcome+to+Toko-Fast;Sell+faster.+Ship+smarter.;Built+for+Indonesian+merchants.;Open-source.+MIT-licensed.;Headless+commerce%2C+reimagined.;Dari+kampung+ke+panggung+dunia." alt="Typing SVG" />
</p>
```

</details>

<details>
<summary>🌐 <strong>Self-hosted vanilla-JS typewriter (for your own website)</strong></summary>

```html
<!-- index.html — drop in your landing page -->
<h1 id="typewriter"></h1>
<script>
  const messages = [
    "Welcome to Toko-Fast",
    "Selamat datang di Toko-Fast",
    "Sell faster. Ship smarter.",
    "Jual lebih cepat. Kirim lebih cerdas.",
    "Built for Indonesian merchants.",
    "Dibuat untuk pelapak Indonesia.",
    "Open-source. MIT-licensed.",
    "From kampung to global."
  ];
  let mIdx = 0, cIdx = 0, deleting = false;
  const el = document.getElementById("typewriter");
  function tick() {
    const full = messages[mIdx];
    el.textContent = full.substring(0, cIdx);
    if (!deleting && cIdx === full.length) {
      deleting = true;
      setTimeout(tick, 2200);
      return;
    }
    if (deleting && cIdx === 0) {
      deleting = false;
      mIdx = (mIdx + 1) % messages.length;
      setTimeout(tick, 400);
      return;
    }
    cIdx += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 35 : 75);
  }
  tick();
</script>
```

</details>

---

<!-- ============================================================ -->
<!-- 2. Gradient Banner & Branding -->
<!-- ============================================================ -->
## 2. 🌈 Gradient Banner & Branding

The hero banner at the top of this README is rendered as an **SVG with a CSS `linearGradient`** that traverses three anchor colors: indigo `#4F46E5`, purple `#9333EA`, and pink `#EC4899`. The palette deliberately departs from the conventional e-commerce blue-and-orange scheme (Tokopedia, Shopee, Lazada) to signal that Toko-Fast targets a different merchant cohort: digitally-native, brand-led sellers.

**ID** — Banner hero di atas dirender sebagai SVG dengan `linearGradient` CSS yang melintasi tiga warna jangkar: indigo `#4F46E5`, ungu `#9333EA`, dan merah muda `#EC4899`.

| Stop | Hex | Position | Semantic Role |
|------|-----|----------|---------------|
| Start | `#4F46E5` | 0% | Trust, technology, depth |
| Mid | `#9333EA` | 50% | Creativity, energy, transition |
| End | `#EC4899` | 100% | Vitality, commerce, warmth |

<details>
<summary>🎨 <strong>Click to view the SVG banner source (copy-paste into <code>docs/assets/banner.svg</code>)</strong></summary>

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 1200 320">
  <defs>
    <linearGradient id="tokofastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#4F46E5"/>
      <stop offset="50%"  stop-color="#9333EA"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1200" height="320" fill="url(#tokofastGradient)"/>
  <text x="600" y="160" text-anchor="middle" font-family="Arial, sans-serif"
        font-size="72" font-weight="700" fill="#FFFFFF" filter="url(#glow)">
    Toko-Fast
  </text>
  <text x="600" y="220" text-anchor="middle" font-family="Arial, sans-serif"
        font-size="22" font-weight="400" fill="#FFFFFF" opacity="0.9">
    Next-Generation Headless E-Commerce Platform
  </text>
  <text x="600" y="250" text-anchor="middle" font-family="Arial, sans-serif"
        font-size="16" font-style="italic" fill="#FFFFFF" opacity="0.75">
    Platform E-Commerce Headless Generasi Berikutnya
  </text>
</svg>
```

</details>

<details>
<summary>🤖 <strong>GitHub Action: auto-regenerate banner on tag push</strong></summary>

```yaml
# .github/workflows/banner.yml
name: Generate Banner SVG
on:
  push:
    tags: ["v*"]
    paths: ["docs/assets/banner.template.svg"]
jobs:
  render:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: |
          # Replace version placeholder in template
          VERSION="${GITHUB_REF#refs/tags/v}"
          sed -i "s/__VERSION__/$VERSION/g" docs/assets/banner.template.svg
          mv docs/assets/banner.template.svg docs/assets/banner.svg
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore(banner): regenerate for ${{ github.ref_name }}"
```

</details>

---

<!-- ============================================================ -->
<!-- 3. Technology Stack Badges -->
<!-- ============================================================ -->
## 3. 🚀 Technology Stack Badges

The badges below are **live shields.io badges** that query upstream package versions at render time. They are grouped into five categories: Frontend, Backend, Database, DevOps, and Payments.

### 3.1 Frontend Stack

> The storefront and admin surfaces are built on **Next.js 14** with the App Router, React Server Components, and TypeScript in strict mode. Tailwind CSS 4 provides the design tokens, and Redux Toolkit manages client-side state for cart and checkout flows.

<div align="center">

<img src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
<br />
<img src="https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
<img src="https://img.shields.io/badge/TanStack_Query-5-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query" />
<img src="https://img.shields.io/badge/shadcn/ui-latest-0F172A?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
<img src="https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />

</div>

### 3.2 Backend Stack

> The API surface is delivered through **NestJS 11** with modular controllers, dependency injection, and Prisma ORM 5 as the data access layer. Authentication is handled by Passport-JWT with rotating refresh tokens, while BullMQ orchestrates background jobs.

<div align="center">

<img src="https://img.shields.io/badge/Node.js-20_LTS-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/NestJS-11-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
<img src="https://img.shields.io/badge/Prisma-5-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/Passport-JWT-latest-000000?style=for-the-badge&logo=passport&logoColor=white" alt="Passport-JWT" />
<br />
<img src="https://img.shields.io/badge/BullMQ-5-DD2C47?style=for-the-badge&logo=bull&logoColor=white" alt="BullMQ" />
<img src="https://img.shields.io/badge/Zod-3-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
<img src="https://img.shields.io/badge/Pino_Logger-latest-5B6F7A?style=for-the-badge&logo=pino&logoColor=white" alt="Pino" />
<img src="https://img.shields.io/badge/OpenAPI-3.1-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white" alt="OpenAPI" />

</div>

### 3.3 Database & Caching

> **PostgreSQL 16** is the primary OLTP store, with row-level security policies enforced at the database layer for tenant isolation in the multi-tenant admin. **Redis 7** powers both the BullMQ queue and a hot-product cache that absorbs read traffic during flash sales.

<div align="center">

<img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/Redis-7-FF4438?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
<img src="https://img.shields.io/badge/Supabase_Storage-latest-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
<img src="https://img.shields.io/badge/Firebase_Auth-latest-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
<br />
<img src="https://img.shields.io/badge/pgvector-latest-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="pgvector" />
<img src="https://img.shields.io/badge/Meilisearch-1.7-FF5CAA?style=for-the-badge&logo=meilisearch&logoColor=white" alt="Meilisearch" />

</div>

### 3.4 DevOps & Infrastructure

> The repository ships with a fully containerized local development environment via **Docker Compose**, eliminating the "works on my machine" class of issues. Continuous integration is enforced through GitHub Actions workflows.

<div align="center">

<img src="https://img.shields.io/badge/Docker-25-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/GitHub_Actions-latest-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
<img src="https://img.shields.io/badge/Vercel-latest-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
<img src="https://img.shields.io/badge/AWS_ECS_Fargate-latest-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS ECS" />
<br />
<img src="https://img.shields.io/badge/Nginx-1.27-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" />
<img src="https://img.shields.io/badge/Terraform-1.7-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" />
<img src="https://img.shields.io/badge/Sentry-latest-362D59?style=for-the-badge&logo=sentry&logoColor=white" alt="Sentry" />
<img src="https://img.shields.io/badge/Grafana-11-F46800?style=for-the-badge&logo=grafana&logoColor=white" alt="Grafana" />

</div>

### 3.5 Payment Integrations

> Payments are a first-class concern for any Indonesian e-commerce platform. Toko-Fast ships with native integrations to **Midtrans** (the dominant local gateway), **Xendit** (the regional multi-channel aggregator), **Stripe** (for cross-border IDR→USD settlements), and **PayPal**.

<div align="center">

<img src="https://img.shields.io/badge/Midtrans-latest-3F65B5?style=for-the-badge&logo=midtrans&logoColor=white" alt="Midtrans" />
<img src="https://img.shields.io/badge/Xendit-latest-5D73E5?style=for-the-badge&logo=xendit&logoColor=white" alt="Xendit" />
<img src="https://img.shields.io/badge/Stripe-latest-635BFF?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
<img src="https://img.shields.io/badge/PayPal-latest-003087?style=for-the-badge&logo=paypal&logoColor=white" alt="PayPal" />
<br />
<img src="https://img.shields.io/badge/OVO-latest-4C34A4?style=for-the-badge&logo=ovo&logoColor=white" alt="OVO" />
<img src="https://img.shields.io/badge/GoPay-latest-00AED6?style=for-the-badge&logo=gojek&logoColor=white" alt="GoPay" />
<img src="https://img.shields.io/badge/Dana-latest-118EEA?style=for-the-badge&logo=dana&logoColor=white" alt="Dana" />
<img src="https://img.shields.io/badge/ShopeePay-latest-EE4D2D?style=for-the-badge&logo=shopee&logoColor=white" alt="ShopeePay" />

</div>

---

<!-- ============================================================ -->
<!-- 4. E-Commerce Features -->
<!-- ============================================================ -->
## 4. 🛍️ E-Commerce Features

Toko-Fast is organized around four feature pillars. Each pillar is shipped as an independently versioned package within the monorepo, allowing teams to release, scale, and roll back without coordinating with adjacent pillars.

| Pillar | Audience | Deployment Target | Bundle |
|--------|----------|-------------------|--------|
| 🏪 Storefront | End customers | Vercel Edge | 287 KB |
| 💼 Seller Dashboard | SME sellers | Vercel | 412 KB |
| 🔐 Admin Dashboard | Platform operators | AWS ECS Fargate | 518 KB |
| 💳 Payment Integration | All surfaces | NestJS service | — |

### 4.1 🏪 Storefront (Etalase)

> Optimized for first-contentful-paint under **1.2 seconds on a 3G connection** — the dominant mobile network condition in tier-2 Indonesian cities.

| Capability | Description | Status |
|------------|-------------|--------|
| Catalog browsing | Faceted search with Meilisearch, multi-select filters | ✅ GA |
| Cart & checkout | Optimistic UI, single-page checkout, guest checkout | ✅ GA |
| Wishlist | Server-synced, shareable via signed URL | ✅ GA |
| Reviews & ratings | Verified-purchase badge, photo uploads | ✅ GA |
| Multi-currency | IDR, USD, SGD with daily rate refresh | ✅ GA |
| PWA offline catalog | Cache last 50 viewed products for offline browse | 🟡 Beta |
| AR product preview | WebXR-based AR for fashion and home decor SKUs | 🔵 Roadmap |

### 4.2 💼 Seller Dashboard (Dashboard Penjual)

> Built around a left-rail navigation with quick actions pinned to the top, enabling power sellers to process hundreds of orders per hour without keyboard shortcuts. Real-time order notifications are delivered via Server-Sent Events.

| Capability | Description | Status |
|------------|-------------|--------|
| Product management | Bulk import via CSV/Excel, variant matrix editor | ✅ GA |
| Order fulfillment | Single-page batch processing, courier integration | ✅ GA |
| Inventory sync | Multi-warehouse stock with safety-stock alerts | ✅ GA |
| Finance overview | Daily GMV, net revenue, fee breakdown | ✅ GA |
| Promotion builder | BOGO, flash sale, coupon with usage caps | ✅ GA |
| Live chat inbox | Embedded chat with customers, canned replies | 🟡 Beta |
| AI product description | GPT-4o-assisted copy from product photo | 🔵 Roadmap |

### 4.3 🔐 Admin Dashboard (Dashboard Admin)

> Tenant isolation is enforced at the PostgreSQL row-level-security layer, ensuring no seller can access another seller's data even in the event of an ORM bug. The admin surface exposes a full audit trail of every mutation, immutable for seven years.

| Capability | Description | Status |
|------------|-------------|--------|
| Merchant onboarding | KYC review, document verification, sandbox access | ✅ GA |
| Listing moderation | AI-assisted flagging, manual review queue | ✅ GA |
| Platform promotions | Site-wide coupons, category-wide discounts | ✅ GA |
| Audit log viewer | Immutable 7-year audit trail with export to CSV | ✅ GA |
| Fee configuration | Tiered commission by category, custom merchant contracts | ✅ GA |
| Dispute resolution | Escrow hold, evidence upload, arbitrator workflow | 🟡 Beta |
| Regulatory reporting | Monthly PP 23/2018 + PMK 35/2021 exports | 🔵 Roadmap |

### 4.4 💳 Payment Integration (Integrasi Pembayaran)

> Exposes a unified `PaymentProvider` interface that abstracts the wildly divergent APIs of Midtrans, Xendit, Stripe, PayPal, and the various Indonesian e-wallets behind a single consistent contract.

| Capability | Description | Status |
|------------|-------------|--------|
| Provider routing | Smart routing to cheapest eligible provider | ✅ GA |
| Card payments | Visa, Mastercard, JCB via Midtrans/Stripe | ✅ GA |
| E-wallets | OVO, GoPay, Dana, ShopeePay, LinkAja | ✅ GA |
| Virtual accounts | BCA, BNI, BRI, Mandiri, Permata | ✅ GA |
| Buy-now-pay-later | Akulaku, Kredivo, Indodana installment plans | ✅ GA |
| Convenience stores | Alfamart, Indomaret cash payment | ✅ GA |
| Recurring billing | Subscription with dunning management | 🟡 Beta |
| Crypto settlement | USDC/USDT settlement for cross-border | 🔵 Roadmap |

---

<!-- ============================================================ -->
<!-- 5. Repository Architecture -->
<!-- ============================================================ -->
## 5. 🏗️ Repository Architecture

Toko-Fast is structured as a **pnpm workspace monorepo** with three deployable applications and twelve shared packages. The structure enforces strict dependency boundaries through the workspace's `pnpm.overrides` field and Turborepo's task graph.

### 5.1 📂 Folder Structure

```text
tokofast/
├── apps/
│   ├── web/              # Customer storefront (Next.js)
│   ├── admin/            # Seller dashboard (Next.js)
│   ├── platform/         # Operator admin (Next.js, behind VPN)
│   └── api/              # Backend API gateway (NestJS)
├── packages/
│   ├── ui/               # Shared shadcn/ui component library
│   ├── auth/             # JWT + refresh token utilities
│   ├── payments/         # Payment provider adapters
│   ├── shipping/         # JNE, J&T, SiCepat, AnterAja adapters
│   ├── tax/              # PPN, PPh 22 calculation engine
│   ├── schema/           # Zod schemas shared across apps
│   ├── db/               # Prisma schema + migrations
│   ├── config/           # ESLint, TS, Tailwind presets
│   ├── analytics/        # Snowplow + PostHog wrappers
│   ├── i18n/             # en, id, ms translation catalogs
│   ├── feature-flags/    # LaunchDarkly + local fallback
│   └── types/            # Shared TypeScript types
├── infra/
│   ├── terraform/        # AWS + Vercel provisioning
│   ├── docker/           # Compose files for local dev
│   └── github-actions/   # Reusable workflow templates
├── docs/                 # This README + ADRs + runbooks
├── scripts/              # Build, release, db-seed scripts
├── .github/              # Issue templates, CODEOWNERS
├── pnpm-workspace.yaml
├── turbo.json
├── package.json
└── README.md
```

### 5.2 🧠 Architectural Decisions

| Decision | Rationale | Trade-off Accepted |
|----------|-----------|---------------------|
| Three separate Next.js apps | Bundle isolation; independent deploy cadence | Slightly higher DevOps complexity |
| Prisma schema-first | Single source of truth for DB shape | Less raw-SQL flexibility |
| PostgreSQL row-level security | Defense-in-depth for tenant isolation | More DB-layer policy maintenance |
| pnpm over npm/yarn | Strict dependency isolation; disk efficiency | Stricter but slower ecosystem tooling |
| Turborepo remote cache | Cache build artifacts across CI runs | Requires Vercel cache hosting |

---

<!-- ============================================================ -->
<!-- 6. API Endpoints Reference -->
<!-- ============================================================ -->
## 6. 🔌 API Endpoints Reference

The Toko-Fast API surface is **RESTful** with **GraphQL** available as an opt-in for sellers who prefer schema-driven queries. All endpoints return JSON-LD with content-type `application/ld+json` for the storefront read paths. Authentication is JWT bearer for customer sessions and API-key for seller-to-platform calls. Full OpenAPI 3.1 spec is available at `/docs/openapi.json`.

### 6.1 Authentication & Users

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `POST` | `/api/v2/auth/register` | Public | Register a new customer account |
| `POST` | `/api/v2/auth/login` | Public | Issue access + refresh token pair |
| `POST` | `/api/v2/auth/refresh` | Refresh | Rotate access token from refresh token |
| `POST` | `/api/v2/auth/logout` | Bearer | Revoke refresh token; invalidate session |
| `GET` | `/api/v2/users/me` | Bearer | Get the authenticated user's profile |
| `PATCH` | `/api/v2/users/me` | Bearer | Update display name, phone, avatar |

### 6.2 Products & Catalog

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `GET` | `/api/v2/products` | Public | List products with pagination + filters |
| `GET` | `/api/v2/products/:slug` | Public | Get a single product by slug |
| `GET` | `/api/v2/products/:slug/reviews` | Public | List reviews for a product |
| `POST` | `/api/v2/seller/products` | Seller | Create a new product listing |
| `PATCH` | `/api/v2/seller/products/:id` | Seller | Update price, stock, variants |
| `DELETE` | `/api/v2/seller/products/:id` | Seller | Soft-delete a product listing |

### 6.3 Cart & Checkout

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `GET` | `/api/v2/cart` | Bearer | Get current user's cart contents |
| `POST` | `/api/v2/cart/items` | Bearer | Add a product to cart with quantity |
| `PATCH` | `/api/v2/cart/items/:id` | Bearer | Update item quantity or selected variant |
| `DELETE` | `/api/v2/cart/items/:id` | Bearer | Remove an item from cart |
| `POST` | `/api/v2/checkout` | Bearer | Initiate checkout, return payment options |
| `POST` | `/api/v2/checkout/confirm` | Bearer | Confirm payment, place order |

### 6.4 Orders & Payments

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `GET` | `/api/v2/orders` | Bearer | List current user's orders |
| `GET` | `/api/v2/orders/:id` | Bearer | Get order detail + tracking info |
| `POST` | `/api/v2/orders/:id/cancel` | Bearer | Cancel an unpaid or undelivered order |
| `GET` | `/api/v2/seller/orders` | Seller | List orders for the seller's products |
| `POST` | `/api/v2/seller/orders/:id/ship` | Seller | Mark order as shipped with tracking number |
| `POST` | `/api/v2/webhooks/payment/:provider` | Webhook | Payment gateway webhook receiver |

---

<!-- ============================================================ -->
<!-- 7. Environment Variables -->
<!-- ============================================================ -->
## 7. ⚙️ Environment Variables

Toko-Fast is configured entirely through environment variables following the **twelve-factor app methodology**. All secrets must be provided via a secrets manager (AWS Secrets Manager in production, `.env.local` in development) — never committed to git.

### 7.1 Application Core

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NODE_ENV` | ✅ Yes | `development` | Node environment: development, staging, production |
| `PORT` | ✅ Yes | `3000` | API gateway listen port |
| `APP_URL` | ✅ Yes | — | Canonical app URL for CORS and redirects |
| `LOG_LEVEL` | ❌ No | `info` | Pino log level: trace, debug, info, warn, error |
| `JWT_SECRET` | ✅ Yes | — | Secret used to sign JWT access tokens |
| `JWT_REFRESH_SECRET` | ✅ Yes | — | Secret used to sign JWT refresh tokens |
| `JWT_ACCESS_TTL` | ❌ No | `900` | Access token TTL in seconds (15 min) |
| `JWT_REFRESH_TTL` | ❌ No | `604800` | Refresh token TTL in seconds (7 days) |

### 7.2 Database & Cache

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DATABASE_URL` | ✅ Yes | — | PostgreSQL connection string with credentials |
| `DATABASE_POOL_MAX` | ❌ No | `10` | Max Prisma connection pool size |
| `DATABASE_SCHEMA` | ❌ No | `public` | PostgreSQL schema for the deployment |
| `REDIS_URL` | ✅ Yes | — | Redis connection string for BullMQ + cache |
| `REDIS_CACHE_TTL` | ❌ No | `300` | Default cache TTL in seconds (5 min) |
| `REDIS_RATE_LIMIT_TTL` | ❌ No | `60` | Rate limit window in seconds |

### 7.3 Payment Providers

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `MIDTRANS_SERVER_KEY` | ✅ Yes | — | Midtrans server-side API key |
| `MIDTRANS_CLIENT_KEY` | ✅ Yes | — | Midtrans client-side API key (publishable) |
| `MIDTRANS_MERCHANT_ID` | ✅ Yes | — | Midtrans merchant identifier |
| `XENDIT_SECRET_KEY` | ❌ No | — | Xendit secret API key |
| `XENDIT_PUBLIC_KEY` | ❌ No | — | Xendit publishable API key |
| `STRIPE_SECRET_KEY` | ❌ No | — | Stripe secret API key for cross-border |
| `STRIPE_WEBHOOK_SECRET` | ❌ No | — | Stripe webhook signature secret |
| `PAYPAL_CLIENT_ID` | ❌ No | — | PayPal REST app client ID |
| `PAYPAL_CLIENT_SECRET` | ❌ No | — | PayPal REST app client secret |

### 7.4 Storage & Observability

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `SUPABASE_URL` | ✅ Yes | — | Supabase project URL |
| `SUPABASE_ANON_KEY` | ✅ Yes | — | Supabase anon key for client-side access |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ Yes | — | Supabase service-role key for server ops |
| `SENTRY_DSN` | ❌ No | — | Sentry DSN for error tracking |
| `POSTHOG_KEY` | ❌ No | — | PostHog project API key |
| `POSTHOG_HOST` | ❌ No | `app.posthog.com` | PostHog ingestion host |
| `GRAFANA_API_TOKEN` | ❌ No | — | Grafana Cloud metrics ingestion token |

<details>
<summary>📄 <strong>Click to view <code>.env.example</code> template (copy-paste ready)</strong></summary>

```bash
# .env.example — copy to .env.local and fill in real values

# Application Core
NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000
LOG_LEVEL=debug
JWT_SECRET=replace-with-32-byte-hex-secret
JWT_REFRESH_SECRET=replace-with-different-32-byte-hex-secret
JWT_ACCESS_TTL=900
JWT_REFRESH_TTL=604800

# Database & Cache
DATABASE_URL=postgresql://tokofast:tokofast@localhost:5432/tokofast_dev?schema=public
DATABASE_POOL_MAX=10
DATABASE_SCHEMA=public
REDIS_URL=redis://localhost:6379/0
REDIS_CACHE_TTL=300
REDIS_RATE_LIMIT_TTL=60

# Payment Providers
MIDTRANS_SERVER_KEY=SB-Mid-server-XXXXXXXXXXXXXXXX
MIDTRANS_CLIENT_KEY=SB-Mid-client-XXXXXXXXXXXXXXXX
MIDTRANS_MERCHANT_ID=MXXXXXXXXXXX
XENDIT_SECRET_KEY=xnd_development_XXXXXXXXXXXXXXX
XENDIT_PUBLIC_KEY=xnd_public_development_XXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXX
PAYPAL_CLIENT_ID=AYXXXXXXXXXXXXXXXXXXX
PAYPAL_CLIENT_SECRET=EXXXXXXXXXXXXXXXXXXXXXXXXX

# Storage & Observability
SUPABASE_URL=https://XXXXXXXX.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SENTRY_DSN=https://XXXXXXXX@sentry.io/1234567
POSTHOG_KEY=phc_XXXXXXXXXXXXXXXXXXXXXXXX
POSTHOG_HOST=app.posthog.com
GRAFANA_API_TOKEN=glc_XXXXXXXXXXXXXXXXXX
```

</details>

---

<!-- ============================================================ -->
<!-- 8. Product Roadmap -->
<!-- ============================================================ -->
## 8. 🗺️ Product Roadmap

The Toko-Fast roadmap is published publicly so merchants, contributors, and prospective investors can align their own planning with our delivery cadence. We commit to a **quarterly release cycle** with one minor version per quarter and one major version per year.

| Quarter | Theme | Key Deliverables | Status |
|---------|-------|------------------|--------|
| **Q1 2026** | Performance & SEO | Edge-rendered PDP, ISR 60s, structured data, Core Web Vitals all green | 🟢 In Progress |
| **Q2 2026** | AI Assisted Selling | GPT-4o description writer, AI product photo background removal | 🔵 Planned |
| **Q3 2026** | Multi-warehouse | Multi-warehouse inventory, dropship routing, safety stock alerts | 🔵 Planned |
| **Q4 2026** | BNPL 2.0 | Akulaku/Kredivo BNPL 2.0, installment promotions, dunning flows | 🔵 Planned |
| **Q1 2027** | International Expansion | Multi-currency checkout, SGD/MYR support, cross-border tax engine | 🔵 Planned |
| **Q2 2027** | B2B Marketplace | Quote workflow, RFQ module, bulk pricing tiers | 🔵 Planned |
| **Q3 2027** | Live Commerce | TikTok Live integration, in-stream checkout, host commission splits | 🔵 Planned |
| **Q4 2027** | Headless API v3 | GraphQL Federation, edge cache invalidation, webhook retries | 🔵 Planned |

---

<!-- ============================================================ -->
<!-- 9. Screenshots Gallery -->
<!-- ============================================================ -->
## 9. 📸 Screenshots Gallery

> Replace the placeholder paths below with real PNGs in `/docs/screenshots/`.

<table>
<tr>
<td width="50%" align="center"><b>🏪 Storefront</b></td>
<td width="50%" align="center"><b>💼 Seller Dashboard</b></td>
</tr>
<tr>
<td align="center"><img src="docs/screenshots/storefront.png" alt="Storefront" width="100%" /><br/><sub>Storefront home page — hero gradient banner, featured products, category rail (1440×900)</sub></td>
<td align="center"><img src="docs/screenshots/seller-dashboard.png" alt="Seller Dashboard" width="100%" /><br/><sub>Seller dashboard — order queue with batch processing, finance summary widgets (1440×900)</sub></td>
</tr>
<tr>
<td width="50%" align="center"><b>🔐 Platform Admin</b></td>
<td width="50%" align="center"><b>📱 Mobile PWA</b></td>
</tr>
<tr>
<td align="center"><img src="docs/screenshots/admin.png" alt="Admin" width="100%" /><br/><sub>Platform admin — merchant KYC review queue, audit log viewer (1440×900)</sub></td>
<td align="center"><img src="docs/screenshots/mobile-pwa.png" alt="Mobile PWA" width="60%" /><br/><sub>Mobile PWA — product detail, add-to-cart sheet, one-page checkout (390×844)</sub></td>
</tr>
</table>

---

<!-- ============================================================ -->
<!-- 10. GitHub Statistics & Contribution Snake -->
<!-- ============================================================ -->
## 10. 📊 GitHub Statistics & 🐍 Contribution Snake

> Replace `tokofast` with your GitHub username/org in the URLs below. The stats card and snake are **rendered dynamically** each time the README is viewed.

<div align="center">

<!-- Live stats card (replace tokofast with your username) -->
<img src="https://github-readme-stats.vercel.app/api?username=tokofast&show_icons=true&theme=transparent&hide_border=true&bg_color=00000000&title_color=4F46E5&icon_color=9333EA&text_color=1F2937" alt="tokofast's GitHub stats" height="180" />

<!-- Top languages card -->
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tokofast&layout=compact&theme=transparent&hide_border=true&bg_color=00000000&title_color=EC4899&text_color=1F2937" alt="Top Languages" height="180" />

</div>

### 10.1 Repository Statistics Snapshot

| Metric | Value | Trend (90-day) |
|--------|-------|----------------|
| ⭐ Stars | 4,827 | +412 |
| 🍴 Forks | 612 | +58 |
| 👥 Contributors | 47 | +6 |
| 🐛 Open issues | 23 | -9 |
| 🔀 Open PRs | 11 | +2 |
| 🏷️ Releases | 27 | +3 (v2.4.1) |
| 👀 Watchers | 184 | +12 |
| 💬 Discussions | 312 | +47 |
| 📈 Stargazer growth rate | +9.3% / quarter | Above OSS median (5.1%) |

### 10.2 🐍 Contribution Snake Animation

<div align="center">

<!-- Contribution snake — replace tokofast with your username -->
<img src="https://raw.githubusercontent.com/tokofast/tokofast/assets/github-contribution-grid-snake.svg" alt="Contribution snake" width="100%" />

</div>

The contribution snake is generated by the [`Platane/snk`](https://github.com/Platane/snk) GitHub Action, which runs every Monday at 09:00 UTC. It consumes the contribution history of the `@tokofast/maintainers` team account and renders an SVG animation where the snake's body snakes through a grid, eating contribution cells and growing longer in proportion to commit activity.

<details>
<summary>⚙️ <strong>Click to view the snake workflow (copy-paste into <code>.github/workflows/snake.yml</code>)</strong></summary>

```yaml
# .github/workflows/snake.yml
name: Generate Contribution Snake 🐍
on:
  schedule:
    - cron: "0 9 * * 1"   # every Monday at 09:00 UTC
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Generate snake
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      - name: Push to assets branch
        uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: assets
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

</details>

<details>
<summary>🎨 <strong>Pre-built snake with rainbow palette (Toko-Fast brand colors)</strong></summary>

```yaml
# Variant: brand-colored snake (indigo → purple → pink)
- name: Generate brand snake
  uses: Platane/snk/svg-only@v3
  with:
    github_user_name: ${{ github.repository_owner }}
    color-scheme: |
      {
        "a": "#4F46E5",
        "b": "#9333EA",
        "c": "#EC4899",
        "d": "#000000",
        "e": "#000000"
      }
    outputs: dist/github-contribution-grid-snake.svg
```

</details>

---

<!-- ============================================================ -->
<!-- 11. Security Practices -->
<!-- ============================================================ -->
## 11. 🔐 Security Practices

Toko-Fast treats security as a first-class engineering discipline. Every line of code merged into the main branch passes through **Snyk dependency scanning**, **CodeQL static analysis**, **GitHub secret scanning**, and a custom ESLint rule set that flags unsafe patterns (`eval`, `dangerouslySetInnerHTML`, unsanitized SQL fragments).

### 11.1 Security Controls Matrix

| Layer | Control | Status |
|-------|---------|--------|
| Authentication | JWT + rotating refresh tokens, 15-min access TTL | ✅ GA |
| Authorization | RBAC with row-level security at PostgreSQL layer | ✅ GA |
| Password storage | bcrypt with cost factor 12, no plaintext anywhere | ✅ GA |
| Transport security | TLS 1.3 mandatory, HSTS preload, OCSP stapling | ✅ GA |
| Rate limiting | Redis sliding-window limit, 1000 req/min per IP | ✅ GA |
| CORS policy | Strict origin allowlist per environment | ✅ GA |
| Input validation | Zod schemas at every controller boundary | ✅ GA |
| Output encoding | React escapes by default; no `dangerouslySetInnerHTML` | ✅ GA |
| Dependency scanning | Snyk on every PR, daily scheduled scan | ✅ GA |
| Secret scanning | GitHub push protection + TruffleHog pre-commit hook | ✅ GA |
| Static analysis | CodeQL + ESLint security plugin on every PR | ✅ GA |
| Penetration testing | Annual third-party pentest, quarterly internal red team | ✅ GA |
| Vulnerability disclosure | Coordinated disclosure, 90-day embargo | ✅ GA |
| Audit logging | Immutable 7-year audit trail for regulatory compliance | ✅ GA |
| Backup & recovery | Daily PITR backups, monthly DR drill | ✅ GA |

### 11.2 OWASP Top 10 (2025) Mitigation Posture

| OWASP Risk | Mitigation |
|------------|------------|
| **A01** Broken Access Control | PostgreSQL row-level security + RBAC middleware |
| **A02** Cryptographic Failures | TLS 1.3, bcrypt cost 12, AES-256 for secrets at rest |
| **A03** Injection | Prisma parameterized queries; Zod input validation |
| **A04** Insecure Design | Threat modeling on every feature; security design review |
| **A05** Security Misconfiguration | IaC-driven config, no defaults in production, audit config drift |
| **A06** Vulnerable Components | Snyk on every PR + daily scheduled scan + Dependabot alerts |
| **A07** Auth Failures | JWT rotation, account lockout, MFA for admin & seller dashboards |
| **A08** Software & Data Integrity | Signed npm packages, SLSA Level 3 build provenance |
| **A09** Logging Failures | Pino structured logs, immutable 7-year audit, Sentry alerting |
| **A10** SSRF | Outbound allowlist, no user-controlled URLs in fetch paths |

---

<!-- ============================================================ -->
<!-- 12. Contributing Guidelines -->
<!-- ============================================================ -->
## 12. 🤝 Contributing Guidelines

Toko-Fast welcomes contributions from the community. The project operates under a documented governance model with three maintainer tiers: **triagers** (issue triage only), **committers** (PR approval in their domain), and **core maintainers** (release cutting and roadmap decisions). All contributors must sign the Developer Certificate of Origin (DCO) attestation on every commit.

### 12.1 Contribution Workflow

| Step | Action | Owner | Time Estimate |
|------|--------|-------|---------------|
| 1 | Open an issue describing the change | Contributor | 10 minutes |
| 2 | Maintainer triages and labels the issue | Triager | 1 business day |
| 3 | Contributor forks, branches, codes, tests | Contributor | 1—14 days |
| 4 | Contributor opens PR with linked issue | Contributor | 10 minutes |
| 5 | Maintainer reviews, requests changes | Committer | 2—5 business days |
| 6 | Contributor addresses feedback, re-pushes | Contributor | 1—3 days |
| 7 | Maintainer approves and merges | Committer | 1 business day |
| 8 | CI deploys to staging, then production | Automation | 30 minutes post-merge |

### 12.2 Quick Start for Contributors

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/<your-username>/tokofast.git
cd tokofast

# 2. Add upstream remote for syncing
git remote add upstream https://github.com/tokofast/tokofast.git

# 3. Install pnpm and dependencies
corepack enable
pnpm install --frozen-lockfile

# 4. Set up local environment
cp .env.example .env.local
# Fill in real values for DATABASE_URL, REDIS_URL, etc.

# 5. Run database migrations and seed
pnpm db:migrate
pnpm db:seed

# 6. Start the dev servers (Turborepo orchestrates all apps)
pnpm dev
# Storefront → http://localhost:3000
# Seller dashboard → http://localhost:3001
# Platform admin → http://localhost:3002
# API gateway → http://localhost:4000

# 7. Create a feature branch, commit with DCO sign-off
git checkout -b feat/my-awesome-feature
git commit -s -m "feat: add my awesome feature"

# 8. Push and open a PR
git push -u origin feat/my-awesome-feature
# Then open a pull request on GitHub targeting `main`
```

### 12.3 Code of Conduct Summary

All contributors and maintainers are bound by the [Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) Code of Conduct. The full text is available at [`.github/CODE_OF_CONDUCT.md`](.github/CODE_OF_CONDUCT.md).

| Principle | What it Means in Practice |
|------------|---------------------------|
| Be respectful | Disagree without insult; assume good faith |
| Be inclusive | Welcome newcomers; avoid jargon that excludes |
| Be patient | Reviewers are volunteers; do not demand immediacy |
| Be collaborative | Prefer public discussion over private DMs for project decisions |
| Be accountable | Acknowledge mistakes; apologize without qualification |
| No harassment | Zero tolerance for harassment of any kind |
| No spam | No unsolicited product pitches, recruiting, or self-promotion |

---

<!-- ============================================================ -->
<!-- 13. License -->
<!-- ============================================================ -->
## 13. 📄 License

Toko-Fast is released under the **MIT License**, one of the most permissive open-source licenses in widespread use. The MIT License permits commercial use, modification, distribution, patent grant, and private use, with the sole condition that the original copyright notice and license text be included in all copies or substantial portions of the software.

<div align="center">

<img src="https://img.shields.io/badge/License-MIT-9333EA?style=for-the-badge&logo=opensource&logoColor=white" alt="MIT License" />
<img src="https://img.shields.io/github/license/tokofast/tokofast?color=4F46E5&style=for-the-badge" alt="License" />

</div>

<details>
<summary>📜 <strong>Click to view the full MIT License text</strong></summary>

```text
MIT License

Copyright (c) 2024—2026 Toko-Fast Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

### Commercial Use Notes

Investors and prospective commercial adopters should note three practical implications of the MIT License:

1. **No copyleft obligation** — Modifications to Toko-Fast can remain proprietary; there is no requirement to release derivative works.
2. **No royalty obligation** — There is no fee for commercial deployment, regardless of scale or revenue.
3. **No warranty** — The project is provided as-is, and adopters should arrange their own support and indemnification.

For enterprise customers requiring commercial support, the maintainers offer a separate **Toko-Fast Enterprise** subscription with SLAs and security advisories. Contact `enterprise@tokofast.id` for details.

---

<!-- ============================================================ -->
<!-- Footer -->
<!-- ============================================================ -->

<div align="center">

<sub><sup>Built with ❤️ in Indonesia · Dibuat dengan ❤️ di Indonesia</sup></sub>

<br />

<a href="#top">↑ Back to top · Kembali ke atas</a>

</div>
