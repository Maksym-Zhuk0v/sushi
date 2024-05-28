"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Forum } from "next/font/google";
import Corner from "./Corner";
import ArrowHover from "./UI/ArrowHover";

const forum = Forum({ subsets: ["latin"], weight: "400" });

interface ISidebarCard {
  href: string;
  name: string;
  image: StaticImageData;
}

const SidebarCard = ({ href, name, image }: ISidebarCard) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={href}
      className="rounded-2xl w-full grow lg:w-full md:w-1 bg-default lg:h-1 overflow-hidden relative"
    >
      <Image
        src={image}
        alt="name"
        className="bg-dflt transition-all duration-300"
        style={{
          opacity: hover ? "100%" : "70%",
          objectFit: "cover",
        }}
      />
      <Corner>
        <div className="flex gap-2 items-center">
          <div className={`${forum.className} text-base`}>{name}</div>
          <ArrowHover hover={hover} />
        </div>
      </Corner>
    </Link>
  );
};

export default SidebarCard;
