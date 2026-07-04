-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "website" TEXT,
    "industry" TEXT,
    "sizeOrStage" TEXT,
    "location" TEXT,
    "notes" TEXT,
    "priorityLevel" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "JobPosting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "jobUrl" TEXT,
    "location" TEXT NOT NULL,
    "workArrangement" TEXT NOT NULL,
    "compensation" TEXT,
    "status" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "fitScore" INTEGER,
    "jobDescription" TEXT NOT NULL,
    "resumeVersion" TEXT,
    "notes" TEXT,
    "nextAction" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "JobPosting_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "relatedJobId" TEXT NOT NULL,
    "dateApplied" DATETIME,
    "status" TEXT NOT NULL,
    "resumeVersionUsed" TEXT NOT NULL,
    "applicationSource" TEXT NOT NULL,
    "nextFollowUpDate" DATETIME,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Application_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Application_relatedJobId_fkey" FOREIGN KEY ("relatedJobId") REFERENCES "JobPosting" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ResumeVersion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "targetRoleType" TEXT NOT NULL,
    "resumeLength" TEXT NOT NULL,
    "positioningAngle" TEXT NOT NULL,
    "bestFitRoles" TEXT NOT NULL,
    "keyStrengths" TEXT NOT NULL,
    "fileReference" TEXT NOT NULL,
    "lastUpdatedDate" DATETIME NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ApplicationAnswer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT,
    "questionType" TEXT NOT NULL,
    "questionText" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "relatedRole" TEXT NOT NULL,
    "draftAnswer" TEXT NOT NULL,
    "finalAnswer" TEXT,
    "tone" TEXT NOT NULL,
    "wordCountTarget" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ApplicationAnswer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InterviewPrep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "interviewStage" TEXT NOT NULL,
    "interviewerName" TEXT NOT NULL,
    "interviewDate" DATETIME NOT NULL,
    "likelyQuestions" TEXT NOT NULL,
    "keyTalkingPoints" TEXT NOT NULL,
    "starStoriesToUse" TEXT NOT NULL,
    "riskAreasOrGaps" TEXT NOT NULL,
    "questionsToAsk" TEXT NOT NULL,
    "followUpEmailDraft" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "InterviewPrep_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "email" TEXT,
    "linkedInUrl" TEXT,
    "relationshipType" TEXT NOT NULL,
    "lastContactedDate" DATETIME,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Contact_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FollowUpTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "relatedCompany" TEXT NOT NULL,
    "relatedRole" TEXT NOT NULL,
    "relatedContact" TEXT NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "taskType" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "messageDraft" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FollowUpTask_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PromptTemplate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "workflowCategory" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "promptBody" TEXT NOT NULL,
    "inputsRequired" TEXT NOT NULL,
    "outputExpected" TEXT NOT NULL,
    "lastUpdatedDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FitScore" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jobPostingId" TEXT NOT NULL,
    "roleFit" INTEGER NOT NULL,
    "seniorityFit" INTEGER NOT NULL,
    "domainFit" INTEGER NOT NULL,
    "technicalFit" INTEGER NOT NULL,
    "customerFacingFit" INTEGER NOT NULL,
    "aiDataRelevance" INTEGER NOT NULL,
    "compensationPotential" INTEGER NOT NULL,
    "interviewProbability" INTEGER NOT NULL,
    "resumeAlignment" INTEGER NOT NULL,
    "networkingOpportunity" INTEGER NOT NULL,
    "longTermUpside" INTEGER NOT NULL,
    "screenOutRisk" INTEGER NOT NULL,
    "overallScore" INTEGER NOT NULL,
    "tier" TEXT NOT NULL,
    "recommendedAction" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FitScore_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPosting" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE INDEX "JobPosting_companyId_idx" ON "JobPosting"("companyId");

-- CreateIndex
CREATE INDEX "Application_companyId_idx" ON "Application"("companyId");

-- CreateIndex
CREATE INDEX "Application_relatedJobId_idx" ON "Application"("relatedJobId");

-- CreateIndex
CREATE INDEX "ApplicationAnswer_companyId_idx" ON "ApplicationAnswer"("companyId");

-- CreateIndex
CREATE INDEX "InterviewPrep_companyId_idx" ON "InterviewPrep"("companyId");

-- CreateIndex
CREATE INDEX "Contact_companyId_idx" ON "Contact"("companyId");

-- CreateIndex
CREATE INDEX "FollowUpTask_companyId_idx" ON "FollowUpTask"("companyId");

-- CreateIndex
CREATE INDEX "FitScore_jobPostingId_idx" ON "FitScore"("jobPostingId");
