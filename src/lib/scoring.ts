export const scoringCriteria = [
  {
    id: "roleFit",
    label: "Role fit",
    description: "How directly the role matches the kind of work Evan wants."
  },
  {
    id: "seniorityFit",
    label: "Seniority fit",
    description: "How well the level matches Evan's current experience."
  },
  {
    id: "domainFit",
    label: "Domain fit",
    description: "How interesting and relevant the company domain is."
  },
  {
    id: "technicalFit",
    label: "Technical fit",
    description: "How well the role matches Evan's technical strengths."
  },
  {
    id: "customerFacingFit",
    label: "Customer-facing fit",
    description: "How well the role uses customer discovery, advisory, or deployment work."
  },
  {
    id: "aiDataRelevance",
    label: "AI/data relevance",
    description: "How central AI, data, or applied automation is to the role."
  },
  {
    id: "compensationPotential",
    label: "Compensation potential",
    description: "How promising the compensation appears."
  },
  {
    id: "interviewProbability",
    label: "Interview probability",
    description: "How likely the application is to get a recruiter or hiring manager response."
  },
  {
    id: "resumeAlignment",
    label: "Resume alignment",
    description: "How easy it is to tell a truthful, strong story with the current resume."
  },
  {
    id: "networkingOpportunity",
    label: "Networking opportunity",
    description: "How much the role or company creates useful relationship-building paths."
  },
  {
    id: "longTermUpside",
    label: "Long-term upside",
    description: "How much the role could compound into better future options."
  },
  {
    id: "screenOutRisk",
    label: "Screen-out risk",
    description: "How likely requirements, location, level, or background filters could block progress."
  }
] as const;

export type ScoringCriterionId = (typeof scoringCriteria)[number]["id"];

export type ManualScoreInputs = Record<ScoringCriterionId, number>;

export type ScoreTier =
  | "Tier 1 - Must Apply"
  | "Tier 2 - Strong Apply"
  | "Tier 3 - Apply Selectively"
  | "Tier 4 - Low Priority"
  | "Tier 5 - Avoid";

export type FitScoreResult = {
  overallScore: number;
  tier: ScoreTier;
  recommendedAction: string;
};

export const defaultManualScores: ManualScoreInputs = {
  roleFit: 5,
  seniorityFit: 5,
  domainFit: 5,
  technicalFit: 5,
  customerFacingFit: 5,
  aiDataRelevance: 5,
  compensationPotential: 5,
  interviewProbability: 5,
  resumeAlignment: 5,
  networkingOpportunity: 5,
  longTermUpside: 5,
  screenOutRisk: 5
};

export function getScoreTier(overallScore: number): ScoreTier {
  if (overallScore >= 85) {
    return "Tier 1 - Must Apply";
  }

  if (overallScore >= 70) {
    return "Tier 2 - Strong Apply";
  }

  if (overallScore >= 55) {
    return "Tier 3 - Apply Selectively";
  }

  if (overallScore >= 40) {
    return "Tier 4 - Low Priority";
  }

  return "Tier 5 - Avoid";
}

function getRecommendedAction(tier: ScoreTier) {
  switch (tier) {
    case "Tier 1 - Must Apply":
      return "Prioritize this role, tailor the resume, and prepare a strong application.";
    case "Tier 2 - Strong Apply":
      return "Apply after a focused resume pass and targeted company research.";
    case "Tier 3 - Apply Selectively":
      return "Apply only if the role supports a clear story or useful relationship path.";
    case "Tier 4 - Low Priority":
      return "Keep on the watch list, but spend time on stronger opportunities first.";
    case "Tier 5 - Avoid":
      return "Skip unless new information materially changes the fit.";
  }
}

export function calculateJobFitScore(scores: ManualScoreInputs): FitScoreResult {
  const adjustedScores = scoringCriteria.map((criterion) => {
    const score = Math.min(10, Math.max(0, scores[criterion.id]));

    // Screen-out risk is a negative signal, so a higher risk should reduce the score.
    return criterion.id === "screenOutRisk" ? 10 - score : score;
  });

  const total = adjustedScores.reduce((sum, score) => sum + score, 0);
  const average = total / adjustedScores.length;
  const overallScore = Math.round(average * 10);
  const tier = getScoreTier(overallScore);

  return {
    overallScore,
    tier,
    recommendedAction: getRecommendedAction(tier)
  };
}
