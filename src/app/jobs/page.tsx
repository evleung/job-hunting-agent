import { mockJobs } from "@/data/mock-jobs";

function getPriorityClass(priority: string) {
  if (priority === "High") {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }

  if (priority === "Medium") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-slate-200 bg-slate-50 text-slate-700";
}

export default function JobsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Jobs
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Mock job postings
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          A starter list for evaluating promising AI/product roles before adding
          persistence, forms, or automation.
        </p>
      </div>

      {mockJobs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">No jobs yet</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add mock job postings to start shaping the tracker before database
            persistence is introduced.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {mockJobs.map((job) => (
            <article
              key={job.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
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
                    {job.location} · {job.workArrangement}
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
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
