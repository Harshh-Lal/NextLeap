import React, { useEffect, useRef } from 'react';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.classList.add('visible');
      }, 500);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-section-gap-mobile md:py-section-gap-desktop border-t border-outline-variant/20 bg-surface-container-lowest fade-up relative">
      <div className="px-margin-page max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 mb-stack-lg lg:mb-0">
            <span className="font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-4">What We Do</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">Solutions engineered for real business <span className="text-on-tertiary-container">outcomes.</span></h2>
            <a className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors inline-flex items-center gap-2 font-medium" href="#">Explore all services <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Item */}
            <div className="group border border-outline-variant/20 p-6 rounded-xl hover:bg-surface-bright transition-colors flex items-start gap-4 cursor-pointer">
              <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center shrink-0 group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-tertiary-container transition-colors">devices</span>
              </div>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-semibold text-on-surface mb-1">Web &amp; App Development</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Fast, scalable and secure web and mobile applications.</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">chevron_right</span>
            </div>
            {/* Service Item */}
            <div className="group border border-outline-variant/20 p-6 rounded-xl hover:bg-surface-bright transition-colors flex items-start gap-4 cursor-pointer">
              <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center shrink-0 group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-tertiary-container transition-colors">design_services</span>
              </div>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-semibold text-on-surface mb-1">Product Design (UI/UX)</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Beautiful, user-centric designs that convert.</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">chevron_right</span>
            </div>
            {/* Service Item */}
            <div className="group border border-outline-variant/20 p-6 rounded-xl hover:bg-surface-bright transition-colors flex items-start gap-4 cursor-pointer">
              <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center shrink-0 group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-tertiary-container transition-colors">smart_toy</span>
              </div>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-semibold text-on-surface mb-1">AI &amp; Automation</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Intelligent automation that saves time and drives efficiency.</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">chevron_right</span>
            </div>
            {/* Service Item */}
            <div className="group border border-outline-variant/20 p-6 rounded-xl hover:bg-surface-bright transition-colors flex items-start gap-4 cursor-pointer">
              <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center shrink-0 group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-tertiary-container transition-colors">analytics</span>
              </div>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-semibold text-on-surface mb-1">Data &amp; Analytics</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Insights that help you make smarter business decisions.</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">chevron_right</span>
            </div>
            {/* Service Item */}
            <div className="group border border-outline-variant/20 p-6 rounded-xl hover:bg-surface-bright transition-colors flex items-start gap-4 cursor-pointer">
              <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center shrink-0 group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-tertiary-container transition-colors">cloud</span>
              </div>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-semibold text-on-surface mb-1">Cloud &amp; DevOps</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Reliable infrastructure that scales with your business.</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">chevron_right</span>
            </div>
            {/* Service Item */}
            <div className="group border border-outline-variant/20 p-6 rounded-xl hover:bg-surface-bright transition-colors flex items-start gap-4 cursor-pointer">
              <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center shrink-0 group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-tertiary-container transition-colors">campaign</span>
              </div>
              <div className="flex-1">
                <h3 className="font-title-md text-base font-semibold text-on-surface mb-1">Digital Strategy</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Roadmaps and strategies that align technology with growth.</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">chevron_right</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
