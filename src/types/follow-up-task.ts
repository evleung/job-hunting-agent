export type FollowUpTaskType =
  | "Recruiter follow-up"
  | "Thank-you note"
  | "Referral check-in"
  | "Application status check"
  | "Networking follow-up";

export type FollowUpStatus = "Not Started" | "Drafted" | "Sent" | "Snoozed";

export type FollowUpTask = {
  id: string;
  relatedCompany: string;
  relatedRole: string;
  relatedContact: string;
  dueDate: string;
  taskType: FollowUpTaskType;
  status: FollowUpStatus;
  messageDraft: string;
  notes?: string;
};
