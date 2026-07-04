export type AppSection = {
  title: string;
  href: string;
};

export const appSections: AppSection[] = [
  {
    title: "Dashboard",
    href: "/"
  },
  {
    title: "Jobs",
    href: "/jobs"
  },
  {
    title: "Applications",
    href: "/applications"
  },
  {
    title: "Resume Versions",
    href: "/resume-versions"
  }
];
