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
            es: "Explorando las intersecciones de algoritmos, IA y desenvolvimento cultural en la ingeniería de software moderna e cómo dan forma a nuestro paisaje digital."
        },
        date: "April 16, 2025",
        source: "LinkedIn",
        sourceUrl: "https://www.linkedin.com/pulse/algorithmic-currents-anchors-ai-engineered-culture-liquid-mororo-t6eme/",
        imageUrl: "images/articles/article1.png",
        tags: ["AI", "Algorithms", "Culture", "DigitalCulture", "Communication", "Journalism", "DigitalTransformation"]
    },
    {
        id: "article2",
        titleKey: {
            en: "The AI Crossroads: Integrated Platforms vs. Specialized Tools – Which Path for Your Enterprise?",
            fr: "La Croisée des Chemins de l'IA : Plateformes Intégrées vs Outils Spécialisés – Quelle Voie pour Votre Entreprise ?",
            pt: "A Encruzilhada da IA: Plataformas Integradas vs. Ferramentas Especializadas – Qual Caminho para sua Empresa?",
            es: "La Encrucijada de la IA: Plataformas Integradas vs. Herramientas Especializadas – ¿Qué Camino para su Empresa?"
        },
        descriptionKey: {
            en: "Exploring the strategic choice between integrated AI platforms like Microsoft Copilot and specialized, API-driven tools for enterprise AI adoption.",
            fr: "Explorer le choix stratégique entre les plateformes d'IA intégrées comme Microsoft Copilot et les outils spécialisés pilotés par API pour l'adoption de l'IA en entreprise.",
            pt: "Explorando a escolha estratégica entre plataformas de IA integradas como o Microsoft Copilot e ferramentas especializadas orientadas por API para a adoção de IA empresarial.",
            es: "Explorando la elección estratégica entre plataformas de IA integradas como Microsoft Copilot y herramientas especializadas impulsadas por API para la adopción de IA empresarial."
        },
        date: "June 19, 2025",
        source: "LinkedIn",
        sourceUrl: "https://www.linkedin.com/pulse/ai-crossroads-integrated-platforms-vs-specialized-tools-a-mororo-cywzf/",
        imageUrl: "images/articles/article2.jpeg",
        tags: ["AI", "EnterpriseAI", "AIStrategy", "DigitalTransformation"]
    },
    {
        id: "article3",
        titleKey: {
            en: "The AI Ecosystem Showdown: Gemini's Coding Prowess & Copilot's Enterprise Dominance",
            fr: "Le Choc des Écosystèmes IA : Les Prouesses de Codage de Gemini et la Domination d'Entreprise de Copilot",
            pt: "O Confronto de Ecossistemas de IA: A Proeza de Codificação do Gemini e a Dominância Empresarial do Copilot",
            es: "El Enfrentamiento de Ecosistemas de IA: la Habilidad de Codificación de Gemini y el Dominio Empresarial de Copilot"
        },
        descriptionKey: {
            en: "A comparative analysis of Google's Gemini as a specialized coding tool versus Microsoft's Copilot as an integrated enterprise ecosystem, helping decide the right fit for different organizational needs.",
            fr: "Une analyse comparative de Gemini de Google en tant qu'outil de codage spécialisé par rapport à Copilot de Microsoft en tant qu'écosystème d'entreprise intégré, aidant à décider de la meilleure solution pour différents besoins organisationnels.",
            pt: "Uma análise comparativa do Gemini do Google como uma ferramenta de codificação especializada versus o Copilot da Microsoft como um ecossistema empresarial integrado, ajudando a decidir o ajuste certo para diferentes necessidades organizacionais.",
            es: "Un análisis comparativo de Gemini de Google como herramienta de codificación especializada frente a Copilot de Microsoft como ecosistema empresarial integrado, ayudando a decidir la opción adecuada para diferentes necessidades organizativas."
        },
        date: "June 25, 2025",
        source: "LinkedIn",
        sourceUrl: "https://www.linkedin.com/pulse/ai-ecosystem-showdown-geminis-coding-prowess-copilots-livio-a-mororo-awp0e/",
        imageUrl: "images/articles/article3.png",
        tags: ["AI", "Gemini", "Copilot", "EnterpriseAI", "AIStrategy"]
    }
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

    // --- Button Creation and Ordering ---

    // Find the "All" button which is hardcoded in the HTML
    const allButton = filterContainer.querySelector('[data-filter="all"]');

    // Create and add the "None" button right after "All"
    if (allButton) {
        const noneButton = document.createElement('button');
        noneButton.className = 'filter-btn';
        noneButton.setAttribute('data-filter', 'none');
        noneButton.setAttribute('data-translate-key', 'filter_none');
        noneButton.textContent = 'None'; // Default text, will be updated by translation
        allButton.insertAdjacentElement('afterend', noneButton);
    }

    // Get unique tags and create a button for each
    const allTags = new Set();
    articlesData.forEach(article => {
        article.tags.forEach(tag => allTags.add(tag));
    });

    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', tag);
        button.textContent = tag;
        filterContainer.appendChild(button);
    });

    // --- Event Listener Logic ---

    // Add a single event listener to the container for delegation
    filterContainer.addEventListener('click', (e) => {
        if (!e.target.matches('.filter-btn')) return;

        const clickedButton = e.target;
        const filter = clickedButton.getAttribute('data-filter');

        // If the clicked button is already active, do nothing
        if (clickedButton.classList.contains('active')) {
            return;
        }

        // Deactivate all other buttons
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Activate the clicked button
        clickedButton.classList.add('active');

        // Handle the filter logic
        if (filter === 'none') {
            // Clear the grid
            const articlesGrid = document.getElementById('articlesGrid');
            articlesGrid.innerHTML = ''; // Clear existing cards
        } else {
            // Render articles based on the selected filter ('all' or a specific tag)
            renderArticles(filter);
        }
    });
}

// Refresh articles when language changes
function refreshArticles() {
    renderArticles();
}

// Initialize the articles section once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initArticles);