const { Projects } = require("../../Schemas/Projects");
const { Opinions } = require("../../Schemas/Opinions");
const { dbConnect } = require("../../db_connect");

async function getProjects() {
  await dbConnect();
  try {
    const data = await Projects.find();
    return data;
  } catch (e) {
    console.error("Error fetching projects:", e);
    return null;
  }
}

async function getPosts() {
  await dbConnect();
  const { Posts } = require("../../Schemas/Posts");
  try {
    const data = await Posts.find();
    return data;
  } catch (e) {
    console.error("Error fetching posts:", e);
    return null;
  }
}

async function getOpinions() {
  await dbConnect();
  try {
    const data = await Opinions.find();
    return data;
  } catch (e) {
    console.error("Error fetching opinions:", e);
    return null;
  }
}

async function saveClientToDB({ name, email }) {
  try {
    await dbConnect();
    const { Customers } = require("../../Schemas/Clients");

    // Sprawdź czy klient już istnieje
    const existingCustomer = await Customers.findOne({ email: email.trim() });
    
    if (existingCustomer) {
      console.log("Customer already exists:", existingCustomer);
      return existingCustomer;
    }

    // Utwórz nowego klienta
    const newCustomer = new Customers({
      name: name.trim(),
      email: email.trim(),
      createdAt: new Date()
    });

    // Zapisz do bazy
    const savedCustomer = await newCustomer.save();
    console.log("New customer saved:", savedCustomer);
    
    return savedCustomer;
  } catch (error) {
    console.error("Error in saveClientToDB:", error);
    throw error;
  }
}

module.exports = {
  getProjects,
  saveClientToDB,
  getPosts,
  getOpinions,
};
