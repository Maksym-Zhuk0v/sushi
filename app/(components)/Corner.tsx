import React from "react";

interface ICorner {
  children: React.ReactNode;
}

const Corner = ({ children }: ICorner) => {
  return (
    <div className="absolute bottom-0 right-0 flex flex-col items-end">
      <div className="corner" />
      <div className="flex items-end">
        <div className="corner" />
        <div className="pt-2 pl-4 bg-default relative rounded-tl-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Corner;
