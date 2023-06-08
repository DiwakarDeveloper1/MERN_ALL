const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/claimRoutes");
const app = express();

app.use(bodyParser.json());
app.use("/api/v1", userRoutes);

mongoose.connect("mongodb://localhost:27017/ClaimDB");
mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoDB");
  })
  .on("error", (err) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
