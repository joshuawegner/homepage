'use client';

import { useLanguage } from './LanguageProvider';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
      aria-label={language === 'en' ? 'Switch to German' : 'Zu Englisch wechseln'}
    >
      <span className="text-base">{language === 'en' ? '🇬🇧' : '🇩🇪'}</span>
      <span className="uppercase">{language}</span>
    </button>
  );
}
