# Playground App

A Next.js 15 full-stack playground project deployed on Vercel with a free Neon PostgreSQL database.

## Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **ORM**: Prisma
- **Database**: Neon (free PostgreSQL)
- **Deployment**: Vercel

## Project Structure
- `app/` — Next.js App Router pages and API routes
- `lib/db.ts` — Prisma client singleton
- `prisma/schema.prisma` — database schema

## Database Setup (Neon)
1. Create a free account at https://console.neon.tech
2. Create a new project and copy the connection strings
3. Update `.env` with `DATABASE_URL` (pooled) and `DIRECT_URL` (direct)
4. Run `npx prisma migrate dev` to apply migrations

## Environment Variables
- `DATABASE_URL` — Neon pooled connection string (used by app)
- `DIRECT_URL` — Neon direct connection string (used by Prisma migrations)

Add both to Vercel project settings under Environment Variables for production.

## Commands
```bash
npm run dev          # Start dev server
npx prisma studio    # Open Prisma GUI
npx prisma migrate dev --name <name>  # Create and apply a migration
npx prisma generate  # Regenerate Prisma client
```

## Deployment
Push to GitHub and connect the repo to Vercel. Add `DATABASE_URL` and `DIRECT_URL` in Vercel's environment variable settings.
