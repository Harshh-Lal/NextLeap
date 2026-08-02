import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// @ts-ignore
import SpecularButton from '../components/SpecularButton';

interface Package {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  bestFor: string;
  features: string[];
  services: string[];
  highlight?: boolean;
}

const packages: Package[] = [
  {
    id: 'starter',
    icon: 'rocket_launch',
    name: 'Starter',
    tagline: 'Kickstart your digital journey',
    bestFor: 'Startups & Small Businesses',
    features: [
      'Essential services to build your presence',
      'Focus on quick setup & early growth',
      'Flexible scope for core needs',
      'Reliable support to get you started',
    ],
    services: ['Web Development', 'Basic IT Training', 'SEO, GEO, AEO'],
  },
  {
    id: 'growth',
    icon: 'trending_up',
    name: 'Growth',
    tagline: 'Accelerate your business growth',
    bestFor: 'Growing Businesses',
    features: [
      'Advanced tools to generate leads',
      'Data-driven strategies for consistent growth',
      'Optimize, scale & expand your reach',
      'Priority support for faster results',
    ],
    services: ['Web Development', 'App Development', 'Ads (Meta, Facebook)', 'SEO, GEO, AEO'],
    highlight: true,
  },
  {
    id: 'scale',
    icon: 'expand',
    name: 'Scale',
    tagline: 'Scale with confidence',
    bestFor: 'Established Businesses',
    features: [
      'Comprehensive solutions across channels',
      'Process automation & performance optimization',
      'Maximize efficiency & ROI',
      'Dedicated support for scaling operations',
    ],
    services: ['Web Development', 'App Development', 'Ads (Meta, Facebook)', 'Automation', 'Data & Analytics', 'SEO, GEO, AEO'],
  },
  {
    id: 'enterprise',
    icon: 'corporate_fare',
    name: 'Enterprise',
    tagline: 'Built for large organizations',
    bestFor: 'Large Organizations',
    features: [
      'Custom solutions for complex needs',
      'Dedicated account management',
      'Advanced integrations & automation',
      'Strategic roadmap for long-term growth',
    ],
    services: ['All 9 Services — fully customized'],
  },
];

const allServices = [
  { icon: 'desktop_windows', label: 'Web\nDevelopment' },
  { icon: 'smartphone', label: 'App\nDevelopment' },
  { icon: 'campaign', label: 'Ads (Meta,\nFacebook)' },
  { icon: 'business_center', label: 'Business\nConsulting' },
  { icon: 'bar_chart', label: 'Data &\nAnalytics' },
  { icon: 'school', label: 'Basic IT\nTraining' },
  { icon: 'settings_suggest', label: 'Automation' },
  { icon: 'videocam', label: 'Video\nEditing' },
  { icon: 'manage_search', label: 'SEO, GEO,\nAEO' },
];

const faqs = [
  {
    q: 'Do you display pricing on the website?',
    a: "No — we intentionally don't publish prices because every project scope is unique. After a brief conversation, we'll tailor a quote that matches your actual needs and budget.",
  },
  {
    q: 'Can I customize a package?',
    a: "Absolutely. Our packages are starting points, not rigid boundaries. We can add, remove, or adjust any service to suit your business goals.",
  },
  {
    q: "What if I need a service that's not listed?",
    a: "Get in touch and let us know. We're always expanding our capabilities, and if it aligns with our expertise, we'll find a way to help.",
  },
  {
    q: 'How long does it take to get started?',
    a: 'Once we align on scope and goals, most projects kick off within 5–10 business days. Timelines depend on project complexity and your team availability.',
  },
  {
    q: 'Can I upgrade or downgrade my package later?',
    a: "Yes. As your business evolves, so can your package. We'll work with you to reassess scope and services at any time.",
  },
  {
    q: 'How do I get started?',
    a: "Simply click 'Let's Discuss' on any package and fill in a short form. We'll reach out within one business day to schedule a discovery call.",
  },
];

