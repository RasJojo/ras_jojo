import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <div className="h-full p-8 flex flex-col relative">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Experience</h2>
        <div className="px-2 py-1 border border-accent/20 rounded bg-accent/5 text-[10px] text-accent font-mono">
           HISTORY_LOG
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar relative space-y-8">
        {/* Timeline Line */}
        <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-white/10 to-transparent"></div>

        {EXPERIENCES.map((exp, i) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="pl-8 relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-zinc-800 bg-black flex items-center justify-center group-hover:scale-110 transition-transform z-10">
               <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-accent transition-colors"></div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
               <h3 className="font-bold text-lg text-white group-hover:text-accent transition-colors">{exp.role}</h3>
               <span className="font-mono text-xs text-slate-500">{exp.period}</span>
            </div>
            
            <p className="text-sm text-slate-400 font-medium mb-2">{exp.company}</p>
            <p className="text-sm text-slate-500 leading-relaxed mb-3">
              {exp.description}
            </p>
            
            <div className="flex gap-2 flex-wrap">
               {exp.technologies.map(t => (
                 <span key={t} className="text-[10px] text-slate-600 border border-white/5 px-1.5 py-0.5 rounded bg-white/5">
                   {t}
                 </span>
               ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;