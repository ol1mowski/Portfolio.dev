require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.DB_URL;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
    console.log('Successfully connected to MongoDB');
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    console.error('Error connecting to MongoDB:', e);
    throw e;
  }
}

async function saveClientToDB({ name, email }) {
  await dbConnect();
  const { Customers } = require('./Schemas/Clients');
  
  try {
    const newCustomer = new Customers({
      name: name.trim(),
      email: email.trim()
    });
    
    const savedCustomer = await newCustomer.save();
    console.log('Customer saved:', savedCustomer);
    return savedCustomer;
  } catch (error) {
    console.error('Error in saveClientToDB:', error);
    throw error;
  }
}

module.exports = {
  dbConnect,
  saveClientToDB
};
