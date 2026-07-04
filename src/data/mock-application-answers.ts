import type { ApplicationAnswer } from "@/types/application-answer";

export const mockApplicationAnswers: ApplicationAnswer[] = [
  {
    id: "why-this-company-example-ai",
    questionType: "Why this company?",
    questionText: "Why are you interested in Example AI Company?",
    company: "Example AI Company",
    relatedRole: "Forward Deployed Product Manager",
    draftAnswer:
      "I am interested in Example AI Company because the work sits at the intersection of applied AI, customer workflow design, and product strategy.",
    finalAnswer:
      "I am interested in Example AI Company because the role appears focused on turning AI capabilities into practical customer workflows. That combination of product judgment, implementation depth, and customer-facing discovery is exactly where I do my strongest work.",
    tone: "Warm",
    wordCountTarget: "75-125 words",
    status: "Ready",
    notes: "Keep this specific to the company once real research is added."
  },
  {
    id: "why-this-role-solutions-architect",
    questionType: "Why this role?",
    questionText: "Why are you interested in this Solutions Architect role?",
    company: "Example AI Company",
    relatedRole: "Solutions Architect, Applied AI",
    draftAnswer:
      "This role matches my interest in helping customers understand what AI can realistically do and how to turn that into a deployable solution.",
    finalAnswer:
      "This role is compelling because it combines technical translation, customer discovery, and implementation planning. I enjoy working across product, engineering, and customer teams to make complex systems useful and understandable.",
    tone: "Confident",
    wordCountTarget: "75-125 words",
    status: "Ready",
    notes: "Emphasize technical credibility without sounding overly implementation-only."
  },
  {
    id: "why-looking-general",
    questionType: "Why are you looking?",
    questionText: "Why are you exploring new opportunities?",
    company: "Reusable",
    relatedRole: "AI/product roles",
    draftAnswer:
      "I am looking for a role where I can work closer to applied AI products, customer problems, and high-impact deployments.",
    finalAnswer:
      "I am looking for a role where I can apply my product and technical judgment to high-impact AI workflows. I am especially interested in work that combines customer insight, practical implementation, and clear product direction.",
    tone: "Concise",
    wordCountTarget: "50-100 words",
    status: "Needs Review",
    notes: "Reusable answer; tailor based on whether the audience is recruiter or hiring manager."
  },
  {
    id: "salary-expectations-general",
    questionType: "Salary expectations",
    questionText: "What are your salary expectations?",
    company: "Reusable",
    relatedRole: "Senior AI/product roles",
    draftAnswer:
      "I am targeting a competitive package for senior AI/product roles and would like to understand the full compensation range for the position.",
    finalAnswer:
      "I am targeting a competitive package aligned with senior AI/product roles, and I would like to understand the full compensation range and structure for this position before anchoring on a specific number.",
    tone: "Executive",
    wordCountTarget: "25-75 words",
    status: "Ready",
    notes: "Avoid over-sharing early. Keep flexible until range and level are clear."
  },
  {
    id: "client-facing-experience",
    questionType: "Client-facing experience",
    questionText: "Tell us about your client-facing experience.",
    company: "Example AI Company",
    relatedRole: "AI Deployment Strategist",
    draftAnswer:
      "I have worked directly with stakeholders to understand goals, clarify requirements, and translate ambiguous needs into practical plans.",
    finalAnswer:
      "My client-facing experience centers on understanding stakeholder goals, translating ambiguity into practical next steps, and keeping communication clear across technical and non-technical audiences.",
    tone: "Confident",
    wordCountTarget: "75-150 words",
    status: "Draft",
    notes: "Add a concrete example before using in a real application."
  },
  {
    id: "ai-experience",
    questionType: "AI experience",
    questionText: "Describe your experience working with AI or data products.",
    company: "Reusable",
    relatedRole: "Applied AI roles",
    draftAnswer:
      "I have experience using AI tools to analyze workflows, generate structured drafts, and think through product and operational systems.",
    finalAnswer:
      "I have worked with AI tools as practical workflow accelerators: structuring research, drafting and reviewing outputs, analyzing product opportunities, and identifying where automation can improve repeatable work without removing human review.",
    tone: "Technical",
    wordCountTarget: "100-175 words",
    status: "Needs Review",
    notes: "Keep truthful and do not imply production ML ownership unless supported."
  },
  {
    id: "product-decision-influenced",
    questionType: "Product decision influenced",
    questionText: "Tell me about a product decision you influenced.",
    company: "Reusable",
    relatedRole: "Technical Product Manager",
    draftAnswer:
      "I influenced product direction by clarifying user needs, comparing tradeoffs, and helping the team choose a simpler path.",
    finalAnswer:
      "I influenced a product decision by grounding the discussion in user needs, implementation tradeoffs, and the cost of added complexity. The result was a clearer path that solved the immediate workflow without overbuilding.",
    tone: "Concise",
    wordCountTarget: "100-200 words",
    status: "Draft",
    notes: "Needs a specific STAR example before final use."
  },
  {
    id: "tell-me-about-yourself",
    questionType: "Tell me about yourself",
    questionText: "Tell me about yourself.",
    company: "Reusable",
    relatedRole: "AI/product and solutions roles",
    draftAnswer:
      "I work at the intersection of product thinking, technical systems, and customer-facing execution.",
    finalAnswer:
      "I work at the intersection of product thinking, technical systems, and customer-facing execution. I am strongest in roles where I can understand messy workflows, translate them into clear product or implementation plans, and communicate well across technical and business audiences.",
    tone: "Warm",
    wordCountTarget: "60-120 words",
    status: "Ready",
    notes: "Good opening answer; tailor the last sentence to the target role."
  }
];
