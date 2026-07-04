"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteJobAction, saveJobAction } from "@/app/jobs/actions";
import type {
  JobPosting,
  JobPriority,
  JobStatus,
  WorkArrangement
} from "@/types/job-posting";

type JobFormValues = {
  company: string;
  roleTitle: string;
  jobUrl: string;
  location: string;
  workArrangement: WorkArrangement;
  compensation: string;
  status: JobStatus;
  priority: JobPriority;
  fitScore: string;
  jobDescription: string;
  notes: string;
  nextAction: string;
};

type JobFormProps = {
  mode: "create" | "edit";
  initialJob?: JobPosting;
};

type ValidationErrors = Partial<Record<keyof JobFormValues | "source", string>>;

const workArrangementOptions: WorkArrangement[] = ["Remote", "Hybrid", "On-site"];
const statusOptions: JobStatus[] = [
  "Interested",
  "Researching",
  "Applied",
  "Interviewing",
  "Paused",
  "Closed"
];
const priorityOptions: JobPriority[] = ["High", "Medium", "Low"];

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function createInitialValues(job?: JobPosting): JobFormValues {
  return {
    company: job?.company ?? "",
    roleTitle: job?.roleTitle ?? "",
    jobUrl: job?.jobUrl ?? "",
    location: job?.location ?? "",
    workArrangement: job?.workArrangement ?? "Remote",
    compensation: job?.compensation ?? "",
    status: job?.status ?? "Interested",
    priority: job?.priority ?? "Medium",
    fitScore: job?.fitScore?.toString() ?? "",
    jobDescription: job?.jobDescription ?? "",
    notes: job?.notes ?? "",
    nextAction: job?.nextAction ?? ""
  };
}

function validate(values: JobFormValues) {
  const errors: ValidationErrors = {};

  if (!values.company.trim()) {
    errors.company = "Company is required.";
  }

  if (!values.roleTitle.trim()) {
    errors.roleTitle = "Role title is required.";
  }

  if (!values.jobUrl.trim() && !values.jobDescription.trim()) {
    errors.source = "Add either a job URL or a job description.";
  }

  if (values.fitScore.trim()) {
    const score = Number(values.fitScore);
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      errors.fitScore = "Fit score must be a whole number from 0 to 100.";
    }
  }

  return errors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-1 text-sm text-rose-700">{message}</p>;
}

