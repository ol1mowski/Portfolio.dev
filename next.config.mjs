/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

export default nextConfig;
