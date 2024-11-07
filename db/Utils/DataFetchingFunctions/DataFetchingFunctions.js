const { Projects } = require("../../Schemas/Projects");
const { Posts } = require("../../Schemas/Posts");
const { Opinions } = require("../../Schemas/Opinions");
const { Customers } = require("../../Schemas/Clients");

async function getProjects() {
  try {
    const data = await Projects.find();
    return data;
  } catch (e) {
    console.error('Error fetching projects:', e);
    return null;
  }
}

async function getPosts() {
  try {
    const data = await Posts.find();
    return data;
  } catch (e) {
    console.error('Error fetching posts:', e);
    return null;
  }
}

async function getOpinions() {
  try {
    const data = await Opinions.find();
    return data;
  } catch (e) {
    console.error('Error fetching opinions:', e);
    return null;
  }
}

async function saveClientToDB({ name, email }) {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  try {
    const existingCustomer = await Customers.findOne({ email: email.trim() });
    if (existingCustomer) {
      throw new Error("Customer with this email already exists");
    }

    const newCustomer = new Customers({
      name: name.trim(),
      email: email.trim(),
      createdAt: new Date()
    });

    const savedCustomer = await newCustomer.save();
    console.log('Customer saved successfully:', savedCustomer);
    return savedCustomer;

  } catch (error) {
    console.error("Error saving customer:", error);
    throw new Error(error.message || "Error saving customer data");
  }
}

module.exports = {
  getProjects,
  getPosts,
  saveClientToDB,
  getOpinions,
};
