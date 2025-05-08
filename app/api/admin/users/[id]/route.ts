import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/user.model";
import Property from "@/lib/database/property.model";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      await connectToDatabase();
      
      const user = await User.findById(params.id)
        .populate("favorites")
        .lean();
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
  
  
      return NextResponse.json({
        user: {
          ...user,
        },
       
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
  


export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    

    const user = await User.findByIdAndDelete(params.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await Property.updateMany(
      { owner: params.id },
      { $set: { owner: null } }
    );

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}