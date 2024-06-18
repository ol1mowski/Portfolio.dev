require("dotenv").config();

const { mongoose } = require("mongoose");

const {
  getProjects,
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

getProjects().then((pr) => console.log(pr));

module.exports = {
  getProjects: getProjects,
};
