# ⋆｡‧˚ʚ Jim's Donuts & Bagels ɞ˚‧｡⋆

A modern, full-stack donut shop website featuring a dynamic menu system, newsletter signup, and database-driven content management. Built to showcase fresh donuts made daily with a clean, responsive design.

---

## Tech Stack ₊˚⊹♡

- **Framework:** [Next.js](https://nextjs.org/) 15 (React, App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3
- **Database:** [SQLite](https://www.sqlite.org/) (development) / PostgreSQL (production)
- **ORM:** [Prisma](https://www.prisma.io/) (schema, migrations, type-safe queries)

---

## Setup

### Prerequisites

- **Node.js** 18+ and npm
- **Git** (optional)

### Installation

1. **Clone the repository** (if applicable):

   ```bash
   git clone <repository-url>
   cd donutShop
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   The default `.env` is configured for local SQLite development.

4. **Initialize the database:**

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Seed the database** (optional):
   ```bash
   npx prisma db seed
   ```

---

## How to Run the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To kill any process on port 3000:

```bash
lsof -ti:3000 | xargs kill -9
```

### Database Management

- **View database:** `npx prisma studio`
- **Create migration:** `npx prisma migrate dev --name migration_name`
- **Reset database:** `npx prisma migrate reset`

---

## System Design

## Architecture ✎ᝰ.ᐟ⋆⑅˚₊

**Architecture flow chart will be added soon...**

### Database Schema

**MenuCategory** → has many **MenuItem**  
**Annoucments** → stores and displays relevant annoucments

### Key Features

- **Server-Side Rendering (SSR):** Fast page loads with Next.js
- **Type Safety:** TypeScript + Prisma for end-to-end type safety
- **Component-Based:** Reusable, modular React components
- **Responsive Design:** Mobile-first Tailwind CSS styling
- **Database-Driven:** Dynamic content from Prisma ORM
