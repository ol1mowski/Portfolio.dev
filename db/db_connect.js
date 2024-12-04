require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? "../.env.test" : "../.env",
});
const mongoose = require("mongoose");
const MONGODB_URI = process.env.DB_URL;

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
      bufferCommands: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 60000,
      connectTimeoutMS: 30000,
      maxPoolSize: 10,
      retryWrites: true,
    };

    try {
      cached.promise = mongoose.connect(MONGODB_URI, opts);
      cached.conn = await cached.promise;
      console.log("Successfully connected to MongoDB");
      return cached.conn;
    } catch (e) {
      cached.promise = null;
      console.error("Error connecting to MongoDB:", e);
      throw e;
    }
  }

  return cached.conn;
}


module.exports = {
  dbConnect,
};
