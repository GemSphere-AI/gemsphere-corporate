const isDev = process.env.NODE_ENV === 'development';

// Dynamically determine base path for GitHub Pages deployments
let basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;
if (!isDev && !basePath && process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
  // If building on GitHub Actions for the gemsphere-corporate repository (or any sub-repository other than monorepo)
  if (repoName && repoName !== 'gemsphere-platform') {
    basePath = `/${repoName}`;
  }
}

const nextConfig = {
  output: isDev ? undefined : 'export',
  distDir: isDev ? '.next' : 'dist',
  basePath: basePath,
  trailingSlash: true,
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
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || '',
  },
  ...(isDev && {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/en-us/',
          permanent: true,
        },
      ];
    },
  }),
};

export default nextConfig;
