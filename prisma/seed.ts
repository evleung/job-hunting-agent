import { PrismaClient } from "@prisma/client";
import { mockApplicationAnswers } from "../src/data/mock-application-answers";
import { mockApplications } from "../src/data/mock-applications";
import { mockContacts } from "../src/data/mock-contacts";
import { mockFollowUpTasks } from "../src/data/mock-follow-up-tasks";
import { mockInterviewPrep } from "../src/data/mock-interview-prep";
import { mockJobs } from "../src/data/mock-jobs";
import { mockPromptTemplates } from "../src/data/mock-prompt-templates";
import { mockResumeVersions } from "../src/data/mock-resume-versions";
import { calculateJobFitScore, defaultManualScores } from "../src/lib/scoring";

const prisma = new PrismaClient();

function companyIdFor(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function dateOrNull(value?: string) {
  return value ? new Date(value) : null;
}

function jsonString(value: unknown) {
  return JSON.stringify(value);
}

async function seedCompanies() {
  const companyNames = new Set<string>();

  for (const job of mockJobs) {
    companyNames.add(job.company);
  }

  for (const application of mockApplications) {
    companyNames.add(application.company);
  }

  for (const contact of mockContacts) {
    companyNames.add(contact.company);
  }

  for (const followUp of mockFollowUpTasks) {
    companyNames.add(followUp.relatedCompany);
  }

  for (const interview of mockInterviewPrep) {
    companyNames.add(interview.company);
  }

  for (const name of companyNames) {
    await prisma.company.upsert({
      where: { id: companyIdFor(name) },
      update: {
        name,
        notes: "Seeded from current mock data."
      },
      create: {
        id: companyIdFor(name),
        name,
        notes: "Seeded from current mock data."
      }
    });
  }
}

async function main() {
  await seedCompanies();

  for (const job of mockJobs) {
    await prisma.jobPosting.upsert({
      where: { id: job.id },
      update: {
        companyId: companyIdFor(job.company),
        companyName: job.company,
        roleTitle: job.roleTitle,
        jobUrl: job.jobUrl,
        location: job.location,
        workArrangement: job.workArrangement,
        compensation: job.compensation,
        status: job.status,
        priority: job.priority,
        fitScore: job.fitScore,
        jobDescription: job.jobDescription,
        resumeVersion: job.resumeVersion,
        notes: job.notes,
        nextAction: job.nextAction
      },
      create: {
        id: job.id,
        companyId: companyIdFor(job.company),
        companyName: job.company,
        roleTitle: job.roleTitle,
        jobUrl: job.jobUrl,
        location: job.location,
        workArrangement: job.workArrangement,
        compensation: job.compensation,
        status: job.status,
        priority: job.priority,
        fitScore: job.fitScore,
        jobDescription: job.jobDescription,
        resumeVersion: job.resumeVersion,
        notes: job.notes,
        nextAction: job.nextAction
      }
    });
  }

  for (const application of mockApplications) {
    await prisma.application.upsert({
      where: { id: application.id },
      update: {
        companyId: companyIdFor(application.company),
        company: application.company,
        roleTitle: application.roleTitle,
        relatedJobId: application.relatedJobId,
        dateApplied: dateOrNull(application.dateApplied),
        status: application.status,
        resumeVersionUsed: application.resumeVersionUsed,
        applicationSource: application.applicationSource,
        nextFollowUpDate: dateOrNull(application.nextFollowUpDate),
        notes: application.notes
      },
      create: {
        id: application.id,
        companyId: companyIdFor(application.company),
        company: application.company,
        roleTitle: application.roleTitle,
        relatedJobId: application.relatedJobId,
        dateApplied: dateOrNull(application.dateApplied),
        status: application.status,
        resumeVersionUsed: application.resumeVersionUsed,
        applicationSource: application.applicationSource,
        nextFollowUpDate: dateOrNull(application.nextFollowUpDate),
        notes: application.notes
      }
    });
  }

  for (const resume of mockResumeVersions) {
    await prisma.resumeVersion.upsert({
      where: { id: resume.id },
      update: {
        name: resume.name,
        targetRoleType: resume.targetRoleType,
        resumeLength: resume.resumeLength,
        positioningAngle: resume.positioningAngle,
        bestFitRoles: jsonString(resume.bestFitRoles),
        keyStrengths: jsonString(resume.keyStrengths),
        fileReference: resume.fileReference,
        lastUpdatedDate: new Date(resume.lastUpdatedDate),
        notes: resume.notes
      },
      create: {
        id: resume.id,
        name: resume.name,
        targetRoleType: resume.targetRoleType,
        resumeLength: resume.resumeLength,
        positioningAngle: resume.positioningAngle,
        bestFitRoles: jsonString(resume.bestFitRoles),
        keyStrengths: jsonString(resume.keyStrengths),
        fileReference: resume.fileReference,
        lastUpdatedDate: new Date(resume.lastUpdatedDate),
        notes: resume.notes
      }
    });
  }

  for (const answer of mockApplicationAnswers) {
    const companyId = answer.company === "Reusable" ? null : companyIdFor(answer.company);

    await prisma.applicationAnswer.upsert({
      where: { id: answer.id },
      update: {
        companyId,
        questionType: answer.questionType,
        questionText: answer.questionText,
        company: answer.company,
        relatedRole: answer.relatedRole,
        draftAnswer: answer.draftAnswer,
        finalAnswer: answer.finalAnswer,
        tone: answer.tone,
        wordCountTarget: answer.wordCountTarget,
        status: answer.status,
        notes: answer.notes
      },
      create: {
        id: answer.id,
        companyId,
        questionType: answer.questionType,
        questionText: answer.questionText,
        company: answer.company,
        relatedRole: answer.relatedRole,
        draftAnswer: answer.draftAnswer,
        finalAnswer: answer.finalAnswer,
        tone: answer.tone,
        wordCountTarget: answer.wordCountTarget,
        status: answer.status,
        notes: answer.notes
      }
    });
  }

  for (const interview of mockInterviewPrep) {
    await prisma.interviewPrep.upsert({
      where: { id: interview.id },
      update: {
        companyId: companyIdFor(interview.company),
        company: interview.company,
        roleTitle: interview.roleTitle,
        interviewStage: interview.interviewStage,
        interviewerName: interview.interviewerName,
        interviewDate: new Date(interview.interviewDate),
        likelyQuestions: jsonString(interview.likelyQuestions),
        keyTalkingPoints: jsonString(interview.keyTalkingPoints),
        starStoriesToUse: jsonString(interview.starStoriesToUse),
        riskAreasOrGaps: jsonString(interview.riskAreasOrGaps),
        questionsToAsk: jsonString(interview.questionsToAsk),
        followUpEmailDraft: interview.followUpEmailDraft,
        notes: interview.notes
      },
      create: {
        id: interview.id,
        companyId: companyIdFor(interview.company),
        company: interview.company,
        roleTitle: interview.roleTitle,
        interviewStage: interview.interviewStage,
        interviewerName: interview.interviewerName,
        interviewDate: new Date(interview.interviewDate),
        likelyQuestions: jsonString(interview.likelyQuestions),
        keyTalkingPoints: jsonString(interview.keyTalkingPoints),
        starStoriesToUse: jsonString(interview.starStoriesToUse),
        riskAreasOrGaps: jsonString(interview.riskAreasOrGaps),
        questionsToAsk: jsonString(interview.questionsToAsk),
        followUpEmailDraft: interview.followUpEmailDraft,
        notes: interview.notes
      }
    });
  }

  for (const contact of mockContacts) {
    await prisma.contact.upsert({
      where: { id: contact.id },
      update: {
        companyId: companyIdFor(contact.company),
        name: contact.name,
        company: contact.company,
        roleTitle: contact.roleTitle,
        email: contact.email,
        linkedInUrl: contact.linkedInUrl,
        relationshipType: contact.relationshipType,
        lastContactedDate: dateOrNull(contact.lastContactedDate),
        notes: contact.notes
      },
      create: {
        id: contact.id,
        companyId: companyIdFor(contact.company),
        name: contact.name,
        company: contact.company,
        roleTitle: contact.roleTitle,
        email: contact.email,
        linkedInUrl: contact.linkedInUrl,
        relationshipType: contact.relationshipType,
        lastContactedDate: dateOrNull(contact.lastContactedDate),
        notes: contact.notes
      }
    });
  }

  for (const followUp of mockFollowUpTasks) {
    await prisma.followUpTask.upsert({
      where: { id: followUp.id },
      update: {
        companyId: companyIdFor(followUp.relatedCompany),
        relatedCompany: followUp.relatedCompany,
        relatedRole: followUp.relatedRole,
        relatedContact: followUp.relatedContact,
        dueDate: new Date(followUp.dueDate),
        taskType: followUp.taskType,
        status: followUp.status,
        messageDraft: followUp.messageDraft,
        notes: followUp.notes
      },
      create: {
        id: followUp.id,
        companyId: companyIdFor(followUp.relatedCompany),
        relatedCompany: followUp.relatedCompany,
        relatedRole: followUp.relatedRole,
        relatedContact: followUp.relatedContact,
        dueDate: new Date(followUp.dueDate),
        taskType: followUp.taskType,
        status: followUp.status,
        messageDraft: followUp.messageDraft,
        notes: followUp.notes
      }
    });
  }

  for (const prompt of mockPromptTemplates) {
    await prisma.promptTemplate.upsert({
      where: { id: prompt.id },
      update: {
        name: prompt.name,
        workflowCategory: prompt.workflowCategory,
        description: prompt.description,
        promptBody: prompt.promptBody,
        inputsRequired: jsonString(prompt.inputsRequired),
        outputExpected: prompt.outputExpected,
        lastUpdatedDate: new Date(prompt.lastUpdatedDate)
      },
      create: {
        id: prompt.id,
        name: prompt.name,
        workflowCategory: prompt.workflowCategory,
        description: prompt.description,
        promptBody: prompt.promptBody,
        inputsRequired: jsonString(prompt.inputsRequired),
        outputExpected: prompt.outputExpected,
        lastUpdatedDate: new Date(prompt.lastUpdatedDate)
      }
    });
  }

  const fitScoreResult = calculateJobFitScore(defaultManualScores);

  for (const job of mockJobs) {
    await prisma.fitScore.upsert({
      where: { id: `${job.id}-manual-seed` },
      update: {
        jobPostingId: job.id,
        ...defaultManualScores,
        overallScore: job.fitScore ?? fitScoreResult.overallScore,
        tier: fitScoreResult.tier,
        recommendedAction: fitScoreResult.recommendedAction,
        notes: "Seeded baseline manual score. Review before relying on it."
      },
      create: {
        id: `${job.id}-manual-seed`,
        jobPostingId: job.id,
        ...defaultManualScores,
        overallScore: job.fitScore ?? fitScoreResult.overallScore,
        tier: fitScoreResult.tier,
        recommendedAction: fitScoreResult.recommendedAction,
        notes: "Seeded baseline manual score. Review before relying on it."
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
