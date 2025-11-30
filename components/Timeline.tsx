import React from 'react';
import { Experience } from '../types';
import { Briefcase, GraduationCap } from 'lucide-react';

interface Props {
  items: Experience[];
}

const Timeline: React.FC<Props> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-4">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 md:pl-12 group">
          {/* Icon */}
          <span className="absolute -left-[9px] md:-left-[11px] top-0 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-primary transition-colors duration-300">
            {item.type === 'education' ? (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            ) : (
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            )}
          </span>

          {/* Content */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    {item.type === 'education' ? (
                        <GraduationCap size={16} className="text-blue-500" />
                    ) : (
                        <Briefcase size={16} className="text-indigo-500" />
                    )}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded mt-2 sm:mt-0">{item.duration}</span>
            </div>
            
            <p className="text-primary font-semibold text-sm mb-3">{item.institution}</p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-4">{item.description}</p>
            
            {item.achievements && (
                <ul className="space-y-2">
                    {item.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 flex-shrink-0"></span>
                            {ach}
                        </li>
                    ))}
                </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;