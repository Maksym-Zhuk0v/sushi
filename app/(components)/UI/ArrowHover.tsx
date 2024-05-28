import Image from "next/image";
import React from "react";
import arroRight from "../../../public/ph-arrow-right-light.png";

interface IArrowHover {
  hover: boolean;
}

const ArrowHover = ({ hover }: IArrowHover) => {
  return (
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
          left: hover ? "32px" : "-6px",
        }}
      />
    </div>
  );
};

export default ArrowHover;
