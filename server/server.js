const express = require("express");
require("dotenv").config();
// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

// listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000!!!", process.env.PORT);
});

process.env;
