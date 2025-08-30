/** @type {import("next").NextConfig} */
import path from "path";

const nextConfig = {
  images: { unoptimized: true },
  webpack: (config) => {
    // Map "@/..." to project root
    config.resolve.alias["@"] = path.resolve(".");
    return config;
  }
};

export default nextConfig;
