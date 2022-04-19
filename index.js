const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "mohammad",
      age: 22,
    },
    {
      id: 2,
      name: "ali",
      age: 20,
    },
  ]);
});
app.post("/post-data/:name", (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    params: req.params,
  });
});
app.listen(3000, () => {
  console.log("server run port 3000");
});
