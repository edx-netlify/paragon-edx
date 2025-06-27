This project is a basic Next.js site that simply redirects to the Open edX Paragon design system documentation website with the [Elm Theme](https://github.com/edx/elm-theme) already applied with an encoded `?themes=` query parameter.

## Configuration

### Environment Variables

You can configure the destination URL using the `REDIRECT_DESTINATION_URL` environment variable:

```bash
# Set a custom destination URL
REDIRECT_DESTINATION_URL=https://your-custom-site.netlify.app
```

If not set, it defaults to `https://paragon-openedx.netlify.app`.

This allows you to create multiple instances of this redirect site pointing to different destinations (e.g., different versions of the Paragon documentation website).

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
