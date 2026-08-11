import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json({ msg: "this is the beginning of all things." });
});

app.listen(process.env.PORT, async () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
