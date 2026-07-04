import Link from "next/link";
import { JobForm } from "@/components/job-form";
import { findJobPosting, mockJobs } from "@/data/mock-jobs";

type EditJobPageProps = {
  params: Promise<{
    jobId: string;
  }>;
};

export function generateStaticParams() {
  return mockJobs.map((job) => ({
    jobId: job.id
  }));
}

export default async function EditJobPage({ params }: EditJobPageProps) {
  const { jobId } = await params;
  const job = findJobPosting(jobId);

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
            This mock job ID does not match any saved posting.
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
