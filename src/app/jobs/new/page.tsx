import Link from "next/link";
import { JobForm } from "@/components/job-form";

export default function NewJobPage() {
  return (
    <section className="space-y-6">
      <Link
        href="/jobs"
        className="text-sm font-medium text-slate-600 hover:text-slate-950"
      >
        Back to jobs
      </Link>

      <JobForm mode="create" />
    </section>
  );
}
