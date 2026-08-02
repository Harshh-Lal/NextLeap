import React, { useEffect, useRef } from 'react';
// @ts-ignore
import LogoLoop from './LogoLoop';

const techLogos = [
  { node: <div className="flex items-center gap-2 font-bold text-lg text-on-surface-variant"><span className="material-symbols-outlined">change_history</span> Acme Corp</div>, title: "Acme Corp" },
  { node: <div className="flex items-center gap-2 font-bold text-lg text-on-surface-variant"><span className="material-symbols-outlined">cloud</span> Cloudex</div>, title: "Cloudex" },
  { node: <div className="flex items-center gap-2 font-bold text-lg text-on-surface-variant"><span className="material-symbols-outlined">token</span> Pivotal</div>, title: "Pivotal" },
  { node: <div className="flex items-center gap-2 font-bold text-lg text-on-surface-variant"><span className="material-symbols-outlined">storm</span> Zephyr</div>, title: "Zephyr" },
  { node: <div className="flex items-center gap-2 font-bold text-lg text-on-surface-variant"><span className="material-symbols-outlined">layers</span> Layers</div>, title: "Layers" },
];

const LogoCloud: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.classList.add('visible');
      }, 200);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-8 bg-surface-container-lowest border-y border-outline-variant/20 fade-up">
      <div className="px-6 md:px-margin-page max-w-container-max mx-auto text-center">
        <p className="font-label-sm text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-8">Trusted by innovative companies</p>
        <div style={{ height: '60px', position: 'relative', overflow: 'hidden'}}>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
