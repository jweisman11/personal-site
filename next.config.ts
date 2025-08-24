import type { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  // Enable static HTML export
  output: "export",

  // Enable React strict mode
  reactStrictMode: true,

  // Enable SWC compiler for faster builds
  swcMinify: true,


};

export default nextConfig;
