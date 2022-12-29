import { Router } from "express";
import imageUploader from "../controllers/uploader.js";
import imageSender from "../controllers/sender.js";
import singleSender from "../controllers/singleSender.js";
const router = Router();

router.post("/", imageUploader);
router.get("/", imageSender);
router.get("/:id", singleSender);

export default router;
