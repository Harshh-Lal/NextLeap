import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ── Types ─────────────────────────────────────────────────────────
type Category = 'All' | 'Web & App' | 'Marketing' | 'Business' | 'Automation' | 'SEO' | 'Data & Analytics';

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, 'All'>;
  date: string;
  readTime: string;
  image: string; // path to /images/blogX.png
}

// ── Static Posts Data ─────────────────────────────────────────────
const posts: Post[] = [
  {
    id: '1',
    slug: 'why-your-business-needs-a-fast-website',
    title: 'Why Your Business Needs a Fast Website in 2025',
    excerpt: "Page speed is no longer a luxury — it's a conversion booster. Here's why every millisecond of load time can drive impact.",
    category: 'Web & App',
    date: 'May 20, 2025',
    readTime: '6 min read',
    image: '/images/blog_1.png',
  },
  {
    id: '2',
    slug: 'seo-vs-geo-vs-aeo',
    title: "SEO vs GEO vs AEO: What's the Difference and Why It Matters",
    excerpt: 'Search is evolving. Learn how SEO, GEO, and AEO work together to future-proof your brand visibility across search engines and AI platforms.',
    category: 'SEO',
    date: 'May 12, 2025',
    readTime: '8 min read',
    image: '/images/blog_2.png',
  },
  {
    id: '3',
    slug: 'automate-business-processes',
    title: 'How to Automate the Business Processes That Drain Your Team',
    excerpt: 'Identify repetitive tasks, streamline workflows, and reclaim valuable time using smart automation.',
    category: 'Automation',
    date: 'May 05, 2025',
    readTime: '7 min read',
    image: '/images/blog_3.png',
  },
  {
    id: '4',
    slug: 'meta-ads-strategy',
    title: 'A Meta Ads Strategy That Actually Converts',
    excerpt: 'Most ad campaigns focus on budget over performance. We break down a results-driven Meta Ads strategy that delivers real ROI.',
    category: 'Marketing',
    date: 'Apr 28, 2025',
    readTime: '6 min read',
    image: '/images/blog_4.png',
  },
  {
    id: '5',
    slug: 'data-analytics-small-business',
    title: "Data Analytics Doesn't Have to Be Complex for Small Businesses",
    excerpt: "Turn data into decisions. Here's how small businesses can leverage analytics to grow smarter without a technical team.",
    category: 'Data & Analytics',
    date: 'Apr 21, 2025',
    readTime: '9 min read',
    image: '/images/blog_5.png',
  },
  {
    id: '6',
    slug: 'it-training-highest-roi',
    title: 'Why IT Training Is the Highest-ROI Investment for Your Team',
    excerpt: "Upskill your team, improve efficiency, and stay competitive. Here's how IT training delivers measurable business impact.",
    category: 'Business',
    date: 'Apr 14, 2025',
    readTime: '5 min read',
    image: '/images/blog_6.png',
  },
];

const categories: Category[] = ['All', 'Web & App', 'Marketing', 'Business', 'Automation', 'SEO', 'Data & Analytics'];

// ── Category badge color map ───────────────────────────────────────
const categoryColors: Record<Exclude<Category, 'All'>, { bg: string; text: string }> = {
  'Web & App':      { bg: '#EFF6FF', text: '#2563EB' },
  'Marketing':      { bg: '#F5F3FF', text: '#7C3AED' },
  'SEO':            { bg: '#F0FDF4', text: '#16A34A' },
  'Automation':     { bg: '#FFFBEB', text: '#D97706' },
  'Business':       { bg: '#FFF7ED', text: '#EA580C' },
  'Data & Analytics': { bg: '#FFF0F0', text: '#DC2626' },
};

// ── Category Pill ─────────────────────────────────────────────────
const CategoryPill: React.FC<{ category: Exclude<Category, 'All'> }> = ({ category }) => {
  const colors = categoryColors[category];
  return (
    <span
      className="inline-block text-[11px] font-semibold px-2.5 py-[3px] rounded-full leading-none"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {category}
    </span>
  );
};

// ── Post Card ─────────────────────────────────────────────────────
const PostCard: React.FC<{ post: Post; delay?: number }> = ({ post, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="fade-up group flex flex-col border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-shadow duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Text Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Date · Read time */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-[11px] text-gray-400 font-medium">{post.date}</span>
          <span className="text-gray-300 text-[10px]">•</span>
          <span className="text-[11px] text-gray-400">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3
          className="text-[15px] font-bold text-gray-900 leading-[1.35] mb-2 group-hover:text-[#2563EB] transition-colors duration-200"
          style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[12.5px] text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>

        {/* Footer: pill + arrow */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <CategoryPill category={post.category} />
          <span className="material-symbols-outlined text-[18px] text-gray-300 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all duration-200">
            arrow_forward
          </span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="w-full h-[160px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
    </div>
  );
};

// ── Main Page ─────────────────────────────────────────────────────
const Content: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      setTimeout(() => heroRef.current?.classList.add('visible'), 80);
    }
  }, []);

  const filteredPosts = posts.filter(
    p => activeCategory === 'All' || p.category === activeCategory
  );
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden w-full" style={{ backgroundColor: '#fdfffe' }}>
          <div className="absolute inset-0 bg-grid opacity-80 pointer-events-none"></div>
          <div
            ref={heroRef}
            className="fade-up px-5 sm:px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto pt-12 pb-8 md:pt-14 md:pb-10 relative z-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-0">
            {/* Left — Text */}
            <div className="flex-1 max-w-[480px]">
              {/* Label */}
              <span
                className="block text-[13px] font-bold uppercase tracking-[0.16em] mb-5"
                style={{ color: '#2563EB', fontFamily: "'Satoshi', system-ui, sans-serif" }}
              >
                Content
              </span>

              {/* Heading */}
              <h1
                className="text-[42px] sm:text-[54px] lg:text-[68px] font-bold leading-[1] tracking-[-0.04em] text-[#0F172A] mb-5"
                style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
              >
                Ideas, Insights<br />
                &{' '}
                <span
                  className="italic text-[#2563EB]"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Perspectives.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-[360px]">
                Fresh thinking on digital strategy, technology, and growth
                to help your business move forward.
              </p>
            </div>

            {/* Right — Hero Image */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <img
                src="/images/content_hero.png"
                alt="Content illustration"
                className="w-full max-w-[480px] xl:max-w-[540px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
        </section>

        {/* ── Category Filters ──────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto mb-7">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                className={`px-4 py-[6px] rounded-full text-[13px] font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#2563EB] text-white border-[#2563EB]'
                    : 'text-gray-500 border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB] bg-white'
                }`}
                style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Divider ───────────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto mb-7">
          <div className="h-px bg-gray-100" />
        </div>

        {/* ── Post Grid ─────────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 max-w-[1280px] mx-auto mb-14">
          {visiblePosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visiblePosts.map((post, i) => (
                <Link key={post.id} to={`/content/${post.slug}`} className="block">
                  <PostCard post={post} delay={i * 60} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <span className="material-symbols-outlined text-[40px] mb-3 block">article</span>
              <p className="text-[15px]">No posts yet in this category. Check back soon!</p>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount(v => v + 3)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-[13px] font-medium text-gray-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200 bg-white"
                style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
              >
                Load More
                <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
              </button>
            </div>
          )}
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Content;
