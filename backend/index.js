import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";

const app = express();
const PORT = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Uber");
});

app.listen(PORT, () => {
  console.log(`Server running on the PORT: ${PORT}`);
});
