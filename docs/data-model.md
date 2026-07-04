# Data Model

This document summarizes the initial local persistence model for the
job-hunting agent. The schema is implemented in `prisma/schema.prisma` and is
designed to stay close to the existing TypeScript types and mock data.

## Core models

### Company

Represents an organization connected to jobs, applications, contacts,
interviews, follow-ups, and some application answers.

Key fields:

- `id`
- `name`
- `website`
- `industry`
- `sizeOrStage`
- `location`
- `notes`
- `priorityLevel`

### JobPosting

Represents a tracked job opportunity.

Key fields:

- `companyName`
- `roleTitle`
- `jobUrl`
- `location`
- `workArrangement`
- `compensation`
- `status`
- `priority`
- `fitScore`
- `jobDescription`
- `resumeVersion`
- `notes`
- `nextAction`

### Application

Represents the application workflow for a related job.

Key fields:

- `company`
- `roleTitle`
- `relatedJobId`
- `dateApplied`
- `status`
- `resumeVersionUsed`
- `applicationSource`
- `nextFollowUpDate`
- `notes`

### ResumeVersion

Represents a local resume variant without storing actual resume content.

Key fields:

- `name`
- `targetRoleType`
- `resumeLength`
- `positioningAngle`
- `bestFitRoles`
- `keyStrengths`
- `fileReference`
- `lastUpdatedDate`
- `notes`

List fields are stored as JSON-encoded strings in SQLite for this first schema.

### ApplicationAnswer

Represents reusable application answer drafts and final versions.

Key fields:

- `questionType`
- `questionText`
- `company`
- `relatedRole`
- `draftAnswer`
- `finalAnswer`
- `tone`
- `wordCountTarget`
- `status`
- `notes`

### InterviewPrep

Represents preparation notes for an interview stage.

Key fields:

- `company`
- `roleTitle`
- `interviewStage`
- `interviewerName`
- `interviewDate`
- `likelyQuestions`
- `keyTalkingPoints`
- `starStoriesToUse`
- `riskAreasOrGaps`
- `questionsToAsk`
- `followUpEmailDraft`
- `notes`

List fields are stored as JSON-encoded strings in SQLite for this first schema.

### Contact

Represents recruiters, hiring managers, referrals, and networking contacts.

Key fields:

- `name`
- `company`
- `roleTitle`
- `email`
- `linkedInUrl`
- `relationshipType`
- `lastContactedDate`
- `notes`

### FollowUpTask

Represents a reminder or task related to a company, role, and contact.

Key fields:

- `relatedCompany`
- `relatedRole`
- `relatedContact`
- `dueDate`
- `taskType`
- `status`
- `messageDraft`
- `notes`

### PromptTemplate

Represents a reusable copy/paste prompt.

Key fields:

- `name`
- `workflowCategory`
- `description`
- `promptBody`
- `inputsRequired`
- `outputExpected`
- `lastUpdatedDate`

`inputsRequired` is stored as a JSON-encoded string in SQLite.

### FitScore

Represents a manual job-fit scoring record for a job posting.

Key fields:

- `jobPostingId`
- `roleFit`
- `seniorityFit`
- `domainFit`
- `technicalFit`
- `customerFacingFit`
- `aiDataRelevance`
- `compensationPotential`
- `interviewProbability`
- `resumeAlignment`
- `networkingOpportunity`
- `longTermUpside`
- `screenOutRisk`
- `overallScore`
- `tier`
- `recommendedAction`
- `notes`

## Current schema choices

- SQLite is the first local database target.
- Prisma is used for this issue because the implementation request specified it.
- Values that are TypeScript unions in the app are stored as strings in the
  database for easier early migration.
- List-like fields are stored as JSON-encoded strings to keep the first SQLite
  schema simple.
- Actual resume files and sensitive documents should remain outside the repo.
