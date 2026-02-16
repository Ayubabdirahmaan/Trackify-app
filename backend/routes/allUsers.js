import express from "express";
import { getUsers } from "../controllers/userAuth.js";
const router = express.Router();

router.get("/AllUser", getUsers);

export default router;
