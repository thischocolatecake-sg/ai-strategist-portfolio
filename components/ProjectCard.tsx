import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-container-${project.id}`}
      onClick={() => onClick(project)}
      className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl bg-surface"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Container */}
      <motion.div layoutId={`image-container-${project.id}`} className="relative overflow-hidden">
        <motion.img
          layoutId={`image-${project.id}`}
          src={project.thumbnailImg}
          alt={project.title}
          className="h-auto w-full transform object-cover transition-transform duration-700 ease-spring group-hover:scale-110 group-hover:blur-[2px]"
          loading="lazy"
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
      </motion.div>

      {/* Tools Tags - Always Visible */}
      <div className="absolute left-3 top-3 flex flex-wrap gap-2">
        {project.tools.slice(0, 3).map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md font-mono border border-white/10"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Hover Content - Slide Up */}
      <div className="absolute bottom-0 left-0 w-full translate-y-full px-4 pb-6 pt-12 transition-transform duration-300 ease-out group-hover:translate-y-0 bg-gradient-to-t from-black via-black/80 to-transparent">
        <motion.h3 
          layoutId={`title-${project.id}`}
          className="font-sans text-xl font-bold text-white mb-1"
        >
          {project.title}
        </motion.h3>
        <p className="font-mono text-xs text-gray-300 line-clamp-2 opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
          <span className="text-emerald-400 mr-2">PROMPT_HOOK:</span>
          "{project.promptHook}"
        </p>
      </div>
    </motion.div>
  );
};