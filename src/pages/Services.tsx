import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';

interface ServiceData {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  themeBg: string;
  themeColor: string;
  themeBorder: string;
}

const servicesList: ServiceData[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    description: 'Custom websites and powerful web applications tailored to your business needs, built for speed and scalability.',
    features: ['Responsive Design', 'Custom Web Apps', 'E-commerce Solutions', 'Performance Optimized'],
    image: '/images/web_dev.png',
    themeBg: 'bg-[#f4f8fe]',
    themeColor: 'text-[#2563eb]', // blue-600
    themeBorder: 'border-[#2563eb]',
  },
  {
    id: 'app-development',
    number: '02',
    title: 'App Development',
    description: 'High-performance mobile and cross-platform applications designed to engage users on every device.',
    features: ['iOS & Android', 'Cross-Platform', 'UI/UX Excellence', 'Secure Backends'],
    image: '/images/app_dev.png',
    themeBg: 'bg-[#f2fcf5]',
    themeColor: 'text-[#16a34a]', // green-600
    themeBorder: 'border-[#16a34a]',
  },
  {
    id: 'ads-meta-facebook',
    number: '03',
    title: 'Ads (Meta, Facebook)',
    description: 'Targeted paid social ad campaigns engineered to maximize ROI and drive qualified leads.',
    features: ['Campaign Strategy', 'Audience Targeting', 'A/B Testing', 'Performance Tracking'],
    image: '/images/Ads.png',
    themeBg: 'bg-[#fbf5ff]',
    themeColor: 'text-[#9333ea]', // purple-600
    themeBorder: 'border-[#9333ea]',
  },
  {
    id: 'business-consulting',
    number: '04',
    title: 'Business Consulting',
    description: 'Strategic operations consulting to help your business scale efficiently and overcome growth bottlenecks.',
    features: ['Process Optimization', 'Growth Strategy', 'Digital Transformation', 'Operational Audits'],
    image: '/images/business_consulting.png',
    themeBg: 'bg-[#f0fdf4]',
    themeColor: 'text-[#059669]', // emerald-600
    themeBorder: 'border-[#059669]',
  },
  {
    id: 'data-analytics',
    number: '05',
    title: 'Data & Analytics',
    description: 'Advanced data services and analytics to turn raw information into actionable business intelligence.',
    features: ['Data Warehousing', 'BI Dashboards', 'Predictive Analytics', 'Data Security'],
    image: '/images/data_analytics.png',
    themeBg: 'bg-[#f0fdfa]',
    themeColor: 'text-[#0891b2]', // cyan-600
    themeBorder: 'border-[#0891b2]',
  },
  {
    id: 'basic-it-training',
    number: '06',
    title: 'Basic IT Training',
    description: 'Foundational IT training programs to upskill your team and ensure technological proficiency.',
    features: ['Corporate Workshops', 'Security Awareness', 'Tech Onboarding', 'Certification Prep'],
    image: '/images/IT_training.png',
    themeBg: 'bg-[#fff7ed]',
    themeColor: 'text-[#ea580c]', // orange-600
    themeBorder: 'border-[#ea580c]',
  },
  {
    id: 'automation',
    number: '07',
    title: 'Automation',
    description: 'Intelligent workflow and business process automation to eliminate manual tasks and reduce errors.',
    features: ['Workflow Design', 'API Integrations', 'RPA Solutions', 'Process Monitoring'],
    image: '/images/automation.png',
    themeBg: 'bg-[#fff1f2]',
    themeColor: 'text-[#e11d48]', // rose-600
    themeBorder: 'border-[#e11d48]',
  },
  {
    id: 'video-editing',
    number: '08',
    title: 'Video Editing',
    description: 'Professional video production and editing services to tell your brand story compellingly.',
    features: ['Promo Videos', 'Corporate Content', 'Motion Graphics', 'Post-Production'],
    image: '/images/vid_editing.png',
    themeBg: 'bg-[#f5f3ff]',
    themeColor: 'text-[#7c3aed]', // violet-600
    themeBorder: 'border-[#7c3aed]',
  },
  {
    id: 'seo-geo-aeo',
    number: '09',
    title: 'SEO, GEO, AEO',
    description: 'Comprehensive Search, Generative Engine, and Answer Engine Optimization to dominate visibility.',
    features: ['Technical SEO', 'Content Strategy', 'AI-Engine Optimization', 'Local & Global Reach'],
    image: '/images/seo.png',
    themeBg: 'bg-[#f0f9ff]',
    themeColor: 'text-[#0ea5e9]', // sky-500
    themeBorder: 'border-[#0ea5e9]',
  }
];

