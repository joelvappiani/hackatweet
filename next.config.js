/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    MONGO_CONNECTION_STRING : process.env.MONGO_CONNECTION_STRING
  }
}
module.exports = nextConfig
