import React, { useEffect, useRef } from 'react';

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.classList.add('visible');
      }, 700);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest fade-up">
      <div className="px-margin-page max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Our Process</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface">A proven process. Measurable results.</h2>
        </div>
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-6 left-12 right-12 h-px border-t-2 border-dashed border-outline-variant/30"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border-2 border-primary-fixed bg-surface-container-lowest flex items-center justify-center mb-6 text-on-tertiary-container font-bold shadow-sm group-hover:bg-primary-fixed/10 transition-colors">
                <span className="font-label-sm text-sm">01</span>
              </div>
              <h3 className="text-[18px] font-bold text-on-surface mb-2" style={{fontFamily: 'var(--font-heading)'}}>Discover</h3>
              <p className="text-body-md text-on-surface-variant">We audit systems and map business objectives.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border-2 border-primary-fixed bg-surface-container-lowest flex items-center justify-center mb-6 text-on-tertiary-container font-bold shadow-sm group-hover:bg-primary-fixed/10 transition-colors">
                <span className="font-label-sm text-sm">02</span>
              </div>
              <h3 className="text-[18px] font-bold text-on-surface mb-2" style={{fontFamily: 'var(--font-heading)'}}>Plan</h3>
              <p className="text-body-md text-on-surface-variant">We define the right solution and roadmap.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border-2 border-primary-fixed bg-surface-container-lowest flex items-center justify-center mb-6 text-on-tertiary-container font-bold shadow-sm group-hover:bg-primary-fixed/10 transition-colors">
                <span className="font-label-sm text-sm">03</span>
              </div>
              <h3 className="text-[18px] font-bold text-on-surface mb-2" style={{fontFamily: 'var(--font-heading)'}}>Design</h3>
              <p className="text-body-md text-on-surface-variant">We craft user experiences that drive engagement.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border-2 border-primary-fixed bg-surface-container-lowest flex items-center justify-center mb-6 text-on-tertiary-container font-bold shadow-sm group-hover:bg-primary-fixed/10 transition-colors">
                <span className="font-label-sm text-sm">04</span>
              </div>
              <h3 className="text-[18px] font-bold text-on-surface mb-2" style={{fontFamily: 'var(--font-heading)'}}>Build</h3>
              <p className="text-body-md text-on-surface-variant">We develop with quality, transparency and speed.</p>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full border-2 border-primary-fixed bg-surface-container-lowest flex items-center justify-center mb-6 text-on-tertiary-container font-bold shadow-sm group-hover:bg-primary-fixed/10 transition-colors">
                <span className="font-label-sm text-sm">05</span>
              </div>
              <h3 className="text-[18px] font-bold text-on-surface mb-2" style={{fontFamily: 'var(--font-heading)'}}>Grow</h3>
              <p className="text-body-md text-on-surface-variant">We optimize, scale and support your growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
