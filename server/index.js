import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";

import imageRoutes from "./routes/imageRoutes.js";

import path from "path";
import { fileURLToPath } from "url";

export const dirname = () => path.dirname(fileURLToPath(import.meta.url));

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.use("/image", upload.single("image"), imageRoutes);

const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(PORT, () => console.log(`Server Port: ${PORT}`)))
  .catch((err) => console.log(err));
