# Design and implementation notes

## Direction

An editorial developer portfolio: ivory paper-like surfaces, forest green, restrained lime, large sans-serif headlines with serif accents, numbered sections, and a balanced split hero. The layered CSS architecture illustration connects the interaction to Mohamed's backend/full-stack work.

The page sequence is introduction → projects → biography and education → experience and development → complete skill set → contact. Project contributions use native expandable disclosures so readers can choose their level of detail.

## References researched

- https://brittanychiang.com/ — readable experience/project hierarchy, clear contribution descriptions, accessible navigation.
- https://bruno-simon.com/ — a memorable interactive introduction that communicates a developer's interests through the experience itself.
- https://www.taniarascia.com/ — direct, content-led developer presentation.

These informed principles, not copied layouts, text, or assets. A game engine would shift attention away from the backend work and introduce substantial loading/runtime costs. The portfolio instead uses lightweight CSS 3D transforms and native browser APIs.

## CV alignment

The supplied MyCV.pdf is the content authority. Corrected the old email and location. Included all three projects, exact project URLs, both experience records and their dates, all six skill categories, Forward Program, degree and expected graduation, language proficiency, phone, GitHub, and LinkedIn. Removed unsupported skill percentages, unrelated service claims, and the old simulated contact form. Preserved the existing portrait.

The portfolio project's original technologies are retained as historical CV content. A disclosure explains that this redesigned edition uses plain JavaScript and custom CSS.

## Trade-offs

- Static generation keeps searchable, accessible HTML and avoids loading data through client-side fetch.
- Native ES modules isolate interaction responsibilities without a dependency/build toolchain.
- The generation script owns page markup, while the content module owns repeatable resume records. A component framework can be introduced if the site grows beyond this scope.
- System fonts avoid font-loading delays and third-party requests, with some platform-specific appearance differences.
- Conceptual code-native project artwork avoids false screenshots and broken external placeholder images.
- CSS breakpoints cover mobile, tablet, and desktop; actual visual QA remains necessary before release.

## Changes from the original

Replaced monolithic CSS/JavaScript and Bootstrap/Font Awesome CDNs with focused local modules. Removed the broken PDF target; the optional CV download remains disabled pending explicit approval to publish the complete PDF. Added metadata, favicon, skip navigation, guarded storage, no-JavaScript navigation fallback, reduced-motion handling, and honest email contact actions.
