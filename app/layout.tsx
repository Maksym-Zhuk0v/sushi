import type { Metadata } from "next";
import "./globals.css";
import { Forum } from "next/font/google";
import React from "react";

const forum = Forum({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Quithen - Restaurant Framer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={forum.className}>
        <div className="text-text-primary bg-default h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
