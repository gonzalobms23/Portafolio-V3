import React from 'react';
import { Gamepad2, Code2, Database, Palette } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Gamepad2 className="w-5 h-5 text-violet-400" />;
      case 1:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Database className="w-5 h-5 text-blue-400" />;
      case 3:
      default:
        return <Palette className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="habilidades" className="py-20 border-t border-violet-900/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase text-violet-400 tracking-wider block mb-1">
              Capacidades Técnicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Habilidades
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-light">
            Motores 3D/VR, lenguajes compilados, bases de datos relacionales y arte digital.
          </p>
        </div>

        {/* 4-Card Rounded Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.name}
              className="p-5 rounded-3xl bg-gradient-to-b from-[#0e102a]/80 to-[#090b1e]/90 border border-violet-500/15 hover:border-violet-500/35 transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center mb-4">
                {getIcon(idx)}
              </div>

              <h3 className="font-heading font-bold text-white text-sm mb-3">
                {cat.name}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5 text-xs text-slate-300 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
