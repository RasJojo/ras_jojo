import React from 'react';
import { motion } from 'framer-motion';
import { ViewState } from '../../App';
import { ArrowRight, Layers } from 'lucide-react';

interface HubProps {
  setView: (view: ViewState) => void;
}

const Marquee = ({ text }: { text: string }) => (
  <div className="relative flex overflow-hidden py-3 border-y border-white/5 bg-white/[0.01]">
    <motion.div 
      className="flex whitespace-nowrap"
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
    >
      {[...Array(8)].map((_, i) => (
        <span key={i} className="text-xl md:text-4xl font-display font-bold text-white/20 px-4 md:px-8 uppercase tracking-widest">
          {text} •
        </span>
      ))}
    </motion.div>
  </div>
);

const Hub: React.FC<HubProps> = ({ setView }) => {
  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden bg-bg">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blockchain/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="flex-1 min-h-0 flex flex-col justify-center w-full max-w-[1800px] mx-auto z-10 overflow-y-auto custom-scrollbar">
        
        <div className="px-6 md:px-20 pt-[calc(5rem+var(--safe-top))] pb-12 flex flex-col justify-center min-h-[min(520px,70vh)]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6 md:gap-10"
            >
              {/* Header Tag */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-blockchain tracking-widest text-[10px] md:text-sm">
                <span className="w-2 h-2 bg-blockchain rounded-full animate-pulse"></span>
                Rasamimanana Joela (Ras Jojo) // PORTFOLIO V2
              </div>

              {/* Hero Title - RESPONSIVE FIX */}
              <h1 className="font-display font-bold leading-[0.9] tracking-tighter uppercase relative z-20">
                  <span className="block text-[clamp(2.2rem,7vw,6rem)] text-white">TRANSFORMING</span>
                  <span className="block text-[clamp(2.2rem,7vw,6rem)] text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>IDEAS INTO</span>
                  <span className="block text-[clamp(2.2rem,7vw,6rem)] text-white drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">PRODUCTS.</span>
              </h1>
              
              {/* Description & CTA */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-4 border-l-2 border-white/10 pl-6">
                  <p className="font-sans text-sm md:text-lg text-white/50 leading-relaxed max-w-lg">
                    <strong className="text-white">Product Owner & Blockchain Builder.</strong><br/>
                    Je transforme des concepts abstraits en produits digitaux tangibles. Expert SUI, XRPL & Solana.
                  </p>

                  <button 
                    onClick={() => setView('WORK')}
                    className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-sm font-bold text-xs md:text-sm tracking-widest hover:bg-blockchain hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    EXPLORE PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Footer Ticker */}
      <div className="pb-[calc(6rem+var(--safe-bottom))] md:pb-[calc(7rem+var(--safe-bottom))] z-20">
         <Marquee text="BLOCKCHAIN • PRODUCT OWNER • DEFI • WEB3 • INNOVATION" />
      </div>

    </div>
  );
};

export default Hub;
