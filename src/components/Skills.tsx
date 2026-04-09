import { useScrollFade } from '../hooks/useScrollFade';

interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    color: '#6366F1',
    skills: [
      'React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS',
      'CSS Modules', 'Framer Motion', 'React Query', 'Zustand', 'Redux Toolkit',
    ],
  },
  {
    label: 'Testing & Quality',
    color: '#22C55E',
    skills: [
      'Vitest', 'Jest', 'React Testing Library', 'Playwright', 'Storybook',
      'Chromatic', 'ESLint', 'Prettier',
    ],
  },
  {
    label: 'Tools & Platform',
    color: '#F59E0B',
    skills: [
      'Git', 'GitHub Actions', 'Vercel', 'Docker', 'Webpack',
      'Turborepo', 'pnpm Workspaces', 'Figma',
    ],
  },
  {
    label: 'Backend & Data',
    color: '#EC4899',
    skills: [
      'Node.js', 'Supabase', 'PostgreSQL', 'REST APIs', 'GraphQL',
      'WebSockets', 'tRPC',
    ],
  },
  {
    label: 'Currently Exploring',
    color: '#38BDF8',
    skills: [
      'React Server Components', 'WASM', 'View Transitions API',
      'Edge Functions', 'AI SDK',
    ],
  },
];

export default function Skills() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="skills" className="dark:bg-[#0B0F17] bg-[#F8FAFC] py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Skills</p>
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">
              Tools I reach for<br />
              <span className="dark:text-gray-400 text-slate-500 font-normal">when the problem demands them.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map(group => (
              <div
                key={group.label}
                className="group p-6 rounded-xl dark:bg-[#111827] bg-white border dark:border-white/[0.08] border-slate-200/80 hover:border-opacity-50 card-hover"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: group.color }}
                  />
                  <h3 className="text-xs font-semibold tracking-widest uppercase dark:text-gray-400 text-slate-500">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="relative px-3 py-1 text-xs font-medium rounded-full dark:bg-white/[0.04] bg-slate-100 dark:text-gray-300 text-slate-600 dark:border-white/[0.07] border border-slate-200/60 cursor-default select-none transition-all duration-200 hover:border-opacity-80"
                      style={{
                        '--hover-color': group.color,
                      } as React.CSSProperties}
                      onMouseEnter={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${group.color}60`;
                        el.style.color = group.color;
                        el.style.backgroundColor = `${group.color}10`;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = '';
                        el.style.color = '';
                        el.style.backgroundColor = '';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
