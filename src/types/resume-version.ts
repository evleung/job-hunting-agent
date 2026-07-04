export type ResumeLength = "One page" | "Two pages";

export type ResumeVersion = {
  id: string;
  name: string;
  targetRoleType: string;
  resumeLength: ResumeLength;
  positioningAngle: string;
  bestFitRoles: string[];
  keyStrengths: string[];
  fileReference: string;
  lastUpdatedDate: string;
  notes?: string;
};
