import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-[#0B0F17] bg-[#F8FAFC]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '2.5s',
          }}
        />
        <div
          className="absolute top-[40%] left-[55%] w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-white/[0.06] bg-slate-100 border dark:border-white/[0.1] border-slate-200 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium dark:text-gray-400 text-slate-500 tracking-wide">Available for opportunities</span>
        </div>

        <h1
          className="font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up dark:text-white text-slate-900"
          style={{ fontSize: 'clamp(42px, 6vw, 64px)', animationDelay: '0.1s', opacity: 0 }}
        >
          Hi, I'm{' '}
          <span className="text-gradient-primary">Oyedokun Oluwatobiloba</span>
          <br />
          <span className="dark:text-gray-300 text-slate-700" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Frontend Developer
          </span>
        </h1>

        <p
          className="text-lg dark:text-gray-400 text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          I build{' '}
          <span className="dark:text-gray-200 text-slate-700 font-medium">fast, scalable, and production-ready</span>{' '}
          frontend systems — from design systems to real-world applications.
        </p>

        <p
          className="text-sm dark:text-gray-500 text-slate-400 max-w-xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          React · TypeScript · UI Systems · Performance Engineering
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:shadow-xl"
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg dark:bg-white/[0.06] bg-slate-100 dark:hover:bg-white/[0.1] hover:bg-slate-200 dark:text-gray-200 text-slate-700 dark:border-white/[0.1] border border-slate-200 text-sm font-medium transition-all duration-200"
          >
            Contact
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-4 mt-10 animate-fade-up"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          <a
            href="https://github.com/devaladey"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/[0.06] bg-slate-100 dark:hover:bg-white/[0.1] hover:bg-slate-200 dark:text-gray-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-all duration-200"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/oluwatobiloba-oyedokun"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/[0.06] bg-slate-100 dark:hover:bg-white/[0.1] hover:bg-slate-200 dark:text-gray-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-all duration-200"
          >
            <Linkedin size={16} />
          </a>
        </div>

        <div
          className="mt-20 flex items-center justify-center gap-12 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          {[
            { value: '4+', label: 'Years Building' },
            { value: '20+', label: 'Projects Shipped' },
            { value: '12+', label: 'Open Source' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold dark:text-white text-slate-900 leading-none">{stat.value}</div>
              <div className="text-xs dark:text-gray-500 text-slate-400 mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
        <div className="w-px h-12 dark:bg-gradient-to-b from-transparent via-gray-600 to-transparent bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
        <span className="text-xs dark:text-gray-600 text-slate-400 tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
