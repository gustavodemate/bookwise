/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3-alpha-sig.figma.com", "lh3.googleusercontent.com", "avatars.githubusercontent.com", "images.unsplash.com"]
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },

}

module.exports = nextConfig