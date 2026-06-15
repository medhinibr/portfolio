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
  Mail
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



const constellationSkills = [
  { id: "gcp", name: "Google Cloud", category: "CLOUD COMPUTING", use: "Compute Engine, Cloud Functions, Kubernetes, Cloud Run", mastery: 85, x: 20, y: 35 },
  { id: "k8s", name: "Kubernetes", category: "ORCHESTRATION", use: "Automated scaling & container deployment management", mastery: 75, x: 50, y: 20 },
  { id: "docker", name: "Docker", category: "CONTAINERIZATION", use: "Microservices design and image optimization", mastery: 80, x: 75, y: 30 },
  { id: "python", name: "Python", category: "DEVELOPMENT", use: "Data Analytics, Machine Learning & Flask scripting", mastery: 90, x: 15, y: 65 },
  { id: "flutter", name: "Flutter", category: "MOBILE DEV", use: "Cross-platform mobile application programming (Dart)", mastery: 85, x: 45, y: 80 },
  { id: "react", name: "React.js", category: "FRONTEND DEV", use: "Dynamic component logic and virtual DOM renders", mastery: 80, x: 40, y: 50 },
  { id: "js", name: "JavaScript", category: "FRONTEND DEV", use: "Event-driven programming and ES6 standard design", mastery: 85, x: 70, y: 60 },
  { id: "sql", name: "MySQL", category: "DATASTORE", use: "Relational database modeling and performance queries", mastery: 75, x: 80, y: 80 },
  { id: "ml", name: "AI & ML", category: "AI OPERATIONS", use: "Hugging Face model imports & machine learning training", mastery: 70, x: 85, y: 15 }
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
    }
  },
  {
    chapter: "CHAPTER II",
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
    }
  },
  {
    chapter: "CHAPTER III",
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
    }
  },
  {
    chapter: "CHAPTER IV",
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
    }
  },
  {
    chapter: "CHAPTER V",
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
    }
  },
  {
    chapter: "CHAPTER VI",
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
    }
  },
  {
    chapter: "CHAPTER VII",
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
    }
  },
  {
    chapter: "CHAPTER VIII",
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
    }
  }
];

