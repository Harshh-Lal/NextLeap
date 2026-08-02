import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ── Types ──────────────────────────────────────────────────────────
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  color: string;
}

interface ReviewCard {
  quote: string;
  author: string;
  role: string;
  initials: string;
  bg: string;
  textColor: string;
}

// ── Data ───────────────────────────────────────────────────────────
const testimonials: Testimonial[] = [
  {
    quote: "NextLeap took the time to understand our business and brought significant value — helping us envision our product and deliver great customer experiences.",
    author: "Rohan Mehta",
    role: "Head of Product, FinEdge",
    initials: "RM",
    color: "#2563EB",
  },
  {
    quote: "Their speed, creativity, and technical depth set them apart. We went live 3 weeks ahead of schedule. Exceptional team.",
    author: "Priya Sharma",
    role: "Co-Founder, Stackmint",
    initials: "PS",
    color: "#059669",
  },
  {
    quote: "I was always impressed with their engagement level and willingness to be a true partner, not just a vendor.",
    author: "Aditya Khanna",
    role: "CEO, Orbix Labs",
    initials: "AK",
    color: "#7C3AED",
  },
  {
    quote: "They transformed our legacy system into a modern platform. User feedback changed from 'this is complicated' to 'this is easy'.",
    author: "Neha Joshi",
    role: "CTO, ClearData",
    initials: "NJ",
    color: "#D97706",
  },
];

const reviewCards: ReviewCard[] = [
  {
    quote: "The ROI we saw in the first 90 days exceeded every KPI we had set. Highly recommend NextLeap to any growth-stage startup.",
    author: "Karan Batra",
    role: "Founder & CEO, Vaultr",
    initials: "KB",
    bg: "#F0F4FF",
    textColor: "#1E3A8A",
  },
  {
    quote: "Their automation workflows cut our manual ops time by 60%. The team is fast, responsive, and genuinely invested in outcomes.",
    author: "Simran Dhaliwal",
    role: "Operations Lead, PulseHR",
    initials: "SD",
    bg: "#F0FDF4",
    textColor: "#065F46",
  },
  {
    quote: "We've worked with 3 agencies before. NextLeap is the first one that actually delivered what they promised — on time, on budget.",
    author: "Vivek Reddy",
    role: "CTO, Novarift",
    initials: "VR",
    bg: "#FFF7ED",
    textColor: "#92400E",
  },
  {
    quote: "The website they built converted 2.4x better than our old one within the first month. Clean design, fast loading, and SEO-optimised.",
    author: "Ananya Patel",
    role: "Marketing Director, Cruxly",
    initials: "AP",
    bg: "#FDF4FF",
    textColor: "#6B21A8",
  },
  {
    quote: "Fantastic communication throughout the project. They delivered a polished mobile app that our users love using every day.",
    author: "Dev Saini",
    role: "Product Manager, Traqr",
    initials: "DS",
    bg: "#FFF0F0",
    textColor: "#991B1B",
  },
  {
    quote: "From strategy to execution, the team at NextLeap brought clarity to a chaotic product roadmap. Real business partners.",
    author: "Ishaan Kapoor",
    role: "CEO, LoopStack",
    initials: "IK",
    bg: "#F0FAFA",
    textColor: "#134E4A",
  },
];

