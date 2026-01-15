# ⋆｡‧˚ʚ Jim's Donuts & Bagels ɞ˚‧｡⋆

Built as a real-world Cloudflare Pages + D1 reference project emphasizing edge deployment and safe database workflows.

---

## Quick Start

```bash
npm install              # Install dependencies
npx wrangler login       # Authenticate with Cloudflare
npx prisma generate      # Generate Prisma Client
npm run dev              # Start dev server → localhost:3000
```

---

## Tech Stack ₊˚⊹♡

- **Framework:** Next.js 15 (App Router, Edge Runtime)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Database:** Cloudflare D1 (SQLite at edge)
- **ORM:** Prisma + D1 adapter
- **Images:** Cloudflare R2
- **Hosting:** Cloudflare Pages

---

## Commands Reference

| Command                      | What it does                                |
| ---------------------------- | ------------------------------------------- |
| `npm run dev`                | Dev server (localhost:3000) - **use daily** |
| `npm run pages:build`        | Build app for Cloudflare Pages              |
| `npm run pages:preview`      | Preview build (localhost:8788)              |
| `npm run pages:preview:init` | Initialize local D1                         |
| `npm run pages:deploy`       | Deploy to production                        |
| `npm run db:schema:dev`      | Apply schema to dev DB                      |
| `npm run db:seed:dev`        | Seed dev DB                                 |
| `npm run db:schema:prod`     | Apply schema to prod DB                     |
| `npm run db:seed:prod`       | Seed prod DB                                |
| `npm run db:sync`            | Sync both DBs                               |

### Warnings

- **`db:sync`** - Updates both dev AND prod. Risky once real data exists.
- **`db:seed:prod`** - Overwrites production data.
- **`pages:preview:init`** - Wipes local D1 data. First-time setup only.

---

## Workflow

### Daily Development

```bash
npm run dev
```

### Database Changes

```bash
npm run db:schema:dev    # Test on dev first
npm run db:seed:dev      # Then seed dev
# Only sync to prod when stable
```

### Deploy

```bash
npm run pages:build
npm run pages:preview    # Optional: verify locally
npm run pages:deploy
```

---

## Setup (First Time)

1. Clone and install:

   ```bash
   git clone <repository-url>
   cd donutShop
   npm install
   ```

2. Configure environment:

   ```bash
   cp .env.example .env
   # Edit .env: set NEXT_PUBLIC_ASSET_BASE_URL to your R2 URL
   ```

3. Authenticate and generate:
   ```bash
   npx wrangler login
   npx prisma generate
   ```

---

## Database

Two D1 databases: `donutshop-dev` (staging) and `donutshop-prod` (production).

Schema and seed managed via SQL files:

- `prisma/d1-schema.sql` - Table definitions
- `prisma/d1-seed.sql` - Initial data

---

## Troubleshooting

| Issue            | Fix                              |
| ---------------- | -------------------------------- |
| Port 3000 in use | `lsof -ti:3000 \| xargs kill -9` |
| Port 8788 in use | `lsof -ti:8788 \| xargs kill -9` |
| Auth expired     | `npx wrangler login`             |
| Local D1 empty   | `npm run pages:preview:init`     |
