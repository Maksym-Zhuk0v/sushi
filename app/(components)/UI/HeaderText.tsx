import React from "react";

interface IHeaderText {
  children?: string;
  className?: string;
}

export const HeaderText = ({ children, className }: IHeaderText) => {
  return (
    <div className={`${className} flex gap-4 items-center mx-auto`}>
      <div className="flex items-center">
        <div className="rhomb" />
        <div className="h-one-px w-5 border-dflt-top" />
      </div>
      <p>{children}</p>
      <div className="flex items-center">
        <div className="h-one-px w-5 border-dflt-top" />
        <div className="rhomb" />
      </div>
    </div>
  );
};
