# Persistence Plan

This app is a personal, local-first job-hunting workspace for Evan Leung. The
next persistence step should keep the app understandable, easy to back up, and
safe to evolve without adding unnecessary infrastructure.

## Current state

- The app uses TypeScript types and mock data files.
- JSON export exists for the current mock datasets.
- There is no database, ORM, authentication, server API, or import flow yet.
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

For the next phase, use **SQLite with Drizzle** as the main persistence path.

SQLite is the best fit for this app because it is local-first, durable, easy to
back up, and does not require a hosted database. Drizzle is a good first ORM
choice because it keeps the schema close to TypeScript, avoids heavy abstraction,
and should be easier to review in small Codex-generated changes.

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

Prisma becomes more attractive if the app later targets a hosted database or
needs a very familiar migration workflow.

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
   Use localStorage only for temporary draft state if needed. Prefer SQLite with
   Drizzle for durable application data once create/edit flows need to survive
   browser refreshes and app restarts.

4. **Optional API-backed persistence later**
   Add API-backed persistence only if the app needs multi-device sync, hosted
   access, or collaboration. This should come after the local-first model is
   proven useful.

## Next implementation recommendation

The next persistence-related issue should be:

**Add a SQLite + Drizzle proof of concept for jobs only.**

Scope it narrowly:

- Add the database and Drizzle dependencies.
- Define a `jobs` table.
- Seed or migrate the current mock jobs.
- Read jobs from SQLite on the Jobs page.
- Leave all other entities on mock data until the pattern is reviewed.
