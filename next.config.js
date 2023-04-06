/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // configure nextjs bild directory to /docs for github pages deployment
  distDir: "docs",
  basePath: "/blog",
  assetPrefix: "/blog/",
};

module.exports = nextConfig;
