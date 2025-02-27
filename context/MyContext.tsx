"use client";

import { TBlog } from "@/models/types/Blog";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface BlogProviderProps {
  children: ReactNode;
  fatchetBlog: TBlog;
}

const BlogContext = createContext<TBlog>({
  image: "",
  title: "",
  body: [{ bodyDescription: "", bodyTitle: "" }],
  lastModified: 0,
});

export const useBlog = (): TBlog => {
  return useContext(BlogContext);
};

export const BlogProvider: React.FC<BlogProviderProps> = ({
  children,
  fatchetBlog,
}) => {
  return (
    <BlogContext.Provider value={fatchetBlog}>{children}</BlogContext.Provider>
  );
};
