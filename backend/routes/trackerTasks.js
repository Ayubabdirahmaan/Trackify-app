import express from "express";
import { createTask } from "../controllers/trackerTask.js";
import { protect } from "../middlewares/AuthMiddleWare.js";
import { validate } from "../middlewares/validationZod.js";
import { trackerValidationSchema } from "../schema/trackerSchema.js";
const router = express.Router();

router.post("/createTask", protect, validate(trackerValidationSchema), createTask);

export default router;
