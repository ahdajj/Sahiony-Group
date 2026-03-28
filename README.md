# Sahiony Group Website

Production-ready Next.js starter for:
- HTA Construction & Trading (Qatar)
- SEC Engineering & Contracting (Syria)
- Unified Sahiony Group presentation

## Deployment Ready Status

This project is prepared for both Vercel and Netlify deployment.
- Next.js production build passes successfully
- Public logo assets are already in [public](public)
- Static asset headers are configured in [next.config.mjs](next.config.mjs)
- Netlify build settings are configured in [netlify.toml](netlify.toml)

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm install
npm run build
npm run start
```

## Deploy

Recommended deployment targets:
- Vercel
- Netlify
- Hostinger VPS / shared hosting with Node support
- Any Linux VPS with Node.js

## Deploy to Netlify

1. Push this project to GitHub.
2. In Netlify, click Add new site, then Import an existing project.
3. Select your GitHub repository.
4. Keep these values:
	- Build command: npm run build
	- Publish directory: leave empty
5. Deploy site.

Netlify will read [netlify.toml](netlify.toml) and use the Next.js runtime plugin automatically.

### Netlify build settings in this repo

- Build command: npm run build
- Node version: 20
- Plugin: @netlify/plugin-nextjs

## Deploy to Vercel (Free)

1. Create a GitHub repository and push this project folder.
2. Open Vercel and sign in with GitHub.
3. Click New Project.
4. Import the GitHub repository.
5. Keep defaults:
	- Framework Preset: Next.js
	- Build Command: npm run build
	- Output Directory: leave empty
6. Click Deploy.

After deployment, Vercel gives you a public URL in this format:
- https://your-project-name.vercel.app

## Recommended Project Root

If your repository contains multiple folders, set Vercel Root Directory to:
- sahiony-group-site

If you upload only this project itself, no Root Directory setting is needed.

## Before First Deploy

Run these commands once locally:

```bash
npm install
npm run build
```

## Optional Custom Domain

In Vercel Project Settings:
1. Open Domains
2. Add your domain
3. Follow DNS instructions from Vercel

## Notes

- Logos are already included in `/public`
- Text is structured and can be replaced with final approved content
- Project cards are placeholders for real case studies and images
