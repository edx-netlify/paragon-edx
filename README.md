This project is a basic Next.js site that simply redirects to a destination URL with an encoded theme applied via the `?themes=` query parameter.

## Configuration

### Environment Variables

You can configure both the destination URL and the encoded theme using environment variables:

```bash
# Set a custom destination URL
REDIRECT_DESTINATION_URL=https://your-custom-site.netlify.app

# Set a custom encoded theme
ENCODED_THEME=your-encoded-theme-string-here
```

**Defaults:**
- `REDIRECT_DESTINATION_URL`: `https://paragon-openedx.netlify.app`
- `ENCODED_THEME`: The Paragon Elm theme (long encoded string)

### Default Elm Theme URLs

The default encoded theme corresponds to the following Elm theme CSS files:
- **Core**: https://cdn.jsdelivr.net/npm/@edx/elm-theme@1/dist/core.css
- **Light**: https://cdn.jsdelivr.net/npm/@edx/elm-theme@1/dist/light.css

### Generating Custom Encoded Themes

To create your own encoded theme string:

1. Visit the [Paragon documentation site](https://paragon-openedx.netlify.app)
2. Expand the **theme selector collapsible** in the Menu
3. Add a new custom theme with an optional name and URLs to the CSS (e.g., from a CDN)
4. Copy the generated encoded string from the URL's `?themes=` parameter
5. Use this string as your `ENCODED_THEME` environment variable

This allows you to create multiple instances of this redirect site pointing to different destinations with different themes applied.

## Development

### Getting Started

Install the dependencies:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
