"use client";

import Image from "next/image";
import React, { useState } from "react";
import logoName from "/public/logo.jpeg";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "300",
});

interface IHeader {
  className?: string;
}

const Header = ({ className }: IHeader) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`${className} bg-default p-2 rounded-xl flex items-center gap-3 z-20`}
      >
        <div
          onClick={() => setActive(true)}
          className="w-header-icon h-header-icon bg-muted border-dflt flex flex-col items-center justify-center rounded-lg gap-burger hover:gap-0 hover:bg-muted-hover transition-all duration-300 cursor-pointer"
        >
          <div className="burger-slice" />
          <div className="burger-slice absolute" />
          <div className="burger-slice" />
        </div>
        <Link href={"/"}>
          <Image
            src={logoName}
            alt="logo"
            className="h-header-logo w-auto cursor-pointer"
          ></Image>
        </Link>
        <div className="flex gap-1">
          <Link
            href={"/menu"}
            className={`${raleway.className} hidden lg:hidden xl:block md:block header-button-link header-button-link--default`}
          >
            MENU
          </Link>
          <Link
            href={"/about"}
            className={`${raleway.className} hidden md:block header-button-link header-button-link--default`}
          >
            ABOUT
          </Link>
          <Link
            href={"/reservation"}
            className={`${raleway.className} header-button-link header-button-link--ligher`}
          >
            BOOK A TABLE
          </Link>
        </div>
      </div>
      {active && (
        <div className="fixed inset-0 bg-default p-6 z-30">
          <div
            onClick={() => setActive(false)}
            className="top-14 left-14 before:header-burger-slice after:header-burger-slice before:rotate-45 after:-rotate-45 hover:after:rotate-0 hover:before:rotate-0 w-header-icon h-header-icon bg-muted border-dflt absolute flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-muted-hover"
          ></div>
          <div className="border-container bg-muted flex items-center justify-center">
            <div className="flex flex-col items-center sm:gap-2 lg:gap-4">
              <div className="flex items-center">
                <div className="rhomb" />
                <div className="border-dflt-top w-5 h-one-px" />
                <div className="rhomb" />
              </div>
              <Link className="header-link" href={"/menu"}>
                MENU
              </Link>
              <Link className="header-link" href={"/reservation"}>
                RESERVATION
              </Link>
              <Link className="header-link" href={"/about"}>
                ABOUT
              </Link>
              <Link className="header-link" href={"/contact"}>
                CONTACT
              </Link>
              <Link className="header-link" href={"/blog"}>
                BLOG
              </Link>
              <Link className="header-link" href={"/"}>
                STYLEGUIDE
              </Link>
              <div className="flex items-center">
                <div className="rhomb" />
                <div className="border-dflt-top w-5 h-one-px" />
                <div className="rhomb" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
