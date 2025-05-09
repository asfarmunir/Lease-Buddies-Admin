import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import Subscription from "@/lib/database/subscription.model";

export async function GET(request: Request) {
  try {
    await connectToDatabase();
  const subscriptions = await Subscription.find({})
      .populate({
        path: "user",
        select: "firstname lastname",
      })
      .populate({
        path: "property",
        select: "title",
      })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      subscriptions,
    });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}