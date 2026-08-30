import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const md = new MarkdownIt({ html: true, linkify: true });

/**
 * Turn a post body into feed-safe HTML.
 *
 * The feed carries the whole piece, not just the blurb, so readers see the
 * writing in their reader and Substack's RSS importer has something to import.
 * MDX bodies keep their component imports and JSX, which are meaningless
 * outside Astro, so those are stripped before the markdown is rendered.
 */
function toFeedHtml(body: string, siteOrigin: string) {
  const cleaned = body
    .replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '')
    .replace(/<([A-Z][\w.]*)\b[^>]*\/>/g, '')
    .replace(/<([A-Z][\w.]*)\b[^>]*>[\s\S]*?<\/\1>/g, '');

  return sanitizeHtml(md.render(cleaned), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption', 'h1', 'h2']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title'],
    },
    // Feed readers strip the page, so relative links would break. Absolutise them.
    transformTags: {
      a: (name, attrs) => {
        if (attrs.href?.startsWith('/')) attrs.href = siteOrigin + attrs.href;
        return { tagName: name, attribs: attrs };
      },
      img: (name, attrs) => {
        if (attrs.src?.startsWith('/')) attrs.src = siteOrigin + attrs.src;
        return { tagName: name, attribs: attrs };
      },
    },
  });
}

export async function GET(context: any) {
  const site = (context.site?.href ?? 'https://sarahbarns.com/').replace(/\/$/, '');

  const posts = (await getCollection('blog'))
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Sarah Barns',
    description: 'On technology, place, governance, and the slow work of paying attention.',
    site: context.site,
    items: posts.map(post => {
      const link = `/writing/${post.id.replace(/\.mdx?$/, '')}/`;
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        content: toFeedHtml(post.body ?? '', site),
        categories: [post.data.category, post.data.topic].filter(Boolean) as string[],
        link,
      };
    }),
    customData: '<language>en-AU</language>',
  });
}
