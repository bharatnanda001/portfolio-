import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume.pdf',
        destination: 'https://drive.google.com/drive/folders/11SBFpfS5OMElKp8RXitH2MGMO3mWVqoS',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
