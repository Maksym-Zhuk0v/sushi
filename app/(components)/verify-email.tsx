"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useUserStore } from "../stores/useUserStore";

function Verify() {
  const { verify } = useUserStore();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    if (code) {
      verify(code).then(() => setMessage("Verification successful"));
    }
  }, [code, verify]);

  return <div className="text-center p-4">{message}</div>;
}

export default function VerifyEmail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Verify />
    </Suspense>
  );
}
