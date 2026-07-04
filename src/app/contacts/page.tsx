import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/contacts")!;

export default function ContactsPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
