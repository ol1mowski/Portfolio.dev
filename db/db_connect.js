require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.DB_URL;

const MONGODB_OPTIONS = {
  serverSelectionTimeoutMS: process.env.NODE_ENV === 'production' ? 30000 : 5000,
  socketTimeoutMS: process.env.NODE_ENV === 'production' ? 60000 : 45000,
  connectTimeoutMS: process.env.NODE_ENV === 'production' ? 30000 : 10000,
  maxPoolSize: process.env.NODE_ENV === 'production' ? 50 : 10,
  retryWrites: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryReads: true,
  w: 'majority',
  wtimeout: 2500,
  keepAlive: true,
  keepAliveInitialDelay: 300000
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

    let retries = 3;
    while (retries > 0) {
      try {
        cached.promise = await mongoose.connect(MONGODB_URI, opts);
        console.log("Connected to MongoDB");
        break;
      } catch (error) {
        retries--;
        if (retries === 0) {
          console.error("Failed to connect to MongoDB after 3 attempts:", error);
          throw error;
        }
        console.log(`Retrying connection... ${retries} attempts left`);
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5s before retry
      }
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

process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err);
    process.exit(1);
  }
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

module.exports = {
  dbConnect,
};
