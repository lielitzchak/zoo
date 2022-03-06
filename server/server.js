require("dotenv").config();
const express = require("express");
try {
  require("./DB");
} catch (error) {
  return error;
}

const animalsRoutes = require("./routes/animals-router");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT);
// app.use("/animal", animalsRoutes);
