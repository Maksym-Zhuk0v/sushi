import PageComponent from "@/app/(components)/PageComponent";
import PageLayout from "@/app/(components)/PageLayout";
import HeaderText from "@/app/(components)/UI/HeaderText";
import { BlogProvider } from "@/app/context/MyContext";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const getBlogById = async (id: string | number) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Blog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return (
      <div className="h-screen flex justify-center items-center">
        <HeaderText className="text-3xl">Blog has not been found</HeaderText>
      </div>
    );
  }

  return (
    <BlogProvider fatchetBlog={blog["foundedBlog"]}>
      <div className="page-style">
        <PageLayout text="">
          <div
            className="bg-dflt"
            style={{
              backgroundImage: `url(${blog["foundedBlog"].image})`,
            }}
          />
        </PageLayout>
        <PageComponent>{children}</PageComponent>
      </div>
    </BlogProvider>
  );
}
