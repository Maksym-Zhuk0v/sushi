"use client";

import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import PageLayout from "../(components)/PageLayout";
import bg from "../../public/black-plate-sushi.webp";
import ricePlate from "../../public/rice-plate.webp";
import salmonPlate from "../../public/salmon-plate.webp";
import herbsPlate from "../../public/herbs-plate.webp";
import Image, { StaticImageData } from "next/image";
import Corner from "../(components)/Corner";
import instLink from "../../public//ph_instagram-logo-light.png";
import arroRight from "../../public/ph-arrow-right-light.png";
import { Raleway } from "next/font/google";
import PageComponent from "../(components)/PageComponent";
import HeaderText from "../(components)/UI/HeaderText";

interface IImgIcon {
  img?: StaticImageData;
}

interface IWorkTime {
  name: string;
  time: string;
}

const releway = Raleway({
  subsets: ["latin"],
  weight: "300",
});

const ImgIcon = ({ img }: IImgIcon) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl overflow-hidden relative"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-300 hover:scale-125"
        style={{
          backgroundImage: `url(${img?.src})`,
          scale: hover ? 1.15 : 1,
        }}
      />
      <div className="inset-0 absolute bg-shadow opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <div
          className="w-8 h-8 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${instLink.src})`,
          }}
        />
      </div>
    </a>
  );
};

const WorkTime = ({ name, time }: IWorkTime) => {
  return (
    <div className={`${releway.className} flex gap-4 items-end text-base`}>
      <p>{name}</p>
      <div className="grow h-2 border-dflt-top border-dotted" />
      <p>{time}</p>
    </div>
  );
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapOptions = {
  styles: [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#1E2C3B",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#555555",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#333333",
        },
      ],
    },
  ],
  zoomControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

const center = {
  lat: 46.9504023,
  lng: 7.4594791,
};

function page() {
  const [hover, setHover] = useState(false);

  const workTime = [
    { name: "Monday", time: "16:00 - 22:30" },
    { name: "Tuesday", time: "16:00 - 22:30" },
    { name: "Wednesday", time: "16:00 - 22:30" },
    { name: "Thursday", time: "16:00 - 22:30" },
    { name: "Friday", time: "16:00 - 22:30" },
    { name: "Sat & Sun", time: "16:00 - 22:30" },
  ];

  const contactInfo = [
    { name: "ADDRESS", value: "23 Greenfield Avenue, Prague 120 00" },
    { name: "PHONE", value: "+42 1234 567890" },
    { name: "EMAIL", value: "hello@example.com" },
    { name: "FOLLOW", value: "23 Greenfield Avenue, Prague 120 00" },
  ];

  return (
    <div className="page-style">
      <PageLayout text="Contact">
        <div
          className="bg-dflt"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
      </PageLayout>
      <PageComponent>
        <div className="h-auto md:min-full lg:h-full w-full flex flex-col gap-4">
          <div className="h-screen md:grow w-full md:h-full lg:h-0 gap-4 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <div className="w-full h-full border-dflt rounded-2xl px-12 py-14 overflow-hidden 2xl:px-12 2xl:py-14 flex flex-col justify-between">
              <HeaderText className="text-2xl text-center mx-auto">
                OPENING HOURS
              </HeaderText>
              <div className="flex flex-col gap-2">
                {workTime.map((item) => (
                  <WorkTime key={item.name} name={item.name} time={item.time} />
                ))}
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-4">
              <ImgIcon img={bg} />
              <ImgIcon img={ricePlate} />
              <ImgIcon img={salmonPlate} />
              <ImgIcon img={herbsPlate} />
            </div>
          </div>
          <div className="h-screen md:grow w-full md:h-full lg:h-0 gap-4 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <LoadScript googleMapsApiKey="PUTHEREYOURAPIKEY">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  options={mapOptions}
                  zoom={10}
                ></GoogleMap>
              </LoadScript>
              <Corner>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.google.com/maps/dir//Bern+Schweiz/@46.9479739,7.4474468,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x478e39c0d43a1b77:0xcb555ffe0457659a!2m2!1d7.4474468!2d46.9479739?entry=ttu"
                  }
                  className="flex items-center gap-4"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <p className="text-base">SHOW ROUTE</p>
                  <div
                    className="link-icon link-icon--sidebar"
                    style={{
                      backgroundColor: hover
                        ? "rgba(239, 231, 210, 0.10)"
                        : "rgba(24, 24, 24, 0.5)",
                    }}
                  >
                    <Image
                      alt="alr"
                      src={arroRight}
                      className="sidebar-arrow"
                      style={{
                        left: hover ? "6px" : "-24px",
                      }}
                    />
                    <Image
                      alt="alr"
                      src={arroRight}
                      className="sidebar-arrow"
                      style={{
                        left: hover ? "32px" : "-8px",
                      }}
                    />
                  </div>
                </a>
              </Corner>
            </div>
            <div className="w-full h-full border-dflt rounded-2xl overflow-hidden px-12 py-14 flex flex-col justify-between">
              <HeaderText className="text-2xl text-center mx-auto">
                GET IN TOUCH
              </HeaderText>
              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.name}
                    className={`${releway.className} w-full flex justify-between text-sm`}
                  >
                    <p className="grow w-1">{item.name}</p>
                    <p className="grow w-1 text-end">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageComponent>
    </div>
  );
}

export default page;
