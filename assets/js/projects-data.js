/* ==========================================================================
   PORTFOLIO DATA CONFIGURATION
   To add a new project or skill card, simply append an object to the arrays
   below. No HTML editing required.
   ========================================================================== */

const STACK_CARDS = [
  {
    title: "Cloud / GCP",
    image: "assets/img/Java-Page.png",
    alt: "Cloud and GCP infrastructure",
    url: "#projects"
  },
  {
    title: "Python & AI",
    image: "assets/img/facial.png",
    alt: "Python and Computer Vision",
    url: "#projects"
  },
  {
    title: "Full-Stack JS",
    image: "assets/img/js-page.png",
    alt: "Node.js and React development",
    url: "#projects"
  },
  {
    title: "PostgreSQL / SQL",
    image: "assets/img/sql-img.png",
    alt: "Database administration and tuning",
    url: "#projects"
  },
  {
    title: "Animate Lab",
    image: "assets/img/animate1.png",
    alt: "Interactive Particle Animation",
    url: "views/AnimateParticle/animate1.html"
  }
];

/* Categories available: "cloud" | "fullstack" | "data-ai" */
const PROJECTS_DATA = [
  {
    title: "Enterprise ERP Cloud Migration & VPN Integration",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    description: "Architected serverless integrations on Google Cloud Platform (GCP) with site-to-site VPN security controls, firewall hardening, and automated operational workflows for a distribution enterprise.",
    image: "assets/img/principal-bg.png",
    stack: ["GCP", "Serverless", "VPN", "Linux", "Cloud Security"],
    repoUrl: "https://github.com/monocilindrero",
    demoUrl: ""
  },
  {
    title: "PostgreSQL 18 Parallel Query Benchmark Suite",
    category: "data-ai",
    categoryLabel: "Data Engineering",
    description: "Performance benchmarking framework analyzing parallel worker scaling, execution plans, and indexing strategies across 500,000+ synthetic transactional records.",
    image: "assets/img/sql-img.png",
    stack: ["PostgreSQL 18", "SQL", "Python", "Query Tuning"],
    repoUrl: "https://github.com/monocilindrero",
    demoUrl: ""
  },
  {
    title: "Chekapp — Campaign & Field Team Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    description: "Mobile-first web application for real-time campaign management and field team tracking, backed by Node.js/Express REST microservices and PostgreSQL.",
    image: "assets/img/fullstack-node.jpg",
    stack: ["React", "Vite", "Node.js", "PostgreSQL", "Vercel"],
    repoUrl: "https://github.com/monocilindrero",
    demoUrl: ""
  },
  {
    title: "Theater Management System with RBAC & Audit Triggers",
    category: "fullstack",
    categoryLabel: "Backend & DB",
    description: "Complete seat reservation and box-office management platform featuring Role-Based Access Control (RBAC) and automated PostgreSQL audit logging triggers.",
    image: "assets/img/js-page.png",
    stack: ["PHP", "PostgreSQL", "Triggers", "RBAC", "HTML/CSS"],
    repoUrl: "https://github.com/monocilindrero",
    demoUrl: ""
  },
  {
    title: "Spotter AI — Real-Time Biomechanical Rep Counter",
    category: "data-ai",
    categoryLabel: "Computer Vision",
    description: "Android computer-vision application leveraging CameraX and MediaPipe pose estimation to track exercise repetitions and deliver real-time biomechanical posture feedback.",
    image: "assets/img/facial.png",
    stack: ["Kotlin", "Android", "CameraX", "MediaPipe"],
    repoUrl: "https://github.com/monocilindrero",
    demoUrl: ""
  },
  {
    title: "3D Gesture-Controlled Particle Galaxy",
    category: "data-ai",
    categoryLabel: "Graphics & Vision",
    description: "Interactive real-time 3D particle simulation rendered with OpenGL and Pygame-ce, controlled via webcam hand-tracking gestures using MediaPipe Hands.",
    image: "assets/img/animate1.png",
    stack: ["Python", "OpenGL", "MediaPipe", "Pygame-ce"],
    repoUrl: "https://github.com/monocilindrero",
    demoUrl: "views/AnimateParticle/animate1.html"
  }
];
