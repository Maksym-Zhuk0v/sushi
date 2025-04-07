import React from "react";
import bg from "../../public/taking-photo-on-phone.webp";
import { raleway } from "@/lib/fonts";
import { PageComponent, PageLayout } from "../(components)";
import { HeaderText } from "../(components)/UI";

const page = () => {
  return (
    <div className="page-style">
      <PageLayout text="">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="border-container py-16 px-24 flex flex-col">
          <HeaderText className="text-about-info-main text-center mx-auto">
            LICENSING
          </HeaderText>
          <p className={`${raleway.className} text-lg text-center mt-2`}>
            All graphical assets in this template are licensed for personal and
            commercial use. If you'd like to use a specific asset, please check
            the license.
          </p>
          <div className="mt-16">
            <p className="text-2xl">IMAGES</p>
            <div className="w-full flex mt-16">
              <p className={`${raleway.className} text-xs w-6/12`}>PEXES</p>
              <div className="w-6/12">
                <p className={`${raleway.className} text-xs w-6/12`}>
                  IMAGE COLLECTION
                </p>
                <p className={`${raleway.className} text-xs w-6/12 mt-8`}>
                  LICENSE
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageComponent>
    </div>
  );
};

export default page;
