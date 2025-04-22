require('dotenv').config();

const requiredEnvVars = ['DB_URL', 'JWT_SECRET'];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:');
  missingEnvVars.forEach(envVar => {
    console.error(`- ${envVar}`);
  });
  process.exit(1);
}

console.log('All required environment variables are set!');
console.log('Environment variables found:');
requiredEnvVars.forEach(envVar => {
  console.log(`- ${envVar}: ${process.env[envVar] ? '✓' : '✗'}`);
});
