import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="h-full flex flex-col md:flex-row bg-black relative">
      
      {/* Sidebar List */}
      <div className="w-full md:w-[280px] p-6 border-r border-white/5 flex flex-col bg-card/50">
         <h2 className="text-xs font-mono text-slate-500 mb-6 uppercase tracking-[0.2em]">Select_Work</h2>
         
         <div className="flex flex-col gap-1 flex-1">
            {PROJECTS.map((proj, idx) => (
               <button 
                  key={proj.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`text-left px-4 py-3 rounded text-sm transition-all duration-300 border-l-2 ${
                    activeIdx === idx 
                    ? 'border-accent bg-white/5 text-white' 
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
               >
                  <div className="font-bold tracking-wide">{proj.title}</div>
               </button>
            ))}
         </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 relative overflow-hidden group">
         <div className="absolute inset-0 z-0">
             <AnimatePresence mode="wait">
                <motion.img 
                   key={activeIdx}
                   src={PROJECTS[activeIdx].imageUrl}
                   initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                   animate={{ opacity: 0.6, scale: 1, filter: 'blur(0px)' }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className="w-full h-full object-cover"
                />
             </AnimatePresence>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
             {/* Scanlines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
         </div>

         <div className="absolute bottom-0 left-0 w-full p-8 z-20">
            <motion.div
               key={`content-${activeIdx}`}
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.4 }}
            >
               <div className="flex justify-between items-end">
                  <div>
                      <div className="flex gap-2 mb-3">
                        {PROJECTS[activeIdx].technologies.map(t => (
                           <span key={t} className="text-[10px] bg-accent text-black font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                              {t}
                           </span>
                        ))}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                         {PROJECTS[activeIdx].title}
                      </h3>
                      <p className="text-slate-300 max-w-md text-sm leading-relaxed">
                         {PROJECTS[activeIdx].description}
                      </p>
                  </div>
                  
                  <button className="w-14 h-14 bg-white hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300">
                     <ArrowUpRight size={24} className="text-black" />
                  </button>
               </div>
            </motion.div>
         </div>
         
         {/* Decorative HUD Elements */}
         <div className="absolute top-4 right-4 z-20 text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded">
            IMG_PREVIEW_0{activeIdx + 1}
         </div>
         <div className="absolute bottom-8 right-20 z-20 text-white/20">
            <Maximize2 size={20} />
         </div>
      </div>
    </div>
  );
};

export default Projects;