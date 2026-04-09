import { useScrollFade } from '../hooks/useScrollFade';
import { Boxes, BarChart3, Component, Brain, GitBranch } from 'lucide-react';

const points = [
  {
    icon: Boxes,
    title: 'Systems over features',
    description:
      'Features decay. Systems compound. I invest in conventions, boundaries, and data flow patterns that multiply team velocity instead of individual output.',
    tag: 'Architecture',
  },
  {
    icon: BarChart3,
    title: 'Performance as a constraint',
    description:
      'I treat bundle size, render cycles, and network waterfalls as hard constraints from day one — not post-launch optimizations. Fast products win.',
    tag: 'Performance',
  },
  {
    icon: Component,
    title: 'Modular by default',
    description:
      'Every component ships with a narrow, stable API. Composability beats configuration. I design for the case where requirements change — because they always do.',
    tag: 'Design Principles',
  },
  {
    icon: Brain,
    title: 'Cognitive load is a bug',
    description:
      "Code is read far more than it's written. I optimize for the engineer reading it at 11pm during an incident — clear naming, no surprises, obvious behavior.",
    tag: 'Code Quality',
  },
  {
    icon: GitBranch,
    title: 'Ship state machines, not flags',
    description:
      'Boolean flags create invalid state combinations. Explicit state machines eliminate impossible states, clarify edge cases, and make testing trivial.',
    tag: 'State Management',
  },
];

export default function EngineeringThinking() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="thinking" className="dark:bg-[#0f172a] bg-slate-50 py-28 border-y dark:border-white/[0.06] border-slate-200/60">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Engineering Thinking</p>
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">
              How I make decisions<br />
              <span className="dark:text-gray-400 text-slate-500 font-normal">under real constraints.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {points.map(({ icon: Icon, title, description, tag }, i) => (
              <div
                key={title}
                className="group flex gap-6 p-6 rounded-xl dark:bg-[#111827] bg-white border dark:border-white/[0.08] border-slate-200/80 hover:border-primary/30 card-hover"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg dark:bg-white/[0.05] bg-slate-100 group-hover:bg-primary/10 transition-colors duration-200 border dark:border-white/[0.08] border-slate-200/60">
                    <Icon size={17} className="dark:text-gray-400 text-slate-500 group-hover:text-primary transition-colors duration-200" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-sm font-semibold dark:text-white text-slate-900">{title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full dark:bg-white/[0.04] bg-slate-100 dark:text-gray-500 text-slate-400 dark:border-white/[0.06] border border-slate-200">
                      {tag}
                    </span>
                  </div>
                  <p className="text-sm dark:text-gray-500 text-slate-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
