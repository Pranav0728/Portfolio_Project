import { NextResponse } from "next/server";
import About from "@/models/About";
import connectMongoDB from "@/lib/db";
import { isApiValid } from "@/lib/function";


export async function GET(req) {
  try {
    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    await connectMongoDB();
    const result = await About.find();
    if (result.length > 0) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "no about section added yet" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 200 });
  }
}

//function to update the about section, as there wil be only one document in the collection
//it makes sense to use findOneOrUpdate method instead

export async function PUT(req) {
  try {
    const apiKey = await req.headers.get("Authorization"); // Extract API key from header

    if (!isApiValid(apiKey)) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }
    await connectMongoDB();

    const data = await req.json();
    const { memberships, languages, interests } = data;
    await About.findOneAndUpdate(
      {},
      {
        $set: {
          memberships,
          languages,
          interests,
        },
      }, {
        upsert: true, new: true, setDefaultsOnInsert: true
      }
    );
    return NextResponse.json(
      { message: "About Updated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json("Error Updating Document, check server logs for error", { status: 500 });
  }
}
