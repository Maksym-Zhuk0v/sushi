"use client";

import React from "react";
import { motion } from "framer-motion";

interface IMotionP {
  children: string;
}

const MotionP = ({ children }: IMotionP) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="max-w-text-layout leading-mainPage text-layout-page-small md:text-layout-page xl:text-layout-page-large tracking-mainPage absolute left-8 bottom-8 md:left-16 md:bottom-14 text-wrap z-20"
    >
      {children.toUpperCase()}
    </motion.div>
  );
};

export default MotionP;