const Services: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Fade up animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-900 font-body min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto pt-16 pb-12 px-6 fade-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[#3b82f6] text-[10px]">✦</span>
            <span className="text-[11px] font-bold text-[#3b82f6] uppercase tracking-widest">Our Services</span>
            <span className="text-[#3b82f6] text-[10px]">✦</span>
          </div>
          <h1 className="text-[40px] md:text-[56px] font-bold text-gray-900 mb-6 leading-tight tracking-tight">End-to-End Digital Solutions</h1>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We design, build, and scale high-performance digital products and systems.<br className="hidden md:block" />
            Explore our comprehensive suite of services designed to accelerate your growth.
          </p>
        </div>

        {/* Services List */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                id={service.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 p-8 md:p-16 rounded-[40px] mb-8 fade-up ${service.themeBg} ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <img src={service.image} alt={service.title} className="w-full max-w-[480px] h-auto object-contain drop-shadow-sm" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className={`text-[14px] font-bold mb-2 ${service.themeColor}`}>{service.number}</div>
                  <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h2>
                  <p className="text-[15px] text-gray-600 mb-8 leading-relaxed max-w-lg">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 shrink-0`}>
                           <span className={`material-symbols-outlined text-[12px] font-bold ${service.themeColor}`}>check</span>
                         </div>
                         <span className="text-[13px] font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link to={`/contact?service=${service.id}`}>
                      <button className={`bg-white border ${service.themeBorder} ${service.themeColor} px-6 py-2.5 rounded-lg text-[14px] font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center`}>
                        Discuss this Service <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bottom CTA */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mt-12 fade-up">
          <div className="bg-[#f0f5ff] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-[#e5edff]">
            
            <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 w-full lg:w-[55%] lg:border-r border-[#d4e1ff] lg:pr-12 text-center md:text-left">
              <div className="w-[88px] h-[88px] shrink-0 rounded-[24px] bg-white flex items-center justify-center shadow-sm">
                 <span className="material-symbols-outlined text-[44px] text-[#2563eb]">headset_mic</span>
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#2563eb] uppercase tracking-widest mb-3">Ready to start?</div>
                <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 leading-tight tracking-tight">
                  Let's build something amazing <span className="text-[#2563eb]">together.</span>
                </h2>
              </div>
            </div>
            
            <div className="w-full lg:w-[45%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-4">
              <p className="text-[15px] text-gray-600 mb-8 max-w-[320px] leading-relaxed">
                Tell us about your goals and we'll craft a solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to="/contact">
                  <button className="bg-[#2563eb] text-white px-7 py-3 rounded-lg text-[15px] font-semibold flex items-center gap-2 hover:bg-[#1d4ed8] transition-colors shadow-sm">
                    Get In Touch <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3 shrink-0">
                    <img alt="User" className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT6ZlQjraG47TNsYx0SlOD48wqHwCzodpRzTGie-kx_34qtIXbOWF16IYe7kwATtY-A5xzp1KYzXsnD6sQBkk5BmABJ287p8hrB6A43J1F7o6aXJfsx0ey3hNTzxdSTRfzMqSRoDWElqgqpirAyYxzPnJkiN9eXG1TidTNdhp5WP7rHROV5psWxII93Xzpc94Aq3c9W8-22eMFk3ZCzxkNht-5wviIZl58LDvye0-Z45x_aKvMr0jw9eGDL2D178b06uDwHmd_BYE" />
                    <img alt="User" className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2sUZ-P7bZCR1lT_rnx12PsFpnPOk8XYhLAuSaoPsOIe4wHdKKOW4Lvpev5Um5UrsCUfM9vPKI0lVEa46GebTXgpwvYi84I39QChjnKCbGlzI50hCSebIIjyIM3OyXh-I1DWRMZSX06LOjuzdpMGGrDXLp6TjE6zhcdGzC6urzlO6SBErbo3svE-PidfYvcJTH-kWCyyVVgK5I4qpTIgOjSg3fOapMGPKYkuXAZr4YywLy0JfNyfzFfOYGwIsWutBaxmv77cHhqDs" />
                    <img alt="User" className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1p3uS9jPJoJSFieJKOvaKTT5wpJ6HUvEIDcNjlb3pJT9gGl8aQyDKPL5ZJasXQlt2QPHqleKxrHGLDp003vIak9UVreXwJnUEoIZqcun9f-iX6II5pkYuq4p1UFk2neSJ0x4ORoNxhHo0aMdAyG6SEFkGW1pDiPRoNPpkqu27FuvE3wp-J8sOkLS8EM6fbfCP87fm5TvRtJfm4eqiL788LOgf6YKCBNxQLI_cIUqYL91hyefetwGYxmpn7R-ZBZ26pCaMyEfwS24" />
                  </div>
                  <p className="text-[11px] text-gray-500 leading-[1.4] text-left">
                    Trusted by businesses<br/>across industries
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
