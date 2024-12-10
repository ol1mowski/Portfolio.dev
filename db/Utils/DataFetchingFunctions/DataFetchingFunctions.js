const { Projects } = require("../../Schemas/Projects");
const { Opinions } = require("../../Schemas/Opinions");
const { dbConnect } = require("../../db_connect");

async function getOpinions() {
  try {
    await dbConnect();
    const data = await Opinions.find().lean().exec();
    return data;
  } catch (error) {
    console.error("Error fetching opinions:", error);
    return null;
  }
}

async function getProjects() {
  try {
    await dbConnect();
    const data = await Projects.find().lean().exec();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
}

async function saveClientToDB({ name, email }) {
  try {
    await dbConnect();
    const { Customers } = require("../../Schemas/Clients");

    const existingCustomer = await Customers.findOne({ 
      email: email.trim() 
    }).lean();
    
    if (existingCustomer) {
      return existingCustomer;
    }

    const newCustomer = new Customers({
      name: name.trim(),
      email: email.trim(),
      createdAt: new Date()
    });

    const savedCustomer = await newCustomer.save();
    return savedCustomer;
  } catch (error) {
    console.error("Error in saveClientToDB:", error);
    throw error;
  }
}

module.exports = {
  getProjects,
  getOpinions,
  saveClientToDB,
};
