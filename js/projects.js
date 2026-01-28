/**
 * projects.js
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
        repoUrl: "https://github.com/livioam/loan-eligibility-checker",
        docsUrl: "https://github.com/livioam/loan-eligibility-checker/blob/main/technical-documentation.md",
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
        repoUrl: "https://github.com/livioam/global-application-suite",
        docsUrl: "https://github.com/livioam/global-application-suite/blob/main/TECHNICAL_DOCUMENTATION.md",
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
        repoUrl: "https://github.com/livioam/parcel-service-routing-program",
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
    },
    {
        id: "project9",
        titleKey: {
            en: "\"Ask HR\" Enterprise AI Agent",
            fr: "Agent IA d'Entreprise \"Ask HR\"",
            pt: "Agente de IA Corporativo \"Ask HR\"",
            es: "Agente de IA Empresarial \"Ask HR\""
        },
        descriptionKey: {
            en: "Developed a Proof of Concept (PoC) for an enterprise-grade AI agent using Microsoft Copilot Studio and Azure OpenAI to automate HR inquiries. Designed a \"Single Source of Truth\" architecture using SharePoint metadata with potential to reduce administrative overhead by 95%. Demonstrated strict data governance via Azure DLP policies to prevent PII leakage and ensure compliance.Key Skills: AI Orchestration, Data Governance, Azure Security",
            fr: "Développement d'une Preuve de Concept (PoC) pour un agent IA d'entreprise utilisant Copilot Studio et Azure OpenAI pour automatiser les requêtes RH. Conception d'une \"Source Unique de Vérité\" via métadonnées SharePoint avec potentiel de réduction de 95% de la charge administrative. Démonstration de gouvernance stricte via politiques Azure DLP pour prévenir les fuites de PII.Compétences Clés: Orchestration IA, Gouvernance des Données, Sécurité Azure",
            pt: "Desenvolvimento de uma Prova de Conceito (PoC) para agente de IA corporativo usando Copilot Studio e Azure OpenAI para automatizar consultas de RH. Projetei uma arquitetura de \"Fonte Única da Verdade\" via metadados do SharePoint com potencial de reduzir o overhead administrativo em 95%. Demonstrei governança rigorosa via políticas Azure DLP para prevenir vazamento de PII.Habilidades Principais: Orquestração de IA, Governança de Dados, Segurança Azure",
            es: "Desarrollo de una Prueba de Concepto (PoC) para agente de IA empresarial usando Copilot Studio y Azure OpenAI para automatizar consultas de RRHH. Diseño de una \"Fuente Única de Verdad\" mediante metadatos de SharePoint con potencial de reducir la carga administrativa en un 95%. Demostración de gobernanza estricta vía políticas Azure DLP para prevenir fugas de PII.Habilidades Clave: Orquestación de IA, Gobernanza de Datos, Seguridad Azure"
        },
        imageUrl: "images/projects/ask-hr.jpg",
        tech: ["Microsoft Copilot Studio", "Azure OpenAI", "Azure DLP", "Power Automate", "SharePoint Premium", "Data Governance"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project10",
        titleKey: {
            en: "Global SOX Compliance Automation",
            fr: "Automatisation de Conformité SOX Globale",
            pt: "Automação de Conformidade SOX Global",
            es: "Automatización de Cumplimiento SOX Global"
        },
        descriptionKey: {
            en: "Engineered a tamper-proof automation ecosystem for Global Finance (US, Barbados, Honduras). Replaced manual workflows with Power Automate systems enforcing Segregation of Duties (SoD). Remediated critical SOX audit deficiencies by ensuring 100% immutable data lineage for Journal Entries and Credit Approvals.Key Skills: Regulatory Compliance, Process Architecture, Audit Trails",
            fr: "Conception d'un écosystème d'automatisation inviolable pour la Finance Globale. Remplacement des flux manuels par des systèmes Power Automate garantissant la Séparation des Tâches (SoD). Correction des déficiences critiques d'audit SOX en assurant une traçabilité des données 100% immuable.Compétences Clés: Conformité Réglementaire, Architecture de Processus, Pistes d'Audit",
            pt: "Engenharia de um ecossistema de automação à prova de violação para Finanças Globais. Substituí fluxos manuais por sistemas Power Automate garantindo Segregação de Funções (SoD). Corrigi deficiências críticas de auditoria SOX assegurando 100% de linhagem de dados imutável para Lançamentos Contábeis.Habilidades Principais: Conformidade Regulatória, Arquitetura de Processos, Trilhas de Auditoria",
            es: "Ingeniería de un ecosistema de automatización inviolable para Finanzas Globales. Reemplazo de flujos manuales por sistemas Power Automate garantizando Segregación de Funciones (SoD). Corrección de deficiencias críticas de auditoría SOX asegurando 100% de linaje de datos inmutable.Habilidades Clave: Cumplimiento Normativo, Arquitectura de Procesos, Pistas de Auditoría"
        },
        imageUrl: "images/projects/sox-compliance.jpg",
        tech: ["Power Automate", "Azure Logic Apps", "SharePoint Lists", "SOX Compliance", "Approval Workflows", "Auditing"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project11",
        titleKey: {
            en: "Excel to Snowflake Automated ETL",
            fr: "Pipeline ETL Automatisé Excel vers Snowflake",
            pt: "Pipeline ETL Automatizado Excel para Snowflake",
            es: "Pipeline ETL Automatizado Excel a Snowflake"
        },
        descriptionKey: {
            en: "Developed a robust Python-based ETL pipeline migrating legacy Excel data to Snowflake Data Warehouse. Implemented \"Self-Healing\" architecture with automatic error handling and notifications. Automating data ingestion via GitHub Actions/CI/CD, reducing data latency from days to minutes.Key Skills: Data Engineering, Python, Cloud Data Warehousing",
            fr: "Développement d'un pipeline ETL robuste en Python migrant les données Excel héritées vers Snowflake. Implémentation d'une architecture \"Self-Healing\" avec gestion automatique des erreurs. Automatisation de l'ingestion via GitHub Actions/CI/CD, réduisant la latence des données de plusieurs jours à quelques minutes.Compétences Clés: Ingénierie des Données, Python, Cloud Data Warehousing",
            pt: "Desenvolvimento de pipeline ETL robusto em Python migrando dados legados de Excel para Snowflake Data Warehouse. Implementei arquitetura \"Self-Healing\" com tratamento automático de erros. Automatizei a ingestão via GitHub Actions/CI/CD, reduzindo a latência de dados de dias para minutos.Habilidades Principais: Engenharia de Dados, Python, Cloud Data Warehousing",
            es: "Desarrollo de pipeline ETL robusto en Python migrando datos heredados de Excel a Snowflake. Implementación de arquitectura \"Self-Healing\" con manejo automático de errores. Automatización de ingestión vía GitHub Actions/CI/CD, reduciendo latencia de datos de días a minutos.Habilidades Clave: Ingeniería de Datos, Python, Cloud Data Warehousing"
        },
        imageUrl: "images/projects/automated-etl.jpg",
        tech: ["Python", "Snowflake", "GitHub Actions", "Pandas", "CI/CD", "Azure Blob Storage", "SQL"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project12",
        titleKey: {
            en: "Invoice AI",
            fr: "IA de Facturation",
            pt: "IA para Faturas",
            es: "IA de Facturación"
        },
        descriptionKey: {
            en: "Deployed Microsoft Syntex AI models to automatically extract unstructured data from contractor invoices. Integrated with Power Automate for validation and approval routing. Achieved a 70% reduction in manual data entry and accelerated payment cycles for external vendors.Key Skills: Document Intelligence, AI Implementation, Process Optimization",
            fr: "Déploiement de modèles IA Microsoft Syntex pour extraire automatiquement les données non structurées des factures. Intégration avec Power Automate pour validation et routage. Réduction de 70% de la saisie manuelle et accélération des cycles de paiement.Compétences Clés: Intelligence Documentaire, Implémentation IA, Optimisation de Processus",
            pt: "Implantação de modelos de IA Microsoft Syntex para extração automática de dados não estruturados de faturas de empreiteiros. Integração com Power Automate para validação e aprovação. Redução de 70% na entrada manual de dados e aceleração dos ciclos de pagamento.Habilidades Principais: Inteligência Documental, Implementação de IA, Otimização de Processos",
            es: "Implementación de modelos IA Microsoft Syntex para extraer automáticamente datos no estructurados de facturas. Integración con Power Automate para validación y enrutamiento. Reducción del 70% en entrada manual y aceleración de ciclos de pago.Habilidades Clave: Inteligencia Documental, Implementación IA, Optimización de Procesos"
        },
        imageUrl: "images/projects/invoice-ai.jpg",
        tech: ["Microsoft Syntex", "AI Builder", "Power Automate", "SharePoint", "Document Processing"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project13",
        titleKey: {
            en: "Distribution Center Digitization",
            fr: "Numérisation du Centre de Distribution",
            pt: "Digitalização do Centro de Distribuição",
            es: "Digitalización del Centro de Distribución"
        },
        descriptionKey: {
            en: "Led the digital transformation of warehouse operations by replacing paper forms with intuitive Power Apps (Tablet/Kiosk). Streamlined data collection for \"Line Audits\" and \"Trailer Inspections,\" improving floor-to-cloud data accuracy and operational decision-making.Key Skills: UX Design, Mobile App Dev, Digital Transformation",
            fr: "Transformation numérique des opérations d'entrepôt en remplaçant les formulaires papier par des Power Apps intuitives (Tablette/Kiosk). Optimisation de la collecte de données pour les inspections, améliorant la précision des données terrain-nuage.Compétences Clés: Design UX, Dév. Mobile, Transformation Numérique",
            pt: "Liderança na transformação digital das operações de armazém, substituindo formulários de papel por Power Apps intuitivos (Tablet/Kiosk). Otimizei a coleta de dados para \"Auditorias de Linha\" e \"Inspeções de Reboque\", melhorando a precisão dos dados e a tomada de decisão.Habilidades Principais: Design UX, Desenv. Mobile, Transformação Digital",
            es: "Transformación digital de operaciones de almacén reemplazando formularios en papel con Power Apps intuitivas. Optimización de recolección de datos para inspecciones, mejorando precisión de datos y toma de decisiones.Habilidades Clave: Diseño UX, Desarrollo Móvil, Transformación Digital"
        },
        imageUrl: "images/projects/digitization.jpg",
        tech: ["Power Apps", "Canvas Apps", "SharePoint", "Data Visualization", "Mobile Development"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project14",
        titleKey: {
            en: "IT ServiceDesk Integration Dashboard",
            fr: "Tableau de Bord Intégré IT ServiceDesk",
            pt: "Dashboard Integrado de IT ServiceDesk",
            es: "Panel de Integración IT ServiceDesk"
        },
        descriptionKey: {
            en: "Built a real-time \"Single Pane of Glass\" dashboard integrating ServiceNow APIs with SharePoint via Azure Functions. Provided leadership with instant visibility into ticket trends and SLA breaches, optimizing IT resource allocation and response times.Key Skills: API Integration, Serverless Architecture, Real-time Monitoring",
            fr: "Création d'un tableau de bord temps réel intégrant les API ServiceNow et SharePoint via Azure Functions. Visibilité instantanée sur les tendances des tickets et violations de SLA, optimisant l'allocation des ressources IT.Compétences Clés: Intégration API, Architecture Serverless, Monitoring Temps Réel",
            pt: "Construção de dashboard \"Single Pane of Glass\" em tempo real integrando APIs ServiceNow com SharePoint via Azure Functions. Forneci à liderança visibilidade instantânea sobre tendências de tickets e violações de SLA, otimizando a alocação de recursos de TI.Habilidades Principais: Integração de API, Arquitetura Serverless, Monitoramento em Tempo Real",
            es: "Creación de panel en tiempo real integrando APIs ServiceNow y SharePoint vía Azure Functions. Visibilidad instantánea sobre tendencias de tickets y violaciones de SLA, optimizando asignación de recursos TI.Habilidades Clave: Integración API, Arquitectura Serverless, Monitoreo en Tiempo Real"
        },
        imageUrl: "images/projects/it-servicedesk.jpg",
        tech: ["Azure Functions", "ServiceNow API", "SharePoint Framework (SPFx)", "JavaScript", "REST APIs"],
        repoUrl: "",
        docsUrl: "",
        demoUrl: "",
        videoUrl: ""
    }
];