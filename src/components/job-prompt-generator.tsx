"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/copy-button";
import type { JobPosting } from "@/types/job-posting";

type PromptOption = {
  id: string;
  label: string;
  instruction: string;
  outputFormat: string;
};

const promptOptions: PromptOption[] = [
  {
    id: "score-job",
    label: "Score this job",
    instruction:
      "Score this job for fit using role fit, seniority fit, domain fit, technical fit, customer-facing fit, AI/data relevance, compensation potential, interview probability, resume alignment, networking opportunity, long-term upside, and screen-out risk.",
    outputFormat:
      "Return a 0-100 overall score, a tier, the top reasons to apply, the biggest risks, and a recommended next action."
  },
  {
    id: "tailor-resume",
    label: "Tailor my resume",
    instruction:
      "Suggest truthful resume tailoring ideas for this role using Evan's actual background only. Do not invent employers, titles, metrics, tools, credentials, or responsibilities.",
    outputFormat:
      "Return target positioning, keywords to emphasize, bullet rewrite ideas, and gaps to handle honestly."
  },
  {
    id: "extract-ats-keywords",
    label: "Extract ATS keywords",
    instruction:
      "Extract likely ATS and recruiter-screening keywords from this job posting.",
    outputFormat:
      "Group keywords by role responsibilities, technical skills, domain terms, leadership/customer-facing language, and nice-to-have signals."
  },
  {
    id: "draft-application-answers",
    label: "Draft application answers",
    instruction:
      "Draft concise, truthful application-answer starting points for common questions for this role.",
    outputFormat:
      "Include drafts for why this company, why this role, relevant AI/customer-facing experience, salary expectations if appropriate, and why Evan is looking."
  },
  {
    id: "prepare-recruiter-screen",
    label: "Prepare for recruiter screen",
    instruction:
      "Prepare Evan for a recruiter screen for this role, focusing on positioning, motivation, compensation, logistics, and likely screen-out risks.",
    outputFormat:
      "Return a talk track, likely questions, concise answers, questions to ask the recruiter, and risks to prepare for."
  },
  {
    id: "prepare-hiring-manager",
    label: "Prepare for hiring manager interview",
    instruction:
      "Prepare Evan for a hiring manager interview for this role, focusing on role fit, execution examples, stakeholder work, AI/product judgment, and customer-facing credibility.",
    outputFormat:
      "Return likely questions, strong talking points, STAR story prompts, questions to ask, and areas where Evan should be precise or cautious."
  },
  {
    id: "draft-outreach",
    label: "Draft outreach message",
    instruction:
      "Draft a short, respectful outreach message for someone at this company about this role. Keep it specific, truthful, and not overly salesy.",
    outputFormat:
      "Return a LinkedIn version and an email version, each with a clear ask and no exaggerated claims."
  }
];

function formatOptionalField(label: string, value?: string | number) {
  return `${label}: ${value ?? "Not specified"}`;
}

function buildPrompt(job: JobPosting, option: PromptOption) {
  return `You are helping Evan Leung evaluate and prepare for a job opportunity.

Task:
${option.instruction}

Important truthfulness instructions:
- Use Evan's real background truthfully.
- Do not invent experience, credentials, employers, metrics, tools, or accomplishments.
- If a detail is missing, mark it as a question or assumption instead of filling it in.
- Keep all outputs editable so Evan can review and revise before using them.
- Do not submit anything or contact anyone automatically.

Job context:
${formatOptionalField("Company", job.company)}
${formatOptionalField("Role title", job.roleTitle)}
${formatOptionalField("Location", job.location)}
${formatOptionalField("Work arrangement", job.workArrangement)}
${formatOptionalField("Compensation", job.compensation)}
${formatOptionalField("Status", job.status)}
${formatOptionalField("Priority", job.priority)}
${formatOptionalField("Current fit score", job.fitScore)}
${formatOptionalField("Resume version", job.resumeVersion)}
${formatOptionalField("Job URL", job.jobUrl)}

Job description:
${job.jobDescription || "Not specified"}

Existing notes:
${job.notes || "None yet."}

Next action:
${job.nextAction || "None set."}

Output requested:
${option.outputFormat}`;
}

export function JobPromptGenerator({ job }: { job: JobPosting }) {
  const [selectedPromptId, setSelectedPromptId] = useState(promptOptions[0].id);
  const selectedPrompt =
    promptOptions.find((option) => option.id === selectedPromptId) ??
    promptOptions[0];

  const prompt = useMemo(
    () => buildPrompt(job, selectedPrompt),
    [job, selectedPrompt]
  );

  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
        This generator creates copy/paste prompts for ChatGPT using this job's
        saved data. It does not call the OpenAI API, store API keys, or submit
        anything automatically.
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {promptOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setSelectedPromptId(option.id)}
            className={`rounded-md border px-3 py-2 text-left text-sm font-medium transition ${
              option.id === selectedPrompt.id
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Generated prompt
            </p>
            <h4 className="mt-1 text-lg font-semibold text-slate-950">
              {selectedPrompt.label}
            </h4>
          </div>
          <CopyButton text={prompt} label="Copy prompt" />
        </div>

        <pre className="mt-4 max-h-[32rem] overflow-auto whitespace-pre-wrap rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800">
          {prompt}
        </pre>
      </div>
    </div>
  );
}
