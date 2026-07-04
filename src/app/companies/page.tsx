import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/companies")!;

export default function CompaniesPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
