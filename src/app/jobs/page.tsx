import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/jobs")!;

export default function JobsPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