// ── Star Rating ────────────────────────────────────────────────────
const Stars: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ── Avatar ─────────────────────────────────────────────────────────
const Avatar: React.FC<{ initials: string; color: string; size?: 'sm' | 'md' }> = ({
  initials, color, size = 'sm'
}) => {
  const dim = size === 'sm' ? 'w-9 h-9 text-[13px]' : 'w-11 h-11 text-[14px]';
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center font-bold text-white shrink-0`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
};

// ── Testimonial Slider ─────────────────────────────────────────────
const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const t = testimonials[current];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Quote card */}
      <div
        className="flex-1 flex flex-col justify-center"
        style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'translateY(0)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}
      >
        {/* Big quote mark */}
        <div className="text-[56px] leading-none font-serif text-[#2563EB] opacity-20 mb-2 select-none">"</div>

        <p className="text-[18px] md:text-[20px] font-medium text-[#0F172A] leading-[1.55] mb-8" style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>
          {t.quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar initials={t.initials} color={t.color} size="md" />
          <div>
            <p className="text-[14px] font-bold text-[#0F172A]" style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>{t.author}</p>
            <p className="text-[12px] text-gray-500">{t.role}</p>
          </div>
        </div>
      </div>

      {/* Dots nav */}
      <div className="flex items-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (intervalRef.current) clearInterval(intervalRef.current); goTo(i); }}
            className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
            style={{ width: i === current ? '32px' : '16px', backgroundColor: i === current ? '#2563EB' : '#E2E8F0' }}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ── Contact Form ───────────────────────────────────────────────────
const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '', source: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl text-[14px] text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 border ${
      focused === field
        ? 'border-[#2563EB] shadow-[0_0_0_3px_rgba(37,99,235,0.12)] bg-white'
        : 'border-gray-200 bg-[#F8FAFF] hover:border-gray-300'
    }`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full py-16 gap-5">
        <div className="w-16 h-16 rounded-full bg-[#EFF6FF] flex items-center justify-center">
          <span className="material-symbols-outlined text-[32px] text-[#2563EB]">check_circle</span>
        </div>
        <h3 className="text-[22px] font-bold text-[#0F172A]" style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>
          Message received!
        </h3>
        <p className="text-gray-500 text-[14px] max-w-[280px] leading-relaxed">
          Thanks for reaching out. We'll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name + Company row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-700">Full name</label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            className={inputClass('name')}
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-700">Company</label>
          <input
            type="text"
            placeholder="Your company"
            value={form.company}
            onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
            onFocus={() => setFocused('company')}
            onBlur={() => setFocused(null)}
            className={inputClass('company')}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-gray-700">E-mail</label>
        <input
          required
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
          className={inputClass('email')}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-gray-700">How can we help you?</label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your project, goals, or challenges…"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          className={`${inputClass('message')} resize-none`}
        />
      </div>

      {/* Source */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-gray-700">How did you hear about us?</label>
        <select
          value={form.source}
          onChange={e => setForm(f => ({ ...f, source: e.target.value }))}
          onFocus={() => setFocused('source')}
          onBlur={() => setFocused(null)}
          className={`${inputClass('source')} cursor-pointer appearance-none`}
        >
          <option value="" disabled>Select an option</option>
          <option>Google Search</option>
          <option>LinkedIn</option>
          <option>Referral</option>
          <option>Instagram / Facebook</option>
          <option>YouTube</option>
          <option>Blog / Content</option>
          <option>Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-1 w-full py-3.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1d4ed8] text-white text-[15px] font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
        style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
      >
        Send Message
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>

      <p className="text-[11px] text-gray-400 text-center leading-relaxed">
        By submitting, you agree to our{' '}
        <a href="#" className="underline hover:text-gray-600 transition-colors">Privacy Policy</a>.
        We'll never spam you.
      </p>
    </form>
  );
};

// ── Single Review Card ────────────────────────────────────────────
const ReviewCardItem: React.FC<{ card: ReviewCard }> = ({ card }) => (
  <div className="flex flex-col justify-between p-6 rounded-2xl border border-gray-100 bg-white h-full shadow-sm">
    <div>
      <Stars />
      <p className="mt-4 text-[13.5px] text-gray-700 leading-relaxed">“{card.quote}”</p>
    </div>
    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-white shrink-0"
        style={{ backgroundColor: card.textColor }}
      >
        {card.initials}
      </div>
      <div>
        <p className="text-[13px] font-bold text-gray-900">{card.author}</p>
        <p className="text-[11px] text-gray-400">{card.role}</p>
      </div>
    </div>
  </div>
);

