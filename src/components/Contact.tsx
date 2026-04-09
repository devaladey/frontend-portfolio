import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Send } from 'lucide-react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Contact() {
  const ref = useScrollFade<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: 'oluwatobioyedokun7@gmail.com',
      href: 'mailto:oluwatobioyedokun7@gmail.com',
      color: '#6366F1',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/devaladey',
      href: 'https://github.com/devaladey',
      color: '#9CA3AF',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/oluwatobiloba-oyedokun',
      href: 'https://linkedin.com/in/oluwatobiloba-oyedokun',
      color: '#38BDF8',
    },
  ];

  return (
    <section id="contact" className="dark:bg-[#0f172a] bg-slate-50 py-28 border-t dark:border-white/[0.06] border-slate-200/60">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Contact</p>
              <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">
                Let's build<br />
                <span className="dark:text-gray-400 text-slate-500 font-normal">something worth shipping.</span>
              </h2>
              <p className="text-base dark:text-gray-500 text-slate-500 leading-relaxed mb-10 max-w-sm">
                I'm open to senior frontend roles, staff engineer positions, and technical co-founder conversations.
              </p>

              <div className="space-y-4">
                {links.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl dark:bg-[#111827] bg-white border dark:border-white/[0.08] border-slate-200/80 hover:border-primary/30 card-hover"
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 transition-colors duration-200"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs dark:text-gray-500 text-slate-400 mb-0.5">{label}</div>
                      <div className="text-sm font-medium dark:text-gray-200 text-slate-700 group-hover:text-primary transition-colors duration-200 truncate">
                        {value}
                      </div>
                    </div>
                    <ArrowRight size={14} className="ml-auto dark:text-gray-600 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl dark:bg-[#111827] bg-white border dark:border-white/[0.08] border-slate-200/80">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center mb-4">
                    <Send size={20} className="text-success" />
                  </div>
                  <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-2">Message sent</h3>
                  <p className="text-sm dark:text-gray-500 text-slate-500">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium dark:text-gray-400 text-slate-500 mb-2 tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg text-sm dark:bg-white/[0.04] bg-slate-50 dark:border-white/[0.1] border border-slate-200 dark:text-gray-200 text-slate-800 dark:placeholder-gray-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium dark:text-gray-400 text-slate-500 mb-2 tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg text-sm dark:bg-white/[0.04] bg-slate-50 dark:border-white/[0.1] border border-slate-200 dark:text-gray-200 text-slate-800 dark:placeholder-gray-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium dark:text-gray-400 text-slate-500 mb-2 tracking-wide">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="What are you working on?"
                      className="w-full px-4 py-3 rounded-lg text-sm dark:bg-white/[0.04] bg-slate-50 dark:border-white/[0.1] border border-slate-200 dark:text-gray-200 text-slate-800 dark:placeholder-gray-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 group"
                  >
                    Send Message
                    <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
