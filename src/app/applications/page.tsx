import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/applications")!;

export default function ApplicationsPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
