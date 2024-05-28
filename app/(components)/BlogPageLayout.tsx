import React, { ReactNode } from "react";
import PageLayout from "./PageLayout";
import PageComponent from "./PageComponent";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderText from "./UI/HeaderText";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface IBlogPageLayout {
  id: string;
  children: ReactNode;
}

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

const BlogPageLayout = async ({ id, children }: IBlogPageLayout) => {
  const blog = await getBlogById(id);
  const date = new Date(blog["foundedBlog"].lastModified);
  return (
    <div className="page-style">
      <PageLayout text="">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${blog["foundedBlog"].image})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="border-container flex flex-col px-4 md:px-24 lg:px-4 xl:px-24 py-12">
          <Link href={`/blog/view/${id}/edit`}>
            <FontAwesomeIcon
              className="absolute top-12 right-12 w-8 h-8 cursor-pointer"
              icon={faEdit}
            />
          </Link>
          <HeaderText>{date.toLocaleDateString()}</HeaderText>
          <HeaderText className="text-6xl text-center mt-4">
            {blog["foundedBlog"].title}
          </HeaderText>
          {blog["foundedBlog"].body.map(
            (theme: { bodyTitle: string; bodyDescription: string }) => (
              <div className="mt-12">
                <h2 className="text-2xl">{theme.bodyTitle}</h2>
                <p className="mt-4">{theme.bodyDescription}</p>
              </div>
            )
          )}
        </div>
      </PageComponent>
    </div>
  );
};

export default BlogPageLayout;
