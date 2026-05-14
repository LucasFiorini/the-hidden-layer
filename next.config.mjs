const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/the-hidden-layer' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/the-hidden-layer' : '',
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
