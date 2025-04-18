/**
 * Main JavaScript file for Livio's portfolio website
 * Handles language switching, smooth scrolling, accordion toggles, project display, contact form handling,
 * and theme switching
 */

// Global variables
let currentLanguage = 'en';
let currentTheme = 'dark'; // Default theme

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const closeModalBtn = document.querySelector('.close-modal');
const langButtons = document.querySelectorAll('.lang-btn');
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Theme switching function
function toggleTheme() {
    // Switch between dark and light themes
    if (currentTheme === 'dark') {
        currentTheme = 'light';
        htmlElement.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        currentTheme = 'dark';
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Update logo color based on theme
    const logoElement = document.querySelector('.lvo-logo');
    if (logoElement) {
        logoElement.setAttribute('fill', currentTheme === 'dark' ? '#3fe0d0' : '#0e8a7d');
    }

    // Save theme preference to localStorage
    localStorage.setItem('preferredTheme', currentTheme);
}

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

    // Refresh articles if articles.js is loaded
    if (typeof refreshArticles === 'function') {
        refreshArticles();
    }

    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

/**
 * Project filtering functionality
 */

// Function to extract all unique technologies from projects
function getAllTechnologies() {
    const allTechnologies = new Set();

    // Loop through all projects
    projectsData.forEach(project => {
        // Add each technology to the Set (this automatically eliminates duplicates)
        project.tech.forEach(tech => {
            allTechnologies.add(tech);
        });
    });

    // Convert Set to Array and sort alphabetically
    return Array.from(allTechnologies).sort();
}

// Function to create filter buttons
function createFilterButtons() {
    const projectFilters = document.querySelector('.project-filters');

    // Exit if filter container doesn't exist
    if (!projectFilters) return;

    // Get all unique technologies
    const technologies = getAllTechnologies();

    // Create and append filter buttons for each technology
    technologies.forEach(tech => {
        const button = document.createElement('button');
        button.classList.add('filter-btn');
        button.setAttribute('data-filter', tech);
        button.textContent = tech;

        // Add click event listener
        button.addEventListener('click', () => {
            // Toggle active class on this button
            button.classList.toggle('active');

            // Get all active filters
            filterProjects();
        });

        projectFilters.appendChild(button);
    });
}

// Function to filter projects based on active filters
function filterProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const activeFilters = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.getAttribute('data-filter'));

    // If "All" filter is active or no filters are active, show all projects
    const allFilterActive = activeFilters.includes('all');

    projectCards.forEach(card => {
        const projectId = card.getAttribute('data-id');
        const project = projectsData.find(p => p.id === projectId);

        // If "All" filter is active, show all projects
        if (allFilterActive) {
            card.style.display = 'flex';
            return;
        }

        // If no filters are active, hide all projects
        if (activeFilters.length === 0) {
            card.style.display = 'none';
            return;
        }

        // Check if project has any of the active filters
        const hasMatchingTech = project.tech.some(tech => activeFilters.includes(tech));

        if (hasMatchingTech) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to handle the "All" filter button
function handleAllFilterButton() {
    const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');

    if (!allFilterBtn) return;

    allFilterBtn.addEventListener('click', () => {
        // Toggle active class on "All" button like other filter buttons
        allFilterBtn.classList.toggle('active');

        // Apply filtering based on currently active filters
        filterProjects();
    });
}

// Initialize project filtering
function initializeProjectFiltering() {
    createFilterButtons();
    handleAllFilterButton();

    // Make sure the "All" filter is active by default
    const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilterBtn) {
        allFilterBtn.classList.add('active');
    }
}

// Function to generate project cards
function generateProjectCards() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = ''; // Clear existing cards

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.setAttribute('data-id', project.id);

        // Create a brief summary from the description by extracting text from the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = project.descriptionKey[currentLanguage];
        const plainText = tempDiv.textContent || tempDiv.innerText;
        const summaryText = plainText.substring(0, 100) + '...';

        // Create card HTML with lazy loading for image
        projectCard.innerHTML = `
            <img class="project-card-image lazy-load" 
                 src="images/placeholder.jpg" 
                 data-src="${project.imageUrl}" 
                 alt="${project.titleKey[currentLanguage]}" 
                 loading="lazy">
            <div class="project-card-content">
                <h3 class="project-card-title">${project.titleKey[currentLanguage]}</h3>
                <p>${summaryText}</p>
                <div class="project-card-tech">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;

        // Add click event to open modal
        projectCard.addEventListener('click', () => openProjectModal(project));

        // Append to grid
        projectsGrid.appendChild(projectCard);
    });

    // Refresh lazy loading for newly added images
    if (typeof refreshLazyLoading === 'function') {
        refreshLazyLoading();
    }
}

// Function to handle the expandable bio hover animation
function initializeBioExpansion() {
    const heroText = document.querySelector('.hero-text');

    if (!heroText) return;

    let hoverTimer;

    // When mouse enters the hero text area
    heroText.addEventListener('mouseenter', () => {
        // Set a 1 second timer before triggering the expansion
        hoverTimer = setTimeout(() => {
            heroText.classList.add('expanded');
        }, 1000); // 1 second delay
    });

    // When mouse leaves the hero text area
    heroText.addEventListener('mouseleave', () => {
        // Clear the timer if mouse leaves before 1 second
        clearTimeout(hoverTimer);
        // Remove the expanded class
        heroText.classList.remove('expanded');
    });
}

// Call this in your document ready function
document.addEventListener('DOMContentLoaded', function () {

    // Initialize project filtering
    initializeProjectFiltering();

    // Generate project cards
    generateProjectCards();

});

// Function to open project modal
function openProjectModal(project) {
    if (!projectModal) return;

    // Populate modal with project info
    const modalTitle = projectModal.querySelector('.project-title');
    const modalDescription = projectModal.querySelector('.project-description');
    const modalTechStack = projectModal.querySelector('.project-tech-stack');
    const modalMedia = projectModal.querySelector('.project-media');
    const repoLink = projectModal.querySelector('.repo-link');
    const docsLink = projectModal.querySelector('.docs-link');
    const demoLink = projectModal.querySelector('.demo-link');
    const videoLink = projectModal.querySelector('.video-link');

    // Set title in current language
    modalTitle.textContent = project.titleKey[currentLanguage];

    // Use innerHTML for description to properly render HTML tags
    modalDescription.innerHTML = project.descriptionKey[currentLanguage];

    // Clear and populate tech stack
    modalTechStack.innerHTML = '';
    project.tech.forEach(tech => {
        const techBadge = document.createElement('span');
        techBadge.classList.add('tech-badge');
        techBadge.textContent = tech;
        modalTechStack.appendChild(techBadge);
    });

    // Set project media (image or video) with lazy loading
    modalMedia.innerHTML = '';
    if (project.videoUrl && project.videoUrl !== '') {
        // If project has a video, embed it with lazy loading
        const videoId = project.videoUrl.split('v=')[1] || project.videoUrl.split('/').pop();
        modalMedia.innerHTML = `
            <iframe class="lazy-load" 
                    width="100%" 
                    height="315" 
                    data-src="https://www.youtube.com/embed/${videoId}" 
                    title="${project.titleKey[currentLanguage]}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        `;
    } else {
        // Otherwise, display the image with lazy loading
        modalMedia.innerHTML = `
            <img class="lazy-load" 
                 src="images/placeholder.jpg" 
                 data-src="${project.imageUrl}" 
                 alt="${project.titleKey[currentLanguage]}" 
                 loading="lazy">
        `;
    }

    // Set links
    repoLink.style.display = project.repoUrl ? 'inline-block' : 'none';
    docsLink.style.display = project.docsUrl ? 'inline-block' : 'none';
    demoLink.style.display = project.demoUrl ? 'inline-block' : 'none';
    videoLink.style.display = project.videoUrl ? 'inline-block' : 'none';

    if (project.repoUrl) repoLink.href = project.repoUrl;
    if (project.docsUrl) docsLink.href = project.docsUrl;
    if (project.demoUrl) demoLink.href = project.demoUrl;
    if (project.videoUrl) videoLink.href = project.videoUrl;

    // Show modal
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal

    // Refresh lazy loading for newly added media in modal
    if (typeof refreshLazyLoading === 'function') {
        refreshLazyLoading();
    }
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

