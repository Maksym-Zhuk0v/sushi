import React from "react";
import bg from "../../public/modern-cafe-interior.webp";
import { Raleway } from "next/font/google";
import top1 from "../../public/food-photography-session.webp";
import top2 from "../../public/taking-photo-on-phone.webp";
import top3 from "../../public/herbs-plate.webp";
import bot1 from "../../public/salmon-plate.webp";
import bot2 from "../../public/rice-plate.webp";
import bot3 from "../../public/black-plate-sushi.webp";
import { ImagesView } from "../(components)/ImagesView";
import { PageComponent, PageLayout } from "../(components)";
import { HeaderText } from "../(components)/UI";

const releway = Raleway({
  subsets: ["latin"],
  weight: "200",
});

interface IInfoLabel {
  title: string;
  body: string;
}

export const InfoLabel = ({ title, body }: IInfoLabel) => {
  return (
    <div className="grow w-1 border-dflt rounded-2xl h-full flex flex-col items-center justify-center gap-1">
      <div className="flex gap-1">
        <div className="starIcon" />
        <div className="starIcon" />
        <div className="starIcon" />
        <div className="starIcon" />
        <div className="starIcon" />
      </div>
      <p className="text-xs sm:text-sm md:text-2xl lg:text-base xl:text-2xl">
        {title}
      </p>
      <p className={`${releway.className} text-xs tracking-wider`}>{body}</p>
    </div>
  );
};

const page = () => {
  const topImags = [top3, top1, top2];
  const botImags = [bot1, bot2, bot3];

  return (
    <div className="page-style">
      <PageLayout text="About">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="w-full h-screen lg:h-full flex flex-col gap-4">
          <div className="grow flex gap-4 w-full h-1">
            <div className="border-dflt rounded-2xl h-full w-55-about p-4 sm:p-12 lg:p-8 xl:p-12 flex flex-col justify-between">
              <p className="text-about-info-main tracking-wider leading-about">
                SUSHI ARTISTRY REDEFINED
              </p>
              <p className={`${releway.className} text-base`}>
                Where culinary craftsmanship meets modern elegance. Indulge in
                the finest sushi, expertly curated to elevate your dining
                experience.
              </p>
            </div>
            <div className="border-dflt rounded-2xl h-full w-45-about flex overflow-hidden relative">
              <ImagesView images={topImags} />
            </div>
          </div>
          <div className="w-full h-about flex gap-4">
            <InfoLabel title="TRIP ADVISOR" body="BEST SUSHI" />
            <InfoLabel title="MICHELIN GUIDE" body="QUALITY FOOD" />
            <InfoLabel title="START DINING" body="COOL VIBE" />
          </div>
          <div className="grow flex gap-4 w-full h-1">
            <div className="border-dflt rounded-2xl h-full w-45-about flex overflow-hidden relative">
              <ImagesView images={botImags} />
            </div>
            <div className="border-dflt rounded-2xl h-full w-55-about p-4 sm:p-12 lg:p-8 xl:p-12 flex flex-col justify-between">
              <HeaderText className="tracking-wider leading-about text-center text-2xl mx-auto">
                OUR STORY
              </HeaderText>
              <p className={`${releway.className} text-base`}>
                Founded with a passion for culinary excellence, Qitchen's
                journey began in the heart of Prague. Over years, it evolved
                into a haven for sushi enthusiasts, celebrated for its artful
                mastery and devotion to redefining gastronomy.
              </p>
            </div>
          </div>
        </div>
      </PageComponent>
    </div>
  );
};

export default page;
