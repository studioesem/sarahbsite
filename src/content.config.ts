import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(), // FORMAT — e.g. Paper, Workshop, Essay, Note
    topic: z.string().optional(),    // SUBJECT — free text, shown next to the date
    draft: z.boolean().optional(),
    // Optional foot-of-post resources (papers, slides, flyers, links)
    resources: z.array(z.object({
      label: z.string(),
      href: z.string(),
      type: z.string().optional(), // short tag shown as a mono stamp, e.g. PDF / LINK
    })).optional(),
  }),
});

export const collections = { blog };
