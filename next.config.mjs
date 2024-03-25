/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-daisyui'],
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
