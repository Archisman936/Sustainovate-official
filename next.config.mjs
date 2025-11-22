/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'proxy.extractcss.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sustainablewebdesign.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;