# Planned Core Data Model

This app is local-first for the MVP. The initial implementation should keep data
simple, editable, and exportable before adding a database layer.

## Core entities

### Job

- Role title
- Company
- Job URL
- Location or remote status
- Salary range
- Source
- Status
- Role description notes
- Fit score
- Date discovered

### Company

- Name
- Website
- Industry
- Size or stage
- Location
- Notes
- Priority level
- Related jobs

### Application

- Job
- Company
- Application status
- Date applied
- Resume version used
- Cover letter or note used
- Next action
- Decision outcome

### Job Fit Score

- Job
- Overall score
- Skill match
- Domain interest
- Compensation fit
- Location fit
- Growth fit
- Concerns
- Rationale

### Resume Version

- Name
- Target role or positioning
- File reference
- Key strengths emphasized
- Related applications
- Notes

### Application Answer

- Question
- Answer draft
- Tags
- Related company or application
- Last reviewed date

### Interview

- Application
- Interview date
- Interview type
- Interviewers
- Prep notes
- Questions to ask
- Follow-up notes

### Contact

- Name
- Company
- Role
- Email or profile URL
- Relationship type
- Notes
- Related applications

### Follow-Up

- Related application or contact
- Due date
- Purpose
- Message draft
- Status

### Prompt

- Title
- Use case
- Prompt text
- Inputs needed
- Output review notes

## Later persistence direction

The first database layer should likely use SQLite with Prisma or Drizzle. Until
then, the UI can be built against typed seed data or simple local files so the
product shape stays easy to understand.
