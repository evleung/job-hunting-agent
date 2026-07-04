import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/prompt-library")!;

export default function PromptLibraryPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
