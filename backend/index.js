import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { notFound } from "./middlewares/notFound.js";
import { errorHandle } from "./middlewares/errorHandle.js";
dotenv.config();
const PORT = process.env.PORT;

import registerUser from "./routes/userAuth.js";
import loginUser from "./routes/userAuth.js";

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/api/users", registerUser);
app.use("/api/users", loginUser);

app.get("/", (req, res) => {
  res.json("this is finanace app, good afternoon");
});

app.use(notFound);
app.use(errorHandle);
mongoose
  .connect(process.env.MONGO_URI_PRO)
  .then(() => console.log("✅ Connection Successfully"))
  .catch((error) => console.log("❌error connection", error));
app.listen(PORT, () => {
  console.log(`server is runing on http://localhost:${PORT}`);
});
