import { useScrollFade } from '../hooks/useScrollFade';
import { Code2, Layers, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Problem-First Thinking',
    text: 'I start with the problem, not the solution. Every component, hook, and abstraction earns its existence by solving a real constraint — not by following a pattern.',
  },
  {
    icon: Layers,
    title: 'Reusable UI Systems',
    text: 'I design components as contracts. Consistent APIs, predictable behavior, and zero surprises. A well-designed system ships features faster and breaks less.',
  },
  {
    icon: Zap,
    title: 'Performance is Product',
    text: 'Load time is UX. Bundle size is a feature. I treat Core Web Vitals, render cycles, and network waterfalls as first-class product metrics.',
  },
];

export default function About() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="about" className="dark:bg-[#0B0F17] bg-[#F8FAFC] py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">About</p>
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-6">
              Engineering clarity,<br />
              <span className="dark:text-gray-400 text-slate-500 font-normal">not just clean code.</span>
            </h2>
            <p className="text-base dark:text-gray-400 text-slate-500 max-w-2xl leading-relaxed">
              I'm a frontend developer who cares about the gap between working and well-engineered. I build interfaces that feel fast, stay maintainable, and scale — because both users and teams deserve better than fragile shipped code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group relative p-6 rounded-xl dark:bg-[#111827] bg-white border dark:border-white/[0.08] border-slate-200/80 hover:border-primary/30 card-hover dark:hover:bg-[#111827] hover:shadow-lg dark:hover:shadow-primary/5 hover:shadow-primary/5"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 mb-5 group-hover:bg-primary/15 transition-colors duration-200">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold dark:text-white text-slate-900 mb-2">{title}</h3>
                <p className="text-sm dark:text-gray-500 text-slate-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
