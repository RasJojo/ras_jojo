import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Box, User } from 'lucide-react';

// Views
import Hub from './components/views/Hub';
import WorkView from './components/views/WorkView';
import ProfileView from './components/views/ProfileView';

export type ViewState = 'HUB' | 'WORK' | 'PROFILE';

function App() {
  const [view, setView] = useState<ViewState>('HUB');

  // Navigation simplifiée : HUB -> BIO -> PROD
  const navItems = [
    { id: 'HUB', icon: Grid, label: 'HUB' },
    { id: 'PROFILE', icon: User, label: 'BIO' },
    { id: 'WORK', icon: Box, label: 'PROD' },
  ];

  return (
    <div className="relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden text-white font-sans selection:bg-white selection:text-black">
      
      {/* HEADER DESKTOP */}
      <div className="fixed z-40 mix-blend-difference pointer-events-none hidden md:block top-[calc(var(--header-offset)+var(--safe-top))] left-[var(--header-offset)]">
        <div className="font-display font-bold text-xl leading-none">RAS_JOJO</div>
        <div className="text-[10px] tracking-widest opacity-60 mt-1">PRODUCT OWNER & BLOCKCHAIN</div>
      </div>
      
      {/* HEADER MOBILE */}
      <div className="fixed top-0 left-0 w-full z-40 px-[var(--header-offset)] pb-[var(--header-offset)] pt-[calc(var(--header-offset)+var(--safe-top))] bg-gradient-to-b from-bg via-bg/90 to-transparent md:hidden flex justify-between items-start pointer-events-none">
        <div>
          <div className="font-display font-bold text-lg leading-none">RAS_JOJO</div>
          <div className="text-[9px] tracking-widest opacity-60 mt-1">PO & WEB3 BUILDER</div>
        </div>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mt-1"></div>
      </div>
      
      {/* NETWORK STATUS (Desktop Only) */}
      <div className="fixed z-40 flex flex-col items-end mix-blend-difference pointer-events-none hidden md:block top-[calc(var(--header-offset)+var(--safe-top))] right-[var(--header-offset)]">
         <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] tracking-widest">NETWORK: MAINNET</span>
         </div>
         <span className="text-[10px] opacity-40">BLK: #{Math.floor(Date.now() / 1000)}</span>
      </div>

      {/* VIEWPORT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          {view === 'HUB' && <Hub setView={setView} />}
          {view === 'WORK' && <WorkView />}
          {view === 'PROFILE' && <ProfileView />}
        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION BAR - RESPONSIVE & CENTERED */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pb-[calc(1.5rem+var(--safe-bottom))] md:pb-[calc(2rem+var(--safe-bottom))] pointer-events-none">
        <div className="glass-card px-2 py-2 mx-4 rounded-2xl flex items-center justify-between gap-1 pointer-events-auto shadow-2xl w-full max-w-[320px] md:w-auto md:max-w-none">
          {navItems.map((item, index) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id as ViewState)}
                className={`
                  relative px-4 py-3 md:px-6 md:py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 flex-1 md:flex-none
                  ${isActive ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-white/50 hover:text-white hover:bg-white/5'}
                `}
              >
                <item.icon size={18} className="md:w-4 md:h-4" />
                <span className="font-display font-bold text-[10px] md:text-xs tracking-wider hidden md:block">0{index + 1}/{item.label}</span>
                <span className="font-display font-bold text-[10px] tracking-wider md:hidden">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
