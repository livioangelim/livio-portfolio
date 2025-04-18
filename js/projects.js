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
        imageUrl: "images/projects/loan-checker.png",
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
        imageUrl: "images/projects/global-app.png",
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
            en: "Automated 200+ multilingual articles/hour. BERT/GPT-2 pipeline + 150 RPS API. AWS spot instances cut costs by 40%. Implemented spaCy-driven regional dialect adaptation for EN/PT/ES content.Key Skills: NLP, Cloud Optimization, CI/CD",
            fr: "Génération automatisée de 200+ articles multilingues/heure. Pipeline BERT/GPT-2 + API 150 requêtes/seconde. Instances spot AWS réduisent coûts de 40%. Adaptation dialectale régionale via spaCy pour contenu EN/FR/ES.Compétences Clés: NLP, Optimisation Cloud, CI/CD",
            pt: "Geração automatizada de 200+ artigos multilíngues/hora. Pipeline BERT/GPT-2 + API 150 solicitações/segundo. Instâncias spot AWS reduziram custos em 40%. Adaptação dialectal regional via spaCy para conteúdo EN/PT/ES.Habilidades Principais: NLP, Otimização Nuvem, CI/CD",
            es: "Generación automatizada de 200+ artículos multilingües/hora. Pipeline BERT/GPT-2 + API 150 solicitudes/segundo. Instancias spot AWS redujeron costos 40%. Adaptación dialectal regional mediante spaCy para contenido EN/ES/PT.Habilidades Clave: NLP, Optimización Nube, CI/CD"
        },
        imageUrl: "images/projects/jornal-ia.png",
        tech: ["Python", "NLP", "AWS", "Docker", "spaCy"],
        repoUrl: "https://github.com/livioangelim/jornal-ia",
        docsUrl: "https://github.com/livioangelim/jornal-ia/wiki",
        demoUrl: "https://jornal-ia.livioangelim.com",
        videoUrl: ""
    },
    {
        id: "project4",
        titleKey: {
            en: "AI Video Journalism",
            fr: "Journalisme Vidéo IA",
            pt: "Jornalismo de Vídeo IA",
            es: "Periodismo de Video IA"
        },
        descriptionKey: {
            en: "Automated text-to-video news clips. Integrated Pandas/Matplotlib infographics + chatbot for audience Q&A. Leveraged AWS Transcribe for multilingual narration. Generated 50+ daily videos mirroring AP's content scaling.Key Skills: NLP, Data Visualization, Chatbot Integration",
            fr: "Création automatisée de vidéos d'actualités à partir de texte. Infographies Pandas/Matplotlib + chatbot pour Q&R. Utilisation d'AWS Transcribe pour narration multilingue. Production de 50+ vidéos quotidiennes.Compétences Clés: NLP, Visualisation Données, Intégration Chatbot",
            pt: "Automação de noticiários em vídeo a partir de texto. Infográficos Pandas/Matplotlib + chatbot para perguntas. Uso de AWS Transcribe para narração multilíngue. Geração de 50+ vídeos diários.Habilidades Principais: NLP, Visualização de Dados, Integração Chatbot",
            es: "Automatización de noticieros en video desde texto. Infografías Pandas/Matplotlib + chatbot para preguntas. Uso de AWS Transcribe para narración multilingüe. Generación de 50+ videos diarios.Habilidades Clave: NLP, Visualización Datos, Integración Chatbot"
        },
        imageUrl: "images/projects/ai-video.png",
        tech: ["Python", "NLP", "AWS", "Docker", "Transcribe"],
        repoUrl: "https://github.com/livioangelim/ai-video-journalism",
        docsUrl: "https://github.com/livioangelim/ai-video-journalism/wiki",
        demoUrl: "https://ai-video.livioangelim.com",
        videoUrl: "https://youtube.com/ai-video-demo"
    },
    {
        id: "project5",
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
        imageUrl: "images/projects/parcel-routing.png",
        tech: ["Python", "Algorithms", "GPS Simulation", "Hash Tables"],
        repoUrl: "https://github.com/livioangelim/parcel-routing",
        docsUrl: "https://github.com/livioangelim/parcel-routing/wiki",
        demoUrl: "https://parcel-routing.livioangelim.com",
        videoUrl: ""
    },
    {
        id: "project6",
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
        imageUrl: "images/projects/eduflow.png",
        tech: ["C++", "Qt", "SQLite", "AWS", "Docker"],
        repoUrl: "https://github.com/livioangelim/eduflow",
        docsUrl: "https://github.com/livioangelim/eduflow/wiki",
        demoUrl: "https://eduflow.livioangelim.com",
        videoUrl: ""
    }
];