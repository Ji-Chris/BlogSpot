# BlogSpot

An open source blogging platform built with Next.js, better-auth, and PostgreSQL — designed for writers to create, share, and discover blog posts.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Monorepo | [Turborepo](https://turbo.build/) |
| Auth | [better-auth](https://better-auth.com/) |
| Database | [PostgreSQL](https://www.postgresql.org/) |
| ORM | [Drizzle ORM](https://orm.drizzle.team/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |

---

## Features

- Email/password authentication
- Social login (GitHub, Google)
- Session management via PostgreSQL
- Profile avatar from social providers
- Protected routes via middleware

---

## Setup & Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)
- [PostgreSQL](https://www.postgresql.org/)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/blog-spot.git
cd blog-spot
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Copy the example env file and fill in your values (see [Environment Variables](#environment-variables)):

```bash
cp apps/web/.env.example apps/web/.env.local
```

### 4. Set up the database

Create a PostgreSQL database:

```bash
psql -U postgres
```

```sql
CREATE DATABASE blogspot;
```

Push the schema to your database:

```bash
cd apps/web
pnpm drizzle-kit push
```

### 5. Run the development server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

---

## Environment Variables

Create a `.env.local` file in `apps/web/` with the following variables:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/blogspot

# Better Auth
BETTER_AUTH_URL=http://localhost:3000
AUTH_SECRET=your-random-secret-here

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Generating `AUTH_SECRET`

Run this in your terminal to generate a secure random secret:

```bash
openssl rand -base64 32
```

---

## Project Structure

```
blog-spot/
├── apps/
│   └── web/                  # Main Next.js app
│       ├── src/
│       │   ├── app/          # App Router pages and API routes
│       │   ├── components/   # Reusable UI components
│       │   └── lib/          # auth.ts, auth-client.ts, db.ts, schema.ts
│       ├── .env.local
│       ├── drizzle.config.ts
│       ├── next.config.ts
│       └── package.json
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── README.md
```

> A CMS app can be added under `apps/cms` for content management.

---

## License

MIT