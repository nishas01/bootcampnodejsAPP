const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js App running on AKS 🚀");
});

module.exports = app;
