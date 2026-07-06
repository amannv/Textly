import { NextRequest, NextResponse } from "next/server";
import { refineText } from "@/app/services/aiService";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const text = await refineText(prompt);

    return NextResponse.json({ text });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Error occured while refining text");
  }
}
