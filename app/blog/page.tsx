import React from "react";
import PageLayout from "../(components)/PageLayout";
import bg from "../../public/food-photography-session.webp";
import BlogCard from "../(components)/UI/BlogCard";
import PageComponent from "../(components)/PageComponent";
import HeaderText from "../(components)/UI/HeaderText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { TBlog } from "@/models/types/Blog";

const getMenu = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Blog", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const page = async () => {
  const data = await getMenu();
  return (
    <div className="page-style">
      <PageLayout text="blog">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="border-container relative flex flex-col px-6 md:px-12 lg:px-6 xl:px-16 2xl:px-24 pt-20">
          <HeaderText className="text-center text-about-info-main tracking-wider">
            LATEST NEWS
          </HeaderText>
          <div className="h-full w-full flex flex-col gap-10 my-12">
            <Link href={"/blog/create"}>
              <FontAwesomeIcon
                className="absolute top-12 right-12 w-8 h-8 cursor-pointer"
                icon={faAdd}
              />
            </Link>
            {data["blogs"].length === 0 ? (
              <HeaderText className="text-center text-about-info-main tracking-wider">
                There is no blogs created
              </HeaderText>
            ) : (
              data["blogs"]
                .sort((a: TBlog, b: TBlog) => a.lastModified - b.lastModified)
                .reverse()
                .map((item: TBlog) => <BlogCard card={item} />)
            )}
          </div>
        </div>
      </PageComponent>
    </div>
  );
};

export default page;
