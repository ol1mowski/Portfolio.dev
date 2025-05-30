import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.DB_URL;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const MONGODB_OPTIONS: mongoose.ConnectOptions = {
  serverSelectionTimeoutMS: process.env.NODE_ENV === 'production' ? 30000 : 5000,
  socketTimeoutMS: process.env.NODE_ENV === 'production' ? 60000 : 45000,
  connectTimeoutMS: process.env.NODE_ENV === 'production' ? 30000 : 10000,
  maxPoolSize: process.env.NODE_ENV === 'production' ? 50 : 10,
};

if (!MONGODB_URI) {
  throw new Error('Please define the DB_URL environment variable');
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      ...MONGODB_OPTIONS,
    };

    try {
      cached.promise = mongoose.connect(MONGODB_URI as string, opts);
      // eslint-disable-next-line no-console
      console.log('Connected to MongoDB');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('MongoDB connection error:', error);
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

// Sprawdzenie czy mongoose i connection są dostępne przed dodaniem listenerów
if (mongoose && mongoose.connection) {
  mongoose.connection.on('error', (err: Error) => {
    // eslint-disable-next-line no-console
    console.error('MongoDB connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    // eslint-disable-next-line no-console
    console.log('MongoDB disconnected');
    cached.conn = null;
    cached.promise = null;
  });
}

process.on('SIGINT', async () => {
  if (mongoose && mongoose.connection && mongoose.connection.readyState === 1) {
    await mongoose.connection.close();
    // eslint-disable-next-line no-console
    console.log('MongoDB connection closed through app termination');
  }
  process.exit(0);
});
