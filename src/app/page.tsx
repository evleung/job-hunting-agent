import Link from "next/link";
import { appSections } from "@/lib/navigation";

export default function DashboardPage() {
  const sections = appSections.filter((section) => section.href !== "/");

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Dashboard
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Job-search command center
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          A focused workspace for tracking promising roles, applications,
          contacts, interview prep, follow-ups, and reusable prompts.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
          >
            <h3 className="font-semibold text-slate-950">{section.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
