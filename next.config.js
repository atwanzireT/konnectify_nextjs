/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  eslint: {
    // Report linting errors as warnings during builds, but do not fail the build.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Report type errors as warnings during builds, but do not fail the build.
    ignoreBuildErrors: true,
  },
};



// module.exports = nextConfig
