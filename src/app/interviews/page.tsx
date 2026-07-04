import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/interviews")!;

export default function InterviewsPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
