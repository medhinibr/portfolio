import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as TerminalIcon, 
  X, 
  Play, 
  CheckCircle2, 
  Loader2, 
  Cpu, 
  Cloud, 
  GitBranch, 
  Activity, 
  Settings,
  ChevronDown
} from 'lucide-react';

export default function CloudConsole({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' or 'terminal'
  
  // Pipeline state
  const [pipelineState, setPipelineState] = useState('idle'); // 'idle' | 'running' | 'success' | 'failed'
  const [currentStep, setCurrentStep] = useState(-1);
  const [pipelineLogs, setPipelineLogs] = useState([]);
  const logContainerRef = useRef(null);

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'sys', text: 'Welcome to Medhini.Cloud Shell v1.2.0 (GNU/Linux 5.15.0-x86_64)' },
    { type: 'sys', text: 'Type "help" to inspect available cloud commands, or use the pipeline tab above.' },
    { type: 'sys', text: 'medhini@cloud-shell:~$ ' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef(null);

  // Scroll controls
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [pipelineLogs]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  // CI/CD steps logs config
  const pipelineSteps = [
    {
      name: 'Git Clone & Lint',
      logs: [
        'Initialized empty Git repository in /workspace/...',
        'remote: Enumerating objects: 42, done.',
        'remote: Counting objects: 100% (42/42), done.',
        'Unpacking objects: 100% (42/42), 4.15 KiB | 2.08 MiB/s, done.',
        'From https://github.com/medhinibr/portfolio',
        ' * branch            main       -> FETCH_HEAD',
        'Running ESLint code validation...',
        '✓ Code compliance check passed. 0 warnings, 0 errors.'
      ]
    },
    {
      name: 'Docker Compile',
      logs: [
        'Sending build context to Docker daemon  452.1kB',
        'Step 1/5 : FROM node:20-alpine AS build-stage',
        ' ---> 4a413d463e26',
        'Step 2/5 : WORKDIR /app',
        ' ---> Running in 21f8a846c2',
        'Removing intermediate container 21f8a846c2',
        ' ---> 8e83b4c102b',
        'Step 3/5 : COPY package*.json ./',
        ' ---> 3e18a8b10bc',
        'Step 4/5 : RUN npm ci --only=production',
        'added 241 packages in 4.12s',
        ' ---> 7f8c12a86bc',
        'Step 5/5 : RUN npm run build',
        'vite build completed in 294ms.',
        'Successfully built image gcr.io/medhini-cloud/portfolio-frontend:latest'
      ]
    },
    {
      name: 'Terraform Plan',
      logs: [
        'Retrieving Terraform state from remote gcs backend...',
        'Refreshing Terraform state in-memory...',
        'Terraform will perform the following actions:',
        '  # google_cloud_run_service.portfolio will be updated in-place',
        '  ~ resource "google_cloud_run_service" "portfolio" {',
        '      ~ spec {',
        '          ~ containers {',
        '              ~ image = "gcr.io/medhini-cloud/portfolio-frontend:prev" -> "gcr.io/medhini-cloud/portfolio-frontend:latest"',
        '            }',
        '        }',
        '    }',
        'Plan: 0 to add, 1 to change, 0 to destroy.'
      ]
    },
    {
      name: 'Deploy GKE/Run',
      logs: [
        'Deploying resources to Google Cloud Run...',
        'Pinging target load balancer service: 12ms RTT',
        'Deploying new revision to service "portfolio" in us-central1...',
        'Creating revision portfolio-00042-xyz...',
        'Routing 100% of traffic to revision portfolio-00042-xyz...',
        '✓ Container deployment complete. Active URL: https://medhini.cloud',
        '📊 [TELEMETRY]: CPU usage 0.4%, SLA 100%, 0 failed requests.'
      ]
    }
  ];

  // Run CI/CD Pipeline
  const runPipeline = () => {
    if (pipelineState === 'running') return;
    setPipelineState('running');
    setPipelineLogs(['[SYSTEM]: Launching Cloud Build Orchestrator Pipeline v1.2...', '']);
    setCurrentStep(0);

    let stepIdx = 0;
    
    const executeStep = () => {
      if (stepIdx >= pipelineSteps.length) {
        setPipelineState('success');
        setCurrentStep(4);
        setPipelineLogs(prev => [...prev, '', '🎉 PIPELINE SUCCESSFUL! ALL STAGES PROVISIONED AND ROUTED']);
        return;
      }

      setCurrentStep(stepIdx);
      const step = pipelineSteps[stepIdx];
      
      setPipelineLogs(prev => [...prev, `>>> STAGE ${stepIdx + 1}: ${step.name.toUpperCase()}`, '--------------------------------------']);
      
      let logIdx = 0;
      const printLog = () => {
        if (logIdx >= step.logs.length) {
          setPipelineLogs(prev => [...prev, `✓ Stage ${stepIdx + 1} Complete.`, '']);
          stepIdx++;
          setTimeout(executeStep, 800);
          return;
        }

        setPipelineLogs(prev => [...prev, step.logs[logIdx]]);
        logIdx++;
        setTimeout(printLog, 150);
      };

      printLog();
    };

    setTimeout(executeStep, 500);
  };

  // Run Terminal Commands
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    if (!cmd) return;

    const newHistory = [
      ...terminalHistory.slice(0, -1),
      { type: 'user', text: `medhini@cloud-shell:~$ ${cmd}` }
    ];

    const args = cmd.toLowerCase().split(' ');
    const mainCmd = args[0];

    let replies = [];

    switch (mainCmd) {
      case 'clear':
      case 'cls':
        setTerminalHistory([{ type: 'sys', text: 'medhini@cloud-shell:~$ ' }]);
        setTerminalInput('');
        return;
      case 'help':
        replies = [
          'Available Cloud CLI Commands:',
          '  terraform apply  - Trigger infrastructure provision plan',
          '  kubectl get pods - List active running container replicas',
          '  gcloud info      - Print GCP active profile and credentials',
          '  skills           - View Medhini\'s tech stack metrics',
          '  projects         - List her deployed cloud projects',
          '  contact          - Retrieve direct networking channels',
          '  clear            - Clean up console buffer screen'
        ];
        break;
      case 'terraform':
        if (args[1] === 'apply') {
          replies = [
            'terraform apply -auto-approve',
            'google_compute_network.vpc: Refreshing state... [ID: dev-vpc]',
            'google_container_cluster.primary: Modifying GKE node replicas (3 nodes)...',
            'Apply complete! Resources: 0 added, 1 changed, 0 destroyed.'
          ];
        } else {
          replies = ['Usage: terraform apply'];
        }
        break;
      case 'kubectl':
        if (args[1] === 'get' && args[2] === 'pods') {
          replies = [
            'NAME                               READY   STATUS    RESTARTS   AGE',
            'medhini-api-gateway-7f8c9b-2a1b    1/1     Running   0          4d',
            'cloudrun-orchestrator-9c3d-8f92    1/1     Running   0          12d',
            'huggingface-data-pipeline-5c8e     1/1     Running   2          6d',
            'portfolio-frontend-3i3r-x72        1/1     Running   0          42m'
          ];
        } else {
          replies = ['Usage: kubectl get pods'];
        }
        break;
      case 'gcloud':
        if (args[1] === 'info' || args[1] === 'projects') {
          replies = [
            'Google Cloud SDK [v412.0.0]',
            'Account: brmedhini@gmail.com',
            'Project ID: medhini-cloud-prod',
            'Region: us-central1 (Iowa)',
            'SLA Status: 100% Operational'
          ];
        } else {
          replies = ['Usage: gcloud info'];
        }
        break;
      case 'skills':
        replies = [
          'MEDHINI CLOUD ARSENAL:',
          '  Cloud Services:   GCP, Cloud Run, GKE, Compute Engine',
          '  IaC & Containers: Terraform, Docker, YAML configs',
          '  Languages:        Python, SQL, Java, C programming',
          '  DevOps CI/CD:     GitHub Actions, Linux Scripting, Git',
          '  Web Stack:        React, Tailwind, Flask REST APIs, Firebase'
        ];
        break;
      case 'projects':
        replies = [
          'PROVISIONED DEPLOYMENTS:',
          '  1. GCP Cloud Run Orchestrator - Serverless deployment workflow',
          '  2. K8s API Ingress Gateway   - High throughput traffic director',
          '  3. Python AI Parser          - Hugging Face / Pandas dataset build pipeline',
          '  4. Medhini.Cloud Console     - Interactive portfolio orchestration tool'
        ];
        break;
      case 'contact':
        replies = [
          'ESTABLISH COMMUNICATION CHANNELS:',
          '  Direct Mail: brmedhini@gmail.com',
          '  LinkedIn:    linkedin.com/in/br-medhini',
          '  GitHub:      github.com/medhinibr'
        ];
        break;
      default:
        replies = [
          `bash: ${mainCmd}: command not found.`,
          'Type "help" to view the available Cloud and DevOps CLI command catalog.'
        ];
    }

    replies.forEach((r) => {
      newHistory.push({ type: 'sys', text: r });
    });

    newHistory.push({ type: 'sys', text: 'medhini@cloud-shell:~$ ' });

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      
      {/* Floating Launcher Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="console-fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all border relative overflow-hidden group focus:outline-none cursor-pointer ${
              isDark 
                ? 'bg-[#0f0f12] border-indigo-500/30 text-indigo-400' 
                : 'bg-indigo-600 border-indigo-400/20 text-white'
            }`}
          >
            <span className="absolute inset-0 bg-indigo-500/10 rounded-full scale-100 group-hover:scale-150 transition-transform duration-500" />
            <TerminalIcon className="w-5 h-5 relative z-10" />
            <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full animate-pulse z-20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cloud Console Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="console-window"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`w-[480px] max-w-[calc(100vw-2rem)] h-[450px] max-h-[calc(100vh-6rem)] rounded-2xl border flex flex-col shadow-2xl overflow-hidden ${
              isDark 
                ? 'bg-[#0a0a0d]/95 border-white/10 text-zinc-300 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl' 
                : 'bg-zinc-950 text-zinc-300 border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.6)]'
            }`}
          >
            
            {/* Header / Window Controls */}
            <div className="p-4 bg-zinc-950 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-xs font-bold tracking-wider flex items-center gap-1.5 text-white">
                    <Cloud className="w-3.5 h-3.5 text-indigo-400" />
                    shell.medhini.cloud
                  </div>
                  <div className="text-[8px] text-zinc-500 uppercase tracking-widest mt-0.5">
                    GCP Cloud SDK // Active Session
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md hover:bg-zinc-800/60 transition-colors text-zinc-500 hover:text-white cursor-pointer"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md hover:bg-rose-500/10 hover:text-rose-400 transition-colors text-zinc-500 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tab Selector */}
            <div className="flex border-b border-white/5 bg-zinc-950/80 text-[10px] uppercase font-bold tracking-wider select-none">
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`flex-1 py-3 flex items-center justify-center gap-1.5 border-r border-white/5 transition-colors cursor-pointer ${
                  activeTab === 'pipeline' 
                    ? 'bg-zinc-900 text-indigo-400 border-b-2 border-indigo-500' 
                    : 'text-zinc-500 hover:bg-zinc-900/40 hover:text-zinc-300'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                CI/CD Pipeline
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`flex-1 py-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'terminal' 
                    ? 'bg-zinc-900 text-indigo-400 border-b-2 border-indigo-500' 
                    : 'text-zinc-500 hover:bg-zinc-900/40 hover:text-zinc-300'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                Interactive CLI
              </button>
            </div>

            {/* Tab Content Panel */}
            <div className="flex-grow p-4 overflow-hidden flex flex-col bg-zinc-950/30">
              
              {/* Tab 1: CI/CD Pipeline Simulator */}
              {activeTab === 'pipeline' && (
                <div className="h-full flex flex-col justify-between space-y-4">
                  
                  {/* Visual Node Grid */}
                  <div className="grid grid-cols-4 gap-2 text-center select-none pt-2">
                    {[
                      { icon: <GitBranch className="w-4 h-4" />, name: 'Git' },
                      { icon: <Cpu className="w-4 h-4" />, name: 'Docker' },
                      { icon: <Settings className="w-4 h-4" />, name: 'Terraform' },
                      { icon: <Cloud className="w-4 h-4" />, name: 'Deploy' }
                    ].map((step, idx) => {
                      const isCompleted = currentStep > idx;
                      const isActive = currentStep === idx;
                      return (
                        <div 
                          key={idx}
                          className={`p-2 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                            isCompleted 
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]' 
                              : isActive 
                                ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-400 animate-pulse'
                                : 'bg-zinc-900/30 border-white/5 text-zinc-600'
                          }`}
                        >
                          <div className="mb-1">{step.icon}</div>
                          <span className="text-[9px] font-bold uppercase tracking-wider">{step.name}</span>
                          {isCompleted && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 mt-1" />}
                          {isActive && <Loader2 className="w-2.5 h-2.5 text-indigo-400 animate-spin mt-1" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Terminal Log Output Area */}
                  <div 
                    ref={logContainerRef}
                    className="flex-grow bg-black/80 rounded-xl p-3 border border-white/5 font-mono text-[9px] text-zinc-400 overflow-y-auto space-y-1 select-text scrollbar-thin"
                  >
                    {pipelineLogs.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-1.5">
                        <TerminalIcon className="w-6 h-6 opacity-30" />
                        <span>Build Orchestrator idle. Trigger build below.</span>
                      </div>
                    ) : (
                      pipelineLogs.map((log, lIdx) => (
                        <div 
                          key={lIdx}
                          className={
                            log.startsWith('>>>') 
                              ? 'text-indigo-400 font-bold mt-2' 
                              : log.startsWith('✓') || log.startsWith('🎉')
                                ? 'text-emerald-400 font-bold'
                                : 'opacity-80'
                          }
                        >
                          {log}
                        </div>
                      ))
                    )}
                  </div>

                  {/* Build Control Trigger */}
                  <button
                    onClick={runPipeline}
                    disabled={pipelineState === 'running'}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      pipelineState === 'running'
                        ? 'bg-zinc-800 text-zinc-500 border border-white/5'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.01]'
                    }`}
                  >
                    {pipelineState === 'running' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Deploy Pipeline Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        Trigger Cloud Deployment Build
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Tab 2: Interactive Terminal CLI */}
              {activeTab === 'terminal' && (
                <div className="h-full flex flex-col justify-between">
                  
                  {/* Console History buffer */}
                  <div 
                    className="flex-grow bg-black/40 rounded-xl p-3 border border-white/5 font-mono text-[10px] text-zinc-300 overflow-y-auto space-y-1.5 select-text scrollbar-thin"
                  >
                    {terminalHistory.map((h, hIdx) => (
                      <div 
                        key={hIdx} 
                        className={h.type === 'user' ? 'text-indigo-400 font-bold' : 'text-zinc-300 whitespace-pre-wrap'}
                      >
                        {h.text}
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>

                  {/* Terminal CLI Command input */}
                  <form onSubmit={handleTerminalSubmit} className="mt-3 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-indigo-400">medhini@cloud-shell:~$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type 'help' for command registry..."
                      className="flex-grow bg-zinc-900/60 border border-white/5 rounded-lg py-2 px-3 text-[10px] font-mono focus:outline-none focus:border-indigo-500/50 text-white"
                      autoFocus
                    />
                  </form>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
