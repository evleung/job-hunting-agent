import type { FollowUpTask } from "@/types/follow-up-task";

export const mockFollowUpTasks: FollowUpTask[] = [
  {
    id: "follow-up-jordan-lee-forward-deployed-pm",
    relatedCompany: "Example AI Company",
    relatedRole: "Forward Deployed Product Manager",
    relatedContact: "Jordan Lee",
    dueDate: "2026-07-09",
    taskType: "Recruiter follow-up",
    status: "Drafted",
    messageDraft:
      "Hi Jordan, I hope you are doing well. I wanted to follow up on the Forward Deployed Product Manager role and see if there are any updates on next steps. I remain very interested in the opportunity and would be glad to provide anything else that would be helpful.",
    notes:
      "Send if no update after one week from initial application or recruiter screen."
  },
  {
    id: "thank-you-priya-shah-solutions-architect",
    relatedCompany: "Example AI Company",
    relatedRole: "Solutions Architect, Applied AI",
    relatedContact: "Priya Shah",
    dueDate: "2026-07-12",
    taskType: "Thank-you note",
    status: "Not Started",
    messageDraft:
      "Hi Priya, thank you for taking the time to speak with me about the Solutions Architect role. I enjoyed learning more about how your team helps customers turn AI capabilities into practical deployments, and the conversation reinforced my interest in the opportunity.",
    notes:
      "Customize with one specific detail from the hiring manager conversation before sending."
  },
  {
    id: "referral-check-in-sam-rivera",
    relatedCompany: "Example AI Company",
    relatedRole: "Forward Deployed Product Manager",
    relatedContact: "Sam Rivera",
    dueDate: "2026-07-06",
    taskType: "Referral check-in",
    status: "Not Started",
    messageDraft:
      "Hi Sam, I noticed a Forward Deployed Product Manager role at Example AI Company that looks closely aligned with my background. If you have a few minutes, I would appreciate your perspective on the team and whether the role sounds like a good fit.",
    notes:
      "Ask for perspective first. Only request a referral if the conversation goes well."
  },
  {
    id: "networking-follow-up-morgan-chen",
    relatedCompany: "Example AI Company",
    relatedRole: "Solutions Architect, Applied AI",
    relatedContact: "Morgan Chen",
    dueDate: "2026-07-10",
    taskType: "Networking follow-up",
    status: "Snoozed",
    messageDraft:
      "Hi Morgan, thank you again for sharing your perspective on applied AI solutions work. Your comments about customer workflow fit were especially helpful as I think through roles in this space.",
    notes:
      "Use after reconnecting or after a technical screen is scheduled."
  }
];
