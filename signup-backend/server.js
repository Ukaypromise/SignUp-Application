const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routUrl = require("./route/routes");
const cors = require("cors");

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("DataBase connected and Running");
});

app.use(express.json());
app.use(cors());
app.use("/api", routUrl);
app.listen(5000, () => {
  console.log("ZOOOM...ZOOOOMINNG TO PORT 5000");
});
