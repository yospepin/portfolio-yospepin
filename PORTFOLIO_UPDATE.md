# Portfolio refresh

This source update retains Astro, React dependencies, and the existing Netlify adapter. It has not been pushed to GitHub or deployed to the existing Netlify site.

## Run locally

Use Node 22 or newer. Run `npm ci`, then `npm run dev`. Run `npm run build` to generate the Netlify build.

## Apply to the existing site

Copy the contents of this archive into your existing repository checkout (it excludes Git history, dependencies, and build outputs). Review the changes, commit, and push to the branch connected to Netlify. If automatic deployments are enabled, Netlify will build the update. Do not use this source archive as a Netlify drag-and-drop build output.

## Adding another paper

1. Put the PDF in `public/papers/` with a descriptive filename.
2. Add an object to the array in `src/data/papers.json`, following the first entry's fields. Use a unique `slug` and a PDF path beginning `/papers/`.
3. The homepage list and `/writing/<slug>/` page are generated automatically.
4. Run `npm run build` before publishing.

## Included changes

- Responsive editorial layout with the existing warm/burgundy palette.
- Clearer homepage positioning, four project previews, updated graduate biography.
- Corrected navigation anchors and LinkedIn/GitHub links.
- Research & Writing section and dedicated paper pages.
- Original, unchanged Theologizing Terrorism PDF, labeled as a course paper.
- Project findings render as lists, and external projects have explicit links instead of automatic iframe loads.
- Keyboard focus styles, skip link, reduced-motion support, and responsive image sizes.

## Scope and verification

Production build passed. Desktop browser review covered the homepage, writing section, and paper page. Generated project/paper routes and PDF bytes were checked. Mobile breakpoints are implemented but were not tested on a physical mobile device. Project findings have not been independently validated. In this revision, unverified transit and Minnesota findings were removed from the public copy pending review of the underlying results; original content remains in Git history. Transit output wording now distinguishes inferred potential substitution from observed rider behavior. Minnesota limitations distinguish area-level patterns from individual racial income differences. No resume was added; attach the intended current resume in a later update.

## Personality revision

Restored the original logo, burgundy contour artwork, rounded details, and photograph. Replaced slogan-led copy with a personal introduction and biographical context. Transit now leads the project selection; Minnesota receives a smaller supporting placement. Database and archival exhibits have not been fabricated: their source materials are needed before adding them.
