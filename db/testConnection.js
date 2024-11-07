require('dotenv').config();
const { dbConnect } = require('./db_connect');

async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log('MONGODB_URI:', process.env.DB_URL); 
    
    const conn = await dbConnect();
    console.log('Database connected successfully');
    console.log('Connection state:', conn.connection.readyState);
    
    const { saveClientToDB } = require('./db_connect');
    const testClient = await saveClientToDB({
      name: 'Test User',
      email: 'test@example.com'
    });
    console.log('Test client saved:', testClient);
    
    process.exit(0);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}

testConnection(); 