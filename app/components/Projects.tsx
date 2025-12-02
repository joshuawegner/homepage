'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';

const projectsData = [
  {
    key: 'ecommerce' as const,
    image: 'from-violet-500 to-purple-500',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    key: 'taskManagement' as const,
    image: 'from-cyan-500 to-blue-500',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    key: 'aiContent' as const,
    image: 'from-pink-500 to-rose-500',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    link: '#',
    github: '#',
  },
  {
    key: 'finance' as const,
    image: 'from-amber-500 to-orange-500',
    tags: ['TypeScript', 'D3.js', 'Express', 'Redis'],
    link: '#',
    github: '#',
  },
  {
    key: 'socialMedia' as const,
    image: 'from-emerald-500 to-teal-500',
    tags: ['React Native', 'Firebase', 'GraphQL', 'AWS'],
    link: '#',
    github: '#',
  },
  {
    key: 'portfolio' as const,
    image: 'from-indigo-500 to-purple-500',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: '#',
    github: '#',
  },
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-3 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } transition-all duration-500`}
          >
            {t.projects.sectionTitle}
          </h2>
          <h3
            className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } transition-all duration-500 delay-100`}
          >
            {t.projects.heading}
          </h3>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const projectInfo = t.projects.items[project.key];
            return (
              <div
                key={project.key}
                className={`group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Project image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/20">
                      {projectInfo.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="px-4 py-2 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-indigo-500 hover:text-white transition-colors"
                      >
                        {t.projects.liveDemo}
                      </a>
                      <a
                        href={project.github}
                        className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
                      >
                        {t.projects.github}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {projectInfo.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {projectInfo.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
