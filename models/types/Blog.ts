export type TBlog = {
  _id: string;
  title: string;
  image: string;
  lastModified: number;
  body: { bodyTitle: string; bodyDescription: string }[];
};
