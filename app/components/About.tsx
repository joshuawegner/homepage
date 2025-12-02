'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';

export function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image / Avatar */}
          <div
            className={`relative ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            } transition-all duration-700`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl" />
              
              {/* Placeholder avatar with initials */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-bold text-white/90">MM</span>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 animate-float">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.about.yearsExp}</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 animate-float animation-delay-400">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.about.projectsCount}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            } transition-all duration-700 delay-200`}
          >
            <h2 className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-3">
              {t.about.sectionTitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t.about.heading}{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {t.about.headingHighlight}
              </span>
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base md:text-lg">
              <p>
                {t.about.paragraph1}
              </p>
              <p>
                {t.about.paragraph2}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: '50+', label: t.about.projects },
                { value: '30+', label: t.about.clients },
                { value: '5+', label: t.about.years },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } transition-all duration-500`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
