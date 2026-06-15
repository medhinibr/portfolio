import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronRight,
  ArrowUpRight,
  Send,
  CheckCircle,
  ExternalLink,
  Calendar,
  Terminal,
  Globe,
  Cpu,
  Code,
  Sparkles,
  Zap,
  TrendingUp,
  Activity,
  Mail,
  Shield,
  Database
} from 'lucide-react';

// Custom inline SVG icons for brands (Github, Linkedin, Linktree/Instagram)
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LinktreeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L2 22h20L12 2zM12 6l7.5 13h-15L12 6z" />
  </svg>
);

const TwoLineMenuIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
);

// Technology letter mappings for "MEDHINI"
const medhiniLetters = [
  { char: 'M', suffix: 'YSQL', prefix: '', type: 'suffix', logText: 'MYSQL // Relational database modeling, schema design, and query optimization' },
  { char: 'E', suffix: 'XPRESS', prefix: '', type: 'suffix', logText: 'EXPRESS.JS // Minimalist web framework for Node.js REST API backends' },
  { char: 'D', suffix: 'OCKER', prefix: '', type: 'suffix', logText: 'DOCKER // Microservices containerization, image layering, and dev environment scaling' },
  { char: 'H', suffix: 'YBRID', prefix: '', type: 'suffix', logText: 'HYBRID SYSTEMS // Unified cross-platform app ecosystems and hybrid hosting' },
  { char: 'I', suffix: 'NFOSYS', prefix: '', type: 'suffix', logText: 'INFOSYS SPRINGBOARD // Data Science internship and pragati path cohort execution' },
  { char: 'N', suffix: 'ODE', prefix: '', type: 'suffix', logText: 'NODE.JS // Event-driven backend development and high-performance server runtimes' },
  { char: 'I', suffix: '', prefix: 'A', type: 'prefix', logText: 'AI & ML // LLMs, prompt engineering, and intelligent cloud-native agents' }
];

const getFullWord = (item) => {
  if (!item) return '';
  return item.type === 'prefix' ? (item.prefix + item.char) : (item.char + item.suffix);
};

// Interactive letter morph component for primary name "MEDHINI"
const AnimatedLetter = ({ item, index, hoveredIdx, setHoveredIdx, clickedIdx, setClickedIdx, theme }) => {
  const isHovered = (hoveredIdx !== null)
    ? (hoveredIdx === index)
    : (clickedIdx === index);
  const isAnyHovered = (hoveredIdx !== null) || (clickedIdx !== null);
  const isOtherHovered = isAnyHovered && !isHovered;

  return (
    <div
      onMouseEnter={() => setHoveredIdx(index)}
      onMouseLeave={() => setHoveredIdx(null)}
      onClick={(e) => {
        e.stopPropagation();
        setClickedIdx(clickedIdx === index ? null : index);
      }}
      className="flex items-center justify-center transition-all duration-300 h-32 sm:h-44 md:h-[12.5rem] lg:h-[14rem] cursor-pointer"
    >
      <div className={`flex items-center select-none font-sans font-black text-7xl sm:text-8xl md:text-[10rem] lg:text-[11rem] tracking-[-0.05em] leading-none transition-all duration-300 smooth-text ${isOtherHovered ? 'blur-[3px] opacity-25 scale-95 select-none' : 'opacity-100 scale-100'
        } ${isHovered ? 'filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] drop-shadow-[0_0_40px_rgba(216,180,254,0.55)]' : ''
        }`}>

        {item.type === 'prefix' && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-flex flex-shrink-0 overflow-hidden whitespace-nowrap bg-gradient-to-b from-white via-zinc-100 to-[#D8B4FE] bg-clip-text text-transparent font-sans font-black text-7xl sm:text-8xl md:text-[10rem] lg:text-[11rem] tracking-[-0.05em] uppercase smooth-text ${isHovered ? 'pl-4 sm:pl-6 pr-1' : 'p-0'}`}
          >
            {item.prefix}
          </motion.span>
        )}

        <motion.span
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={`inline-flex flex-shrink-0 cursor-default transition-all duration-300 smooth-text px-1 ${isHovered
            ? 'bg-gradient-to-b from-white via-zinc-100 to-[#D8B4FE] bg-clip-text text-transparent'
            : (theme === 'dark' ? 'text-white' : 'text-zinc-900')
            }`}
        >
          {item.char}
        </motion.span>

        {item.type === 'suffix' && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-flex flex-shrink-0 overflow-hidden whitespace-nowrap bg-gradient-to-b from-white via-zinc-100 to-[#D8B4FE] bg-clip-text text-transparent font-sans font-black text-7xl sm:text-8xl md:text-[10rem] lg:text-[11rem] tracking-[-0.05em] uppercase smooth-text ${isHovered ? 'pl-1 pr-4 sm:pr-6' : 'p-0'}`}
          >
            {item.suffix}
          </motion.span>
        )}
      </div>
    </div>
  );
};

// Custom styled DEV letters
const AnimatedGradientLetter = ({ char, delay, hoveredIdx, clickedIdx }) => {
  const isHovered = hoveredIdx !== null;
  const isClicked = clickedIdx !== null;

  return (
    <motion.span
      initial={{ y: 80, opacity: 0 }}
      animate={{
        y: 0,
        opacity: isClicked ? 1.0 : (isHovered ? 0.4 : 0.8),
        filter: isClicked
          ? "blur(0px)"
          : (isHovered ? "blur(2px)" : "blur(0px)")
      }}
      transition={{
        y: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.2 },
        filter: { duration: 0.2 }
      }}
      whileHover={{
        y: -10,
        scale: 1.12,
        opacity: 1,
        filter: "none"
      }}
      className="inline-flex cursor-default font-sans font-black tracking-[-0.05em] select-none dev-gradient transition-all duration-150 text-5.5xl sm:text-7.5xl md:text-[9.5rem] lg:text-[10.5rem] leading-[0.85] smooth-text px-0.5 sm:px-1 flex-shrink-0"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

// Interactive top-right DevOps Telemetry Widget
const TelemetryHeaderWidget = ({ lenisRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uptime, setUptime] = useState(0);
  const [cpu, setCpu] = useState(6.4);

  // Uptime ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // CPU fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Number((4.5 + Math.random() * 8.2).toFixed(1)));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (sec) => {
    const h = Math.floor(sec / 3600).toString().padStart(2, '0');
    const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleStatusClick = () => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo('#telemetry', { duration: 1.2, offset: -40 });
    }
  };

  return (
    <div className="relative flex flex-col items-end">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-zinc-950/80 backdrop-blur-md cursor-pointer select-none text-[10px] font-mono font-bold text-zinc-400 hover:border-indigo-500/40 hover:text-indigo-400 transition-all duration-300 shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>SYS STATUS: OPTIMAL</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-10 right-0 w-56 p-4 rounded-xl border border-white/5 bg-zinc-950/95 backdrop-blur-xl shadow-2xl flex flex-col gap-3 z-50 text-[10px] font-mono text-zinc-400"
          >
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="text-zinc-500 uppercase tracking-wider font-bold">Node Telemetry</span>
              <span className="text-emerald-400 font-bold">ONLINE</span>
            </div>

            <div className="flex justify-between items-center">
              <span>CPU Load:</span>
              <span className="text-zinc-200 font-bold">{cpu}%</span>
            </div>
            <div className="w-full bg-zinc-900/50 h-1.5 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${cpu * 8}%` }}
                transition={{ duration: 0.5 }}
                className="bg-indigo-500 h-full rounded-full"
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Memory usage:</span>
              <span className="text-zinc-200 font-bold">412MB / 1024MB</span>
            </div>

            <div className="flex justify-between items-center">
              <span>Node Uptime:</span>
              <span className="text-zinc-200 font-bold">{formatUptime(uptime)}</span>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                handleStatusClick();
              }}
              className="mt-2 w-full py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-center transition-colors cursor-pointer"
            >
              Open Telemetry Logs
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



