const { Projects } = require("../../Schemas/Projects");


async function getProjects() {
  try {
    const data = await Projects.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = {
  getProjects: getProjects,
};
