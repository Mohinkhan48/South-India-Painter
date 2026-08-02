import { m } from 'framer-motion';
import { ClipboardCheck, Palette, Users, Award, ShieldCheck, CalendarCheck, LayoutDashboard } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section style={{ background: '#ffffff', padding: '75px 0 90px' }}>
      <div style={{ width: 'min(1400px, calc(100% - 64px))', margin: '0 auto' }}>
        
        {/* Heading */}
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(28px, 3vw, 38px)',
            fontWeight: 700,
            color: 'var(--color-primary-dark)',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          WHY CHOOSE US?
        </m.h2>

        {/* Top 3 Benefits */}
        <div className="benefits-top-grid">
          {/* Item 1 */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{
              width: 80, height: 80, borderRadius: '24px', background: 'rgba(231,104,75,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20
            }}>
              <ClipboardCheck style={{ width: 40, height: 40, color: 'var(--color-primary-dark)' }} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-dark)', marginBottom: 12 }}>
              TECHNICAL &<br/>ACCURATE ANALYSIS
            </h3>
            <p style={{ fontSize: 15, fontWeight: 400, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              Of The Site By<br/>Trained Experts
            </p>
          </m.div>

          {/* Item 2 */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{
              width: 80, height: 80, borderRadius: '24px', background: 'rgba(231,104,75,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20
            }}>
              <Palette style={{ width: 40, height: 40, color: 'var(--color-primary-dark)' }} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-dark)', marginBottom: 12 }}>
              FREE ONLINE<br/>COLOUR CONSULTATION
            </h3>
            <p style={{ fontSize: 15, fontWeight: 400, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              With Bespoke & Trending<br/>Digital Visuals Of Your Home
            </p>
          </m.div>

          {/* Item 3 */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{
              width: 80, height: 80, borderRadius: '24px', background: 'rgba(231,104,75,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20
            }}>
              <Users style={{ width: 40, height: 40, color: 'var(--color-primary-dark)' }} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-dark)', marginBottom: 12 }}>
              DEDICATED TEAM TO<br/>ASSIST AND SUPPORT
            </h3>
            <p style={{ fontSize: 15, fontWeight: 400, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              At Every Step Of Your<br/>Painting Journey
            </p>
          </m.div>
        </div>

        {/* Bottom Orange Bar */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          style={{
            marginTop: 100,
            background: 'linear-gradient(110deg, #102b45 0%, #173b5c 100%)',
            borderRadius: 50,
            minHeight: 145,
            padding: '30px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="benefits-bottom-bar"
        >
          <div className="benefits-bottom-grid">
            <div className="benefit-bar-item">
              <Award style={{ width: 60, height: 60, color: '#ffffff' }} strokeWidth={1.5} />
              <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.15 }}>BEST<br/>QUALITY</span>
            </div>
            
            <div className="benefit-divider" />
            
            <div className="benefit-bar-item">
              <ShieldCheck style={{ width: 60, height: 60, color: '#ffffff' }} strokeWidth={1.5} />
              <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.15 }}>1 YEAR<br/>WARRANTY</span>
            </div>
            
            <div className="benefit-divider" />
            
            <div className="benefit-bar-item">
              <CalendarCheck style={{ width: 60, height: 60, color: '#ffffff' }} strokeWidth={1.5} />
              <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.15 }}>ON-TIME<br/>DELIVERY</span>
            </div>
            
            <div className="benefit-divider" />
            
            <div className="benefit-bar-item">
              <LayoutDashboard style={{ width: 60, height: 60, color: '#ffffff' }} strokeWidth={1.5} />
              <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.15 }}>24/7 ACCESS TO<br/>DASHBOARD</span>
            </div>
          </div>
        </m.div>

      </div>

      <style>{`
        .benefits-top-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
        }
        .benefits-bottom-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          width: 100%;
          gap: 15px;
        }
        .benefit-bar-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          text-align: left;
        }
        .benefit-divider {
          width: 1px;
          height: 80px;
          background: rgba(255, 255, 255, 0.25);
        }

        @media (max-width: 1024px) {
          .benefits-bottom-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 30px;
          }
          .benefit-divider {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .benefits-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .benefits-bottom-bar {
            border-radius: 30px !important;
            padding: 40px 20px !important;
          }
          .benefits-bottom-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .benefit-bar-item {
            flex-direction: row;
            justify-content: flex-start;
            padding-left: 10%;
          }
        }
      `}</style>
    </section>
  );
}
