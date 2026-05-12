/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: '**.awin1.com' },
            { protocol: 'https', hostname: '**.currys.co.uk' },
            { protocol: 'https', hostname: '**.laptopsdirect.co.uk' },
            { protocol: 'https', hostname: '**.box.co.uk' },
        ],
    },
}

export default nextConfig