const pipelineStages = [
  {
    id: "cicd",
    number: "01",
    name: "github-actions-workflow",
    namespace: "ci-cd",
    status: "Active",
    cpu: 85,
    memory: 80,
    category: "AUTOMATION // PIPELINE",
    colorTheme: {
      text: "text-purple-400",
      border: "border-purple-500/20",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.25)]",
      badge: "bg-purple-500/10 border-purple-500/20 text-purple-300",
      bgSelected: "bg-purple-500/5 border-purple-500/40",
      accent: "#a855f7"
    },
    skills: [
      { name: "Git Version Control", level: 85 },
      { name: "GitHub Actions", level: 80 },
      { name: "Generative AI Integration", level: 85 },
      { name: "Hugging Face Hub", level: 75 }
    ],
    use: "Automating server builds, orchestrating workflow steps, triggering webhooks, and packing container layers on repository pushes.",
    yaml: `apiVersion: github.com/v1
kind: Workflow
metadata:
  name: deployment-pipeline
  labels:
    runner: ubuntu-latest
spec:
  triggers:
    - push:
        branches: [ main ]
  jobs:
    build-and-test:
      steps:
        - name: Checkout Code
          uses: actions/checkout@v4
        - name: Build Container
          run: docker build -t app:latest .
        - name: Deploy Cluster
          run: terraform apply -auto-approve`,
    logs: [
      "$ terraform apply -target=github_actions_workflow.deploy",
      "github_actions_workflow.deploy: Creating...",
      "github_actions_workflow.deploy: Creation complete [id=gh-wf-184]",
      "[OK] Webhook listener configured.",
      "[OK] Runner workflow pipeline active."
    ]
  },
  {
    id: "gateway",
    number: "02",
    name: "gcp-ingress-gateway",
    namespace: "traffic-management",
    status: "Active",
    cpu: 90,
    memory: 85,
    category: "GATEWAY // SECURITY",
    colorTheme: {
      text: "text-indigo-400",
      border: "border-indigo-500/20",
      glow: "shadow-[0_0_15px_rgba(99,102,241,0.25)]",
      badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
      bgSelected: "bg-indigo-500/5 border-indigo-500/40",
      accent: "#6366f1"
    },
    skills: [
      { name: "IAM Security Shield", level: 85 },
      { name: "Linux Administration", level: 85 },
      { name: "Flask & REST APIs", level: 90 },
      { name: "Java & C Programming", level: 75 }
    ],
    use: "Configuring ingress paths, securing API end points via IAM policies, proxying user requests, and establishing SSL configurations.",
    yaml: `apiVersion: networking.gke.io/v1
kind: Ingress
metadata:
  name: gateway-ingress
  annotations:
    cert-manager.io/issuer: letsencrypt-prod
spec:
  rules:
  - host: portfolio.medhini.dev
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: compute-service
            port:
              number: 80`,
    logs: [
      "$ terraform apply -target=gcp_ingress_gateway.nginx",
      "gcp_ingress_gateway.nginx: Creating...",
      "gcp_ingress_gateway.nginx: Creation complete [id=gw-ng-390]",
      "[OK] SSL Handshake configured on Port 443.",
      "[OK] Nginx Ingress Controller active."
    ]
  },
  {
    id: "compute",
    number: "03",
    name: "gcp-cloud-run-compute",
    namespace: "compute-services",
    status: "Active",
    cpu: 95,
    memory: 90,
    category: "COMPUTE // SERVERLESS",
    colorTheme: {
      text: "text-cyan-400",
      border: "border-cyan-500/20",
      glow: "shadow-[0_0_15px_rgba(6,182,212,0.25)]",
      badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
      bgSelected: "bg-cyan-500/5 border-cyan-500/40",
      accent: "#06b6d4"
    },
    skills: [
      { name: "Docker Isolation", level: 85 },
      { name: "Google Cloud Run", level: 85 },
      { name: "Python Backend", level: 95 },
      { name: "Pandas & NumPy", level: 80 }
    ],
    use: "Executing business microservices in isolated serverless container pods, matching compute limits, and processing backend requests.",
    yaml: `apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: compute-service
  namespace: compute-services
spec:
  template:
    spec:
      containers:
      - image: gcr.io/medhini/compute-runner:latest
        resources:
          limits:
            cpu: "2"
            memory: "2Gi"
        env:
        - name: RUNTIME_ENV
          value: CloudRun`,
    logs: [
      "$ terraform apply -target=gcp_cloud_run_service.api",
      "gcp_cloud_run_service.api: Creating...",
      "gcp_cloud_run_service.api: Creation complete [id=cr-run-912]",
      "[OK] Container runtimes initialized (Docker alpine base).",
      "[OK] Cloud Run cluster status: ONLINE."
    ]
  },
  {
    id: "database",
    number: "04",
    name: "gcp-cloud-sql-store",
    namespace: "persistence-layer",
    status: "Active",
    cpu: 80,
    memory: 80,
    category: "PERSISTENCE // DATABASE",
    colorTheme: {
      text: "text-emerald-400",
      border: "border-emerald-500/20",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.25)]",
      badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
      bgSelected: "bg-emerald-500/5 border-emerald-500/40",
      accent: "#10b981"
    },
    skills: [
      { name: "SQL Schema & Queries", level: 80 },
      { name: "Firebase (NoSQL)", level: 80 }
    ],
    use: "Configuring relational databases, managing persistent volume claims, indexing schema tables, and managing real-time document collections.",
    yaml: `apiVersion: sql.gcp.org/v1beta4
kind: DatabaseInstance
metadata:
  name: relational-sql-instance
  namespace: persistence-layer
spec:
  databaseVersion: POSTGRES_15
  settings:
    tier: db-f1-micro
    ipConfiguration:
      ipv4Enabled: false
      privateNetwork: projects/medhini/global/networks/vpc`,
    logs: [
      "$ terraform apply -target=gcp_sql_database.relational",
      "gcp_sql_database.relational: Creating...",
      "gcp_sql_database.relational: Creation complete [id=db-sql-502]",
      "[OK] Persistent storage volume bound.",
      "[OK] Database listening on port 5432."
    ]
  }
];


const timelineChapters = [
  {
    chapter: "CHAPTER I",
    title: "First Light",
    role: "PCMC Student",
    institution: "Sri BGS PU College, Sringeri",
    period: "MAY 2021 - MAR 2023",
    description: "Engaged in early-stage scientific computation, standard logic, and basic web formatting.",
    skills: ["HTML", "Computer Science", "Physics", "Mathematics"],
    colorTheme: {
      text: "text-emerald-400",
      border: "border-emerald-500",
      bgSelected: "bg-emerald-600/10 border-emerald-500 shadow-md shadow-emerald-600/5",
      badgeSelected: "border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.5)]",
      lineGlow: "bg-emerald-500"
    },
    bootLogs: [
      "[  OK  ] Started Chapter I: First Light.",
      "[ INFO ] Mounting Sri BGS PU College resources...",
      "[ INFO ] Loading module: standard_logic.bin (Success)",
      "[ INFO ] Loading module: basic_web_formatting.bin (Success)",
      "[  OK  ] Completed Chapter I in 22 months."
    ]
  },
  {
    chapter: "CHAPTER II",
    title: "Academia Focus",
    role: "Information Technology Student",
    institution: "SDM Institute of Technology (SDMIT)",
    period: "SEP 2023 - MAY 2027",
    description: "Developing core engineering concepts, data structures, algorithm design, database relations, and python scripting frameworks.",
    skills: ["Python", "C Programming", "DBMS", "CS Fundamentals"],
    colorTheme: {
      text: "text-teal-400",
      border: "border-teal-500",
      bgSelected: "bg-teal-600/10 border-teal-500 shadow-md shadow-teal-600/5",
      badgeSelected: "border-teal-400 bg-teal-500/20 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.5)]",
      lineGlow: "bg-teal-500"
    },
    bootLogs: [
      "[  OK  ] Reached target higher-academia.target.",
      "[ INFO ] Mounting SDM Institute of Technology (SDMIT) assets...",
      "[ INFO ] Loading module: cs_fundamentals.bin (Success)",
      "[ INFO ] Loading module: database_management.bin (Success)",
      "[ INFO ] Loading module: python_scripting.bin (Success)",
      "[  OK  ] Active Enrollment: Expected completion in May 2027."
    ]
  },
  {
    chapter: "CHAPTER III",
    title: "Cloud Foundations",
    role: "Arcade Facilitator Participant",
    institution: "Google Cloud Arcade",
    period: "JUL 2024 - JAN 2025",
    description: "Completed technical cloud labs focusing on containerization, serverless architectures, and Kubernetes/Docker workflows.",
    skills: ["Google Cloud", "Kubernetes", "Docker", "Compute Engine"],
    colorTheme: {
      text: "text-blue-400",
      border: "border-blue-500",
      bgSelected: "bg-blue-600/10 border-blue-500 shadow-md shadow-blue-600/5",
      badgeSelected: "border-blue-400 bg-blue-500/20 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      lineGlow: "bg-blue-500"
    },
    bootLogs: [
      "[  OK  ] Reached target cloud-native.target.",
      "[ INFO ] Initializing Google Cloud Arcade sandbox...",
      "[ INFO ] Spawning microservice container: docker.io/library/alpine:latest",
      "[ INFO ] Mounting persistent volume: /var/lib/k8s",
      "[ INFO ] Loading module: kubernetes_orchestrator.bin (Success)",
      "[  OK  ] Completed facilitation labs in 7 months."
    ]
  },
  {
    chapter: "CHAPTER IV",
    title: "Tech Communities",
    role: "Innovators & WTM Member",
    institution: "Google Cloud / Women Techmakers",
    period: "AUG 2024 - PRESENT",
    description: "Engaging in cloud architecture deep-dives and professional workshops to promote gender equity and diversity in STEM.",
    skills: ["GCP", "Diversity in STEM", "Networking", "AI Operations"],
    colorTheme: {
      text: "text-purple-400",
      border: "border-purple-500",
      bgSelected: "bg-purple-600/10 border-purple-500 shadow-md shadow-purple-600/5",
      badgeSelected: "border-purple-400 bg-purple-500/20 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      lineGlow: "bg-purple-500"
    },
    bootLogs: [
      "[  OK  ] Reached target tech-communities.target.",
      "[ INFO ] Connecting to global innovators community...",
      "[ INFO ] Subscribing to deep-dives: compute_engine, cloud_functions",
      "[ INFO ] Joining Women Techmakers networking portal...",
      "[  OK  ] Active Membership established."
    ]
  },
  {
    chapter: "CHAPTER V",
    title: "The Spark",
    role: "Co-Founder & CSO",
    institution: "Berukodige Farm",
    period: "JAN 2025 - PRESENT",
    description: "Co-founded an agri-innovation startup integrating plant nursery systems with custom software management models.",
    skills: ["Entrepreneurship", "Python", "Product Lifecycle", "Leadership"],
    colorTheme: {
      text: "text-cyan-400",
      border: "border-cyan-500",
      bgSelected: "bg-cyan-600/10 border-cyan-500 shadow-md shadow-cyan-600/5",
      badgeSelected: "border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      lineGlow: "bg-cyan-500"
    },
    bootLogs: [
      "[  OK  ] Reached target startup-foundation.target.",
      "[ INFO ] Initializing Berukodige Farm Agri-Innovation codebase...",
      "[ INFO ] Provisioning server: plant-nursery-management-v1",
      "[ INFO ] Deploying backend logic: python_flask_api.bin",
      "[  OK  ] Active Co-Founder & CSO role online."
    ]
  },
  {
    chapter: "CHAPTER VI",
    title: "Pragati Path",
    role: "Data Science Intern",
    institution: "Infosys Springboard",
    period: "APR 2025 - JUL 2025",
    description: "Selected for a competitive national future-skills program. Built Python ML models and handled data analytics cohorts.",
    skills: ["Python", "Machine Learning", "Data Science", "SQL"],
    colorTheme: {
      text: "text-amber-400",
      border: "border-amber-500",
      bgSelected: "bg-amber-600/10 border-amber-500 shadow-md shadow-amber-600/5",
      badgeSelected: "border-amber-400 bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]",
      lineGlow: "bg-amber-500"
    },
    bootLogs: [
      "[  OK  ] Reached target pragati-path.target.",
      "[ INFO ] Initializing Infosys Springboard data science track...",
      "[ INFO ] Loading module: machine_learning_model.bin (Success)",
      "[ INFO ] Loading module: data_analytics_pipelines.bin (Success)",
      "[  OK  ] Completed Cohort 5 internship in 4 months."
    ]
  },
  {
    chapter: "CHAPTER VII",
    title: "Global Support",
    role: "Google Product Expert",
    institution: "Google Community Support",
    period: "JUL 2025 - PRESENT",
    description: "Supporting users on Google Forums with research-backed SEO, ranking, indexing, and snippet optimization queries.",
    skills: ["SEO Help", "Search Indexing", "Snippet Usability", "Community Support"],
    colorTheme: {
      text: "text-orange-400",
      border: "border-orange-500",
      bgSelected: "bg-orange-600/10 border-orange-500 shadow-md shadow-orange-600/5",
      badgeSelected: "border-orange-400 bg-orange-500/20 text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.5)]",
      lineGlow: "bg-orange-500"
    },
    bootLogs: [
      "[  OK  ] Reached target community-expert.target.",
      "[ INFO ] Authenticating with Google Forum Moderator API...",
      "[ INFO ] Indexing SEO help inquiries...",
      "[ INFO ] Analyzing snippet ranking & safe search behaviors...",
      "[  OK  ] Active Product Expert status live."
    ]
  },
  {
    chapter: "CHAPTER VIII",
    title: "Innovation Leader",
    role: "StartUp Coordinator",
    institution: "Institutions Innovation Council (IIC)",
    period: "AUG 2025 - PRESENT",
    description: "Facilitating entrepreneurial activities, university innovation ecosystems, and campus startup pipelines.",
    skills: ["Campus Innovation", "Mentorship", "Collaboration", "Product Management"],
    colorTheme: {
      text: "text-sky-400",
      border: "border-sky-500",
      bgSelected: "bg-sky-600/10 border-sky-500 shadow-md shadow-sky-600/5",
      badgeSelected: "border-sky-400 bg-sky-500/20 text-sky-300 shadow-[0_0_15px_rgba(14,165,233,0.5)]",
      lineGlow: "bg-sky-500"
    },
    bootLogs: [
      "[  OK  ] Reached target startup-coordinator.target.",
      "[ INFO ] Mapping campus innovation ecosystem...",
      "[ INFO ] Organizing entrepreneurship hackathons & product workshops...",
      "[  OK  ] Coordination system active."
    ]
  },
  {
    chapter: "CHAPTER IX",
    title: "The Horizon",
    role: "Flutter Developer Intern",
    institution: "Benevolate (Texas, USA)",
    period: "APR 2026 - PRESENT",
    description: "Building production cross-platform mobile architectures, designing custom widgets, and handling API state integrations.",
    skills: ["Flutter", "Dart", "REST APIs", "State Management"],
    colorTheme: {
      text: "text-rose-400",
      border: "border-rose-500",
      bgSelected: "bg-rose-600/10 border-rose-500 shadow-md shadow-rose-600/5",
      badgeSelected: "border-rose-400 bg-rose-500/20 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.5)]",
      lineGlow: "bg-rose-500"
    },
    bootLogs: [
      "[  OK  ] Reached target mobile-architecture.target.",
      "[ INFO ] Mounting US-Remote development workspace (Texas)...",
      "[ INFO ] Spawning mobile container: flutter_dart_runtime.bin",
      "[ INFO ] Loading module: api_state_management.bin (Success)",
      "[  OK  ] Active Flutter Developer Intern session initialized."
    ]
  }
];

