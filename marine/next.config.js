/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    HOST_DB: process.env.DB_HOST,
    PASS_DB: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_SID: process.env.DB_SID,
    DB_PORT: process.env.DB_PORT,
  },
  trailingSlash: true,
  reactStrictMode: false,
  webpack: (config, { dev }) => {

    if (dev) {
      config.cache = true;
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
}
