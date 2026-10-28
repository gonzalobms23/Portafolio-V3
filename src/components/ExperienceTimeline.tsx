import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION_ITEMS } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="trayectoria" className="py-20 border-t border-violet-900/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Capsule Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase text-violet-400 tracking-wider block mb-1">
              Curriculum Vitae
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Trayectoria & Formación
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#0d0f28]/70 border border-violet-500/15 rounded-full">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experiencia</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Estudios</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'work' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WORK_EXPERIENCE.map((item) => (
              <div
                key={item.company + item.role}
                className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0e102a]/80 to-[#090b1e]/90 border border-violet-500/15 hover:border-violet-500/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-violet-400 font-semibold">{item.company}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{item.period}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-2">
                    {item.role}
                  </h3>

                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-white/[0.03] text-slate-300 text-[11px]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EDUCATION_ITEMS.map((item) => (
              <div
                key={item.institution}
                className="p-6 rounded-3xl bg-gradient-to-b from-[#0e102a]/80 to-[#090b1e]/90 border border-violet-500/15 flex flex-col justify-between"
              >
                <div>
                  <span className="text-violet-400 font-mono text-xs font-semibold block mb-2">
                    {item.period} · Arequipa, Perú
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white mb-1">
                    {item.degree}
                  </h3>
                  <div className="text-xs text-indigo-300 font-medium mb-3">
                    {item.institution}
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
