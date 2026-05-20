import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "erb-api.gloryna.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vali-backend.gloryna.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.valiportal.net",
        pathname: "/**",
      },
    ],
  },
  // reactStrictMode: true,
  // swcMinify: true,
};

export default nextConfig;
