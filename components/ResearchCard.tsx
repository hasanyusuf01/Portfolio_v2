import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Users, FileText, ChevronRight } from 'lucide-react';
import { Research } from '../types';

interface Props {
  research: Research;
  onClick: (item: Research) => void;
}

const ResearchCard: React.FC<Props> = ({ research, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, backgroundColor: 'rgba(248, 250, 252, 1)' }}
      className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
      onClick={() => onClick(research)}
    >
      <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800 leading-tight md:max-w-[80%] group-hover:text-primary transition-colors">
          {research.title}
        </h3>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-100">
            <BookOpen size={12} className="mr-1.5" />
            {research.venue}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-5">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} className="text-slate-400" />
          <span>{research.year}</span>
        </div>
        <div className="flex items-center gap-1.5">
           <Users size={14} className="text-slate-400" />
           <span className="truncate max-w-[200px]">{research.authors.join(', ')}</span>
        </div>
        {research.citations && (
             <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <FileText size={14} />
                <span>{research.citations} Citations</span>
            </div>
        )}
      </div>

      <p className="text-slate-600 text-sm line-clamp-2 mb-4 leading-relaxed">
        {research.abstract}
      </p>

      <div className="flex gap-2 items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
         <span>Read Details</span>
         <ChevronRight size={14} />
      </div>
    </motion.div>
  );
};

export default ResearchCard;