import { NextResponse } from "next/server";
import Book from "@/models/Book"
import connectMongoDB from "@/lib/db";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

export async function PUT(req, { params }) {
  try {
    await connectMongoDB()
    const id = new ObjectId(params);
    const data = await req.json();

    const result = await Book.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectMongoDB()
    const id = new ObjectId(params);

    const result = await Book.findByIdAndDelete(id);
    return NextResponse.json({"message": "successfully deleted:", "Deleted object": result}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(req, { params }) {
try {
    await connectMongoDB()

    const id = new ObjectId(params);
    
    const result = await Book.findById(id)
    return NextResponse.json(result)
} catch (error) {
    console.log(error);
    return NextResponse.json({message: error}, { status: 500 });

}
}
