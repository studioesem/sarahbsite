# Retiring sarahbarns.me

The old site is Squarespace. Its sitemap lists **92 URLs**, all mapped in
`sarahbarns-me-redirects.csv` alongside this file.

## Do this before you retire anything

**32 of those 92 URLs are dated pieces that exist only on the .me site.** Essays, keynote
write-ups and project notes from 2016 to 2021: *What might Jane Jacobs say about smart cities*,
*Sounds different: listening to the city*, *Mine your data*, *From URL to IRL*, *The end of the
city? No, not quite*, the Rutherford reflections, the Glasgow and Barangaroo talks.

If the Squarespace subscription lapses, that writing goes with it. Redirects will send visitors
somewhere sensible, but the pieces themselves stop existing. Squarespace can export to a WordPress
XML file (Settings → Import & Export → Export), which converts cleanly to markdown and could go
into `src/content/blog/` here. Then the redirects point at the real essays instead of a generic
index. **Export first, retire second.**

## Where the 92 URLs go

| Count | Destination |
|-------|-------------|
| 60 | `/writing` — all `/writing/*`, `/blog`, category and tag archives |
| 17 | `/research` — `/publicspeaking/*`, `/presentations`, `/dataforcities`, `/mapping-liveability`, `/urban-digital-strategy` |
| 6 | `/highlights` — `/projects-news/*`, `/work-1`, `/work-categories` |
| 4 | `/about` — `/about-me`, `/more-about-me`, `/contact`, `/contact-me` |
| 2 | `/strategy` — `/strategy`, `/strategy-reports` |
| 2 | `/` — `/home`, `/new-cover-page` |
| 1 | `/creative` |

## How to actually do it

### The durable way: Cloudflare (recommended)

Squarespace URL Mappings die the moment the subscription does, which defeats the point of
retiring the site. Move the redirects to Cloudflare instead, where sarahbarns.com already lives.

1. Add `sarahbarns.me` as a site in the same Cloudflare account. Cloudflare will give you two
   nameservers; set them at the domain registrar. This takes the domain away from Squarespace,
   so do the content export first.
2. Cloudflare dashboard → the `sarahbarns.me` zone → **Rules → Redirect Rules → Bulk Redirects**.
3. Create a list, upload `sarahbarns-me-redirects.csv`, and attach it to a Bulk Redirect Rule.
4. Add a catch-all so nothing 404s: a single Redirect Rule matching `http.host eq "sarahbarns.me"`
   → `https://sarahbarns.com/`, 301, so any URL not in the list still lands somewhere.

Free on any plan, and it outlives Squarespace.

### The interim way: Squarespace URL Mappings

Only while the subscription is still running. Settings → Website → Advanced → URL Mappings, one
rule per line:

```
/about-me -> https://sarahbarns.com/about 301
/writing/[name] -> https://sarahbarns.com/writing 301
```

Squarespace supports `[name]` as a wildcard segment, which collapses the 60 writing URLs into a
handful of rules. Fine as a stopgap, useless once you stop paying.

## Afterwards

- Email RMIT and the Centre for Urban Research to update the profile link from .me to .com.
  A 301 passes ranking, but a direct link is better and the redirect may not outlive the domain.
- Google Search Console: use the Change of Address tool if .me is verified there.
- Check other places the old domain is linked: ORCID, ResearchGate, LinkedIn, conference bios,
  Substack, the Studio ESEM and STORYBOX sites.
