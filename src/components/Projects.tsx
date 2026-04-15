import { ExternalLink, Github, Link } from 'lucide-react';
import { useScrollFade } from '../hooks/useScrollFade';

interface Project {
  title: string;
  tag: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github: string | null;
  accent: string;
  featured?: boolean;
  deployedUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Tasker Platform',
    tag: 'Service Marketplace Website (Client Project)',
    problem: 'The client needed a modern, responsive web presence to showcase their service marketplace platform and clearly communicate their value to users.',
    solution: 'Developed a responsive, multi-page React website with smooth transitions and multi-language support, enabling users to easily explore the platform and understand its offerings.',
    features: [
      'Multi-page navigation (Home, About, Contact, and more)',
      'Smooth page transitions for improved user experience',
      'Multi-language (i18n) support for broader accessibility',
      'Fully responsive design across mobile, tablet, and desktop',
      'Clean and modern UI for clear content presentation',
      'API integration for dynamic content rendering',
    ],
    stack: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'i18n', 'REST APIs'],
    github: null, // Client project (private)
    deployedUrl: 'https://tasker-website.vercel.app/',
    accent: '#3B82F6',
    featured: true
  },
  {
    title: 'Parcel Dispatcher',
    tag: 'Logistics & Delivery Management Platform (Client Project)',
    problem: 'The client needed a lightweight logistics system to manage parcel dispatch, user authentication, and delivery coordination in a simple and scalable way.',
    solution: 'Built a full-featured logistics web application using Next.js that enables users to authenticate, manage parcel dispatch operations, view locations on maps, and interact with a multi-language interface.',
    features: [
      'User authentication system for secure access control',
      'Parcel dispatch workflow for sending and managing deliveries',
      'Integrated map functionality for location-based tracking and visualization',
      'Multi-language support for international usability',
      'Fully responsive UI across mobile, tablet, and desktop devices',
      'Modern and clean interface built for usability and clarity',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Maps API', 'i18n', 'Authentication'],
    github: null, // Client project (private)
    deployedUrl: 'https://parcel-dispatcher.vercel.app/',
    accent: '#F59E0B',
  },
  {
    title: 'Metersense',
    tag: 'Uptime Monitoring Dashboard',
    problem: 'Organizations lack a centralized, real-time view of service availability, leading to delayed incident response and poor system reliability visibility.',
    solution: 'A scalable real-time monitoring dashboard that tracks uptime, response times, and service health with live updates, analytics, and alerting capabilities.',
    features: [
      'Real-time service status monitoring with automatic polling',
      'Uptime percentage and response time analytics with interactive charts',
      'Instant alert system for downtime detection',
      'Endpoint management with grouping and categorization',
      'Historical performance tracking for reliability analysis',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/devaladey/metersense',
    accent: '#10B981',
    deployedUrl: 'https://metersense.vercel.app',
  },
  // {
  //   title: 'CineSync',
  //   tag: 'A video Streaming App',
  //   problem: 'Product teams need real-time visibility into user behavior, but dashboards are slow to load and painful to navigate under high data volume.',
  //   solution: 'A high-performance analytics dashboard that renders thousands of data points with virtualized charts, instant filtering, and sub-100ms interactions.',
  //   features: [
  //     'Virtualized charts for 50k+ data point datasets',
  //     'Real-time updates via WebSocket subscriptions',
  //     'Client-side query engine with memoized aggregations',
  //     'Responsive grid layout with drag-to-resize panels',
  //   ],
  //   stack: ['React', 'TypeScript', 'Zustand', 'Recharts', 'Supabase'],
  //   github: 'https://github.com',
  //   deployedUrl: 'https://cine-sync-blue.vercel.app',
  //   accent: '#22C55E',
  // },
  // {
  //   title: 'Collab',
  //   tag: 'Real-time Editor',
  //   problem: 'Remote teams working on shared documents face sync conflicts, laggy cursors, and unreliable presence indicators.',
  //   solution: 'A collaborative text editor with operational transform–based sync, live cursors, and a conflict-free merging model that works offline-first.',
  //   features: [
  //     'Operational Transform engine for conflict-free edits',
  //     'Presence indicators with user cursors and selections',
  //     'Offline support with background sync on reconnect',
  //     'Document history with per-change diff viewer',
  //   ],
  //   stack: ['React', 'TypeScript', 'Y.js', 'WebSockets', 'IndexedDB'],
  //   github: 'https://github.com',
  //   accent: '#F59E0B',
  // },
  // {
  //   title: 'Storefront',
  //   tag: 'E-commerce Platform',
  //   problem: 'Merchants launching independently need a performant, SEO-ready storefront without the complexity of Shopify customization or the cost of custom builds.',
  //   solution: 'A headless e-commerce SPA with static-first rendering, optimistic cart updates, and Lighthouse scores above 95 on all metrics.',
  //   features: [
  //     'Static product pages with ISR-style cache invalidation',
  //     'Optimistic cart with local-first state and conflict resolution',
  //     'Image optimization pipeline with AVIF/WebP delivery',
  //     'Core Web Vitals: LCP < 1.8s, FID < 50ms, CLS < 0.05',
  //   ],
  //   stack: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'Tailwind'],
  //   github: 'https://github.com',
  //   accent: '#EC4899',
  // },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  if (project.featured) {
    return (
      <div
        className="group relative col-span-full p-8 rounded-2xl dark:bg-[#111827] bg-white border dark:border-white/[0.08] border-slate-200/80 hover:border-primary/40 card-hover dark:hover:shadow-2xl dark:hover:shadow-primary/5 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${project.accent}22 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: project.accent }}>{project.tag}</span>
              <span className="px-2 py-0.5 text-xs rounded-full dark:bg-white/[0.06] bg-slate-100 dark:text-gray-400 text-slate-500 border dark:border-white/[0.08] border-slate-200">Featured</span>
            </div>
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-3">{project.title}</h3>
            <p className="text-sm dark:text-gray-500 text-slate-500 leading-relaxed mb-4">{project.problem}</p>
            <p className="text-sm dark:text-gray-300 text-slate-700 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase dark:text-gray-500 text-slate-400 mb-4">Key Features</p>
            <ul className="space-y-2.5 mb-6">
              {project.features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm dark:text-gray-400 text-slate-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.accent }} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md dark:bg-white/[0.05] bg-slate-100 dark:text-gray-400 text-slate-500 dark:border-white/[0.08] border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex items-center gap-3 mt-auto'>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                >
                <Link size={13} />
                GitHub
                <ExternalLink size={11} />
              </a>)}
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <Github size={13} />
                Deployed Url
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative p-6 rounded-xl dark:bg-[#111827] bg-white border dark:border-white/[0.08] border-slate-200/80 hover:border-opacity-50 card-hover dark:hover:shadow-xl hover:shadow-lg overflow-hidden flex flex-col"
      style={{ borderColor: undefined }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
      />
      <div className="mb-4">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: project.accent }}>
          {project.tag}
        </span>
      </div>
      <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">{project.title}</h3>
      <p className="text-sm dark:text-gray-500 text-slate-500 leading-relaxed mb-4 flex-grow">{project.solution}</p>
      <ul className="space-y-2 mb-5">
        {project.features.slice(0, 3).map(f => (
          <li key={f} className="flex items-start gap-2 text-xs dark:text-gray-400 text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.accent }} />
            {f}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map(tech => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-medium rounded dark:bg-white/[0.05] bg-slate-100 dark:text-gray-500 text-slate-500 dark:border-white/[0.06] border border-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='flex items-center gap-3 mt-auto'>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
          <Github size={13} />
          GitHub
          <ExternalLink size={11} />
        </a>)}
        <a
          href={project.deployedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-200"
        >
          <Link size={13} />
          Deployed Url
          <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollFade<HTMLDivElement>();

  return (
    <section id="projects" className="dark:bg-[#0B0F17] bg-[#F8FAFC] py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Projects</p>
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">
              Real problems,<br />
              <span className="dark:text-gray-400 text-slate-500 font-normal">production-grade solutions.</span>
            </h2>
            <p className="text-base dark:text-gray-500 text-slate-500 max-w-xl">
              Each project started with a real-world pain point and ended with something I'd ship to users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
