/**
 * Project data for portfolio website
 * Contains information about projects to be displayed
 */

const projectsData = [
    {
        id: "project1",
        titleKey: {
            en: "Loan Eligibility Checker",
            fr: "Vérificateur d'Éligibilité aux Prêts",
            pt: "Verificador de Elegibilidade para Empréstimos",
            es: "Verificador de Elegibilidad para Préstamos"
        },
        descriptionKey: {
            en: "Developed an ML-powered loan approval system reducing processing time from 5 days to 2 seconds (88% accuracy). Engineered logistic regression model (ROC-AUC: 0.90) via Flask API with 47ms latency. Addressed class imbalance using SMOTE and automated Pandas/NumPy pipelines. Built real-time dashboards for income/approval trend visualization.Key Skills: ML Modeling, API Development, Data Visualization",
            fr: "Système d'approbation de prêts automatisé réduisant le traitement de 5 jours à 2 secondes (précision: 88%). Modèle de régression logistique (ROC-AUC: 0,90) via API Flask (47ms). Pipeline automatisé avec SMOTE et tableaux de bord temps réel.Compétences Clés: Modélisation ML, Développement d'API, Visualisation",
            pt: "Sistema de aprovação de empréstimos automatizado reduzindo processamento de 5 dias para 2 segundos (88% precisão). Modelo de regressão logística (ROC-AUC: 0,90) via API Flask (47ms). Pipeline automatizado com SMOTE e painéis interativos.Habilidades Principais: Modelagem ML, Desenvolvimento API, Visualização",
            es: "Sistema de aprobación de préstamos automatizado reduciendo procesamiento de 5 días a 2 segundos (88% precisión). Modelo de regresión logística (ROC-AUC: 0,90) mediante API Flask (47ms). Pipeline automatizado con SMOTE y paneles interactivos.Habilidades Clave: Modelado ML, Desarrollo API, Visualización"
        },
        imageUrl: "images/loan-checker.jpg",
        tech: ["Python", "TensorFlow", "Flask", "Pandas", "SMOTE", "Matplotlib"],
        repoUrl: "https://github.com/livioangelim/loan-eligibility-checker",
        docsUrl: "https://github.com/livioangelim/loan-eligibility-checker/wiki",
        demoUrl: "https://loan-checker.livioangelim.com",
        videoUrl: ""
    },
    {
        id: "project2",
        titleKey: {
            en: "Global Application Suite",
            fr: "Suite d'Applications Globales",
            pt: "Suite Global de Aplicações",
            es: "Suite de Aplicaciones Globales"
        },
        descriptionKey: {
            en: "Enterprise Java/Spring Boot app with Angular frontend. Achieved 99.8% API reliability via JUnit/Postman testing (25% error reduction). Automated CI/CD with Docker/AWS accelerated deployments by 40%. Supports 10k+ users with role-based access.Key Skills: Microservices, Testing, DevOps",
            fr: "Application d'entreprise Java/Spring Boot avec interface Angular. Fiabilité API 99,8% via tests JUnit/Postman (erreurs réduites de 25%). CI/CD automatisé avec Docker/AWS (déploiements 40% plus rapides). Supporte 10k+ utilisateurs.Compétences Clés: Microservices, Tests, DevOps",
            pt: "Aplicativo empresarial Java/Spring Boot com frontend Angular. Confiabilidade API 99,8% via testes JUnit/Postman (25% menos erros). CI/CD automatizado com Docker/AWS (implantações 40% mais rápidas). Suporta 10k+ usuários.Habilidades Principais: Microserviços, Testes, DevOps",
            es: "Aplicación empresarial Java/Spring Boot con interfaz Angular. Confiabilidad API 99,8% mediante pruebas JUnit/Postman (25% menos errores). CI/CD automatizado con Docker/AWS (despliegues 40% más rápidos). Soporta 10k+ usuarios.Habilidades Clave: Microservicios, Pruebas, DevOps"
        },
        imageUrl: "images/global-app.jpg",
        tech: ["Java", "Spring Boot", "Angular", "AWS", "Docker", "SQL"],
        repoUrl: "https://github.com/livioangelim/global-app-suite",
        docsUrl: "https://github.com/livioangelim/global-app-suite/wiki",
        demoUrl: "https://global-app.livioangelim.com",
        videoUrl: ""
    },
    {
        id: "project3",
        titleKey: {
            en: "Jornal.IA (AI Journalism)",
            fr: "Jornal.IA (Journalisme IA)",
            pt: "Jornal.IA (Jornalismo IA)",
            es: "Jornal.IA (Periodismo IA)"
        },
        descriptionKey: {
            en: "Automated 200+ multilingual articles/hour using BERT/GPT-2. Flask API handles 150+ RPS with AWS Comprehend integration. Reduced AWS costs 40% via spot instances. Auto-generated infographics cut design work by 70%. Includes text-to-video automation.Key Skills: NLP, Cloud Optimization, CI/CD",
            fr: "Génération automatisée de 200+ articles multilingues/heure avec BERT/GPT-2. API Flask gère 150+ requêtes/seconde. Coûts AWS réduits de 40%. Infographies automatisées (70% moins de travail). Inclut automation texte-vidéo.Compétences Clés: NLP, Optimisation Cloud, CI/CD",
            pt: "Geração automatizada de 200+ artigos multilíngues/hora com BERT/GPT-2. API Flask processa 150+ solicitações/segundo. Custos AWS reduzidos 40%. Infográficos automáticos (70% menos trabalho). Inclui automação texto-vídeo.Habilidades Principais: NLP, Otimização Nuvem, CI/CD",
            es: "Generación automatizada de 200+ artículos multilingües/hora con BERT/GPT-2. API Flask maneja 150+ solicitudes/segundo. Costos AWS reducidos 40%. Infografías automáticas (70% menos trabajo). Incluye automatización texto-video.Habilidades Clave: NLP, Optimización Nube, CI/CD"
        },
        imageUrl: "images/jornal-ia.jpg",
        tech: ["Python", "NLP", "AWS", "BERT", "Flask", "Docker"],
        repoUrl: "https://github.com/livioangelim/jornal-ia",
        docsUrl: "https://github.com/livioangelim/jornal-ia/wiki",
        demoUrl: "https://jornal-ia.livioangelim.com",
        videoUrl: "https://youtube.com/jornal-ia-demo"
    },
    {
        id: "project4",
        titleKey: {
            en: "Parcel Routing System",
            fr: "Système de Routage de Colis",
            pt: "Sistema de Roteamento de Encomendas",
            es: "Sistema de Enrutamiento de Paquetes"
        },
        descriptionKey: {
            en: "Optimized delivery routes by 40% using Nearest Neighbor Algorithm. O(1) package lookup via custom hash tables. Simulated GPS tracking for multi-truck logistics with 15+ constraint handling.Key Skills: Algorithm Design, Optimization",
            fr: "Optimisation des itinéraires de livraison de 40% via algorithme du plus proche voisin. Recherche de colis en O(1) avec tables de hachage. Simulation GPS pour flottes avec gestion de 15+ contraintes.Compétences Clés: Conception d'Algorithmes, Optimisation",
            pt: "Rotas de entrega otimizadas em 40% usando algoritmo do vizinho mais próximo. Busca O(1) via tabelas hash. Simulação GPS para frotas com 15+ restrições.Habilidades Principais: Design de Algoritmos, Otimização",
            es: "Rutas de entrega optimizadas 40% con algoritmo del vecino más cercano. Búsqueda O(1) mediante tablas hash. Simulación GPS para flotas con 15+ restricciones.Habilidades Clave: Diseño de Algoritmos, Optimización"
        },
        imageUrl: "images/parcel-routing.jpg",
        tech: ["Python", "Algorithms", "GPS Simulation", "Hash Tables"],
        repoUrl: "https://github.com/livioangelim/parcel-routing",
        docsUrl: "https://github.com/livioangelim/parcel-routing/wiki",
        demoUrl: "https://parcel-routing.livioangelim.com",
        videoUrl: ""
    },
    {
        id: "project5",
        titleKey: {
            en: "EduFlow System",
            fr: "Système EduFlow",
            pt: "Sistema EduFlow",
            es: "Sistema EduFlow"
        },
        descriptionKey: {
            en: "C++/Qt educational platform supporting 1k+ concurrent users. 99.9% uptime via multi-threading. AWS auto-scaling reduced server costs by 30%. Features SQLite integration and REST APIs.Key Skills: System Design, Concurrency",
            fr: "Plateforme éducative C++/Qt pour 1k+ utilisateurs simultanés. Disponibilité 99,9% via multithreading. AWS auto-scaling réduit coûts 30%. Intègre SQLite et APIs REST.Compétences Clés: Conception Systèmes, Concurrence",
            pt: "Plataforma educacional C++/Qt para 1k+ usuários simultâneos. 99,9% disponibilidade via multithreading. AWS auto-scaling reduziu custos 30%. Integra SQLite e APIs REST.Habilidades Principais: Design de Sistemas, Concorrência",
            es: "Plataforma educativa C++/Qt para 1k+ usuarios concurrentes. 99,9% disponibilidad mediante multihilos. AWS auto-scaling redujo costos 30%. Integra SQLite y APIs REST.Habilidades Clave: Diseño de Sistemas, Concurrencia"
        },
        imageUrl: "images/eduflow.jpg",
        tech: ["C++", "Qt", "SQLite", "AWS", "Docker"],
        repoUrl: "https://github.com/livioangelim/eduflow",
        docsUrl: "https://github.com/livioangelim/eduflow/wiki",
        demoUrl: "https://eduflow.livioangelim.com",
        videoUrl: ""
    }
];