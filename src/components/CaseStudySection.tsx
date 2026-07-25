import React, { useEffect, useRef } from 'react';
import caseStudyImage from '../assets/case_study.png';

const CaseStudySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.classList.add('visible');
      }, 600);
    }
  }, []);

  return (
    <section ref={sectionRef} className="px-margin-page max-w-container-max mx-auto py-section-gap-mobile md:py-section-gap-desktop fade-up">
      <div className="border border-outline-variant/20 rounded-2xl overflow-hidden bg-surface-container-lowest flex flex-col lg:flex-row">
        <div className="lg:w-1/2 bg-surface-bright p-8 md:p-12 flex items-center justify-center relative min-h-[400px]">
          <div className="absolute inset-0 bg-grid opacity-30"></div>
          <div className="relative z-10 w-full flex items-center justify-center">
            <img alt="Dashboard mockup" className="w-[110%] max-w-none h-auto drop-shadow-2xl rounded-xl" src={caseStudyImage} />
          </div>
        </div>
        <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-surface-container-lowest">
          <span className="font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Case Study / FinTech Scale-Up</span>
          <h3 className="font-headline-lg-mobile text-3xl font-bold text-on-surface mb-6 leading-tight">Transforming legacy infrastructure for a modern financial platform.</h3>
          <div className="space-y-6">
            <div>
              <p className="font-body-md text-base text-on-surface-variant mb-6">We architected a unified microservices backend and streamlined UX framework.</p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-outline-variant/20">
              <div>
                <span className="block font-title-md text-2xl text-on-surface font-bold mb-1">3.2x</span>
                <span className="font-label-sm text-xs text-on-surface-variant">Conversion Rate</span>
              </div>
              <div>
                <span className="block font-title-md text-2xl text-on-surface font-bold mb-1">-40%</span>
                <span className="font-label-sm text-xs text-on-surface-variant">Infrastructure Cost</span>
              </div>
              <div>
                <span className="block font-title-md text-2xl text-on-surface font-bold mb-1">-60%</span>
                <span className="font-label-sm text-xs text-on-surface-variant">Deployment Time</span>
              </div>
            </div>
            <div className="mt-8">
              <a className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors inline-flex items-center gap-2 font-medium" href="#">View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
