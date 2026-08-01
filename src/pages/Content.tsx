import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ── Types ────────────────────────────────────────────────────────
type Category = 'All' | 'Web & App' | 'Marketing' | 'Business' | 'Automation' | 'SEO';

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, 'All'>;
  date: string;
  readTime: string;
  author: string;
  image: string; // placeholder color
  featured?: boolean;
}

// ── Static Posts Data ────────────────────────────────────────────
const posts: Post[] = [
  {
    id: '1',
    slug: 'why-your-business-needs-a-fast-website',
    title: 'Why Your Business Needs a Fast Website in 2025',
    excerpt: 'Page speed is no longer a luxury — it\'s a conversion factor. Here\'s why every millisecond of load time directly impacts your bottom line.',
    category: 'Web & App',
    date: 'Jul 28, 2026',
    readTime: '4 min read',
    author: 'NextLeap Team',
    image: '#e8f0fe',
    featured: true,
  },
  {
    id: '2',
    slug: 'meta-ads-strategy-that-actually-converts',
    title: 'A Meta Ads Strategy That Actually Converts',
    excerpt: 'Most ad campaigns burn budget on impressions. We break down the audience-first approach that drives real qualified leads for B2B service businesses.',
    category: 'Marketing',
    date: 'Jul 22, 2026',
    readTime: '6 min read',
    author: 'NextLeap Team',
    image: '#f3e8ff',
  },
  {
    id: '3',
    slug: 'seo-vs-geo-vs-aeo-whats-the-difference',
    title: 'SEO vs GEO vs AEO: What\'s the Difference and Why It Matters',
    excerpt: 'Search is evolving faster than most businesses can keep up. Here\'s a plain-English breakdown of three disciplines that shape how you get found online.',
    category: 'SEO',
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    author: 'NextLeap Team',
    image: '#e8fdf5',
  },
  {
    id: '4',
    slug: 'automate-your-business-processes',
    title: 'How to Automate the Business Processes That Drain Your Team',
    excerpt: 'From client onboarding to invoice follow-ups — smart automation doesn\'t replace your team, it multiplies their output.',
    category: 'Automation',
    date: 'Jul 9, 2026',
    readTime: '7 min read',
    author: 'NextLeap Team',
    image: '#fff8e8',
  },
  {
    id: '5',
    slug: 'mobile-app-vs-web-app',
    title: 'Mobile App or Web App? How to Choose for Your Business',
    excerpt: 'Both have their place — but choosing wrong costs time and money. We walk through the key decision factors for early-stage and growing businesses.',
    category: 'Web & App',
    date: 'Jul 2, 2026',
    readTime: '5 min read',
    author: 'NextLeap Team',
    image: '#e8f4ff',
  },
  {
    id: '6',
    slug: 'data-analytics-for-small-business',
    title: 'Data Analytics Doesn\'t Have to Be Complex for Small Businesses',
    excerpt: 'You don\'t need a data science team to make smarter decisions. Here are the five metrics every growing business should be tracking.',
    category: 'Business',
    date: 'Jun 25, 2026',
    readTime: '4 min read',
    author: 'NextLeap Team',
    image: '#fdf0f0',
  },
  {
    id: '7',
    slug: 'why-it-training-matters',
    title: 'Why IT Training Is the Highest-ROI Investment for Your Team',
    excerpt: 'A one-time training investment consistently outperforms repeated firefighting costs. The case for upskilling your workforce before problems arise.',
    category: 'Business',
    date: 'Jun 18, 2026',
    readTime: '3 min read',
    author: 'NextLeap Team',
    image: '#e8fce8',
  },
];

const categories: Category[] = ['All', 'Web & App', 'Marketing', 'Business', 'Automation', 'SEO'];

// ── Category badge color map ──────────────────────────────────────
const categoryColors: Record<Exclude<Category, 'All'>, { bg: string; text: string }> = {
  'Web & App': { bg: '#e8f0fe', text: '#2563eb' },
  'Marketing': { bg: '#f3e8ff', text: '#7c3aed' },
  'SEO': { bg: '#e8fdf5', text: '#059669' },
  'Automation': { bg: '#fff8e8', text: '#d97706' },
  'Business': { bg: '#fde8e8', text: '#dc2626' },
};

