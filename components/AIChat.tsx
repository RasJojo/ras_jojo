import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Terminal, Cpu } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessage } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Protocol initialized. Waiting for input...' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await sendMessage(userMsg.text);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50, rotateX: 10 }}
          className="fixed bottom-24 right-4 md:right-8 w-[350px] md:w-[400px] h-[550px] bg-[#050505] border border-white/10 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden font-mono text-sm"
          style={{ boxShadow: '0 0 50px -10px rgba(0,0,0,0.8)' }}
        >
          {/* CRT Screen Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>

          {/* Header */}
          <div className="p-3 border-b border-white/10 bg-white/5 flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-accent" />
              <h3 className="text-xs text-slate-300 font-bold uppercase tracking-widest">Neural_Link v2.0</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <span className="text-[10px] text-slate-600 mb-1 uppercase">{msg.role === 'user' ? 'You' : 'System'}</span>
                <div className={`max-w-[85%] p-3 rounded-md border ${
                  msg.role === 'user' 
                    ? 'bg-accent/10 border-accent/30 text-accent' 
                    : 'bg-[#111] border-white/10 text-slate-300'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-center gap-2 text-accent text-xs">
                 <span className="animate-pulse">PROCESSING DATA...</span>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-[#0a0a0a]">
            <div className="flex items-center bg-[#111] border border-white/10 rounded px-3 py-2 focus-within:border-accent/50 transition-colors">
              <span className="text-accent mr-2">{'>'}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter command..."
                className="bg-transparent border-none focus:outline-none text-white w-full text-sm font-mono placeholder-slate-700"
                autoFocus
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="ml-2 text-slate-500 hover:text-accent disabled:opacity-30 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center font-bold group"
      >
        <div className="absolute inset-0 bg-accent rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative z-10">
           {isOpen ? <X size={24} /> : <Terminal size={24} />}
        </div>
      </motion.button>
    </>
  );
};

export default AIChat;