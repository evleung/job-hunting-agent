import { CopyButton } from "@/components/copy-button";
import { mockInterviewPrep } from "@/data/mock-interview-prep";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(date));
}

function getStageClass(stage: string) {
  if (stage === "Final Round") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (stage === "Case Study") {
    return "border-purple-200 bg-purple-50 text-purple-700";
  }

  if (stage === "Technical Screen") {
    return "border-sky-200 bg-sky-50 text-sky-700";
  }

  return "border-slate-200 bg-slate-50 text-slate-700";
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SectionList({
  title,
  items,
  copyLabel
}: {
  title: string;
  items: string[];
  copyLabel: string;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <CopyButton text={items.join("\n")} label={copyLabel} />
      </div>
      <BulletList items={items} />
    </div>
  );
}

export default function InterviewsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Interviews
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Interview prep
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Organize likely questions, talking points, STAR stories, risk areas,
          questions to ask, and follow-up drafts. This is mock data only until
          local persistence is added.
        </p>
      </div>

      {mockInterviewPrep.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">
            No interview prep yet
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add mock prep records to shape the interview workflow before
            database persistence is introduced.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {mockInterviewPrep.map((prep) => (
            <article
              key={prep.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {prep.company}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-950">
                    {prep.roleTitle}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {prep.interviewerName} - {formatDate(prep.interviewDate)}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getStageClass(
                    prep.interviewStage
                  )}`}
                >
                  {prep.interviewStage}
                </span>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <SectionList
                  title="Likely questions"
                  items={prep.likelyQuestions}
                  copyLabel="Copy questions"
                />
                <SectionList
                  title="Key talking points"
                  items={prep.keyTalkingPoints}
                  copyLabel="Copy points"
                />
                <SectionList
                  title="STAR stories to use"
                  items={prep.starStoriesToUse}
                  copyLabel="Copy stories"
                />
                <SectionList
                  title="Risk areas or gaps"
                  items={prep.riskAreasOrGaps}
                  copyLabel="Copy risks"
                />
                <SectionList
                  title="Questions to ask"
                  items={prep.questionsToAsk}
                  copyLabel="Copy asks"
                />

                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-slate-500">
                      Follow-up email draft
                    </p>
                    <CopyButton
                      text={prep.followUpEmailDraft}
                      label="Copy email"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {prep.followUpEmailDraft}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-500">Notes</p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {prep.notes ?? "No notes yet."}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
