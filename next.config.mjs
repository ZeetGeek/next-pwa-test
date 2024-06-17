// next.config.mjs
import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
     dest: "public",
     disable: false, // Enable PWA support even in development
})({
     // other next.js configuration options here
     reactStrictMode: true,
});

export default nextConfig;
