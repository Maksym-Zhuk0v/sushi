import HeaderText from "@/app/(components)/UI/HeaderText";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

interface IBlogInfo {
  params: Params;
}
const getBlogById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Blog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }: IBlogInfo) => {
  const blog = await getBlogById(params.id);
  const date = new Date(blog["foundedBlog"].lastModified);
  return (
    <div className="border-container relative flex flex-col px-4 md:px-24 lg:px-4 xl:px-24 py-12">
      <Link href={`/blog/view/${params.id}/edit`}>
        <FontAwesomeIcon
          className="absolute top-12 right-12 w-8 h-8 cursor-pointer"
          icon={faEdit}
        />
      </Link>
      <HeaderText>{date.toLocaleDateString()}</HeaderText>
      <HeaderText className="text-6xl text-center mt-4">
        {blog["foundedBlog"].title}
      </HeaderText>
      {blog["foundedBlog"].body.map(
        (theme: { bodyTitle: string; bodyDescription: string }) => (
          <div className="mt-12">
            <h2 className="text-2xl">{theme.bodyTitle}</h2>
            <p className="mt-4">{theme.bodyDescription}</p>
          </div>
        )
      )}
    </div>
  );
};

export default page;
