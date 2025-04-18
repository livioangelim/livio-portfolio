/**
 * Articles functionality for displaying technical content
 * js/articles.js
 */

// Articles data
const articlesData = [
    {
        id: "article1",
        titleKey: {
            en: "Algorithmic Currents: Anchors in an AI-Engineered Culture",
            fr: "Courants Algorithmiques: Ancres dans une Culture Conçue par l'IA",
            pt: "Correntes Algorítmicas: Âncoras em uma Cultura Projetada por IA",
            es: "Corrientes Algorítmicas: Anclajes en una Cultura Diseñada por IA"
        },
        descriptionKey: {
            en: "Exploring the intersections of algorithms, AI, and cultural development in modern software engineering and how they shape our digital landscape.",
            fr: "Explorer les intersections des algorithmes, de l'IA et du développement culturel dans l'ingénierie logicielle moderne et comment ils façonnent notre paysage numérique.",
            pt: "Explorando as interseções de algoritmos, IA e desenvolvimento cultural na engenharia de software moderna e como eles moldam nossa paisagem digital.",
            es: "Explorando las intersecciones de algoritmos, IA y desarrollo cultural en la ingeniería de software moderna y cómo dan forma a nuestro paisaje digital."
        },
        date: "April 10, 2025",
        source: "LinkedIn",
        sourceUrl: "https://www.linkedin.com/pulse/algorithmic-currents-anchors-ai-engineered-culture-liquid-mororo-t6eme/",
        imageUrl: "images/articles/algorithm-ai.png",
        tags: ["AI", "Algorithms", "Culture"]
    }
    // Additional articles can be added here
];

// Initialize articles section
function initArticles() {
    renderArticles();
    setupArticlesFilters();
}

// Render articles to the grid
function renderArticles(filter = 'all') {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;

    // Remove loading message
    const loadingElement = articlesGrid.querySelector('.loading-articles');
    if (loadingElement) {
        loadingElement.remove();
    }

    // Clear existing article cards
    const existingCards = articlesGrid.querySelectorAll('.article-card');
    existingCards.forEach(card => card.remove());

    // Filter articles if needed
    const articlesToShow = filter === 'all'
        ? articlesData
        : articlesData.filter(article => article.tags.includes(filter));

    // Create HTML for each article
    articlesToShow.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });

    // If no articles match the filter
    if (articlesToShow.length === 0) {
        const noArticlesMsg = document.createElement('p');
        noArticlesMsg.className = 'no-articles';
        noArticlesMsg.setAttribute('data-translate-key', 'no_articles');
        noArticlesMsg.textContent = translations[currentLanguage].no_articles || 'No articles found matching this filter.';
        articlesGrid.appendChild(noArticlesMsg);
    }

    // Update lazy loading for new images
    if (typeof refreshLazyLoading === 'function') {
        refreshLazyLoading();
    }
}

// Create an article card
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';

    card.innerHTML = `
        <div class="article-image-container">
            <img class="article-image lazy-load" 
                 src="images/placeholder.jpg" 
                 data-src="${article.imageUrl}" 
                 alt="${article.titleKey[currentLanguage]}" 
                 loading="lazy">
        </div>
        <div class="article-content">
            <h3 class="article-title">${article.titleKey[currentLanguage]}</h3>
            <p class="article-description">${article.descriptionKey[currentLanguage]}</p>
            <div class="article-meta">
                <span class="article-date">${article.date}</span>
                <span class="article-source">${article.source}</span>
            </div>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
            </div>
            <a href="${article.sourceUrl}" class="article-read-more btn" target="_blank" data-translate-key="read_article">Read Article</a>
        </div>
    `;

    return card;
}

// Set up articles filters based on unique tags
function setupArticlesFilters() {
    const filterContainer = document.querySelector('.articles-filters');
    if (!filterContainer) return;

    // Get unique tags from all articles
    const allTags = new Set();
    articlesData.forEach(article => {
        article.tags.forEach(tag => allTags.add(tag));
    });

    // Create filter buttons for each tag
    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', tag);
        button.textContent = tag;

        button.addEventListener('click', (e) => {
            // Toggle active class
            document.querySelectorAll('.articles-filters .filter-btn').forEach(btn => {
                if (btn === e.target) {
                    btn.classList.toggle('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Get active filter or default to 'all'
            const activeFilter = document.querySelector('.articles-filters .filter-btn.active');
            const filterValue = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';

            // Filter articles
            renderArticles(filterValue);
        });

        filterContainer.appendChild(button);
    });

    // Add click handler for the "All" filter
    const allFilterBtn = filterContainer.querySelector('[data-filter="all"]');
    if (allFilterBtn) {
        allFilterBtn.addEventListener('click', (e) => {
            // Toggle active class
            e.target.classList.toggle('active');

            // Remove active class from other filters
            document.querySelectorAll('.articles-filters .filter-btn:not([data-filter="all"])').forEach(btn => {
                btn.classList.remove('active');
            });

            // Filter based on whether "All" is active
            if (e.target.classList.contains('active')) {
                renderArticles('all');
            } else {
                // If "All" is not active, show no articles
                const articlesGrid = document.getElementById('articlesGrid');
                if (articlesGrid) {
                    articlesGrid.innerHTML = '';
                    const noArticlesMsg = document.createElement('p');
                    noArticlesMsg.className = 'no-articles';
                    noArticlesMsg.setAttribute('data-translate-key', 'no_articles');
                    noArticlesMsg.textContent = translations[currentLanguage].no_articles || 'No articles selected. Please select a filter.';
                    articlesGrid.appendChild(noArticlesMsg);
                }
            }
        });
    }
}

// Refresh articles when language changes
function refreshArticles() {
    renderArticles();
}