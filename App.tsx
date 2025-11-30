import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ResearchCard from './components/ResearchCard';
import Timeline from './components/Timeline';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { PROJECTS, RESEARCH, EXPERIENCE, CERTIFICATES, PERSONAL_INFO } from './constants';
import { Project, Research } from './types';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Project | Research | null>(null);
  const [modalType, setModalType] = useState<'project' | 'research'>('project');

  const openProjectModal = (project: Project) => {
    setModalData(project);
    setModalType('project');
    setModalOpen(true);
  };

  const openResearchModal = (research: Research) => {
    setModalData(research);
    setModalType('research');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white relative">
           <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"> Projects</h2>
                  <p className="text-slate-500 max-w-xl text-lg">
                    A selection of my work in Robotics, AI/ML, and Software Development.
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={openProjectModal} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-24 bg-slate-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Research Publications</h2>
               <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {RESEARCH.map((item) => (
                <ResearchCard 
                  key={item.id} 
                  research={item} 
                  onClick={openResearchModal} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Journey/Experience Section */}
        <section id="journey" className="py-24 bg-white relative">
           <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Professional Journey</h2>
            <Timeline items={EXPERIENCE} />
          </div>
        </section>



        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-tech-grid opacity-30 pointer-events-none"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                  Whether you have a question about my research or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                 <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                        <Mail size={24} />
                    </div>
                    <span className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-1">Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 font-medium hover:text-primary transition-colors">{PERSONAL_INFO.email}</a>
                 </div>
                 
                 <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                        <Phone size={24} />
                    </div>
                    <span className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-1">Phone</span>
                    <span className="text-slate-800 font-medium">{PERSONAL_INFO.phone}</span>
                 </div>

                 <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                        <MapPin size={24} />
                    </div>
                    <span className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-1">Location</span>
                    <span className="text-slate-800 font-medium">{PERSONAL_INFO.location}</span>
                 </div>
              </div>

              <a 
                 href={`mailto:${PERSONAL_INFO.email}`} 
                 className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
              >
                 <Send size={20} />
                 Say Hello
              </a>
           </div>
        </section>
      </main>

      <Footer />
      
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        data={modalData}
        type={modalType}
      />
    </div>
  );
}

export default App;
