import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function GET(request: object, { params }: Params) {
  const { id } = params;

  const foundedBlog = await Blog.findOne({ _id: id });
  return NextResponse.json({ foundedBlog }, { status: 200 });
}

export async function DELETE(req: object, { params }: Params) {
  try {
    const { id } = params;

    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blog Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req: any, { params }: Params) {
  try {
    const { id } = params;

    const body = await req.json();
    const blogData = body.submitedblog;

    const updateTicketData = await Blog.findByIdAndUpdate(id, {
      ...blogData,
    });

    return NextResponse.json({ message: "Blog updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
