require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.DB_URL;

const MONGODB_OPTIONS = {
  serverSelectionTimeoutMS: process.env.NODE_ENV === 'production' ? 30000 : 5000,
  socketTimeoutMS: process.env.NODE_ENV === 'production' ? 60000 : 45000,
  connectTimeoutMS: process.env.NODE_ENV === 'production' ? 30000 : 10000,
  maxPoolSize: process.env.NODE_ENV === 'production' ? 50 : 10,
};

if (!MONGODB_URI) {
  throw new Error("Please define the DB_URL environment variable");
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
      ...MONGODB_OPTIONS
    };

    try {
      cached.promise = await mongoose.connect(MONGODB_URI, opts);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      cached.promise = null;
      throw error;
    }
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
  cached.conn = null;
  cached.promise = null;
});

process.on('SIGINT', async () => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
  }
  process.exit(0);
});

module.exports = {
  dbConnect,
};
