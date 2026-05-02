import React, { useEffect, useState, useRef } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white scroll-mt-24" id="how-it-works">
      <div className="max-w-screen-2xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#202020] mb-2 leading-tight">
            How It <span className="italic font-normal text-gradient">Works</span>
          </h2>
          <p className="text-[#808080] max-w-2xl text-lg mx-auto">A refined, four-step journey toward academic excellence.</p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { icon: 'school', title: 'Choose Your Expert', desc: 'Browse our vetted list of subject specialists, class-wise experts, and national exam toppers.', color: '#5D2FCC' },
              { icon: 'event_available', title: 'One-Click Book', desc: 'Instantly schedule a session that fits your timeline with our seamless booking system.', color: '#004AAD' },
              { icon: 'history_edu', title: 'Learn & Grow', desc: 'Engage in interactive, personalized sessions designed to bridge your learning gaps.', color: '#0D9488' },
              { icon: 'account_balance', title: 'Excel in Exams', desc: 'Achieve top scores in your classes and national exams with confidence and mastery.', color: '#F59E0B' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center group text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Milestone Badge */}
                <div className="relative mb-8">
                  <div 
                    className="w-24 h-24 rounded-full bg-white border-4 flex items-center justify-center transition-all duration-500 shadow-xl group-hover:scale-110 group-hover:rotate-[10deg] relative z-10"
                    style={{ borderColor: item.color }}
                  >
                    <span className="material-symbols-outlined text-4xl" style={{ color: item.color, fontVariationSettings: "'FILL' 0, 'wght' 500" }}>
                      {item.icon}
                    </span>
                  </div>
                  {/* Step Number Tag */}
                  <div 
                    className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-20"
                    style={{ backgroundColor: item.color }}
                  >
                    0{idx + 1}
                  </div>
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: item.color }}></div>
                </div>
                
                {/* Text Content */}
                <div className="px-4">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#202020] mb-4 group-hover:text-[#202020] transition-colors">{item.title}</h3>
                  <p className="text-[#606060] leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
