import { mockContacts } from "@/data/mock-contacts";

function formatDate(date?: string) {
  if (!date) {
    return "Not set";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(date));
}

function getRelationshipClass(relationshipType: string) {
  if (relationshipType === "Recruiter") {
    return "border-sky-200 bg-sky-50 text-sky-700";
  }

  if (relationshipType === "Hiring Manager") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (relationshipType === "Referral") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-slate-200 bg-slate-50 text-slate-700";
}

export default function ContactsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Contacts
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          Recruiter and contact tracker
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Track recruiters, hiring managers, referrals, and networking contacts.
          This is mock data only until local persistence is added.
        </p>
      </div>

      {mockContacts.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6">
          <h3 className="font-semibold text-slate-950">No contacts yet</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Add mock contacts to shape the tracker before database persistence
            is introduced.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {mockContacts.map((contact) => (
            <article
              key={contact.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {contact.company}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-950">
                    {contact.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {contact.roleTitle}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getRelationshipClass(
                    contact.relationshipType
                  )}`}
                >
                  {contact.relationshipType}
                </span>
              </div>

              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="font-medium text-slate-500">Email</dt>
                  <dd className="mt-1 break-words text-slate-950">
                    {contact.email ?? "Not listed"}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">LinkedIn</dt>
                  <dd className="mt-1 break-words text-slate-950">
                    {contact.linkedInUrl ? (
                      <a
                        href={contact.linkedInUrl}
                        className="text-slate-700 underline-offset-4 hover:text-slate-950 hover:underline"
                      >
                        Profile link
                      </a>
                    ) : (
                      "Not listed"
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">
                    Last contacted
                  </dt>
                  <dd className="mt-1 text-slate-950">
                    {formatDate(contact.lastContactedDate)}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Company</dt>
                  <dd className="mt-1 text-slate-950">{contact.company}</dd>
                </div>
              </dl>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-slate-500">Notes</p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {contact.notes ?? "No notes yet."}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
