"use client";

import { useRouter } from "next/navigation";
import HeaderText from "./(components)/UI/HeaderText";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col gap-12 items-center justify-center text-xl lg:text-6xl">
      <HeaderText>This Page has not found</HeaderText>
      <div className="cursor-pointer" onClick={() => router.back()}>
        <HeaderText>go back to previus page</HeaderText>
      </div>
    </div>
  );
}
