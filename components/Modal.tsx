import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText, Calendar, MapPin } from 'lucide-react';
import { Project, Research } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Project | Research | null;
  type: 'project' | 'research';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data, type }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!data) return null;

  const isProject = type === 'project';
  // Type guards
  const projectData = isProject ? (data as Project) : null;
  const researchData = !isProject ? (data as Research) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl custom-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {/* Header */}
              <div className="mb-6 pr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                  {data.title}
                </h2>
                {isProject && projectData?.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {projectData.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {!isProject && researchData && (
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-2 items-center">
                    <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded">{researchData.venue}</span>
                    <span className="flex items-center gap-1"><Calendar size={14}/> {researchData.year}</span>
                    {researchData.citations && <span>• {researchData.citations} Citations</span>}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-8 text-slate-600">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-primary rounded-full"></div>
                    {isProject ? 'Description' : 'Abstract'}
                  </h3>
                  <p className="leading-relaxed text-lg">
                    {isProject ? projectData?.description : researchData?.abstract}
                  </p>
                </div>

                {isProject && projectData?.features && (
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-secondary rounded-full"></div>
                        Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {projectData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg text-sm">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isProject && projectData?.challenges && (
                  <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                    <h3 className="text-sm font-bold text-amber-700 mb-2 uppercase tracking-wide flex items-center gap-2">
                        Technical Challenge
                    </h3>
                    <p className="text-slate-700">{projectData.challenges}</p>
                  </div>
                )}
                 
                 {!isProject && researchData?.authors && (
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                         <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Authors</h3>
                         <p className="text-slate-600">{researchData.authors.join(', ')}</p>
                    </div>
                 )}
              </div>

              {/* Footer Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                {isProject && projectData?.github && (
                  <a
                    href={projectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-all shadow-md font-medium"
                  >
                    <Github size={20} />
                    View Source
                  </a>
                )}
                {isProject && projectData?.demo && (
                  <a
                    href={projectData.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-700 text-white rounded-lg transition-all font-medium shadow-lg shadow-blue-500/25"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
                {!isProject && researchData?.doi && (
                  <a
                    href={researchData.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-700 text-white rounded-lg transition-all font-medium shadow-lg shadow-blue-500/25"
                  >
                    <ExternalLink size={20} />
                    View Publication
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;