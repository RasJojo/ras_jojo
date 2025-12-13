import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrambleText = ({ text, className }: { text: string, className?: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseEnter={scramble} className={className}>
      {display}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="h-full w-full p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
           </div>
           <div>
             <div className="text-white font-bold text-sm tracking-wide">ALEXANDRE.DEV</div>
             <div className="text-accent text-[10px] font-mono uppercase tracking-wider">Fullstack Engineer</div>
           </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.85] tracking-tighter text-white mb-6 mix-blend-overlay opacity-90">
          <ScrambleText text="CRAFTING" className="block text-slate-500 hover:text-white transition-colors cursor-default" />
          <ScrambleText text="DIGITAL" className="block cursor-default hover:text-accent transition-colors" />
          <ScrambleText text="REALITY." className="block cursor-default" />
        </h1>
        
        <p className="text-slate-400 max-w-sm text-sm leading-relaxed border-l border-accent/30 pl-4">
          Architecte d'interfaces numériques immersives. Je fusionne esthétique et performance pour créer le web de demain.
        </p>
      </div>

      <div className="relative z-10 mt-6">
         <div className="flex flex-wrap gap-2">
            {['REACT', 'TYPESCRIPT', 'THREE.JS', 'AI'].map((tech, i) => (
               <div key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-slate-300 tracking-widest hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 cursor-default">
                  {tech}
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Hero;