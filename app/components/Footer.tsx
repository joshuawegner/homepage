'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 border-t border-slate-200 dark:border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950" />
      
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Max Mustermann
        </a>

        {/* Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} Max Mustermann. No rights reserved.
        </p>

        {/* Built with */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Built with{' '}
          <span className="text-red-500">♥</span>
          {' '}using Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
