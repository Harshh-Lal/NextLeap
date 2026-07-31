import React, { useEffect, useRef } from 'react';

const InsightsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.classList.add('visible');
      }, 800);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest border-t border-outline-variant/20 fade-up">
      <div className="px-margin-page max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Insights &amp; News</span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface">The latest from our team.</h2>
          </div>
          <a className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors inline-flex items-center gap-2 font-medium shrink-0" href="#">View all insights <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article 1 */}
          <article className="group cursor-pointer">
            <div className="w-full h-48 bg-surface-container-low rounded-xl mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary-fixed/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsl-gM00Y-1V-391X3hC49_G5X3r_e0s2tZ501oYtQ64X7w4Z_C0J5y9yY1Y-z6w23M0tW12V2z_H11K2z0tH1217gP47_D73k1_wz02W60C2n80t9t6zP61X3" />
            </div>
            <span className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-widest block mb-2">Engineering</span>
            <h3 className="text-[18px] font-bold text-on-surface mb-2 group-hover:text-on-tertiary-container transition-colors" style={{fontFamily: 'var(--font-heading)'}}>The Future of Serverless Architecture</h3>
            <p className="text-body-md text-on-surface-variant">How serverless is evolving and why it matters for scaling startups.</p>
          </article>
          {/* Article 2 */}
          <article className="group cursor-pointer">
            <div className="w-full h-48 bg-surface-container-low rounded-xl mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary-fixed/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQmD_7k5T7Z-2N1h3T_W1t3b7N23Z2843C42W002gN1c7n_H0Y5N5x1_xZ2622_N1x3c_2Q1h1c32_M00h06x9n8hN5t42y2N9G33K3_37h4T239Z182N5z8xN" />
            </div>
            <span className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-widest block mb-2">Design</span>
            <h3 className="text-[18px] font-bold text-on-surface mb-2 group-hover:text-on-tertiary-container transition-colors" style={{fontFamily: 'var(--font-heading)'}}>Creating Accessible Digital Products</h3>
            <p className="text-body-md text-on-surface-variant">A comprehensive guide to ensuring your platform is usable by everyone.</p>
          </article>
          {/* Article 3 */}
          <article className="group cursor-pointer">
            <div className="w-full h-48 bg-surface-container-low rounded-xl mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary-fixed/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh2V5Z3N4x2C2M162G42X931n9z83n6H_H0t_k300hN1w3x2N09K3w140x5X7w70C31t3N3n7_3c6n3T2g51X2N2X99Y_7_97M2x6Z1N1N9C2_G3C4C333_H9w" />
            </div>
            <span className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-widest block mb-2">Strategy</span>
            <h3 className="text-[18px] font-bold text-on-surface mb-2 group-hover:text-on-tertiary-container transition-colors" style={{fontFamily: 'var(--font-heading)'}}>Digital Transformation in 2026</h3>
            <p className="text-body-md text-on-surface-variant">Key trends and strategies for modernizing legacy business models.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
