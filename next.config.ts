import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['package-name'],
  },
  basePath: "",
};

export default nextConfig;
