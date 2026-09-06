# HSM Hydro Control Pvt. Ltd. — Production Static Website

A modern, responsive, high-performance static website engineered for **HSM Hydro Control Pvt. Ltd.** — an ISO 9001:2015 certified hydraulic engineering company based in Peenya, Bangalore, India.

---

## Technical Overview

- **Architecture:** Pure HTML5, CSS3, Vanilla JavaScript (ES6+), Inline SVG Icons
- **Dependencies:** Zero third-party JS/CSS frameworks (No React, Bootstrap, jQuery, Tailwind, or AOS)
- **Deployment Target:** Hostable on any standard static hosting environment (Nginx, Apache, cPanel, Cloudflare Pages, Netlify, Vercel, GitHub Pages)
- **SEO & Social:** Open Graph, Twitter Cards, Semantic HTML5 hierarchy, JSON-LD Schema structured data, dynamic XML sitemap, robots.txt
- **Accessibility:** WCAG AA conscious contrast, keyboard focus indicators, screen reader skip links, `prefers-reduced-motion` support

---

<!-- ## Directory Structure

```
/
├── index.html                      # Homepage
├── about.html                      # Company Overview & Capabilities
├── services.html                   # Field Services, Repairs & Maintenance
├── faq.html                        # Technical FAQ (Accordion UI)
├── contact.html                    # Contact details, Map placeholder & Form
├── enquiry.html                    # Detailed B2B Requirement Form
├── testimonials.html               # Client Reviews & Feedback
├── terms-of-service.html           # Terms & Commercial Conditions
├── privacy-policy.html             # Data Protection & Cookie Policy
├── 404.html                        # Branded Page Not Found
│
├── products/                       # Dedicated SEO Product Pages
│   ├── hydraulic-components.html   # Accessories, Fittings, Hoses & Gauges
│   ├── hydraulic-test-bench.html   # Test Rigs & High Pressure Benches
│   ├── hydraulic-power-unit.html   # Industrial & Mobile Power Units (HPU)
│   ├── hydraulic-cylinder.html     # ISO Standard & Servo Cylinders
│   ├── lube-oil-filtration.html    # Lubrication & Offline Filtration Rigs
│   ├── hydraulic-manifold-block.html# Custom Machined Valve Blocks
│   ├── hydraulic-pumps.html        # Axial Piston, Vane & Gear Pumps
│   ├── hydraulic-motors.html       # Orbital & Radial Piston Motors
│   └── hydraulic-valves.html       # Directional, Relief & Proportional Valves
│
├── blog/                           # Technical Insights
│   ├── index.html                  # Blog Listing & Search
│   └── hydraulic-system-maintenance-guide.html # Article Template
│
├── assets/
│   ├── css/
│   │   ├── tokens.css              # Central Design Tokens (Colors, Spacing)
│   │   ├── base.css                # Reset, Typography & Base Styles
│   │   ├── components.css          # Buttons, Cards, Accordion, Spec Tables
│   │   ├── layout.css              # Header, Mega-Menu, Footer & Grid
│   │   └── pages/                  # Page-Specific Styling
│   │       ├── home.css
│   │       ├── product.css
│   │       ├── services.css
│   │       ├── blog.css
│   │       └── contact.css
│   ├── js/
│   │   ├── main.js                 # Header Scroll, Mobile Menu, Tabs
│   │   └── form-validation.js      # Client Validation & Integration Block
│   ├── icons/
│   │   └── sprite.svg              # Centralized SVG Icon Sheet
│   └── images/                     # [CLIENT PHOTOS] Drop product photos here
│
├── favicon/
│   ├── favicon.svg                 # SVG Favicon
│   └── site.webmanifest            # PWA Manifest
│
├── robots.txt                      # Crawler Control
├── sitemap.xml                     # XML Sitemap (21 URLs)
└── README.md                       # Developer Documentation
``` -->

---

<!-- ## Design System & Theme Customization

All visual variables are centralized in `assets/css/tokens.css`. Modifying colors, typography, or spacing in `tokens.css` automatically updates the entire website.

### Key Tokens

- `--color-graphite-900`: `#1a1d23` (Primary dark background)
- `--color-accent`: `#0ea5e9` (Electric Blue brand accent)
- `--color-orange`: `#f97316` (Secondary accent badge)
- `--font-sans`: `'Inter', sans-serif` (Primary typography)
- `--font-mono`: `'JetBrains Mono', monospace` (Technical specification tables)

--- -->

<!-- ## Image Replacement Guide

Product pages currently render **CSS/SVG engineering-style placeholders**.

To swap placeholders for real client product photos:
1. Place high-resolution JPEG/PNG/WebP images into `assets/images/products/`
2. Open the desired product HTML page (e.g. `products/hydraulic-test-bench.html`)
3. Replace the `.product-visual-wrap` placeholder block with a standard `<img>` tag:

```html
<div class="product-visual-wrap">
  <img src="../assets/images/products/test-bench-1.jpg" alt="HSM Hydraulic Test Bench" width="800" height="600" loading="eager">
</div>
``` -->

---

## Contact & Enquiry Form Integration

Forms on `contact.html` and `enquiry.html` feature client-side validation built into `assets/js/form-validation.js`.

To connect form submissions to your preferred backend service:
Open `assets/js/form-validation.js` and configure one of the following methods:

1. **Formspree:** Set form `action` attribute in HTML to your endpoint `https://formspree.io/f/YOUR_ID`
2. **EmailJS:** Call `emailjs.sendForm()` inside the submit handler
3. **Custom PHP Backend:** Point form `action` to your server handler URL (e.g. `process-form.php`)

---

## Google Analytics 4 (GA4) Setup

Google Analytics is commented out by default.

To activate GA4 tracking:
1. Open the target HTML pages
2. Locate the commented block inside `<head>`
3. Replace `G-XXXXXXXXXX` with your official GA4 Measurement ID
4. Uncomment the `<script>` tag

---

## Local Development & Testing

Since this is a standard static website, no build step or node_modules installation is required.

To run locally:
- Open `index.html` directly in any web browser, OR
- Serve via any local HTTP server (e.g. `npx serve .` or VS Code Live Server)
"# HSM" 
