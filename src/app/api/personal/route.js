import connectMongoDB from "@/lib/db";
import { isApiValid } from "@/lib/function";
import { NextResponse } from "next/server";
import Personal from "@/models/Personal"

export async function GET(req) {
  try {
    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    await connectMongoDB();
    const result = await Personal.find().sort({ _id: -1 }).exec();
    if (result.length > 0) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json({ message: "no Personal" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 200 });
  }
}

export async function PUT(req) {
  try {

    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }
    await connectMongoDB();
    const data = await req.json();
    const {
      name,
      subHeader,
      image,
      email,
      degree,
      phone,
      address,
      city,
    } = data;
    await Personal.findOneAndUpdate(
        {},
        {
            $set: {
                name,
                subHeader,
                image,
                email,
                degree,
                phone,
                address,
                city,
            }
    }, { upsert: true, new: true, setDefaultsOnInsert: true});
    return NextResponse.json(
      { message: "Personal Updated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({message: error}, { status: 500 });
  }
}
