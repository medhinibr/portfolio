import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Interactive letter morph component for primary name "MEDHINI"
const AnimatedLetter = ({ item, index, hoveredIdx, setHoveredIdx, clickedIdx, setClickedIdx, theme }) => {
  const isHovered = (hoveredIdx === index) || (clickedIdx === index);
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
      className="flex items-center justify-center transition-all duration-300 h-24 sm:h-36 md:h-44 cursor-pointer"
    >
      <div className={`flex items-center select-none font-sans font-black text-6xl sm:text-8xl md:text-[9.5rem] tracking-tighter leading-none transition-all duration-300 ${isOtherHovered ? 'blur-sm opacity-20 scale-90' : 'opacity-100 scale-100'
        }`}>
        {item.type === 'prefix' && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block overflow-hidden whitespace-nowrap bg-gradient-to-b from-[#D8B4FE] to-white bg-clip-text text-transparent font-sans font-black text-6xl sm:text-8xl md:text-[9.5rem] tracking-tighter uppercase mr-1"
          >
            {item.prefix}
          </motion.span>
        )}

        <motion.span
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={`inline-block cursor-default transition-all duration-300 ${
            isHovered 
              ? 'bg-gradient-to-b from-[#D8B4FE] to-white bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(216,180,254,0.55)]' 
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block overflow-hidden whitespace-nowrap bg-gradient-to-b from-[#D8B4FE] to-white bg-clip-text text-transparent font-sans font-black text-6xl sm:text-8xl md:text-[9.5rem] tracking-tighter uppercase ml-1"
          >
            {item.suffix}
          </motion.span>
        )}
      </div>
    </div>
  );
};

// Custom styled DEV letters
const AnimatedGradientLetter = ({ char, delay, hoveredIdx }) => {
  const isAnyHovered = hoveredIdx !== null;

  return (
    <motion.span
      initial={{ y: 80, opacity: 0 }}
      animate={{
        y: 0,
        opacity: isAnyHovered ? 0.2 : 0.8,
        filter: isAnyHovered ? "blur(3px)" : "blur(0px)"
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
        filter: "drop-shadow(0 0 25px rgba(0, 210, 239, 0.8)) blur(0px)"
      }}
      className="inline-block cursor-default font-sans font-black tracking-tighter select-none dev-gradient transition-all duration-150 text-6xl sm:text-8xl md:text-[10rem] leading-[0.85]"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
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
    title: "The Arcade",
    role: "Facilitator Participant",
    institution: "Google Cloud Arcade",
    period: "JUL 2024 - JAN 2025",
    description: "Executed hands-on cloud labs focusing on container orchestration, virtual machines, and serverless workflows.",
    skills: ["Google Cloud", "Kubernetes", "Docker", "Compute Engine"],
    colorTheme: {
      text: "text-indigo-400",
      border: "border-indigo-500",
      bgSelected: "bg-indigo-600/10 border-indigo-500 shadow-md shadow-indigo-600/5",
      badgeSelected: "border-indigo-400 bg-indigo-500/20 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]",
      lineGlow: "bg-indigo-500"
    }
  },
  {
    chapter: "CHAPTER III",
    title: "The Spark",
    role: "Co-Founder & CSO",
    institution: "Berukodige Farm",
    period: "JAN 2025 - PRESENT",
    description: "Co-founded an agri-innovation startup integrating nurseries with custom software management models.",
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
    chapter: "CHAPTER IV",
    title: "Pragati Path",
    role: "Data Science Intern",
    institution: "Infosys Springboard",
    period: "APR 2025 - JUL 2025",
    description: "Trained on future-ready analytics models, processing telemetry data, and building Python ML models.",
    skills: ["Python", "Machine Learning", "Data Analytics", "SQL"],
    colorTheme: {
      text: "text-amber-400",
      border: "border-amber-500",
      bgSelected: "bg-amber-600/10 border-amber-500 shadow-md shadow-amber-600/5",
      badgeSelected: "border-amber-400 bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]",
      lineGlow: "bg-amber-500"
    }
  },
  {
    chapter: "CHAPTER V",
    title: "The Horizon",
    role: "Flutter Developer Intern",
    institution: "Benevolate (Texas, USA)",
    period: "APR 2026 - PRESENT",
    description: "Building production cross-platform mobile architectures, designing custom widgets, and handling API states.",
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
  }
];

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [clickedIdx, setClickedIdx] = useState(null);
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(constellationSkills[0]);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [hoveredProjectIdx, setHoveredProjectIdx] = useState(null);

  // Interactive contact form state
  const [contactStep, setContactStep] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);

  // Monitor custom theme toggling
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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

      {/* Background radial glows */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-violet-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Telemetry log box in bottom left */}
      <div className="fixed bottom-8 left-8 z-30 hidden md:block w-72 font-mono text-[10px] p-4 rounded-lg select-none transition-all duration-300 border backdrop-blur-md dark:text-zinc-500 dark:bg-black/40 dark:border-white/5 text-zinc-600 bg-white/60 border-zinc-200 shadow-sm">
        <div className="flex items-center justify-between border-b dark:border-white/5 border-zinc-200 pb-2 mb-2">
          <span>SYSTEM MONITOR // STATUS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
        </div>
        <p className="leading-normal">
          {(hoveredIdx !== null || clickedIdx !== null) ? medhiniLetters[hoveredIdx !== null ? hoveredIdx : clickedIdx].logText : "IDLE // STACK TELEMETRY READY"}
        </p>
      </div>

      {/* Floating Top Nav Elements */}
      <header className="fixed top-8 left-8 right-8 z-40 flex justify-between items-center px-4 sm:px-8">
        <a
          href="https://linktr.ee"
          target="_blank"
          rel="noreferrer"
          className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wider uppercase border transition-all duration-300 shadow-sm ${theme === 'dark'
            ? 'bg-[#18181b]/80 border-white/5 text-white hover:bg-zinc-800'
            : 'bg-white/80 border-zinc-200 text-zinc-800 hover:bg-zinc-100'
            }`}
        >
          Download Resume
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all duration-300 ${theme === 'dark'
              ? 'bg-[#18181b]/80 border-white/5 text-zinc-400 hover:text-white'
              : 'bg-white/80 border-zinc-200 text-zinc-600 hover:text-zinc-900'
              }`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setActiveMenu(!activeMenu)}
            className={`p-2.5 rounded-full border transition-all duration-300 ${theme === 'dark'
              ? 'bg-[#18181b]/80 border-white/5 text-zinc-400 hover:text-white'
              : 'bg-white/80 border-zinc-200 text-zinc-600 hover:text-zinc-900'
              }`}
            aria-label="Toggle Navigation Menu"
          >
            {activeMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Slide drawer menu overlay */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={`fixed top-0 right-0 w-80 h-full z-30 flex flex-col justify-center p-12 border-l shadow-2xl transition-colors duration-300 ${theme === 'dark' ? 'bg-black border-white/5' : 'bg-white border-zinc-200'
              }`}
          >
            <nav className="flex flex-col space-y-6 text-xl font-bold font-mono">
              {[
                { label: 'Initialize', target: 'home' },
                { label: 'About', target: 'identity' },
                { label: 'Stack', target: 'skills' },
                { label: 'Build', target: 'works' },
                { label: 'Optimize', target: 'metrics' },
                { label: 'Experience', target: 'timeline' },
                { label: 'Deploy', target: 'contact' }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.target}`}
                  onClick={() => setActiveMenu(false)}
                  className={`flex items-center group transition-colors ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                >
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity mr-2 text-indigo-500" />
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative pt-20">
        <div className="space-y-6 w-full max-w-[90vw] md:max-w-7xl mx-auto relative">
          {/* Status Pill */}
          <div className="flex justify-center">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium border uppercase ${theme === 'dark' ? 'bg-[#18181b]/50 border-white/5 text-indigo-400' : 'bg-white/50 border-zinc-200 text-indigo-600'
              }`}>
              <span className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></span>
              Medhini B R // Cloud & DevOps Practitioner
            </div>
          </div>

          {/* Hero Ambient Backlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-indigo-500/10 via-violet-500/5 to-cyan-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0" />

          {/* Heading */}
          <div className="space-y-2 select-none relative z-10">
            <div className="flex justify-center flex-nowrap gap-x-2 text-7xl sm:text-8xl md:text-[9.5rem] leading-[0.9] tracking-tighter w-full overflow-visible">
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
            <div className="flex justify-center flex-nowrap gap-x-1 sm:gap-x-1.5 leading-[0.85] tracking-tighter w-full overflow-visible">
              {"DEV".split("").map((char, index) => (
                <AnimatedGradientLetter
                  key={`dev-${index}`}
                  char={char}
                  delay={0.28 + index * 0.04}
                  hoveredIdx={hoveredIdx !== null ? hoveredIdx : clickedIdx}
                />
              ))}
            </div>
          </div>

          {/* Dynamic Hover Status Log */}
          <div className="h-6 flex justify-center items-center mt-6 select-none relative z-10">
            <AnimatePresence mode="wait">
              {(hoveredIdx !== null || clickedIdx !== null) ? (
                <motion.p
                  key={hoveredIdx !== null ? hoveredIdx : clickedIdx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold"
                >
                  {medhiniLetters[hoveredIdx !== null ? hoveredIdx : clickedIdx].logText}
                </motion.p>
              ) : (
                <motion.p
                  key="default"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs font-mono tracking-widest text-zinc-500 uppercase"
                >
                  Hover over letters to compile stack intelligence
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <p className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
            I build high-performance cloud architectures, cross-platform mobile experiences, and scalable software pipelines that live at the intersection of infrastructure and design.
          </p>

          {/* Center Call Button */}
          <div className="pt-8 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className={`px-8 py-3.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 ${theme === 'dark'
                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                : 'bg-zinc-950 text-white hover:bg-zinc-800'
                }`}
            >
              Book a call
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-ping mt-4"></div>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section id="identity" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-24 border-t border-white/5 w-full max-w-7xl mx-auto">
        <div className="space-y-4 mb-16 text-left">
          <div className="inline-block text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase">
            01 // THE IDENTITY
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}>Engineered for impact.</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 text-left">
            <h3 className={`text-4xl sm:text-5xl font-black font-display leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
              Systems that scale.<br />
              <span className="opacity-45">Experiences that matter.</span>
            </h3>
            <p className={`text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
              Engineering isn't just about syntax. It's about bridging the gap between rigorous cloud architecture and deeply resonant user experiences. I build products and architectures that operate seamlessly at scale, utilizing serverless patterns and robust data flows.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${theme === 'dark' ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-200 text-zinc-800'
                }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Co-Founder @ Berukodige Farm
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${theme === 'dark' ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-200 text-zinc-800'
                }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Flutter Intern @ Benevolate
              </span>
            </div>
          </div>

          {/* Right Column: Code Panel */}
          <div className="md:col-span-5 w-full">
            <div className={`p-6 rounded-2xl border text-left font-mono text-sm relative overflow-hidden shadow-xl ${theme === 'dark' ? 'bg-[#0f0f12] border-white/5' : 'bg-white border-zinc-200'
              }`}>
              <div className="flex gap-1.5 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="text-xs text-zinc-500 ml-2">~/identity.ts</span>
              </div>
              <pre className="overflow-x-auto text-[13px] leading-relaxed">
                <code>
                  <span className="text-indigo-400">interface</span> <span className="text-yellow-300">Developer</span> &#123;{'\n'}
                  {'  '}mindset: <span className="text-emerald-400">"Cloud Native & DevOps"</span>;{'\n'}
                  {'  '}architecture: <span className="text-emerald-400">"Serverless & Kubernetes"</span>;{'\n'}
                  {'  '}performance: <span className="text-emerald-400">"Highly Available & Scalable"</span>;{'\n'}
                  &#125;{'\n\n'}
                  <span className="text-zinc-500">// Ready to build.</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (The Constellation) */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-24 border-t border-white/5 w-full max-w-7xl mx-auto">
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
      </section>

      {/* Selected Works Section */}
      <section id="works" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-24 border-t border-white/5 w-full max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-3 gap-6">
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
      </section>

      {/* The Architecture (Metrics) Section */}
      <section id="metrics" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-24 border-t border-white/5 w-full max-w-7xl mx-auto">
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
      </section>

      {/* Consciousness Map Timeline Section */}
      <section id="timeline" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-24 border-t border-white/5 w-full max-w-7xl mx-auto">
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
          <div className="md:col-span-5 flex flex-col space-y-4 text-left justify-center">
            {timelineChapters.map((item, idx) => {
              const isSelected = selectedChapter === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedChapter(idx)}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 relative group ${isSelected
                    ? item.colorTheme.bgSelected
                    : 'bg-transparent border-transparent hover:bg-zinc-800/10 hover:border-white/5'
                    }`}
                >
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 ${isSelected
                    ? item.colorTheme.badgeSelected
                    : 'border-zinc-700 bg-zinc-900 text-zinc-500'
                    }`}>
                    {idx === 0 ? "I" : idx === 1 ? "II" : idx === 2 ? "III" : idx === 3 ? "IV" : "V"}
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
      </section>

      {/* GitHub Contributions Section */}
      <section id="telemetry" className="py-24 border-t border-white/5 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 text-center">
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
      </section>

      {/* Interactive Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-24 border-t border-white/5 w-full max-w-7xl mx-auto">
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
                      autoFocus
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
      </section>

      {/* Footer & Social Icons */}
      <footer className="py-16 border-t border-white/5 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
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