import type {
  PromptTemplate,
  PromptWorkflowCategory
} from "@/types/prompt-template";

export const promptWorkflowOrder: PromptWorkflowCategory[] = [
  "Job Fit Scoring",
  "Resume Tailoring",
  "ATS Keyword Extraction",
  "Application Answers",
  "Interview Prep",
  "Recruiter Outreach",
  "Salary Expectations",
  "Follow-Up Emails"
];

export const mockPromptTemplates: PromptTemplate[] = [
  {
    id: "job-fit-score-review",
    name: "Manual Job Fit Review",
    workflowCategory: "Job Fit Scoring",
    description:
      "Turns a pasted job description into a structured role-fit review for manual scoring.",
    promptBody:
      "Review this job description for Evan Leung. Summarize role fit, seniority fit, domain fit, technical fit, customer-facing fit, AI/data relevance, compensation potential, interview probability, resume alignment, networking opportunity, long-term upside, and screen-out risk. Keep the output factual and flag assumptions.\n\nJob description:\n[PASTE JOB DESCRIPTION]\n\nCurrent resume/context:\n[PASTE RELEVANT CONTEXT]",
    inputsRequired: ["Job description", "Current resume or background notes"],
    outputExpected:
      "A structured fit summary with risks, assumptions, and suggested manual scores.",
    lastUpdatedDate: "2026-07-04"
  },
  {
    id: "resume-tailoring-pass",
    name: "Resume Tailoring Pass",
    workflowCategory: "Resume Tailoring",
    description:
      "Helps identify truthful resume positioning changes for a target role.",
    promptBody:
      "Compare this resume against the target job description. Suggest truthful edits that improve alignment without exaggerating experience. Group suggestions by summary, experience bullets, skills, and keywords. Do not invent accomplishments.\n\nResume:\n[PASTE RESUME]\n\nJob description:\n[PASTE JOB DESCRIPTION]",
    inputsRequired: ["Resume text", "Target job description"],
    outputExpected:
      "A prioritized list of resume edits, keyword gaps, and cautions.",
    lastUpdatedDate: "2026-07-04"
  },
  {
    id: "ats-keyword-extraction",
    name: "ATS Keyword Extraction",
    workflowCategory: "ATS Keyword Extraction",
    description:
      "Extracts recurring keywords, skills, tools, and responsibilities from a job posting.",
    promptBody:
      "Extract ATS-relevant keywords from this job description. Separate hard skills, soft skills, tools/platforms, responsibilities, domain terms, and repeated phrases. Then identify which keywords should only be included if they are truthful for my background.\n\nJob description:\n[PASTE JOB DESCRIPTION]\n\nBackground notes:\n[PASTE BACKGROUND NOTES]",
    inputsRequired: ["Job description", "Background notes"],
    outputExpected:
      "Grouped keyword lists with a truthfulness check for resume use.",
    lastUpdatedDate: "2026-07-04"
  },
  {
    id: "application-answer-draft",
    name: "Application Answer Draft",
    workflowCategory: "Application Answers",
    description:
      "Drafts a concise application answer that remains editable and reviewable.",
    promptBody:
      "Draft an answer to this application question for Evan Leung. Keep it truthful, specific, and concise. Provide one polished answer and one shorter backup version. Do not imply experience that is not supported by the context.\n\nQuestion:\n[PASTE QUESTION]\n\nCompany/role:\n[PASTE COMPANY AND ROLE]\n\nRelevant context:\n[PASTE CONTEXT]",
    inputsRequired: ["Application question", "Company and role", "Relevant context"],
    outputExpected:
      "A polished answer, a shorter version, and notes on what to verify before use.",
    lastUpdatedDate: "2026-07-04"
  },
  {
    id: "interview-prep-pack",
    name: "Interview Prep Pack",
    workflowCategory: "Interview Prep",
    description:
      "Creates likely questions, talking points, risk areas, and questions to ask.",
    promptBody:
      "Create interview prep for this role and stage. Include likely questions, concise talking points, STAR story ideas, risk areas to prepare for, and smart questions to ask. Keep the prep practical and aligned with the pasted resume/context.\n\nRole:\n[PASTE ROLE]\n\nInterview stage:\n[PASTE STAGE]\n\nJob description:\n[PASTE JOB DESCRIPTION]\n\nResume/context:\n[PASTE CONTEXT]",
    inputsRequired: ["Role", "Interview stage", "Job description", "Resume/context"],
    outputExpected:
      "A copy-friendly interview prep checklist grouped by topic.",
    lastUpdatedDate: "2026-07-04"
  },
  {
    id: "recruiter-outreach-note",
    name: "Recruiter Outreach Note",
    workflowCategory: "Recruiter Outreach",
    description:
      "Drafts a short outreach note for recruiters or warm introductions.",
    promptBody:
      "Draft a concise recruiter outreach message for this role. Make it warm, specific, and low-pressure. Include a short fit summary and a clear ask. Do not overstate my background.\n\nRecruiter/contact:\n[PASTE CONTACT]\n\nCompany/role:\n[PASTE COMPANY AND ROLE]\n\nRelevant fit points:\n[PASTE FIT POINTS]",
    inputsRequired: ["Contact info", "Company and role", "Fit points"],
    outputExpected:
      "A short outreach message plus an even shorter LinkedIn version.",
    lastUpdatedDate: "2026-07-04"
  },
  {
    id: "salary-expectations-response",
    name: "Salary Expectations Response",
    workflowCategory: "Salary Expectations",
    description:
      "Prepares a careful salary expectations answer that avoids premature anchoring.",
    promptBody:
      "Draft a salary expectations response for this role. Keep it professional and flexible. If no reliable range is available, ask for the role's compensation range before anchoring. Include variants for application form, recruiter email, and live conversation.\n\nRole/company:\n[PASTE ROLE AND COMPANY]\n\nKnown compensation info:\n[PASTE KNOWN RANGE OR WRITE UNKNOWN]\n\nConstraints/preferences:\n[PASTE CONTEXT]",
    inputsRequired: ["Role and company", "Known compensation info", "Preferences"],
    outputExpected:
      "Three versions: form response, email response, and live conversation response.",
    lastUpdatedDate: "2026-07-04"
  },
  {
    id: "follow-up-email-draft",
    name: "Follow-Up Email Draft",
    workflowCategory: "Follow-Up Emails",
    description:
      "Drafts polite follow-up or thank-you emails after recruiter and interview touchpoints.",
    promptBody:
      "Draft a concise follow-up email. Keep it polite, specific, and not pushy. Reference the conversation or application status, restate interest, and include a clear next-step ask if appropriate.\n\nRecipient/context:\n[PASTE RECIPIENT AND CONTEXT]\n\nRole/company:\n[PASTE ROLE AND COMPANY]\n\nWhat happened so far:\n[PASTE TIMELINE]\n\nDesired next step:\n[PASTE NEXT STEP]",
    inputsRequired: [
      "Recipient/context",
      "Role and company",
      "Timeline",
      "Desired next step"
    ],
    outputExpected:
      "A polished follow-up email and one shorter backup version.",
    lastUpdatedDate: "2026-07-04"
  }
];
