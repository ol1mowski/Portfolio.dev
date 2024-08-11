require("dotenv").config();

const mongoose = require("mongoose");
const {
  getProjects,
  getPosts,
  saveClientToDB,
} = require("./Utils/DataFetchingFunctions/DataFetchingFunctions");

const uri = process.env.DB_URL;

if (!uri) {
  console.error("DB_URL is not defined in environment variables");
  process.exit(1);
}

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000,
  })
  .catch((e) => {
    console.error("Connection error:", e);
  });

module.exports = {
  getProjects,
  getPosts,
  saveClientToDB,
};
