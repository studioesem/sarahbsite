import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Real per-post dates for the sitemap. Google only trusts lastmod when it is
// accurate, so this reads each post's own frontmatter rather than stamping the
// build time across every URL, which would claim the whole site changed daily.
const POSTS = 'src/content/blog';
const postDates = new Map();
for (const file of readdirSync(POSTS)) {
  if (!/\.mdx?$/.test(file)) continue;
  const src = readFileSync(`${POSTS}/${file}`, 'utf8');
  if (/^draft:\s*true/m.test(src)) continue;
  const updated = src.match(/^updatedDate:\s*['"]?([\d-]+)/m);
  const published = src.match(/^pubDate:\s*['"]?([\d-]+)/m);
  const date = updated?.[1] ?? published?.[1];
  if (date) postDates.set(`/writing/${file.replace(/\.mdx?$/, '')}/`, new Date(date));
}

export default defineConfig({
  site: 'https://sarahbarns.com',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const date = postDates.get(path);
        if (date) item.lastmod = date.toISOString();
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
