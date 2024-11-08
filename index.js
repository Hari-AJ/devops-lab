// index.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/status", (req, res) => {
  res.json({ status: "API is running successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
