import Image from "../models/Image.js";
import path from "path";
import fs from "fs";
import { dirname } from "./../index.js";

const imageUploader = async (req, res) => {
  const name = req.body.name;
  const __dirname = dirname();
  const image = {
    data: fs.readFileSync(
      path.join(__dirname + "/public/assets/" + req.file.filename)
    ),
    contentType: "image/png",
  };
  const newImage = new Image({ name, image });
  try {
    const saveImage = await newImage.save();
    res.status(200).json(saveImage);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default imageUploader;
