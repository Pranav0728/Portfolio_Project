import { NextResponse } from "next/server";
import Research from "@/models/Research";
import connectMongoDB from "@/lib/db";

export async function GET() {
  try {
    await connectMongoDB();
    const result = await Research.find();
    if (result.length > 0) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json({ message: "no publications" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 200 });
  }
}

export async function POST(req) {
  try {
    await connectMongoDB();
    const data = await req.json();
    const {
      authors,
      title,
      journal,
      volume,
      monthYear,
      referred,
      issn,
      level,
    } = data;
    await Research.create({
      authors,
      title,
      journal,
      volume,
      monthYear,
      referred,
      issn,
      level,
    });
    return NextResponse.json(
      { message: "Publication Added Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
