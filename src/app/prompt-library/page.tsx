import { CopyButton } from "@/components/copy-button";
import {
  mockPromptTemplates,
  promptWorkflowOrder
} from "@/data/mock-prompt-templates";
import type { PromptTemplate } from "@/types/prompt-template";

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

function PromptCard({ prompt }: { prompt: PromptTemplate }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {prompt.workflowCategory}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-950">
            {prompt.name}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {prompt.description}
          </p>
        </div>

        <CopyButton text={prompt.promptBody} label="Copy prompt" />
      </div>

      <dl className="mt-5 grid gap-4 text-sm lg:grid-cols-2">
        <div>
          <dt className="font-medium text-slate-500">Inputs required</dt>
          <dd className="mt-2">
            <TagList items={prompt.inputsRequired} />
          </dd>
        </div>
        <div>
          <dt className="font-medium text-slate-500">Output expected</dt>
          <dd className="mt-1 leading-6 text-slate-950">
            {prompt.outputExpected}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-slate-500">Last updated</dt>
          <dd className="mt-1 text-slate-950">
            {formatDate(prompt.lastUpdatedDate)}
          </dd>
        </div>
      </dl>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-slate-500">Prompt body</p>
          <CopyButton text={prompt.promptBody} label="Copy body" />
        </div>
        <pre className="mt-2 whitespace-pre-wrap rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800">
          {prompt.promptBody}
        </pre>
      </div>
    </article>
  );
}

export default function PromptLibraryPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Prompt Library
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Copy/paste prompt templates
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Reusable prompts for ChatGPT or Codex-assisted job-search workflows.
          This library does not call the OpenAI API and stays editable by hand.
        </p>
      </div>

      {mockPromptTemplates.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">No prompts yet</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add mock prompt templates to shape the prompt library before
            database persistence is introduced.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {promptWorkflowOrder.map((workflow) => {
            const prompts = mockPromptTemplates.filter(
              (prompt) => prompt.workflowCategory === workflow
            );

            if (prompts.length === 0) {
              return null;
            }

            return (
              <section key={workflow} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {workflow}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {prompts.length} prompt{prompts.length === 1 ? "" : "s"}
                  </p>
                </div>

                <div className="grid gap-4">
                  {prompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </section>
  );
}
