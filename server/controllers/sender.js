import Image from "../models/Image.js";

const imageSender = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default imageSender;