// ── Review Slider ─────────────────────────────────────────────────
const ReviewSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = reviewCards.length;

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 3500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handlePrev = () => { setCurrent(c => (c - 1 + total) % total); resetInterval(); };
  const handleNext = () => { setCurrent(c => (c + 1) % total); resetInterval(); };
  const handleDot  = (i: number) => { setCurrent(i); resetInterval(); };

  // How many cards visible: 3 on lg, 2 on sm, 1 on xs
  // We replicate logic via CSS container queries or plain math:
  // Use windowWidth to determine visible — but pure CSS approach:
  // We set the track width = total cards, each card = 33.333% of viewport
  // So shifting by `current * (100/total)%` of track moves one card

  return (
    <div className="relative">
      {/* Viewport */}
      <div className="overflow-hidden">
        {/* Track */}
        <div
          className="flex"
          style={{
            transform: `translateX(calc(-${current} * (100% / 3)))`,
            transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
            // Track is total/3 of visible width wide
            width: `${(total / 3) * 100}%`,
          }}
        >
          {reviewCards.map((card, i) => (
            <div
              key={i}
              className="px-2.5"
              style={{ width: `${100 / total}%` }}
            >
              <ReviewCardItem card={card} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-6">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {reviewCards.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Review ${i + 1}`}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === current ? '28px' : '8px',
                height: '8px',
                backgroundColor: i === current ? '#2563EB' : '#CBD5E1',
              }}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:border-[#2563EB] hover:text-[#2563EB] text-gray-500 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Previous review"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:border-[#2563EB] hover:text-[#2563EB] text-gray-500 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Next review"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main Page ──────────────────────────────────────────────────────
const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (heroRef.current) setTimeout(() => heroRef.current?.classList.add('visible'), 80);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* ── Hero + Form ──────────────────────────────────────── */}
        <div
          ref={heroRef}
          className="fade-up px-5 sm:px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto pt-12 pb-16 md:pt-16 md:pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — Heading + Testimonial */}
            <div className="flex flex-col h-full">
              {/* Label */}
              <span
                className="block text-[12px] font-bold uppercase tracking-[0.16em] mb-5 text-[#2563EB]"
                style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
              >
                Get In Touch
              </span>

              {/* Heading */}
              <h1
                className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0F172A] mb-4"
                style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
              >
                Let's build something
                <br />
                <span
                  className="italic text-[#2563EB]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: '1.22em', lineHeight: 1 }}
                >
                  extraordinary
                </span>{' '}
                together.
              </h1>

              <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-[400px]">
                Whether you have a full brief or just an idea — we'd love to hear it. Tell us about your project and we'll get back to you within 24 hours.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  { icon: 'schedule', text: '24h response time' },
                  { icon: 'verified', text: '50+ projects delivered' },
                  { icon: 'handshake', text: 'No lock-in contracts' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-[13px] text-gray-600">
                    <span className="material-symbols-outlined text-[16px] text-[#2563EB]">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-8" />

              {/* Testimonial Slider */}
              <div className="flex-1 min-h-[200px]">
                <TestimonialSlider />
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-[#F8FAFF] rounded-2xl border border-gray-100 p-7 sm:p-8">
              <h2
                className="text-[20px] font-bold text-[#0F172A] mb-1"
                style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
              >
                Start a project
              </h2>
              <p className="text-[13px] text-gray-500 mb-6">Fill in the details and we'll reach out shortly.</p>
              <ContactForm />
            </div>

          </div>
        </div>

        {/* ── Reviews Section ──────────────────────────────────── */}
        <div className="bg-[#F8FAFF] border-t border-gray-100 px-5 sm:px-8 md:px-12 lg:px-16 py-14 md:py-20">
          <div className="max-w-[1280px] mx-auto">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span
                  className="block text-[12px] font-bold uppercase tracking-[0.16em] text-[#2563EB] mb-3"
                  style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
                >
                  Client Reviews
                </span>
                <h2
                  className="text-[28px] sm:text-[34px] font-bold text-[#0F172A] tracking-[-0.025em] leading-tight"
                  style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
                >
                  What our clients say
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-[13px] font-semibold text-gray-700">4.9 average rating</span>
                <span className="text-gray-300 mx-1">·</span>
                <span className="text-[13px] text-gray-500">50+ reviews</span>
              </div>
            </div>

            {/* Review cards slider */}
            <ReviewSlider />
          </div>
        </div>

        {/* ── Contact Details Strip ─────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto py-10 md:py-12">
          <div className="flex flex-wrap gap-8 md:gap-16 items-center justify-center border border-gray-100 rounded-2xl px-8 py-6">
            {[
              { icon: 'location_on', label: 'Location', value: 'Mumbai, Maharashtra, India' },
              { icon: 'mail', label: 'Email', value: 'hello@nexleap.dev' },
              { icon: 'phone', label: 'Phone', value: '+91 00000 00000' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-[#2563EB]">{icon}</span>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider">{label}</p>
                  <p className="text-[13px] font-semibold text-gray-800">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
