import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/resume-versions")!;

export default function ResumeVersionsPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
