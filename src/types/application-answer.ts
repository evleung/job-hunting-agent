export type ApplicationQuestionType =
  | "Why this company?"
  | "Why this role?"
  | "Why are you looking?"
  | "Salary expectations"
  | "Client-facing experience"
  | "AI experience"
  | "Product decision influenced"
  | "Tell me about yourself";

export type ApplicationAnswerTone =
  | "Concise"
  | "Warm"
  | "Confident"
  | "Technical"
  | "Executive";

export type ApplicationAnswerStatus =
  | "Draft"
  | "Needs Review"
  | "Ready"
  | "Used"
  | "Archived";

export type ApplicationAnswer = {
  id: string;
  questionType: ApplicationQuestionType;
  questionText: string;
  company: string;
  relatedRole: string;
  draftAnswer: string;
  finalAnswer?: string;
  tone: ApplicationAnswerTone;
  wordCountTarget: string;
  status: ApplicationAnswerStatus;
  notes?: string;
};
