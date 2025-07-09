const nextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.sanity.io',
                protocol: 'https',
            },
            {
                hostname: 'img.clerk.com',
                protocol: 'https',
            },
        ],
    },
    // Allow payment redirects from external payment providers
    experimental: {
        serverActions: {
            allowedOrigins: [
                'movedailymethod.com',
                'www.movedailymethod.com',
                'secure.wayforpay.com',
                'localhost:3000', // for local development
            ],
        },
    },
    // Additional configuration for handling external redirects
    async headers() {
        return [
            {
                source: '/payment/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ];
    },
};
export default nextConfig;
