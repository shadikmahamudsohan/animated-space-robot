import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: [
            'localhost:3000', // localhost
            'https://animated-space-robot-qrr95qr5rq294wq-3000.app.github.dev', // Codespaces
          ],
        },
      },
};

export default nextConfig;
