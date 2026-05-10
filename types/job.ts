export type WorkType = "remote" | "onsite" | "hybrid";

export type ApplicationStage =
  | "applied"
  | "first interview"
  | "second interview"
  | "technical interview"
  | "offer"
  | "accepted"
  | "rejected";

export type Job = {
  _id: string;
  userId: string;
  logoUrl: string;
  logoSource: "auto" | "upload" | "none";
  companyName: string;
  companyDomain?: string;
  jobTitle: string;
  applicationLink?: string;
  siteAppliedOn?: string;
  salary?: string;
  location?: string;
  workType: WorkType;
  stage: ApplicationStage;
  dateApplied: string;
  notes?: string;
};