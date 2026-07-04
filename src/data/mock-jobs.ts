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
    fitScore: 88
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
    fitScore: 84
  },
  {
    id: "ai-deployment-strategist-example-ai",
    company: "Example AI Company",
    roleTitle: "AI Deployment Strategist",
    location: "Boston, MA",
    workArrangement: "Hybrid",
    status: "Interested",
    priority: "Medium",
    fitScore: 79
  }
];
