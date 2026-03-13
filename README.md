# sarahbarns.me

Personal website built with [Astro](https://astro.build) + [TinaCMS](https://tina.io).

## Getting started

```bash
npm install
npm run dev        # Starts Astro + TinaCMS at localhost:4321
npm run build      # Build for production
```

Once running, visit **localhost:4321/admin/** to open the TinaCMS editor. You'll see all your blog posts listed — click any to edit the title, description, category, date, and body content. Changes save directly to the markdown files.

## Structure

```
src/
├── content/blog/    # Blog posts (.md) — edited via TinaCMS
├── layouts/         # Base + BlogPost layouts
├── pages/           # index, about, strategy, writing/, rss
├── styles/          # global.css
tina/
├── config.ts        # TinaCMS schema (defines editable fields)
public/
├── sarah-avatar.png # Your headshot
```

## Editing content

### Blog posts (via TinaCMS)
1. Run `npm run dev`
2. Go to `localhost:4321/admin/`
3. Click any post to edit, or create a new one
4. Save — changes write to `src/content/blog/`

### About & Strategy pages
These are Astro template files (`src/pages/about.astro` and `src/pages/strategy.astro`). Edit them directly in any text editor — the content is in plain HTML within the files.

## Deploying

### Option A: Vercel
1. Push to GitHub
2. Import repo in Vercel (auto-detects Astro)
3. Point your domain via DNS

### Option B: Cloudflare Pages
1. Push to GitHub
2. Create Pages project: build command `npm run build`, output `dist`
3. Point your domain

### Enabling Tina Cloud (optional, for editing in production)
By default TinaCMS runs locally. To edit your site from anywhere:
1. Sign up at [app.tina.io](https://app.tina.io)
2. Create a project and connect your GitHub repo
3. Copy your Client ID and Token
4. Set `TINA_CLIENT_ID` and `TINA_TOKEN` as environment variables in Vercel/Cloudflare
5. Visit `yoursite.com/admin/` to edit live

## Design

Dark ground aesthetic inspired by the Sightings/Gathering Intelligences canvas. Newsreader body font, Cormorant Garamond headings. Category colours from the Sightings system.
