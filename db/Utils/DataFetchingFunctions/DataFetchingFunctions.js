const { Projects } = require("../../Schemas/Projects");
const { Posts } = require("../../Schemas/Posts");
const { Clients } = require("../../Schemas/Clients");

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

async function saveClientToDB({ name, email }) {
  console.log("Received data:", { name, email });

  const newClient = new Clients({ name: name.trim(), email: email.trim() });
  console.log("New client object:", newClient);

  try {
    const savedClient = await newClient.save();
    console.log("Client saved successfully:", savedClient);
  } catch (error) {
    console.error("Error saving client:", error);
    throw new Error("Error saving client data");
  }
}


module.exports = {
  getProjects: getProjects,
  getPosts: getPosts,
  saveClientToDB: saveClientToDB,
};
