# My Portfolio

A static React portfolio with four projects, seven certificates, and a résumé PDF.

## Local development

Use Node.js 22.13 or newer. Run these commands from the project folder:

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The `dist/` folder is the complete website. `npm run preview` is for checking the build locally.

## Deployment

For a host that builds from a Git repository, set:

- Install command: `npm ci`
- Build command: `npm run build`
- Publish/output directory: `dist`
- Node.js version: 22.13 or newer

For a host that accepts an already built site, upload the contents of `dist/` or extract `editorial-portfolio-static.zip` directly into the site's public directory. `index.html` must be at that directory's root. Keep the `assets/`, `projects/`, and `documents/` folders alongside it.

Relative asset URLs support hosting at a domain root or in a project subdirectory. The page uses section anchors and does not need route rewrites, a backend, environment variables, or API keys. Serve the site over HTTP/HTTPS; opening `index.html` directly from the filesystem does not run the application correctly.

## Content

- `src/App.jsx`: profile, skills, projects, and certification entries.
- `src/styles.css`: layout and responsive styling.
- `public/`: portrait, project screenshots, favicon, résumé, and certificate PDFs.
- `index.html`: page title and metadata.

After changing content, rebuild and upload the new `dist/` contents. Dependencies and local caches are excluded from the source ZIP.
