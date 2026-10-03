# Mohamed El-Taher · Developer Portfolio

A responsive, CV-backed portfolio for GitHub Pages. Warm ivory and forest-green visual design, interactive CSS 3D layers, project filtering, light/dark themes, expandable project contributions, and motion preferences.

## Run locally

The committed `index.html` is ready to serve. No npm installation is needed.

```bash
python -m http.server 8000
```

Open http://localhost:8000. On Windows, use `py -m http.server 8000` if `python` is not available. VS Code Live Server also works. Use a server rather than double-clicking the HTML file, because the interactions use JavaScript modules.

## Edit content

Requires Node.js 20 or later for generation/checks only:

```bash
# Edit content/profile.mjs, then:
npm run build
npm run check
```

Commit the regenerated `index.html` alongside the content changes. To change the page structure, edit `scripts/build.mjs`; do not hand-edit the generated HTML.

## Structure

| Path | Responsibility |
| --- | --- |
| `content/profile.mjs` | CV-backed profile, projects, experience, skills, and URLs |
| `scripts/build.mjs` | Escaped static HTML generation and section templates |
| `assets/css/tokens.css` | Shared colors, type, and theme tokens |
| `assets/css/styles.css` | Layout, components, responsive breakpoints, print styles |
| `assets/css/motion.css` | Animation and reduced-motion overrides |
| `assets/js/features/` | Independent navigation, preferences, projects, motion, and contact modules |
| `assets/js/main.js` | Interaction composition |
| `assets/js/theme-init.js` | Early theme selection with storage fallback |
| `profile.cvUrl` | Optional CV download URL; currently disabled pending approval to publish the complete PDF |
| `images/profile.jpg` | Portrait retained from the original repository |
| `scripts/check.mjs` | Asset, link, module, and syntax checks |
| `docs/DESIGN.md` | Design direction, references, and engineering decisions |

The architecture separates content, presentation, and behavior. There is no backend, dependency injection container, or framework runtime: those layers would add complexity without solving a requirement for this static portfolio.

## GitHub Pages

Keep GitHub Pages configured to deploy from the repository's existing publishing branch, **root folder**. The generated `index.html` and relative asset links work at `https://3omdaGM.github.io/portfolio/`. No build workflow is required because the generated page is committed.

For a safe update, copy these files into a clone of the existing repository on a new branch, review the diff, and commit. Remove the obsolete root-level `style.css`, `script.js`, and `Mohamed_ElTaher_CV.docx` if copying over the previous version; they were replaced by organized assets and CV-backed page content.

## CV download

The full CV PDF is omitted from this public branch pending explicit publication approval. `profile.cvUrl` is `null`, so the site displays GitHub/contact links instead of a missing download. After approval, add the PDF and set this URL to its relative path, then rebuild.

## Accessibility and behavior

- Content and project links are present in the HTML; they remain readable with JavaScript disabled.
- Native buttons, details disclosures, focus indicators, a skip link, and live status messages support keyboard access.
- The mobile menu closes on navigation, Escape, outside clicks, or focus leaving the header.
- Theme/motion preferences persist when storage is available; storage denial does not block interactions.
- Device reduced-motion settings take precedence over decorative animation. Floating animation also pauses offscreen and in hidden tabs.
- Contact links open an email or phone application. No form pretends to send messages.
- No external runtime scripts, fonts, trackers, or image services are required.

## Verification

Automated static checks passed in the authoring environment. Browser-based rendering and interaction QA were not available there. Before merging, verify at 320, 390, 768, and 1440px widths; keyboard navigation; both themes; project filters; each architecture layer; motion pause and OS reduced motion; and email/phone links.

Project demo and repository URLs were taken from the supplied CV. Their current remote availability is not guaranteed by the local checks. Project artwork is conceptual, not a screenshot or a claim about the linked application's appearance.
