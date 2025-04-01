"use client";

import React, { useState } from "react";
import { useBlogStore } from "../stores/useBlogStore";
import { useRouter } from "next/navigation";
import { Form } from "./Form";

export const CreateForm = () => {
  const { createBlog } = useBlogStore();
  const router = useRouter();
  const [isUrl, setIsUrl] = useState(false);
  const [form, setForm] = useState({
    title: "",
    image: "",
    lastModified: 0,
    body: [
      {
        bodyTitle: "",
        bodyDescription: "",
      },
    ],
  });

  const handleCreate = async (e: React.MouseEvent) => {
    e.preventDefault();
    createBlog({ ...form, lastModified: Date.now() }).then(() =>
      router.push("/blog")
    );
  };

  return (
    <div>
      <Form form={form} setForm={setForm} setIsUrl={setIsUrl} />

      <button
        onClick={(e) => handleCreate(e)}
        className="w-full p-4 bg-text-primary rounded-md text-black text-base mt-4"
      >
        Create
      </button>
    </div>
  );
};
