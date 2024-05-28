import React, { ReactNode } from "react";
import bg from "../../public/bg-wall.webp";
import Link from "next/link";

interface IPageComponent {
  children: ReactNode;
}

const PageComponent = ({ children }: IPageComponent) => {
  return (
    <>
      <div
        className="fixed inset-0 opacity-10 bg-center bg-cover z-0"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      />
      <div className="w-full lg:grow lg:w-1 lg:min-h-screen flex flex-col gap-4 pb-4 px-4 lg:pr-4 lg:pl-0 lg:py-4 xl:py-6 xl:pr-6 z-10">
        {children}
        <div className="w-full rounded-2xl overflow-hidden flex flex-col gap-4">
          <div className="text-text-secondary w-full border-dflt rounded-2xl overflow-hidden flex items-center justify-center gap-4 p-6">
            <p className="tracking-wide text-xs hover:underline hover:text-text-primary">
              PAWEL GOLA
            </p>
            <div className="w-2 h-2 border-dflt rotate-45" />
            <Link
              href={"/licensing"}
              className="tracking-wide text-xs hover:underline hover:text-text-primary"
            >
              LICENSING
            </Link>
            <div className="w-2 h-2 border-dflt rotate-45" />
            <p className="tracking-wide text-xs hover:underline hover:text-text-primary">
              STYLEGUIDE
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageComponent;
