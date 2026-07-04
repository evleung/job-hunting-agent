# AGENTS.md

## Project purpose

This repository is for building a personal job-hunting AI agent and application for Evan Leung. The app helps evaluate job opportunities, score role fit, manage applications, organize resume versions, store application answers, prepare for interviews, and track recruiter follow-ups.

This is not a generic job board. It is a personal productivity and career strategy system optimized for one user first.

## Product principles

1. Prioritize practical job-search usefulness over technical complexity.
2. Build small, working features incrementally.
3. Avoid overengineering.
4. Prefer local-first storage for the MVP.
5. Keep the app understandable for someone who is technical but not a full-time software engineer.
6. Make all AI-generated outputs editable and reviewable.
7. Never auto-submit applications or send messages without explicit user approval.
8. Avoid storing unnecessary sensitive data.
9. Preserve truthfulness in resumes, application answers, and interview prep.
10. Treat this as both a useful personal tool and a potential AI/product portfolio project.

## Preferred stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- SQLite for initial local persistence
- Prisma or Drizzle for database access
- Minimal external dependencies

## Initial MVP features

Build the following before adding advanced automation:

1. Dashboard
2. Job tracker
3. Company tracker
4. Application tracker
5. Job-fit scoring model
6. Resume version tracker
7. Application answer tracker
8. Interview prep notes
9. Recruiter/contact tracker
10. Follow-up reminders
11. Prompt library
12. Import/export

## AI workflow assumptions

The first version should not require OpenAI API access. The app should support copy/paste workflows with ChatGPT and Codex.

If an AI feature requires OpenAI API access, mark it clearly as API-dependent and provide a non-API workaround.

## Coding standards

- Use TypeScript types consistently.
- Keep components small and readable.
- Avoid clever abstractions unless they clearly reduce repeated code.
- Add comments for business logic, especially scoring logic.
- Use clear naming tied to job-search concepts.
- Make forms simple and forgiving.
- Make outputs easy to copy into ChatGPT, resumes, emails, or job applications.