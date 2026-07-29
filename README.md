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

Static files are output to `dist/`, ready to deploy to Netlify, Cloudflare Pages, GitHub Pages, or similar.

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

