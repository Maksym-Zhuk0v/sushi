import { GetSingleBlog } from "@/app/(components)";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface IBlogInfo {
  params: Params;
}

const page = async ({ params }: IBlogInfo) => {
  return (
    <div className="border-container relative">
      <GetSingleBlog id={params.id} />
    </div>
  );
};

export default page;
