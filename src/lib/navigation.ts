export type AppSection = {
  title: string;
  href: string;
  description: string;
};

export const appSections: AppSection[] = [
  {
    title: "Dashboard",
    href: "/",
    description: "A quick view of active opportunities, upcoming follow-ups, and job-search focus."
  },
  {
    title: "Jobs",
    href: "/jobs",
    description: "Track roles worth evaluating, saving, or applying to."
  },
  {
    title: "Companies",
    href: "/companies",
    description: "Organize company research, preferences, and hiring context."
  },
  {
    title: "Applications",
    href: "/applications",
    description: "Follow each application from draft through decision."
  },
  {
    title: "Resume Versions",
    href: "/resume-versions",
    description: "Keep resume variants tied to target roles and positioning."
  },
  {
    title: "Application Answers",
    href: "/application-answers",
    description: "Save reusable, truthful answers for forms and cover notes."
  },
  {
    title: "Interviews",
    href: "/interviews",
    description: "Prepare notes, questions, and follow-up material for interviews."
  },
  {
    title: "Contacts",
    href: "/contacts",
    description: "Track recruiters, hiring managers, referrals, and networking notes."
  },
  {
    title: "Follow-Ups",
    href: "/follow-ups",
    description: "Plan reminders for recruiter replies, thank-you notes, and check-ins."
  },
  {
    title: "Prompt Library",
    href: "/prompt-library",
    description: "Store copy/paste prompts for ChatGPT and Codex workflows."
  }
];
