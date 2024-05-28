"use client";

import PageComponent from "@/app/(components)/PageComponent";
import PageLayout from "@/app/(components)/PageLayout";
import bg from "../../../public/modern-cafe-interior.webp";
import React, { useState } from "react";
import HeaderText from "@/app/(components)/UI/HeaderText";
import { Raleway } from "next/font/google";
import Form from "@/app/(components)/Form";
import { useRouter } from "next/navigation";

const releway = Raleway({
  subsets: ["latin"],
  weight: "300",
});

const page = () => {
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

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const postedBlog = { ...form, lastModified: Date.now() };
    const res = await fetch("/api/Blog", {
      method: "POST",
      body: JSON.stringify({ postedBlog }),
      //@ts-ignore
      "Content-Type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create blog");
    }
    router.push("/blog");
    router.refresh();
  };

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
        <div className="border-container px-8 md:px-24 py-8 flex flex-col">
          <HeaderText className="text-center text-about-info-main tracking-wider">
            Create
          </HeaderText>
          <div className={`${releway.className} w-full`}>
            <Form form={form} setForm={setForm} setIsUrl={setIsUrl} />
            <button
              onClick={(e) => handleSubmit(e)}
              disabled={isUrl ? false : true}
              className="w-full p-4 bg-text-primary rounded-md text-black text-base mt-4"
            >
              Create
            </button>
          </div>
        </div>
      </PageComponent>
    </div>
  );
};

export default page;
