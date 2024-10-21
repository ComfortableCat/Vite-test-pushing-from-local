import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "GREAT STUFF" });
});

app.listen(8080, () => {
  console.log("server is running on PORT 8080");
});
