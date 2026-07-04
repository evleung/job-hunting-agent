import { CopyButton } from "@/components/copy-button";
import { mockApplicationAnswers } from "@/data/mock-application-answers";

function getStatusClass(status: string) {
  if (status === "Ready" || status === "Used") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (status === "Needs Review") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  if (status === "Archived") {
    return "border-slate-200 bg-slate-50 text-slate-600";
  }

  return "border-sky-200 bg-sky-50 text-sky-700";
}

export default function ApplicationAnswersPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Application Answers
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Application answer tracker
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Store reusable, reviewable answer drafts for common application
          questions. These are mock records until local persistence is added.
        </p>
      </div>

      {mockApplicationAnswers.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">
            No application answers yet
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add mock answers to shape the tracker before database persistence is
            introduced.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {mockApplicationAnswers.map((answer) => {
            const copyText = answer.finalAnswer ?? answer.draftAnswer;

            return (
              <article
                key={answer.id}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {answer.questionType}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-950">
                      {answer.questionText}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {answer.company} - {answer.relatedRole}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
                        answer.status
                      )}`}
                    >
                      {answer.status}
                    </span>
                    <CopyButton text={copyText} label="Copy answer" />
                  </div>
                </div>

                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="font-medium text-slate-500">Tone</dt>
                    <dd className="mt-1 text-slate-950">{answer.tone}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-500">
                      Word count target
                    </dt>
                    <dd className="mt-1 text-slate-950">
                      {answer.wordCountTarget}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-500">Company</dt>
                    <dd className="mt-1 text-slate-950">{answer.company}</dd>
                  </div>
                </dl>

                <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 lg:grid-cols-2">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-slate-500">
                        Draft answer
                      </p>
                      <CopyButton text={answer.draftAnswer} label="Copy draft" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {answer.draftAnswer}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-slate-500">
                        Final answer
                      </p>
                      {answer.finalAnswer ? (
                        <CopyButton
                          text={answer.finalAnswer}
                          label="Copy final"
                        />
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {answer.finalAnswer ?? "No final answer yet."}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm font-medium text-slate-500">Notes</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {answer.notes ?? "No notes yet."}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
