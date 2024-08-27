import { NextResponse } from "next/server";
import Experience from "@/models/Experience";
import connectMongoDB from "@/lib/db";
import mongoose from "mongoose";
import { isApiValid } from "@/lib/function";

const { ObjectId } = mongoose.Types;

export async function PUT(req, { params }) {
  try {
    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }
    await connectMongoDB();
    const id = new ObjectId(params);
    const data = await req.json();

    const result = await Experience.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }
    await connectMongoDB();
    const id = new ObjectId(params);

    const result = await Experience.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "successfully deleted:", "Deleted object": result },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  try {
    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }
    await connectMongoDB();

    const id = new ObjectId(params);

    const result = await Experience.findById(id);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
