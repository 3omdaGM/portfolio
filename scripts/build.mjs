import { writeFile } from 'node:fs/promises';
import { profile, projects, experience, skills } from '../content/profile.mjs';
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external = (label, href, cls = '') => `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
const chips = items => `<ul class="chips">${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
const list = items => `<ul class="detail-list">${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
const art = {
  veloura: `<div class="project-art art-veloura" aria-hidden="true"><span class="art-label">COMMERCE / BACKEND</span><div class="veloura-word">veloura<span>CARE, CONNECTED.</span></div><div class="api-chip"><span class="status-dot"></span> ASP.NET Core <span>→</span> EF Core <span>→</span> SQL</div><span class="art-foot">Authentication · Accounts · Discounts</span></div>`,
  university: `<div class="project-art art-university" aria-hidden="true"><span class="art-label">EDUCATION / FULL STACK</span><div class="building"><i></i><i></i><i></i><i></i><i></i></div><div class="university-word">A place to<br><em>learn & grow.</em></div><span class="art-foot">PHP + MySQL · MVC architecture</span></div>`,
  portfolio: `<div class="project-art art-portfolio" aria-hidden="true"><span class="art-label">PERSONAL / FRONTEND</span><div class="mini-window"><span>me.portfolio <b>↗</b></span><strong>Ideas.<br>Into <em>interfaces.</em></strong><div class="mini-lines"></div></div><span class="art-foot">Responsive by design.</span></div>`
};
const html = `<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Mohamed El-Taher — Computer Science student and aspiring Product Engineer in Cairo. Explore C#/.NET APIs, full-stack projects, and software engineering experience.">
  <meta name="theme-color" content="#f5f4ed">
  <meta property="og:title" content="Mohamed El-Taher | Developer Portfolio">
  <meta property="og:description" content="Thoughtful interfaces. Solid foundations. Explore my backend and full-stack work.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://3omdaGM.github.io/portfolio/">
  <link rel="canonical" href="https://3omdaGM.github.io/portfolio/">
  <title>Mohamed El-Taher | Developer Portfolio</title>
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <script src="assets/js/theme-init.js"></script>
  <link rel="stylesheet" href="assets/css/tokens.css">
  <link rel="stylesheet" href="assets/css/styles.css">
  <link rel="stylesheet" href="assets/css/motion.css">
  <script type="module" src="assets/js/main.js"></script>
  <noscript><style>.filters,.visual-controls,.copy-button,.icon-button,.menu-toggle{display:none!important}@media(max-width:800px){.site-header{height:auto;position:relative;flex-wrap:wrap;padding-block:18px}.site-header nav{display:flex;position:static;flex-direction:row;flex-wrap:wrap;border:0;padding:0;gap:18px;width:100%}.site-header nav a{font-size:12px}}</style></noscript>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<div class="reading-progress" aria-hidden="true"></div>
<header class="site-header">
  <a class="brand" href="#home" aria-label="Mohamed El-Taher home"><span class="brand-mark">m<span>e</span>.</span><span>MOHAMED<br>EL-TAHER</span></a>
  <nav id="navigation" aria-label="Main navigation">
    <a href="#projects">Work <span>03</span></a><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Stack</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a>
  </nav>
  <div class="header-actions"><button class="icon-button" id="theme-toggle" aria-label="Switch to dark theme" title="Switch theme"><span aria-hidden="true">◐</span></button><button class="menu-toggle" aria-controls="navigation" aria-expanded="false">Menu <span aria-hidden="true">☰</span></button></div>
</header>
<main id="main">
<section class="hero wrap" id="home" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot"></span> CAIRO, EGYPT <span class="eyebrow-divider">/</span> DEVELOPER PORTFOLIO</p>
    <p class="hero-intro">Hi, I’m Mohamed El-Taher.</p>
    <h1 id="hero-title">Thoughtful<br>interfaces.<br><span class="serif">Solid foundations.</span></h1>
    <p class="hero-description">Computer Science student & aspiring Product Engineer.<br class="desktop-only"> Building web applications from the API to the interface.</p>
    <div class="hero-actions"><a class="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>${profile.cvUrl ? `<a class="text-link" href="${esc(profile.cvUrl)}" download>Download CV <span aria-hidden="true">↓</span></a>` : external("View GitHub", profile.github, "text-link")}</div>
  </div>
  <div class="hero-visual">
    <div class="visual-topline"><span>THE WAY I BUILD</span><span class="visual-plus" aria-hidden="true">+</span></div>
    <div class="architecture-scene" aria-label="Interactive illustration of interface, application, and data layers">
      <div class="scene-orbit orbit-one" aria-hidden="true"></div><div class="scene-orbit orbit-two" aria-hidden="true"></div>
      <div class="architecture-stack">
        <button class="architecture-layer layer-interface" data-layer="interface" aria-pressed="true"><span class="layer-number">01</span><span class="layer-glyph" aria-hidden="true">&lt; / &gt;</span><strong>Interface</strong><span class="layer-caption">THE EXPERIENCE</span></button>
        <button class="architecture-layer layer-application" data-layer="application" aria-pressed="false"><span class="layer-number">02</span><span class="layer-glyph" aria-hidden="true">{ }</span><strong>Application</strong><span class="layer-caption">THE LOGIC</span></button>
        <button class="architecture-layer layer-data" data-layer="data" aria-pressed="false"><span class="layer-number">03</span><span class="layer-glyph" aria-hidden="true">≡</span><strong>Data</strong><span class="layer-caption">THE FOUNDATION</span></button>
      </div>
      <span class="scene-coordinate coordinate-top" aria-hidden="true">Y +</span><span class="scene-coordinate coordinate-bottom" aria-hidden="true">X +</span>
    </div>
    <div class="visual-caption"><span class="status-dot"></span><p id="layer-description" aria-live="polite">Interface — responsive experiences with HTML, CSS & TypeScript.</p></div>
    <div class="visual-controls"><span>Select a layer to explore</span><button id="motion-toggle" aria-pressed="false">Pause motion <span aria-hidden="true">Ⅱ</span></button></div>
  </div>
  <div class="hero-bottom"><span>BACKEND THINKING. FULL-STACK CURIOSITY.</span><a href="#projects">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
</section>
<div class="stack-strip" aria-label="Core technologies"><div class="wrap"><span>C# / .NET</span><i aria-hidden="true">✳</i><span>ASP.NET Core</span><i aria-hidden="true">✳</i><span>SQL Server</span><i aria-hidden="true">✳</i><span>PHP / Laravel</span><i aria-hidden="true">✳</i><span>TypeScript</span></div></div>
<section class="section wrap" id="projects" aria-labelledby="projects-title">
  <div class="section-heading reveal"><div><p class="eyebrow">01 / SELECTED WORK</p><h2 id="projects-title">Built with <span class="serif">intention.</span></h2></div><p>Real projects. Practical learning.<br>A closer look at my contribution.</p></div>
  <div class="project-toolbar"><div class="filters" role="group" aria-label="Filter projects"><button data-filter="all" aria-pressed="true">All work <span>03</span></button><button data-filter="backend" aria-pressed="false">Backend</button><button data-filter="fullstack" aria-pressed="false">Full stack</button><button data-filter="frontend" aria-pressed="false">Frontend</button></div><p id="project-count" class="sr-only" role="status">Showing 3 projects</p></div>
  <div class="project-grid">${projects.map((p, i) => `<article class="project-card reveal" data-category="${p.category}">${art[p.id]}<div class="project-body"><div class="project-meta"><span>0${i+1} / ${esc(p.role)}</span><span aria-hidden="true">↗</span></div><h3>${esc(p.name)}</h3><p class="project-subtitle">${esc(p.subtitle)}</p><p class="project-description">${esc(p.description)}</p>${chips(p.tags)}<details><summary>My contribution <span aria-hidden="true">+</span></summary>${list(p.details)}</details><div class="project-links">${p.links.map(([label, href]) => external(label, href)).join('')}</div></div></article>`).join('')}</div>
  <p class="project-note">Project artwork is conceptual. Explore the source, live demos, and contributions above.</p>
</section>
<section class="about-section" id="about" aria-labelledby="about-title"><div class="wrap about-grid">
  <div class="about-portrait reveal"><div class="portrait-frame"><img src="images/profile.jpg" alt="Portrait of Mohamed El-Taher" width="851" height="1024" loading="lazy"><span class="portrait-corner" aria-hidden="true">↗</span></div><div class="portrait-caption"><span>MOHAMED EL-TAHER</span><span>CAIRO, EG</span></div></div>
  <div class="about-copy reveal"><p class="eyebrow">02 / BEHIND THE CODE</p><h2 id="about-title">Curious by nature.<br><span class="serif">An engineer in progress.</span></h2><p class="about-lead">I care about how an application works — and how it feels to use.</p><p>${esc(profile.summary)}</p><div class="about-facts"><div><span>EDUCATION</span><strong>Bachelor of Computer Science</strong><p>Zagazig University · 2024–2028 (Expected)</p></div><div><span>LANGUAGES</span><strong>Arabic · Native</strong><p>English · Professional Working Proficiency</p></div></div>${profile.cvUrl ? external("Read my full CV", profile.cvUrl, "text-link") : `<a class="text-link" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>`}</div>
</div></section>
<section class="section wrap experience-section" id="experience" aria-labelledby="experience-title"><div class="section-heading reveal"><div><p class="eyebrow">03 / THE JOURNEY</p><h2 id="experience-title">Learning by <span class="serif">building.</span></h2></div><p>Team projects, hands-on training,<br>and the foundations to keep growing.</p></div><div class="timeline">${experience.map((e,i) => `<article class="experience-row reveal"><div class="experience-date"><span class="timeline-dot" aria-hidden="true"></span>${esc(e.date)}<span class="experience-index">0${i+1}</span></div><div><p class="organization">${esc(e.organization)}</p><h3>${esc(e.title)}</h3>${list(e.details)}</div></article>`).join('')}</div><article class="development reveal"><div class="development-symbol" aria-hidden="true">✳</div><div><p class="eyebrow">PROFESSIONAL DEVELOPMENT / JUN 2026</p><h3>McKinsey.org Forward Program</h3><p>Professional development program focused on structured problem solving, communication, adaptability, teamwork, and digital & AI fundamentals.</p></div></article></section>
<section class="skills-section" id="skills" aria-labelledby="skills-title"><div class="wrap"><div class="section-heading reveal"><div><p class="eyebrow">04 / MY TOOLKIT</p><h2 id="skills-title">Different tools.<br><span class="serif">One thoughtful approach.</span></h2></div><p>From relational data to responsive interfaces.<br>The technologies and concepts I work with.</p></div><div class="skills-grid">${skills.map(([n,title,items]) => `<article class="skill-group reveal"><span class="skill-number">${n}</span><h3>${esc(title)}</h3>${chips(items)}</article>`).join('')}</div></div></section>
<section class="section wrap contact-section" id="contact" aria-labelledby="contact-title"><p class="eyebrow reveal">05 / LET’S CONNECT</p><div class="contact-heading reveal"><h2 id="contact-title">Good things start<br>with <span class="serif">a conversation.</span></h2><a class="contact-arrow" href="mailto:${profile.email}" aria-label="Email Mohamed"><span aria-hidden="true">↗</span></a></div><div class="contact-bottom"><div><a class="email-link" href="mailto:${profile.email}">${profile.email}</a><button class="copy-button" id="copy-email" data-email="${profile.email}" aria-label="Copy email address">Copy email <span aria-hidden="true">⧉</span></button><span id="copy-status" class="copy-status" role="status"></span></div><div class="contact-links">${external('GitHub',profile.github)}${external('LinkedIn',profile.linkedin)}<a href="tel:+201202474017">${profile.phone} <span aria-hidden="true">↗</span></a></div></div></section>
</main>
<footer class="wrap"><span>© <span id="year">2026</span> Mohamed El-Taher</span><span>Thoughtfully built. Always evolving.</span><a href="#home">Back to top ↑</a></footer>
</body></html>`;
await writeFile(new URL('../index.html', import.meta.url), html);
console.log('Built index.html from CV-backed content. No runtime dependencies.');
