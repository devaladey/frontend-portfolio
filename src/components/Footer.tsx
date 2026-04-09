import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark:bg-[#0B0F17] bg-[#F8FAFC] border-t dark:border-white/[0.06] border-slate-200/60 py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold dark:text-white text-slate-900">
            OO<span className="text-primary">.</span>
          </span>
          <span className="text-sm dark:text-gray-600 text-slate-400">
            &copy; {year} Oyedokun Oluwatobiloba
          </span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: 'https://github.com/devaladey', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/oluwatobiloba-oyedokun', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:oluwatobioyedokun7@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg dark:text-gray-600 text-slate-400 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/[0.06] hover:bg-slate-100 transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-xs dark:text-gray-700 text-slate-400">
          Built with React + TypeScript + Tailwind
        </p>
      </div>
    </footer>
  );
}
