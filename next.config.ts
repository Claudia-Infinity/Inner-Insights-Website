import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Allow Drive-hosted images (Claudia's brand assets like the
      // Discovery Call portrait live in her personal Drive and are
      // surfaced via the public thumbnail endpoint).
      { protocol: "https", hostname: "drive.google.com", pathname: "/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh4.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh5.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh6.googleusercontent.com", pathname: "/**" },
      // Imported blog posts host their hero images on Claudia's old Supabase
      // bucket. Keep the loader pointed at the original CDN so we don't have
      // to re-host every image.
      { protocol: "https", hostname: "jhmcmweqooxgsyczhpgh.supabase.co", pathname: "/**" },
    ],
  },
};

export default nextConfig;
