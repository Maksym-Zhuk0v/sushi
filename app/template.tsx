"use client";

import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Toaster />
      {children}
    </motion.div>
  );
}
