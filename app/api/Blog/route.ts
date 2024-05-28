import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogs = await Blog.find();

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const blogData = body.postedBlog;

    await Blog.create(blogData);

    return NextResponse.json({ message: "Blog Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
