import React, { useEffect, useRef } from 'react';

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
    <section ref={sectionRef} className="py-12 bg-surface-container-lowest border-y border-outline-variant/20 fade-up">
      <div className="px-margin-page max-w-container-max mx-auto text-center">
        <p className="font-label-sm text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-8">Trusted by innovative companies</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">change_history</span> Acme Corp</div>
          <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">cloud</span> Cloudex</div>
          <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">token</span> Pivotal</div>
          <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">storm</span> Zephyr</div>
          <div className="flex items-center gap-2 font-bold text-lg"><span className="material-symbols-outlined">layers</span> Layers</div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
