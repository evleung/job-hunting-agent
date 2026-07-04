import Link from "next/link";
import { ManualFitScoring } from "@/components/manual-fit-scoring";
import { JobPromptGenerator } from "@/components/job-prompt-generator";
import { getJobPostingById } from "@/lib/job-postings";

export const dynamic = "force-dynamic";

type JobDetailPageProps = {
  params: Promise<{
    jobId: string;
  }>;
};

type DetailSectionProps = {
  title: string;
  children: React.ReactNode;
};

function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 text-sm leading-6 text-slate-700">{children}</div>
    </section>
  );
}

function Field({ label, value }: { label: string; value?: string | number }) {
  return (
    <div>
      <dt className="font-medium text-slate-500">{label}</dt>
      <dd className="mt-1 text-slate-950">{value ?? "Not specified"}</dd>
    </div>
  );
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { jobId } = await params;
  let job = null;
  let loadError = false;

  try {
    job = await getJobPostingById(jobId);
  } catch (error) {
    console.error("Failed to load job from SQLite", error);
    loadError = true;
  }

  if (loadError) {
    return (
      <section className="space-y-6">
        <Link
          href="/jobs"
          className="text-sm font-medium text-slate-600 hover:text-slate-950"
        >
          Back to jobs
        </Link>
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-2xl font-semibold text-rose-950">
            Could not load job
          </h2>
          <p className="mt-2 text-sm leading-6 text-rose-700">
            Check that the local SQLite database has been initialized and
            seeded, then refresh this page.
          </p>
        </div>
      </section>
    );
  }

  if (!job) {
    return (
      <section className="space-y-6">
        <Link
          href="/jobs"
          className="text-sm font-medium text-slate-600 hover:text-slate-950"
        >
          Back to jobs
        </Link>
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-950">
            Job not found
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This job ID does not match any database-backed posting.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <Link
        href="/jobs"
        className="text-sm font-medium text-slate-600 hover:text-slate-950"
      >
        Back to jobs
      </Link>

      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {job.company}
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          {job.roleTitle}
        </h2>
        <p className="mt-3 text-base text-slate-600">
          {job.location} - {job.workArrangement}
        </p>
        <Link
          href={`/jobs/${job.id}/edit`}
          className="mt-4 inline-flex rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Edit draft
        </Link>
      </div>

      <DetailSection title="Overview">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Company" value={job.company} />
          <Field label="Role title" value={job.roleTitle} />
          <Field label="Job URL" value={job.jobUrl} />
          <Field label="Location" value={job.location} />
          <Field label="Work arrangement" value={job.workArrangement} />
          <Field label="Compensation" value={job.compensation} />
          <Field label="Priority" value={`${job.priority} priority`} />
          <Field label="Job ID" value={job.id} />
        </dl>
      </DetailSection>

      <DetailSection title="Job description">
        <p>{job.jobDescription}</p>
      </DetailSection>

      <DetailSection title="Fit score">
        <ManualFitScoring currentFitScore={job.fitScore} />
      </DetailSection>

      <DetailSection title="Prompt Generator">
        <JobPromptGenerator job={job} />
      </DetailSection>

      <DetailSection title="Application status">
        <p>{job.status}</p>
      </DetailSection>

      <DetailSection title="Resume version">
        <p>{job.resumeVersion ?? "No resume version selected yet."}</p>
      </DetailSection>

      <DetailSection title="Notes">
        <p>{job.notes ?? "No notes yet."}</p>
      </DetailSection>

      <DetailSection title="Next action">
        <p>{job.nextAction ?? "No next action set."}</p>
      </DetailSection>
    </section>
  );
}
