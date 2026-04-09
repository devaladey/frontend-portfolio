import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Thinking', href: '#thinking' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-[#0B0F17]/90 bg-white/90 backdrop-blur-md border-b dark:border-white/[0.08] border-slate-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight dark:text-white text-slate-900 hover:text-primary transition-colors duration-200"
        >
          OO<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium dark:text-gray-400 text-slate-500 hover:dark:text-white hover:text-slate-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/[0.06] bg-slate-100 dark:hover:bg-white/[0.1] hover:bg-slate-200 dark:text-gray-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-all duration-200"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/[0.06] bg-slate-100 dark:text-gray-400 text-slate-500 transition-all duration-200"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden dark:bg-[#111827] bg-white border-t dark:border-white/[0.08] border-slate-200 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium dark:text-gray-300 text-slate-700 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
