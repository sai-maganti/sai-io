import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained production server into .next/standalone so the
  // Docker runtime image needs no node_modules install (see Dockerfile).
  output: "standalone",
};

export default nextConfig;
