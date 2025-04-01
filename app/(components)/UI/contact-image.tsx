"use client";

import { StaticImageData } from "next/image";
import instLink from "../../../public/ph_instagram-logo-light.png";
import React, { useState } from "react";

interface IImgIcon {
  img?: StaticImageData;
}

export const ContactImageIcon = ({ img }: IImgIcon) => {
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
