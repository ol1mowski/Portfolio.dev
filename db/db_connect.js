require("dotenv").config();

const mongoose = require("mongoose");
const {
  getProjects,
  getPosts,
} = require("./Utils/DataFetchingFunctions/DataFetchingFunctions");

const uri = process.env.DB_URL;

if (!uri) {
  console.error("DB_URL is not defined in environment variables");
  process.exit(1);
}

console.log("MongoDB URI:", uri);

mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error:", e);
  });

module.exports = {
  getProjects,
  getPosts,
};
