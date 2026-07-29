# Therapy With Ben

A calm, single-page website for individual therapy enquiries — custom-built with [Astro](https://astro.build).

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321`).

## Build for production

```bash
npm run build
npm run preview
```

Static files are output to `dist/`.

## GitHub Pages

The site deploys automatically from `main` via GitHub Actions (`.github/workflows/deploy.yml`).

1. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Point your domain DNS at GitHub Pages (for apex `therapywithben.uk`):
   - **A** records to GitHub’s IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a **CNAME** for `www` to `benmidwinter.github.io`
3. In **Settings → Pages**, set Custom domain to `therapywithben.uk` and enable HTTPS once DNS has propagated

`public/CNAME` already contains `therapywithben.uk`.

## Contact form

The contact form posts to [FormSubmit](https://formsubmit.co/) at `hello@therapywithben.uk`.

On first use, FormSubmit emails that address with a confirmation link — click it once to activate delivery.

To switch providers later (e.g. Formspree), change the `formAction` in `src/components/Contact.astro`.

## Content & structure

One homepage with:

1. Hero — brand and trauma-aware invitation  
2. How I can help — who this is for, and what integrative psychotherapy looks like here  
3. About Ben — background, HCPC & NCIP  
4. Contact — form, email, location  
5. Footer — That Music Therapy Lot (trading name), HCPC, NCIP, ICO  

Policy pages (footer links only):

- `/privacy-policy` — GDPR / data protection notice (ICO ZB610818)  
- `/therapeutic-agreement` — therapeutic contract  
- `/payment-policy` — fees & cancellations (48-hour notice)  
- `/safeguarding-and-complaints` — safeguarding, DBS, HCPC & NCIP complaints  

## SEO notes

After deploy, submit `https://therapywithben.uk/sitemap-index.xml` in [Google Search Console](https://search.google.com/search-console) and Bing Webmaster Tools. A reciprocal link from [That Music Therapy Lot](https://thatmusictherapylot.uk/) also helps discovery.
