const mongoose = require("mongoose");
const db = process.env.DB;
const DB_PASS = process.env.DB_PASS;
let dbUrl = db.replace("<password>", DB_PASS);

async function connection() {
  try {
    const connection = await mongoose.connect(dbUrl, {});
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connection;
