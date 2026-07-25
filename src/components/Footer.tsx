import React from 'react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 pt-16 pb-8">
      <div className="px-margin-page max-w-container-max mx-auto">
        {/* CTA Banner */}
        <div className="bg-primary-container rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="font-headline-lg-mobile text-3xl font-bold text-on-primary mb-2">Ready to transform your business?</h2>
            <p className="font-body-md text-primary-fixed-dim">Let's build something extraordinary together.</p>
          </div>
          <button className="relative z-10 bg-on-primary text-primary px-8 py-4 rounded font-label-sm text-label-sm font-bold hover:bg-surface-bright transition-colors cursor-pointer shrink-0">
            Start a Project
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img alt="NextLeap Logo" className="h-8 object-contain mb-6 filter grayscale opacity-70" src={logo} />
            <p className="font-body-md text-sm text-on-surface-variant mb-6 max-w-xs">Architecting the future of digital business through strategic engineering and design.</p>
            <div className="flex gap-4">
              <a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
              <a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-sm">language</span></a>
              <a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
            </div>
          </div>
          <div>
            <h4 className="font-title-md text-sm font-bold text-on-surface mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Web Development</a></li>
              <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">App Development</a></li>
              <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">UI/UX Design</a></li>
              <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Cloud Architecture</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-title-md text-sm font-bold text-on-surface mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Case Studies</a></li>
              <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-title-md text-sm font-bold text-on-surface mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm shrink-0 mt-0.5">location_on</span>
                <span className="font-body-md text-sm">123 Tech Boulevard,<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm shrink-0">mail</span>
                <span className="font-body-md text-sm">hello@nextleap.dev</span>
              </li>
              <li className="flex gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm shrink-0">call</span>
                <span className="font-body-md text-sm">+1 (555) 123-4567</span>
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
