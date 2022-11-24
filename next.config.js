/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
};

<<<<<<< HEAD
module.exports = {
  env: {
    MONGO_CONNECTION_STRING : process.env.MONGO_CONNECTION_STRING
  }
}
module.exports = nextConfig
=======
module.exports = nextConfig;
>>>>>>> ange
