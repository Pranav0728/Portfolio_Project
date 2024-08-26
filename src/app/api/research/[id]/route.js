import { NextResponse } from "next/server";
import Research from "@/models/Research";
import connectMongoDB from "@/lib/db";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

export async function PUT(req, { params }) {
  try {
    const id = new ObjectId(params);
    const data = await req.json();

    const result = await Research.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const id = new ObjectId(params);

    const result = await Research.findByIdAndDelete(id);
    return NextResponse.json({"message": "successfully deleted:", "Deleted object": result}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(req, { params }) {
try {
    const id = new ObjectId(params);
    
    const result = await Research.findById(id)
    return NextResponse.json(result)
} catch (error) {
    console.log(error);
    return NextResponse.json({message: error}, { status: 500 });

}
}
