# ⋆｡‧˚ʚ Jim's Donuts & Bagels ɞ˚‧｡⋆

Built as a real-world Cloudflare Pages + D1 reference project emphasizing edge deployment and safe database workflows.

---

## Quick Start

```bash
npm install                      # Install dependencies
npx wrangler login               # Authenticate with Cloudflare
npx prisma generate              # Generate Prisma Client
npm run pages:build              # Build for Cloudflare
npm run pages:preview:init       # Initialize local D1 & start server → localhost:8788
```

---

## Tech Stack ₊˚⊹♡

- **Framework:** Next.js 15 (App Router, Edge Runtime)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Database:** Cloudflare D1 (SQLite at edge)
- **ORM:** Prisma + D1 adapter
- **Images:** Cloudflare R2
- **Email:** Resend (contact form notifications)
- **Hosting:** Cloudflare Pages

---

## Commands Reference

| Command                      | What it does                                     |
| ---------------------------- | ------------------------------------------------ |
| `npm run pages:build`        | Build app for Cloudflare Pages                   |
| `npm run pages:preview`      | Preview build (localhost:8788) - **use daily**   |
| `npm run pages:preview:init` | Initialize local D1 + preview (first time only)  |
| `npm run pages:deploy`       | Deploy to production                             |
| `npm run db:schema`          | Apply schema to remote D1 (used by live site)     |
| `npm run db:seed`            | Seed remote D1 (menu, announcements, etc.)       |
| `npm run db:seed:local`      | Re-seed local D1 (use after changing seed data)  |

> **Note:** `npm run dev` does not work with edge runtime + D1. Use the Wrangler workflow instead.

### Warnings

- **`db:seed`** - Overwrites remote DB data (menu items, announcements, footer “Last updated”). Run before or after deploy when you change `prisma/d1-seed.sql`.
- **`db:seed:local`** - Overwrites local D1 seed data only. Run when you change `prisma/d1-seed.sql` and want localhost to show the new data (e.g. updated “Last updated” date).
- **`pages:preview:init`** - Wipes and re-initializes local D1 (schema + seed). First-time setup only, or when you want a clean local DB.

---

## Workflow

### Daily Development

```bash
npm run pages:build && npm run pages:preview
```

This runs the Cloudflare Pages environment locally with D1 database access.

### Database Changes

```bash
# 1. Update schema files
#    - prisma/schema.prisma (Prisma model)
#    - prisma/d1-schema.sql (D1 table)

# 2. Regenerate Prisma client
npx prisma generate

# 3. Apply to remote D1 and/or local
npm run db:schema        # Remote D1 (used by live site)
npm run pages:preview:init  # Local D1 only (if testing locally)
```

### Seed Data Changes (menu, announcements, “Last updated”)

When you edit `prisma/d1-seed.sql`:

```bash
npm run db:seed:local     # Update local D1 so localhost shows new data
npm run db:seed           # Update remote D1 so production shows new data (run before/after deploy)
```

### Deploy

```bash
npm run db:seed          # Update menu/announcements if you changed prisma/d1-seed.sql
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

4. Set up local environment variables (for contact form emails):

   Create `.dev.vars` in project root:

   ```env
   RESEND_API_KEY=re_your_api_key
   CONTACT_NOTIFICATION_EMAIL=your-email@gmail.com
   CONTACT_FROM_EMAIL=contact@yourdomain.com
   ```

5. Add secrets to Cloudflare (for production):
   ```bash
   npx wrangler pages secret put RESEND_API_KEY
   npx wrangler pages secret put CONTACT_NOTIFICATION_EMAIL
   npx wrangler pages secret put CONTACT_FROM_EMAIL
   ```

---

## Contact Form

The contact form saves submissions to D1 and sends email notifications via Resend.

| Feature              | Description                                    |
| -------------------- | ---------------------------------------------- |
| Database storage     | All submissions saved to `ContactSubmission`   |
| Email notifications  | Sent via Resend to configured email            |
| Graceful degradation | If email fails, submission still saves         |

### View Submissions

```bash
# Local database
npx wrangler d1 execute donutshop-dev --local --command="SELECT * FROM ContactSubmission ORDER BY createdAt DESC"

# Remote database
npx wrangler d1 execute donutshop-dev --remote --command="SELECT * FROM ContactSubmission ORDER BY createdAt DESC"
```

Or view in Cloudflare Dashboard: **Workers & Pages** → **D1 SQL Database** → **Console**

---

## Database

One D1 database: `donutshop-dev`. It is used by the live site (Pages binding) and by local preview (wrangler.toml).

Schema and seed managed via SQL files:

- `prisma/d1-schema.sql` - Table definitions
- `prisma/d1-seed.sql` - Initial data

---

## Troubleshooting

| Issue                        | Fix                              |
| ---------------------------- | -------------------------------- |
| Port 8788 in use             | `lsof -ti:8788 \| xargs kill -9` |
| Auth expired                 | `npx wrangler login`             |
| Local D1 empty               | `npm run pages:preview:init`     |
| Wrong “Last updated” locally | `npm run db:seed:local`          |
| Wrong/missing data on live   | `npm run db:seed` (remote)       |
| Prisma types stale           | `npx prisma generate`            |
| TS errors persist            | Restart TS Server in IDE         |
