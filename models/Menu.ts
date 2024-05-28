import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const MenuSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.models.Menu || mongoose.model("Menu", MenuSchema);

export default Menu;
