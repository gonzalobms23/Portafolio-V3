import React from 'react';
import { Search, X } from 'lucide-react';

interface ProjectFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  activeTech: string;
  onSelectTech: (tech: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: { id: string; label: string; count: number }[];
  technologies: string[];
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onSelectCategory,
  activeTech,
  onSelectTech,
  searchQuery,
  onSearchChange,
  categories,
  technologies
}) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Category Tabs and Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Soft Rounded Capsule Categories */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#0d0f28]/60 backdrop-blur-md border border-violet-500/15 rounded-full overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[10px] ${isActive ? 'text-violet-200' : 'text-slate-500'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Minimal Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por tecnología o nombre..."
            className="w-full bg-[#0d0f28]/60 backdrop-blur-md border border-violet-500/15 focus:border-violet-500 text-xs text-white placeholder-slate-500 pl-9 pr-8 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Technology Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-500 text-[11px] font-medium shrink-0 mr-1">
          Filtro:
        </span>

        <button
          onClick={() => onSelectTech('all')}
          className={`px-3 py-1 rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer text-xs ${
            activeTech === 'all'
              ? 'bg-violet-600/25 text-violet-300 font-semibold border border-violet-500/40'
              : 'text-slate-400 hover:text-white bg-white/[0.03] border border-white/5'
          }`}
        >
          Todas
        </button>

        {technologies.map((tech) => {
          const isActive = activeTech === tech;
          return (
            <button
              key={tech}
              onClick={() => onSelectTech(tech)}
              className={`px-3 py-1 rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer text-xs ${
                isActive
                  ? 'bg-violet-600/25 text-violet-300 font-semibold border border-violet-500/40'
                  : 'text-slate-400 hover:text-white bg-white/[0.03] border border-white/5'
              }`}
            >
              {tech}
            </button>
          );
        })}
      </div>
    </div>
  );
};
