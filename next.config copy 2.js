/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }


const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
    // next config
      experimental: {
    /* appDir: true, */
    appDir: true,
    distDir: 'build'
  },
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/]
});
module.exports = nextConfig;