// ── Sub-Components ────────────────────────────────────────────────
const CategoryPill: React.FC<{ category: Exclude<Category, 'All'> }> = ({ category }) => {
  const colors = categoryColors[category];
  return (
    <span
      className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {category}
    </span>
  );
};

const PostCard: React.FC<{ post: Post; delay?: number }> = ({ post, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="fade-up group flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Text Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] text-gray-400 font-medium">{post.date}</span>
          <span className="text-gray-200">·</span>
          <span className="text-[11px] text-gray-400">{post.readTime}</span>
        </div>
        <h3 className="text-[17px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#0a7aad] transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <CategoryPill category={post.category} />
          <span className="material-symbols-outlined text-[18px] text-gray-300 group-hover:text-[#0a7aad] group-hover:translate-x-1 transition-all duration-200">
            arrow_forward
          </span>
        </div>
      </div>
      {/* Cover Image */}
      <Link to={`/content/${post.slug}`} className="block">
        <div
          className="h-44 w-full overflow-hidden transition-transform duration-500"
          style={{ backgroundColor: post.image }}
        >
          <div className="h-full w-full flex items-center justify-center opacity-20">
            <div className="w-24 h-24 rounded-full" style={{ backgroundColor: post.image.replace('e8', '99') }} />
          </div>
        </div>
      </Link>
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

  const featured = posts.find(p => p.featured)!;
  const gridPosts = posts
    .filter(p => !p.featured || activeCategory !== 'All')
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .slice(0, visibleCount);

  const allFiltered = posts.filter(p => activeCategory === 'All' || p.category === activeCategory);
  const hasMore = visibleCount < allFiltered.length;

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <div ref={heroRef} className="fade-up px-6 md:px-margin-page max-w-container-max mx-auto pt-14 pb-12">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#0a7aad] uppercase tracking-[0.18em] mb-4">
              <span className="w-4 h-px bg-[#0a7aad]" />
              Content
            </span>
            <h1 className="text-[38px] md:text-[54px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-4">
              Ideas, Insights<br />&amp; Perspectives.
            </h1>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm">
              Not trends, not theory. Straight talk on tech, growth, and digital strategy from the team that builds.
            </p>
          </div>
        </div>

        {/* ── Featured Post ─────────────────────────────────────── */}
        {activeCategory === 'All' && (
          <div className="px-6 md:px-margin-page max-w-container-max mx-auto mb-12">
            <Link to={`/content/${featured.slug}`} className="block group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Content side */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[11px] text-gray-400 font-medium">{featured.date}</span>
                      <span className="text-gray-200">·</span>
                      <span className="text-[11px] text-gray-400">{featured.readTime}</span>
                    </div>
                    <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 leading-snug mb-4 group-hover:text-[#0a7aad] transition-colors duration-200">
                      {featured.title}
                    </h2>
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                    <CategoryPill category={featured.category} />
                  </div>
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    <span className="text-[13px] font-medium text-gray-600">By {featured.author}</span>
                    <span className="flex items-center gap-1 text-[13px] font-semibold text-[#0a7aad]">
                      Read article
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
                    </span>
                  </div>
                </div>
                {/* Image side */}
                <div
                  className="min-h-[280px] lg:min-h-0 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: featured.image }}
                >
                  <div className="w-32 h-32 rounded-full opacity-30" style={{ backgroundColor: '#2563eb' }} />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ── Category Filters ──────────────────────────────────── */}
        <div className="px-6 md:px-margin-page max-w-container-max mx-auto mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#0a7aad] text-white border-[#0a7aad]'
                    : 'text-gray-500 border-gray-200 hover:border-[#0a7aad] hover:text-[#0a7aad] bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Post Grid ─────────────────────────────────────────── */}
        <div className="px-6 md:px-margin-page max-w-container-max mx-auto mb-16">
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post, i) => (
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
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount(v => v + 3)}
                className="px-8 py-3 rounded-full border border-gray-200 text-[14px] font-medium text-gray-600 hover:border-[#0a7aad] hover:text-[#0a7aad] transition-all duration-200"
              >
                Load More
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
