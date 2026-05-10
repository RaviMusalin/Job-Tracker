import mongoose, { Schema, models, model } from "mongoose";

const JobSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },

    logoUrl: {
      type: String,
      default: "",
    },

    logoSource: {
      type: String,
      enum: ["auto", "upload", "none"],
      default: "none",
    },

    companyName: {
      type: String,
      required: true,
    },

    companyDomain: {
      type: String,
      default: "",
    },

    jobTitle: {
      type: String,
      required: true,
    },

    applicationLink: {
      type: String,
      default: "",
    },

    siteAppliedOn: {
      type: String,
      default: "",
    },

    salary: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    workType: {
      type: String,
      enum: ["remote", "onsite", "hybrid"],
      required: true,
    },

    stage: {
      type: String,
      enum: [
        "applied",
        "first interview",
        "second interview",
        "technical interview",
        "offer",
        "accepted",
        "rejected",
      ],
      default: "applied",
    },

    dateApplied: {
      type: Date,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Job = models.Job || model("Job", JobSchema);

export default Job;