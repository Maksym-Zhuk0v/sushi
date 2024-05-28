import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const blogSchema = new Schema(
  {
    title: String,
    image: String,
    lastModified: Number,
    body: Array<{ bodyTitle: String; bodyDescription: String }>,
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
