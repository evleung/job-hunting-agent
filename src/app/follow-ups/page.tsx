import { SectionPage } from "@/components/section-page";
import { appSections } from "@/lib/navigation";

const section = appSections.find((item) => item.href === "/follow-ups")!;

export default function FollowUpsPage() {
  return <SectionPage title={section.title} description={section.description} />;
}
