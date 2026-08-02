import { m } from 'framer-motion';
import { Target, Users, ShieldCheck, Clock } from 'lucide-react';

const features = [
  { num: '01', title: 'Detailed Site Assessment', desc: 'We understand the surface, environment and project requirements before recommending a solution.', icon: Target },
  { num: '02', title: 'Skilled Professionals', desc: 'Experienced teams focused on clean execution, detail and consistent finishing.', icon: Users },
  { num: '03', title: 'Quality Materials', desc: "Reliable materials and finishing systems selected according to the project's requirements.", icon: ShieldCheck },
  { num: '04', title: 'Reliable Execution', desc: 'Clear project planning, professional coordination and attention to timelines.', icon: Clock },
];

export default function WhyChooseUsSection() {
  return (
    <section style={{ background: 'var(--color-surface)', padding: '30px 0 110px' }}>
      <div style={{ width: 'min(1400px, calc(100% - 64px))', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ marginBottom: 64 }}>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: 14 }}
          >
            WHY CHOOSE US
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.08, color: 'var(--color-primary-dark)' }}
          >
            Built Around Quality.<br />
            Delivered With Care.
          </m.h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }} className="wcu-grid">
          {/* Desktop horizontal line */}
          <div
            className="wcu-line-bg"
            style={{ position: 'absolute', top: 48, left: '12.5%', right: '12.5%', height: 2, background: 'rgba(16,42,67,0.08)', borderRadius: 999, zIndex: 0, display: 'none' }}
          />
          <m.div
            initial={{ width: 0 }}
            whileInView={{ width: '75%' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2.2, ease: 'linear' }}
            className="wcu-line-coral"
            style={{ position: 'absolute', top: 48, left: '12.5%', height: 2, background: 'var(--color-accent)', borderRadius: 999, zIndex: 0, display: 'none' }}
          />

          {/* Mobile vertical line */}
          <div
            className="wcu-vline-bg"
            style={{ position: 'absolute', top: 32, bottom: 32, left: 32, width: 2, background: 'rgba(16,42,67,0.08)', borderRadius: 999, zIndex: 0 }}
          />
          <m.div
            initial={{ height: 0 }}
            whileInView={{ height: 'calc(100% - 64px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.2, ease: 'linear' }}
            className="wcu-vline-coral"
            style={{ position: 'absolute', top: 32, left: 32, width: 2, background: 'var(--color-accent)', borderRadius: 999, zIndex: 0 }}
          />

          <div
            className="wcu-items"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, position: 'relative', zIndex: 10 }}
          >
            {features.map((f, idx) => {
              const Icon = f.icon;
              const delay = idx * 0.55;
              return (
                <div key={idx} className="wcu-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
                  <m.div
                    initial={{ background: '#FCFBF8', borderColor: 'rgba(16,42,67,0.08)' }}
                    whileInView={{ background: '#ffffff', borderColor: 'rgba(231,104,75,1)' }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, delay, ease: 'easeOut' }}
                    style={{ width: 96, height: 96, borderRadius: '50%', border: '2px solid rgba(16,42,67,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 20px rgba(16,42,67,0.04)', position: 'relative', zIndex: 10 }}
                    className="wcu-node"
                  >
                    <m.div
                      initial={{ color: 'rgba(16,42,67,0.4)', scale: 0.9 }}
                      whileInView={{ color: 'rgba(231,104,75,1)', scale: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Icon style={{ width: 30, height: 30 }} strokeWidth={1.5} />
                    </m.div>
                  </m.div>
                  <div>
                    <m.span
                      initial={{ color: 'rgba(16,42,67,0.4)', opacity: 0, y: 10 }}
                      whileInView={{ color: 'rgba(231,104,75,1)', opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.5, delay: delay + 0.1, ease: 'easeOut' }}
                      style={{ display: 'block', fontSize: 14, fontWeight: 700, letterSpacing: '2px', marginBottom: 8 }}
                    >
                      {f.num}
                    </m.span>
                    <m.h3
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.5, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
                      style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: 10, lineHeight: 1.3 }}
                    >
                      {f.title}
                    </m.h3>
                    <m.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.5, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.65 }}
                    >
                      {f.desc}
                    </m.p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop: show horizontal line, hide vertical */
        @media (min-width: 900px) {
          .wcu-line-bg, .wcu-line-coral { display: block !important; }
          .wcu-vline-bg, .wcu-vline-coral { display: none !important; }
        }
        /* Tablet: 2×2 grid, hide all connecting lines */
        @media (min-width: 600px) and (max-width: 899px) {
          .wcu-items { grid-template-columns: repeat(2, 1fr) !important; }
          .wcu-line-bg, .wcu-line-coral, .wcu-vline-bg, .wcu-vline-coral { display: none !important; }
          .wcu-item { flex-direction: column; align-items: center; }
        }
        /* Mobile: 1 column, vertical line */
        @media (max-width: 599px) {
          .wcu-items { grid-template-columns: 1fr !important; gap: 40px !important; }
          .wcu-item { flex-direction: row !important; align-items: flex-start !important; text-align: left !important; gap: 20px !important; padding-left: 20px; }
          .wcu-node { width: 64px !important; height: 64px !important; flex-shrink: 0; }
          .wcu-line-bg, .wcu-line-coral { display: none !important; }
        }
      `}</style>
    </section>
  );
}
