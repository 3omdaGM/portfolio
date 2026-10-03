// CV-backed content. Keep claims, dates and links aligned with the supplied resume.
export const profile = {
  cvUrl: null, // Set only after approving publication of the full CV PDF.
  name: 'Mohamed El-Taher', email: 'mo3mmad200617@gmail.com', phone: '+20 120 247 4017', location: 'Cairo, Egypt',
  github: 'https://github.com/3omdaGM', linkedin: 'https://linkedin.com/in/mohamed-eltaher-dev/',
  summary: 'Computer Science student and aspiring Product Engineer focused on developing high-impact web applications. Experienced in building RESTful APIs and database-driven systems with PHP/Laravel and C#/.NET; proficient in front-end development with HTML, CSS, and TypeScript. Applied software engineering principles (Clean Architecture, CQRS, SOLID) in team projects, contributing to software architecture decisions, development workflow improvements, and comprehensive team documentation.',
};
export const projects = [
  { id: 'veloura', name: 'Veloura', category: 'backend', role: 'Backend Developer', subtitle: 'The engineering behind the storefront.', description: 'Authentication, account features, discounts, and product image handling for an e-commerce backend.', tags: ['C#', 'ASP.NET Core', 'EF Core', 'JWT', 'MediatR', 'Cloudinary'], links: [['GitHub', 'https://github.com/rehamhamdi/Veloura'], ['Live demo', 'https://veloura-skin-two.vercel.app/'], ['Swagger', 'https://veloura.runasp.net/swagger/index.html']], details: [
    'Developed registration, login, and account features using C#, ASP.NET Core, Entity Framework Core, and JWT authentication for secure RESTful APIs.',
    'Implemented discount management and product image handling with Cloudinary, connecting backend APIs to database persistence and image storage.',
    'Contributed to the Clean Architecture and CQRS/MediatR backend, collaborating through Git/GitHub on features and debugging to improve system maintainability.'
  ] },
  { id: 'university', name: 'University Website', category: 'fullstack', role: 'Full Stack Developer', subtitle: 'From responsive pages to persistent data.', description: 'A multi-page university website connecting responsive interfaces with PHP and MySQL.', tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'MVC'], links: [['GitHub', 'https://github.com/3omdaGM/university-website']], details: [
    'Built a responsive multi-page website with PHP, HTML5, CSS3, Bootstrap, and JavaScript using reusable PHP components, MVC, and OOP concepts.',
    'Managed MySQL databases via phpMyAdmin and implemented server-side validation and secure backend development practices.',
    'Enhanced product design with scroll animations, animated statistics counters, responsive navigation, and glassmorphism styling.'
  ] },
  { id: 'portfolio', name: 'Developer Portfolio', category: 'frontend', role: 'Frontend Developer', subtitle: 'A personal space, built for the web.', description: 'A responsive portfolio presenting projects, technical knowledge, and the journey behind the work.', tags: ['HTML5', 'CSS3', 'TypeScript', 'Bootstrap'], links: [['GitHub', 'https://github.com/3omdaGM/portfolio'], ['Live demo', 'https://3omdaGM.github.io/portfolio']], details: [
    'Created a responsive portfolio with HTML5, CSS3, TypeScript, and Bootstrap; added dark/light themes, project filtering, and UI enhancements to showcase technical knowledge.',
    'The portfolio retains its original Bootstrap-based blue design, with modular JavaScript enhancements for animation and interaction.'
  ] }
];
export const experience = [
  { date: 'Aug 2026 — Sep 2026', title: '.NET Member', organization: 'Zag Eng Family', details: [
    'Built RESTful API endpoints using C#, ASP.NET Core, and ASP.NET Web API with Entity Framework Core; implemented JWT authentication and authorization for secure access.',
    'Applied Clean Architecture, CQRS/MediatR, Repository Pattern, Dependency Injection, and SOLID software engineering principles in team development to improve code organization.',
    'Collaborated via Git/GitHub on feature development, database integration, and API testing; contributed to project documentation and team workflow improvements.'
  ] },
  { date: 'Jan 2026 — Mar 2026', title: 'Full Stack Trainee', organization: 'National Telecommunication Institute (NTI) · Zagazig, Egypt', details: [
    'Completed full stack training in HTML5, CSS3, Bootstrap, PHP, MySQL, phpMyAdmin, and the Laravel web application framework.',
    'Built the University Website during training, applying MVC and OOP patterns and implementing server-side validation for secure, maintainable features.',
    'Developed responsive layouts and practiced database handling, code reviews, and debugging in collaborative training exercises.'
  ] }
];
export const skills = [
  ['01', 'Languages', ['C#', 'C++', 'PHP', 'SQL', 'TypeScript']],
  ['02', 'Frameworks', ['ASP.NET Core', 'ASP.NET Web API', 'Laravel']],
  ['03', 'Data & persistence', ['SQL Server', 'MySQL', 'Entity Framework Core', 'ADO.NET', 'Database Design']],
  ['04', 'Architecture & concepts', ['OOP', 'Data Structures', 'Algorithms', 'Clean Architecture', 'CQRS', 'SOLID', 'JWT']],
  ['05', 'Frontend', ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Web Design']],
  ['06', 'Tools', ['Git', 'GitHub', 'Swagger', 'Cloudinary']]
];
