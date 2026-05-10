import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";



// GET all jobs for logged-in user
// POST create new job for logged-in 

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";
    const stage = searchParams.get("stage") || "";
    const workType = searchParams.get("workType") || "";

    const query: any = { userId };

    if (search) {
      query.$or = [
        { companyName: { $regex: search, $options: "i" } },
        { jobTitle: { $regex: search, $options: "i" } },
        { siteAppliedOn: { $regex: search, $options: "i" } },
      ];
    }

    if (stage) {
      query.stage = stage;
    }

    if (workType) {
      query.workType = workType;
    }

    const jobs = await Job.find(query).sort({ dateApplied: -1 });

    return NextResponse.json({ jobs });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const body = await req.json();

    const newJob = await Job.create({
      ...body,
      userId,
    });

    return NextResponse.json({ job: newJob }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}