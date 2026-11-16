# Henry2One — Cloud Engineer / DevOps & Full-Stack Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Demo-henry2one.github.io-0077B5?style=for-the-badge&logo=githubpages&logoColor=white)](https://henry2one.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-@Henry2One-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Henry2One)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Luis_Enrique_Ruiz-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://mx.linkedin.com/in/luis-enrique-ruiz-s%C3%A1nchez-725325205)

Personal developer portfolio and project showcase built with a lightweight, modular, data-driven static architecture hosted on **GitHub Pages**.

---

## Live Site & Featured Demos

* **Main Portfolio:** [https://henry2one.github.io/](https://henry2one.github.io/)
* **Bruma & Lúpulo (Corporate Craft Brewery UI):** [Live Demo](https://henry2one.github.io/views/cerveceria/index.html)
* **Interactive Particle Lab:** [Live Demo](https://henry2one.github.io/views/AnimateParticle/animate1.html)

---

## Architecture & Project Structure

Instead of hardcoding project cards in HTML, portfolio items and skill highlights are decoupled into a JavaScript data layer (`assets/js/projects-data.js`) and dynamically rendered with category filtering.

```text
henry2one.github.io/
├── index.html                  # Main responsive landing page
├── assets/
│   ├── css/
│   │   └── styles.css          # Custom dark-mode UI, grid layouts & responsive breakpoints
│   ├── img/                    # Optimized visual assets & thumbnails
│   └── js/
│       ├── projects-data.js    # Centralized portfolio data (Stack & Projects)
│       ├── main.js             # Dynamic DOM rendering, category filters & navigation
│       └── scrollreveal.min.js # Scroll animations
└── views/
    ├── AnimateParticle/        # Interactive canvas/particle experiment
    └── cerveceria/             # Multi-page corporate website built with Bootstrap 5
