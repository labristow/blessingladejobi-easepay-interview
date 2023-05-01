/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  withVideos
};

module.exports = withPlugins([withVideos], nextConfig);
