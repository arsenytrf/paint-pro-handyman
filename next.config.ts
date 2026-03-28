import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/paint-pro-handyman",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
