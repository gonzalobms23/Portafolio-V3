import React from 'react';
import { Award, GraduationCap, Cpu, Layers } from 'lucide-react';
import { PERSONAL_INFO, AWARDS_LIST } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 border-t border-violet-900/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase text-violet-400 tracking-wider block mb-1">
            Perfil Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Quién Soy & Black Cat Studio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
            {PERSONAL_INFO.bioShort}
          </p>
        </div>

        {/* 3 Pillar Cards - Minimalist & Rounded */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0f1130]/70 to-[#090b20]/90 border border-violet-500/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-white mb-1.5">
              Ingeniería + Metalurgia
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Comprensión técnica y física real del sector minero (tajo abierto, plantas de molienda y flotación), permitiendo diseñar simuladores de alta fidelidad.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0f1130]/70 to-[#090b20]/90 border border-indigo-500/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-white mb-1.5">
              Docente en TECSUP
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Profesor titular en CODIGO by Tecsup. Más de 9 cohortes formadas en desarrollo de videojuegos con Unity, arquitectura en C# y Game Design.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0f1130]/70 to-[#090b20]/90 border border-blue-500/20 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-white mb-1.5">
              Reconocimientos
            </h3>
            <div className="space-y-1.5 text-xs text-slate-300 font-light">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">Hackathon Perumin</span>
                <span className="text-violet-400 font-mono text-[11px]">2.º Puesto</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">Hackathon El Comercio</span>
                <span className="text-blue-400 font-mono text-[11px]">3.er Puesto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
