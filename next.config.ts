import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imgs.search.brave.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.vectorstock.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "media-cdn.tripadvisor.com",
            },
            {
                protocol: "https",
                hostname: "static.tacdn.com",
            },
        ],
    },
};

export default nextConfig;
