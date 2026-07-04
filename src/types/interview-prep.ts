export type InterviewStage =
  | "Recruiter Screen"
  | "Hiring Manager"
  | "Technical Screen"
  | "Case Study"
  | "Final Round";

export type InterviewPrep = {
  id: string;
  company: string;
  roleTitle: string;
  interviewStage: InterviewStage;
  interviewerName: string;
  interviewDate: string;
  likelyQuestions: string[];
  keyTalkingPoints: string[];
  starStoriesToUse: string[];
  riskAreasOrGaps: string[];
  questionsToAsk: string[];
  followUpEmailDraft: string;
  notes?: string;
};
