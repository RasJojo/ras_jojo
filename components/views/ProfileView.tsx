import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, HACKATHONS, BIO, EDUCATION } from '../../constants';
import { GraduationCap, Trophy, Code, Briefcase } from 'lucide-react';

const ProfileView: React.FC = () => {
  return (
    <div className="h-full w-full bg-bg relative flex flex-col">
       
       <div className="flex-1 min-h-0 overflow-y-auto px-4 md:px-12 pt-[calc(6rem+var(--safe-top))] md:pt-[calc(7rem+var(--safe-top))] pb-[calc(7rem+var(--safe-bottom))] md:pb-[calc(8rem+var(--safe-bottom))] scroll-smooth">
          <div className="max-w-[1600px] mx-auto">
            
            {/* Header Identity */}
            <div className="flex flex-col lg:flex-row gap-12 mb-16">
               <div className="lg:w-2/3">
                  <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 uppercase leading-tight">
                    Rasamimanana Joela<br/><span className="text-blockchain">Product Owner & Builder.</span>
                  </h1>
                  <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
                     {BIO}
                  </p>
               </div>
               
               <div className="lg:w-1/3 flex flex-col justify-end">
                  <div className="glass-panel p-6 rounded-xl">
                     <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                        <span className="text-[10px] tracking-widest text-white/40">ALIAS</span>
                        <span className="font-mono text-base font-bold text-white">Ras_Jojo</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] tracking-widest text-white/40">SPECIALITY</span>
                        <span className="font-mono text-base font-bold text-blockchain">BLOCKCHAIN PO</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
               
               {/* Left: XP & Education */}
               <div className="flex flex-col gap-12">
                  
                  {/* Education */}
                  <section>
                    <h3 className="font-display text-lg mb-6 flex items-center gap-2 text-white/80">
                        <GraduationCap className="text-blockchain" size={20} /> EDUCATION
                    </h3>
                    <div className="flex flex-col gap-3">
                        {EDUCATION.map((edu, i) => (
                          <div key={i} className="glass-panel p-4 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                              <div>
                                <div className="text-base font-bold text-white">{edu.school}</div>
                                <div className="text-white/50 text-xs">{edu.degree}</div>
                              </div>
                              <div className="text-white/30 font-mono text-xs border border-white/10 px-2 py-1 rounded">{edu.period}</div>
                          </div>
                        ))}
                    </div>
                  </section>

                  {/* Experience */}
                  <section>
                     <h3 className="font-display text-lg mb-6 flex items-center gap-2 text-white/80">
                        <Briefcase className="text-blockchain" size={20} /> CAREER PATH
                     </h3>
                     <div className="space-y-8 border-l border-white/10 pl-6 ml-2">
                        {EXPERIENCES.map((exp) => (
                           <div key={exp.id} className="relative group">
                              <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 bg-bg border border-blockchain rounded-full group-hover:bg-blockchain transition-colors"></div>
                              <div className="mb-1 text-[10px] font-mono text-white/30 uppercase tracking-wider">{exp.period}</div>
                              <h4 className="text-lg font-bold text-white mb-0.5">{exp.role}</h4>
                              <div className="text-xs font-bold text-blockchain mb-2">{exp.company}</div>
                              <p className="text-sm text-white/50 leading-relaxed mb-3">{exp.description}</p>
                              <div className="flex gap-2 flex-wrap">
                                 {exp.technologies.map(t => (
                                    <span key={t} className="text-[9px] border border-white/10 px-2 py-1 rounded-sm text-white/40 bg-white/5">{t}</span>
                                 ))}
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>
               </div>

               {/* Right: Hackathons */}
               <div>
                  <h3 className="font-display text-lg mb-6 flex items-center gap-2 text-white/80">
                     <Trophy className="text-blockchain" size={20} /> AWARDS & HACKS
                  </h3>
                  <div className="grid gap-4">
                     {HACKATHONS.map((hack) => (
                        <div key={hack.id} className="glass-panel p-5 rounded-xl group relative overflow-hidden hover:border-blockchain/40 transition-all">
                           
                           <div className="flex justify-between items-start mb-2 relative z-10">
                              <span className="font-display font-bold text-lg text-white">{hack.name}</span>
                              <span className="text-[10px] bg-white/10 text-white font-bold px-2 py-1 rounded border border-white/5 shadow-sm">
                                {hack.award}
                              </span>
                           </div>
                           
                           <div className="text-xs text-blockchain mb-3 font-mono relative z-10 flex items-center gap-2">
                              <span>{hack.project}</span>
                              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                              <span className="text-white/30">{hack.year}</span>
                           </div>
                           
                           <p className="text-sm text-white/50 relative z-10 leading-relaxed">{hack.description}</p>
                           
                           <div className="mt-3 flex gap-2">
                              {hack.tags.map(tag => (
                                <span key={tag} className="text-[9px] text-white/30 border border-white/10 px-2 py-0.5 rounded-sm">{tag}</span>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>

          </div>
       </div>
    </div>
  );
};

export default ProfileView;
