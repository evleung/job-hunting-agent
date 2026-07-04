import type { JobPosting } from "@/types/job-posting";

export const mockJobs: JobPosting[] = [
  {
    id: "forward-deployed-product-manager-example-ai",
    company: "Example AI Company",
    roleTitle: "Forward Deployed Product Manager",
    location: "New York, NY",
    workArrangement: "Hybrid",
    compensation: "$170,000 - $220,000",
    status: "Researching",
    priority: "High",
    fitScore: 88,
    jobDescription:
      "Partner with customers and engineering teams to turn applied AI deployments into durable product workflows.",
    resumeVersion: "AI product strategy resume",
    notes:
      "Strong match for product discovery, customer-facing implementation, and AI workflow design.",
    nextAction: "Review target company notes and draft fit-score rationale."
  },
  {
    id: "solutions-architect-applied-ai-example-ai",
    company: "Example AI Company",
    roleTitle: "Solutions Architect, Applied AI",
    location: "San Francisco, CA",
    workArrangement: "Remote",
    compensation: "$160,000 - $210,000",
    status: "Interested",
    priority: "High",
    fitScore: 84,
    jobDescription:
      "Design practical AI solutions for enterprise customers and translate technical capabilities into adoption plans.",
    resumeVersion: "AI solutions and systems resume",
    notes:
      "Good fit if the role values implementation judgment, product sense, and clear customer communication.",
    nextAction: "Identify examples that show technical translation and stakeholder management."
  },
  {
    id: "ai-deployment-strategist-example-ai",
    company: "Example AI Company",
    roleTitle: "AI Deployment Strategist",
    location: "Boston, MA",
    workArrangement: "Hybrid",
    status: "Interested",
    priority: "Medium",
    fitScore: 79,
    jobDescription:
      "Lead AI adoption projects from discovery through rollout, with emphasis on workflow analysis and measurable customer outcomes.",
    resumeVersion: "AI operations and strategy resume",
    notes:
      "Interesting strategic role, though compensation and exact scope need more research.",
    nextAction: "Look for hiring manager signals and comparable role descriptions."
  }
];

export function findJobPosting(jobId: string) {
  return mockJobs.find((job) => job.id === jobId);
}