// Theme toggle event listener
themeToggleBtn.addEventListener('click', toggleTheme);

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

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            showFormError();
            return;
        }

        // In a real implementation, you would send this data to a server
        // For now, we'll simulate a successful submission

        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Simulate server delay
        setTimeout(() => {
            // Reset form
            contactForm.reset();

            // Show success message
            showFormSuccess();

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

function showFormSuccess() {
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

function showFormError() {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';

    // Hide error message after 5 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// ===== INITIALIZATION =====

// Check for saved language preference
document.addEventListener('DOMContentLoaded', () => {
    // Get preferred language from localStorage, or default to 'en'
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';

    // Set the initial language
    setLanguage(savedLanguage);

    // Get preferred theme from localStorage, or default to 'dark'
    const savedTheme = localStorage.getItem('preferredTheme') || 'dark';
    currentTheme = savedTheme;
    htmlElement.setAttribute('data-theme', savedTheme);
    themeIcon.classList.add(savedTheme === 'dark' ? 'fa-moon' : 'fa-sun');

    // Open first accordion item by default
    const firstAccordionItem = document.querySelector('.accordion-item');
    if (firstAccordionItem) {
        firstAccordionItem.classList.add('active');
    }

    // Generate project cards
    generateProjectCards();

    // Initialize bio expansion hover animation
    initializeBioExpansion();
});