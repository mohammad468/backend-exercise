const fs = require("fs");
fs.writeFileSync("./fs-text.txt", "new message for files", {
  encoding: "utf-8",
});
