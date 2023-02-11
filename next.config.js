/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
        domains: ['d1ax460061ulao.cloudfront.net']
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search-results',
                permanent: true
            }
        ];
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.matspar.se/:path*'
            }
        ];
    }
};

module.exports = nextConfig;
