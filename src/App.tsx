/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { GamerBackground } from './components/GamerBackground';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null);

  const selectedProject = activeModalProjectId
    ? PROJECTS.find((p) => p.id === activeModalProjectId) || null
    : null;

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('proyectos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020206] text-slate-200 antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Animated Gamer Canvas Background with Rising Neon Blue Cubes & Particles */}
      <GamerBackground />

      {/* Main UI Layer */}
      <div className="relative z-10">
        {/* Navigation Top Bar */}
        <Navbar onContactClick={scrollToContact} />

        {/* Main Content Flow */}
        <main>
          {/* Hero Section */}
          <Hero
            onExploreProjects={scrollToProjects}
            onOpenProjectModal={(id) => setActiveModalProjectId(id)}
          />

          {/* Featured Projects with Category and Tech Filtering */}
          <ProjectGrid
            onOpenProjectModal={(id) => setActiveModalProjectId(id)}
          />

          {/* About Me & Black Cat Studio */}
          <AboutSection />

          {/* Experience Timeline & Education */}
          <ExperienceTimeline />

          {/* Technical Skills Matrix */}
          <SkillsMatrix />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Project Lightbox Modal with Multi-Image Gallery and Play Demo */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setActiveModalProjectId(null)}
        />
      )}
    </div>
  );
}
