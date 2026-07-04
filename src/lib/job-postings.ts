import type { JobPosting } from "@/types/job-posting";
import { prisma } from "@/lib/prisma";

type DatabaseJobPosting = {
  id: string;
  companyName: string;
  roleTitle: string;
  jobUrl: string | null;
  location: string;
  workArrangement: string;
  compensation: string | null;
  status: string;
  priority: string;
  fitScore: number | null;
  jobDescription: string;
  resumeVersion: string | null;
  notes: string | null;
  nextAction: string | null;
};

function toJobPosting(job: DatabaseJobPosting): JobPosting {
  return {
    id: job.id,
    company: job.companyName,
    roleTitle: job.roleTitle,
    jobUrl: job.jobUrl ?? undefined,
    location: job.location,
    workArrangement: job.workArrangement as JobPosting["workArrangement"],
    compensation: job.compensation ?? undefined,
    status: job.status as JobPosting["status"],
    priority: job.priority as JobPosting["priority"],
    fitScore: job.fitScore ?? undefined,
    jobDescription: job.jobDescription,
    resumeVersion: job.resumeVersion ?? undefined,
    notes: job.notes ?? undefined,
    nextAction: job.nextAction ?? undefined
  };
}

export async function getJobPostings() {
  const jobs = await prisma.jobPosting.findMany({
    orderBy: [
      {
        priority: "asc"
      },
      {
        roleTitle: "asc"
      }
    ]
  });

  return jobs.map(toJobPosting);
}

export async function getJobPostingById(jobId: string) {
  const job = await prisma.jobPosting.findUnique({
    where: {
      id: jobId
    }
  });

  return job ? toJobPosting(job) : null;
}
