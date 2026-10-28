import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 sm:px-7 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090b1e]/80 backdrop-blur-xl border border-violet-500/20 shadow-2xl shadow-indigo-950/40'
            : 'bg-[#090b1e]/40 backdrop-blur-md border border-white/5'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-violet-600 p-0.5 shadow-md shadow-cyan-500/30">
              <div className="w-full h-full rounded-full bg-[#030308] flex items-center justify-center text-cyan-300 font-heading font-black text-xs group-hover:text-white transition-colors">
                BC
              </div>
            </div>
            <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              {PERSONAL_INFO.studioName}
            </span>
          </a>

          {/* Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
            <a
              href="#proyectos"
              className="hover:text-violet-300 transition-colors whitespace-nowrap shrink-0"
            >
              Proyectos
            </a>
            <a
              href="#sobre-mi"
              className="hover:text-violet-300 transition-colors whitespace-nowrap shrink-0"
            >
              Sobre Mí
            </a>
            <a
              href="#trayectoria"
              className="hover:text-violet-300 transition-colors whitespace-nowrap shrink-0"
            >
              Trayectoria
            </a>
            <a
              href="#habilidades"
              className="hover:text-violet-300 transition-colors whitespace-nowrap shrink-0"
            >
              Habilidades
            </a>
            <a
              href="#contacto"
              className="hover:text-violet-300 transition-colors whitespace-nowrap shrink-0"
            >
              Contacto
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={PERSONAL_INFO.cvPdfPath}
              download="Gonzalo_Mayhuire_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors whitespace-nowrap"
            >
              <FileDown className="w-3.5 h-3.5 text-violet-400" />
              <span>CV</span>
            </a>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-full shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Contáctame</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-300 hover:text-white rounded-full hover:bg-white/10"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-[#0d0f28]/95 backdrop-blur-2xl border border-violet-500/20 rounded-3xl p-5 shadow-2xl">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-xl hover:bg-violet-500/10 hover:text-violet-300"
            >
              Proyectos
            </a>
            <a
              href="#sobre-mi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-xl hover:bg-violet-500/10 hover:text-violet-300"
            >
              Sobre Mí
            </a>
            <a
              href="#trayectoria"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-xl hover:bg-violet-500/10 hover:text-violet-300"
            >
              Trayectoria
            </a>
            <a
              href="#habilidades"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-xl hover:bg-violet-500/10 hover:text-violet-300"
            >
              Habilidades
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-xl hover:bg-violet-500/10 hover:text-violet-300"
            >
              Contacto
            </a>
            <a
              href={PERSONAL_INFO.cvPdfPath}
              download="Gonzalo_Mayhuire_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-violet-300 bg-violet-600/15 border border-violet-500/30 rounded-xl"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Descargar Curriculum (PDF)</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
