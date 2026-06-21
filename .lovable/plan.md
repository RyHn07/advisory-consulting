## Direction

Going with the **Modern Boutique** template (Direction A): warm off-white background, deep navy text, teal accent, Playfair Display serif headlines + Inter body. It matches the practical, partner-style tone of ACS and feels closer to High Tide Compliance than the colder Waystone aesthetic. (The other two options — dark corporate gold, and architectural minimal — are saved if you'd rather pivot later.)

## Site Map (separate TanStack routes, each with its own SEO)

```
/                 Home — hero, value prop, approach teaser, services preview, testimonial, CTA
/our-approach     4-step methodology: Assess → Design → Implement → Test & Improve
/services         7 service cards w/ detail: Registration, Compliance Programs, Mock Audits,
                  Marketing Review, Examination Support, Training, Outsourced CCO
/about            Firm overview (bio placeholder noted in your draft — "Enter Hov Bio later")
/careers          Pitch + confidential resume submission form
/contact          Schedule a Consultation form + contact details
```

Shared header (logo + 5 nav links + Contact button) and footer across all routes.

## Design Tokens (src/styles.css)

- Background: warm sand `#F8F5F2`
- Foreground: deep navy `#0F172A`
- Accent: teal `#14B8A6` (hovers, CTAs, highlights)
- Secondary accent: muted gold `#A3865D` (sparingly)
- Surface: white `#FFFFFF` for cards/sections
- Fonts: Playfair Display (headings, italic for emphasis words), Inter (body, nav, buttons)
- All colors registered as oklch semantic tokens

## Page-by-page content (from your draft)

- **Home**: tagline "Practical, regulator-focused compliance consulting…", 3-paragraph intro, condensed approach (4 steps), services grid (6 cards linking to /services), testimonial-style quote block, final CTA → /contact.
- **Our Approach**: full Assess/Design/Implement/Test sections with the "identify and address issues before they become deficiencies" pull-quote.
- **Services**: all 7 services with the longer copy from your doc, each as its own card/section.
- **About**: placeholder section with "Bio coming soon" note so it's easy to drop in later.
- **Careers**: paragraph from draft + form fields (Name, Email, Phone, LinkedIn, Years of experience, Role of interest, Resume upload, Cover note). Marked confidential.
- **Contact**: "Schedule a Consultation" form (Name, Firm, Email, Phone, Firm type, Message) + email/office block.

Forms are presentational at first (front-end only). When you're ready to actually receive submissions, we'll wire them to Lovable Cloud.

## Images

3–4 generated images: hero (warm office interior), about (team/office detail), approach (architectural detail), careers (workspace). All generated and imported as ES6 modules under `src/assets/`.

## Technical notes

- TanStack Start file-based routes under `src/routes/` (`our-approach.tsx`, `services.tsx`, `about.tsx`, `careers.tsx`, `contact.tsx`). Each has its own `head()` with unique title + description + og:title/og:description; og:image only on leaf routes that have a hero image.
- Reusable `<SiteHeader />` and `<SiteFooter />` components in `src/components/`.
- Tailwind v4 tokens in `src/styles.css`; no hardcoded colors in components.
- All shadcn components use semantic tokens.

## Out of scope (for now)

- Backend/form delivery (no Lovable Cloud yet — easy to add later)
- CMS/blog
- Auth / client portal

Ready to build on approval.
