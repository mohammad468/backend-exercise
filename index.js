const { profile, products, basket, comments } = require("./Api.js");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
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
      case "/fileupload":
        if (req.method.toLowerCase() === "post") {
          if (!fs.existsSync(path.join(__dirname, "uploads", "files"))) {
            fs.mkdirSync("uploads/files", { recursive: true });
          }
          const form = new formidable.IncomingForm({
            uploadDir: path.join(__dirname, "uploads", "files"),
            keepExtensions: true,
            multiples: true,
            maxFileSize: 5 * 1024 * 1024,
            allowEmptyFiles: false,
          });
          form.parse(req, function (err, fields, files) {});
        } else {
          const htmlForm = fs.readFileSync("./uploadfile.html", "utf-8");
          res.write(htmlForm);
        }
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
