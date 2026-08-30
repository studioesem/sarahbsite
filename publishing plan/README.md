# Publishing plan

Working notes, not site content. Nothing in this folder is published; it sits outside `public/`
and `src/`, so the build ignores it.

| File | What it is |
|---|---|
| `open-access-worklist.md` | The deposit queue. 98 research entries triaged against OpenAlex: what is already free, what is confirmed closed, what has no DOI. Ordered by citations. |
| `retiring-sarahbarns-me.md` | How to retire the Squarespace site without losing the 32 essays that exist only there. |
| `sarahbarns-me-redirects.csv` | All 92 old URLs mapped to their new homes, ready to upload to Cloudflare Bulk Redirects. |

## The decision underneath all of it

**Publish here first, syndicate second.** The canonical version of anything lives on a domain
Sarah controls, with a stable URL and, where it matters, a DOI. Substack, LinkedIn and the rest
are distribution. Substack cannot set a canonical tag, so syndicated copies carry a
"first published at" link back instead.

## Order of work

1. **Export the Squarespace content before touching the .me domain.** Everything else is
   reversible; this is not.
2. **Ask the RMIT liaison librarian to do the rights checks.** Repository staff work out what each
   publisher permits. This is the part that felt like the whole job and mostly is not.
3. **Work down the closed list by citations.** The most-cited paywalled papers are where readers
   are already being turned away.
4. **Zenodo for everything without a publisher** — talks, decks, datasets, commissioned reports,
   creative outputs, and the pre-RMIT years.

Deposit the **accepted manuscript**, not the publisher PDF. The version of record is almost never
permitted.

## Known gaps outside this repo

- Civic Interplay has no real sitemap: `civicinterplay.io/sitemap.xml` returns the HTML app rather
  than XML, so search engines get no crawl map for that site.
- The Data for Policy paper (*Rethinking the AI stack from the ground up*) is on Zenodo and linked
  from sarahbarns.com, but is not linked from Civic Interplay, where it is most on-topic.
