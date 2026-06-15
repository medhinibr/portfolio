import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Terminal, 
  Sparkles, 
  Cpu, 
  Database, 
  Check, 
  HelpCircle, 
  Cloud,
  ChevronDown,
  Globe,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';

export default function Chatbot({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Initializing secure connection to Medhini.AI Cloud Brain... [OK]\n\nHello! I am Medhini's Virtual Cloud & DevOps assistant. I have integrated live Cloud APIs (no keys needed!) to showcase live telemetry. Ask me about Medhini's skills, projects, or select one of the cloud services below!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSystem: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeSimulation, setActiveSimulation] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle standard quick query clicks
  const handleQuickQuery = (queryText) => {
    if (activeSimulation) return;
    
    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: queryText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(async () => {
      const botReply = await generateReply(queryText);
      setIsTyping(false);
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  // Trigger the DevOps deployment simulation
  const startDeploymentSimulation = () => {
    if (activeSimulation) return;
    setActiveSimulation(true);

    const simulationSteps = [
      { text: "$ terraform init && terraform apply -auto-approve", delay: 300, isCmd: true },
      { text: "📡 [CLOUDBRAIN API] Connecting to GCP us-central1 Kubernetes cluster...", delay: 1100 },
      { text: "🐳 [CLOUDBRAIN API] Pulling latest docker build: gcr.io/medhini-cloud/api:latest", delay: 2000 },
      { text: "⚡ [CLOUDBRAIN API] Building resource graph: 4 resources planned...", delay: 2900 },
      { text: "⚙️ [CLOUDBRAIN API] Provisioning Load Balancer forwarding rules...", delay: 3800 },
      { text: "✓ [CLOUDBRAIN API] Health check status: 200 OK (RTT: 12ms)", delay: 4700 },
      { text: "🎉 Deployment Successful! Service live at https://demo.medhini.dev", delay: 5600, isSuccess: true }
    ];

    // Add initial user request message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: "Trigger mock deployment",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Run simulation timeline
    simulationSteps.forEach((step) => {
      setTimeout(() => {
        setIsTyping(false);
        const simMsg = {
          id: Date.now() + Math.random(),
          sender: 'bot',
          text: step.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isTerminal: true,
          isCmd: step.isCmd,
          isSuccess: step.isSuccess
        };
        setMessages(prev => [...prev, simMsg]);
        
        // If not the final success step, keep typing indicator showing
        if (!step.isSuccess) {
          setIsTyping(true);
        } else {
          setIsTyping(false);
          setActiveSimulation(false);
        }
      }, step.delay);
    });
  };

  // Live Cloud API Callers
  const fetchLiveJoke = async () => {
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      if (data && data.setup && data.punchline) {
        return `🤖 [LIVE JOKE API RESPONSE]\n\nQ: ${data.setup}\n\nA: ${data.punchline}`;
      }
    } catch (e) {
      console.warn("Joke API failed", e);
    }
    return "🤖 [API OFFLINE FALLBACK JOKE]\n\nWhy did the cloud engineer build a ladder? To debug their high-level API!";
  };

  const fetchLiveAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      if (data && data.slip && data.slip.advice) {
        return `💡 [LIVE ADVICE API RESPONSE]\n\n"${data.slip.advice}"`;
      }
    } catch (e) {
      console.warn("Advice API failed", e);
    }
    return "💡 [API OFFLINE FALLBACK ADVICE]\n\nAlways write clear Terraform configs and automate your deployments.";
  };

  const fetchCryptoPrice = async () => {
    try {
      const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      const data = await res.json();
      if (data && data.bpi && data.bpi.USD) {
        const rate = data.bpi.USD.rate;
        const updated = data.time.updated;
        return `🪙 [LIVE CRYPTO TELEMETRY RESPONSE]\n\nBitcoin (BTC) Price: $${rate} USD\nLast Updated: ${updated}`;
      }
    } catch (e) {
      console.warn("Crypto API failed", e);
    }
    return "🪙 [API OFFLINE FALLBACK]\n\nUnable to retrieve real-time crypto telemetry. Try again in a few moments.";
  };

  const fetchWikipediaSummary = async (query) => {
    try {
      let subject = query.replace(/what is|who is|tell me about|search for|define/gi, '').trim();
      // Strip leading articles (a, an, the)
      subject = subject.replace(/^(a|an|the)\s+/i, '').trim();
      subject = subject.replace(/\?+$/, '').trim();
      if (!subject) return null;

      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(subject)}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.extract) {
          return `📖 [LIVE WIKIPEDIA CLOUD KNOWLEDGE]\n\n${data.extract}\n\nRead more: ${data.content_urls?.desktop?.page || ''}`;
        }
      }
    } catch (e) {
      console.warn("Wikipedia API failed", e);
    }
    return null;
  };

  // Submit text input message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || activeSimulation) return;

    const query = inputText.trim();
    setInputText('');

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(async () => {
      // Check for deployment commands
      if (query.toLowerCase().includes('deploy') || query.toLowerCase().includes('terraform') || query.toLowerCase().includes('run')) {
        setIsTyping(false);
        startDeploymentSimulation();
      } else {
        const botReply = await generateReply(query);
        setIsTyping(false);
        setMessages(prev => [...prev, botReply]);
      }
    }, 1000);
  };

  // Local knowledge & live API router
  const generateReply = async (rawInput) => {
    const input = rawInput.toLowerCase().trim();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Helper to format responses
    const createBotMsg = (text) => ({
      id: Date.now(),
      sender: 'bot',
      text,
      time
    });

    // Handle clear screen
    if (input === 'clear' || input === 'cls') {
      setTimeout(() => {
        setMessages([
          {
            id: Date.now(),
            sender: 'bot',
            text: "Terminal log buffer flushed. Cloud Orchestrator is ready.",
            time,
            isSystem: true
          }
        ]);
      }, 10);
      return createBotMsg("Clearing history...");
    }

    // Live API commands
    if (input.includes('joke')) {
      const jokeText = await fetchLiveJoke();
      return createBotMsg(jokeText);
    }

    if (input.includes('advice')) {
      const adviceText = await fetchLiveAdvice();
      return createBotMsg(adviceText);
    }

    if (input.includes('crypto') || input.includes('bitcoin') || input.includes('btc') || input.includes('price')) {
      const cryptoText = await fetchCryptoPrice();
      return createBotMsg(cryptoText);
    }

    // Basic conversational inputs
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('namaste')) {
      return createBotMsg("Hello! Welcome to the Cloud Orchestration console. Ask me about Medhini's skills, projects, contact info, or trigger 'Run Mock Deploy' below!");
    }

    if (input.includes('who') || input.includes('about') || input.includes('medhini') || input.includes('profile')) {
      return createBotMsg("B R Medhini is a Cloud Architect & DevOps Specialist. She builds containerized applications on GCP using Kubernetes, automates configuration infrastructure via Terraform, and designs custom web frontends.");
    }

    if (input.includes('skills') || input.includes('tech') || input.includes('languages') || input.includes('python') || input.includes('gcp') || input.includes('docker') || input.includes('kubernetes') || input.includes('java')) {
      return createBotMsg("Medhini's engineering credentials:\n\n• ☁️ **Cloud Platform**: Google Cloud Platform (GCP), Cloud Run, GKE, Compute Engine.\n• 🏗️ **Infrastructure as Code**: Terraform configuration, YAML container manifest definitions.\n• 💻 **Languages**: Python scripting, SQL schemas, Java, C programming.\n• 🛠️ **DevOps Tools**: GitHub Actions pipelines, Docker workflows, Unix shell.\n• 🌐 **Web Technologies**: HTML5, CSS3, JavaScript, Flask REST APIs, Firebase backend systems.");
    }

    if (input.includes('projects') || input.includes('works') || input.includes('portfolio') || input.includes('code') || input.includes('registry')) {
      return createBotMsg("Highlighted projects:\n\n1. **GCP Cloud Run Orchestrator**: High-performance container build workflows.\n2. **Kubernetes API Gateway**: Microservice ingress configuration.\n3. **Python AI Pipeline**: Hugging Face + Pandas data parsing pipeline.\n4. **DevOps Portfolio**: This portfolio site, optimized using Tailwind, React, and Framer Motion.");
    }

    if (input.includes('contact') || input.includes('email') || input.includes('hire') || input.includes('linkedin') || input.includes('phone') || input.includes('mail')) {
      return createBotMsg("Feel free to connect directly:\n\n• 📧 **Email**: brmedhini@gmail.com\n• 💼 **LinkedIn**: linkedin.com/in/br-medhini\n• 🐙 **GitHub**: github.com/medhinibr");
    }

    if (input.includes('resume') || input.includes('cv') || input.includes('download')) {
      return createBotMsg("Check the 'Deployment Tracker' section above for educational/internship history, or email brmedhini@gmail.com for her PDF resume.");
    }

    if (input.includes('coffee') || input.includes('fuel')) {
      return createBotMsg("☕ *Virtual Coffee brewed!* [OK]\nDevOps deployment latency decreased by 15%.");
    }

    if (input.includes('status') || input.includes('metrics')) {
      return createBotMsg("SYSTEM REPORT // STATUS: ACTIVE\n• Cluster: us-central-1b\n• Node pool size: 3 nodes\n• Active APIs: Official Joke API, Coindesk Crypto API, Advice Slip API");
    }

    // Try Wikipedia Instant Answer search for general queries
    const searchAnswer = await fetchWikipediaSummary(rawInput);
    if (searchAnswer) {
      return createBotMsg(searchAnswer);
    }

    // Default response if no matches
    return createBotMsg("My local database matched your input with low confidence. However, I can fetch live details! Try clicking one of the live API options below (Joke, Advice, Bitcoin) or query Medhini's background!");
  };

  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Action Button with pulse glow */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all relative overflow-hidden group border focus:outline-none cursor-pointer ${
              isDark 
                ? 'bg-[#0f0f12] border-indigo-500/30 text-indigo-400' 
                : 'bg-indigo-600 border-indigo-400/20 text-white'
            }`}
          >
            <span className="absolute inset-0 bg-indigo-500/10 rounded-full scale-100 group-hover:scale-150 transition-transform duration-500" />
            <MessageSquare className="w-6 h-6 relative z-10" />
            <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full animate-pulse z-20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] rounded-2xl border flex flex-col shadow-2xl overflow-hidden ${
              isDark 
                ? 'bg-[#0a0a0d]/95 border-white/10 text-white shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-xl' 
                : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.1)] backdrop-blur-xl'
            }`}
          >
            
            {/* Header */}
            <div className={`p-4 border-b flex items-center justify-between ${
              isDark ? 'bg-zinc-950/80 border-white/5' : 'bg-zinc-50 border-zinc-200'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="font-mono text-xs font-bold tracking-wider flex items-center gap-1.5">
                    <Cloud className="w-3.5 h-3.5 text-indigo-400" />
                    Medhini.AI <span className="text-[9px] text-zinc-500">v1.1</span>
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">
                    Cloud Orchestrator // Live APIs
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 rounded-md hover:bg-zinc-800/40 transition-colors text-zinc-400 hover:text-white cursor-pointer`}
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 rounded-md hover:bg-rose-500/10 hover:text-rose-400 transition-colors text-zinc-400 cursor-pointer`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chatbot System Metrics Telemetry Bar */}
            <div className="flex justify-between px-4 py-1.5 bg-zinc-950/20 text-[8px] font-mono text-zinc-500 border-b border-white/5">
              <span>CPU: 1.1%</span>
              <span>MEM: 18.2MB</span>
              <span>RTT: 14ms</span>
              <span className="text-emerald-500 font-bold">API CONNS SECURE</span>
            </div>

            {/* Message History list */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 font-mono text-xs select-text">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  {/* Sender Tag */}
                  <span className="text-[8px] text-zinc-500 mb-1 select-none">
                    {msg.sender === 'user' ? 'medhini_guest@localhost' : 'medhini_ai@cloud_brain'}
                  </span>

                  {/* Message bubble */}
                  <div className={`p-3 rounded-xl max-w-[85%] whitespace-pre-wrap leading-relaxed border ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600/10 border-indigo-500/20 text-indigo-300 rounded-tr-none'
                      : msg.isTerminal
                        ? 'bg-zinc-950 border-white/5 font-mono text-[11px] w-full text-zinc-300'
                        : isDark
                          ? 'bg-zinc-900/40 border-white/5 text-zinc-300 rounded-tl-none'
                          : 'bg-zinc-100 border-zinc-200 text-zinc-800 rounded-tl-none'
                  }`}>
                    {msg.isCmd ? (
                      <div className="text-indigo-400 font-bold">{msg.text}</div>
                    ) : msg.isSuccess ? (
                      <div className="text-emerald-400 font-bold">{msg.text}</div>
                    ) : (
                      msg.text
                    )}
                  </div>
                  
                  {/* Message Timestamp */}
                  <span className="text-[8px] text-zinc-600 mt-1 select-none">
                    {msg.time}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <span className="text-[8px] text-zinc-500 mb-1">medhini_ai@cloud_brain</span>
                  <div className={`p-3 rounded-xl bg-zinc-900/40 border border-white/5 text-zinc-400 flex items-center gap-1`}>
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies scroll area */}
            <div className="px-4 py-2 flex gap-1.5 overflow-x-auto select-none border-t border-white/5 bg-zinc-950/20 whitespace-nowrap">
              <button
                disabled={activeSimulation}
                onClick={startDeploymentSimulation}
                className="px-3 py-1.5 rounded-full text-[9px] font-mono border bg-indigo-600/10 border-indigo-500/20 text-indigo-300 hover:bg-indigo-600/25 transition-all flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                🚀 Run Mock Deploy
              </button>
              <button
                disabled={activeSimulation}
                onClick={() => handleQuickQuery("Live Joke API")}
                className="px-3 py-1.5 rounded-full text-[9px] font-mono border border-emerald-500/10 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/20 transition-all cursor-pointer disabled:opacity-50"
              >
                🤣 Live Joke API
              </button>
              <button
                disabled={activeSimulation}
                onClick={() => handleQuickQuery("Live Advice API")}
                className="px-3 py-1.5 rounded-full text-[9px] font-mono border border-cyan-500/10 text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/20 transition-all cursor-pointer disabled:opacity-50"
              >
                💡 Live Advice API
              </button>
              <button
                disabled={activeSimulation}
                onClick={() => handleQuickQuery("Bitcoin Price")}
                className="px-3 py-1.5 rounded-full text-[9px] font-mono border border-amber-500/10 text-amber-400 bg-amber-500/5 hover:bg-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
              >
                🪙 Bitcoin Price
              </button>
              <button
                disabled={activeSimulation}
                onClick={() => handleQuickQuery("Who is Medhini?")}
                className="px-3 py-1.5 rounded-full text-[9px] font-mono border border-white/5 text-zinc-400 hover:bg-zinc-800/40 hover:text-white transition-all cursor-pointer disabled:opacity-50"
              >
                👤 Biography
              </button>
              <button
                disabled={activeSimulation}
                onClick={() => handleQuickQuery("Show skills")}
                className="px-3 py-1.5 rounded-full text-[9px] font-mono border border-white/5 text-zinc-400 hover:bg-zinc-800/40 hover:text-white transition-all cursor-pointer disabled:opacity-50"
              >
                🛠️ Skills Catalog
              </button>
            </div>

            {/* Chat Input form */}
            <form 
              onSubmit={handleSendMessage}
              className={`p-3 border-t flex items-center gap-2 ${
                isDark ? 'bg-zinc-950/80 border-white/5' : 'bg-zinc-50 border-zinc-200'
              }`}
            >
              <div className="relative flex-grow flex items-center">
                <input
                  type="text"
                  value={inputText}
                  disabled={activeSimulation}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={activeSimulation ? "Deployment running..." : "Query orchestrator..."}
                  className={`w-full py-2 pl-8 pr-3 rounded-lg text-xs font-mono border focus:outline-none transition-all ${
                    isDark
                      ? 'bg-zinc-900 border-white/5 text-white placeholder-zinc-600 focus:border-indigo-500/50'
                      : 'bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-indigo-600/50'
                  } disabled:opacity-50`}
                />
                <Terminal className="w-3.5 h-3.5 absolute left-2.5 text-zinc-600" />
              </div>
              <button
                type="submit"
                disabled={!inputText.trim() || activeSimulation}
                className={`p-2 rounded-lg transition-all flex-shrink-0 cursor-pointer ${
                  inputText.trim() && !activeSimulation
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/35 hover:bg-indigo-500'
                    : 'bg-zinc-800 border border-white/5 text-zinc-600'
                } disabled:opacity-50`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
