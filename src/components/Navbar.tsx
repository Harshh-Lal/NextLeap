import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Content', to: '/content' },
  { label: 'Contact', to: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-lg border-b border-outline-variant/20 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex justify-between items-center h-20 px-6 md:px-margin-page max-w-container-max mx-auto">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img className="h-8 md:h-10 w-auto object-contain" src="/images/nextleap_logo.png" alt="NextLeap Logo" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors cursor-pointer active:scale-95 text-[16px] font-medium ${
                  location.pathname === link.to
                    ? 'text-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="gradient-btn px-6 py-2.5 rounded text-[16px] font-semibold transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-2 hover:opacity-90">
                Get in touch
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="text-on-surface cursor-pointer p-1"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-surface shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-outline-variant/20">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img alt="NextLeap Logo" className="h-8 object-contain" src={logo} />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Close navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <div className="flex flex-col gap-1 p-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg text-[16px] font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-surface-container text-on-surface'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-outline-variant/20">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <button className="gradient-btn w-full px-6 py-3 rounded text-[16px] font-semibold flex items-center justify-center gap-2">
                Get in touch
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
