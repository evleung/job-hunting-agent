import type { Application } from "@/types/application";

export const mockApplications: Application[] = [
  {
    id: "app-forward-deployed-product-manager-example-ai",
    company: "Example AI Company",
    roleTitle: "Forward Deployed Product Manager",
    relatedJobId: "forward-deployed-product-manager-example-ai",
    dateApplied: "2026-07-02",
    status: "Applied",
    resumeVersionUsed: "AI product strategy resume",
    applicationSource: "Company careers page",
    nextFollowUpDate: "2026-07-09",
    notes:
      "Submitted with product strategy positioning and customer deployment examples."
  },
  {
    id: "app-solutions-architect-applied-ai-example-ai",
    company: "Example AI Company",
    roleTitle: "Solutions Architect, Applied AI",
    relatedJobId: "solutions-architect-applied-ai-example-ai",
    status: "Drafting",
    resumeVersionUsed: "AI solutions and systems resume",
    applicationSource: "Referral target",
    nextFollowUpDate: "2026-07-06",
    notes:
      "Draft application after identifying a warm intro or stronger technical translation story."
  },
  {
    id: "app-ai-deployment-strategist-example-ai",
    company: "Example AI Company",
    roleTitle: "AI Deployment Strategist",
    relatedJobId: "ai-deployment-strategist-example-ai",
    status: "Not Started",
    resumeVersionUsed: "AI operations and strategy resume",
    applicationSource: "Saved job posting",
    notes: "Needs compensation research before deciding whether to apply."
  }
];
