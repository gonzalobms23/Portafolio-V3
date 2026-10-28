import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, FileDown } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-violet-900/15 bg-[#050610] py-10 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 p-0.5">
              <div className="w-full h-full rounded-full bg-[#0a0c20] flex items-center justify-center text-violet-300 font-heading font-black text-[10px]">
                BC
              </div>
            </div>
            <span className="font-heading font-bold text-white text-sm">
              {PERSONAL_INFO.studioName}
            </span>
            <span className="text-slate-500 text-xs">· Gonzalo Mayhuire</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs">
            <a href="#proyectos" className="hover:text-violet-300 transition-colors">
              Proyectos
            </a>
            <a href="#sobre-mi" className="hover:text-violet-300 transition-colors">
              Sobre Mí
            </a>
            <a href="#trayectoria" className="hover:text-violet-300 transition-colors">
              Trayectoria
            </a>
            <a href="#contacto" className="hover:text-violet-300 transition-colors">
              Contacto
            </a>
            <a
              href={PERSONAL_INFO.cvPdfPath}
              download="Gonzalo_Mayhuire_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-300 transition-colors inline-flex items-center gap-1"
            >
              <FileDown className="w-3 h-3" />
              <span>Curriculum PDF</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-5 border-t border-white/5 text-center text-[11px] text-slate-500 font-light">
          © {new Date().getFullYear()} {PERSONAL_INFO.studioName}. Arequipa, Perú · Unity 3D, VR & Videojuegos.
        </div>
      </div>
    </footer>
  );
};
