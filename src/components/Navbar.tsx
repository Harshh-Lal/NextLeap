import React from 'react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
      <div className="flex justify-between items-center h-20 px-margin-page max-w-container-max mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img alt="NextLeap Logo" className="h-10 object-contain" src={logo} />
        </div>
        
        {/* Links (Hidden on mobile) */}
        <div className="hidden md:flex gap-gutter items-center font-label-sm text-label-sm">
          <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95" href="#">Services</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95" href="#">Solutions</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95" href="#">Work</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95" href="#">Insights</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95" href="#">About</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:scale-95" href="#">Contact</a>
        </div>
        
        {/* CTA */}
        <div className="hidden md:block">
          <button className="gradient-btn px-6 py-2.5 rounded font-label-sm text-label-sm font-medium hover:bg-surface-container-low transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-2">
            Book a Consultation <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <span className="material-symbols-outlined text-on-surface cursor-pointer text-2xl">menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
