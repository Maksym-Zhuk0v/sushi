import { NextResponse } from "next/server";
import Menu from "../../../models/Menu";

export async function GET() {
  try {
    const menu = await Menu.find();

    return NextResponse.json({ menu }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
