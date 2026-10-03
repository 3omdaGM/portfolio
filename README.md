# Mohamed El-Taher — Blue Portfolio

The original dark navy, cyan/blue gradients, fonts, Bootstrap layout, profile card, and section styling are retained. The update refreshes the CV content and adds CSS 3D cubes, orbital rings, a glass sphere, floating technology labels, pointer-responsive profile depth, scroll reveals, and project interactions.

## Preview

Run from this folder:

```bash
py -m http.server 8000
```

Open http://localhost:8000. On Linux/macOS use `python3 -m http.server 8000`. VS Code Live Server also works. ES modules need HTTP serving rather than double-clicking the HTML file. The original Bootstrap, Font Awesome, and Google Fonts CDN resources require internet access.

## Edit and build

Use Node.js 20+; no npm installation is needed for the generator/checks.

```bash
npm run build
npm run check
```

- `content/profile.mjs`: CV-backed projects, skills, experience, and summary.
- `templates/index.html`: original layout with content placeholders.
- `scripts/build.mjs`: generates the committed `index.html`.
- `style.css`: original stylesheet, unchanged.
- `assets/css/enhancements.css`: additive 3D/motion and accessibility rules.
- `script.js`: loads focused interaction modules in `assets/js/features/`.

Commit generated `index.html` whenever source content or templates change. GitHub Pages can continue serving the publishing branch's root folder; no new hosting or build workflow is needed.

## Behavior

Dark mode is still the default, with the original light/blue mode available. Motion can be paused and honors device reduced-motion preferences. Decorative geometry does not intercept clicks. The mobile menu, filters, native contribution disclosures, and theme toggle remain available. Main content is visible without JavaScript.

The contact form is removed until a real submission system is implemented. Visitors can use direct email, telephone, and social links.

The complete CV PDF is not published pending explicit approval. `profile.cvUrl` remains null and no broken download button is rendered.

## Validation

Static checks cover local assets, internal links, duplicate IDs, safe new-tab links, JavaScript syntax, and module imports. Original CSS preservation and HTML tag nesting were also checked. Browser rendering and interaction QA were unavailable in the authoring environment. Before merging, check mobile/desktop layouts, both themes, all project filters, pointer tilt, motion pause, reduced motion, direct contact links, and keyboard navigation. Remote project links were copied from the CV; local checks do not establish their availability.
