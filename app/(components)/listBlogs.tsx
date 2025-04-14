"use client";

import TBlog from "@/models/types/Blog";
import { useBlogStore } from "../stores/useBlogStore";
import React, { useEffect } from "react";
import { BlogCard, HeaderText } from "./UI";
import Link from "next/link";
import { useUserStore } from "../stores/useUserStore";

export const ListBlogs = () => {
  const { blogs, fetchAllBlogs } = useBlogStore();
  const { user, checkAuth } = useUserStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  React.useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {user?.role === "admin" && <Link href={"/blog/create"}></Link>}
      {blogs.length === 0 ? (
        <HeaderText className="text-center text-about-info-main tracking-wider">
          There is no blogs created
        </HeaderText>
      ) : (
        blogs.map((item: TBlog) => <BlogCard key={item._id} card={item} />)
      )}
    </div>
  );
};
