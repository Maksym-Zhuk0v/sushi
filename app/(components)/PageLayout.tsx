import { ReactNode } from "react";
import { Header } from "./Header";
import { MotionP } from "./UI";

interface IPageLayout {
  children: ReactNode;
  text: string;
}

export const PageLayout = ({ children, text }: IPageLayout) => {
  return (
    <div className="w-full flex flex-col lg:grow lg:w-1 h-screen lg:sticky top-0 p-4 lg:pr-0 xl:p-6 xl:pr-0 z-20">
      <Header className="absolute top-16 left-16" />
      <div className="relative h-full rounded-2xl overflow-hidden">
        {children}
        <div className="h-96 w-full absolute bottom-0 bg-gradient-to-b from-gradient-lighter to-gradient-darken" />
        <MotionP>{text.toLocaleUpperCase()}</MotionP>
      </div>
    </div>
  );
};
