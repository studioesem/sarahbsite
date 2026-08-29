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
    award: z.string().optional(),      // e.g. "NSW Heritage Award 2023" — shows as a badge on the card
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

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),                  // used to order and to group the list
    yearLabel: z.string().optional(),  // override, e.g. "In progress" or "2019–2021"
    type: z.enum([
      'Monograph', 'Book', 'Journal Papers', 'Book Chapters', 'Essay',
      'Report', 'Working Paper', 'White Paper', 'PhD thesis',
      'Commissioned Research Contracts', 'Commissioned Strategy & Advisory',
      'Conferences', 'Keynotes & Invited Talks', 'Interviews', 'Dataset', 'Creative Research', 'Voices',
    ]),
    venue: z.string(),                 // journal, publisher, or outlet
    authors: z.string().optional(),    // omit when sole-authored
    href: z.string().optional(),       // publisher / landing page
    doi: z.string().optional(),        // bare DOI, e.g. 10.1177/00420980211014026
    citations: z.number().optional(),  // shown as "n citations" where known
    note: z.string().optional(),       // one line of context under the details
    openAccess: z.string().optional(), // free-to-read copy: repository URL, Zenodo DOI link, or local PDF
    isbn: z.string().optional(),       // for chapters and books — from ORCID
    audio: z.boolean().optional(),     // true when the open copy is listened to, not read
    licence: z.string().optional(),    // e.g. "CC BY 2.0" — shown as a chip
    // Content areas — cross-cutting, so a work can sit in more than one.
    areas: z.array(z.enum(['Arts', 'Listening & Composition', 'Technology', 'Place', 'History'])).optional(),
    featured: z.boolean().optional(),  // featured = also listed on the About page
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, projects, publications };
