import React from 'react';
import { HACKATHONS } from '../constants';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

const Hackathons: React.FC = () => {
  return (
    <div className="h-full bg-accent text-black rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
       
       <div className="flex-shrink-0 z-10">
          <div className="flex items-center gap-2 mb-2">
             <Trophy className="text-black" size={24} />
             <h2 className="text-2xl font-bold uppercase tracking-tight">Hackathons</h2>
          </div>
          <p className="text-sm font-medium opacity-70 max-w-[200px]">Challenges relevés et prix remportés lors de compétitions.</p>
       </div>

       <div className="flex-1 w-full overflow-hidden relative z-10 mask-gradient-sides">
          <motion.div 
            className="flex gap-4 w-max"
            drag="x"
            dragConstraints={{ right: 0, left: -600 }}
          >
             {HACKATHONS.map((hack) => (
                <div key={hack.id} className="w-64 bg-black/5 border border-black/5 rounded-2xl p-5 hover:bg-black/10 transition-colors cursor-grab active:cursor-grabbing">
                   <div className="flex justify-between items-start mb-3">
                      <span className="font-mono text-xs font-bold border border-black/20 px-2 py-0.5 rounded-full">{hack.year}</span>
                      <Star size={16} fill="currentColor" />
                   </div>
                   <h3 className="font-bold text-lg leading-none mb-1">{hack.project}</h3>
                   <p className="text-xs font-medium opacity-60 mb-2">{hack.name}</p>
                   <div className="inline-block bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-sm">
                      {hack.award}
                   </div>
                </div>
             ))}
          </motion.div>
       </div>
    </div>
  );
};

export default Hackathons;