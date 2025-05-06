/**
 * Project data for portfolio website
 * Contains information about projects to be displayed
 */

const projectsData = [
    {
        id: "project1",
        titleKey: {
            en: "Personal AI Planning System",
            fr: "Système Personnel de Planification IA",
            pt: "Sistema Pessoal de Planejamento com IA",
            es: "Sistema Personal de Planificación con IA"
        },
        descriptionKey: {
            en: "Cross-platform life management app integrating 10+ domains with AI-driven automation, reducing planning time by 30%. Engineered recommendation engines (BERT) achieving NDCG@10: 0.45 and OCR for receipt digitization (85% accuracy). Implemented MLOps workflows (MLflow) with hourly model retraining for financial forecasting (MAE: 8.2%) and ensured GDPR/PIPEDA compliance with zero breaches during beta testing.Key Skills: AI/ML Architecture, MLOps, Cloud Engineering",
            fr: "Application de gestion de vie intégrant 10+ domaines avec automation IA, réduisant temps de planification de 30%. Moteurs de recommandation (BERT) atteignant NDCG@10: 0,45 et OCR pour numérisation des reçus (85% précision). Workflows MLOps avec ré-entraînement horaire des modèles financiers (MAE: 8,2%) et conformité RGPD/PIPEDA sans failles pendant les tests.Compétences Clés: Architecture IA/ML, MLOps, Ingénierie Cloud",
            pt: "Aplicativo de gerenciamento integrado com 10+ domínios e automação por IA, reduzindo tempo de planejamento em 30%. Motores de recomendação (BERT) alcançando NDCG@10: 0,45 e OCR para digitalização de recibos (85% precisão). Fluxos MLOps com retreinamento horário para previsões financeiras (MAE: 8,2%) e conformidade GDPR/PIPEDA sem violações durante testes beta.Habilidades Principais: Arquitetura IA/ML, MLOps, Engenharia em Nuvem",
            es: "Aplicación de gestión que integra 10+ dominios con automatización IA, reduciendo tiempo de planificación 30%. Motores de recomendación (BERT) logrando NDCG@10: 0,45 y OCR para digitalización de recibos (85% precisión). Flujos MLOps con reentrenamiento horario para previsiones financieras (MAE: 8,2%) y cumplimiento GDPR/PIPEDA sin brechas durante pruebas beta.Habilidades Clave: Arquitectura IA/ML, MLOps, Ingeniería Cloud"
        },
        imageUrl: "images/projects/ai-planning.jpeg",
        tech: ["Python", "Java", "React Native", "FastAPI", "Spring Boot", "PostgreSQL", "AWS", "GCP", "TensorFlow", "Docker", "Kubernetes", "MLflow", "BERT", "EasyOCR"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project2",
        titleKey: {
            en: "LivIsa Travels (AI Travel Platform)",
            fr: "LivIsa Travels (Plateforme de Voyage IA)",
            pt: "LivIsa Travels (Plataforma de Viagem com IA)",
            es: "LivIsa Travels (Plataforma de Viaje con IA)"
        },
        descriptionKey: {
            en: "Multilingual travel platform (5 languages) integrating 10+ APIs for personalized recommendations (NDCG@10: 0.45) and hybrid recommendation engine (+35% CTR). Automated content generation with fine-tuned BERT/GPT-2 producing 50+ daily posts (4.2/5 user rating) and secure OAuth2.0 flows with 98% posting success. Deployed scalable microservices handling 10k+ RPM with 99.9% uptime.Key Skills: NLP, Content Automation, Cloud Architecture",
            fr: "Plateforme de voyage multilingue (5 langues) intégrant 10+ APIs pour recommandations personnalisées (NDCG@10: 0,45) et moteur hybride (+35% CTR). Génération automatisée de contenu via BERT/GPT-2 produisant 50+ publications quotidiennes (note 4,2/5) et flux OAuth2.0 sécurisés (98% succès). Microservices évolutifs gérant 10k+ RPM avec 99,9% disponibilité.Compétences Clés: NLP, Automatisation de Contenu, Architecture Cloud",
            pt: "Plataforma multilíngue (5 idiomas) integrando 10+ APIs para recomendações personalizadas (NDCG@10: 0,45) e motor híbrido (+35% CTR). Geração automatizada de conteúdo via BERT/GPT-2 produzindo 50+ publicações diárias (4,2/5 avaliação) e fluxos OAuth2.0 seguros (98% sucesso). Microsserviços escaláveis processando 10k+ RPM com 99,9% disponibilidade.Habilidades Principais: NLP, Automação de Conteúdo, Arquitetura em Nuvem",
            es: "Plataforma multilingüe (5 idiomas) integrando 10+ APIs para recomendaciones personalizadas (NDCG@10: 0,45) y motor híbrido (+35% CTR). Generación automatizada de contenido con BERT/GPT-2 produciendo 50+ publicaciones diarias (calificación 4,2/5) y flujos OAuth2.0 seguros (98% éxito). Microservicios escalables procesando 10k+ RPM con 99,9% disponibilidad.Habilidades Clave: NLP, Automatización de Contenido, Arquitectura Cloud"
        },
        imageUrl: "images/projects/livisa-travels.jpeg",
        tech: ["Python", "FastAPI", "React", "Next.js", "React Native", "PostgreSQL", "Redis", "Celery", "NLP", "Docker", "AWS", "GCP", "Terraform", "BERT", "GPT-2"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
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
        imageUrl: "images/projects/jornal-ia.jpeg",
        tech: ["Python", "Java", "JavaScript", "NLP", "AWS", "Docker", "BERT", "GPT-2", "AWS Comprehend", "Flask", "Matplotlib", "Seaborn", "spaCy"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
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
        imageUrl: "images/projects/ai-video.jpeg",
        tech: ["Python", "NLP", "AWS", "Docker", "Transcribe", "Pandas", "Matplotlib", "Chatbot"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project5",
        titleKey: {
            en: "ML-Powered Loan Eligibility Checker",
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
        imageUrl: "images/projects/loan-checker.jpeg",
        tech: ["Python", "TensorFlow", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "Joblib", "SMOTE"],
        repoUrl: "https://github.com/livioangelim/loan-eligibility-checker",
        docsUrl: "https://github.com/livioangelim/loan-eligibility-checker/blob/main/technical-documentation.md",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project6",
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
        imageUrl: "images/projects/global-app.jpeg",
        tech: ["Java", "Spring Boot", "JUnit", "Angular", "TypeScript", "Docker", "AWS", "SQL", "Postman"],
        repoUrl: "https://github.com/livioangelim/global-app-suite",
        docsUrl: "https://github.com/livioangelim/global-application-suite/blob/main/TECHNICAL_DOCUMENTATION.md",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project7",
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
        imageUrl: "images/projects/parcel-routing.jpeg",
        tech: ["Python", "Algorithms", "GPS Simulation", "Hash Tables"],
        repoUrl: "https://github.com/livioangelim/parcel-routing",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project8",
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
        imageUrl: "images/projects/eduflow.jpeg",
        tech: ["C++", "Qt", "SQLite", "AWS", "Docker"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    }
];