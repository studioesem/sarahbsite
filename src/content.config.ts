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

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    years: z.string(),                 // display range, e.g. "2011" or "2016–ongoing"
    sortYear: z.number(),              // start year, used to order the grid
    strand: z.enum(['Strategy', 'Creative', 'Research']),
    summary: z.string(),               // back-of-card text — keep to ~40 words
    partner: z.string().optional(),    // client / collaborator line
    image: z.string().optional(),      // e.g. /projects/unguarded-moments.jpg
    imageAlt: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
    featured: z.boolean().optional(),  // featured = big 2×2 tile in the grid
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, projects };
