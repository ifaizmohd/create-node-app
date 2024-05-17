import dotenv from "dotenv";
import path = require("path");
dotenv.config({
  path: path.join(__dirname, `../config/.env.${process.env.NODE_ENV}`),
});
import express from "express";
import bodyParser from "body-parser";
import { helloWorld } from "./controllers/index";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Your routes goes here.
app.use("/", helloWorld);

app.listen(PORT, () => {
  console.log(`Your app is running on port: ${PORT}`);
});
