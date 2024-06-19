require("dotenv").config();

const { mongoose } = require("mongoose");

const {
  getProjects,
  getPosts,
} = require("./Utils/DataFetchingFunctions/DataFetchingFunctions");

const uri =
  "mongodb+srv://Olim:Hugo2004@cluster0.2qjo7tz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
