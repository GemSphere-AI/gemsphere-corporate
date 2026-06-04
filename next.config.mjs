/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: isDev ? undefined : 'export',
  distDir: 'dist',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['@mui/material', '@mui/icons-material', '@GemSphere-AI/ui-kit', '@GemSphere-AI/api-core', '@GemSphere-AI/i18n'],
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'lucide-react', 'framer-motion'],
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  ...(isDev && {
    async redirects() {
      const devHost = process.env.DEV_REDIRECT_HOST || 'http://localhost';
      return [
        {
          source: '/',
          destination: '/en-us',
          permanent: true,
        },
        {
          source: '/login',
          destination: `${devHost}/login`,
          permanent: false,
        },
        {
          source: '/register',
          destination: `${devHost}/register`,
          permanent: false,
        },
        {
          source: '/forgot-password',
          destination: `${devHost}/forgot-password`,
          permanent: false,
        },
        {
          source: '/reset-password',
          destination: `${devHost}/reset-password`,
          permanent: false,
        },
        {
          source: '/onboarding',
          destination: `${devHost}/onboarding`,
          permanent: false,
        },
      ];
    },
  }),
};

export default nextConfig;
