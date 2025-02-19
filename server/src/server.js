import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});
