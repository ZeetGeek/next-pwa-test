// next.config.mjs
import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
     dest: "public",
     disable: !isProd,
})({
     // other next.js configuration options here
     reactStrictMode: true,
});

export default nextConfig;
