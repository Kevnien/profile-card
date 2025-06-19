import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/profile-card",
  images: { unoptimized: true }
};

export default nextConfig;
