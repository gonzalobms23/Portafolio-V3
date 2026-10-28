import React, { useState } from 'react';
import { ArrowRight, FileDown, MessageCircle, Play, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenProjectModal: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenProjectModal }) => {
  const [activeTab, setActiveTab] = useState<'pala' | 'lototo' | 'earclicker'>('pala');

  const previews = {
    pala: {
      id: 'simulador-pala-minera',
      title: 'Pala Eléctrica Minera P&H 4100XPC',
      tag: 'Simulador Minero',
      desc: 'Cinemática física de excavación y carga a camiones.',
      image: '/assets/aistudio/SimuladorPalaminera1_0a3058f9.png'
    },
    lototo: {
      id: 'capacitacion-lototo-vr',
      title: 'Capacitación LOTOTO en Realidad Virtual',
      tag: 'VR & Seguridad',
      desc: 'Bloqueo y desenergización industrial en VR.',
      image: '/assets/aistudio/RecorridoSeguridad1_a11c9523.png'
    },
    earclicker: {
      id: 'ear-clicker-game',
      title: 'Ear Clicker (Comercial)',
      tag: 'Videojuego Publicado',
      desc: 'Incremental medieval con pixel art original.',
      image: '/assets/aistudio/Clicker1_7b4e4a18.png'
    }
  };

  const current = previews[activeTab];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient Blue-Purple Radial Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typographic Minimalism */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Ambient Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-medium w-fit mb-6 shadow-sm shadow-violet-900/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span>{PERSONAL_INFO.name} · {PERSONAL_INFO.studioName}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.08] mb-5 [text-wrap:balance]">
              Simuladores 3D,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                Realidad Virtual
              </span>{' '}
              y Videojuegos
            </h1>

            {/* Minimalist Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-light">
              Ingeniero de Software con +7 años creando simuladores de maquinaria pesada para minería, sistemas VR de alta precisión y videojuegos publicados en Unity.
            </p>

            {/* Sleek Rounded CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${encodeURIComponent(
                  'Hola Gonzalo, vi tu portafolio y me gustaría conversar sobre una oportunidad.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-full shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Directo</span>
              </a>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 rounded-full backdrop-blur-md transition-all"
              >
                <span>Explorar Trabajos</span>
                <ArrowRight className="w-4 h-4 text-violet-400" />
              </button>

              <a
                href={PERSONAL_INFO.cvPdfPath}
                download="Gonzalo_Mayhuire_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-400 hover:text-violet-300 transition-colors"
                title="Descargar Curriculum"
              >
                <FileDown className="w-4 h-4" />
                <span>CV (PDF)</span>
              </a>
            </div>

            {/* Minimalist Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">Especialidad:</span>
              <span className="px-2.5 py-1 rounded-full bg-violet-950/40 border border-violet-500/20 text-violet-300">Unity & C#</span>
              <span className="px-2.5 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300">VR / Meta Quest</span>
              <span className="px-2.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-300">Simulación Minera</span>
              <span className="px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300">Docente TECSUP</span>
            </div>
          </div>

          {/* Right Column: Sleek Rounded Glass Showcase Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-violet-500/10 via-indigo-950/20 to-black/40 border border-violet-500/20 backdrop-blur-2xl shadow-2xl shadow-violet-950/30">
              {/* Segmented Soft Pill Switcher */}
              <div className="flex items-center gap-1 p-1 bg-black/40 rounded-full mb-3 border border-white/5 text-xs">
                {(['pala', 'lototo', 'earclicker'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 py-1.5 px-3 rounded-full font-medium transition-all text-center truncate ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-700/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {key === 'pala' ? 'Pala Minera' : key === 'lototo' ? 'LOTOTO VR' : 'Ear Clicker'}
                  </button>
                ))}
              </div>

              {/* Showcase Image Card */}
              <div
                onClick={() => onOpenProjectModal(current.id)}
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a1c] via-[#080a1c]/30 to-transparent" />

                {/* View Project Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-violet-400/30 text-[11px] font-medium text-violet-300 flex items-center gap-1.5 shadow-md">
                  <Play className="w-3 h-3 fill-current" />
                  <span>Ver Ficha</span>
                </div>

                {/* Bottom Card Copy */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <span className="text-[11px] text-violet-400 font-medium block">
                    {current.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-tight mt-0.5">
                    {current.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-light">
                    {current.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Proof Metrics Strip with Soft Rounded Cells */}
        <div className="mt-14 pt-8 border-t border-violet-900/20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white block tabular-nums">
              +7 Años
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              Desarrollo en Unity & VR
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-violet-400 block tabular-nums">
              9 Cohortes
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              Docente en TECSUP
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-indigo-400 block tabular-nums">
              5+ Simuladores
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              Maquinaria Minera & Tajo
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-blue-400 block tabular-nums">
              2 Hackathons
            </span>
            <span className="text-xs text-slate-400 mt-1 block">
              Premios Perumin & El Comercio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
