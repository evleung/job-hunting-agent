import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/application-answers")!;

export default function ApplicationAnswersPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
