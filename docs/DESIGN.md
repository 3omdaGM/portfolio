# Scope: preserve the original blue portfolio

The user's correction is authoritative: update the data and add animations/3D shapes without changing the portfolio's color identity or replacing its layout.

`style.css` is restored byte-for-byte from the original repository. This preserves the navy background, cyan (#00d4ff) and blue (#0066ff) accents, gradient buttons, Poppins/Inter typography, Bootstrap grid, profile card, timelines, skill cards, and contact layout. The earlier ivory/green design is removed.

Additive styling lives in `assets/css/enhancements.css`. New geometry includes a rotating six-face wireframe cube, orbital rings, a blue glass sphere, floating C#/.NET/SQL labels, and pointer-driven depth on the existing portrait card. Motion has an explicit pause control, device reduced-motion support, and offscreen/tab visibility handling.

Content comes from the supplied CV: all three projects with exact URLs and contribution details; .NET membership and NTI training with dates; education; Forward Program; all six skill categories; languages; corrected email/location/phone. Skill percentages and unsupported training-hour claims are removed. The service-card layout is retained as a CV-backed Focus section. Empty testimonial placeholders are removed.

The contact form is removed as requested until a real submission system exists. The contact section is centered and retains direct email, telephone, and social links. The full CV download stays disabled pending approval to publish the PDF.

The architecture separates content, the retained HTML template, the original stylesheet, additive effects, and interaction modules. No frontend framework migration is introduced.
