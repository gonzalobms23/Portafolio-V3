import React, { useState, useMemo } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';

interface ProjectGridProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onOpenProjectModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTech, setActiveTech] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allTechnologies = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const categories = useMemo(() => {
    return [
      { id: 'all', label: 'Todos', count: PROJECTS.length },
      {
        id: 'simuladores',
        label: 'Simuladores Mineros',
        count: PROJECTS.filter((p) => p.category === 'simuladores').length
      },
      {
        id: 'vr',
        label: 'VR',
        count: PROJECTS.filter((p) => p.category === 'vr').length
      },
      {
        id: 'juegos',
        label: 'Videojuegos',
        count: PROJECTS.filter((p) => p.category === 'juegos').length
      },
      {
        id: 'educacion',
        label: 'Laboratorios 3D',
        count: PROJECTS.filter((p) => p.category === 'educacion').length
      }
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      if (activeCategory !== 'all' && project.category !== activeCategory) {
        return false;
      }
      if (activeTech !== 'all' && !project.technologies.includes(activeTech)) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesSummary = project.summary.toLowerCase().includes(q);
        const matchesTech = project.technologies.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSummary && !matchesTech) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, activeTech, searchQuery]);

  return (
    <section id="proyectos" className="py-20 border-t border-violet-900/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase text-violet-400 tracking-wider block mb-1">
              Catálogo Seleccionado
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Proyectos Destacados
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-light">
            Simuladores de alta fidelidad, realidad virtual industrial y videojuegos comerciales desarrollados en Unity.
          </p>
        </div>

        {/* Filter Bar */}
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          activeTech={activeTech}
          onSelectTech={setActiveTech}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categories={categories}
          technologies={allTechnologies}
        />

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => onOpenProjectModal(project.id)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white/[0.02] rounded-3xl border border-white/5">
            <p className="text-slate-300 text-sm">No se encontraron proyectos con los filtros seleccionados.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveTech('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 text-xs font-semibold text-violet-300 bg-violet-600/15 border border-violet-500/30 rounded-full transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
