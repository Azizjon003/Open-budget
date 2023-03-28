const fs = require("fs");
const path = require("path");
const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, "/users.json"), "utf-8")
);
const randomUser = () => {
  const num = Math.floor(Math.random() * (900 - 0) + 0);
  return users[num];
};

module.exports = randomUser;
