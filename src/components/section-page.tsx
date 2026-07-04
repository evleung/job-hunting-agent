type SectionPageProps = {
  title: string;
  description: string;
  status?: string;
};

export function SectionPage({
  title,
  description,
  status = "Placeholder"
}: SectionPageProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {status}
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">{title}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          {description}
        </p>
      </div>
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
        <p className="text-sm text-slate-600">
          This section is ready for the next implementation pass. The first MVP
          should add simple local-first records before introducing automation,
          authentication, or external APIs.
        </p>
      </div>
    </section>
  );
}
