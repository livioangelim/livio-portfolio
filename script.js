/**
 * Main JavaScript file for Livio's portfolio website
 * Handles language switching, smooth scrolling, accordion toggles, and project display
 */

// Global variable to store current language
let currentLanguage = 'en';

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const closeModalBtn = document.querySelector('.close-modal');
const langButtons = document.querySelectorAll('.lang-btn');
const htmlElement = document.documentElement;

// Function to set language and update content
function setLanguage(lang) {
    // Update current language
    currentLanguage = lang;

    // Update html lang attribute
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('data-language', lang);

    // Update language buttons state
    langButtons.forEach(btn => {
        if (btn.dataset.language === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Select all elements with data-translate-key
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');

    // Update text for each element
    elementsToTranslate.forEach(element => {
        const key = element.dataset.translateKey;
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML to preserve HTML formatting in translations
            element.innerHTML = translations[lang][key];
        }
    });

    // Reload projects in new language
    generateProjectCards();

    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Function to generate project cards
function generateProjectCards() {
    // Clear existing projects
    projectsGrid.innerHTML = '';

    // Create and append each project card
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.dataset.projectId = project.id;

        projectCard.innerHTML = `
            <img class="project-card-image" src="${project.imageUrl}" alt="${project.titleKey[currentLanguage]}">
            <div class="project-card-content">
                <h3 class="project-card-title">${project.titleKey[currentLanguage]}</h3>
                <div class="project-card-tech">
                    ${project.tech.slice(0, 3).map(tech => `<span>${tech}</span>`).join(' ')}
                    ${project.tech.length > 3 ? '<span>...</span>' : ''}
                </div>
            </div>
        `;

        // Add click event to open modal
        projectCard.addEventListener('click', () => openProjectModal(project));

        // Append to grid
        projectsGrid.appendChild(projectCard);
    });
}

// Function to open project modal
function openProjectModal(project) {
    // Populate modal with project info
    const modalTitle = projectModal.querySelector('.project-title');
    const modalDescription = projectModal.querySelector('.project-description');
    const modalTechStack = projectModal.querySelector('.project-tech-stack');
    const modalMedia = projectModal.querySelector('.project-media');
    const repoLink = projectModal.querySelector('.repo-link');
    const docsLink = projectModal.querySelector('.docs-link');
    const demoLink = projectModal.querySelector('.demo-link');
    const videoLink = projectModal.querySelector('.video-link');

    // Set title and description in current language
    modalTitle.textContent = project.titleKey[currentLanguage];
    modalDescription.textContent = project.descriptionKey[currentLanguage];

    // Clear and populate tech stack
    modalTechStack.innerHTML = '';
    project.tech.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.textContent = tech;
        modalTechStack.appendChild(techSpan);
    });

    // Set media (image or video)
    if (project.videoUrl && project.videoUrl.includes('youtube')) {
        // Extract YouTube video ID
        const videoId = project.videoUrl.split('v=')[1] || project.videoUrl.split('/').pop();
        modalMedia.innerHTML = `
            <iframe width="100%" height="315" 
                src="https://www.youtube.com/embed/${videoId}" 
                title="${project.titleKey[currentLanguage]}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else {
        modalMedia.innerHTML = `<img src="${project.imageUrl}" alt="${project.titleKey[currentLanguage]}">`;
    }

    // Set links
    repoLink.href = project.repoUrl;
    docsLink.href = project.docsUrl;

    // Handle optional links
    if (project.demoUrl) {
        demoLink.href = project.demoUrl;
        demoLink.style.display = 'inline-block';
    } else {
        demoLink.style.display = 'none';
    }

    if (project.videoUrl) {
        videoLink.href = project.videoUrl;
        videoLink.style.display = 'inline-block';
    } else {
        videoLink.style.display = 'none';
    }

    // Show modal
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close modal
function closeProjectModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// ===== EVENT LISTENERS =====

// Language switcher event listeners
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.language;
        setLanguage(lang);
    });
});

// Close modal when clicking X button
closeModalBtn.addEventListener('click', closeProjectModal);

// Close modal when clicking outside content
window.addEventListener('click', event => {
    if (event.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && projectModal.style.display === 'block') {
        closeProjectModal();
    }
});

// Sticky navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Highlight active section in navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.navbar-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Accordion functionality for skills section
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');

        // Close all items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        // If clicked item wasn't active, make it active
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

// ===== INITIALIZATION =====

// Check for saved language preference
document.addEventListener('DOMContentLoaded', () => {
    // Get preferred language from localStorage, or default to 'en'
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';

    // Set the initial language
    setLanguage(savedLanguage);

    // Open first accordion item by default
    const firstAccordionItem = document.querySelector('.accordion-item');
    if (firstAccordionItem) {
        firstAccordionItem.classList.add('active');
    }

    // Generate project cards
    generateProjectCards();
});