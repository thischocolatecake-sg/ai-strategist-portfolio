import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ChainOfThought } from './ChainOfThought';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        layoutId={`card-container-${project.id}`}
        className="relative h-full w-full overflow-hidden bg-[#121212] md:h-[90vh] md:max-w-5xl md:rounded-3xl shadow-2xl flex flex-col"
      >
        {/* Close Button - Sticky */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black border border-white/10"
          aria-label="Close modal"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex h-full flex-col md:flex-row">
          {/* Left/Top: Image Hero / Video */}
          <motion.div 
            layoutId={`image-container-${project.id}`}
            className="relative h-[40vh] w-full shrink-0 md:h-full md:w-1/2 bg-black"
          >
            {/* The image acts as the shared element transition placeholder and poster */}
            <motion.img
              layoutId={`image-${project.id}`}
              src={project.heroImg}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            
            {/* Video Iframe Overlay - Only if videoUrl exists */}
            {project.videoUrl && (
              <div className="absolute inset-0 z-20">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Gradient only if NO video is showing */}
            {!project.videoUrl && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r" />
            )}
          </motion.div>

          {/* Right/Bottom: Content Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar">
            <div className="mb-2 flex items-center gap-3">
               <span className="font-mono text-xs font-bold uppercase text-emerald-400 tracking-wider border border-emerald-500/30 px-2 py-1 rounded bg-emerald-500/10">
                 {project.client}
               </span>
            </div>

            <motion.h2 
              layoutId={`title-${project.id}`}
              className="mb-6 font-sans text-4xl font-bold text-white md:text-5xl"
            >
              {project.title}
            </motion.h2>

            {/* External Link Button */}
            {project.externalLink && (
              <a 
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-gray-200"
              >
                <span>VISIT LIVE SITE</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}

            {/* Expanded Tools List */}
            <div className="mb-8 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-mono text-gray-300 border border-white/5"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Strategy */}
            <div className="mb-10">
              <h4 className="mb-3 font-mono text-sm uppercase tracking-widest text-gray-500">
                // The Strategy
              </h4>
              <p className="text-lg leading-relaxed text-gray-200">
                {project.strategyDesc}
              </p>
            </div>

            {/* Chain of Thought */}
            <ChainOfThought steps={project.cotSteps} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};