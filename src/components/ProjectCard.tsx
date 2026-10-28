import React, { useState } from 'react';
import { ArrowUpRight, Play, Image as ImageIcon } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      onClick={onClick}
      className="group relative bg-gradient-to-b from-[#0e102a]/80 via-[#0a0c22]/90 to-[#070817] hover:from-[#14173b]/90 hover:to-[#0c0e27] border border-violet-500/15 hover:border-violet-500/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-violet-950/40 hover:-translate-y-1.5"
    >
      {/* Media Container with Rounded Soft Mask */}
      <div className="relative aspect-[16/10] w-full bg-[#070817] overflow-hidden p-2.5 pb-0">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-violet-950/20 animate-pulse flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-violet-400/40" />
            </div>
          )}

          <img
            src={project.coverImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c22] via-transparent to-black/20" />

          {/* Badges */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
            {project.hasPlayDemo && (
              <span className="px-2.5 py-0.5 rounded-full bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md shadow-violet-600/40">
                <Play className="w-2.5 h-2.5 fill-current" />
                Demo
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-slate-300 text-[10px] font-mono">
              {project.images.length} fotos
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-violet-400 font-medium mb-1.5">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{project.year}</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-violet-300 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed font-light">
            {project.summary}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] truncate">
            {project.technologies.slice(0, 3).map((t, idx) => (
              <React.Fragment key={t}>
                {idx > 0 && <span aria-hidden="true" className="text-slate-600">·</span>}
                <span className="truncate">{t}</span>
              </React.Fragment>
            ))}
          </div>

          <span className="inline-flex items-center gap-1 text-violet-400 font-semibold text-xs whitespace-nowrap group-hover:translate-x-0.5 transition-transform">
            <span>Ver Ficha</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
