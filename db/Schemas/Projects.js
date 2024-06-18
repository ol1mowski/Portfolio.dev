const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
  projects: [{ id: String, date: String, description: String, githubLink: String, image: String, liveLink: String, reverse: Boolean, technologies: [], title: String }]
});

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = {
  Projects: Projects,
};
