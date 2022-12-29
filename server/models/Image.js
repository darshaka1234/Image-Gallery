import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    name: String,
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("image", ImageSchema);

export default Image;
