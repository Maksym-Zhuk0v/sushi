import React from "react";
import bg from "../../public/food-photography-session.webp";
import { ListBlogs, PageComponent, PageLayout } from "../(components)";
import { HeaderText } from "../(components)/UI";

const page = async () => {
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
        <div className="border-container relative flex flex-col px-6 md:px-12 lg:px-6 xl:px-16 2xl:px-24 pt-20">
          <HeaderText className="text-center text-about-info-main tracking-wider">
            LATEST NEWS
          </HeaderText>
          <div className="h-full w-full flex flex-col gap-10 my-12">
            <ListBlogs />
          </div>
        </div>
      </PageComponent>
    </div>
  );
};

export default page;
