/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = {
  env: {
    MONGO_CONNECTION_STRING : process.env.MONGO_CONNECTION_STRING
  }
}
module.exports = nextConfig
