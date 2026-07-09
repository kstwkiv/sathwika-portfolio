export const portfolioData = {
  name: 'Sathwika Kurma',
  taglines: [
    'Backend Engineer',
    'Data Engineer',
    'Full-Stack Developer',
    '.NET & Cloud Enthusiast',
  ],
  summary:
    'Computer Science undergrad at LPU (2026) with hands-on experience building scalable microservices, cloud data pipelines, and RESTful APIs. Currently training at Capgemini on .NET full-stack. Top 3% nationally at Amazon ML Summer School. I love turning complex data and systems problems into clean, working solutions.',
  email: 'sathwikakurma1@gmail.com',
  phone: '+91-9573171390',
  location: 'Hyderabad, Telangana, India',
  links: {
    linkedin: 'https://linkedin.com/in/sathwika-kurma',
    github: 'https://github.com/kstwkiv',
    leetcode: 'https://leetcode.com/u/krystleks',
  },

  stats: [
    { value: '400+', label: 'LeetCode Problems' },
    { value: '1643', label: 'LeetCode Rating' },
    { value: 'Top 3 %', label: 'Amazon ML School' },
    { value: '8.01', label: 'CGPA' },
  ],

  skills: [
    {
      category: 'Languages',
      icon: '💻',
      items: ['C#', 'Python', 'SQL', 'JavaScript (ES6+)', 'TypeScript', 'C++', 'HTML5', 'CSS3'],
    },
    {
      category: 'Backend & APIs',
      icon: '⚙️',
      items: ['ASP.NET Core', 'RESTful APIs', 'Microservices', 'RabbitMQ', 'API Gateway', 'JWT Auth', 'Node.js'],
    },
    {
      category: 'Frontend',
      icon: '🎨',
      items: ['Angular', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'Data & Cloud',
      icon: '☁️',
      items: ['BigQuery', 'ETL Pipelines', 'Data Modeling', 'Apache Spark', 'PySpark', 'Apache Airflow', 'AWS S3', 'AWS Glue'],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      items: ['SQL Server', 'Query Optimization', 'Star Schema', 'Data Modeling'],
    },
    {
      category: 'DevOps & Tools',
      icon: '🛠️',
      items: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'SDLC', 'Agile/Scrum'],
    },
    {
      category: 'ML & Analytics',
      icon: '🤖',
      items: ['XGBoost', 'SVM', 'Random Forest', 'ARIMA', 'Time-Series', 'Feature Engineering', 'FAISS', 'NLP'],
    },
  ],

  experience: [
    {
      company: 'Capgemini',
      role: 'Trainee Engineer',
      program: 'Full Stack / .NET Training Program',
      period: 'Dec 2025 – May 2026',
      type: 'Training',
      color: '#0070AD',
      points: [
        'Building enterprise-style applications using C#, ASP.NET Core, SQL Server, and Angular with focus on scalable application design.',
        'Developing RESTful APIs and backend workflows, applying clean architecture and modular service patterns.',
        'Practising agile development methodologies, collaborative engineering workflows, and code quality standards.',
        'Gaining hands-on exposure to Docker, authentication workflows, debugging, and modern software engineering practices.',
      ],
    },
    {
      company: 'Amazon',
      role: 'Machine Learning Trainee',
      program: 'ML Summer School · Top 3% Nationally',
      period: 'Aug 2025 – Sept 2025',
      type: 'Achievement',
      color: '#FF9900',
      points: [
        'Applied supervised and unsupervised ML algorithms (XGBoost, SVM, Random Forest) achieving up to 95% model accuracy on structured datasets.',
        'Analysed accuracy–scalability trade-offs and aligned model selection with real-world product constraints.',
        'Completed advanced coursework in statistical foundations, model evaluation, and large-scale ML system design.',
      ],
    },
    {
      company: 'Infosys Springboard',
      role: 'Project Intern',
      program: 'Analytics & NLP',
      period: 'Oct 2024 – Jan 2025',
      type: 'Virtual Internship',
      color: '#007CC3',
      points: [
        'Designed end-to-end analytics workflows using Python, SQL, and NLP to extract insights from unstructured financial documents.',
        'Built FAISS-based semantic search pipelines, improving document retrieval precision by 35%.',
        'Delivered technical documentation, dashboards, and stakeholder reports, strengthening client-facing communication skills.',
      ],
    },
  ],

  projects: [
    {
      title: 'Mystic Tarot',
      subtitle: 'Full-Stack Digital Consultation Platform',
      period: 'Ongoing',
      tags: ['ASP.NET Core', 'Angular', 'SQL Server', 'Docker', 'REST APIs'],
      category: 'fullstack',
      github: 'https://github.com/kstwkiv/MysticTarot',
      color: '#9b59b6',
      icon: '🔮',
      points: [
        'Developing a full-stack platform for booking and managing personalised digital consultation sessions.',
        'Designing secure RESTful APIs for authentication, scheduling, session management, and user workflows.',
        'Building responsive frontend components and interactive user experiences using Angular and TypeScript.',
        'Implementing database-driven booking systems and payment-ready architecture with Docker containerisation.',
      ],
    },
    {
      title: 'CraveKart',
      subtitle: 'Microservices Food Delivery Platform',
      period: 'April 2026',
      tags: ['ASP.NET Core', 'RabbitMQ', 'Docker', 'SQL Server', 'API Gateway', 'C#'],
      category: 'backend',
      github: 'https://github.com/kstwkiv/CraveKart',
      color: '#e74c3c',
      icon: '🍔',
      points: [
        'Engineered a distributed microservices backend using ASP.NET Core and RESTful APIs.',
        'Implemented asynchronous inter-service communication via RabbitMQ for scalable, decoupled architecture.',
        'Designed API Gateway routing and centralised request handling for authentication and service orchestration.',
        'Containerised all services using Docker and Docker Compose for consistent deployment environments.',
      ],
    },
    {
      title: 'Cloud Data Pipeline',
      subtitle: 'E-Commerce Analytics Platform',
      period: 'Sept 2025',
      tags: ['BigQuery', 'Python', 'SQL', 'ETL'],
      category: 'data',
      github: 'https://github.com/kstwkiv/Ecommerce-sales-analytics-with-BigQuery',
      color: '#27ae60',
      icon: '📊',
      points: [
        'Architected a cloud-native analytics pipeline following SDLC principles with star-schema data models over 1M+ records.',
        'Optimised analytical queries, reducing dashboard refresh latency by 70% and query cost by 40%.',
        'Automated ETL workflows with validation and error-handling mechanisms to improve system reliability.',
        'Translated raw transactional data into business-ready metrics for downstream decision-making.',
      ],
    },
    {
      title: 'RBI Investment Forecasting',
      subtitle: 'Time-Series Analysis & ML Forecasting',
      period: 'July 2025',
      tags: ['Python', 'ARIMA', 'XGBoost', 'Time-Series', 'Feature Engineering'],
      category: 'data',
      github: 'https://github.com/kstwkiv/RBI_FORECAST_MODELS',
      color: '#f39c12',
      icon: '📈',
      points: [
        'Developed forecasting systems on RBI investment data, reducing RMSE by 85% through iterative model tuning.',
        'Implemented feature engineering pipelines including lag variables and rolling statistics grounded in economic logic.',
        'Compared statistical and ML approaches, documenting trade-offs in accuracy, interpretability, and maintainability.',
        'Performed structured error analysis to improve reliability and explainability of forecasts.',
      ],
    },
    {
      title: 'Product Recommendation System',
      subtitle: 'Advanced SQL & Analytics',
      period: 'Mar 2025',
      tags: ['SQL', 'RFM Segmentation', 'Association Rules', 'Analytics'],
      category: 'data',
      github: 'https://github.com/kstwkiv/Product-Recommendation-System',
      color: '#3498db',
      icon: '🛒',
      points: [
        'Designed SQL-driven analytical pipelines to process and analyze 500k+ transactional records.',
        'Applied RFM segmentation and association rule mining to derive recommendation strategies.',
        'Improved query performance by 60% through indexing, query restructuring, and execution plan analysis.',
        'Aligned analytical outputs with real-world product and customer engagement use cases.',
      ],
    },
    {
      title: 'LPU Connect',
      subtitle: 'University Collaboration Platform',
      period: 'Dec 2025',
      tags: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
      category: 'fullstack',
      github: 'https://github.com/kstwkiv/LPU-Connect',
      color: '#1abc9c',
      icon: '🎓',
      points: [
        'Built a web-based platform connecting students and faculty with skill-based peer discovery.',
        'Implemented user registration, authentication, and searchable user profiles across departments.',
        'Developed skill-search feature allowing users to find peers by technology or domain.',
        'Designed responsive UI components with a focus on usability and accessibility.',
      ],
    },
  ],

  certifications: [
    {
      title: 'Supervised Machine Learning: Regression & Classification',
      issuer: 'DeepLearning.AI',
      icon: '🧠',
    },
    {
      title: 'SQL for Data Science',
      issuer: 'University of California, Davis',
      icon: '🗃️',
    },
    {
      title: 'Data Science Job Simulation',
      issuer: 'British Airways (Forage)',
      icon: '✈️',
    },
  ],

  achievements: [
    {
      title: 'Amazon ML Summer School',
      detail: 'Top 3% Nationally — Aug–Sept 2025',
      icon: '🏆',
    },
    {
      title: 'GATE CS 2026',
      detail: 'Qualified GATE CS 2026',
      icon: '🎓',
    },
    {
      title: '400+ LeetCode Problems',
      detail: 'Rating: 1643 — Algorithms & SQL',
      icon: '⚡',
    },
    {
      title: 'Advanced SQL — 4 Star',
      detail: '100% Score on HackerRank',
      icon: '🌟',
    },
  ],

  education: {
    university: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2022 – 2026',
    cgpa: '8.01 / 10',
    location: 'Jalandhar, Punjab',
  },
};
