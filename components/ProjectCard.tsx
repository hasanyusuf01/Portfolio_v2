import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
      onClick={() => onClick(project)}
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight className="text-primary" />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-blue-50 rounded-xl text-primary border border-blue-100 group-hover:scale-110 transition-transform">
          <Folder size={24} />
        </div>
        <div className="flex gap-4 z-10" onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors">
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
        {project.shortDescription}
      </p>

      <div className="pt-4 border-t border-slate-50">
        <ul className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              {tech}
            </li>
          ))}
          {project.technologies.length > 4 && (
            <li className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              +{project.technologies.length - 4}
            </li>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectCard;