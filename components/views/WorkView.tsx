import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { ExternalLink } from 'lucide-react';

const WorkView: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="h-full w-full bg-bg relative flex flex-col">
      
      <div className="flex-1 min-h-0 overflow-y-auto px-4 md:px-12 pt-[calc(6rem+var(--safe-top))] md:pt-[calc(7rem+var(--safe-top))] pb-[calc(7rem+var(--safe-bottom))] md:pb-[calc(8rem+var(--safe-bottom))] scroll-smooth">
        <div className="max-w-[1600px] mx-auto">
          
           {/* Header Section */}
           <header className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
              <div>
                 <h2 className="font-display font-bold text-4xl md:text-6xl uppercase leading-none tracking-tight">Digital<br/>Ship Logs</h2>
              </div>
              <div className="text-left md:text-right">
                 <div className="text-[10px] md:text-xs text-white/40 tracking-widest mb-2">ECOSYSTEMS</div>
                 <div className="flex gap-3 text-sm font-mono text-blockchain">
                    <span>SUI</span><span className="text-white/20">/</span>
                    <span>XRPL</span><span className="text-white/20">/</span>
                    <span>SOLANA</span>
                 </div>
              </div>
           </header>

           {/* Projects List */}
           <div className="grid grid-cols-1 gap-6 relative isolate">
              {PROJECTS.map((project, index) => {
                 const isContain = project.imageFit === 'contain';
                 return (
                   <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      style={{ zIndex: hoveredProject === project.id ? 50 : 1 }}
                      className={`glass-panel p-6 md:p-10 rounded-xl relative group cursor-default transition-all duration-300 hover:border-blockchain/40`}
                   >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10 items-start">
                       
                       {/* Index */}
                       <div className="font-mono text-blockchain text-xs md:text-sm mt-1 opacity-50">
                          0{index + 1}
                       </div>

                       {/* Main Info */}
                       <div className="flex-1">
                          <h3 className="font-display font-bold text-2xl md:text-4xl mb-4 text-white group-hover:text-blockchain transition-colors duration-300">
                             {project.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                             {project.technologies.map(tech => (
                                <span key={tech} className="px-2 py-1 border border-white/10 rounded-sm text-[10px] uppercase tracking-wider text-white/60 bg-white/5">
                                   {tech}
                                </span>
                             ))}
                          </div>
                          
                          <p className="text-white/60 max-w-2xl leading-relaxed text-sm md:text-base border-l border-white/10 pl-4">
                             {project.description}
                          </p>
                       </div>

                       {/* Link Button */}
                       <div className="md:w-auto flex flex-col justify-between items-start md:items-end mt-4 md:mt-0">
                          {project.link ? (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-white border border-white/20 px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-blockchain hover:border-blockchain hover:text-white transition-all"
                            >
                               GitHub <ExternalLink size={14} />
                            </a>
                          ) : (
                            <span className="text-xs text-white/30 uppercase tracking-widest border border-dashed border-white/10 px-3 py-1 rounded-sm">Building...</span>
                          )}
                       </div>
                    </div>

                    {/* Image Hover Preview */}
                    <AnimatePresence>
                       {hoveredProject === project.id && (
                          <motion.div 
                             initial={{ opacity: 0, scale: 0.95, x: 20 }}
                             animate={{ opacity: 1, scale: 1, x: 0 }}
                             exit={{ opacity: 0, scale: 0.95 }}
                             transition={{ duration: 0.2 }}
                             className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 w-[clamp(260px,30vw,420px)] aspect-[16/10] pointer-events-none rounded-lg overflow-hidden border border-white/10 bg-black shadow-2xl"
                             style={{ zIndex: 100 }}
                          >
                             {/* Background & Image handling */}
                             <div className="absolute inset-0 bg-black"></div>
                             <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                loading="lazy"
                                decoding="async"
                                className={`w-full h-full relative z-10 ${isContain ? 'object-contain p-6' : 'object-cover opacity-80'}`} 
                             />
                             {!isContain && (
                                <div className="absolute inset-0 bg-blockchain/10 mix-blend-overlay z-20"></div>
                             )}
                          </motion.div>
                       )}
                    </AnimatePresence>
                   </motion.div>
                 );
              })}
           </div>
        </div>
      </div>
    </div>
  );
};

export default WorkView;
