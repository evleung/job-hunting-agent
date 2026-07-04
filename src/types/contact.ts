export type RelationshipType =
  | "Recruiter"
  | "Hiring Manager"
  | "Referral"
  | "Former Colleague"
  | "Networking Contact";

export type Contact = {
  id: string;
  name: string;
  company: string;
  roleTitle: string;
  email?: string;
  linkedInUrl?: string;
  relationshipType: RelationshipType;
  lastContactedDate?: string;
  notes?: string;
};
