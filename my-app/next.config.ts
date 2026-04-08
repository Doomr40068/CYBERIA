import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/storage/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/projects/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.mds.yandex.net',
            },
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        dangerouslyAllowSVG: true,
        unoptimized: process.env.NODE_ENV === 'development',
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*',
            },
        ];
    },
};

export default nextConfig;
