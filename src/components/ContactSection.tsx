import React, { useState } from 'react';
import { MessageCircle, Mail, FileDown, Copy, Check, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('Oportunidad Laboral');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const constructMessage = () => {
    const sender = name.trim() ? `Soy ${name.trim()}` : 'Te contacto';
    const comp = company.trim() ? ` de ${company.trim()}` : '';
    const body = message.trim() ? `\n\nDetalle: ${message.trim()}` : '';
    return `Hola Gonzalo, ${sender}${comp}. Me pongo en contacto por: [${projectType}].${body}\n\nVi tu portafolio de Black Cat Studio y me gustaría conversar.`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(constructMessage());
    window.open(`https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Contacto Portafolio - ${projectType}`);
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-20 border-t border-violet-900/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase text-violet-400 tracking-wider block mb-1">
                Contacto
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                Hablemos
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                Disponible para oportunidades laborales, desarrollo de simuladores y consultoría en Unity / VR.
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-3xl bg-gradient-to-b from-[#0e102a]/80 to-[#090b1e]/90 border border-violet-500/15 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                      WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-white font-mono">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={copyPhone}
                    className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/5"
                    title="Copiar número"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${encodeURIComponent(
                      'Hola Gonzalo, vi tu portafolio y me gustaría conversar sobre una oportunidad.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-colors"
                  >
                    Abrir Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-3xl bg-gradient-to-b from-[#0e102a]/80 to-[#090b1e]/90 border border-violet-500/15 hover:border-violet-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-2xl bg-violet-600/15 text-violet-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                      Correo
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white font-mono truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={copyEmail}
                    className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/5"
                    title="Copiar correo"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-violet-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                  >
                    Escribir
                  </a>
                </div>
              </div>
            </div>

            {/* CV Download Pill */}
            <div className="p-4 rounded-3xl bg-gradient-to-r from-violet-950/40 to-indigo-950/40 border border-violet-500/20 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-light">
                Curriculum Vitae completo en PDF
              </span>
              <a
                href={PERSONAL_INFO.cvPdfPath}
                download="Gonzalo_Mayhuire_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-violet-300 hover:text-white bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 rounded-full transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Descargar</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0e102a]/80 via-[#0a0c22]/90 to-[#070817] border border-violet-500/15 backdrop-blur-xl">
              <h3 className="font-heading font-bold text-white text-base mb-1">
                Mensaje Rápido
              </h3>
              <p className="text-xs text-slate-400 font-light mb-5">
                Envía tu propuesta directamente a WhatsApp o Correo en un clic.
              </p>

              <form onSubmit={handleSendWhatsApp} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu Nombre"
                    className="w-full bg-[#070817] border border-white/10 focus:border-violet-500 text-xs text-white placeholder-slate-500 px-4 py-2.5 rounded-2xl focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Empresa / Organización"
                    className="w-full bg-[#070817] border border-white/10 focus:border-violet-500 text-xs text-white placeholder-slate-500 px-4 py-2.5 rounded-2xl focus:outline-none transition-colors"
                  />
                </div>

                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-[#070817] border border-white/10 focus:border-violet-500 text-xs text-white px-4 py-2.5 rounded-2xl focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Oportunidad Laboral">Oportunidad Laboral (Desarrollador Unity / VR)</option>
                  <option value="Simulador de Maquinaria">Simulador de Maquinaria Pesada</option>
                  <option value="Capacitación VR (LOTOTO)">Capacitación VR (LOTOTO / Seguridad)</option>
                  <option value="Videojuego Comercial">Desarrollo de Videojuego</option>
                  <option value="Consultoría / Docencia">Consultoría o Docencia</option>
                </select>

                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detalles breves del proyecto o vacante..."
                  className="w-full bg-[#070817] border border-white/10 focus:border-violet-500 text-xs text-white placeholder-slate-500 p-4 rounded-2xl focus:outline-none transition-colors resize-none font-light"
                />

                <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 rounded-full shadow-md shadow-violet-700/25 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enviar por WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-violet-400" />
                    <span>Enviar por Correo</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
