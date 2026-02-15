import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
  res.json("this is finanace app, good afternoon");
});
mongoose
  .connect(process.env.MONGO_URI_PRO)
  .then(() => console.log("✅ Connection Successfully"))
  .catch((error) => console.log("❌error connection", error));
app.listen(PORT, () => {
  console.log(`server is runing on http://localhost:${PORT}`);
});
