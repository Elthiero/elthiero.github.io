# Thierry Donambi — Personal Portfolio

Personal portfolio site for **Ahourdet Donambi Thierry**, Data Engineer based in Kigali, Rwanda.

🔗 **Live site:** https://elthiero.github.io/

---

## Overview

A four-page static site built with plain HTML, CSS, and a small amount of vanilla JavaScript. No build tools, no frameworks, no dependencies to install — open a page and go.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — hero, short intro, two featured pipelines |
| `projects.html` | Full project list: pipelines, applied systems, smaller experiments |
| `about.html` | Bio, stack, work history, education |
| `contact.html` | Contact links and CV |

## Structure

```text
.
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/style.css
├── js/script.js           # terminal boot-log animation on the home page
└── assets/documents/CV.pdf
```

## Customization

- **Content**: each page is plain HTML — edit the relevant section directly.
- **Nav/footer**: repeated across all four files (no build step, so no shared partial); update all four when changing site-wide links.
- **Colors, type, spacing**: `css/style.css`, using CSS custom properties defined at the top of the file.
- **CV**: replace `assets/documents/CV.pdf`, referenced from the home page and contact page.

## Local preview

```bash
python -m http.server 8080
# then open http://localhost:8080
```

## Deployment

Served directly via GitHub Pages from `main`.

## License

MIT — see [LICENSE](LICENSE).

---

<p align="center">
  Thierry Donambi · Kigali, Rwanda
  <br>
  <a href="https://github.com/Elthiero">GitHub</a> ·
  <a href="https://www.linkedin.com/in/thierry-donambi/">LinkedIn</a> ·
  <a href="https://www.credly.com/users/thierry-donambi">Credly</a>
</p>
