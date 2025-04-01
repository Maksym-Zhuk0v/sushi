"use client";

import React, { useEffect } from "react";
import { useBlogStore } from "../stores/useBlogStore";
import { Header } from "./Header";
import { MotionP } from "./UI";
import { useUserStore } from "../stores/useUserStore";
import { useRouter } from "next/navigation";

export const ClientPageLayout = ({ id }: { id: string }) => {
  const { singleBlog, loading, fetchSingleBlog } = useBlogStore();
  const { user, checkingAuth } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!user && !checkingAuth) {
      return router.push("/profile");
    }
  }, [checkingAuth]);

  useEffect(() => {
    if (id !== singleBlog?._id) {
      fetchSingleBlog(id);
    }
  }, [id]);

  if (loading || !user || checkingAuth || !singleBlog) {
    return (
      <div className="w-full flex flex-col lg:grow lg:w-1 h-screen lg:sticky top-0 p-4 lg:pr-0 xl:p-6 xl:pr-0 z-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col lg:grow lg:w-1 h-screen lg:sticky top-0 p-4 lg:pr-0 xl:p-6 xl:pr-0 z-20">
      <Header className="absolute top-16 left-16" />
      <div className="relative h-full rounded-2xl overflow-hidden">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${singleBlog.image})`,
          }}
        />
        <div className="h-96 w-full absolute bottom-0 bg-gradient-to-b from-gradient-lighter to-gradient-darken" />
        <MotionP>{singleBlog.title.toLocaleUpperCase()}</MotionP>
      </div>
    </div>
  );
};