const FAQItem: React.FC<{ faq: { q: string; a: string }; index: number }> = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      key={index}
      className={`border-b border-gray-100 transition-all duration-200 ${open ? 'pb-4' : ''}`}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-[15px] font-medium text-gray-800 group-hover:text-[#0a7aad] transition-colors pr-4 ${open ? 'text-[#0a7aad]' : ''}`}>
          {faq.q}
        </span>
        <span
          className={`shrink-0 material-symbols-outlined text-[22px] transition-all duration-300 ${open ? 'rotate-45 text-[#0a7aad]' : 'text-gray-300'}`}
        >add</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[14px] text-gray-500 leading-relaxed pb-2 pr-8">{faq.a}</p>
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [heroRef.current, cardsRef.current, faqRef.current];
    els.forEach((el, i) => {
      if (el) {
        setTimeout(() => el.classList.add('visible'), 100 + i * 150);
      }
    });
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <div ref={heroRef} className="relative text-center pt-16 pb-20 px-6 overflow-hidden fade-up">
          {/* Fading grid bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(10,122,173,0.14) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(10,122,173,0.14) 1px, transparent 1px)
              `,
              backgroundSize: '44px 44px',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
            }}
          />
          {/* Subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0a7aad] opacity-[0.04] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#0a7aad] uppercase tracking-[0.18em] mb-6">
              <span className="w-4 h-px bg-[#0a7aad]" />
              Packages
              <span className="w-4 h-px bg-[#0a7aad]" />
            </span>
            <h1 className="text-[36px] md:text-[52px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-5">
              Flexible packages<br />
              built around{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #006a61 0%, #0a7aad 60%, #003ea8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                your goals.
              </span>
            </h1>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-md mx-auto">
              Choose the right scope of work for your business.<br className="hidden md:block" />
              Every package is designed to deliver real impact — without the guesswork.
            </p>
          </div>
        </div>

        {/* ── Package Cards ──────────────────────────────────────── */}
        <div ref={cardsRef} className="px-6 md:px-margin-page max-w-container-max mx-auto pb-20 fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <SpecularButton
                as="div"
                key={pkg.id}
                className={`relative flex flex-col p-7 transition-shadow duration-300 hover:shadow-lg ${
                  pkg.highlight ? 'bg-[#f0f8ff]' : 'bg-white'
                }`}
                size="lg"
                radius={16}
                tint="#ffffff"
                tintOpacity={0.02}
                blur={0}
                textColor="#333333"
                lineColor={pkg.highlight ? "#0a7aad" : "#ffffff"}
                baseColor={pkg.highlight ? "#053951" : "#525252"}
                intensity={pkg.highlight ? 1.25 : 1}
                shineSize={pkg.highlight ? 23 : 15}
                shineFade={40}
                thickness={1}
                speed={0.6}
                followMouse
                proximity={250}
                autoAnimate
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a7aad] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pkg.highlight ? 'bg-[#0a7aad]/10' : 'bg-gray-50'}`}>
                  <span className={`material-symbols-outlined text-2xl ${pkg.highlight ? 'text-[#0a7aad]' : 'text-gray-400'}`}>
                    {pkg.icon}
                  </span>
                </div>

                {/* Header */}
                <h2 className="text-[20px] font-bold text-gray-900 mb-1">{pkg.name}</h2>
                <p className="text-[13px] text-gray-400 mb-5 leading-snug">{pkg.tagline}</p>

                {/* Best for */}
                <div className="mb-5">
                  <p className="text-[10px] font-bold text-[#0a7aad] uppercase tracking-widest mb-1.5">Best for</p>
                  <p className="text-[13px] font-semibold text-gray-700">{pkg.bestFor}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[14px] text-[#0a7aad] shrink-0 mt-0.5">check</span>
                      <span className="text-[13px] text-gray-600 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-gray-100 mb-5" />

                {/* CTA */}
                {/* CTA */}
                <Link to={`/contact?package=${pkg.id}`} className="block w-full mt-auto">
                  <button
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                      pkg.highlight
                        ? 'bg-[#0a7aad] text-white hover:bg-[#006a8e]'
                        : 'border border-[#0a7aad]/40 text-[#0a7aad] hover:bg-[#f0f8ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">chat_bubble_outline</span>
                    Let's Discuss
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </button>
                </Link>
              </SpecularButton>
            ))}
          </div>

          {/* All packages include */}
          <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50/60 px-8 py-8">
            <p className="text-center text-[13px] font-semibold text-gray-500 mb-7 tracking-wide uppercase text-[10px]">
              All packages include access to our core services
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
              {allServices.map((s, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-2 min-w-[64px]">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[18px] text-[#0a7aad]">{s.icon}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 text-center leading-tight whitespace-pre-line">{s.label}</span>
                  </div>
                  {i < allServices.length - 1 && (
                    <span className="hidden md:block text-gray-200 text-lg select-none">—</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <div ref={faqRef} className="relative px-6 md:px-margin-page max-w-container-max mx-auto pb-24 fade-up">
          {/* Subtle grid bg for FAQ */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(10,122,173,0.09) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(10,122,173,0.09) 1px, transparent 1px)
              `,
              backgroundSize: '44px 44px',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[10px] font-bold text-[#0a7aad] uppercase tracking-[0.18em]">Frequently Asked Questions</span>
              <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 mt-2 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="divide-y divide-gray-100 border-t border-gray-100">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Packages;
