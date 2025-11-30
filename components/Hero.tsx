import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, TECH_STACK, ACHIEVEMENTS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-tech-grid">
      {/* Background Blobs (Lighter/Subtler) */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                AI/ML Engineer Portfolio
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
                Hi, I'm <span className="text-primary">{PERSONAL_INFO.name.split(' ')[0]}</span>
              </h1>
              <div className="text-xl md:text-2xl text-slate-600 mb-6 font-light">
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {PERSONAL_INFO.role}
                </span>
              </div>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {PERSONAL_INFO.shortBio}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#projects" 
                  className="px-8 py-3 bg-primary hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  View Work <ChevronRight size={18} />
                </a>
                <button 
                  onClick={() => alert("Resume download would happen here")}
                  className="px-8 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  Download CV <Download size={18} />
                </button>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
               {ACHIEVEMENTS.map((item, idx) => (
                  <div key={idx} className="bg-white/60 border border-white/50 shadow-sm p-4 rounded-xl text-center backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">
                     <div className="text-3xl font-bold text-slate-800 mb-1">{item.value}</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.label}</div>
                  </div>
               ))}
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-24 w-full overflow-hidden mask-linear">
           <p className="text-center text-slate-400 text-sm mb-6 uppercase tracking-widest font-semibold">Technologies & Tools</p>
           <div className="relative flex overflow-x-hidden group">
             <div className="animate-scroll whitespace-nowrap flex gap-8">
               {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                 <span key={i} className="text-slate-600 font-mono text-lg font-medium px-6 py-3 bg-white rounded-lg border border-slate-200 shadow-sm whitespace-nowrap flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                   {tech}
                 </span>
               ))}
             </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hidden md:block">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;