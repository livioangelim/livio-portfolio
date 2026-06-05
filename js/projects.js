/**
 * projects.js
 * Project data for portfolio website
 * Contains information about 31 professional projects
 */

const projectsData = [
    {
        id: "A1",
        titleKey: {
            en: "ML-Powered Loan Eligibility Checker",
            fr: "Vérificateur d'Éligibilité de Prêt par IA",
            pt: "Avaliador de Empréstimos com IA",
            es: "Verificador de Préstamos con IA"
        },
        shortDescriptionKey: {
            en: "End-to-end ML pipeline achieving 88% prediction accuracy and 47ms inference speed.",
            fr: "Pipeline ML atteignant 88% de précision et 47ms de vitesse d'inférence.",
            pt: "Pipeline ML alcançando 88% de precisão e 47ms de velocidade de inferência.",
            es: "Pipeline ML logrando 88% de precisión y 47ms de velocidad de inferencia."
        },
        longDescriptionKey: {
            en: "Legacy loan approvals were prone to human error and immense delays. Architected an end-to-end Machine Learning pipeline using Python and TensorFlow, addressing critical class imbalances via the SMOTE algorithm. Deployed the highly scalable model through a lightweight Flask API, drastically reducing processing time from days to just 2 seconds with an 88% accuracy rate.",
            fr: "L'approbation des prêts était sujette aux erreurs et retards. Architecture d'un pipeline ML de bout en bout avec Python et TensorFlow, résolvant les déséquilibres via l'algorithme SMOTE. Déployé via une API Flask évolutive, réduisant le temps de traitement de plusieurs jours à 2 secondes avec 88% de précision.",
            pt: "A aprovação manual de empréstimos gerava atrasos imensos e estava sujeita a erro humano. Arquitetura de um pipeline de Machine Learning de ponta a ponta utilizando Python e TensorFlow, resolvendo desequilíbrios de classes críticos através do algoritmo SMOTE. O modelo foi implementado via API Flask, reduzindo o tempo de processamento de dias para 2 segundos com 88% de precisão.",
            es: "La aprobación manual de préstamos generaba enormes retrasos. Arquitectura de un pipeline de Machine Learning de extremo a extremo utilizando Python y TensorFlow, resolviendo desequilibrios mediante SMOTE. Desplegado a través de una API Flask, reduciendo el procesamiento de días a 2 segundos con 88% de precisión."
        },
        tech: ["Flask", "Machine Learning", "Python", "SMOTE", "TensorFlow"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B1",
        titleKey: {
            en: "Cross-Platform Microservices Architecture",
            fr: "Architecture de Microservices Multiplateforme",
            pt: "Arquitetura de Microsserviços Multiplataforma",
            es: "Arquitectura de Microservicios Multiplataforma"
        },
        shortDescriptionKey: {
            en: "Orchestrated a secure Kubernetes ecosystem bridging Python ML workloads and Java backends.",
            fr: "Écosystème Kubernetes sécurisé reliant les charges ML Python et les backends Java.",
            pt: "Ecossistema Kubernetes seguro integrando cargas de trabalho de ML em Python e backends Java.",
            es: "Ecosistema Kubernetes seguro vinculando cargas de ML en Python y backends Java."
        },
        longDescriptionKey: {
            en: "Faced with highly fragmented monolithic domains, designed and orchestrated a secure, containerized Kubernetes ecosystem that successfully unified nine distinct life domains. Bridged high-compute machine learning workloads (Python/FastAPI) with robust transactional backends (Java/Spring Boot). This architecture guaranteed 100% strict GDPR/PIPEDA compliance while unlocking infinite horizontal scalability.",
            fr: "Confronté à des domaines monolithiques fragmentés, conception d'un écosystème Kubernetes sécurisé unifiant 9 domaines. Association des charges de travail ML (Python/FastAPI) avec des backends transactionnels (Java/Spring Boot). Garantit une conformité totale au RGPD.",
            pt: "Perante domínios monolíticos altamente fragmentados, concebeu e orquestrou um ecossistema Kubernetes contentorizado e seguro que unificou nove domínios distintos. Integrou cargas de trabalho de alta computação (Python/FastAPI) com backends transacionais robustos (Java/Spring Boot). Esta arquitetura garantiu total conformidade com o RGPD/PIPEDA e permitiu escalabilidade horizontal infinita.",
            es: "Frente a dominios monolíticos fragmentados, diseñó y orquestó un ecosistema Kubernetes en contenedores que unificó nueve dominios. Vinculó cargas de trabajo de ML (Python/FastAPI) con backends transaccionales (Java/Spring Boot), garantizando total cumplimiento con GDPR/PIPEDA."
        },
        tech: ["Docker", "FastAPI", "Java", "Kubernetes", "Python", "Spring Boot"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B2",
        titleKey: {
            en: "Enterprise Workflow & Compliance Automation",
            fr: "Automatisation des Flux et de la Conformité",
            pt: "Automação de Workflows e Conformidade Corporativa",
            es: "Automatización de Flujos y Cumplimiento Empresarial"
        },
        shortDescriptionKey: {
            en: "Engineered scalable SharePoint (SPFx) solutions with React.js and C# for real-time audit trails.",
            fr: "Solutions SharePoint (SPFx) évolutives avec React.js et C# pour des pistes d'audit en temps réel.",
            pt: "Soluções escaláveis no SharePoint (SPFx) com React.js e C# para trilhas de auditoria em tempo real.",
            es: "Soluciones escalables en SharePoint (SPFx) con React.js y C# para pistas de auditoría en tiempo real."
        },
        longDescriptionKey: {
            en: "Manual compliance tracking exposed the enterprise to critical audit failures. Engineered highly scalable, compliance-driven business solutions utilizing the SharePoint Framework (SPFx). Seamlessly integrated robust backend C# logic with interactive React.js and TypeScript web parts to deliver real-time, tamper-evident audit trails, massively accelerating quarterly SOX reporting.",
            fr: "Le suivi manuel de la conformité exposait l'entreprise à des échecs d'audit. Ingénierie de solutions SharePoint (SPFx) évolutives avec une logique C# et des interfaces React.js. Fournit des pistes d'audit immuables en temps réel pour les rapports SOX.",
            pt: "O rastreamento manual de conformidade expunha a empresa a falhas críticas de auditoria. Engenharia de soluções corporativas escaláveis no SharePoint Framework (SPFx). Integrou perfeitamente a lógica C# de backend com web parts interativas em React.js e TypeScript para fornecer trilhas de auditoria invioláveis em tempo real, acelerando massivamente os relatórios SOX trimestrais.",
            es: "El seguimiento manual de cumplimiento exponía la empresa a fallos de auditoría. Ingeniería de soluciones en SharePoint Framework (SPFx). Integró lógica C# con elementos web en React.js y TypeScript para proporcionar pistas de auditoría inmutables en tiempo real, acelerando los informes SOX."
        },
        tech: ["C#", "JavaScript", "SharePoint", "TypeScript"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B3",
        titleKey: {
            en: "Real-Time Logistics Telemetry Dashboard",
            fr: "Tableau de Bord Télémétrique Logistique",
            pt: "Dashboard de Telemetria Logística em Tempo Real",
            es: "Panel de Telemetría Logística en Tiempo Real"
        },
        shortDescriptionKey: {
            en: "Built an event-driven Node.js and WebSockets telemetry dashboard with a highly responsive React.js UI.",
            fr: "Tableau de bord télémétrique via WebSockets/Node.js avec une interface React.js réactive.",
            pt: "Dashboard de telemetria orientado a eventos via WebSockets/Node.js com interface React.js.",
            es: "Panel de telemetría impulsado por eventos vía WebSockets/Node.js con interfaz React.js."
        },
        longDescriptionKey: {
            en: "Global supply chain teams lacked visibility into live truck deliveries, causing warehouse bottlenecks. Engineered an event-driven telemetry backend utilizing Node.js and WebSockets for continuous live-location streaming. Built a highly responsive React.js and TypeScript front-end with advanced state management, transforming raw data into actionable operational intelligence.",
            fr: "Les équipes manquaient de visibilité sur les livraisons. Création d'un backend télémétrique événementiel (Node.js/WebSockets) pour la diffusion en direct. Interface React.js et TypeScript transformant les données brutes en intelligence opérationnelle.",
            pt: "As equipas globais de cadeia de abastecimento não tinham visibilidade das entregas em direto, causando estrangulamentos. Engenharia de um backend de telemetria orientado a eventos (Node.js/WebSockets) para transmissão contínua de localização. O frontend responsivo em React.js e TypeScript transformou grandes volumes de dados em inteligência operacional acionável.",
            es: "Los equipos logísticos carecían de visibilidad de las entregas. Ingeniería de un backend de telemetría (Node.js/WebSockets) para transmisión de ubicación en tiempo real. El frontend responsivo en React.js y TypeScript transformó datos brutos en inteligencia operativa."
        },
        tech: ["Node", "React", "TypeScript", "WebSockets"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B4",
        titleKey: {
            en: "Automated Compliance & Audit Logger",
            fr: "Journaliseur d'Audit et de Conformité Automatisé",
            pt: "Registador Automatizado de Conformidade e Auditoria",
            es: "Registrador Automatizado de Cumplimiento y Auditoría"
        },
        shortDescriptionKey: {
            en: "Architected a containerized REST API centralized logging engine utilizing C# (.NET Core) and Azure SQL.",
            fr: "Architecture d'une API REST de journalisation centralisée en C# (.NET Core) et Azure SQL.",
            pt: "Arquitetura de uma API REST de registo centralizado em C# (.NET Core) e Azure SQL.",
            es: "Arquitectura de una API REST de registro centralizado en C# (.NET Core) y Azure SQL."
        },
        longDescriptionKey: {
            en: "Compliance audits were severely slowed down by scattered, decentralized system logs. Architected a lightweight, containerized REST API in C# (.NET Core) and Azure SQL to serve as a centralized enterprise logging engine. The system automatically generated immutable, time-stamped JSON logs, eliminating manual overhead and perfectly satisfying strict SOX auditors.",
            fr: "Les audits étaient ralentis par des journaux dispersés. Architecture d'une API REST conteneurisée en C# et Azure SQL. Le système génère des journaux JSON immuables et horodatés, éliminant la surcharge manuelle et satisfaisant les auditeurs SOX.",
            pt: "As auditorias de conformidade eram severamente atrasadas por registos de sistema descentralizados. Arquitetura de uma API REST contentorizada e leve em C# (.NET Core) e Azure SQL para atuar como motor central de registo da empresa. O sistema gerou automaticamente logs JSON imutáveis, eliminando o trabalho manual e satisfazendo perfeitamente os rigorosos auditores da SOX.",
            es: "Las auditorías se veían retrasadas por registros descentralizados. Arquitectura de una API REST en contenedores en C# (.NET Core) y Azure SQL. El sistema generó registros JSON inmutables, eliminando el trabajo manual y satisfaciendo perfectamente a los auditores SOX."
        },
        tech: ["Azure", "C#", "Docker", "REST APIs"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B5",
        titleKey: {
            en: "Multi-Tenant SaaS Approval Engine",
            fr: "Moteur d'Approbation SaaS Multi-Locataires",
            pt: "Motor de Aprovação SaaS Multi-Inquilino",
            es: "Motor de Aprobación SaaS Multiusuario"
        },
        shortDescriptionKey: {
            en: "Dynamic React.js SaaS workflow engine mapped to a secure GraphQL and Python/Java backend.",
            fr: "Moteur de flux de travail SaaS React.js piloté par un backend GraphQL et Python/Java.",
            pt: "Motor dinâmico de workflows SaaS em React.js suportado por backend GraphQL e Python/Java.",
            es: "Motor dinámico de flujos de trabajo SaaS en React.js impulsado por backend GraphQL y Python/Java."
        },
        longDescriptionKey: {
            en: "Hardcoded business rules created immense developer bottlenecks whenever approval flows needed changes. Engineered a dynamic, highly componentized React.js SaaS workflow engine driven by a secure Python/Java backend via GraphQL. This empowered end-users to autonomously define and modify their own multi-step approval processes on the fly without IT intervention.",
            fr: "Les règles métiers codées en dur créaient des goulets d'étranglement informatiques. Ingénierie d'un moteur de flux SaaS React.js dynamique via GraphQL. Permet aux utilisateurs finaux de modifier de manière autonome leurs processus d'approbation sans intervention informatique.",
            pt: "As regras de negócio fixas no código criavam enormes estrangulamentos para os programadores sempre que os fluxos necessitavam de alterações. Engenharia de um motor de workflows SaaS dinâmico e altamente modular em React.js, ligado a um backend Python/Java via GraphQL. Isto capacitou os utilizadores finais a definirem autonomamente os seus próprios processos de aprovação sem intervenção do departamento de TI.",
            es: "Las reglas de negocio fijas creaban enormes cuellos de botella en el equipo de desarrollo. Ingeniería de un motor dinámico y modular de flujos SaaS en React.js, vinculado a un backend Python/Java vía GraphQL. Capacitó a los usuarios finales para definir autónomamente sus procesos sin intervención de TI."
        },
        tech: ["GraphQL", "Java", "Python", "React"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B6",
        titleKey: {
            en: "Serverless Payment & Transaction Gateway",
            fr: "Passerelle de Paiement et de Transaction Serverless",
            pt: "Gateway de Pagamentos e Transações Serverless",
            es: "Pasarela de Pago y Transacciones Serverless"
        },
        shortDescriptionKey: {
            en: "High-performance serverless transaction gateway using AWS Lambda and Java (Spring Boot).",
            fr: "Passerelle de transaction sans serveur haute performance (AWS Lambda et Spring Boot).",
            pt: "Gateway de transações serverless de alto desempenho usando AWS Lambda e Java (Spring Boot).",
            es: "Pasarela de transacciones serverless de alto rendimiento usando AWS Lambda y Java (Spring Boot)."
        },
        longDescriptionKey: {
            en: "Peak transaction loads routinely threatened to crash legacy payment servers. Architected a high-performance, event-driven serverless gateway using AWS Lambda, API Gateway, DynamoDB, and Java (Spring Boot). The architecture auto-scaled flawlessly to handle 10,000+ concurrent transactions during peak events while slashing infrastructure compute costs by 60%.",
            fr: "Les pics de transactions menaçaient les anciens serveurs. Architecture d'une passerelle événementielle sans serveur utilisant AWS Lambda, API Gateway et Java (Spring Boot). Mise à l'échelle automatique pour 10 000+ transactions simultanées, réduisant les coûts de calcul de 60%.",
            pt: "Os picos de carga ameaçavam frequentemente bloquear os servidores de pagamento antigos. Arquitetura de uma gateway serverless de alto desempenho orientada a eventos, usando AWS Lambda, API Gateway, DynamoDB e Java (Spring Boot). A infraestrutura escalou automaticamente para processar +10.000 transações simultâneas sem falhas, reduzindo os custos de computação em 60%.",
            es: "Los picos de carga amenazaban con bloquear los servidores de pago heredados. Arquitectura de una pasarela serverless de alto rendimiento impulsada por eventos usando AWS Lambda, API Gateway y Java (Spring Boot). Escaló automáticamente para +10,000 transacciones simultáneas, reduciendo costos de computación en 60%."
        },
        tech: ["API Gateway", "AWS", "DynamoDB", "Java"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B7",
        titleKey: {
            en: "AI-Driven Customer Sentiment & Triage Engine",
            fr: "Moteur de Triage de Sentiment Client IA",
            pt: "Motor IA de Triagem e Sentimento do Cliente",
            es: "Motor IA de Triaje y Sentimiento del Cliente"
        },
        shortDescriptionKey: {
            en: "Python FastAPI microservice leveraging BERT NLP models paired with a responsive React.js dashboard.",
            fr: "Microservice Python FastAPI exploitant des modèles NLP (BERT) avec un tableau de bord React.js.",
            pt: "Microsserviço Python FastAPI usando modelos NLP (BERT) emparelhado com um dashboard React.js.",
            es: "Microservicio Python FastAPI usando modelos NLP (BERT) emparejado con un panel React.js."
        },
        longDescriptionKey: {
            en: "Customer support teams were overwhelmed by a massive influx of unstructured support tickets. Developed a Python (FastAPI) microservice leveraging fine-tuned NLP models (BERT) for intelligent ticket triage and user intent classification. Paired with a fast React.js dashboard, the system decreased initial customer response times by an impressive 45%.",
            fr: "Le support client était débordé par des tickets non structurés. Développement d'un microservice Python (FastAPI) exploitant des modèles NLP (BERT) pour le triage intelligent. Associé à un tableau de bord React.js, le système a réduit les temps de réponse initiaux de 45%.",
            pt: "As equipas de suporte ao cliente estavam sobrecarregadas com o influxo massivo de tickets não estruturados. Desenvolvimento de um microsserviço Python (FastAPI) utilizando modelos avançados de NLP (BERT) para a triagem inteligente e classificação da intenção do utilizador. Em conjunto com um painel de controlo em React.js, reduziu os tempos de resposta iniciais em 45%.",
            es: "Los equipos de soporte estaban abrumados por tickets no estructurados. Desarrollo de un microservicio Python (FastAPI) utilizando modelos NLP (BERT) para el triaje inteligente. Junto con un panel React.js, el sistema redujo los tiempos de respuesta iniciales en 45%."
        },
        tech: ["Docker", "FastAPI", "NLP", "Python", "React"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B8",
        titleKey: {
            en: "Multi-Cloud Identity & Access Federation Portal",
            fr: "Portail Fédéré d'Identité et d'Accès Multi-Cloud",
            pt: "Portal de Federação de Identidade e Acessos Multi-Cloud",
            es: "Portal de Federación de Identidad y Accesos Multi-Cloud"
        },
        shortDescriptionKey: {
            en: "Centralized SSO portal integrating C# (.NET Core) with Azure AD and a React.js frontend.",
            fr: "Portail SSO centralisé intégrant C# (.NET Core) avec Azure AD et une interface React.js.",
            pt: "Portal SSO centralizado integrando C# (.NET Core) com Azure AD e um frontend React.js.",
            es: "Portal SSO centralizado integrando C# (.NET Core) con Azure AD y un frontend React.js."
        },
        longDescriptionKey: {
            en: "Password vulnerabilities and forgotten credentials constituted the majority of IT helpdesk volume. Built a centralized Single Sign-On (SSO) portal integrating C# (.NET Core) directly with Azure Active Directory. Designed a custom React.js frontend to enforce organization-wide MFA, completely eliminating password vulnerabilities and reducing reset tickets by 80%.",
            fr: "Les oublis de mots de passe saturaient le support informatique. Création d'un portail SSO centralisé intégrant C# (.NET Core) avec Azure AD. L'interface React.js impose l'authentification multifacteur (MFA), éliminant les vulnérabilités et réduisant les tickets de 80%.",
            pt: "A vulnerabilidade de senhas e os esquecimentos constantes constituíam a maioria do volume de suporte de TI. Criação de um portal Single Sign-On (SSO) centralizado integrando C# (.NET Core) com o Azure Active Directory. O frontend personalizado em React.js impôs a adoção corporativa de MFA, eliminando vulnerabilidades e reduzindo pedidos de redefinição em 80%.",
            es: "Las vulnerabilidades de contraseñas saturaban el soporte de TI. Creación de un portal Single Sign-On (SSO) centralizado integrando C# (.NET Core) con Azure AD. El frontend en React.js impuso la adopción de MFA en la empresa, eliminando vulnerabilidades y reduciendo solicitudes de restablecimiento en 80%."
        },
        tech: ["Azure", "C#", "OAuth2", "React"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B9",
        titleKey: {
            en: "Automated IaC Deployment Engine",
            fr: "Moteur de Déploiement IaC Automatisé",
            pt: "Motor Automatizado de Implantação IaC",
            es: "Motor Automatizado de Despliegue IaC"
        },
        shortDescriptionKey: {
            en: "Python-based IaC automation triggering Terraform via GitHub Actions for Azure Kubernetes clusters.",
            fr: "Automatisation IaC en Python déclenchant Terraform via GitHub Actions pour Azure Kubernetes.",
            pt: "Automação IaC em Python executando Terraform via GitHub Actions para clusters Azure Kubernetes.",
            es: "Automatización IaC en Python ejecutando Terraform vía GitHub Actions para clústeres Azure Kubernetes."
        },
        longDescriptionKey: {
            en: "Manual infrastructure provisioning was error-prone and severely delayed product launches. Designed a Python-based Infrastructure-as-Code (IaC) automation engine that triggered Terraform scripts via GitHub Actions. Dynamically provisioned secure, compliant Azure Kubernetes clusters, accelerating environment delivery from 2 weeks to just 15 minutes with 100% parity.",
            fr: "Le provisionnement manuel de l'infrastructure retardait les lancements. Conception d'un moteur d'automatisation IaC (Python) déclenchant Terraform via GitHub Actions. Provisionnement de clusters Azure Kubernetes sécurisés, réduisant les délais de 2 semaines à 15 minutes.",
            pt: "O provisionamento manual de infraestrutura estava sujeito a erros e atrasava gravemente o lançamento de produtos. Conceção de um motor de automação Infrastructure-as-Code (IaC) em Python que executou scripts Terraform através de GitHub Actions. Provisionou de forma dinâmica clusters Azure Kubernetes seguros, acelerando a entrega de ambientes de 2 semanas para apenas 15 minutos.",
            es: "El aprovisionamiento manual de infraestructura estaba sujeto a errores y retrasaba los lanzamientos. Diseño de un motor de automatización IaC en Python que ejecutó scripts Terraform vía GitHub Actions. Aprovisionó clústeres Azure Kubernetes dinámicos, acelerando la entrega de 2 semanas a 15 minutos."
        },
        tech: ["Azure", "GitHub Actions", "Kubernetes", "Python", "Terraform"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B10",
        titleKey: {
            en: "Intelligent Document Extraction & Archival System",
            fr: "Système d'Extraction et d'Archivage de Documents Intelligents",
            pt: "Sistema Inteligente de Extração e Arquivamento de Documentos",
            es: "Sistema Inteligente de Extracción y Archivo de Documentos"
        },
        shortDescriptionKey: {
            en: "Microsoft Syntex and C# Azure Functions automation for legal PDF extraction to SharePoint.",
            fr: "Automatisation Microsoft Syntex et fonctions Azure C# pour l'extraction de PDF vers SharePoint.",
            pt: "Automação via Microsoft Syntex e Azure Functions (C#) para extração de PDFs legais para o SharePoint.",
            es: "Automatización vía Microsoft Syntex y Azure Functions (C#) para extracción de PDFs legales a SharePoint."
        },
        longDescriptionKey: {
            en: "Legal and compliance teams wasted thousands of hours manually transcribing data from legacy contracts. Integrated Microsoft Syntex with custom C# Azure Functions to automate the ingestion and metadata extraction of legal PDFs into secure SharePoint libraries. The system saved over 2,000 manual hours annually while guaranteeing 100% data retention compliance.",
            fr: "Les équipes juridiques perdaient des heures à transcrire les contrats. Intégration de Microsoft Syntex avec des fonctions Azure C# pour automatiser l'ingestion et l'extraction de métadonnées de PDF légaux. Économie de 2 000 heures manuelles annuelles et conformité garantie à 100%.",
            pt: "As equipas jurídicas e de conformidade desperdiçavam milhares de horas na transcrição manual de contratos. Integrou o Microsoft Syntex com funções Azure personalizadas em C# para automatizar a ingestão e extração de metadados de PDFs para o SharePoint. O sistema poupou mais de 2.000 horas anuais, garantindo 100% de conformidade de retenção de dados.",
            es: "Los equipos legales desperdiciaban miles de horas transcribiendo contratos manuales. Integró Microsoft Syntex con funciones Azure personalizadas en C# para automatizar la ingesta y extracción de metadatos de PDFs hacia SharePoint. El sistema ahorró más de 2,000 horas anuales, garantizando 100% de cumplimiento."
        },
        tech: ["Azure", "C#", "Microsoft Syntex", "SharePoint"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B11",
        titleKey: {
            en: "Distributed API Gateway Modernization",
            fr: "Modernisation de Passerelle API Distribuée",
            pt: "Modernização de Gateway API Distribuída",
            es: "Modernización de Pasarela API Distribuida"
        },
        shortDescriptionKey: {
            en: "Decoupled monolith into a resilient API Gateway using Java (Spring Cloud) and Kubernetes.",
            fr: "Séparation d'un monolithe en passerelle API résiliente avec Java (Spring Cloud) e Kubernetes.",
            pt: "Desacoplamento de um monólito para uma Gateway API resiliente usando Java e Kubernetes.",
            es: "Desacoplamiento de un monolito en una Pasarela API resiliente usando Java y Kubernetes."
        },
        longDescriptionKey: {
            en: "A legacy monolithic architecture prevented secure scaling for B2B external partners. Decoupled the monolith into a highly resilient, distributed API Gateway utilizing Java (Spring Cloud). Orchestrated the containerized routing layers via Docker and Kubernetes, securely unlocking real-time integration capabilities for 50+ third-party vendors without compromising the core system.",
            fr: "Une architecture monolithique empêchait l'évolutivité B2B. Séparation en une passerelle API distribuée et résiliente avec Java (Spring Cloud). Ordonnancée via Docker et Kubernetes, débloquant des intégrations sécurisées pour 50+ fournisseurs tiers.",
            pt: "Uma arquitetura monolítica legada impedia o escalamento seguro para parceiros B2B externos. Desacoplou o monólito numa Gateway API distribuída e altamente resiliente usando Java (Spring Cloud). Orquestrou as camadas de roteamento através de Docker e Kubernetes, desbloqueando capacidades de integração em tempo real para mais de 50 fornecedores sem comprometer o sistema principal.",
            es: "Una arquitectura monolítica antigua impedía el escalamiento seguro para socios B2B externos. Desacopló el monolito en una Pasarela API distribuida y resiliente usando Java (Spring Cloud). Orquestó las capas de enrutamiento a través de Docker y Kubernetes, desbloqueando capacidades de integración seguras para más de 50 proveedores externos."
        },
        tech: ["Docker", "Java", "Kubernetes", "Microservices"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B12",
        titleKey: {
            en: "Automated PII/PHI De-Identification Microservice",
            fr: "Microservice de Désidentification Automatisée PII/PHI",
            pt: "Microsserviço Automatizado de Desidentificação PII/PHI",
            es: "Microservicio Automatizado de Desidentificación PII/PHI"
        },
        shortDescriptionKey: {
            en: "Asynchronous Python worker using NER to automatically detect and mask sensitive corporate data.",
            fr: "Worker Python asynchrone utilisant NER pour détecter et masquer les données sensibles.",
            pt: "Worker Python assíncrono usando NER para detetar e mascarar automaticamente dados sensíveis.",
            es: "Worker Python asíncrono usando NER para detectar y enmascarar automáticamente datos sensibles."
        },
        longDescriptionKey: {
            en: "Data science teams were blocked from utilizing production databases due to strict global privacy laws. Engineered an asynchronous Python worker utilizing advanced Named Entity Recognition (NER) models to automatically scan and mask PII/PHI. This securely unlocked terabytes of realistic production data for Machine Learning teams while strictly adhering to GDPR and PIPEDA requirements.",
            fr: "Les équipes de science des données étaient bloquées par les lois sur la confidentialité. Ingénierie d'un worker Python asynchrone utilisant la détection d'entités nommées (NER) pour masquer les PII/PHI. Déblocage de téraoctets de données pour le ML en conformité avec le RGPD.",
            pt: "As equipas de data science estavam impedidas de usar bases de dados de produção devido às leis rigorosas de privacidade globais. Engenharia de um worker Python assíncrono utilizando modelos avançados de Reconhecimento de Entidades Nomeadas (NER) para mascarar dados sensíveis. Desbloqueou com segurança terabytes de dados reais para as equipas de Machine Learning cumprindo totalmente o RGPD.",
            es: "Los equipos de ciencia de datos estaban impedidos de usar bases de datos de producción por leyes de privacidad. Ingeniería de un worker Python asíncrono utilizando Reconocimiento de Entidades Nombradas (NER) para enmascarar datos sensibles. Desbloqueó de forma segura terabytes de datos para Machine Learning cumpliendo totalmente el GDPR."
        },
        tech: ["NLP", "PostgreSQL", "Python", "Redis"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B13",
        titleKey: {
            en: "Interactive Supply Chain \"Digital Twin\"",
            fr: "Jumeau Numérique Interactif de la Chaîne d'Approvisionnement",
            pt: "Gémeo Digital Interativo da Cadeia de Abastecimento",
            es: "Gemelo Digital Interactivo de la Cadena de Suministro"
        },
        shortDescriptionKey: {
            en: "React.js/TypeScript Digital Twin powered by a Node.js/GraphQL backend aggregating ERP data.",
            fr: "Jumeau Numérique React.js/TypeScript piloté par un backend Node.js/GraphQL (données ERP).",
            pt: "Gémeo Digital em React.js/TypeScript suportado por um backend Node.js/GraphQL e dados de ERP.",
            es: "Gemelo Digital en React.js/TypeScript impulsado por un backend Node.js/GraphQL y datos de ERP."
        },
        longDescriptionKey: {
            en: "Executives lacked a consolidated, live view of the global supply chain, leading to reactive inventory decisions. Architected an interactive 'Digital Twin' using a highly performant React.js and TypeScript front-end. Powered by a Node.js/GraphQL backend that aggregated real-time ERP data, the platform provided live visibility that reduced global warehouse bottlenecks by 30%.",
            fr: "Les dirigeants manquaient de visibilité globale sur la chaîne d'approvisionnement. Architecture d'un « Jumeau Numérique » avec React.js/TypeScript et un backend Node.js/GraphQL. Agrégeant les données ERP en temps réel, la plateforme a réduit les goulets d'étranglement mondiaux de 30%.",
            pt: "Os executivos não tinham uma visão consolidada e em tempo real da cadeia de abastecimento, levando a decisões de inventário reativas. Arquitetura de um 'Gémeo Digital' interativo usando um front-end altamente performante em React.js e TypeScript. Alimentado por um backend Node.js/GraphQL agregando dados ERP, reduziu os estrangulamentos globais nos armazéns em 30%.",
            es: "Los ejecutivos carecían de una visión en tiempo real de la cadena de suministro. Arquitectura de un 'Gemelo Digital' interactivo utilizando un front-end de alto rendimiento en React.js y TypeScript. Impulsado por un backend Node.js/GraphQL agregando datos ERP, redujo los cuellos de botella globales en 30%."
        },
        tech: ["GraphQL", "Node", "React", "TypeScript"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B14",
        titleKey: {
            en: "Multi-Region Disaster Recovery Orchestrator",
            fr: "Orchestrateur de Reprise après Sinistre Multi-Régions",
            pt: "Orquestrador de Recuperação de Desastres Multi-Região",
            es: "Orquestador de Recuperación de Desastres Multi-Región"
        },
        shortDescriptionKey: {
            en: "Resilient DR architecture using Python for replication and AWS Route 53 for automated failover.",
            fr: "Architecture DR résiliente utilisant Python pour la réplication et AWS Route 53 pour le basculement.",
            pt: "Arquitetura DR resiliente usando Python para replicação e AWS Route 53 para failover automático.",
            es: "Arquitectura DR resiliente usando Python para replicación y AWS Route 53 para failover automático."
        },
        longDescriptionKey: {
            en: "Unexpected region outages posed a severe risk of catastrophic corporate data loss. Designed a highly resilient Multi-Region Disaster Recovery (DR) architecture utilizing Python automation to continuously replicate stateful data. Integrated AWS Route 53 for automated health-check failovers, achieving an elite Recovery Time Objective (RTO) of under 5 minutes.",
            fr: "Les pannes régionales présentaient un risque de perte de données. Conception d'une architecture de reprise après sinistre (DR) utilisant l'automatisation Python pour répliquer les données en continu. Intégration d'AWS Route 53 pour des basculements automatisés, atteignant un RTO inférieur à 5 minutes.",
            pt: "As falhas inesperadas de região representavam um risco crítico de perda catastrófica de dados. Conceção de uma arquitetura de Recuperação de Desastres (DR) Multi-Região altamente resiliente, utilizando automação Python para replicar dados de estado continuamente. O failover automatizado através do AWS Route 53 permitiu atingir um RTO de excelência inferior a 5 minutos.",
            es: "Los fallos inesperados de región representaban un riesgo crítico de pérdida de datos. Diseño de una arquitectura de Recuperación de Desastres (DR) Multi-Región altamente resiliente, utilizando automatización Python para replicar datos. El failover automatizado en AWS Route 53 permitió un RTO inferior a 5 minutos."
        },
        tech: ["AWS", "Bash", "Python"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "B15",
        titleKey: {
            en: "AI-Powered Newsroom Engine",
            fr: "Moteur de Salle de Rédaction IA",
            pt: "Motor de Redação Impulsionado por IA",
            es: "Motor de Redacción Impulsado por IA"
        },
        shortDescriptionKey: {
            en: "High-traffic NLP pipeline (AWS Comprehend, GPT-2) with a Flask API for real-time article generation.",
            fr: "Pipeline NLP (AWS Comprehend, GPT-2) avec API Flask pour la génération d'articles en temps réel.",
            pt: "Pipeline NLP de alto tráfego (AWS Comprehend, GPT-2) via API Flask para geração de artigos ao vivo.",
            es: "Pipeline NLP de alto tráfico (AWS Comprehend, GPT-2) vía API Flask para generación de artículos."
        },
        longDescriptionKey: {
            en: "Independent media outlets struggled to scale news coverage against major networks. Engineered a high-traffic multi-stage NLP pipeline using AWS Comprehend and fine-tuned GPT-2 models for real-time automated article generation. Wrapped in a robust Python (Flask) API handling 150+ RPS, enabling smaller media entities to scale hyper-local news coverage exponentially.",
            fr: "Les médias indépendants peinaient à concurrencer les grands réseaux. Ingénierie d'un pipeline NLP utilisant AWS Comprehend et GPT-2 pour la génération d'articles. Enveloppé dans une API Flask gérant 150+ requêtes/seconde, permettant aux médias de développer leur couverture.",
            pt: "Os meios de comunicação independentes lutavam para escalar a sua cobertura noticiosa. Engenharia de um pipeline NLP de alto tráfego em múltiplas etapas, utilizando AWS Comprehend e modelos GPT-2 otimizados para a geração automatizada de artigos. Exposto via API Flask em Python a processar +150 RPS, permitindo cobertura noticiosa exponencial.",
            es: "Los medios independientes luchaban por escalar su cobertura. Ingeniería de un pipeline NLP de alto tráfico usando AWS Comprehend y modelos GPT-2 para generación automatizada de artículos. Expuesto vía API Flask procesando +150 RPS, permitiendo cobertura de noticias exponencial."
        },
        tech: ["AWS", "NLP", "Python", "Flask", "REST APIs"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C1",
        titleKey: {
            en: "IT Helpdesk Handover Automation",
            fr: "Automatisation de Service d'Assistance IT",
            pt: "Automação do ServiceDesk de TI",
            es: "Automatización del ServiceDesk de TI"
        },
        shortDescriptionKey: {
            en: "SharePoint/Power Automate ecosystem to ingest ServiceNow data into real-time operational dashboards.",
            fr: "Écosystème SharePoint/Power Automate ingérant les données ServiceNow dans des tableaux de bord.",
            pt: "Ecossistema SharePoint/Power Automate a ingerir dados ServiceNow para dashboards em tempo real.",
            es: "Ecosistema SharePoint/Power Automate ingiriendo datos ServiceNow hacia paneles en tiempo real."
        },
        longDescriptionKey: {
            en: "Siloed email handovers caused critical delays in addressing P1/P2 global IT incidents. Architected a unified SharePoint and Power Automate ecosystem to programmatically ingest daily ServiceNow shift emails into a near real-time, interactive dashboard. This completely eliminated information silos, established auditable shift logs, and dramatically reduced global incident resolution times.",
            fr: "Les transferts d'e-mails provoquaient des retards dans les incidents informatiques. Architecture d'un écosystème SharePoint et Power Automate pour ingérer les données ServiceNow dans un tableau de bord interactif en temps réel. Élimination des silos et réduction des temps de résolution.",
            pt: "A passagem de turnos via e-mail causava atrasos críticos na resolução de incidentes globais de TI (P1/P2). Arquitetura de um ecossistema unificado em SharePoint e Power Automate para extrair dados diários do ServiceNow para um dashboard interativo em tempo real. Eliminou silos de informação, estabeleceu registos auditáveis e reduziu drasticamente os tempos de resolução de incidentes.",
            es: "Los traspasos por correo causaban retrasos críticos en la resolución de incidentes globales. Arquitectura de un ecosistema unificado en SharePoint y Power Automate para extraer datos diarios de ServiceNow hacia un panel interactivo en tiempo real. Eliminó silos y redujo drásticamente los tiempos de resolución."
        },
        tech: ["Azure", "Power Automate", "ServiceNow", "SharePoint"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C2",
        titleKey: {
            en: "Continuous Improvement Approval Flow",
            fr: "Flux d'Approbation pour l'Amélioration Continue",
            pt: "Fluxo de Aprovação para Melhoria Contínua",
            es: "Flujo de Aprobación de Mejora Continua"
        },
        shortDescriptionKey: {
            en: "Migrated legacy workflows to Power Platform with MS Teams integration and dynamic matrix routing.",
            fr: "Migration de flux hérités vers Power Platform avec intégration MS Teams et routage dynamique.",
            pt: "Migração de workflows antigos para a Power Platform com integração no MS Teams e roteamento dinâmico.",
            es: "Migración de flujos heredados a Power Platform con integración MS Teams y enrutamiento dinámico."
        },
        longDescriptionKey: {
            en: "Fragmented, manual project approvals delayed ROI-generating continuous improvement initiatives. Modernized legacy workflows by migrating them into the Microsoft Power Platform. Architected a multi-stage Power Automate workflow featuring a dynamic routing matrix and seamless actionable cards directly within MS Teams, radically accelerating cross-departmental approval cycles.",
            fr: "Les approbations de projets manuelles retardaient les initiatives d'amélioration. Modernisation des flux vers la Microsoft Power Platform. Architecture d'un flux Power Automate multi-étapes avec une matrice de routage dynamique et intégration transparente à MS Teams, accélérant les cycles d'approbation.",
            pt: "As aprovações manuais e fragmentadas atrasavam iniciativas de melhoria contínua que geravam ROI. Modernização dos fluxos antigos migrando-os para a Microsoft Power Platform. Arquitetura de um workflow em Power Automate com uma matriz de roteamento dinâmica e integração fluida de cartões de ação diretamente no MS Teams, acelerando radicalmente os ciclos de aprovação interdepartamentais.",
            es: "Las aprobaciones manuales y fragmentadas retrasaban iniciativas de mejora continua. Modernización de los flujos migrándolos a Microsoft Power Platform. Arquitectura de un flujo Power Automate con matriz de enrutamiento dinámica e integración en MS Teams, acelerando radicalmente las aprobaciones."
        },
        tech: ["Power Apps", "Power Automate", "SharePoint", "Tableau"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C3",
        titleKey: {
            en: "Process Engineering: SOP Approval Flows",
            fr: "Ingénierie des Procédures Opérationnelles",
            pt: "Engenharia de Processos: Fluxos de Aprovação SOP",
            es: "Ingeniería de Procesos: Flujos de Aprobación SOP"
        },
        shortDescriptionKey: {
            en: "Centralized SharePoint data model and Power Automate matrix routing international SOP approvals.",
            fr: "Modèle de données SharePoint centralisé et matrice Power Automate pour l'approbation de procédures.",
            pt: "Modelo centralizado em SharePoint e matriz Power Automate para rotear aprovações SOP internacionais.",
            es: "Modelo centralizado en SharePoint y matriz Power Automate para enrutar aprobaciones SOP."
        },
        longDescriptionKey: {
            en: "Critical manufacturing Standard Operating Procedures (SOPs) were frequently lost in massive global email chains. Designed a centralized SharePoint data model paired with a dynamic Power Automate logic matrix to instantly route complex SOPs to the correct international approvers. Eradicated operational bottlenecks, cutting monthly manual compliance tracking from over 20 hours down to under 5.",
            fr: "Les procédures (SOP) se perdaient dans des chaînes d'e-mails mondiales. Conception d'un modèle de données SharePoint centralisé et d'une matrice Power Automate pour acheminer les SOP aux approbateurs internationaux. Éradication des goulets d'étranglement, réduisant le suivi de 20 à 5 heures/mois.",
            pt: "Procedimentos Operacionais Padrão (SOPs) críticos de manufatura perdiam-se frequentemente em longas cadeias de e-mail internacionais. Conceção de um modelo de dados SharePoint centralizado e uma matriz lógica em Power Automate para encaminhar instantaneamente SOPs complexos. Erradicou os estrangulamentos operacionais, reduzindo o rastreamento manual de conformidade de 20 para menos de 5 horas mensais.",
            es: "Procedimientos Operativos Estándar (SOPs) se perdían frecuentemente en cadenas de correo. Diseño de un modelo de datos SharePoint centralizado y matriz Power Automate para enrutar instantáneamente SOPs complejos. Erradicó cuellos de botella operativos, disminuyendo el rastreo manual de cumplimiento de 20 a 5 horas."
        },
        tech: ["Power Automate", "SharePoint"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C4",
        titleKey: {
            en: "Power Apps with Automated AP Notification",
            fr: "Power Apps et Notifications AP Automatisées",
            pt: "Power Apps com Notificações AP Automatizadas",
            es: "Power Apps con Notificaciones AP Automatizadas"
        },
        shortDescriptionKey: {
            en: "Digitized Distribution Center operations using tablet-ready Power Apps and SharePoint ledgers.",
            fr: "Numérisation des opérations de centre de distribution avec des Power Apps pour tablettes.",
            pt: "Digitalização das operações do Centro de Distribuição com Power Apps e registos em SharePoint.",
            es: "Digitalización de operaciones de Centro de Distribución con Power Apps y registros en SharePoint."
        },
        longDescriptionKey: {
            en: "Paper-based Distribution Center workflows led to massive data-entry backlogs and costly payroll deduction errors. Spearheaded the digital transformation of floor operations by building intuitive, tablet-ready Power Apps perfectly integrated with governed SharePoint ledgers. Real-time Power Automate notifications completely eliminated manual AP discrepancies and streamlined the auditing process.",
            fr: "Les processus papier des centres de distribution entraînaient des erreurs de déduction sur la paie. Transformation numérique via des Power Apps intuitives pour tablettes intégrées aux registres SharePoint. Les notifications Power Automate ont éliminé les écarts AP manuels et optimisé les audits.",
            pt: "Os fluxos de trabalho em papel nos Centros de Distribuição originavam atrasos imensos na entrada de dados e erros onerosos nas deduções em folha. Liderou a transformação digital do chão de fábrica desenvolvendo Power Apps intuitivas integradas com registos governados em SharePoint. As notificações em tempo real do Power Automate eliminaram totalmente as discrepâncias financeiras manuais e otimizaram o processo de auditoria.",
            es: "Flujos de trabajo en papel causaban retrasos y errores costosos en nóminas. Lideró la transformación digital en planta construyendo Power Apps intuitivas integradas en SharePoint. Las notificaciones en Power Automate eliminaron totalmente las discrepancias financieras y optimizaron las auditorías."
        },
        tech: ["Power Apps", "Power Automate", "SharePoint"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C5",
        titleKey: {
            en: "Caribbean Contractors AI Invoice Automation",
            fr: "Automatisation IA de Facturation pour Entrepreneurs",
            pt: "Automação de Faturas de Empreiteiros com IA",
            es: "Automatización de Facturas de Contratistas con IA"
        },
        shortDescriptionKey: {
            en: "Microsoft Syntex AI deployment for unstructured metadata extraction from external vendor invoices.",
            fr: "Déploiement de l'IA Microsoft Syntex pour l'extraction de métadonnées des factures externes.",
            pt: "Implementação da IA Microsoft Syntex para extração de metadados de faturas externas de fornecedores.",
            es: "Implementación de IA Microsoft Syntex para extracción de metadatos de facturas externas de proveedores."
        },
        longDescriptionKey: {
            en: "Manual vendor invoice processing in the Caribbean sector was heavily error-prone and caused payment friction. Deployed Microsoft Syntex AI models to automatically extract and classify unstructured metadata from incoming contractor invoices. Orchestrated multi-level Power Automate approval workflows, slashing manual data entry by 70% and drastically accelerating vendor payment cycles.",
            fr: "Le traitement manuel des factures fournisseurs dans les Caraïbes générait des erreurs et des retards. Déploiement de modèles d'IA Microsoft Syntex pour l'extraction et la classification des métadonnées. Flux d'approbation Power Automate réduisant la saisie manuelle de 70% et accélérant les cycles de paiement.",
            pt: "O processamento manual de faturas no setor das Caraíbas estava sujeito a erros constantes e causava fricção nos pagamentos. Implementou modelos de IA do Microsoft Syntex para extrair e classificar automaticamente metadados não estruturados de faturas. Orquestrou workflows de aprovação multinível no Power Automate, cortando a entrada manual em 70% e acelerando drasticamente os ciclos de pagamento dos fornecedores.",
            es: "El procesamiento manual de facturas en el Caribe era susceptible a errores y creaba fricción en los pagos. Implementó modelos de IA Microsoft Syntex para extraer y clasificar metadatos no estructurados. Orquestó flujos de aprobación en Power Automate, cortando la entrada manual en 70% y acelerando ciclos de pago."
        },
        tech: ["Power Apps", "Power Automate", "SharePoint", "Syntex"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C6",
        titleKey: {
            en: "Global SOX Compliance Workflow",
            fr: "Flux de Travail de Conformité SOX Global",
            pt: "Workflow Global de Conformidade SOX",
            es: "Flujo de Cumplimiento SOX Global"
        },
        shortDescriptionKey: {
            en: "Engineered a full-suite SOX-compliant workflow enforcing Segregation of Duties (SoD) over 2.5 years.",
            fr: "Flux de travail conforme SOX appliquant la séparation des tâches (SoD) (initiative de 2,5 ans).",
            pt: "Engenharia de um workflow de conformidade SOX, garantindo a Segregação de Funções em 2,5 anos.",
            es: "Ingeniería de un flujo de cumplimiento SOX, garantizando Segregación de Funciones a lo largo de 2.5 años."
        },
        longDescriptionKey: {
            en: "Global finance operations faced severe SOX audit deficiencies due to decentralized approvals. Managed and led a critical 2.5-year enterprise initiative, engineering a full-suite SOX-compliant automation workflow. Programmatically enforced strict Segregation of Duties (SoD) and closed the audit loop by automatically writing JDE posting details back to immutable SharePoint ledgers.",
            fr: "Les opérations financières mondiales présentaient des lacunes d'audit SOX. Direction d'une initiative critique de 2,5 ans, ingénierie d'un flux de travail d'automatisation conforme SOX. Application stricte de la séparation des tâches (SoD) et inscription des détails JDE dans des registres SharePoint immuables.",
            pt: "As operações financeiras globais enfrentavam deficiências severas nas auditorias SOX devido a aprovações descentralizadas. Liderou a gestão de uma iniciativa corporativa crítica de 2,5 anos, desenvolvendo uma suite completa de workflows de automação compatíveis com SOX. Aplicou de forma programática uma rigorosa Segregação de Funções (SoD) e encerrou o ciclo de auditoria ao escrever automaticamente os detalhes do JDE em registos imutáveis do SharePoint.",
            es: "Las operaciones financieras globales enfrentaban deficiencias severas en auditorías SOX. Liderazgo y diseño de una iniciativa empresarial crítica de 2.5 años, construyendo una suite de flujos en total cumplimiento. Aplicó Segregación de Funciones (SoD) de forma programática y registró detalles (JDE) en tablas SharePoint inmutables."
        },
        tech: ["Azure", "Power Apps", "Power Automate", "SharePoint"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C7",
        titleKey: {
            en: "Barbados Accounting SOX Hardening",
            fr: "Renforcement SOX pour la Comptabilité (Barbade)",
            pt: "Reforço SOX para Contabilidade (Barbados)",
            es: "Endurecimiento SOX para Contabilidad (Barbados)"
        },
        shortDescriptionKey: {
            en: "Re-architected financial supplier workflows with centralized Delegation of Authority (DoA) in SharePoint.",
            fr: "Réorganisation des flux fournisseurs avec Délégation d'Autorité (DoA) centralisée dans SharePoint.",
            pt: "Reestruturação de workflows financeiros com Delegação de Autoridade (DoA) centralizada no SharePoint.",
            es: "Reestructuración de flujos financieros con Delegación de Autoridad (DoA) centralizada en SharePoint."
        },
        longDescriptionKey: {
            en: "Accounting departments lacked programmatic access controls, leading to repeated SOX compliance gaps. Re-architected financial supplier workflows over a 2.5-year enterprise remediation initiative. Centralized Delegation of Authority (DoA) matrices within governed SharePoint lists and utilized Power Automate to enforce strict access boundaries while generating real-time monitoring logs.",
            fr: "Les départements comptables manquaient de contrôles d'accès programmatiques. Réorganisation des flux fournisseurs sur 2,5 ans. Centralisation des matrices de Délégation d'Autorité (DoA) via des listes SharePoint et utilisation de Power Automate pour imposer des limites d'accès strictes (journaux en temps réel).",
            pt: "Os departamentos de contabilidade careciam de controlos de acesso programáticos, resultando em falhas repetidas na SOX. Reestruturação dos workflows de fornecedores financeiros ao longo de uma iniciativa de remediação de 2,5 anos. Centralizou as matrizes de Delegação de Autoridade (DoA) em listas governadas no SharePoint e utilizou o Power Automate para impor limites rigorosos de acesso e gerar relatórios de monitorização em tempo real.",
            es: "Los departamentos de contabilidad carecían de controles de acceso, resultando en fallos repetidos en SOX. Reestructuración de flujos de proveedores a lo largo de 2.5 años de remediación empresarial. Centralizó matrices de Delegación de Autoridad (DoA) en listas gobernadas en SharePoint, usando Power Automate para generar informes en vivo."
        },
        tech: ["Azure", "Microsoft Approvals", "Power Automate", "SharePoint"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C8",
        titleKey: {
            en: "Excel to Snowflake Automated Pipeline",
            fr: "Pipeline Automatisé Excel vers Snowflake",
            pt: "Pipeline Automatizado de Excel para Snowflake",
            es: "Pipeline Automatizado de Excel a Snowflake"
        },
        shortDescriptionKey: {
            en: "Zero-maintenance Python/GitHub Actions ETL pipeline with Snowflake schema evolution.",
            fr: "Pipeline ETL Python/GitHub Actions zéro maintenance avec évolution de schéma Snowflake.",
            pt: "Pipeline ETL zero-manutenção via Python/GitHub Actions com evolução de esquema do Snowflake.",
            es: "Pipeline ETL cero-mantenimiento vía Python/GitHub Actions con evolución de esquema de Snowflake."
        },
        longDescriptionKey: {
            en: "Legacy data ingestion heavily relied on manual Excel uploads that broke data structures constantly. Architected a 'zero-maintenance', self-healing ETL pipeline leveraging Python and GitHub Actions. Exploited Snowflake's schema evolution capabilities to intelligently inspect and dynamically adapt target structures prior to ingestion, reducing data latency from days to just minutes.",
            fr: "L'ingestion de données héritées via Excel corrompait fréquemment les structures. Architecture d'un pipeline ETL 'zéro maintenance' et auto-réparateur avec Python et GitHub Actions. Exploite l'évolution de schéma Snowflake pour adapter dynamiquement les structures avant ingestion, réduisant la latence de données.",
            pt: "A ingestão de dados legados dependia de carregamentos manuais em Excel que corrompiam as estruturas constantemente. Arquitetura de um pipeline ETL 'auto-reparável' e de zero-manutenção utilizando Python e GitHub Actions. Explorou as capacidades de evolução de esquema do Snowflake para inspecionar e adaptar dinamicamente as tabelas antes da ingestão, reduzindo a latência dos dados de dias para minutos.",
            es: "La ingesta manual de archivos Excel causaba rupturas constantes en las estructuras de datos. Arquitectura de un pipeline ETL 'autocurativo' y sin mantenimiento vía Python y GitHub Actions. Utilizó la evolución de esquema de Snowflake para adaptar dinámicamente las tablas antes de la ingesta, reduciendo la latencia de días a minutos."
        },
        tech: ["Azure", "GitHub Actions", "Python", "Snowflake"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C9",
        titleKey: {
            en: "SharePoint Cross-Site Audit Utility",
            fr: "Utilitaire d'Audit SharePoint Cross-Site",
            pt: "Utilitário de Auditoria SharePoint Cross-Site",
            es: "Utilidad de Auditoría SharePoint Cross-Site"
        },
        shortDescriptionKey: {
            en: "Standardized SPFx web part in TypeScript generating verifiable item counts for SOX audits.",
            fr: "Composant Web SPFx standardisé en TypeScript générant des comptages vérifiables (audits SOX).",
            pt: "Web part SPFx padronizada em TypeScript gerando contagens de itens verificáveis para auditorias SOX.",
            es: "Elemento web SPFx estandarizado en TypeScript generando recuentos de elementos verificables para auditorías SOX."
        },
        longDescriptionKey: {
            en: "Non-technical compliance auditors wasted hours manually attempting to count complex, cross-site list items. Developed a standardized, highly reusable SharePoint Framework (SPFx) web part utilizing TypeScript. Provided an intuitive React UI for auditors to apply specific metadata filters and instantly generate certified, verifiable counts, cutting audit preparation time to seconds.",
            fr: "Les auditeurs perdaient des heures à compter manuellement les éléments des listes inter-sites. Développement d'un composant SharePoint Framework (SPFx) en TypeScript. Interface utilisateur React intuitive pour appliquer des filtres spécifiques et générer instantanément des comptages certifiés, réduisant la préparation à quelques secondes.",
            pt: "Os auditores não técnicos perdiam horas a tentar contar manualmente itens de listas complexas entre sites. Desenvolvimento de uma web part do SharePoint Framework (SPFx) padronizada e reutilizável em TypeScript. Disponibilizou uma UI intuitiva para os auditores aplicarem filtros de metadados específicos e gerarem instantaneamente contagens certificadas e verificáveis, reduzindo o tempo de preparação de auditoria para segundos.",
            es: "Los auditores de cumplimiento perdían horas intentando contar manualmente elementos complejos en SharePoint. Desarrollo de un elemento web SharePoint Framework (SPFx) estandarizado en TypeScript. Proporcionó una interfaz intuitiva para aplicar filtros instantáneos, reduciendo el tiempo de preparación de auditoría a segundos."
        },
        tech: ["SharePoint", "TypeScript"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C11",
        titleKey: {
            en: "Ask HR: Enterprise AI Agent",
            fr: "Ask HR: Agent IA d'Entreprise",
            pt: "Ask HR: Agente Corporativo de IA",
            es: "Ask HR: Agente Empresarial de IA"
        },
        shortDescriptionKey: {
            en: "Metadata-driven HR AI agent using Copilot Studio, integrating PeopleSoft data for secure responses.",
            fr: "Agent IA RH via Copilot Studio, intégrant les données PeopleSoft pour des réponses sécurisées.",
            pt: "Agente de IA corporativo em Copilot Studio integrando dados PeopleSoft para respostas seguras.",
            es: "Agente de IA corporativo en Copilot Studio integrando datos PeopleSoft para respuestas seguras."
        },
        longDescriptionKey: {
            en: "HR teams were overwhelmed by repetitive policy questions that varied wildly by employee location. Architected a metadata-first AI agent in Copilot Studio connected to synced PeopleSoft/AD data to ensure perfect audience-aware filtering. Redesigned overarching Azure DLP governance policies and was directly entrusted to write organizational articles driving secure enterprise AI adoption.",
            fr: "Les RH étaient débordées par les questions sur les politiques internes. Architecture d'un agent IA (Copilot Studio) connecté aux données PeopleSoft/AD pour un filtrage d'audience parfait. Refonte des politiques de gouvernance Azure DLP et rédaction d'articles favorisant l'adoption sécurisée de l'IA en entreprise.",
            pt: "As equipas de RH estavam sobrecarregadas com perguntas repetitivas cujas respostas variavam consoante a localização do colaborador. Arquitetura de um agente de IA no Copilot Studio ligado a dados sincronizados do PeopleSoft/AD para garantir um filtro de audiência perfeito. Redesenhou as políticas globais de governança Azure DLP e foi diretamente incumbido de redigir os artigos organizacionais para impulsionar a adoção corporativa de IA.",
            es: "Los equipos de RRHH estaban abrumados con preguntas repetitivas de políticas. Arquitectura de un agente de IA en Copilot Studio conectado a datos de PeopleSoft/AD para garantizar un filtro de audiencia perfecto. Rediseñó políticas Azure DLP y fue encargado de escribir artículos organizacionales impulsando la adopción de IA."
        },
        tech: ["Azure", "Copilot Studio", "Power Automate", "SharePoint"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C12",
        titleKey: {
            en: "GQS Hub Automation (Cosmos DB Ecosystem)",
            fr: "Automatisation du Hub GQS (Cosmos DB)",
            pt: "Automação do GQS Hub (Cosmos DB)",
            es: "Automatización de GQS Hub (Cosmos DB)"
        },
        shortDescriptionKey: {
            en: "Highly scalable hybrid ecosystem using Azure Cosmos DB, React.js, and C# to bypass SharePoint limits.",
            fr: "Écosystème hybride via Azure Cosmos DB, React.js et C# pour contourner les limites de SharePoint.",
            pt: "Ecossistema híbrido altamente escalável usando Azure Cosmos DB e React.js para contornar limites do SharePoint.",
            es: "Ecosistema híbrido altamente escalable usando Azure Cosmos DB y React.js para eludir límites de SharePoint."
        },
        longDescriptionKey: {
            en: "SharePoint's strict 5,000-item List View Threshold continuously crippled global document distribution. Architected a highly scalable hybrid data ecosystem utilizing Azure Cosmos DB. Developed a custom React.js and C# application acting as the master distribution control center, successfully orchestrating idempotent document upserts across 24 global manufacturing plants.",
            fr: "La limite des 5 000 éléments SharePoint bloquait la distribution de documents mondiaux. Architecture d'un écosystème hybride via Azure Cosmos DB. Application React.js et C# agissant comme centre de contrôle, orchestrant des insertions de documents idempotentes dans 24 usines mondiales.",
            pt: "O limite estrito de 5.000 itens por visualização no SharePoint bloqueava constantemente a distribuição global de documentos. Arquitetura de um ecossistema de dados híbrido e escalável utilizando o Azure Cosmos DB. Desenvolveu uma aplicação de centro de controlo em React.js e C#, orquestrando com sucesso a inserção idempotente de documentos em 24 fábricas globais de manufatura.",
            es: "El límite estricto de 5,000 elementos en SharePoint bloqueaba la distribución global de documentos. Arquitectura de un ecosistema de datos híbrido utilizando Azure Cosmos DB. Desarrolló un centro de control principal en React.js y C#, orquestando envíos de documentos a 24 plantas globales."
        },
        tech: ["Azure", "C#", "React"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C13",
        titleKey: {
            en: "SOX Real-Time Inventory Dashboard",
            fr: "Tableau de Bord d'Inventaire SOX en Temps Réel",
            pt: "Dashboard SOX de Inventário em Tempo Real",
            es: "Panel SOX de Inventario en Tiempo Real"
        },
        shortDescriptionKey: {
            en: "Real-time ETL pipeline extracting JDE ERP data to Snowflake for dynamic Tableau visualization.",
            fr: "Pipeline ETL extrayant les données ERP vers Snowflake pour une visualisation dynamique sous Tableau.",
            pt: "Pipeline ETL em tempo real extraindo dados do ERP para Snowflake e visualização no Tableau.",
            es: "Pipeline ETL en tiempo real extrayendo datos del ERP a Snowflake y visualización en Tableau."
        },
        longDescriptionKey: {
            en: "Internal compliance auditors lacked visibility into high-risk, multimillion-dollar inventory adjustments. Engineered a real-time ETL pipeline extracting JDE ERP data directly into Snowflake. Visualized critical inventory adjustments via dynamic Tableau dashboards, instantly flagging high-risk variances for continuous SOX audit monitoring over a 2.5-year roadmap.",
            fr: "Les auditeurs internes manquaient de visibilité sur les ajustements de stocks à haut risque. Ingénierie d'un pipeline ETL en temps réel (données ERP vers Snowflake). Visualisation sous Tableau pour signaler instantanément les écarts à haut risque pour la surveillance continue des audits SOX (feuille de route de 2,5 ans).",
            pt: "Os auditores internos de conformidade não tinham visibilidade sobre os ajustes de inventário de alto risco. Engenharia de um pipeline ETL em tempo real, extraindo dados do ERP JDE diretamente para o Snowflake. A visualização no Tableau permitiu sinalizar instantaneamente desvios multimilionários críticos para monitorização contínua de auditoria SOX num roadmap de 2,5 anos.",
            es: "Los auditores internos carecían de visibilidad sobre los ajustes de inventario multimillonarios de alto riesgo. Ingeniería de un pipeline ETL extrayendo datos del ERP directamente a Snowflake. La visualización en Tableau permitió señalar instantáneamente desviaciones críticas para las auditorías SOX en una ventana de 2.5 años."
        },
        tech: ["ERP", "ETL", "Snowflake", "Tableau"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C14",
        titleKey: {
            en: "Enterprise Workflow Telemetry Hub",
            fr: "Hub Télémétrique de Flux de Travail",
            pt: "Hub de Telemetria para Workflows",
            es: "Hub de Telemetría para Flujos de Trabajo"
        },
        shortDescriptionKey: {
            en: "Resilient Parent-Child workflow telemetry pattern via Power Automate with a centralized Logger API.",
            fr: "Modèle télémétrique de flux de travail via Power Automate avec une API de journalisation centralisée.",
            pt: "Padrão de telemetria resiliente para workflows em Power Automate com API de registo central.",
            es: "Patrón de telemetría resiliente para flujos en Power Automate con API de registro central."
        },
        longDescriptionKey: {
            en: "Unhandled API schemas caused massive, silent workflow failures across enterprise processes. Architected a highly resilient Parent-Child workflow telemetry pattern in Power Automate. Built a centralized Logger API utilizing defensive WDL expressions to cleanly intercept unhandled null values, completely preventing system crashes and dramatically accelerating MTTR.",
            fr: "Les schémas d'API non gérés provoquaient d'énormes pannes silencieuses. Architecture d'un modèle télémétrique de flux de travail Parent-Enfant (Power Automate). Création d'une API de journalisation avec des expressions WDL défensives pour intercepter les valeurs nulles, évitant les plantages du système et accélérant le MTTR.",
            pt: "A alteração não controlada de esquemas de API causava falhas silenciosas e massivas nos processos da empresa. Arquitetura de um padrão de telemetria Parent-Child altamente resiliente no Power Automate. Construção de uma API central de Logging utilizando expressões WDL defensivas para intercetar valores nulos, prevenindo totalmente as quebras de sistema e acelerando radicalmente o MTTR.",
            es: "La alteración no controlada de esquemas de API causaba fallos silenciosos en los flujos. Arquitectura de un patrón de telemetría Parent-Child en Power Automate. Construcción de una API central de Logging utilizando expresiones WDL defensivas para interceptar valores nulos, previniendo caídas del sistema y acelerando radicalmente el MTTR."
        },
        tech: ["JSON", "Power Automate", "REST APIs", "SharePoint", "WDL"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    },
    {
        id: "C15",
        titleKey: {
            en: "Treasury Automation & Risk Scoring",
            fr: "Automatisation de la Trésorerie et Notation des Risques",
            pt: "Automação de Tesouraria e Avaliação de Riscos",
            es: "Automatización de Tesorería y Evaluación de Riesgos"
        },
        shortDescriptionKey: {
            en: "Automated vendor risk platform utilizing Azure Logic Apps, Power Automate, and deterministic algorithms.",
            fr: "Plateforme automatisée de risques via Azure Logic Apps, Power Automate et des algorithmes déterministes.",
            pt: "Plataforma de avaliação de risco automatizada via Azure Logic Apps, Power Automate e algoritmos.",
            es: "Plataforma de evaluación de riesgo automatizada vía Azure Logic Apps, Power Automate y algoritmos."
        },
        longDescriptionKey: {
            en: "Manual Excel-based vendor risk scoring was inconsistent and lacked any meaningful auditability. Designed an end-to-end automated platform utilizing Azure Logic Apps for email-based vendor intake. Replaced manual processes with deterministic Power Automate algorithms to automatically calculate risk scores, ensuring 100% standardized, SOX-aligned downstream handoffs.",
            fr: "La notation manuelle des risques sous Excel était incohérente. Conception d'une plateforme automatisée utilisant Azure Logic Apps pour l'admission des fournisseurs via e-mail. Remplacement des processus manuels par des algorithmes déterministes (Power Automate) pour calculer automatiquement les scores de risque (conformité SOX 100%).",
            pt: "A avaliação manual de risco de fornecedores baseada em Excel era inconsistente e não oferecia rastreabilidade. Conceção de uma plataforma automatizada ponta-a-ponta utilizando o Azure Logic Apps para admissão via e-mail. Substituiu os processos manuais por algoritmos determinísticos em Power Automate para calcular automaticamente scores de risco, garantindo uma conformidade e padronização totais para as auditorias SOX.",
            es: "La evaluación de riesgo manual basada en Excel era inconsistente e imposible de auditar. Diseño de una plataforma automatizada utilizando Azure Logic Apps. Sustituyó procesos manuales por algoritmos deterministas en Power Automate para calcular automáticamente puntajes de riesgo, garantizando cumplimiento total con SOX."
        },
        tech: ["Azure", "Microsoft 365", "Power Automate"],
        repoUrl: "", docsUrl: "", demoUrl: "", videoUrl: ""
    }
];