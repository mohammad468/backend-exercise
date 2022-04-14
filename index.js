const http = require("http");
const { MongoClient } = require("mongodb");
// Connection url
const Db_URL = "mongodb://localhost:27017";
// Connect using MongoClient
let mongoClient, db;
(async () => {
  mongoClient = new MongoClient(Db_URL);
  await mongoClient.connect((err, client) => {
    const db = mongoClient.db("nodeJs");
  });
})();
http
  .createServer((req, res) => {
    const { url } = req;
    let method = req.method.toLowerCase();
    switch (url) {
      case "/":
        console.log("hello");
        break;
      case "/user/insert":
        if (method == "post") {
        }
        break;
      case "/users/list":
        if (method == "get") {
        }
        break;
      case "/users/id":
        if (method == "get") {
        }
        break;
      case "users/update/id":
        break;
      case "users/delete/id":
        break;

      default:
        break;
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));
