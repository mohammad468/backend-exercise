const http = require("http");
http
  .createServer((req, res) => {
    if (req.url == "/profile") {
      const profile = {
        name: "mohammad",
        family: "mohseni",
        age: 22,
        wallet: "300000$",
      };
      res.write(JSON.stringify(profile));
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("http://localhost:3000");
  });
