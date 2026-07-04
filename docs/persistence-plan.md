# Persistence Plan

This app is a personal, local-first job-hunting workspace for Evan Leung. The
next persistence step should keep the app understandable, easy to back up, and
safe to evolve without adding unnecessary infrastructure.

## Current state

- The app uses TypeScript types and mock data files.
- JSON export exists for the current mock datasets.
- Prisma and SQLite have been introduced as the first local database schema.
- There is no authentication, server API, or import flow yet.
- The first real persistence layer should support local use before any hosted
  or API-backed setup.

## Options compared

| Option | Simplicity | Data safety | Local-first usage | Future portability | Codex implementation complexity |
| --- | --- | --- | --- | --- | --- |
| Browser localStorage | Very simple for small client-side state | Low to medium; browser data can be cleared and is awkward to back up | Good for one browser on one machine | Limited; needs export/import to move data cleanly | Low |
| JSON file export/import | Simple as a backup and transfer format | Medium; user controls files, but import validation is needed | Good as a manual backup workflow | High; JSON can move between storage systems | Low to medium |
| SQLite | Moderate; requires schema and file management | High for local data if backed up | Excellent for local-first desktop-style use | High; standard database format and easy migration path | Medium |
| Prisma | Higher setup, especially migrations and generated client | High once configured | Good with SQLite | High; can later target other databases | Medium to high |
| Drizzle | Moderate setup with explicit TypeScript schema | High once configured | Good with SQLite | High; portable SQL-oriented schema | Medium |

## Recommendation

The earlier planning recommendation was **SQLite with Drizzle**. The current
implementation uses **SQLite with Prisma** because GitHub Issue 13 explicitly
requested Prisma.

SQLite remains the best fit for this app because it is local-first, durable,
easy to back up, and does not require a hosted database. Prisma is acceptable
for this phase because it provides a clear schema file, migrations, generated
client types, and a familiar seed workflow.

Keep **JSON export** as the backup and portability format. Add JSON import only
after the data model stabilizes enough to validate incoming records safely.

Use **localStorage** only for temporary UI state or a very short bridge, such as
remembering unsaved form drafts. It should not become the primary source of
truth for applications, contacts, resume versions, or interview prep.

## Tradeoffs

### Browser localStorage

localStorage is the fastest way to make form submissions feel persistent in the
browser. It is useful for prototypes, unsaved drafts, and small preferences.

The downside is data safety. Browser storage can be cleared, is tied to a single
browser profile, and becomes awkward once records have relationships. It also
does not encourage a clear schema.

### JSON file export/import

JSON is already useful as a backup and handoff format. It is human-readable,
portable, and easy to inspect during early development.

The risk is import complexity. Once import exists, the app needs validation,
versioning, duplicate handling, and recovery behavior. Export is safe now;
import should wait until the model is less likely to churn.

### SQLite

SQLite is the strongest local-first storage option for the MVP. It gives the app
real durability, querying, relationships, and a single local file that can be
backed up.

The tradeoff is that schema design matters. The app should introduce SQLite in a
small step, starting with core entities like jobs, companies, applications, and
contacts before adding every tracker.

### Prisma

Prisma is mature and has excellent tooling, but it adds generated client code
and a larger abstraction surface. It is a reasonable option, but may be more
than this personal MVP needs right now.

Prisma becomes more attractive if the app later targets a hosted database,
needs a familiar migration workflow, or benefits from generated query types.

## Prisma setup

Create a local `.env` file based on `.env.example`:

```bash
DATABASE_URL="file:./dev.db"
```

Generate the Prisma client:

```bash
npm run prisma:generate
```

Create and apply a local SQLite migration:

```bash
npm run prisma:migrate -- --name init
```

Seed the database from the existing mock data:

```bash
npm run seed
```

The local SQLite database file should not be committed. `.gitignore` excludes
common local SQLite database files.

### Drizzle

Drizzle keeps database tables explicit in TypeScript and fits the project's
preference for small, understandable changes. It should work well with SQLite
while keeping SQL concepts visible.

The tradeoff is that some workflows may be less guided than Prisma. The project
will need clear conventions for schema files, migrations, and data access
helpers.

## Recommended migration path

1. **Mock data**
   Keep using typed mock data while shaping screens, workflows, and entity
   relationships.

2. **JSON export**
   Keep the current JSON export as a backup snapshot. Extend it when new mock
   datasets are added.

3. **localStorage or SQLite**
   Use localStorage only for temporary draft state if needed. Use SQLite with
   Prisma for durable application data once create/edit flows need to survive
   browser refreshes and app restarts.

4. **Optional API-backed persistence later**
   Add API-backed persistence only if the app needs multi-device sync, hosted
   access, or collaboration. This should come after the local-first model is
   proven useful.

## Next implementation recommendation

The next persistence-related issue should be:

**Read jobs from SQLite through Prisma on the Jobs page.**

Scope it narrowly:

- Keep the existing mock data as a fallback if the database is unavailable.
- Read jobs from SQLite on the Jobs page.
- Leave all other entities on mock data until the Prisma read pattern is
  reviewed.
