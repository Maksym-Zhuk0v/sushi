import React from "react";
import bg from "../../public/woman-sitting-at-table.webp";
import { Raleway } from "next/font/google";
import { PageComponent, PageLayout } from "../(components)";
import { HeaderText } from "../(components)/UI";

const releway = Raleway({
  subsets: ["latin"],
  weight: "300",
});

const page = () => {
  return (
    <div className="page-style">
      <PageLayout text="BOOK A TABLE">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="border-container p-24 flex flex-col">
          <HeaderText className="text-center text-4xl">RESERVATION</HeaderText>
          <p
            className={`${releway.className} text-text-secondary mx-auto mt-4 max-w-96 text-center text-base`}
          >
            Secure your spot at Qitchen, where exceptional sushi and a
            remarkable dining experience await.
          </p>
          <div
            className={`${releway.className} flex w-full flex-col gap-4 mt-16`}
          >
            <input placeholder="Name" className="input-reservation" />
            <input placeholder="Email" className="input-reservation" />
            <textarea
              className="input-reservation max-h-96 min-h-12"
              placeholder="Massange"
            ></textarea>
            <button className="w-full p-4 bg-text-primary rounded-md text-black text-base">
              Reserve
            </button>
          </div>
        </div>
      </PageComponent>
    </div>
  );
};

export default page;
