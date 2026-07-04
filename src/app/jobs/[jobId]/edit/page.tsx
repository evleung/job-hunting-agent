import Link from "next/link";
import { JobForm } from "@/components/job-form";
import { getJobPostingById } from "@/lib/job-postings";

export const dynamic = "force-dynamic";

type EditJobPageProps = {
  params: Promise<{
    jobId: string;
  }>;
};

export default async function EditJobPage({ params }: EditJobPageProps) {
  const { jobId } = await params;
  let job = null;
  let loadError = false;

  try {
    job = await getJobPostingById(jobId);
  } catch (error) {
    console.error("Failed to load job for editing", error);
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
        href={`/jobs/${job.id}`}
        className="text-sm font-medium text-slate-600 hover:text-slate-950"
      >
        Back to job detail
      </Link>

      <JobForm mode="edit" initialJob={job} />
    </section>
  );
}
