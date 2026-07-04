import type { ResumeVersion } from "@/types/resume-version";

export const mockResumeVersions: ResumeVersion[] = [
  {
    id: "ai-solutions-architect-resume",
    name: "AI Solutions Architect Resume",
    targetRoleType: "Applied AI solutions and customer architecture",
    resumeLength: "Two pages",
    positioningAngle:
      "Technical translator who can turn AI capabilities into practical customer deployments.",
    bestFitRoles: [
      "Solutions Architect, Applied AI",
      "AI Solutions Consultant",
      "Customer Engineer, AI"
    ],
    keyStrengths: [
      "AI workflow design",
      "Technical discovery",
      "Stakeholder communication",
      "Implementation planning"
    ],
    fileReference: "local-only/resumes/ai-solutions-architect.pdf",
    lastUpdatedDate: "2026-07-01",
    notes:
      "Use for roles that need technical credibility plus customer-facing judgment."
  },
  {
    id: "forward-deployed-product-manager-resume",
    name: "Forward Deployed Product Manager Resume",
    targetRoleType: "Customer-facing AI product and deployment work",
    resumeLength: "Two pages",
    positioningAngle:
      "Product operator who can discover customer needs and shape implementation into product direction.",
    bestFitRoles: [
      "Forward Deployed Product Manager",
      "Forward Deployed Engineer/Product",
      "AI Product Strategist"
    ],
    keyStrengths: [
      "Product discovery",
      "Customer implementation",
      "Roadmap translation",
      "Cross-functional execution"
    ],
    fileReference: "local-only/resumes/forward-deployed-pm.pdf",
    lastUpdatedDate: "2026-07-02",
    notes:
      "Best for roles that blend customer work, product thinking, and ambiguous AI deployments."
  },
  {
    id: "technical-product-manager-resume",
    name: "Technical Product Manager Resume",
    targetRoleType: "Technical product management",
    resumeLength: "One page",
    positioningAngle:
      "Technical product thinker with strong systems judgment and user-focused prioritization.",
    bestFitRoles: [
      "Technical Product Manager",
      "AI Product Manager",
      "Platform Product Manager"
    ],
    keyStrengths: [
      "Technical scoping",
      "Product strategy",
      "Requirements definition",
      "Execution clarity"
    ],
    fileReference: "local-only/resumes/technical-product-manager.pdf",
    lastUpdatedDate: "2026-06-28",
    notes:
      "Use when the role emphasizes product ownership more than services or solution delivery."
  },
  {
    id: "solutions-engineer-resume",
    name: "Solutions Engineer Resume",
    targetRoleType: "Pre-sales and technical solution delivery",
    resumeLength: "One page",
    positioningAngle:
      "Customer-facing technical problem solver who can explain, prototype, and guide adoption.",
    bestFitRoles: [
      "Solutions Engineer",
      "Sales Engineer",
      "Technical Solutions Consultant"
    ],
    keyStrengths: [
      "Customer demos",
      "Technical explanation",
      "Discovery questions",
      "Proof-of-concept support"
    ],
    fileReference: "local-only/resumes/solutions-engineer.pdf",
    lastUpdatedDate: "2026-06-25",
    notes:
      "Useful for roles with heavier sales support, demos, or technical evaluation cycles."
  },
  {
    id: "director-professional-services-resume",
    name: "Director Professional Services Resume",
    targetRoleType: "Services leadership and enterprise delivery",
    resumeLength: "Two pages",
    positioningAngle:
      "Delivery leader who can scale customer outcomes, implementation teams, and operational systems.",
    bestFitRoles: [
      "Director, Professional Services",
      "Implementation Director",
      "Customer Delivery Lead"
    ],
    keyStrengths: [
      "Delivery operations",
      "Team leadership",
      "Enterprise implementation",
      "Customer outcomes"
    ],
    fileReference: "local-only/resumes/director-professional-services.pdf",
    lastUpdatedDate: "2026-06-20",
    notes:
      "Use selectively for leadership roles where services scope is strategic, not purely reactive."
  }
];
