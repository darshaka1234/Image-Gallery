import Image from "../models/Image.js";

const imageSender = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findOne({ id });
    res.status(200).json(image);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default imageSender;
