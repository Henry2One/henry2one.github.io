/* ================== Show Menu ================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* ================== Remove Menu Mobile ================== */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ================== Add Blur to Header ================== */
const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/* ================== Show Scroll Up ================== */
const scrollUp = () => {
    const scrollUpEl = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUpEl.classList.add('show-scroll')
                          : scrollUpEl.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/* ================== Scroll Sections Active Link ================== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.forEach(link => link.classList.add('active-link'));
        } else {
            sectionsClass.forEach(link => link.classList.remove('active-link'));
        }
    });
};
window.addEventListener('scroll', scrollActive);

/* ================== Dynamic Render: Stack Cards ================== */
function renderStackCards() {
    const container = document.getElementById('stack-cards-container');
    if (!container || typeof STACK_CARDS === 'undefined') return;

    container.innerHTML = STACK_CARDS.map(card => `
        <article class="home__card" onclick="window.location.href='${card.url}'">
            <img src="${card.image}" alt="${card.alt}" class="home__card-img" loading="lazy">
            <h3 class="home__card-title">${card.title}</h3>
            <div class="home__card-shadow"></div>
        </article>
    `).join('');
}

/* ================== Dynamic Render: Projects & Filters ================== */
function renderProjects(filterCategory = 'all') {
    const container = document.getElementById('projects-container');
    if (!container || typeof PROJECTS_DATA === 'undefined') return;

    const filtered = filterCategory === 'all'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(project => project.category === filterCategory);

    container.innerHTML = filtered.map(project => {
        const badgesHtml = project.stack
            .map(tech => `<span class="project__tag">${tech}</span>`)
            .join('');

        const demoLinkHtml = project.demoUrl
            ? `<a href="${project.demoUrl}" ${project.demoUrl.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="project__link project__link--demo">
                   <i class="ri-external-link-line"></i> <span>Live / Demo</span>
               </a>`
            : '';

        return `
            <article class="popular__card project__card">
                <div class="popular__image">
                    <span class="project__category-pill">${project.categoryLabel}</span>
                    <img src="${project.image}" alt="${project.title}" class="popular__img" loading="lazy">
                    <div class="popular__shadow"></div>
                </div>

                <div class="project__body">
                    <h2 class="popular__title">${project.title}</h2>
                    <p class="project__description">${project.description}</p>

                    <div class="project__tags">
                        ${badgesHtml}
                    </div>

                    <div class="project__links">
                        <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project__link">
                            <i class="ri-github-fill"></i> <span>Code</span>
                        </a>
                        ${demoLinkHtml}
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active-filter'));
            btn.classList.add('active-filter');
            const selected = btn.getAttribute('data-filter');
            renderProjects(selected);
        });
    });
}

/* ================== Initialize DOM & ScrollReveal ================== */
document.addEventListener('DOMContentLoaded', () => {
    renderStackCards();
    renderProjects('all');
    initProjectFilters();

    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2200,
            delay: 200
        });

        sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`);
        sr.reveal(`.home__card`, { delay: 400, distance: '80px', interval: 100 });
        sr.reveal(`.about__data, .join__image`, { origin: 'right' });
        sr.reveal(`.about__image, .join__data`, { origin: 'left' });
        sr.reveal(`.popular__card`, { interval: 150 });
    }
});
