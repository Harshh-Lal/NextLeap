import React, { useEffect, useRef } from 'react';

const ProblemsWeSolve: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.classList.add('visible');
      }, 400);
    }
  }, []);

  return (
    <section ref={sectionRef} className="px-margin-page max-w-container-max mx-auto py-section-gap-mobile md:py-section-gap-desktop fade-up">
      <div className="bg-surface-container-low/50 rounded-3xl p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-label-sm text-[11px] font-bold text-primary uppercase tracking-widest block mb-6">
              We Solve Complex Problems
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight">
              Systematic friction.<br />Surgical solutions.
            </h2>
            <p className="font-body-md text-base text-on-surface-variant max-w-md">
              We engineer digital experiences and systems that eliminate friction, optimize operations and accelerate growth.
            </p>
          </div>

          {/* Right Column (List) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            
            {/* List Item 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-5 md:p-6 flex items-center gap-6 hover:shadow-md transition-shadow cursor-pointer group">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-2xl shrink-0">hourglass_bottom</span>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Slow business processes</h3>
                <p className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant truncate max-w-[200px] sm:max-w-sm md:max-w-md">We re-engineer workflows for velocity, reducing redundancies.</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors shrink-0">arrow_forward</span>
            </div>

            {/* List Item 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-5 md:p-6 flex items-center gap-6 hover:shadow-md transition-shadow cursor-pointer group">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-2xl shrink-0">public_off</span>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Poor online presence</h3>
                <p className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant truncate max-w-[200px] sm:max-w-sm md:max-w-md">We build impactful digital experiences that ensure cohesion.</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors shrink-0">arrow_forward</span>
            </div>

            {/* List Item 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-5 md:p-6 flex items-center gap-6 hover:shadow-md transition-shadow cursor-pointer group">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-2xl shrink-0">precision_manufacturing</span>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Manual, repetitive work</h3>
                <p className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant truncate max-w-[200px] sm:max-w-sm md:max-w-md">We automate the mundane so your team can focus on what matters.</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors shrink-0">arrow_forward</span>
            </div>

            {/* List Item 4 */}
            <div className="bg-surface-container-lowest rounded-xl p-5 md:p-6 flex items-center gap-6 hover:shadow-md transition-shadow cursor-pointer group">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-2xl shrink-0">trending_down</span>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Low customer acquisition</h3>
                <p className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant truncate max-w-[200px] sm:max-w-sm md:max-w-md">We design data-driven experiences and funnels that convert.</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors shrink-0">arrow_forward</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
