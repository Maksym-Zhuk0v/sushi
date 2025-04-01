import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "@/app/(components)";

interface IEditBlog {
  params: Params;
}

const page = ({ params }: IEditBlog) => {
  return (
    <div className="border-container relative flex flex-col px-4 md:px-24 lg:px-4 xl:px-24 py-12">
      <EditForm id={params.id} />
    </div>
  );
};

export default page;
