import Link from "next/link";
import { appSections } from "@/lib/navigation";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col lg:flex-row">
        <aside className="border-b border-slate-200 bg-white px-5 py-5 lg:w-72 lg:border-b-0 lg:border-r">
          <Link href="/" className="block">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Evan Leung
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-950">
              Job Hunting Agent
            </h1>
          </Link>
          <nav className="mt-6 grid gap-1">
            {appSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 px-5 py-6 sm:px-8 lg:px-10">{children}</main>
      </div>
    </div>
  );
}
