const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  githubLink: {
    type: String,
  },
  image: {
    type: String,
  },
  liveLink: {
    type: String,
  },
  reverse: {
    type: Boolean,
  },
  technologies: {
    type: [],
  },
  title: {
    type: String,
  },
});

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);

module.exports = {
  Projects: Projects,
};
