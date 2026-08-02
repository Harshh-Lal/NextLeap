import React, { useEffect, useRef } from 'react';
import TextType from './TextType';
// @ts-ignore
import Antigravity from './Antigravity';
import heroImage from '../assets/hero_section.png';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger fade-up animation on mount for the hero
    if (heroRef.current) {
      setTimeout(() => {
        heroRef.current?.classList.add('visible');
      }, 100);
    }
  }, []);

  return (
    <section ref={heroRef} className="py-16 lg:py-20 flex flex-col justify-center relative overflow-hidden fade-up" style={{ backgroundColor: '#fdfffe' }}>
      <div className="absolute inset-0 -z-10 opacity-30">
        <Antigravity
          count={400}
          magnetRadius={5}
          ringRadius={8}
          waveSpeed={0.6}
          waveAmplitude={1.2}
          particleSize={1.6}
          lerpSpeed={0.05}
          color="#1E78D7"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1.2}
          pulseSpeed={3}
          particleShape="box"
          fieldStrength={10.9}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter w-full max-w-container-max mx-auto px-6 md:px-margin-page relative z-10 pointer-events-none">
        <div className="flex flex-col justify-center max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
            <span className="font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container-low px-3 py-1 rounded-full">
              IT Solutions That Drive Growth
            </span>
          </div>
          <h1
            className="text-display-xl-mobile md:text-display-xl-tablet lg:text-display-xl text-on-surface mb-stack-lg leading-[0.95]"
            style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 500 }}
          >
            We build
            <br />
            <span
              className="inline-block my-1"
              style={{
                fontFamily: 'var(--font-telma)',
                fontWeight: 500,
                color: '#1a3aad',
              }}
            >
              <TextType
                text={[
                  "Websites",
                  "Mobile Apps",
                  "Automations",
                  "Ad Campaigns",
                  "SEO Strategies",
                  "Data Solutions",
                  "IT Training",
                  "Video Content",
                  "Business Systems",
                ]}
                typingSpeed={70}
                deletingSpeed={35}
                pauseDuration={1800}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="opacity-60"
                loop={true}
              />
            </span>
            <br />
            that grow your business.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
            NextLeap IT Solutions partners with visionary businesses to design, build and scale high-performance digital products and systems that drive measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
            <button className="pointer-events-auto gradient-btn px-8 py-4 rounded text-[16px] font-semibold flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5 w-full sm:w-auto justify-center">
              Book a Consultation <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button className="pointer-events-auto bg-surface-container-lowest border border-outline-variant/50 text-on-surface px-8 py-4 rounded text-[16px] font-semibold hover:bg-surface-container-low transition-colors cursor-pointer w-full sm:w-auto justify-center">
              Explore Services
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img alt="User" className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT6ZlQjraG47TNsYx0SlOD48wqHwCzodpRzTGie-kx_34qtIXbOWF16IYe7kwATtY-A5xzp1KYzXsnD6sQBkk5BmABJ287p8hrB6A43J1F7o6aXJfsx0ey3hNTzxdSTRfzMqSRoDWElqgqpirAyYxzPnJkiN9eXG1TidTNdhp5WP7rHROV5psWxII93Xzpc94Aq3c9W8-22eMFk3ZCzxkNht-5wviIZl58LDvye0-Z45x_aKvMr0jw9eGDL2D178b06uDwHmd_BYE" />
              <img alt="User" className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2sUZ-P7bZCR1lT_rnx12PsFpnPOk8XYhLAuSaoPsOIe4wHdKKOW4Lvpev5Um5UrsCUfM9vPKI0lVEa46GebTXgpwvYi84I39QChjnKCbGlzI50hCSebIIjyIM3OyXh-I1DWRMZSX06LOjuzdpMGGrDXLp6TjE6zhcdGzC6urzlO6SBErbo3svE-PidfYvcJTH-kWCyyVVgK5I4qpTIgOjSg3fOapMGPKYkuXAZr4YywLy0JfNyfzFfOYGwIsWutBaxmv77cHhqDs" />
              <img alt="User" className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1p3uS9jPJoJSFieJKOvaKTT5wpJ6HUvEIDcNjlb3pJT9gGl8aQyDKPL5ZJasXQlt2QPHqleKxrHGLDp003vIak9UVreXwJnUEoIZqcun9f-iX6II5pkYuq4p1UFk2neSJ0x4ORoNxhHo0aMdAyG6SEFkGW1pDiPRoNPpkqu27FuvE3wp-J8sOkLS8EM6fbfCP87fm5TvRtJfm4eqiL788LOgf6YKCBNxQLI_cIUqYL91hyefetwGYxmpn7R-ZBZ26pCaMyEfwS24" />
              <img alt="User" className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX4oaA8ueBe1C9XrxDe_Q1M-7xgMU29WaCtv14TD5VHXFOL7MvhgyBcg4VwcUXqLzgESSJ6mHfpB4D2HTql0kVzZe1C5oRtgyA5d1MOXRShNOe9baj-vYNKloG3x1lkemFpmBkvLR5Seqq2zgulLXZvPWYdDW_TQyMkycVokmYZJGhR0-NjK0JiTE_I7UFg0VCXyTCW5SasGBnHPDjDdIGft2pGbgWKbUe3sq9kQNhjIaQ6dgTvoOC_v8y5tkJYL60fvVHhtcyxlE" />
            </div>
            <p className="font-body-md text-sm text-on-surface-variant">Trusted by startups and<br />businesses worldwide</p>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative w-full hidden lg:flex items-center justify-center">
          <img alt="NextLeap Dashboard Overview" className="w-[110%] max-w-none h-auto object-cover scale-110 origin-left" src={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
