export type JobStatus =
  | "Interested"
  | "Researching"
  | "Applied"
  | "Interviewing"
  | "Paused"
  | "Closed";

export type JobPriority = "High" | "Medium" | "Low";

export type WorkArrangement = "Remote" | "Hybrid" | "On-site";

export type JobPosting = {
  id: string;
  company: string;
  roleTitle: string;
  location: string;
  workArrangement: WorkArrangement;
  compensation?: string;
  status: JobStatus;
  priority: JobPriority;
  fitScore?: number;
  jobDescription: string;
  resumeVersion?: string;
  notes?: string;
  nextAction?: string;
};
