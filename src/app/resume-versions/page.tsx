import { mockResumeVersions } from "@/data/mock-resume-versions";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(date));
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ResumeVersionsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Resume Versions
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Resume version tracker
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Track positioning, target roles, file references, and notes for each
          resume variant without storing actual resume content in the app.
        </p>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
        Do not commit actual resume files or full resume content to a public
        repository. Use local-only placeholders or private storage references.
      </div>

      {mockResumeVersions.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">
            No resume versions yet
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add mock resume version records to shape the tracker before
            database persistence is introduced.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {mockResumeVersions.map((resume) => (
            <article
              key={resume.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {resume.targetRoleType}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-950">
                    {resume.name}
                  </h3>
                </div>
                <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  {resume.resumeLength}
                </span>
              </div>

              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="font-medium text-slate-500">
                    Positioning angle
                  </dt>
                  <dd className="mt-1 leading-6 text-slate-950">
                    {resume.positioningAngle}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">File reference</dt>
                  <dd className="mt-1 break-words font-mono text-xs text-slate-950">
                    {resume.fileReference}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Last updated</dt>
                  <dd className="mt-1 text-slate-950">
                    {formatDate(resume.lastUpdatedDate)}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 grid gap-5 border-t border-slate-100 pt-5 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Best-fit roles
                  </p>
                  <div className="mt-2">
                    <TagList items={resume.bestFitRoles} />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Key strengths
                  </p>
                  <div className="mt-2">
                    <TagList items={resume.keyStrengths} />
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-500">Notes</p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {resume.notes ?? "No notes yet."}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