const projectsList = [
  {
    title: "Nivarya_Setu",
    category: "Deployment (Cloud Run)",
    status: "Healthy",
    description: "An Indian stock market simulator processing real-time NSE/BSE data, rendering technical charts, and conducting portfolio analytics.",
    github: "https://github.com/medhinibr/Nivarya_Setu",
    tags: ["React", "Python", "Flask", "Stock-Analysis"],
    endpoint: "https://nivarya-setu.medhini.dev",
    registry: "gcr.io/medhini-prod/Nivarya_Setu:v1.2",
    uptime: "99.98%",
    metrics: { cpu: "18%", mem: "145MB / 512MB" }
  },
  {
    title: "Vyamir",
    category: "Serverless (Cloud Run)",
    status: "Healthy",
    description: "A visually rich weather analytics platform designed to offer real-time meteorological intelligence and a gamified rewards ecosystem.",
    github: "https://github.com/medhinibr/Vyamir",
    tags: ["HTML", "CSS", "JavaScript", "Visualizations"],
    endpoint: "https://vyamir.medhini.dev",
    registry: "gcr.io/medhini-prod/Vyamir:v2.0",
    uptime: "100.00%",
    metrics: { cpu: "8%", mem: "64MB / 256MB" }
  },
  {
    title: "Ed-Wise",
    category: "Orchestrated (K8s Pod)",
    status: "Healthy",
    description: "An AI-powered Learning Management System (LMS) designed to modernize student-teacher-parent interactions with gamification logic.",
    github: "https://github.com/medhinibr/Ed-Wise",
    tags: ["JavaScript", "Node.js", "LMS", "Gamification"],
    endpoint: "https://ed-wise.medhini.dev",
    registry: "gcr.io/medhini-prod/Ed-Wise:v1.0",
    uptime: "99.95%",
    metrics: { cpu: "28%", mem: "210MB / 512MB" }
  },
  {
    title: "Viral-Drop-Platform-",
    category: "DaemonSet (Edge CDN)",
    status: "Active Dev",
    description: "A high-performance content delivery and automated assets sharing platform designed for frictionless community-wide file drops.",
    github: "https://github.com/medhinibr/Viral-Drop-Platform-",
    tags: ["JavaScript", "Node.js", "Content-Sharing", "WebSockets"],
    endpoint: "https://viral-drop.medhini.dev",
    registry: "gcr.io/medhini-prod/Viral-Drop-Platform-:v0.8-alpha",
    uptime: "99.90%",
    metrics: { cpu: "35%", mem: "340MB / 1024MB" }
  }
];

