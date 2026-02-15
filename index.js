import express from "express";
const app = express();
app.use(express.json());
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.json("this is finanace app");
});


app.listen(PORT, () => {
  console.log(`server is runing on http://localhost:${PORT}`);
});
