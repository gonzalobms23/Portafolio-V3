import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, MessageCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { Project, PERSONAL_INFO } from '../data/portfolioData';
import { EarClickerMiniGame } from './EarClickerMiniGame';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showPlayDemo, setShowPlayDemo] = useState(false);

  useEffect(() => {
    setSelectedImageIndex(0);
    setShowPlayDemo(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.images[selectedImageIndex] || project.coverImage;

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop with dark blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-[#111333] via-[#0c0e27] to-[#070817] border border-violet-500/25 rounded-3xl shadow-2xl shadow-violet-950/60 overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0e102f]/60 backdrop-blur-md shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs text-violet-400 font-medium">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{project.year}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white mt-0.5">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* If Play Demo Mode is active for Ear Clicker */}
          {showPlayDemo && project.hasPlayDemo ? (
            <div className="space-y-4">
              <EarClickerMiniGame />
              <div className="flex justify-end">
                <button
                  onClick={() => setShowPlayDemo(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/10 rounded-full transition-colors"
                >
                  Volver a Galería de Fotos
                </button>
              </div>
            </div>
          ) : (
            /* Media Gallery */
            <div className="space-y-3">
              <div className="relative aspect-[16/9] w-full bg-slate-950 rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src={currentImage}
                  alt={`${project.title} - Imagen ${selectedImageIndex + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain bg-slate-950"
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 opacity-80 hover:opacity-100 transition-opacity"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 opacity-80 hover:opacity-100 transition-opacity"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-slate-300 border border-white/10">
                      {selectedImageIndex + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails (At least 2 images as requested) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {project.images.map((img, idx) => (
                  <button
                    key={img + idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImageIndex === idx
                        ? 'border-violet-400 ring-2 ring-violet-500/40'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-4">
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
              {project.description}
            </p>

            {/* Technical Highlights */}
            {project.technicalDetails && project.technicalDetails.length > 0 && (
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block mb-2.5">
                  Aspectos Técnicos Clave
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {project.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-500 font-medium mr-1">Stack:</span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-full bg-violet-950/40 border border-violet-500/20 text-violet-300 font-mono text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-[#0e102f]/60 backdrop-blur-md shrink-0">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Primary Action Button requested: Jugar / Probar / Ir a la Página */}
            <a
              href={project.projectUrl || 'https://store.steampowered.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-full shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{project.actionLabel || (project.category === 'juegos' ? 'Jugar' : 'Ir a la Página')}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-900/80" />
            </a>

            {/* In-Modal Playable Mini-Game Demo (for Ear Clicker) */}
            {project.hasPlayDemo && (
              <button
                onClick={() => setShowPlayDemo(!showPlayDemo)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-violet-200 bg-violet-600/25 hover:bg-violet-600/40 border border-violet-500/30 rounded-full transition-all cursor-pointer"
              >
                <span>{showPlayDemo ? 'Ver Galería' : 'Probar Mini-Demo en Vivo'}</span>
              </button>
            )}

            {/* WhatsApp direct contact */}
            <a
              href={`https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${encodeURIComponent(
                `Hola Gonzalo, estuve revisando tu proyecto "${project.title}" en tu portafolio y me gustaría consultarte al respecto.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
              <span>Consultar en WhatsApp</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
