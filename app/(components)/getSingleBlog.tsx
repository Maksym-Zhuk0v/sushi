"use client";

import React, { useEffect } from "react";
import { useBlogStore } from "@/app/stores/useBlogStore";
import { HeaderText } from "./UI";
import Link from "next/link";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useUserStore } from "../stores/useUserStore";

export const GetSingleBlog = ({ id }: { id: string }) => {
  const { singleBlog, loading } = useBlogStore();
  const { user, checkAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading || !singleBlog) {
    return (
      <div className="w-full flex flex-col px-4 md:px-24 lg:px-4 xl:px-24 py-12">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col px-4 md:px-24 lg:px-4 xl:px-24 py-12">
      {user?.role === "admin" && (
        <Link href={`/blog/view/${id}/edit`}>
          {/* <FontAwesomeIcon
            className="absolute top-12 right-12 w-8 h-8 cursor-pointer"
            icon={faEdit}
          /> */}
        </Link>
      )}
      <HeaderText>
        {new Date(singleBlog.lastModified).toLocaleDateString()}
      </HeaderText>
      <HeaderText className="text-6xl text-center mt-4">
        {singleBlog.title}
      </HeaderText>
      {singleBlog.body.map(
        (theme: { bodyTitle: string; bodyDescription: string }) => (
          <div key={theme.bodyTitle} className="mt-12">
            <h2 className="text-2xl">{theme.bodyTitle}</h2>
            <p className="mt-4">{theme.bodyDescription}</p>
          </div>
        )
      )}
    </div>
  );
};
