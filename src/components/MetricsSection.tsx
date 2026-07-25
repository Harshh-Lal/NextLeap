import React, { useEffect, useRef } from 'react';

const MetricsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.classList.add('visible');
      }, 300);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-surface-container-lowest fade-up">
      <div className="px-margin-page max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-4 bg-surface-bright p-6 rounded-xl border border-outline-variant/20">
            <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <div>
              <span className="block font-headline-lg-mobile md:font-headline-lg text-2xl md:text-3xl font-bold text-on-surface">50+</span>
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Projects Delivered</span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-surface-bright p-6 rounded-xl border border-outline-variant/20">
            <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <span className="block font-headline-lg-mobile md:font-headline-lg text-2xl md:text-3xl font-bold text-on-surface">98%</span>
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Client Satisfaction</span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-surface-bright p-6 rounded-xl border border-outline-variant/20">
            <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined">domain</span>
            </div>
            <div>
              <span className="block font-headline-lg-mobile md:font-headline-lg text-2xl md:text-3xl font-bold text-on-surface">15+</span>
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Industries Served</span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-surface-bright p-6 rounded-xl border border-outline-variant/20">
            <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined">search</span>
            </div>
            <div>
              <span className="block font-headline-lg-mobile md:font-headline-lg text-2xl md:text-3xl font-bold text-on-surface">5+</span>
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
