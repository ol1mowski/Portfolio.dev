const { Projects } = require("../../Schemas/Projects");
const { Posts } = require("../../Schemas/Posts");


async function getProjects() {
  try {
    const data = await Projects.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getPosts() {
  try {
    const data = await Posts.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = {
  getProjects: getProjects,
  getPosts: getPosts,
};
