import React from "react";
import { Raleway } from "next/font/google";
import Link from "next/link";
import TBlog from "@/models/types/Blog";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "200",
});

export const BlogCard = ({ card }: { card: TBlog }) => {
  const date = new Date(card?.lastModified);

  if (!card.body) {
    return (
      <div className="gap-4 w-full flex 2xl:gap-8 bg-default-card hover:bg-hover-card blur"></div>
    );
  }

  return (
    <Link
      href={`/blog/view/${card._id}`}
      className="gap-4 w-full flex 2xl:gap-8 bg-default-card hover:bg-hover-card"
    >
      <div
        className="hidden sm:block w-blog-card md:w-blog-card-lg xl:w-blog-card-lg h-blog-h rounded-2xl transition-all duration-500 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${card?.image})`,
          backgroundSize: "inherit",
        }}
      />
      <div className="grow w-1 flex flex-col gap-2 justify-center">
        <div className="flex items-center gap-2">
          <div className="rhomb" />
          <p className={`${raleway.className} text-xs tracking-widest`}>
            {date.toLocaleDateString()}
          </p>
        </div>
        <p className="blog-title-restrictions text-2xl">{card?.title}</p>
        <p className={`${raleway.className} blog-body-restrictions text-base`}>
          {card.body[0] === undefined ? "" : card?.body[0]?.bodyTitle}
        </p>
      </div>
    </Link>
  );
};
