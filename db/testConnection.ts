require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '../.env.test' : '../.env',
});
const { dbConnect } = require('./db_connect');

async function testConnection() {
  try {
    console.log('Environment check:', {
      nodeEnv: process.env.NODE_ENV,
      currentDir: process.cwd(),
      envFiles: {
        env: require('fs').existsSync('.env'),
        envTest: require('fs').existsSync('.env.test'),
      },
    });

    if (!process.env.DB_URL) {
      throw new Error(
        'DB_URL is not defined. Available env vars: ' +
          Object.keys(process.env)
            .filter(key => !key.includes('='))
            .join(', ')
      );
    }

    console.log(
      'Attempting to connect with URL:',
      process.env.DB_URL.replace(/\/\/.*@/, '//*****@')
    );

    const conn = await dbConnect();
    console.log('Connection successful!');
    console.log('Connection state:', conn.connection.readyState);

    process.exit(0);
  } catch (error) {
    console.error('Connection error:', error);
    process.exit(1);
  }
}

testConnection();
