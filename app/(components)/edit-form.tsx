"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useBlogStore } from "../stores/useBlogStore";
import { Form } from "./Form";
import { CircleX } from "lucide-react";

export const EditForm = ({ id }: { id: string }) => {
  const router = useRouter();
  const [isUrl, setIsUrl] = useState(false);
  const { deleteBlog, updateBlog, singleBlog, loading } = useBlogStore();

  const [form, setForm] = useState({
    title: singleBlog?.title || "",
    image: singleBlog?.image || "",
    lastModified: 0,
    body: [
      {
        bodyTitle: singleBlog?.body[0].bodyTitle || "",
        bodyDescription: singleBlog?.body[0].bodyDescription || "",
      },
    ],
  });

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();

    deleteBlog(id);

    router.push("/blog");
    // router.refresh();
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    updateBlog(id, { ...form, lastModified: Date.now() });

    router.refresh();
    router.push("/blog");
  };

  if (loading) {
    return (
      <div className="w-full flex flex-col px-4 md:px-24 lg:px-4 xl:px-24 py-12">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div
        className="absolute top-12 right-12 w-8 h-8 cursor-pointer"
        onClick={(e) => handleDelete(e)}
      >
        <CircleX />
      </div>
      <Form form={form} setForm={setForm} setIsUrl={setIsUrl} />
      <button
        // disabled={isUrl ? false : true}
        onClick={handleSubmit}
        className="w-full p-4 bg-text-primary rounded-md text-black text-base mt-4"
      >
        Edit this post
      </button>
    </div>
  );
};
