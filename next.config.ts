import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude problematic packages from server-side bundling
  serverExternalPackages: ["chromadb", "@chroma-core/default-embed"],
};

export default nextConfig;
