import { CopyButton } from "@/components/copy-button";
import { mockFollowUpTasks } from "@/data/mock-follow-up-tasks";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(date));
}

function getStatusClass(status: string) {
  if (status === "Sent") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (status === "Drafted") {
    return "border-sky-200 bg-sky-50 text-sky-700";
  }

  if (status === "Snoozed") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-slate-200 bg-slate-50 text-slate-700";
}

export default function FollowUpsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Follow-Ups
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Follow-up tasks
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Track recruiter replies, thank-you notes, referral check-ins, and
          networking follow-ups. Drafts are copyable, but this app does not send
          email.
        </p>
      </div>

      {mockFollowUpTasks.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">
            No follow-ups yet
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add mock follow-up tasks to shape reminders before database
            persistence is introduced.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {mockFollowUpTasks.map((task) => (
            <article
              key={task.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {task.relatedCompany}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-950">
                    {task.taskType}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {task.relatedRole} - {task.relatedContact}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
                    task.status
                  )}`}
                >
                  {task.status}
                </span>
              </div>

              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="font-medium text-slate-500">Due date</dt>
                  <dd className="mt-1 text-slate-950">
                    {formatDate(task.dueDate)}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Related company</dt>
                  <dd className="mt-1 text-slate-950">
                    {task.relatedCompany}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Related role</dt>
                  <dd className="mt-1 text-slate-950">{task.relatedRole}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Related contact</dt>
                  <dd className="mt-1 text-slate-950">
                    {task.relatedContact}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 rounded-md border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-slate-500">
                    Message draft
                  </p>
                  <CopyButton text={task.messageDraft} label="Copy draft" />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {task.messageDraft}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-500">Notes</p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {task.notes ?? "No notes yet."}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
