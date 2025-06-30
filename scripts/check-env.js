// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const requiredEnvVars = ['DB_URL', 'JWT_SECRET', 'RESEND_API_KEY'];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  // eslint-disable-next-line no-console
  console.error('Missing required environment variables:');
  missingEnvVars.forEach(envVar => {
    // eslint-disable-next-line no-console
    console.error(`- ${envVar}`);
  });
  process.exit(1);
}

// eslint-disable-next-line no-console
console.log('All required environment variables are set!');
// eslint-disable-next-line no-console
console.log('Environment variables found:');
requiredEnvVars.forEach(envVar => {
  // eslint-disable-next-line no-console
  console.log(`- ${envVar}: ${process.env[envVar] ? '✓' : '✗'}`);
});

const optionalEnvVars = ['RESEND_FROM_EMAIL', 'NEXT_PUBLIC_BASE_URL'];
// eslint-disable-next-line no-console
console.log('\nOptional environment variables:');
optionalEnvVars.forEach(envVar => {
  // eslint-disable-next-line no-console
  console.log(`- ${envVar}: ${process.env[envVar] ? '✓' : '✗'}`);
});
