export type ApplicationStatus =
  | "Not Started"
  | "Drafting"
  | "Applied"
  | "Recruiter Screen"
  | "Hiring Manager"
  | "Technical Screen"
  | "Case Study"
  | "Final Round"
  | "Offer"
  | "Rejected"
  | "Withdrawn";

export type Application = {
  id: string;
  company: string;
  roleTitle: string;
  relatedJobId: string;
  dateApplied?: string;
  status: ApplicationStatus;
  resumeVersionUsed: string;
  applicationSource: string;
  nextFollowUpDate?: string;
  notes?: string;
};
