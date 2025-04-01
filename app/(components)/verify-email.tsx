"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserStore } from "../stores/useUserStore";

const VerifyEmail = () => {
  const { verify } = useUserStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [message, setMessage] = useState("Verifying...");

  console.log(code);

  useEffect(() => {
    if (code) {
      verify(code);
    }
    setMessage("Verification successful");
  }, [code, router]);

  return <div className="text-center p-4">{message}</div>;
};

export default VerifyEmail;
