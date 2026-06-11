/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: '**.awin1.com' },
            { protocol: 'https', hostname: '**.currys.co.uk' },
            { protocol: 'https', hostname: '**.laptopsdirect.co.uk' },
            { protocol: 'https', hostname: '**.box.co.uk' },
            { protocol: 'https', hostname: 'm.media-amazon.com' },
            { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
        ],
    },
}

export default nextConfig
