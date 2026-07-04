# MVP Build Roadmap

## Phase 1: Application foundation

- Scaffold Next.js with TypeScript, Tailwind CSS, and the App Router.
- Add the main dashboard shell and section navigation.
- Create placeholder pages for each MVP area.
- Document the planned data model and phased build order.

## Phase 2: Static local workflow prototype

- Add typed sample data for jobs, companies, applications, contacts, and prompts.
- Turn placeholder pages into readable list/detail views.
- Add job-fit scoring display with transparent scoring rationale.
- Keep all AI workflows copy/paste based.

## Phase 3: Local persistence

- Add SQLite.
- Choose Prisma or Drizzle.
- Create migrations for the core entities.
- Add create, edit, and delete flows for jobs, companies, and applications.

## Phase 4: Practical MVP workflows

- Add resume version tracking.
- Add application answer tracking.
- Add interview prep notes.
- Add follow-up reminders.
- Add import/export for the local data.

## Phase 5: Reviewable AI assistance

- Add prompt library workflows that generate copyable prompts.
- Mark any API-dependent features clearly.
- Keep AI-generated outputs editable and reviewable.
- Require explicit user approval before sending or submitting anything.

## Not in the initial MVP

- Authentication
- OpenAI API integration
- Job board scraping
- Automated application submission
- Automated recruiter messages
