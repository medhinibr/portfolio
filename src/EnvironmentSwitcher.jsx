import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToggleLeft, ToggleRight, Activity, Terminal, ShieldAlert } from 'lucide-react';

export default function EnvironmentSwitcher({ envMode, setEnvMode, debugLogs, addDebugLog, chaosState, triggerChaosMonkey }) {
  const logEndRef = useRef(null);

  // Auto scroll logs to bottom
  useEffect(() => {
    if (envMode === 'dev') {
      logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [debugLogs, envMode]);

  const toggleEnvironment = () => {
    if (envMode === 'prod') {
      setEnvMode('dev');
      addDebugLog('SYSTEM EVENT // ENV_MODE mutated to: DEVELOPMENT');
      addDebugLog('SYSTEM EVENT // Spawning debug logs monitor...');
      addDebugLog('SYSTEM EVENT // Injecting grid overlay shaders...');
    } else {
      setEnvMode('prod');
      addDebugLog('SYSTEM EVENT // ENV_MODE mutated to: PRODUCTION (Stable)');
    }
  };

  return (
    <>
      {/* Chaos Monkey Button (Dev Mode Only) */}
      <AnimatePresence>
        {envMode === 'dev' && (
          <div className="fixed bottom-20 right-6 z-[9999] font-mono">
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerChaosMonkey}
              disabled={chaosState !== 'stable'}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full border shadow-2xl transition-all select-none cursor-pointer font-bold text-[9px] uppercase tracking-widest ${
                chaosState === 'crashed'
                  ? 'bg-rose-950/90 border-rose-500/40 text-rose-500 animate-pulse cursor-not-allowed'
                  : chaosState === 'healing'
                  ? 'bg-amber-950/90 border-amber-500/40 text-amber-400 cursor-not-allowed'
                  : 'bg-red-950/90 border-red-500/30 hover:border-red-400/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:bg-red-900/20'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                chaosState === 'crashed' ? 'bg-rose-500' : chaosState === 'healing' ? 'bg-amber-500 animate-pulse' : 'bg-red-500 animate-pulse'
              }`} />
              <span>
                {chaosState === 'crashed' && 'POD CRASHED'}
                {chaosState === 'healing' && 'SELF HEALING'}
                {chaosState === 'stable' && 'LAUNCH CHAOS MONKEY'}
              </span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
      {/* Floating Toggle Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-[9999] font-mono">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleEnvironment}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-2xl transition-all select-none cursor-pointer ${
            envMode === 'dev'
              ? 'bg-[#1b120c]/90 border-amber-500/40 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
              : 'bg-zinc-950/90 border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-400/50'
          }`}
        >
          {/* Pulsing indicator light */}
          <span className={`w-2 h-2 rounded-full relative flex`}>
            <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
              envMode === 'dev' ? 'bg-amber-400' : 'bg-emerald-400'
            }`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              envMode === 'dev' ? 'bg-amber-500' : 'bg-emerald-500'
            }`} />
          </span>

          <span className="text-[10px] font-black uppercase tracking-widest">
            ENV: {envMode === 'dev' ? 'DEVELOPMENT' : 'PRODUCTION'}
          </span>

          {envMode === 'dev' ? (
            <ToggleRight className="w-4 h-4 text-amber-400" />
          ) : (
            <ToggleLeft className="w-4 h-4 text-emerald-400" />
          )}
        </motion.button>
      </div>

      {/* Floating Debug Monitor (Bottom Left - Dev Mode Only) */}
      <AnimatePresence>
        {envMode === 'dev' && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 left-6 z-[9998] w-80 h-52 rounded-xl border border-amber-500/20 bg-black/95 text-amber-400/90 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col overflow-hidden font-mono text-[9px]"
          >
            {/* Console Header */}
            <div className="flex items-center justify-between px-3.5 py-2 border-b border-amber-500/10 bg-amber-500/5 select-none">
              <div className="flex items-center gap-1.5 font-bold">
                <Terminal className="w-3.5 h-3.5 animate-pulse" />
                <span>SYSTEM DEBUG MONITOR</span>
              </div>
              <div className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-amber-500/60 animate-bounce" />
                <span className="text-[7px] text-amber-500/60 tracking-wider">LIVE</span>
              </div>
            </div>

            {/* Scrollable logs area */}
            <div className="flex-grow p-3 overflow-y-auto space-y-1.5 select-text scrollbar-thin scrollbar-thumb-amber-500/20 scrollbar-track-transparent">
              {debugLogs.map((log) => (
                <div key={log.id} className="leading-normal flex items-start gap-1">
                  <span className="text-amber-500/40 select-none">[{log.time}]</span>
                  <span className="break-all">{log.text}</span>
                </div>
              ))}
              <div ref={logEndRef} />
            </div>

            {/* Console Footer */}
            <div className="px-3.5 py-1.5 border-t border-amber-500/10 bg-black/40 text-[7px] text-amber-500/40 uppercase tracking-widest flex justify-between select-none">
              <span>Log Count: {debugLogs.length}</span>
              <span className="flex items-center gap-1 text-[7px]">
                <ShieldAlert className="w-2.5 h-2.5 text-amber-500/60" />
                Non-destructive Dev Mode
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
