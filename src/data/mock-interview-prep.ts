import type { InterviewPrep } from "@/types/interview-prep";

export const mockInterviewPrep: InterviewPrep[] = [
  {
    id: "example-ai-forward-deployed-pm-recruiter-screen",
    company: "Example AI Company",
    roleTitle: "Forward Deployed Product Manager",
    interviewStage: "Recruiter Screen",
    interviewerName: "Jordan Lee",
    interviewDate: "2026-07-08",
    likelyQuestions: [
      "Why are you interested in this role?",
      "What kind of AI/product work are you targeting?",
      "What compensation range are you looking for?"
    ],
    keyTalkingPoints: [
      "Interest in customer-facing AI deployment work",
      "Ability to translate ambiguous workflows into product direction",
      "Preference for practical, high-impact AI use cases"
    ],
    starStoriesToUse: [
      "Customer workflow discovery that led to a simpler implementation plan",
      "Cross-functional project where technical tradeoffs needed clear framing"
    ],
    riskAreasOrGaps: [
      "Clarify exact level and whether the role is product-led or services-heavy",
      "Confirm travel expectations"
    ],
    questionsToAsk: [
      "How does this team define success in the first six months?",
      "How much of the role is customer discovery versus internal product work?"
    ],
    followUpEmailDraft:
      "Thank you for taking the time to speak with me today. I enjoyed learning more about the Forward Deployed Product Manager role and how the team approaches applied AI deployments. I am excited by the mix of customer discovery, product judgment, and implementation work, and I would welcome the chance to continue the conversation.",
    notes:
      "Keep answers concise. Use this call to qualify role scope, level, and process."
  },
  {
    id: "example-ai-solutions-architect-hiring-manager",
    company: "Example AI Company",
    roleTitle: "Solutions Architect, Applied AI",
    interviewStage: "Hiring Manager",
    interviewerName: "Priya Shah",
    interviewDate: "2026-07-12",
    likelyQuestions: [
      "How do you approach ambiguous customer requirements?",
      "Tell me about a time you translated technical complexity for a business audience.",
      "What makes an AI deployment successful?"
    ],
    keyTalkingPoints: [
      "Discovery before solutioning",
      "Clear explanation of technical tradeoffs",
      "Human review and workflow fit as part of AI adoption"
    ],
    starStoriesToUse: [
      "Ambiguous stakeholder request clarified into scoped deliverables",
      "Technical system explanation that helped a team make a decision"
    ],
    riskAreasOrGaps: [
      "Be ready to explain technical depth truthfully",
      "Avoid overstating hands-on ML engineering experience"
    ],
    questionsToAsk: [
      "What kinds of customer problems reach this team most often?",
      "How do solutions architects partner with product and engineering?"
    ],
    followUpEmailDraft:
      "Thank you for the thoughtful conversation today. I appreciated learning how your team balances customer needs, technical feasibility, and AI adoption strategy. The role sounds closely aligned with the kind of practical, customer-facing technical work I am excited to do.",
    notes:
      "Anchor answers in technical translation, customer trust, and implementation judgment."
  },
  {
    id: "example-ai-solutions-architect-technical-screen",
    company: "Example AI Company",
    roleTitle: "Solutions Architect, Applied AI",
    interviewStage: "Technical Screen",
    interviewerName: "Morgan Chen",
    interviewDate: "2026-07-16",
    likelyQuestions: [
      "How would you evaluate whether an AI workflow is worth automating?",
      "How would you debug a customer implementation that is not meeting expectations?",
      "What safeguards would you recommend for AI-generated outputs?"
    ],
    keyTalkingPoints: [
      "Start with the workflow and success metric",
      "Separate model limitations from process or integration issues",
      "Keep AI outputs reviewable and editable"
    ],
    starStoriesToUse: [
      "Workflow analysis that identified the real bottleneck",
      "Process improvement that reduced ambiguity for stakeholders"
    ],
    riskAreasOrGaps: [
      "Prepare concrete examples without claiming unsupported production ML ownership",
      "Review basic system design language before the screen"
    ],
    questionsToAsk: [
      "What does a strong technical screen answer look like for this team?",
      "Which technical skills matter most once someone is in the role?"
    ],
    followUpEmailDraft:
      "Thank you for the technical discussion today. I enjoyed walking through how to evaluate AI workflows, implementation risks, and customer success criteria. The conversation reinforced my interest in the role and the team's practical approach to applied AI.",
    notes:
      "Use structured answers: context, diagnosis, tradeoffs, recommendation."
  },
  {
    id: "example-ai-deployment-strategist-case-study",
    company: "Example AI Company",
    roleTitle: "AI Deployment Strategist",
    interviewStage: "Case Study",
    interviewerName: "Taylor Brooks",
    interviewDate: "2026-07-20",
    likelyQuestions: [
      "How would you prioritize use cases for a new enterprise customer?",
      "What data would you need before recommending a deployment plan?",
      "How would you measure success after launch?"
    ],
    keyTalkingPoints: [
      "Prioritize by business value, feasibility, and adoption risk",
      "Map stakeholders and workflow owners early",
      "Define measurable outcomes before implementation"
    ],
    starStoriesToUse: [
      "Prioritization decision that balanced urgency and complexity",
      "Stakeholder alignment story with multiple competing needs"
    ],
    riskAreasOrGaps: [
      "Do not over-index on strategy without implementation detail",
      "Make assumptions explicit in the case"
    ],
    questionsToAsk: [
      "Will the case focus more on strategy, execution, or customer communication?",
      "Are there specific artifacts the team expects candidates to produce?"
    ],
    followUpEmailDraft:
      "Thank you for the case study discussion. I appreciated the chance to think through customer prioritization, deployment planning, and success measurement. I enjoyed the practical nature of the exercise and remain very interested in the opportunity.",
    notes:
      "Use a clear framework. Keep recommendations practical and customer-specific."
  },
  {
    id: "example-ai-forward-deployed-pm-final-round",
    company: "Example AI Company",
    roleTitle: "Forward Deployed Product Manager",
    interviewStage: "Final Round",
    interviewerName: "Avery Patel",
    interviewDate: "2026-07-24",
    likelyQuestions: [
      "Why are you the right person for this role?",
      "What kind of team environment helps you do your best work?",
      "What would make you excited to accept this offer?"
    ],
    keyTalkingPoints: [
      "Blend of product thinking, technical judgment, and customer communication",
      "Desire to work on practical AI adoption",
      "Ability to operate in ambiguous environments"
    ],
    starStoriesToUse: [
      "Ambiguous project where structure and communication moved work forward",
      "Example of influencing a product or implementation decision"
    ],
    riskAreasOrGaps: [
      "Be direct about what support is needed to ramp quickly",
      "Clarify expectations around travel, ownership, and success metrics"
    ],
    questionsToAsk: [
      "What differentiates people who thrive in this role from people who struggle?",
      "What are the biggest opportunities for this team over the next year?"
    ],
    followUpEmailDraft:
      "Thank you for the final-round conversation. I appreciated the chance to discuss the role in more depth and learn how the team thinks about customer impact, product direction, and applied AI adoption. I am excited about the opportunity and grateful for the time everyone has invested.",
    notes:
      "Close with enthusiasm and fit. Gather final decision criteria and timeline."
  }
];
