# Kickstart Nitro

A production-ready Nitro.js starter template with PostgreSQL database integration using Drizzle ORM.

## Features

- ⚡ **Nitro.js** - Full-stack framework for building universal web applications
- 🗄️ **PostgreSQL** - Powerful relational database
- 🛠️ **Drizzle ORM** - Type-safe ORM with excellent developer experience
- 📝 **TypeScript** - Full TypeScript support out of the box
- 🎨 **Code Quality** - Pre-configured Prettier and Oxlint
- 🔍 **Health Checks** - Built-in health monitoring endpoints
- 📦 **pnpm** - Fast, disk space efficient package manager

## Quick Start

1. **Clone the repository**

   ```bash
   pnpm dlx gitget xcvzmoon/kickstart-nitro my-nitro-app
   cd my-nitro-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure your database**

   ```bash
   cp .env.example .env
   ```

   If you don't want to use the default PORT (3000), set the following variable:
   - `NITRO_PORT`

   Set up your PostgreSQL database and update the environment variables. The runtime configuration expects these database settings:
   - `NITRO_DB_HOST`
   - `NITRO_DB_PORT`
   - `NITRO_DB_DATABASE`
   - `NITRO_DB_USERNAME`
   - `NITRO_DB_PASSWORD`
   - `NITRO_DB_SSL`

4. **Generate and push database schema**

   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**

   Visit `http://localhost:3000` to see your application running.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Lint and fix code with Oxlint
- `pnpm db:generate` - Generate database migrations
- `pnpm db:push` - Push schema changes to database
- `pnpm db:pull` - Pull schema from database
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm db:check` - Check database schema

## Project Structure

```txt
├── server/
│   ├── config/
│   │   └── database.ts      # Database configuration
│   ├── database/
│   │   └── index.ts         # Database connection and exports
│   └── routes/
│       ├── index.ts         # Main route handler
│       └── health/          # Health check endpoints
│           ├── index.get.ts # Basic health check
│           └── ready.get.ts # Readiness probe
├── drizzle.config.ts        # Drizzle ORM configuration
├── nitro.config.ts          # Nitro configuration
└── package.json
```

## Health Endpoints

The application includes built-in health monitoring:

- **GET `/health`** - Basic health check with uptime and memory usage
- **GET `/health/ready`** - Readiness probe for deployment orchestration

## Database Management

This starter uses Drizzle ORM for database management:

- **Schema definition**: Define your database schema in `server/database/schemas/`
- **Migrations**: Generated automatically with `pnpm db:generate`
- **Studio**: Visual database browser with `pnpm db:studio`

## Learn More

- [Nitro Documentation](https://nitro.build/)
- [Drizzle ORM Documentation](https://drizzle.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