// Interactive DevOps SSH terminal shell component
const DevOpsTerminal = ({ theme, lenisRef }) => {
  const [history, setHistory] = useState([
    'Welcome to DevOps Node-01 terminal.',
    'Type "help" to see available commands or click the shortcuts below.',
    ''
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const terminalEndRef = useRef(null);

  const isFirstRender = useRef(true);

  // Auto scroll to bottom of console logs
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = async (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Add command to history
    setHistory(prev => [...prev, `medhini@devops-node-01:~$ ${cmdText}`]);

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmed === 'help') {
      setHistory(prev => [
        ...prev,
        'Available commands:',
        '  about     - Display personal overview & focus',
        '  skills    - Navigate to Technical Arsenal section',
        '  projects  - Navigate to Selected Works section',
        '  contact   - Navigate to Get In Touch section',
        '  pipeline  - Run Docker container build & Firebase hosting deploy',
        '  clear     - Reset the terminal screen'
      ]);
      return;
    }

    if (trimmed === 'about') {
      setHistory(prev => [
        ...prev,
        'Identity: B R Medhini',
        'Role: Cloud & DevOps Engineer | Flutter Developer | Co-Founder',
        'Education: BE in Information Technology (Expected 2027) at SDMIT',
        'Location: Koppa, Karnataka, India (Open to Bengaluru)',
        'Internships: Benevolate (US-Remote), Infosys Springboard',
        'Startup: Co-Founder & CSO, Berukodige Farm'
      ]);
      return;
    }

    if (trimmed === 'skills') {
      setHistory(prev => [...prev, 'Navigating to Technical Arsenal...']);
      if (lenisRef?.current) {
        lenisRef.current.scrollTo('#skills', { duration: 1.2, offset: -40 });
      } else {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (trimmed === 'projects') {
      setHistory(prev => [...prev, 'Navigating to Selected Works...']);
      if (lenisRef?.current) {
        lenisRef.current.scrollTo('#works', { duration: 1.2, offset: -40 });
      } else {
        document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (trimmed === 'contact') {
      setHistory(prev => [...prev, 'Navigating to Contact Section...']);
      if (lenisRef?.current) {
        lenisRef.current.scrollTo('#contact', { duration: 1.2, offset: -40 });
      } else {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (trimmed === 'pipeline') {
      if (isExecuting) return;
      setIsExecuting(true);
      setHistory(prev => [
        ...prev,
        'Initializing Docker containerization run...',
        'Sending build context to Docker daemon...'
      ]);

      // Stage 1: Docker Build
      await new Promise(r => setTimeout(r, 800));
      setHistory(prev => [
        ...prev,
        'Step 1/3 : FROM node:18-alpine',
        ' ---> Pulling node:18-alpine from registry...',
        ' ---> Docker build cache matched local image sha256.',
        'Step 2/3 : COPY . .',
        'Step 3/3 : RUN npm run build'
      ]);

      // Stage 2: Compile & Build
      await new Promise(r => setTimeout(r, 1000));
      setHistory(prev => [
        ...prev,
        ' ---> Vite building production assets...',
        ' ✓ dist/assets/index.js (382kB) | dist/assets/index.css (87kB)',
        'Successfully tagged medhini-portfolio:latest'
      ]);

      // Stage 3: Firebase Deployment
      await new Promise(r => setTimeout(r, 900));
      setHistory(prev => [
        ...prev,
        '',
        '$ firebase deploy --only hosting --project medhini-portfolio',
        '=== Hosting Deploy ===',
        'Host URL: https://medhini-portfolio.web.app',
        'Uploading project release bundle...'
      ]);

      await new Promise(r => setTimeout(r, 1000));
      setHistory(prev => [
        ...prev,
        '✓ Successfully uploaded 14 files to Firebase Hosting!',
        '✓ Deployment complete. Live URL: https://medhini-portfolio.web.app',
        'Status: Success (Uptime target 100% stable)'
      ]);
      setIsExecuting(false);
      return;
    }

    // Default error command
    setHistory(prev => [
      ...prev,
      `bash: ${cmdText}: command not found. Type "help" to see available commands.`
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Shell Container */}
      <div
        className={`w-full rounded-2xl border text-left font-mono shadow-xl relative overflow-hidden flex flex-col h-[380px] ${theme === 'dark' ? 'bg-[#0b0b0d] border-white/5 text-zinc-300' : 'bg-zinc-950 border-zinc-800 text-zinc-300'
          }`}
        onClick={() => document.getElementById('ssh-input')?.focus()}
      >
        {/* Terminal Header */}
        <div className={`flex items-center justify-between px-5 py-3.5 border-b ${theme === 'dark' ? 'border-white/5 bg-[#121216]' : 'border-zinc-800 bg-zinc-900'
          }`}>
          <div className="flex gap-2 items-center">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500/80"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-green-500/80"></span>
            <span className="text-xs text-zinc-500 ml-2 font-mono">ssh medhini@devops-node-01</span>
          </div>
          <span className="text-[10px] text-zinc-600 font-mono">PORT: 22</span>
        </div>

        {/* Console logs output */}
        <div className="flex-1 p-5 overflow-y-auto font-mono text-xs leading-relaxed space-y-1.5 scrollbar-thin">
          {history.map((line, idx) => {
            let colorClass = 'text-zinc-300';
            if (line.startsWith('medhini@devops-node-01:~$')) {
              colorClass = 'text-indigo-400 font-bold';
            } else if (line.startsWith('✓') || line.includes('Success')) {
              colorClass = 'text-emerald-400';
            } else if (line.startsWith('bash:') || line.includes('WARNING:')) {
              colorClass = 'text-red-400';
            } else if (line.startsWith('  ') || line.startsWith('Available')) {
              colorClass = 'text-zinc-400';
            } else if (line.startsWith('$')) {
              colorClass = 'text-cyan-400';
            }

            return (
              <div key={idx} className={`${colorClass} whitespace-pre-wrap`}>
                {line}
              </div>
            );
          })}

          {/* Active Input Line */}
          {!isExecuting && (
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="text-indigo-400 font-bold">medhini@devops-node-01:~$</span>
              <input
                id="ssh-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none focus:ring-0 p-0 text-zinc-100 caret-indigo-400 font-mono text-xs"
                placeholder=""
                autoComplete="off"
              />
            </div>
          )}

          {isExecuting && (
            <div className="flex items-center gap-2 text-indigo-400 font-bold animate-pulse text-xs">
              <span>[RUNNING BUILD PIPELINE...]</span>
            </div>
          )}
          <div ref={terminalEndRef} />
        </div>
      </div>

      {/* Shortcut Command Pills */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mr-1">Shortcuts:</span>
        {['help', 'pipeline', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            disabled={isExecuting}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${theme === 'dark'
              ? 'bg-[#18181b]/80 border-white/5 text-zinc-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/5'
              : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-indigo-500/40 hover:bg-indigo-500/5'
              }`}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const theme = 'dark';
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [clickedIdx, setClickedIdx] = useState(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(pipelineStages[0]);
  const [k8sTab, setK8sTab] = useState('logs');
  const [printedLogs, setPrintedLogs] = useState([]);

  useEffect(() => {
    setPrintedLogs([]);
    const timers = [];
    let currentLines = [];
    selectedSkill.logs.forEach((line, idx) => {
      const timer = setTimeout(() => {
        currentLines.push(line);
        setPrintedLogs([...currentLines]);
      }, idx * 220);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, [selectedSkill]);

  const [selectedChapter, setSelectedChapter] = useState(0);
  const [hoveredProjectIdx, setHoveredProjectIdx] = useState(null);
  const [pingingIdx, setPingingIdx] = useState(null);
  const [pingResults, setPingResults] = useState({});
  const [selectedDevOpsStage, setSelectedDevOpsStage] = useState(1);

  const handleTestConnection = (idx) => {
    if (pingingIdx !== null) return;
    setPingingIdx(idx);
    setTimeout(() => {
      setPingResults(prev => ({
        ...prev,
        [idx]: {
          status: "200 OK",
          latency: `${Math.floor(Math.random() * 80) + 45}ms`,
          server: idx === 3 ? "edge-cdn" : "gcp-cloud-run",
          ip: `34.120.${Math.floor(Math.random() * 190) + 10}.${Math.floor(Math.random() * 254)}`
        }
      }));
      setPingingIdx(null);
    }, 1100);
  };

  // Custom cursor state variables
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const lenisRef = useRef(null);

  // Interactive contact form state
  const [contactStep, setContactStep] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);

  useEffect(() => {
    // Clear URL hash to prevent native browser scroll-to-anchor jumping
    if (window.location.hash) {
      window.history.replaceState("", document.title, window.location.pathname + window.location.search);
    }

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    // Reset view position to absolute top via Lenis
    setTimeout(() => {
      lenis.scrollTo(0, { immediate: true });
    }, 50);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Custom Interactive Cursor Event Handlers
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer');
      setIsHoveringClickable(!!isClickable);
    };

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Contact form submission flow
  const handleContactInput = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    setFormError('');
  };

  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    if (contactStep === 0) {
      if (!contactForm.name.trim()) {
        setFormError('Please state your identity.');
        return;
      }
      setContactStep(1);
    } else if (contactStep === 1) {
      if (!contactForm.email.trim() || !/\S+@\S+\.\S+/.test(contactForm.email)) {
        setFormError('Please enter a valid reply address.');
        return;
      }
      setContactStep(2);
    } else if (contactStep === 2) {
      if (!contactForm.message.trim()) {
        setFormError('Message cannot be empty.');
        return;
      }
      setIsTransmitting(true);
      setTimeout(() => {
        setIsTransmitting(false);
        setContactStep(3);
      }, 1500);
    }
  };

  const resetContactForm = () => {
    setContactForm({ name: '', email: '', message: '' });
    setContactStep(0);
    setFormError('');
  };

  return (
    <div
      onClick={() => setClickedIdx(null)}
      className={`relative min-h-screen font-sans transition-colors duration-300 overflow-x-hidden ${theme === 'dark' ? 'bg-black text-zinc-100' : 'bg-white text-zinc-900'
        }`}
    >
      {/* Custom Interactive Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePos.x - (isHoveringClickable ? 24 : 8),
          y: mousePos.y - (isHoveringClickable ? 24 : 8),
          scale: isHoveringClickable ? 3.0 : 1.0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.15 }}
      />





      <header className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 sm:px-16 transition-all duration-300 pointer-events-auto ${
        scrolledPastHero 
          ? (theme === 'dark' ? 'h-16 bg-black/75 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10' : 'h-16 bg-white/75 backdrop-blur-md border-b border-zinc-200/50 shadow-md')
          : 'h-20 bg-transparent'
      }`}>
        {/* Left Side: Minimalist Name Logo (visible when scrolled past hero) */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest font-bold">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: scrolledPastHero ? 1 : 0, x: scrolledPastHero ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="text-zinc-200"
          >
            MEDHINI B R <span className="text-[#22D3EE] animate-pulse">●</span>
          </motion.span>
        </div>

        {/* Right Side: Resume Button & Telemetry widget side-by-side */}
        <div className="flex items-center gap-3">
          <AnimatePresence>
            {scrolledPastHero && (
              <motion.a
                layoutId="download-resume-btn"
                href="/Resume%20-%20B%20R%20Medhini.pdf"
                download="Resume - B R Medhini.pdf"
                className={`px-4 h-[34px] flex items-center justify-center rounded-full text-[11px] sm:text-[12px] font-bold border shadow-md transition-all duration-300 ${theme === 'dark'
                  ? 'bg-zinc-900 border-white/10 text-white hover:bg-white/5'
                  : 'bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50'
                  }`}
              >
                Download Resume
              </motion.a>
            )}
          </AnimatePresence>
          <TelemetryHeaderWidget lenisRef={lenisRef} />
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative pt-16 sm:pt-20">
        <div className="-mt-14 sm:-mt-20 space-y-6 w-full max-w-full mx-auto px-6 sm:px-16 relative">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold border uppercase ${theme === 'dark' ? 'bg-[#18181b]/50 border-white/5 text-indigo-400' : 'bg-white/50 border-zinc-200 text-indigo-600'
              }`}>
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></span>
              MEDHINI B R // CLOUD & DEVOPS PRACTITIONER
            </div>
          </motion.div>



          {/* Heading */}
          <div className="space-y-2 select-none relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center flex-nowrap gap-x-0.5 sm:gap-x-1 text-7xl sm:text-8xl md:text-[10rem] lg:text-[11rem] leading-[0.9] tracking-[-0.07em] w-full overflow-visible h-32 sm:h-44 md:h-[12.5rem] lg:h-[14rem] items-center justify-center"
            >
              <div className="flex justify-center flex-nowrap gap-x-0.5 sm:gap-x-1 w-full h-full items-center origin-center">
                {medhiniLetters.map((item, index) => (
                  <AnimatedLetter
                    key={`medhini-${index}`}
                    item={item}
                    index={index}
                    hoveredIdx={hoveredIdx}
                    setHoveredIdx={setHoveredIdx}
                    clickedIdx={clickedIdx}
                    setClickedIdx={setClickedIdx}
                    theme={theme}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center flex-nowrap -mt-2 sm:-mt-4 gap-x-0.5 sm:gap-x-1 leading-[0.85] tracking-[-0.05em] w-full overflow-visible"
            >
              {"DEV".split("").map((char, index) => (
                <AnimatedGradientLetter
                  key={`dev-${index}`}
                  char={char}
                  delay={0.28 + index * 0.04}
                  hoveredIdx={hoveredIdx}
                  clickedIdx={clickedIdx}
                />
              ))}
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[580px] mx-auto text-lg md:text-xl leading-relaxed text-[#94A3B8] font-normal mt-10 sm:mt-14"
          >
            I build high-performance cloud architectures, cross-platform mobile experiences, and scalable software pipelines that live at the intersection of infrastructure and design.
          </motion.p>

          {/* Center Call Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 flex flex-row justify-center items-center gap-5 sm:gap-6"
          >
            <a
              href="#contact"
              className={`w-[180px] h-[48px] flex items-center justify-center rounded-full text-[13px] font-bold shadow-md transition-all duration-300 ${theme === 'dark'
                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                : 'bg-zinc-950 text-white hover:bg-zinc-800'
                }`}
            >
              Book a call
            </a>
            <AnimatePresence>
              {!scrolledPastHero && (
                <motion.a
                  layoutId="download-resume-btn"
                  href="/Resume%20-%20B%20R%20Medhini.pdf"
                  download="Resume - B R Medhini.pdf"
                  exit={{ opacity: 0 }}
                  className={`w-[180px] h-[48px] flex items-center justify-center rounded-full text-[13px] font-bold border transition-all duration-300 ${theme === 'dark'
                    ? 'bg-transparent border-zinc-800 text-white hover:bg-white/5'
                    : 'bg-transparent border-zinc-200 text-zinc-800 hover:bg-zinc-50'
                    }`}
                >
                  Download Resume
                </motion.a>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Identity Section */}
      <section id="identity" className="w-full pt-32 pb-20 min-h-screen flex flex-col justify-center scroll-mt-28">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-3 mb-10 text-left">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              01 // DEVOPS ENGINEER
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
              Interactive Shell.<br />
              <span className="opacity-45">Automated pipelines.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-6 text-left">
              <p className={`text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                I build responsive web architectures, containerize applications for serverless cloud hosting, and integrate intelligent data pipelines. Use the interactive SSH shell console to explore my engineering domains, trigger virtual pipeline builds, or navigate the sections.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Programming & Logic Card */}
                <div className={`p-4 rounded-xl border transition-all duration-300 hover:border-indigo-500/30 group/card relative overflow-hidden flex flex-col justify-between ${theme === 'dark' ? 'bg-[#18181b]/30 border-white/5' : 'bg-zinc-50/50 border-zinc-200'}`}>
                  <div>
                    <div className="text-indigo-400 font-mono text-xs uppercase mb-1 font-bold">Programming & Logic</div>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Python, SQL, Java, and C Programming for building reliable logic and database structures.</p>
                  </div>
                  {/* Mini visual */}
                  <div className="mt-3 font-mono text-[9px] text-zinc-500 bg-black/40 p-2 rounded border border-white/5 flex flex-col gap-0.5 select-none">
                    <div className="flex justify-between">
                      <span className="text-indigo-400 font-semibold"># python main.py</span>
                      <span className="text-zinc-600">v3.11</span>
                    </div>
                    <div className="text-emerald-400/80">Query successful: 200 records loaded.</div>
                  </div>
                </div>

                {/* Web Systems Card */}
                <div className={`p-4 rounded-xl border transition-all duration-300 hover:border-blue-500/30 group/card relative overflow-hidden flex flex-col justify-between ${theme === 'dark' ? 'bg-[#18181b]/30 border-white/5' : 'bg-zinc-50/50 border-zinc-200'}`}>
                  <div>
                    <div className="text-blue-400 font-mono text-xs uppercase mb-1 font-bold">Web Systems</div>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>HTML, CSS, JS, Flask, REST APIs, and Firebase for modern, interactive applications.</p>
                  </div>
                  {/* Mini visual */}
                  <div className="mt-3 flex items-center justify-between bg-black/40 p-2 rounded border border-white/5 select-none">
                    <span className="font-mono text-[9px] text-zinc-500">API: GET /api/v1/health</span>
                    <span className="font-mono text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> 200 OK
                    </span>
                  </div>
                </div>

                {/* Cloud & Deployment Card */}
                <div className={`p-4 rounded-xl border transition-all duration-300 hover:border-emerald-500/30 group/card relative overflow-hidden flex flex-col justify-between ${theme === 'dark' ? 'bg-[#18181b]/30 border-white/5' : 'bg-zinc-50/50 border-zinc-200'}`}>
                  <div>
                    <div className="text-emerald-400 font-mono text-xs uppercase mb-1 font-bold">Cloud & Deployment</div>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Google Cloud Platform, Docker container workflows, Cloud Run serverless, and IAM policies.</p>
                  </div>
                  {/* Mini visual */}
                  <div className="mt-3 flex items-center justify-between bg-black/40 p-2 rounded border border-white/5 select-none">
                    <span className="font-mono text-[9px] text-zinc-500">CLOUD RUN RUNTIME</span>
                    <span className="font-mono text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ONLINE
                    </span>
                  </div>
                </div>

                {/* AI & Intelligent Tools Card */}
                <div className={`p-4 rounded-xl border transition-all duration-300 hover:border-purple-500/30 group/card relative overflow-hidden flex flex-col justify-between ${theme === 'dark' ? 'bg-[#18181b]/30 border-white/5' : 'bg-zinc-50/50 border-zinc-200'}`}>
                  <div>
                    <div className="text-purple-400 font-mono text-xs uppercase mb-1 font-bold">AI & Intelligent Tools</div>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Generative AI, Pandas, NumPy, Hugging Face models, Git, and Antigravity tooling.</p>
                  </div>
                  {/* Mini visual */}
                  <div className="mt-3 flex items-center justify-between bg-black/40 p-2 rounded border border-white/5 select-none">
                    <span className="font-mono text-[9px] text-zinc-500">LLM MODEL PIPELINE</span>
                    <span className="font-mono text-[9px] text-purple-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span> READY
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: DevOps SSH Terminal */}
            <div className="md:col-span-6 w-full">
              <DevOpsTerminal theme={theme} lenisRef={lenisRef} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (Interactive Cloud Architecture / Topology Map) */}
      <section id="skills" className="w-full py-24 min-h-screen flex flex-col justify-center scroll-mt-28">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-4 mb-12 text-left">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              02 // TECHNICAL ARSENAL
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>Infrastructure Topology.</h2>
            <p className={`max-w-2xl text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              Interactive system architecture map with live data packet flows. Click on any system component to view infrastructure provisioning logs, specs, and integrated skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Interactive SVG Network Map */}
            <div className="lg:col-span-7 relative w-full min-h-[460px] rounded-2xl bg-[#09090b]/90 border border-white/5 overflow-hidden shadow-2xl flex items-center justify-center">
              
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <div className="absolute top-6 left-6 text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE MONITOR // TELEMETRY LINKED
              </div>

              {/* SVG Connector Lines */}
              <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <filter id="svg-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Path Connections */}
                {/* 1. CI/CD -> Gateway */}
                <path d="M 120 200 Q 260 100 400 100" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
                {/* 2. CI/CD -> Compute */}
                <path d="M 120 200 Q 260 300 400 300" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
                {/* 3. Gateway -> Compute */}
                <path d="M 400 100 L 400 300" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
                {/* 4. Compute -> Database */}
                <path d="M 400 300 Q 540 300 680 200" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
                {/* 5. Gateway -> Database */}
                <path d="M 400 100 Q 540 100 680 200" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Animated Data Packets (constantly flow along the paths) */}
                <circle r="3.5" fill="#a855f7" filter="url(#svg-glow)">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 120 200 Q 260 100 400 100" />
                </circle>
                <circle r="3.5" fill="#06b6d4" filter="url(#svg-glow)">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M 120 200 Q 260 300 400 300" />
                </circle>
                <circle r="3.5" fill="#06b6d4" filter="url(#svg-glow)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M 400 100 L 400 300" />
                </circle>
                <circle r="3.5" fill="#10b981" filter="url(#svg-glow)">
                  <animateMotion dur="4.2s" repeatCount="indefinite" path="M 400 300 Q 540 300 680 200" />
                </circle>
                <circle r="3.5" fill="#10b981" filter="url(#svg-glow)">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 400 100 Q 540 100 680 200" />
                </circle>
              </svg>

              {/* Interactive Node Buttons Overlay */}
              <div className="absolute inset-0 w-full h-full">
                
                {/* Node 1: CI/CD Pipeline */}
                {(() => {
                  const stage = pipelineStages.find(s => s.id === "cicd");
                  const isSelected = selectedSkill.id === stage?.id;
                  return stage ? (
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-pulse-slow" style={{ left: "15%", top: "50%" }}>
                      <button
                        onClick={() => setSelectedSkill(stage)}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center relative transition-all duration-300 border bg-zinc-950/90 ${
                          isSelected ? `${stage.colorTheme.border} ${stage.colorTheme.text} ${stage.colorTheme.glow}` : 'border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: [0.8, 1.4, 1.8], opacity: [0.8, 0.3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 rounded-2xl border border-current"
                          />
                        )}
                        <Activity className="w-6 h-6" />
                      </button>
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors duration-300 ${isSelected ? stage.colorTheme.text : 'text-zinc-500'}`}>CI/CD PIPELINE</span>
                    </div>
                  ) : null;
                })()}

                {/* Node 2: Gateway */}
                {(() => {
                  const stage = pipelineStages.find(s => s.id === "gateway");
                  const isSelected = selectedSkill.id === stage?.id;
                  return stage ? (
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2" style={{ left: "50%", top: "25%" }}>
                      <button
                        onClick={() => setSelectedSkill(stage)}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center relative transition-all duration-300 border bg-zinc-950/90 ${
                          isSelected ? `${stage.colorTheme.border} ${stage.colorTheme.text} ${stage.colorTheme.glow}` : 'border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: [0.8, 1.4, 1.8], opacity: [0.8, 0.3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 rounded-2xl border border-current"
                          />
                        )}
                        <Globe className="w-6 h-6" />
                      </button>
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors duration-300 ${isSelected ? stage.colorTheme.text : 'text-zinc-500'}`}>INGRESS GATEWAY</span>
                    </div>
                  ) : null;
                })()}

                {/* Node 3: Compute */}
                {(() => {
                  const stage = pipelineStages.find(s => s.id === "compute");
                  const isSelected = selectedSkill.id === stage?.id;
                  return stage ? (
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2" style={{ left: "50%", top: "75%" }}>
                      <button
                        onClick={() => setSelectedSkill(stage)}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center relative transition-all duration-300 border bg-zinc-950/90 ${
                          isSelected ? `${stage.colorTheme.border} ${stage.colorTheme.text} ${stage.colorTheme.glow}` : 'border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: [0.8, 1.4, 1.8], opacity: [0.8, 0.3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 rounded-2xl border border-current"
                          />
                        )}
                        <Cpu className="w-6 h-6" />
                      </button>
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors duration-300 ${isSelected ? stage.colorTheme.text : 'text-zinc-500'}`}>CLOUD COMPUTE</span>
                    </div>
                  ) : null;
                })()}

                {/* Node 4: Database Store */}
                {(() => {
                  const stage = pipelineStages.find(s => s.id === "database");
                  const isSelected = selectedSkill.id === stage?.id;
                  return stage ? (
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2" style={{ left: "85%", top: "50%" }}>
                      <button
                        onClick={() => setSelectedSkill(stage)}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center relative transition-all duration-300 border bg-zinc-950/90 ${
                          isSelected ? `${stage.colorTheme.border} ${stage.colorTheme.text} ${stage.colorTheme.glow}` : 'border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: [0.8, 1.4, 1.8], opacity: [0.8, 0.3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 rounded-2xl border border-current"
                          />
                        )}
                        <Database className="w-6 h-6" />
                      </button>
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors duration-300 ${isSelected ? stage.colorTheme.text : 'text-zinc-500'}`}>DATABASE STORE</span>
                    </div>
                  ) : null;
                })()}

              </div>

            </div>

            {/* Right Column: Node Inspector & Provisioning logs */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#09090b]/90 border border-white/5 text-left flex flex-col justify-between shadow-2xl">
              
              <div className="flex flex-col h-full justify-between gap-4">
                
                {/* Tab Header Selector */}
                <div className="flex border-b border-white/5 text-xs font-mono select-none">
                  <button
                    onClick={() => setK8sTab('logs')}
                    className={`pb-2 px-4 border-b-2 font-bold transition-all ${
                      k8sTab === 'logs' ? `border-b-2 border-current ${selectedSkill.colorTheme.text}` : 'border-transparent text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    IaC Provisioning
                  </button>
                  <button
                    onClick={() => setK8sTab('yaml')}
                    className={`pb-2 px-4 border-b-2 font-bold transition-all ${
                      k8sTab === 'yaml' ? `border-b-2 border-current ${selectedSkill.colorTheme.text}` : 'border-transparent text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    YAML Specification
                  </button>
                </div>

                {/* Main Console Box */}
                <div className="flex-grow flex flex-col justify-start">
                  {k8sTab === 'logs' ? (
                    <div className="bg-zinc-950 p-5 rounded-xl border border-white/5 font-mono text-[10px] text-zinc-400 min-h-[250px] max-h-[300px] overflow-y-auto relative flex-grow flex flex-col justify-start gap-1">
                      {printedLogs.map((line, idx) => (
                        <motion.div
                          key={`${selectedSkill.id}-log-${idx}`}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className={line.startsWith('$') ? 'text-zinc-500 font-bold' : line.startsWith('[OK]') ? 'text-emerald-400 font-bold' : 'text-zinc-300'}
                        >
                          {line}
                        </motion.div>
                      ))}
                      {printedLogs.length < selectedSkill.logs.length && (
                        <div className="text-[10px] text-zinc-600 animate-pulse">Provisioning resources...</div>
                      )}
                      <div className="absolute bottom-2 right-2 text-[8px] text-zinc-600 uppercase font-mono tracking-widest select-none">
                        TERRAFORM RUN
                      </div>
                    </div>
                  ) : (
                    <div className="bg-zinc-950 p-5 rounded-xl border border-white/5 font-mono text-[10px] text-zinc-400 min-h-[250px] max-h-[300px] overflow-y-auto relative flex-grow flex flex-col justify-start whitespace-pre-wrap select-all">
                      {selectedSkill.yaml.split('\n').map((line, idx) => {
                        if (line.trim().startsWith('- name:') || line.trim().startsWith('- containerPort:') || line.trim().startsWith('- value:') || line.trim().startsWith('metadata:') || line.trim().startsWith('spec:') || line.trim().startsWith('containers:')) {
                          return <div key={idx} className="text-cyan-400">{line}</div>;
                        }
                        if (line.includes(':')) {
                          const colonIdx = line.indexOf(':');
                          const key = line.substring(0, colonIdx);
                          const val = line.substring(colonIdx);
                          return (
                            <div key={idx} className="leading-relaxed">
                              <span className="text-blue-400">{key}</span>
                              <span className="text-emerald-400">{val}</span>
                            </div>
                          );
                        }
                        return <div key={idx} className="leading-relaxed">{line}</div>;
                      })}
                      <div className="absolute bottom-2 right-2 text-[8px] text-zinc-600 uppercase font-mono tracking-widest select-none">
                        yaml config
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Text & Skills Grid */}
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-bold mb-1">Functional Description</div>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>{selectedSkill.use}</p>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-bold mb-2">Integrated Core Skills</div>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedSkill.skills.map((skill, idx) => (
                        <div key={idx} className="p-2.5 rounded bg-zinc-950 border border-white/5 flex items-center justify-between text-xs font-mono">
                          <span className="text-zinc-400">{skill.name}</span>
                          <span className={selectedSkill.colorTheme.text}>{skill.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Selected Works Section (DevOps Deployments Registry) */}
      <section id="works" className="w-full py-24 min-h-screen flex flex-col justify-center scroll-mt-28">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          
          <div className="space-y-4 mb-16 text-left">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              03 // DEPLOYMENTS REGISTRY
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>Service Catalog.</h2>
            <p className={`max-w-2xl text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              Active microservices catalog and containerized system endpoints built by B R Medhini. Inspect telemetry, configurations, and running runtimes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {projectsList.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setHoveredProjectIdx(idx)}
                onMouseLeave={() => setHoveredProjectIdx(null)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-500 shadow-2xl relative overflow-hidden min-h-[460px] ${
                  hoveredProjectIdx !== null && hoveredProjectIdx !== idx ? 'opacity-40 scale-[0.98] blur-[0.5px]' : 'opacity-100'
                } ${
                  theme === 'dark' ? 'bg-[#09090b]/90 border-white/5 hover:border-indigo-500/25' : 'bg-white border-zinc-200 hover:border-indigo-500/25'
                }`}
              >
                
                {/* Visual Top Highlight bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  idx === 0 ? 'from-cyan-500 to-blue-500' :
                  idx === 1 ? 'from-indigo-500 to-purple-500' :
                  idx === 2 ? 'from-emerald-500 to-teal-500' :
                  'from-purple-500 to-pink-500'
                }`} />

                {/* Dashboard Console Header */}
                <div className="space-y-4 text-left">
                  
                  {/* Status telemetry row */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 border-b border-white/5 pb-3">
                    <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.status.toUpperCase()}
                    </span>
                    <span>UPTIME: <b className="text-zinc-300">{project.uptime}</b></span>
                  </div>

                  {/* Service type & Title */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider">
                      {project.category}
                    </div>
                    <h3 className={`text-xl font-bold font-mono tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      {project.title}
                    </h3>
                    <div className="text-[9px] font-mono text-zinc-500 truncate" title={project.registry}>
                      IMAGE: <span className="text-zinc-400">{project.registry}</span>
                    </div>
                  </div>

                  {/* Resource Consumption Indicators */}
                  <div className="bg-black/40 p-3 rounded-lg border border-white/5 space-y-2 select-none font-mono text-[9px]">
                    <div className="flex items-center justify-between text-zinc-500">
                      <span>POD CPU UTILIZATION</span>
                      <span className="text-indigo-300">{project.metrics.cpu}</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: project.metrics.cpu }} />
                    </div>
                    <div className="flex items-center justify-between text-zinc-500 pt-1">
                      <span>MEMORY RESIDENT SET</span>
                      <span className="text-indigo-300">{project.metrics.mem}</span>
                    </div>
                  </div>

                  {/* Connection / Ping Telemetry */}
                  <div className="flex flex-col gap-1 text-[9px] font-mono border-t border-b border-white/5 py-2">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">ENDPOINT URL</span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleTestConnection(idx);
                        }}
                        disabled={pingingIdx !== null}
                        className={`text-[8px] px-1.5 py-0.5 rounded font-bold transition-all border ${
                          pingingIdx === idx 
                            ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400 animate-pulse'
                            : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/25'
                        }`}
                      >
                        {pingingIdx === idx ? 'PINGING...' : 'TEST CONN'}
                      </button>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white truncate underline cursor-pointer"
                    >
                      {project.endpoint}
                    </a>
                    
                    {/* Live Ping Response */}
                    {pingResults[idx] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-1 bg-zinc-950 p-2 rounded border border-white/5 space-y-1 text-zinc-500 text-[8px] leading-tight"
                      >
                        <div className="flex justify-between">
                          <span>HTTP STATUS:</span>
                          <span className="text-emerald-400 font-bold">{pingResults[idx].status}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>LATENCY:</span>
                          <span className="text-zinc-300">{pingResults[idx].latency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>IP ADDRESS:</span>
                          <span className="text-zinc-300">{pingResults[idx].ip}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SERVER:</span>
                          <span className="text-zinc-300">{pingResults[idx].server}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {project.description}
                  </p>

                </div>

                {/* Footer layers & CTA */}
                <div className="space-y-4 pt-4 mt-4 border-t border-white/5 text-left">
                  
                  {/* Container Layer tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                          theme === 'dark' ? 'bg-zinc-950 border-white/5 text-zinc-500' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                        }`}
                      >
                        {tIdx === 0 ? 'FROM' : tIdx === 1 ? 'RUN' : 'ENV'} {tag.toLowerCase()}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Action clone link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between w-full p-2.5 rounded-lg text-[10px] font-mono border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-zinc-950 hover:bg-zinc-900 border-white/5 hover:border-indigo-500/30 text-zinc-400 hover:text-white'
                        : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <span className="truncate flex items-center gap-1.5">
                      <span className="text-indigo-400">$</span> git clone repo
                    </span>
                    <GithubIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>

                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Lifecycle Section */}
      <section id="metrics" className="w-full py-24 min-h-screen flex flex-col justify-center scroll-mt-28">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          
          <div className="space-y-4 mb-16 text-center">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              04 // ENGINEERING LIFECYCLE
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>DevOps Lifecycle.</h2>
            <p className={`max-w-2xl mx-auto text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              A structured roadmap of how I build, containerize, provision, and deploy cloud applications automatically.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
            
            {/* Left: Step Indicators */}
            <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
              {[
                { step: 1, label: "01 // INTEGRATION", title: "CI Pipeline" },
                { step: 2, label: "02 // CONTAINERIZE", title: "Docker Build" },
                { step: 3, label: "03 // PROVISION", title: "IaC Terraform" },
                { step: 4, label: "04 // DEPLOYMENT", title: "CD Release" }
              ].map((stage) => {
                const isActive = selectedDevOpsStage === stage.step;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setSelectedDevOpsStage(stage.step)}
                    className={`p-5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden select-none outline-none ${
                      isActive 
                        ? 'bg-indigo-600/10 border-indigo-500/50 shadow-md shadow-indigo-600/5' 
                        : theme === 'dark' 
                          ? 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10' 
                          : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500" />
                    )}
                    <div className={`text-[9px] font-mono font-bold ${isActive ? 'text-indigo-400' : 'text-zinc-500'}`}>
                      {stage.label}
                    </div>
                    <div className={`text-base font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Stage Console & Details */}
            <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-white/5 bg-[#09090b]/90 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left min-h-[400px]">
              
              {/* Decorative terminal dot highlights */}
              <div className="absolute top-4 right-6 flex gap-1.5 select-none opacity-50">
                <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              </div>

              {/* Stage description & detail metrics */}
              <div className="space-y-4">
                
                {/* Active Stage Label */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">
                    STAGE 0{selectedDevOpsStage} ACTIVE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Info block */}
                <div className="space-y-2">
                  <h3 className={`text-xl sm:text-2xl font-bold font-mono ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    {selectedDevOpsStage === 1 && "Continuous Integration"}
                    {selectedDevOpsStage === 2 && "Docker Containerization"}
                    {selectedDevOpsStage === 3 && "Infrastructure as Code"}
                    {selectedDevOpsStage === 4 && "Continuous Delivery"}
                  </h3>
                  <p className={`text-xs leading-relaxed max-w-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {selectedDevOpsStage === 1 && "Automating lint checking, static code analysis, and test suites execution on code pushes to keep the main branch stable."}
                    {selectedDevOpsStage === 2 && "Creating lightweight, reproducible container images using Docker. Bundles the app files and runs securely in isolated host environments."}
                    {selectedDevOpsStage === 3 && "Declaring and maintaining cloud network resources, databases, permissions, and server instances safely using Terraform code templates."}
                    {selectedDevOpsStage === 4 && "Automatically deploying container images to serverless endpoints (Google Cloud Run) and routing production user traffic with zero-downtime."}
                  </p>
                </div>

                {/* Core Tooling Badge Row */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[9px] font-bold font-mono text-zinc-500 uppercase tracking-widest block">INTEGRATED TOOLCHAIN</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedDevOpsStage === 1 ? ["GitHub Actions", "Git", "Pytest", "ESLint"] :
                      selectedDevOpsStage === 2 ? ["Docker", "Multi-stage Builds", "Google Artifact Registry"] :
                      selectedDevOpsStage === 3 ? ["Terraform", "Google Cloud Provider", "IAM Policies"] :
                      ["Google Cloud Run", "Cloud CDN", "Load Balancing", "GKE"]
                    ).map((tool, idx) => (
                      <span key={idx} className="text-[9px] font-mono bg-zinc-950 border border-white/5 text-zinc-400 px-2.5 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Mock Terminal Shell Console */}
              <div className="mt-8 pt-4 border-t border-white/5 space-y-3 font-mono text-[11px] leading-relaxed">
                
                {/* Mock Command line */}
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <span className="text-indigo-400">$</span>
                  <span>
                    {selectedDevOpsStage === 1 && "git push origin main"}
                    {selectedDevOpsStage === 2 && "docker build -t gcr.io/medhini/app:v1.2 ."}
                    {selectedDevOpsStage === 3 && "terraform apply -auto-approve"}
                    {selectedDevOpsStage === 4 && "gcloud run deploy --image=gcr.io/medhini/app:v1.2"}
                  </span>
                </div>

                {/* Simulated console lines */}
                <div className="bg-black/60 p-4 rounded-lg border border-white/5 space-y-1.5 select-all text-left">
                  {selectedDevOpsStage === 1 && (
                    <>
                      <div className="text-zinc-500">✓ trigger: github-actions workflow initiated</div>
                      <div className="text-zinc-500">✓ run linting: flake8 styles check... <span className="text-emerald-400 font-bold">passed</span></div>
                      <div className="text-zinc-500">✓ run tests: pytest suites execution... <span className="text-emerald-400 font-bold">14 tests passed</span></div>
                      <div className="text-emerald-300 font-bold">✓ status: code quality checks successful</div>
                    </>
                  )}
                  {selectedDevOpsStage === 2 && (
                    <>
                      <div className="text-zinc-500">✓ Step 1/4: FROM python:3.10-alpine</div>
                      <div className="text-zinc-500">✓ Step 2/4: COPY requirements.txt .</div>
                      <div className="text-zinc-500">✓ Step 3/4: RUN pip install -r requirements.txt</div>
                      <div className="text-emerald-300 font-bold">✓ registry: uploaded build image to Google Artifact Registry</div>
                    </>
                  )}
                  {selectedDevOpsStage === 3 && (
                    <>
                      <div className="text-zinc-500">✓ module.vpc: creating network topology... done</div>
                      <div className="text-zinc-500">✓ module.cloudrun: configuring serverless container resources... done</div>
                      <div className="text-zinc-500">✓ output: load_balancer_ip = 34.120.45.10</div>
                      <div className="text-emerald-300 font-bold">✓ plan: 3 resources added, 0 changed, 0 destroyed</div>
                    </>
                  )}
                  {selectedDevOpsStage === 4 && (
                    <>
                      <div className="text-zinc-500">✓ service: microservice deployed to us-central1</div>
                      <div className="text-zinc-500">✓ traffic: 100% routed to latest revision build</div>
                      <div className="text-zinc-500">✓ healthcheck: probes check... <span className="text-emerald-400 font-bold">200 OK</span></div>
                      <div className="text-emerald-300 font-bold">✓ active endpoint: https://api.medhini.dev</div>
                    </>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Horizontal Deployment Tracker Timeline Section */}
      <section id="timeline" className="w-full py-24 min-h-screen flex flex-col justify-center scroll-mt-28">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-4 mb-12 text-left">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              04 // PIPELINE METRICS
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>Deployment Tracker.</h2>
            <p className={`max-w-2xl text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              Tracing my educational milestones, internships, and startup operations as a horizontal CI/CD pipeline.
            </p>
          </div>

          {/* Horizontal progress bar container with horizontal scroll for mobile */}
          <div className="w-full overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            <div className="min-w-[900px] relative py-8 px-6">
              {/* Progress track background */}
              <div className="absolute left-[36px] right-[36px] h-0.5 bg-zinc-800 top-1/2 -translate-y-1/2" />

              {/* Progress track active fill */}
              <div
                className="absolute h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                style={{
                  left: "36px",
                  right: `calc(${100 - (selectedChapter / (timelineChapters.length - 1)) * 100}% + 36px)`
                }}
              />

              {/* Step buttons */}
              <div className="flex justify-between items-center relative z-10">
                {timelineChapters.map((item, idx) => {
                  const isSelected = selectedChapter === idx;
                  const isCompleted = idx < selectedChapter;

                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedChapter(idx)}
                      className="flex flex-col items-center group focus:outline-none w-20 text-center"
                    >
                      {/* Chapter identifier tag */}
                      <span className={`text-[8px] font-mono font-bold tracking-wider mb-2.5 uppercase transition-colors duration-200 ${isSelected ? 'text-indigo-400' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                        {item.chapter.split(' ').pop()}
                      </span>

                      {/* Connection node circle */}
                      <div className="h-6 w-6 flex items-center justify-center relative">
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full bg-zinc-950 border-2 border-indigo-400 flex items-center justify-center relative shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            <span className="absolute -inset-1 rounded-full border border-indigo-500/30 animate-ping" />
                          </div>
                        ) : isCompleted ? (
                          <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center text-[8px] text-white font-mono font-bold">
                            ✓
                          </div>
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-zinc-500 transition-colors duration-200" />
                        )}
                      </div>

                      {/* Period year tag */}
                      <span className={`text-[9px] font-mono mt-2.5 ${isSelected ? 'text-zinc-200 font-semibold' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                        {item.period.split(' ').pop()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detailed information card */}
          <div className="max-w-4xl mx-auto mt-6">
            <div className={`p-6 sm:p-8 rounded-2xl border text-left space-y-6 shadow-xl relative transition-all duration-500 ${theme === 'dark'
              ? 'bg-[#0f0f12] border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.03)]'
              : 'bg-white border-zinc-200 shadow-[0_0_50px_rgba(0,0,0,0.02)]'
              }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs text-zinc-400">PIPELINE STATUS: <span className="text-emerald-400 font-bold">SUCCESSFUL</span></span>
                </div>
                <div className="font-mono text-xs text-zinc-500">
                  STAGE: <span className="text-indigo-400 font-bold">{timelineChapters[selectedChapter].chapter}</span> // {timelineChapters[selectedChapter].period}
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8 space-y-3">
                  <h3 className={`text-2xl font-black font-display tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    {timelineChapters[selectedChapter].title}
                  </h3>
                  <p className="text-sm text-indigo-400 font-mono font-medium">
                    {timelineChapters[selectedChapter].role} @ {timelineChapters[selectedChapter].institution}
                  </p>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {timelineChapters[selectedChapter].description}
                  </p>
                </div>

                <div className="md:col-span-4 bg-zinc-950/40 border border-white/5 rounded-xl p-4 space-y-2.5 font-mono text-[11px] text-zinc-400">
                  <div>
                    <span className="text-zinc-500">ENVIRONMENT:</span>{" "}
                    <span className="text-zinc-300">{timelineChapters[selectedChapter].institution}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">ROLE_TARGET:</span>{" "}
                    <span className="text-zinc-300 font-bold">{timelineChapters[selectedChapter].role}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">BUILD_TIME :</span>{" "}
                    <span className="text-zinc-300">{timelineChapters[selectedChapter].period}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800">
                {timelineChapters[selectedChapter].skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${theme === 'dark' ? 'bg-zinc-900 border-white/5 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Section */}
      <section id="telemetry" className="w-full py-24 text-center scroll-mt-28">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-4 mb-12">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              05 // TELEMETRY
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>Git Contributions.</h2>
            <p className={`max-w-2xl mx-auto text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              A real-time command center visualizing my engineering velocity, technical focus, and open-source contributions.
            </p>
          </div>

          {/* Calendar Grid Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl relative overflow-hidden text-left mb-8 ${theme === 'dark' ? 'bg-[#0f0f12] border-white/5' : 'bg-white border-zinc-200'
            }`}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <h3 className="font-bold text-sm">Contributions</h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className={`px-2 py-0.5 rounded ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'}`}>Last Year</span>
                <span className="text-zinc-500">361 commits</span>
                <a href="https://github.com/medhinibr" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">@medhinibr</a>
              </div>
            </div>

            {/* Grid mockup */}
            <div className="overflow-x-auto">
              <div className="grid grid-cols-[repeat(53,minmax(8px,1fr))] gap-[3px] min-w-[500px]">
                {Array.from({ length: 371 }).map((_, i) => {
                  // Mock random commit colors (75% dark gray, 25% shades of blue/indigo)
                  let cellColor = theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-200';
                  const rand = Math.random();
                  if (rand > 0.85) {
                    cellColor = 'bg-indigo-600';
                  } else if (rand > 0.7) {
                    cellColor = 'bg-indigo-400';
                  } else if (rand > 0.6) {
                    cellColor = 'bg-indigo-300';
                  }
                  return (
                    <div
                      key={i}
                      className={`aspect-square w-full rounded-[1px] ${cellColor}`}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-zinc-500 mt-4">
              <span>361 contributions in the last year</span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <span className={`w-2 h-2 rounded-[1px] ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-200'}`}></span>
                <span className="w-2 h-2 rounded-[1px] bg-indigo-300"></span>
                <span className="w-2 h-2 rounded-[1px] bg-indigo-400"></span>
                <span className="w-2 h-2 rounded-[1px] bg-indigo-600"></span>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* AI Insights and Line Graph */}
          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            {/* Insights Grid */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              {[
                { title: "Focus Area", val: "Cloud & DevOps", icon: <Cpu className="w-4 h-4 text-indigo-400" /> },
                { title: "Open Source", val: "Active Committer", icon: <Globe className="w-4 h-4 text-emerald-400" /> },
                { title: "Consistency", val: "High Frequency", icon: <Activity className="w-4 h-4 text-violet-400" /> },
                { title: "Momentum", val: "Upward Trend", icon: <TrendingUp className="w-4 h-4 text-amber-400" /> }
              ].map((insight, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between shadow ${theme === 'dark' ? 'bg-[#0f0f12] border-white/5' : 'bg-white border-zinc-200'
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-zinc-500">{insight.title}</span>
                    {insight.icon}
                  </div>
                  <span className={`text-sm font-bold mt-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-950'
                    }`}>
                    {insight.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Activity Line Graph */}
            <div className={`md:col-span-7 p-6 rounded-2xl border text-left shadow-xl flex flex-col justify-between ${theme === 'dark' ? 'bg-[#0f0f12] border-white/5' : 'bg-white border-zinc-200'
              }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm">Activity Graph</h3>
                <span className="text-[10px] font-mono text-zinc-500">Medhini's Contribution Velocity</span>
              </div>

              {/* Custom SVG Line Chart */}
              <div className="h-32 w-full pt-4 relative">
                <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="5" x2="100" y2="5" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                  {/* Gradient Fill under path */}
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,30 L0,22 Q15,8 30,18 T60,5 T90,20 L100,28 L100,30 Z"
                    fill="url(#chartGlow)"
                  />

                  {/* Line Path */}
                  <motion.path
                    d="M0,22 Q15,8 30,18 T60,5 T90,20 L100,28"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 pt-2 border-t border-white/5 mt-2">
                <span>JUN 2025</span>
                <span>OCT 2025</span>
                <span>FEB 2026</span>
                <span>JUN 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Section */}
      <section id="contact" className="w-full py-24 min-h-screen flex flex-col justify-center scroll-mt-28">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="w-full relative min-h-[350px] flex flex-col justify-between text-left">

            <AnimatePresence mode="wait">
              {contactStep === 3 ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col justify-center items-center text-center space-y-4 py-16 w-full"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
                    Transmission Successful.
                  </h3>
                  <p className="text-sm text-zinc-500 max-w-sm">
                    Your signals have been routed successfully. I will get back to you at <strong>{contactForm.email}</strong> shortly.
                  </p>
                  <button
                    onClick={resetContactForm}
                    className={`px-6 py-2 rounded-full text-xs font-mono border transition-all mt-4 ${theme === 'dark' ? 'border-white/10 hover:bg-zinc-900 text-white' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-800'
                      }`}
                  >
                    Transmit Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={contactStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 w-full flex-grow flex flex-col justify-center"
                >
                  <div>
                    <h3 className={`text-2xl italic font-normal font-serif ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
                      }`}>
                      {contactStep === 0 ? "Identify yourself." : contactStep === 1 ? "Where should I reply?" : "What are we building?"}
                    </h3>
                  </div>

                  <form onSubmit={handleNextStep} className="w-full">
                    {contactStep === 0 && (
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactInput}
                        placeholder="Your name..."
                        className={`w-full py-4 text-4xl sm:text-6xl font-black bg-transparent border-b focus:outline-none transition-colors ${theme === 'dark'
                          ? 'border-white/10 text-white placeholder-zinc-800 focus:border-indigo-500'
                          : 'border-zinc-200 text-zinc-900 placeholder-zinc-300 focus:border-indigo-500'
                          }`}
                      />
                    )}

                    {contactStep === 1 && (
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactInput}
                        placeholder="Your email address..."
                        className={`w-full py-4 text-4xl sm:text-6xl font-black bg-transparent border-b focus:outline-none transition-colors ${theme === 'dark'
                          ? 'border-white/10 text-white placeholder-zinc-800 focus:border-indigo-500'
                          : 'border-zinc-200 text-zinc-900 placeholder-zinc-300 focus:border-indigo-500'
                          }`}
                        autoFocus={contactStep > 0}
                      />
                    )}

                    {contactStep === 2 && (
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactInput}
                        placeholder="Your message details..."
                        rows="2"
                        className={`w-full py-4 text-3xl sm:text-5xl font-black bg-transparent border-b focus:outline-none resize-none transition-colors ${theme === 'dark'
                          ? 'border-white/10 text-white placeholder-zinc-800 focus:border-indigo-500'
                          : 'border-zinc-200 text-zinc-900 placeholder-zinc-300 focus:border-indigo-500'
                          }`}
                        autoFocus={contactStep > 0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleNextStep();
                          }
                        }}
                      />
                    )}

                    {formError && (
                      <p className="text-xs text-rose-500 font-mono mt-2">{formError}</p>
                    )}
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Actions Footer & Social */}
            {contactStep < 3 && (
              <div className="flex justify-between items-center pt-8 border-t border-white/5 mt-12">
                <span className="text-xs font-mono text-zinc-500">
                  PHASE 0{contactStep + 1} // 03
                </span>

                <button
                  onClick={handleNextStep}
                  disabled={isTransmitting}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase"
                >
                  {isTransmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>Press Enter</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer & Social Icons */}
      <footer className="py-16 text-center">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full space-y-6">
          <div className="flex justify-center items-center space-x-6">
            <a
              href="mailto:brmedhini@gmail.com"
              className={`p-2.5 rounded-full border transition-all duration-200 ${theme === 'dark'
                ? 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:text-white hover:border-white/10'
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                }`}
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/medhinibr"
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-full border transition-all duration-200 ${theme === 'dark'
                ? 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:text-white hover:border-white/10'
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                }`}
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/br-medhini/"
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-full border transition-all duration-200 ${theme === 'dark'
                ? 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:text-white hover:border-white/10'
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                }`}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[10px] font-mono text-zinc-500 space-y-1">
            <p>© {new Date().getFullYear()} // B R MEDHINI // SYSTEM ONLINE</p>
            <p className="text-[9px] text-zinc-600">Built with React, Tailwind CSS v4, and Framer Motion.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}