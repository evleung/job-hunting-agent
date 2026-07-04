import type { Contact } from "@/types/contact";

export const mockContacts: Contact[] = [
  {
    id: "jordan-lee-example-ai",
    name: "Jordan Lee",
    company: "Example AI Company",
    roleTitle: "Technical Recruiter",
    email: "jordan.lee@example.com",
    linkedInUrl: "https://www.linkedin.com/in/jordan-lee-example",
    relationshipType: "Recruiter",
    lastContactedDate: "2026-07-02",
    notes:
      "Initial recruiter contact for Forward Deployed Product Manager role. Clarify timeline and next interview step."
  },
  {
    id: "priya-shah-example-ai",
    name: "Priya Shah",
    company: "Example AI Company",
    roleTitle: "Director, Applied AI Solutions",
    email: "priya.shah@example.com",
    linkedInUrl: "https://www.linkedin.com/in/priya-shah-example",
    relationshipType: "Hiring Manager",
    lastContactedDate: "2026-07-04",
    notes:
      "Potential hiring manager for Solutions Architect role. Emphasize technical translation and customer adoption."
  },
  {
    id: "sam-rivera-example-ai",
    name: "Sam Rivera",
    company: "Example AI Company",
    roleTitle: "Senior Product Manager",
    linkedInUrl: "https://www.linkedin.com/in/sam-rivera-example",
    relationshipType: "Referral",
    notes:
      "Possible warm intro path. Ask about forward deployed product team structure before requesting referral."
  },
  {
    id: "morgan-chen-example-ai",
    name: "Morgan Chen",
    company: "Example AI Company",
    roleTitle: "Staff Solutions Architect",
    email: "morgan.chen@example.com",
    linkedInUrl: "https://www.linkedin.com/in/morgan-chen-example",
    relationshipType: "Networking Contact",
    lastContactedDate: "2026-06-29",
    notes:
      "Good person to ask about technical screen expectations and customer implementation patterns."
  }
];
