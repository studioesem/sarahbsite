import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = (await getCollection('blog'))
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Sarah Barns',
    description: 'On technology, place, governance, and the slow work of paying attention.',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writing/${post.id.replace(/\.mdx?$/, '')}/`,
    })),
  });
}
