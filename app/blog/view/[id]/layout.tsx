import { ClientPageLayout, PageComponent } from "@/app/(components)";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  return (
    <div className="page-style">
      <ClientPageLayout id={params.id} />
      <PageComponent>{children}</PageComponent>
    </div>
  );
}
