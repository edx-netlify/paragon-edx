/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    const searchParams = new URLSearchParams();
    
    // Use environment variable for encoded theme, fallback to Paragon Elm theme
    const encodedTheme = process.env.ENCODED_THEME || 'N4IgLiBcDaoHZRAeQA4FM4AI0BMAamAFACJoBmAhgK4A2YAlCADQhVTQC6Avk-IgKI0AtkVx4AdAHsATgHNGLNjBAALMGBQBnSAHodAYxxxxAK0040NAJYA3aeLhowOuCiE6AArgAeOy0IBaMBU0ITQPAEYdHCtNZ30ZNHF9TU1mVXUtXQMjU3NLW3tHZ1d3LxxffyCQsMjo2OdrWTVk1JBuDhYrKAiuIA';
    searchParams.set('themes', encodedTheme);
    
    // Use environment variable for destination URL, fallback to current URL
    const destinationBase = process.env.REDIRECT_DESTINATION_URL || 'https://paragon-openedx.netlify.app';
    
    return [
      {
        source: '/:path*',
        destination: `${destinationBase}/:path*?${searchParams.toString()}`,
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig;
