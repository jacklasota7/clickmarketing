# Click Marketing — Website

Marketing and web design agency site for Click, targeting Pittsburgh small businesses.
Single page layout built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies.

---

## Project Structure

```
/
├── index.html       # All page content — single-page layout with anchor-linked sections
├── style.css        # All styles — design tokens, layout, components, responsive breakpoints
├── script.js        # Interactive behavior — rotating hero text, service tabs, mobile nav
├── robots.txt       # Crawler permissions — SEO and GEO (AI crawler) access rules
├── sitemap.xml      # Single-URL sitemap pointing to site root
└── settings.json    # VS Code Live Server config (dev only — port 5501)
```

---

## Page Sections

The site is a single scrollable page with six anchor-linked sections:

| Section | ID | Description |
|---|---|---|
| Hero | `#hero` | Headline with rotating accent word, CTA buttons |
| About | `#about` | Founder bio, mission statement, differentiator cards |
| Services | `#services` | Tabbed service panels with pricing |
| Process | `#process` | Numbered 6-step service process |
| Work | `#work` | Portfolio cards (will grow with more websites built) |
| FAQ | `#faq` | `<details>`/`<summary>` answering FAQ for better SEO + GEO |
| Contact | `#contact` | Split layout: contact info + Formspree form |

---

## JavaScript Features (`script.js`)

**Rotating hero word** — cycles through a comma-separated word list stored in a `data-words` attribute on `#rotating-word`. Words fade out, swap, then fade back in. Timing is controlled by two constants: the `setInterval` delay (how long each word shows) and the `setTimeout` delay (matching the CSS fade transition duration).

**Service tabs** — clicking a `.tab` button activates the matching `.panel[data-service]` and deactivates all others. State is tracked via `is-active` class and `aria-selected` attribute.

**Mobile nav** — the `.nav__hamburger` button toggles `is-open` on the `.nav` element and updates `aria-expanded`. Clicking any `.nav__menu-link` closes the menu automatically.

---

## SEO & GEO

The site is built to be found by both traditional search engines and AI tools (ChatGPT, Claude, Perplexity, Gemini).

- **`<title>` and `<meta name="description">`** — primary on-page SEO signals
- **Open Graph tags** — controls link previews on social and messaging apps
- **LocalBusiness JSON-LD** — structured data in `<head>` that tells search engines and AI exactly what the business does, where it's located, who runs it, and what packages are offered
- **`robots.txt`** — explicitly allows major AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) in addition to the wildcard `Allow: /`
- **`sitemap.xml`** — single entry pointing crawlers to the root URL; `robots.txt` references it

---

## To-Do Before Launch

These are currently set to placeholder values because I haven't set-up business contacts/domain:

- `index.html` line 26 — `"url"` in JSON-LD (`https://clickmarketing.example`)
- `index.html` line 27 — `"email"` in JSON-LD (`abc123@gmail.com`)
- `index.html` line 482 — contact section email (`abc123@gmail.com`)
- `index.html` line 487 — Formspree form action (`MY_FORM_ID`)
- `robots.txt` line 19 — sitemap URL (`https://clickmarketing.example/sitemap.xml`)
- `sitemap.xml` line 5 — `<loc>` URL

---

## Adding Portfolio Cards

The Work section will be expanded. Currently has one card as a placeholder until I get more business. Commented marking where to add more websites:
---
