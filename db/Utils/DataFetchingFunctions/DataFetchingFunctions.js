const { Projects } = require("../../Schemas/Projects");
const { Posts } = require("../../Schemas/Posts");
const { Opinions } = require("../../Schemas/Opinions");

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

async function getOpinions() {
  try {
    const data = await Opinions.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function saveClientToDB({ name, email }) {
  const newClient = new Clients({ name: name.trim(), email: email.trim() });

  try {
    await newClient.save();
  } catch (error) {
    console.error("Error saving client:", error);
    throw new Error("Error saving client data");
  }
}

module.exports = {
  getProjects: getProjects,
  getPosts: getPosts,
  saveClientToDB: saveClientToDB,
  getOpinions: getOpinions,
};
