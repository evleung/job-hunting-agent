import Link from "next/link";
import { getJobPostings } from "@/lib/job-postings";
import type { JobPosting, JobPriority } from "@/types/job-posting";

export const dynamic = "force-dynamic";

function getPriorityClass(priority: JobPriority) {
  if (priority === "High") {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }

  if (priority === "Medium") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-slate-200 bg-slate-50 text-slate-700";
}

export default async function JobsPage() {
  let jobs: JobPosting[] = [];
  let loadError = false;

  try {
    jobs = await getJobPostings();
  } catch (error) {
    console.error("Failed to load jobs from SQLite", error);
    loadError = true;
  }

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Jobs
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">
              Job postings
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
              Database-backed roles for evaluating priority, status,
              compensation, and fit score.
            </p>
          </div>
          <Link
            href="/jobs/new"
            className="inline-flex rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Add job
          </Link>
        </div>
      </div>

      {loadError ? (
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-6">
          <h3 className="font-semibold text-rose-950">Could not load jobs</h3>
          <p className="mt-2 text-sm leading-6 text-rose-700">
            Check that the local SQLite database has been initialized and
            seeded, then refresh this page.
          </p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">No jobs yet</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            No database-backed job postings were found. Seed the local database
            or add a job when persistence-backed forms are implemented.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="block rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {job.company}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-950">
                    {job.roleTitle}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {job.location} - {job.workArrangement}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getPriorityClass(
                      job.priority
                    )}`}
                  >
                    {job.priority} priority
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    {job.status}
                  </span>
                </div>
              </div>

              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="font-medium text-slate-500">Compensation</dt>
                  <dd className="mt-1 text-slate-950">
                    {job.compensation ?? "Not listed"}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Fit score</dt>
                  <dd className="mt-1 text-slate-950">
                    {job.fitScore ? `${job.fitScore}/100` : "Not scored"}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Status</dt>
                  <dd className="mt-1 text-slate-950">{job.status}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Arrangement</dt>
                  <dd className="mt-1 text-slate-950">
                    {job.workArrangement}
                  </dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
