import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Footer Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Let's Connect</h2>
            <p className="text-slate-500 text-sm max-w-sm">
                Open to opportunities in AI/ML, Robotics, and Software Engineering.
            </p>
          </div>
          
          <div className="flex gap-6">
             {SOCIAL_LINKS.map((link) => (
                 <a 
                    key={link.platform} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                 >
                    {link.icon === 'Github' && <Github size={22} />}
                    {link.icon === 'Linkedin' && <Linkedin size={22} />}
                    {link.icon === 'Mail' && <Mail size={22} />}
                 </a>
             ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Yusuf Hasan. All rights reserved.</p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;