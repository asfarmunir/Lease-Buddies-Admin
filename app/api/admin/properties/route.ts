import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/user.model";
import Property from "@/lib/database/property.model";

export async function GET(request: Request) {
  try {
    await connectToDatabase();



    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const query: any = {};
    if (search) {
      query.$text = { $search: search };
    }

    const skip = (page - 1) * limit;
    const properties = await Property.find(query)
      .populate({
        path: "owner",
        select: "firstname lastname email",
        model: User, // Explicitly specify the User model
      })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .lean();

    const total = await Property.countDocuments(query);

    return NextResponse.json({
      properties: properties.map((p:any) => ({
        ...p,
        owner: p.owner || { firstname: "N/A", lastname: "", email: "N/A" }, // Fallback for missing owner
      })),
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}