function TextInput({
  label,
  name,
  value,
  onChange,
  required,
  error,
  type = "text"
}: {
  label: string;
  name: keyof JobFormValues;
  value: string;
  onChange: (name: keyof JobFormValues, value: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
      />
      <FieldError message={error} />
    </label>
  );
}

function SelectInput<T extends string>({
  label,
  name,
  value,
  options,
  onChange
}: {
  label: string;
  name: keyof JobFormValues;
  value: T;
  options: T[];
  onChange: (name: keyof JobFormValues, value: T) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <select
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        name={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value as T)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  error
}: {
  label: string;
  name: keyof JobFormValues;
  value: string;
  onChange: (name: keyof JobFormValues, value: string) => void;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <textarea
        className="mt-1 min-h-28 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        name={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
      />
      <FieldError message={error} />
    </label>
  );
}

export function JobForm({ mode, initialJob }: JobFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<JobFormValues>(() =>
    createInitialValues(initialJob)
  );
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submittedJob, setSubmittedJob] = useState<JobPosting | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const formTitle = mode === "create" ? "Add job" : "Edit job";
  const submitLabel = mode === "create" ? "Save job" : "Save changes";

  const persistenceNote = useMemo(
    () =>
      "This form now saves to the local SQLite database. If saving fails, the form will keep a local preview so you do not lose the entered details.",
    []
  );

  function updateValue(name: keyof JobFormValues, value: string) {
    setValues((current) => ({
      ...current,
      [name]: value
    }));
  }

  function buildJobPosting(): JobPosting {
    const fitScore = values.fitScore.trim()
      ? Number(values.fitScore)
      : undefined;

    return {
      id:
        initialJob?.id ??
        toSlug(`${values.roleTitle}-${values.company}`) ??
        "new-job-draft",
      company: values.company.trim(),
      roleTitle: values.roleTitle.trim(),
      jobUrl: values.jobUrl.trim() || undefined,
      location: values.location.trim() || "Not specified",
      workArrangement: values.workArrangement,
      compensation: values.compensation.trim() || undefined,
      status: values.status,
      priority: values.priority,
      fitScore,
      jobDescription: values.jobDescription.trim(),
      notes: values.notes.trim() || undefined,
      nextAction: values.nextAction.trim() || undefined,
      resumeVersion: initialJob?.resumeVersion
    };
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFormError(null);

    if (Object.keys(nextErrors).length > 0) {
      setSubmittedJob(null);
      return;
    }

    const job = buildJobPosting();
    setIsSaving(true);

    const result = await saveJobAction({
      id: initialJob?.id,
      company: job.company,
      roleTitle: job.roleTitle,
      jobUrl: job.jobUrl,
      location: job.location,
      workArrangement: job.workArrangement,
      compensation: job.compensation,
      status: job.status,
      priority: job.priority,
      fitScore: job.fitScore,
      jobDescription: job.jobDescription,
      notes: job.notes,
      nextAction: job.nextAction,
      resumeVersion: job.resumeVersion
    });

    setIsSaving(false);

    if (!result.ok) {
      setFormError(result.error);
      setSubmittedJob(job);
      return;
    }

    router.push(`/jobs/${result.jobId}`);
    router.refresh();
  }

  async function handleDelete() {
    if (!initialJob) {
      return;
    }

    const confirmed = window.confirm(
      "Delete this job? This only works when the job has no dependent application or fit-score records."
    );

    if (!confirmed) {
      return;
    }

    setFormError(null);
    setIsDeleting(true);
    const result = await deleteJobAction(initialJob.id);
    setIsDeleting(false);

    if (!result.ok) {
      setFormError(result.error);
      return;
    }

    router.push("/jobs");
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-slate-950">{formTitle}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Capture the core details and save them to the local SQLite database.
        </p>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
        {persistenceNote}
      </div>

      <form
        className="space-y-6 rounded-lg border border-slate-200 bg-white p-5"
        onSubmit={handleSubmit}
      >
        {formError ? (
          <div className="rounded-md border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {formError}
          </div>
        ) : null}

        {errors.source ? (
          <div className="rounded-md border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {errors.source}
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput
            label="Company"
            name="company"
            value={values.company}
            onChange={updateValue}
            required
            error={errors.company}
          />
          <TextInput
            label="Role title"
            name="roleTitle"
            value={values.roleTitle}
            onChange={updateValue}
            required
            error={errors.roleTitle}
          />
          <TextInput
            label="Job URL"
            name="jobUrl"
            value={values.jobUrl}
            onChange={updateValue}
            type="url"
          />
          <TextInput
            label="Location"
            name="location"
            value={values.location}
            onChange={updateValue}
          />
          <SelectInput
            label="Work arrangement"
            name="workArrangement"
            value={values.workArrangement}
            options={workArrangementOptions}
            onChange={updateValue}
          />
          <TextInput
            label="Compensation"
            name="compensation"
            value={values.compensation}
            onChange={updateValue}
          />
          <SelectInput
            label="Status"
            name="status"
            value={values.status}
            options={statusOptions}
            onChange={updateValue}
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={values.priority}
            options={priorityOptions}
            onChange={updateValue}
          />
          <TextInput
            label="Fit score"
            name="fitScore"
            value={values.fitScore}
            onChange={updateValue}
            type="number"
            error={errors.fitScore}
          />
        </div>

        <TextArea
          label="Job description"
          name="jobDescription"
          value={values.jobDescription}
          onChange={updateValue}
        />
        <TextArea
          label="Notes"
          name="notes"
          value={values.notes}
          onChange={updateValue}
        />
        <TextArea
          label="Next action"
          name="nextAction"
          value={values.nextAction}
          onChange={updateValue}
        />

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={isSaving || isDeleting}
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {isSaving ? "Saving..." : submitLabel}
          </button>
          {mode === "edit" && initialJob ? (
            <button
              type="button"
              disabled={isSaving || isDeleting}
              onClick={handleDelete}
              className="rounded-md border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
            >
              {isDeleting ? "Deleting..." : "Delete job"}
            </button>
          ) : null}
          <p className="text-sm text-slate-500">
            Saved jobs redirect to their detail page.
          </p>
        </div>
      </form>

      {submittedJob ? (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
          <h3 className="text-lg font-semibold text-slate-950">
            Unsaved local preview
          </h3>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-medium text-slate-500">Company</dt>
              <dd className="mt-1 text-slate-950">{submittedJob.company}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Role title</dt>
              <dd className="mt-1 text-slate-950">{submittedJob.roleTitle}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Status</dt>
              <dd className="mt-1 text-slate-950">{submittedJob.status}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Priority</dt>
              <dd className="mt-1 text-slate-950">{submittedJob.priority}</dd>
            </div>
          </dl>
        </section>
      ) : null}
    </div>
  );
}
