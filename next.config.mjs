// This indicates the type for better IDE support
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['readymadeui.com', 'images.unsplash.com', 'placehold.co', 'media.licdn.com'],
    },
};

export default nextConfig;
