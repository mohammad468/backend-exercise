const { profile, products, basket, comments } = require("./Api.js");
const http = require("http");
http
  .createServer((req, res) => {
    switch (req.url) {
      case "/api/profile":
        res.write(JSON.stringify(profile));
        break;
      case "/api/products":
        res.write(JSON.stringify(products));
        break;
      case "/api/basket":
        res.write(JSON.stringify(basket));
        break;
      case "/api/comments":
        res.write(JSON.stringify(comments));
        break;
      default:
        res.write(
          JSON.stringify({
            status: 404,
            message: "Not Found",
          })
        );
        break;
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("http://localhost:3000");
  });
