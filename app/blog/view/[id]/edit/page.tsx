"use client";

import React, { useState } from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Form from "@/app/(components)/Form";
import { useBlog } from "@/app/context/MyContext";

interface IEditBlog {
  params: Params;
}

const page = ({ params }: IEditBlog) => {
  const blog = useBlog();
  const [form, setForm] = useState({ ...blog });

  const router = useRouter();
  const [isUrl, setIsUrl] = useState(false);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/Blog/${params.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
    router.push("/blog");
    router.refresh();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const submitedblog = {
      ...form,
      lastModified: Date.now(),
    };

    const res = await fetch(`/api/Blog/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ submitedblog }),
    });
    if (!res.ok) {
      throw new Error("Failed to update ticket");
    }

    router.refresh();
    router.push("/blog");
  };

  return (
    <div className="border-container relative flex flex-col px-4 md:px-24 lg:px-4 xl:px-24 py-12">
      <div
        className="absolute top-12 right-12 w-8 h-8 cursor-pointer"
        onClick={() => handleDelete()}
      >
        <FontAwesomeIcon className="h-full w-full" icon={faRemove} />
      </div>
      <Form form={form} setForm={setForm} setIsUrl={setIsUrl} />
      <button
        disabled={isUrl ? false : true}
        onClick={(e) => handleSubmit(e)}
        className="w-full p-4 bg-text-primary rounded-md text-black text-base mt-4"
      >
        Edit this post
      </button>
    </div>
  );
};

export default page;
