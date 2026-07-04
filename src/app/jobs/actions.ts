"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import type { JobPosting } from "@/types/job-posting";

export type SaveJobInput = {
  id?: string;
  company: string;
  roleTitle: string;
  jobUrl?: string;
  location: string;
  workArrangement: string;
  compensation?: string;
  status: string;
  priority: string;
  fitScore?: number;
  jobDescription: string;
  notes?: string;
  nextAction?: string;
  resumeVersion?: string;
};

export type SaveJobResult =
  | {
      ok: true;
      jobId: string;
    }
  | {
      ok: false;
      error: string;
      preview?: JobPosting;
    };

export type DeleteJobResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      error: string;
    };

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function validateJobInput(input: SaveJobInput) {
  if (!input.company.trim()) {
    return "Company is required.";
  }

  if (!input.roleTitle.trim()) {
    return "Role title is required.";
  }

  if (!input.jobUrl?.trim() && !input.jobDescription.trim()) {
    return "Add either a job URL or a job description.";
  }

  if (
    input.fitScore !== undefined &&
    (!Number.isInteger(input.fitScore) || input.fitScore < 0 || input.fitScore > 100)
  ) {
    return "Fit score must be a whole number from 0 to 100.";
  }

  return null;
}

function revalidateJobPath(path: string) {
  try {
    revalidatePath(path);
  } catch {
    // Server-action smoke tests can run outside a Next request context.
  }
}

export async function saveJobAction(input: SaveJobInput): Promise<SaveJobResult> {
  const validationError = validateJobInput(input);

  if (validationError) {
    return {
      ok: false,
      error: validationError
    };
  }

  const companyName = input.company.trim();
  const roleTitle = input.roleTitle.trim();
  const companyId = toSlug(companyName);
  const jobId = input.id ?? toSlug(`${roleTitle}-${companyName}`);

  try {
    await prisma.company.upsert({
      where: {
        id: companyId
      },
      update: {
        name: companyName
      },
      create: {
        id: companyId,
        name: companyName,
        notes: "Created from job form."
      }
    });

    await prisma.jobPosting.upsert({
      where: {
        id: jobId
      },
      update: {
        companyId,
        companyName,
        roleTitle,
        jobUrl: input.jobUrl?.trim() || null,
        location: input.location.trim() || "Not specified",
        workArrangement: input.workArrangement,
        compensation: input.compensation?.trim() || null,
        status: input.status,
        priority: input.priority,
        fitScore: input.fitScore ?? null,
        jobDescription: input.jobDescription.trim(),
        resumeVersion: input.resumeVersion?.trim() || null,
        notes: input.notes?.trim() || null,
        nextAction: input.nextAction?.trim() || null
      },
      create: {
        id: jobId,
        companyId,
        companyName,
        roleTitle,
        jobUrl: input.jobUrl?.trim() || null,
        location: input.location.trim() || "Not specified",
        workArrangement: input.workArrangement,
        compensation: input.compensation?.trim() || null,
        status: input.status,
        priority: input.priority,
        fitScore: input.fitScore ?? null,
        jobDescription: input.jobDescription.trim(),
        resumeVersion: input.resumeVersion?.trim() || null,
        notes: input.notes?.trim() || null,
        nextAction: input.nextAction?.trim() || null
      }
    });

    revalidateJobPath("/jobs");
    revalidateJobPath(`/jobs/${jobId}`);

    return {
      ok: true,
      jobId
    };
  } catch (error) {
    console.error("Failed to save job", error);

    return {
      ok: false,
      error: "Could not save this job to SQLite. Check the local database setup."
    };
  }
}

export async function deleteJobAction(jobId: string): Promise<DeleteJobResult> {
  try {
    await prisma.jobPosting.delete({
      where: {
        id: jobId
      }
    });

    revalidateJobPath("/jobs");
    return {
      ok: true
    };
  } catch (error) {
    console.error("Failed to delete job", error);

    return {
      ok: false,
      error:
        "Could not delete this job. It may be referenced by applications or fit scores."
    };
  }
}
