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

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),                  // used to order and to group the list
    yearLabel: z.string().optional(),  // override, e.g. "In progress" or "2019–2021"
    // What kind of output this is.
    domain: z.enum(['Research', 'Creative', 'Strategy & Delivery', 'Writing & Essays', 'Voices']),
    type: z.enum([
      'Monograph', 'Book', 'Journal Papers', 'Book Chapters', 'Essay',
      'Working Paper', 'PhD thesis',
      'Commissioned Research Contracts', 'Commissioned Strategy & Advisory', 'Fellowships',
      'Conferences', 'Keynotes & Invited Talks', 'Interviews', 'Dataset',
      'Creative Research', 'Voices',
      'Creative Project', 'Exhibitions', 'Strategy Project', 'Research Project',
    ]),
    ntro: z.boolean().optional(),      // counted as a non-traditional research output
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    award: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    venue: z.string(),                 // journal, publisher, or outlet
    authors: z.string().optional(),    // omit when sole-authored
    href: z.string().optional(),       // publisher / landing page
    doi: z.string().optional(),        // bare DOI, e.g. 10.1177/00420980211014026
    citations: z.number().optional(),  // shown as "n citations" where known
    note: z.string().optional(),       // one line of context under the details
    openAccess: z.string().optional(), // free-to-read copy: repository URL, Zenodo DOI link, or local PDF
    isbn: z.string().optional(),       // for chapters and books — from ORCID
    audio: z.boolean().optional(),     // true when the open copy is listened to, not read
    highlight: z.boolean().optional(), // show on the client-facing /strategy page
    licence: z.string().optional(),    // e.g. "CC BY 2.0" — shown as a chip
    // Content areas — cross-cutting, so a work can sit in more than one.
    areas: z.array(z.enum(['Arts', 'Listening & Composition', 'Technology', 'Place', 'History', 'Heritage'])).optional(),
    featured: z.boolean().optional(),  // featured = also listed on the About page
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, work };
