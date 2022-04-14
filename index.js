const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello world");
});
app.listen(3000, () => {
  console.log("server run port 3000");
});
