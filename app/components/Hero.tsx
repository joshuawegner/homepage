'use client';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-pulse-slow animation-delay-400" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 mb-6">
            Available for freelance work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            Max Mustermann
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-4 opacity-0 animate-fade-in-up animation-delay-400">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up animation-delay-600">
          I craft beautiful, performant web applications with modern technologies. 
          Passionate about clean code, great UX, and turning ideas into reality.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-800">
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-full hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator - positioned relative to section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in animation-delay-800">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-slate-400 dark:text-slate-500">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
