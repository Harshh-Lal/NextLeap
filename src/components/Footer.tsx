import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 pt-16 pb-8">
      <div className="px-6 md:px-margin-page max-w-container-max mx-auto">
        {/* CTA Banner */}
        {!isServicesPage && (
          <div className="bg-primary-container rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-headline-lg-mobile text-on-primary mb-2">Ready to transform your business?</h2>
              <p className="text-body-md text-primary-fixed-dim">Let's build something extraordinary together.</p>
            </div>
            <Link to="/contact" className="relative z-10 shrink-0">
              <button className="bg-on-primary text-primary px-8 py-4 rounded text-[16px] font-semibold hover:bg-surface-bright transition-colors cursor-pointer">
                Get in Touch
              </button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/">
              <img alt="NextLeap Logo" className="h-8 object-contain mb-6" src="/images/nextleap_logo.png" />
            </Link>
            <p className="font-body-md text-sm text-on-surface-variant mb-6 max-w-xs">Architecting the future of digital business through strategic engineering and design.</p>
            <div className="flex gap-4">
              <a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="mailto:nextleap.itservice@gmail.com" aria-label="Email">
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
              <a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="#" aria-label="LinkedIn">
                <span className="material-symbols-outlined text-sm">language</span>
              </a>
              <a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="#" aria-label="Social media">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-title-md text-sm font-bold text-on-surface mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/services#web-development">Web Development</Link></li>
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/services#app-development">App Development</Link></li>
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/services#seo-geo-aeo">SEO / GEO / AEO</Link></li>
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/services#ads">Meta / FB Ads</Link></li>
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/services#automation">Automation</Link></li>
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/services#data">Data & Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-title-md text-sm font-bold text-on-surface mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link></li>
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/services">Services</Link></li>
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/packages">Packages</Link></li>
              <li><Link className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" to="/content">Blog / Content</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-title-md text-sm font-bold text-on-surface mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm shrink-0">mail</span>
                <a href="mailto:nextleap.itservice@gmail.com" className="font-body-md text-sm hover:text-primary transition-colors">nextleap.itservice@gmail.com</a>
              </li>
              <li className="flex gap-3 text-on-surface-variant items-start">
                <span className="material-symbols-outlined text-sm shrink-0 mt-0.5">call</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919654801167" className="font-body-md text-sm hover:text-primary transition-colors">+91 96548 01167</a>
                  <a href="tel:+917982635709" className="font-body-md text-sm hover:text-primary transition-colors">+91 79826 35709</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/20 gap-4">
          <p className="font-body-md text-xs text-on-surface-variant">© 2026 NextLeap IT Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="font-body-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-body-md text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
