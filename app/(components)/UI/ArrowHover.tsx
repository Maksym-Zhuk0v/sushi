import Image from "next/image";
import React from "react";

export const ArrowHover = () => {
  return (
    <div className="link-icon link-icon--sidebar bg-[rgba(24,24,24,0.5)] hover:bg-[rgba(239,231,210,0.1)] relative flex items-center transition-all duration-300">
      <Image
        alt="alr"
        src={"/arrow.svg"}
        width={0}
        height={0}
        className="sidebar-arrow absolute left-[-32px] group-hover:left-[8px] transition-all duration-300"
      />
      <Image
        alt="alr"
        src={"/arrow.svg"}
        width={0}
        height={0}
        className="sidebar-arrow absolute left-[8px] group-hover:left-[32px] transition-all duration-300"
      />
    </div>
  );
};
