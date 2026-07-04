import Link from "next/link";
import { mockApplications } from "@/data/mock-applications";

function formatDate(date?: string) {
  if (!date) {
    return "Not set";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(date));
}

function getStatusClass(status: string) {
  if (status === "Offer") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (status === "Rejected" || status === "Withdrawn") {
    return "border-slate-200 bg-slate-50 text-slate-600";
  }

  if (status === "Not Started" || status === "Drafting") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-sky-200 bg-sky-50 text-sky-700";
}

export default function ApplicationsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Applications
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Application tracker
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Track application progress, resume versions, sources, follow-up dates,
          and notes. This is mock data only until local persistence is added.
        </p>
      </div>

      {mockApplications.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">No applications yet</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add mock application records to shape the tracker before database
            persistence is introduced.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {mockApplications.map((application) => (
            <article
              key={application.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {application.company}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-950">
                    {application.roleTitle}
                  </h3>
                  <Link
                    href={`/jobs/${application.relatedJobId}`}
                    className="mt-2 inline-flex text-sm font-medium text-slate-600 hover:text-slate-950"
                  >
                    Related job: {application.relatedJobId}
                  </Link>
                </div>

                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
                    application.status
                  )}`}
                >
                  {application.status}
                </span>
              </div>

              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="font-medium text-slate-500">Date applied</dt>
                  <dd className="mt-1 text-slate-950">
                    {formatDate(application.dateApplied)}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Resume version</dt>
                  <dd className="mt-1 text-slate-950">
                    {application.resumeVersionUsed}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">
                    Application source
                  </dt>
                  <dd className="mt-1 text-slate-950">
                    {application.applicationSource}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">
                    Next follow-up
                  </dt>
                  <dd className="mt-1 text-slate-950">
                    {formatDate(application.nextFollowUpDate)}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-500">Notes</p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {application.notes ?? "No notes yet."}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