const projectsList = [
  {
    title: "Nivarya_Setu",
    category: "REACT FRONTEND & FLASK BACKEND",
    status: "ONGOING",
    description: "An Indian stock market simulator processing real-time NSE/BSE data, rendering technical charts, and conducting portfolio analytics.",
    image: "/dashboard_mockup.png",
    github: "https://github.com/medhinibr",
    tags: ["React", "Python", "Flask", "Stock-Analysis"]
  },
  {
    title: "Vyamir",
    category: "INTERACTIVE FRONTEND",
    status: "COMPLETED",
    description: "A visually rich weather analytics platform designed to offer real-time meteorological intelligence and a gamified rewards ecosystem.",
    image: "/editor_mockup.png",
    github: "https://github.com/medhinibr",
    tags: ["HTML", "CSS", "JavaScript", "Visualizations"]
  },
  {
    title: "Ed-Wise",
    category: "LMS PLATFORM",
    status: "PUBLIC REPO",
    description: "An AI-powered Learning Management System (LMS) designed to modernize student-teacher-parent interactions with gamification logic.",
    image: "/kanban_mockup.png",
    github: "https://github.com/medhinibr",
    tags: ["JavaScript", "Node.js", "LMS", "Gamification"]
  },
  {
    title: "Viral-Drop-Platform-",
    category: "DISTRIBUTED ASSET SHARING",
    status: "ACTIVE DEV",
    description: "A high-performance content delivery and automated assets sharing platform designed for frictionless community-wide file drops.",
    image: "/icons.svg",
    github: "https://github.com/medhinibr",
    tags: ["JavaScript", "Node.js", "Content-Sharing", "WebSockets"]
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
  const [selectedSkill, setSelectedSkill] = useState(constellationSkills[0]);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [hoveredProjectIdx, setHoveredProjectIdx] = useState(null);
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





      <header className="fixed top-8 left-0 w-full z-40 flex justify-between items-center px-6 sm:px-12 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <AnimatePresence>
            {scrolledPastHero && (
              <motion.a
                layoutId="download-resume-btn"
                href="/Resume%20-%20B%20R%20Medhini.pdf"
                download="Resume - B R Medhini.pdf"
                className={`w-[150px] sm:w-[180px] h-[40px] sm:h-[48px] flex items-center justify-center rounded-full text-[11px] sm:text-[13px] font-bold border shadow-md transition-all duration-300 ${theme === 'dark'
                  ? 'bg-black/80 border-white/10 text-white hover:bg-white/5'
                  : 'bg-white/80 border-zinc-200 text-zinc-800 hover:bg-zinc-50'
                  }`}
              >
                Download Resume
              </motion.a>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
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
      <section id="identity" className="w-full py-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-4 mb-16 text-left">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              01 // DEVOPS ENGINEER
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>Automating pipeline execution.</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 space-y-6 text-left">
              <h3 className={`text-4xl sm:text-5xl font-black font-display leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                Interactive Shell.<br />
                <span className="opacity-45">Automated pipelines.</span>
              </h3>
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

      {/* Skills Section (The Constellation) */}
      <section id="skills" className="w-full py-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-4 mb-16 text-left">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              02 // TECHNICAL ARSENAL
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>The Constellation.</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-stretch">
            {/* Left: Constellation Map */}
            <div className="md:col-span-7 h-96 relative rounded-2xl overflow-hidden bg-zinc-950/20 border border-white/5 flex items-center justify-center">
              {/* SVG Interactive Constellation Grid */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Draw connected lines */}
                {constellationSkills.map((s, idx) => (
                  <line
                    key={idx}
                    x1={`${s.x}%`}
                    y1={`${s.y}%`}
                    x2={`${selectedSkill.x}%`}
                    y2={`${selectedSkill.y}%`}
                    stroke="rgba(99, 102, 241, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="4"
                  />
                ))}
              </svg>

              {/* Render Constellation Node Buttons */}
              {constellationSkills.map((skill) => {
                const isSelected = selectedSkill.id === skill.id;
                return (
                  <button
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 ${isSelected
                      ? 'w-10 h-10 bg-indigo-500/20 border-2 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-20'
                      : 'w-6 h-6 bg-zinc-900/60 border border-white/10 hover:border-white/40 z-10'
                      }`}
                    aria-label={`Select skill ${skill.name}`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-indigo-400' : 'bg-zinc-600'
                      }`} />
                    <span className={`absolute top-8 text-[10px] font-mono whitespace-nowrap bg-zinc-950/80 px-2 py-0.5 rounded border border-white/5 transition-opacity ${isSelected ? 'opacity-100 text-white font-bold' : 'opacity-40 text-zinc-400 hover:opacity-100'
                      }`}>
                      {skill.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Detailed Card */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className={`p-8 rounded-2xl border text-left space-y-6 shadow-xl transition-all duration-300 ${theme === 'dark' ? 'bg-[#0f0f12] border-white/5' : 'bg-white border-zinc-200'
                }`}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold font-mono tracking-wider text-indigo-400 uppercase">
                      {selectedSkill.category}
                    </p>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                      }`}>
                      {selectedSkill.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-zinc-500">PRIMARY INTEGRATION & USE</p>
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                    {selectedSkill.use}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500">EXPERIENCE DEPTH</span>
                    <span className="text-indigo-400">{selectedSkill.mastery}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      key={selectedSkill.id}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.mastery}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="works" className="w-full py-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-4 mb-16 text-left">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              SELECTED WORKS
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>Engineering Impact.</h2>
            <p className={`max-w-2xl text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              A collection of projects and solutions demonstrating cloud integration, reactive frontends, and backend pipelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectsList.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setHoveredProjectIdx(idx)}
                onMouseLeave={() => setHoveredProjectIdx(null)}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-xl ${hoveredProjectIdx !== null && hoveredProjectIdx !== idx ? 'opacity-40 scale-[0.98] blur-[0.5px]' : 'opacity-100'} ${theme === 'dark' ? 'bg-[#0f0f12] border-white/5 hover:border-indigo-500/25' : 'bg-white border-zinc-200 hover:border-indigo-500/25'
                  }`}
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-950/20 border-b border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
                  </div>

                  <div className="p-6 space-y-4 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold font-mono tracking-wide text-indigo-400 uppercase">
                        {project.category}
                      </span>
                      <span className="text-[9px] font-bold font-mono bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-1.5 py-0.5 rounded">
                        {project.status}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                      }`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                      }`}>
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${theme === 'dark' ? 'bg-zinc-900 border-white/5 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                        }`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-xs font-semibold border transition-colors ${theme === 'dark'
                      ? 'bg-zinc-900 hover:bg-zinc-800 border-white/5 text-white'
                      : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800'
                      }`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    View Repository
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Architecture (Metrics) Section */}
      <section id="metrics" className="w-full py-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-4 mb-16 text-center">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              03 // THE ARCHITECTURE
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>Engineered for <span className="text-gradient">Excellence.</span></h2>
            <p className={`max-w-2xl mx-auto text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              Beautiful design is only half the equation. Under the hood, I focus on building robust, accessible, and highly optimized applications that respect the user's time and device.
            </p>
          </div>

          {/* Lighthouse Gauges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 justify-center">
            {[
              { label: "PERFORMANCE", val: 100, color: "text-emerald-400 stroke-emerald-500" },
              { label: "ACCESSIBILITY", val: 100, color: "text-indigo-400 stroke-indigo-500" },
              { label: "BEST PRACTICES", val: 100, color: "text-violet-400 stroke-violet-500" },
              { label: "SEO", val: 100, color: "text-amber-400 stroke-amber-500" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="48" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                    <motion.circle
                      cx="56"
                      cy="56"
                      r="48"
                      className={item.color}
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={301.6}
                      initial={{ strokeDashoffset: 301.6 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </svg>
                  <span className="text-2xl font-black">{item.val}</span>
                </div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-zinc-500">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Core Architectural Pillars */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            {[
              { title: "Serverless & Containerized", desc: "Deploying serverless endpoints and containerized services using Google Cloud Run, Cloud Functions, and Kubernetes." },
              { title: "Automated Deployments", desc: "Using Github Actions and CI/CD pipelines to ensure rapid iteration, automatic testing, and zero-downtime rollouts." },
              { title: "Optimized Query Schemas", desc: "Modeling and index tuning databases (MySQL, MongoDB) to execute analytical computations rapidly without performance drops." }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border text-left space-y-3 shadow-lg ${theme === 'dark' ? 'bg-[#0f0f12] border-white/5' : 'bg-white border-zinc-200'
                  }`}
              >
                <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-950'
                  }`}>
                  {card.title}
                </h3>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consciousness Map Timeline Section */}
      <section id="timeline" className="w-full py-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-full mx-auto px-6 sm:px-16 w-full">
          <div className="space-y-4 mb-16 text-left">
            <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
              04 // NEURAL CARTOGRAPHY
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>Consciousness Map.</h2>
            <p className={`max-w-2xl text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              Trace the neural pathways of evolution — from curiosity to mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            {/* Left List */}
            <div className="md:col-span-5 flex flex-col space-y-2 text-left justify-center">
              {timelineChapters.map((item, idx) => {
                const isSelected = selectedChapter === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedChapter(idx)}
                    className={`flex items-center gap-4 p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-300 relative group ${isSelected
                      ? item.colorTheme.bgSelected
                      : 'bg-transparent border-transparent hover:bg-zinc-800/10 hover:border-white/5'
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 ${isSelected
                      ? item.colorTheme.badgeSelected
                      : 'border-zinc-700 bg-zinc-900 text-zinc-500'
                      }`}>
                      {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"][idx] || (idx + 1)}
                    </div>
                    <div>
                      <span className={`text-[9px] font-mono font-bold tracking-wider uppercase ${isSelected ? item.colorTheme.text : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        {item.chapter}
                      </span>
                      <h3 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                        }`}>
                        {item.title}
                      </h3>
                    </div>

                    {isSelected && (
                      <motion.div
                        layoutId="arrowIndicator"
                        className={`absolute right-4 ${item.colorTheme.text}`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Card */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className={`p-8 rounded-2xl border text-left space-y-5 shadow-xl relative min-h-[300px] flex flex-col justify-between transition-all duration-300 ${theme === 'dark' ? `bg-[#0f0f12] border-white/5 hover:border-${timelineChapters[selectedChapter].colorTheme.border.split('-')[1]}-500/20` : `bg-white border-zinc-200 hover:border-${timelineChapters[selectedChapter].colorTheme.border.split('-')[1]}-500/20`
                }`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-0.5 w-8 ${timelineChapters[selectedChapter].colorTheme.lineGlow}`}></div>
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      {timelineChapters[selectedChapter].chapter}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}>
                    {timelineChapters[selectedChapter].title}
                  </h3>
                  <h4 className={`text-sm font-semibold mt-1 ${timelineChapters[selectedChapter].colorTheme.text}`}>
                    {timelineChapters[selectedChapter].role} @ {timelineChapters[selectedChapter].institution}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-mono">{timelineChapters[selectedChapter].period}</p>

                  <p className={`text-sm leading-relaxed italic mt-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                    "{timelineChapters[selectedChapter].description}"
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4">
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
        </div>
      </section>

      {/* GitHub Contributions Section */}
      <section id="telemetry" className="w-full py-24 text-center">
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
      <section id="contact" className="w-full py-24 min-h-screen flex flex-col justify-center">
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