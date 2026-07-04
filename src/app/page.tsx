import Link from "next/link";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Dashboard
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Job-search command center
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Start with a clear list of roles worth tracking, then layer in
          applications, scoring, contacts, and follow-ups as the MVP grows.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/jobs"
          className="block rounded-lg border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
        >
          <h3 className="font-semibold text-slate-950">Jobs</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Review saved job postings and compare priority, status,
            compensation, and fit score.
          </p>
        </Link>

        <Link
          href="/applications"
          className="block rounded-lg border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
        >
          <h3 className="font-semibold text-slate-950">Applications</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Track application status, resume versions, sources, follow-ups, and
            notes.
          </p>
        </Link>

        <Link
          href="/resume-versions"
          className="block rounded-lg border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
        >
          <h3 className="font-semibold text-slate-950">Resume Versions</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Compare resume variants by target role, positioning angle, strengths,
            and local file reference.
          </p>
        </Link>
      </div>
    </section>
  );
}
