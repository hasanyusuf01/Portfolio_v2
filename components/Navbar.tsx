import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['home', 'projects', 'research', 'journey', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Research', id: 'research' },
    { name: 'Journey', id: 'journey' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollTo('home')}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer font-mono tracking-tight"
        >
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-slate-700">.dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-colors relative group ${activeSection === link.id ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === link.id ? 'width-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              </li>
            ))}
          </ul>
          
          <div className="h-6 w-px bg-slate-300 mx-2"></div>
          
          <div className="flex gap-4">
             {SOCIAL_LINKS.map((link) => (
                 <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors transform hover:scale-110">
                    {link.icon === 'Github' && <Github size={20} />}
                    {link.icon === 'Linkedin' && <Linkedin size={20} />}
                    {link.icon === 'Mail' && <Mail size={20} />}
                 </a>
             ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700 p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-30 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6 shadow-xl`}>
        <ul className="flex flex-col gap-6 text-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`font-medium ${activeSection === link.id ? 'text-primary' : 'text-slate-600'}`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-12 pt-8 border-t border-slate-200 flex gap-6 justify-center">
            {SOCIAL_LINKS.map((link) => (
                 <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
                    {link.icon === 'Github' && <Github size={28} />}
                    {link.icon === 'Linkedin' && <Linkedin size={28} />}
                    {link.icon === 'Mail' && <Mail size={28} />}
                 </a>
             ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;