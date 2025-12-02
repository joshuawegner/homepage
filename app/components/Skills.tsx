'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    category: 'DevOps',
    icon: '☁️',
    items: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 88 },
      { name: 'Kubernetes', level: 72 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: [
      { name: 'Git', level: 95 },
      { name: 'VS Code', level: 98 },
      { name: 'Figma', level: 75 },
      { name: 'Linux', level: 82 },
    ],
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="skills"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-3 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } transition-all duration-500`}
          >
            What I Do
          </h2>
          <h3
            className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } transition-all duration-500 delay-100`}
          >
            Skills & Technologies
          </h3>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className={`group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + groupIndex * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{skillGroup.icon}</span>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h4>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        {skill.name}
                      </span>
                      <span className="text-indigo-500 dark:text-indigo-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${400 + groupIndex * 100 + skillIndex * 50}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
