import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sendMessage } from '../../services/geminiService';
import { ChatMessage } from '../../types';
import { Send, Terminal, Activity } from 'lucide-react';

const IntelligenceView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Oracle v1.0 connected. En attente de requête sur le profil.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const response = await sendMessage(userMsg.text);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 pt-20 pb-32">
       
       <div className="w-full max-w-3xl flex-1 flex flex-col relative">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
             <div className="flex items-center gap-3">
                <Activity className="text-blockchain animate-pulse" size={18} />
                <span className="font-display font-bold text-xl tracking-tight">AI ORACLE</span>
             </div>
             <div className="text-xs font-mono text-white/30">
                STATUS: LISTENING
             </div>
          </div>

          {/* Chat Stream */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 pr-2 mb-6">
             {messages.map((msg, idx) => (
                <motion.div 
                   initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   key={idx} 
                   className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                   <div 
                     className={`max-w-[90%] md:max-w-[70%] p-4 md:p-6 text-sm md:text-base leading-relaxed border ${
                        msg.role === 'user' 
                        ? 'bg-white text-black border-white' 
                        : 'bg-transparent text-white border-white/20'
                     }`}
                   >
                      <div className="text-[10px] font-mono opacity-50 mb-2 uppercase tracking-widest">
                         {msg.role === 'user' ? '/// Input' : '/// Output'}
                      </div>
                      {msg.text}
                   </div>
                </motion.div>
             ))}
             {isTyping && (
                <div className="flex items-center gap-2 text-blockchain text-xs font-mono animate-pulse">
                   <Terminal size={12} />
                   <span>COMPUTING...</span>
                </div>
             )}
          </div>

          {/* Input Field */}
          <div className="relative group">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-blockchain/20 rounded opacity-50 group-hover:opacity-100 transition duration-500 blur"></div>
             <div className="relative flex bg-black items-center">
                <span className="pl-4 text-blockchain font-mono">{'>'}</span>
                <input 
                   type="text" 
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                   placeholder="Interroger la base de données..."
                   className="w-full bg-transparent border-none text-white p-4 focus:outline-none font-mono text-sm"
                   autoFocus
                />
                <button 
                   onClick={handleSend}
                   disabled={!inputValue.trim()}
                   className="p-4 hover:text-blockchain transition-colors disabled:opacity-30"
                >
                   <Send size={16} />
                </button>
             </div>
          </div>
          
          <div className="mt-4 flex gap-2 justify-center">
             {['Mon Stack Tech ?', 'Expérience Product Owner ?', 'Projets Web3 ?'].map(suggestion => (
                <button 
                   key={suggestion}
                   onClick={() => setInputValue(suggestion)}
                   className="text-[10px] border border-white/10 px-3 py-1 rounded-full text-white/40 hover:bg-white hover:text-black transition-colors"
                >
                   {suggestion}
                </button>
             ))}
          </div>

       </div>
    </div>
  );
};

export default IntelligenceView;