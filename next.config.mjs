/** @type {import("next").NextConfig} */
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  images: { unoptimized: true },
  webpack: (config) => {
    // Path alias for "@/..."
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  }
};

export default nextConfig;
