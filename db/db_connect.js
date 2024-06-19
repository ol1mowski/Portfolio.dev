require("dotenv").config();

const { mongoose } = require("mongoose");

const {
  getProjects,
  getPosts,
} = require("./Utils/DataFetchingFunctions/DataFetchingFunctions");

const uri = process.env.DB_URL;

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.log("Connection error:", e);
}

module.exports = {
  getProjects: getProjects,
  getPosts: getPosts,
};
