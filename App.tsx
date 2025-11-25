import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PROJECTS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  const handleProjectClick = (project: Project) => {
    setSelectedId(project.id);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <div className="min-h-screen w-full px-4 pb-20 pt-12 md:px-8 lg:px-16">
      
      {/* Header / Bio */}
      <header className="mb-16 max-w-2xl">
        <h1 className="mb-4 font-sans text-5xl font-bold tracking-tight text-white">
          Zhi Han
        </h1>

        {/* Social Icons */}
        <div className="mb-6 flex gap-4">
          <a 
            href="https://www.linkedin.com/in/zhi-han-tan-952581b9/recent-activity/articles/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452H16.892V14.881C16.892 13.553 16.866 11.844 15.043 11.844C13.194 11.844 12.911 13.287 12.911 14.787V20.452H9.356V9.006H12.768V10.57H12.816C13.291 9.669 14.453 8.718 16.185 8.718C19.79 8.718 20.447 11.091 20.447 14.17V20.452ZM5.337 7.433C4.197 7.433 3.274 6.51 3.274 5.37C3.274 4.23 4.197 3.307 5.337 3.307C6.477 3.307 7.4 4.23 7.4 5.37C7.4 6.51 6.477 7.433 5.337 7.433ZM3.562 20.452H7.125V9.006H3.562V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.201 24 24 23.227 24 22.271V1.729C24 0.774 23.201 0 22.222 0H22.225Z"/>
            </svg>
          </a>
          <a 
            href="https://www.youtube.com/@ciellabs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="YouTube"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186C23.224 5.171 22.424 4.371 21.409 4.097C19.567 3.604 12.003 3.604 12.003 3.604C12.003 3.604 4.435 3.604 2.592 4.097C1.577 4.371 0.777 5.171 0.503 6.186C0.01 8.03 0.01 11.996 0.01 11.996C0.01 11.996 0.01 15.962 0.503 17.806C0.777 18.821 1.577 19.621 2.592 19.895C4.435 20.388 12.003 20.388 12.003 20.388C12.003 20.388 19.567 20.388 21.409 19.895C22.424 19.621 23.224 18.821 23.498 17.806C23.991 15.962 23.991 11.996 23.991 11.996C23.991 11.996 23.991 8.03 23.498 6.186ZM9.545 15.568V8.424L15.818 11.996L9.545 15.568Z"/>
            </svg>
          </a>
          <a 
            href="https://open.spotify.com/artist/6UkIBgJwXqOi9BJ3l56Hyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Spotify"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM17.5 17.3C17.2 17.7 16.6 17.9 16.2 17.6C13.5 16 10 15.6 5.8 16.6C5.3 16.7 4.8 16.4 4.7 15.9C4.6 15.4 4.9 14.9 5.4 14.8C10.1 13.7 14 14.1 17.2 16C17.6 16.3 17.7 16.9 17.5 17.3ZM18.9 14C18.6 14.6 17.9 14.8 17.3 14.4C14.1 12.5 9.4 12 5.6 13.1C5 13.3 4.4 12.9 4.2 12.3C4 11.7 4.4 11.1 5 10.9C9.5 9.6 14.8 10.2 18.6 12.6C19.1 12.8 19.3 13.5 18.9 14ZM19 10.5C15.2 8.3 8.8 8.1 5.1 9.2C4.5 9.4 3.9 9 3.7 8.4C3.5 7.8 3.9 7.2 4.5 7C8.8 5.7 15.9 5.9 20.3 8.5C20.8 8.8 21 9.5 20.7 10C20.4 10.6 19.7 10.8 19 10.5Z"/>
            </svg>
          </a>
        </div>

        <h2 className="mb-6 font-mono text-lg text-emerald-400">
          AI STRATEGIST & CREATIVE TECHNOLOGIST
        </h2>
        <p className="text-lg leading-relaxed text-gray-400">
          A digital strategist who wrangles pixels and copy for State Property, a fine jewelry label adorning Michelle Obama, Lady Gaga, and other humans with impeccable taste. AI and Web3 enthusiast who can tell you the differences between the latest LLM models and an absolute geek when it comes to image and video generation. Often finds himself participating in hackathons to flex his creativity and have collected many participation trophies thus far.
        </p>
      </header>

      {/* Bento / Masonry Grid */}
      {/* Tailwind Columns are the simplest way to achieve Masonry without heavy JS */}
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3 xl:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={handleProjectClick} 
          />
        ))}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleClose} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;