/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint:{
        ignoreDuringBuilds: true,
    },
    typescript:{
        ignoreBuildErrors: true,
    },
    images: {
      
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
            },
              {
                protocol: "https",
                hostname: 'res.cloudinary.com'
            },
              {
             protocol: "https",
             hostname: "utfs.io",
              },
        ],
    },
};

export default nextConfig;
