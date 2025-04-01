import bg from "../../../public/modern-cafe-interior.webp";
import React from "react";
import { HeaderText } from "@/app/(components)/UI";
import { CreateForm, PageComponent, PageLayout } from "@/app/(components)";

const page = () => {
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
          <CreateForm />
        </div>
      </PageComponent>
    </div>
  );
};

export default page;
