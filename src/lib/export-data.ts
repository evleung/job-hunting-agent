import { mockApplicationAnswers } from "@/data/mock-application-answers";
import { mockApplications } from "@/data/mock-applications";
import { mockContacts } from "@/data/mock-contacts";
import { mockFollowUpTasks } from "@/data/mock-follow-up-tasks";
import { mockInterviewPrep } from "@/data/mock-interview-prep";
import { mockJobs } from "@/data/mock-jobs";
import { mockPromptTemplates } from "@/data/mock-prompt-templates";
import { mockResumeVersions } from "@/data/mock-resume-versions";

export const exportFileName = "job-hunting-agent-export.json";

export function buildMockDataExport() {
  const datasets = {
    jobs: mockJobs,
    applications: mockApplications,
    resumeVersions: mockResumeVersions,
    applicationAnswers: mockApplicationAnswers,
    interviews: mockInterviewPrep,
    contacts: mockContacts,
    followUps: mockFollowUpTasks,
    promptTemplates: mockPromptTemplates
  };

  return {
    metadata: {
      appName: "job-hunting-agent",
      exportType: "mock-data",
      exportedAt: new Date().toISOString(),
      version: 1,
      notes:
        "This export contains current mock/local app data only. It does not include database records because persistence has not been added yet."
    },
    counts: {
      jobs: datasets.jobs.length,
      applications: datasets.applications.length,
      resumeVersions: datasets.resumeVersions.length,
      applicationAnswers: datasets.applicationAnswers.length,
      interviews: datasets.interviews.length,
      contacts: datasets.contacts.length,
      followUps: datasets.followUps.length,
      promptTemplates: datasets.promptTemplates.length
    },
    datasets
  };
}
