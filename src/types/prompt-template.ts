export type PromptWorkflowCategory =
  | "Job Fit Scoring"
  | "Resume Tailoring"
  | "ATS Keyword Extraction"
  | "Application Answers"
  | "Interview Prep"
  | "Recruiter Outreach"
  | "Salary Expectations"
  | "Follow-Up Emails";

export type PromptTemplate = {
  id: string;
  name: string;
  workflowCategory: PromptWorkflowCategory;
  description: string;
  promptBody: string;
  inputsRequired: string[];
  outputExpected: string;
  lastUpdatedDate: string;
};
