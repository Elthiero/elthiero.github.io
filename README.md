# Thierry Donambi — Personal Portfolio

> Personal portfolio website for **Ahourdet Donambi Thierry** — AWS Certified Data Engineer & ML Researcher based in Kigali, Rwanda.

🔗 **Live Site:** `https://yourportfolio.com` *(update with your deployed URL)*

---

## 📋 Table of Contents

- [Thierry Donambi — Personal Portfolio](#thierry-donambi--personal-portfolio)
  - [📋 Table of Contents](#-table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
  - [Customization](#customization)
  - [Deployment](#deployment)
  - [License](#license)

---

## Overview

A single-page portfolio built with pure HTML, Tailwind CSS (CDN), and vanilla JavaScript. No build tools, no frameworks, no dependencies to install — just open and go. Designed to showcase technical skills, engineering projects, academic background, and professional credentials to potential employers and research collaborators.

---

## Features

- ⚡ **Zero build step** — single HTML file, works offline
- 🎨 **Scroll-reveal animations** — sections fade in via `IntersectionObserver`
- 📌 **Sticky glass navbar** — blur effect on scroll with active section highlighting
- 📱 **Fully responsive** — mobile hamburger menu, fluid grid layouts
- 🏷️ **Skill badge system** — interactive chips replacing plain lists
- 🌑 **Dark theme** — custom dot-grid hero, ambient glow effects, cyan + orange accent palette
- ♿ **Accessible** — semantic HTML5 landmarks, `lang` attribute, `title` attributes on icon links

---

## Tech Stack

| Layer     | Technology                                         |
| --------- | -------------------------------------------------- |
| Markup    | HTML5                                              |
| Styling   | Tailwind CSS (CDN) + custom CSS                    |
| Fonts     | Syne, Space Grotesk, JetBrains Mono (Google Fonts) |
| Icons     | Font Awesome 6                                     |
| Scripting | Vanilla JavaScript (ES6+)                          |
| Hosting   | *(see [Deployment](#deployment))*                  |

---

## Project Structure

```text
portfolio/
├── index.html              # Main (and only) page
├── README.md               # This file
└── assets/
    ├── img/
    │   └── favicon.ico     # Browser tab icon
    ├── css/
    │   └── style.css       # CSS styling
    ├── js/
    │   └── main.js         #JS script
    └── documents/
        └── CV.pdf          # Downloadable résumé
```

---

## Getting Started

No installation or build process required.

**Option 1 — Open directly in browser:**

```bash
# Clone the repo
git clone https://github.com/Elthiero/elthiero.github.io.git
cd portfolio

# Open in your default browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

**Option 2 — Serve locally** *(recommended to avoid asset path issues)*:

```bash
# With Python
python -m http.server 3000

# With Node.js
npx serve .
```

Then visit `http://localhost:3000`.

---

## Customization

All content lives inside `index.html`. Key areas to update:

| What            | Where in `index.html`                                              |
| --------------- | ------------------------------------------------------------------ |
| Name & headline | Hero `<section>` — `<h1>` and `<h2>` tags                          |
| Bio paragraph   | Hero `<p>` description block                                       |
| Social links    | Hero social icons + footer links                                   |
| CV file         | `href="./assets/documents/CV.pdf"` (×2)                            |
| Skills          | `#skills` section — add/remove `<span class="skill-badge">` chips  |
| Projects        | `#projects` section — duplicate/edit a project card block          |
| Education       | `#academic` section — edit degree cards                            |
| Contact email   | `href="mailto:..."` in hero and contact section                    |
| Accent colors   | `tailwind.config` block — `cyanAccent`, `awsOrange` values         |
| Fonts           | Google Fonts `<link>` in `<head>` + `tailwind.config` `fontFamily` |

---

## Deployment

The site is a static file and can be deployed anywhere that serves HTML.

**Recommended free options:**

| Platform             | Steps                                                                      |
| -------------------- | -------------------------------------------------------------------------- |
| **GitHub Pages**     | Push to `main`, enable Pages in repo Settings → Pages → Deploy from branch |
| **Netlify**          | Drag & drop the project folder at `netlify.com/drop`                       |
| **Vercel**           | `npx vercel` in the project directory                                      |
| **Cloudflare Pages** | Connect your GitHub repo in the Cloudflare dashboard                       |

> **Tip:** After deploying, update the `<meta name="description">` tag and add an `<link rel="canonical">` tag pointing to your live URL for better SEO.

---

## License

This project is open source and available under the [MIT License](LICENSE).

You're welcome to use this as a template — if you do, a credit link back is appreciated but not required.

---

<p align="center">
  Designed & built by <strong>Ahourdet Donambi Thierry</strong> · Kigali, Rwanda
  <br>
  <a href="https://github.com/Elthiero">GitHub</a> ·
  <a href="https://www.linkedin.com/in/thierry-donambi/">LinkedIn</a> ·
  <a href="https://www.credly.com/users/thierry-donambi">Credly</a>
</p>