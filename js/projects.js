/**
 * Project data for portfolio website
 * Contains information about projects to be displayed
 */

const projectsData = [
    {
        id: "project1",
        titleKey: {
            en: "Global Application Suite",
            fr: "Suite d'Applications Globales",
            pt: "Suite Global de Aplicações",
            es: "Suite de Aplicaciones Globales"
        },
        descriptionKey: {
            en: "Developed a comprehensive suite of interconnected applications for managing international business operations. The system integrates inventory management, CRM, and analytics in a unified dashboard that supports real-time data synchronization across multiple regions.",
            fr: "Développé une suite complète d'applications interconnectées pour gérer les opérations commerciales internationales. Le système intègre la gestion des stocks, la GRC et l'analyse dans un tableau de bord unifié qui prend en charge la synchronisation des données en temps réel dans plusieurs régions.",
            pt: "Desenvolvi uma suíte abrangente de aplicativos interconectados para gerenciar operações de negócios internacionais. O sistema integra gerenciamento de inventário, CRM e análises em um painel unificado que suporta sincronização de dados em tempo real em várias regiões.",
            es: "Desarrollé una suite completa de aplicaciones interconectadas para gestionar operaciones comerciales internacionales. El sistema integra gestión de inventario, CRM y análisis en un panel unificado que admite sincronización de datos en tiempo real en múltiples regiones."
        },
        imageUrl: "images/pic1.jpg",
        tech: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
        repoUrl: "https://github.com/livioangelim/global-app-suite",
        docsUrl: "https://github.com/livioangelim/global-app-suite/wiki",
        demoUrl: "https://global-app-demo.livioangelim.com",
        videoUrl: ""
    },
    {
        id: "project2",
        titleKey: {
            en: "AI Loan Predictor",
            fr: "Prédicteur de Prêt IA",
            pt: "Preditor de Empréstimos com IA",
            es: "Predictor de Préstamos con IA"
        },
        descriptionKey: {
            en: "Created a machine learning solution that revolutionized the loan approval process for a major financial institution. The system analyzes applicant data and predicts loan eligibility with 97.3% accuracy, reducing the processing time from 5 days to just 2 seconds.",
            fr: "Créé une solution d'apprentissage automatique qui a révolutionné le processus d'approbation des prêts pour une institution financière majeure. Le système analyse les données des demandeurs et prédit l'éligibilité aux prêts avec une précision de 97,3%, réduisant le temps de traitement de 5 jours à seulement 2 secondes.",
            pt: "Criei uma solução de aprendizado de máquina que revolucionou o processo de aprovação de empréstimos para uma importante instituição financeira. O sistema analisa os dados dos solicitantes e prevê a elegibilidade do empréstimo com 97,3% de precisão, reduzindo o tempo de processamento de 5 dias para apenas 2 segundos.",
            es: "Creé una solución de aprendizaje automático que revolucionó el proceso de aprobación de préstamos para una importante institución financiera. El sistema analiza los datos de los solicitantes y predice la elegibilidad del préstamo con un 97,3% de precisión, reduciendo el tiempo de procesamiento de 5 días a solo 2 segundos."
        },
        imageUrl: "images/pic2.jpg",
        tech: ["Python", "TensorFlow", "Scikit-learn", "Flask", "AWS"],
        repoUrl: "https://github.com/livioangelim/ai-loan-predictor",
        docsUrl: "https://github.com/livioangelim/ai-loan-predictor/wiki",
        demoUrl: "https://ai-loan-demo.livioangelim.com",
        videoUrl: ""
    },
    {
        id: "project3",
        titleKey: {
            en: "Cloud Deployment Automation",
            fr: "Automatisation de Déploiement Cloud",
            pt: "Automação de Implantação na Nuvem",
            es: "Automatización de Despliegue en la Nube"
        },
        descriptionKey: {
            en: "Designed and implemented an infrastructure-as-code solution that automates the deployment and scaling of microservices. The system reduced deployment time by 87% and virtually eliminated configuration-related errors through comprehensive validation checks.",
            fr: "Conçu et mis en œuvre une solution d'infrastructure sous forme de code qui automatise le déploiement et la mise à l'échelle des microservices. Le système a réduit le temps de déploiement de 87% et pratiquement éliminé les erreurs liées à la configuration grâce à des vérifications de validation complètes.",
            pt: "Projetei e implementei uma solução de infraestrutura como código que automatiza a implantação e o dimensionamento de microsserviços. O sistema reduziu o tempo de implantação em 87% e praticamente eliminou erros relacionados à configuração por meio de verificações abrangentes de validação.",
            es: "Diseñé e implementé una solución de infraestructura como código que automatiza el despliegue y escalado de microservicios. El sistema redujo el tiempo de despliegue en un 87% y prácticamente eliminó los errores relacionados con la configuración mediante exhaustivas comprobaciones de validación."
        },
        imageUrl: "images/pic3.jpg",
        tech: ["Terraform", "AWS", "Docker", "Kubernetes", "Jenkins"],
        repoUrl: "https://github.com/livioangelim/cloud-deploy-automation",
        docsUrl: "https://github.com/livioangelim/cloud-deploy-automation/wiki",
        demoUrl: "",
        videoUrl: ""
    },
    {
        id: "project4",
        titleKey: {
            en: "Poker Hands Analyzer",
            fr: "Analyseur de Mains de Poker",
            pt: "Analisador de Mãos de Poker",
            es: "Analizador de Manos de Póker"
        },
        descriptionKey: {
            en: "Built a sophisticated application that analyzes poker hands in real-time and provides statistical insights to improve gameplay. The system can calculate odds, suggest optimal moves, and learn from previous game patterns to enhance strategy recommendations.",
            fr: "Construit une application sophistiquée qui analyse les mains de poker en temps réel et fournit des informations statistiques pour améliorer le jeu. Le système peut calculer les cotes, suggérer des mouvements optimaux et apprendre des modèles de jeu précédents pour améliorer les recommandations de stratégie.",
            pt: "Construí um aplicativo sofisticado que analisa mãos de poker em tempo real e fornece insights estatísticos para melhorar a jogabilidade. O sistema pode calcular probabilidades, sugerir movimentos ideais e aprender com padrões de jogos anteriores para aprimorar as recomendações de estratégia.",
            es: "Construí una aplicación sofisticada que analiza manos de póker en tiempo real y proporciona información estadística para mejorar el juego. El sistema puede calcular probabilidades, sugerir movimientos óptimos y aprender de patrones de juegos anteriores para mejorar las recomendaciones estratégicas."
        },
        imageUrl: "images/poker.jpg",
        tech: ["C++", "Qt", "OpenCV", "SQLite", "Statistical Analysis"],
        repoUrl: "https://github.com/livioangelim/poker-analyzer",
        docsUrl: "https://github.com/livioangelim/poker-analyzer/wiki",
        demoUrl: "https://poker.livioangelim.com",
        videoUrl: ""
    },
    {
        id: "project5",
        titleKey: {
            en: "Secure Messaging Platform",
            fr: "Plateforme de Messagerie Sécurisée",
            pt: "Plataforma de Mensagens Seguras",
            es: "Plataforma de Mensajería Segura"
        },
        descriptionKey: {
            en: "Developed an end-to-end encrypted messaging platform that prioritizes user privacy and data security. The application features self-destructing messages, secure file sharing, and zero-knowledge architecture ensuring that even the server cannot access message content.",
            fr: "Développé une plateforme de messagerie chiffrée de bout en bout qui donne la priorité à la confidentialité des utilisateurs et à la sécurité des données. L'application propose des messages à autodestruction, un partage de fichiers sécurisé et une architecture à connaissance zéro garantissant que même le serveur ne peut pas accéder au contenu des messages.",
            pt: "Desenvolvi uma plataforma de mensagens criptografadas de ponta a ponta que prioriza a privacidade do usuário e a segurança de dados. O aplicativo apresenta mensagens autodestrutivas, compartilhamento seguro de arquivos e arquitetura de conhecimento zero, garantindo que nem mesmo o servidor possa acessar o conteúdo das mensagens.",
            es: "Desarrollé una plataforma de mensajería cifrada de extremo a extremo que prioriza la privacidad del usuario y la seguridad de los datos. La aplicación incluye mensajes autodestructivos, intercambio seguro de archivos y arquitectura de conocimiento cero que garantiza que ni siquiera el servidor pueda acceder al contenido de los mensajes."
        },
        imageUrl: "images/pic4.jpg",
        tech: ["TypeScript", "React", "Node.js", "WebRTC", "Signal Protocol"],
        repoUrl: "https://github.com/livioangelim/secure-messaging",
        docsUrl: "https://github.com/livioangelim/secure-messaging/wiki",
        demoUrl: "https://secure-msg.livioangelim.com",
        videoUrl: "https://www.youtube.com/watch?v=example3"
    }
];