import { NextResponse } from "next/server";
import Book from "@/models/Book";
import connectMongoDB from "@/lib/db";
import { isApiValid } from "@/lib/function";
import path from "path";
import { promises as fs } from 'fs';
import { writeFile } from "fs/promises";


async function generateUniqueFileName(directory, fileName) {
  let counter = 1;
  let newFileName = fileName;
  const fileExtension = path.extname(fileName);
  const fileNameWithoutExtension = path.basename(fileName, fileExtension);

  while (await fs.stat(path.join(directory, newFileName)).catch(() => false)) {
    newFileName = `${fileNameWithoutExtension}(${counter})${fileExtension}`;
    counter += 1;
  }
  
  return newFileName;
}

export async function GET(req) {
  try {
    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    await connectMongoDB();
    const result = await Book.find().sort({ _id: -1 }).exec();
    if (result.length > 0) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json({ message: "no Books" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 200 });
  }
}

export async function POST(req) {
  try {

    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const formData = await req.formData();

    // Get the file and store it first
    const file = formData.get('file');
    if (!file) {
      console.log("No files received")
    }
    
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = file.name.replaceAll(" ", "_");
    const fullPathDirectory = path.join(process.cwd(), "public/assets/books");
    const uniqueFileName = await generateUniqueFileName(fullPathDirectory, fileName);
    const imagePath = "/assets/books/" + uniqueFileName;

    await writeFile(
      path.join(fullPathDirectory, uniqueFileName),
      buffer
    );

    await connectMongoDB();
    const data = await formData
    const {
      author,
      publisher,
      position,
      title,
      year,
      referred,
      isbn,
      level,
    } = data;
    await Book.create({
        author,
        publisher,
        position,
        title,
        year,
        referred,
        isbn,
        level,
        imagePath
    });
    return NextResponse.json(
      { message: "Book Added Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({message: error}, { status: 500 });
  }
}
