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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-[#0B2545] scroll-mt-24" id="how-it-works">
      <div className="max-w-screen-2xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
            How It <span className="italic font-normal text-gradient pr-2">Works</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg md:text-xl mx-auto">A refined, four-step journey toward academic excellence.</p>
        </div>
        
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-slate-800/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: 'person_add', title: 'Choose Your Expert', desc: 'Browse our vetted list of subject specialists, class-wise experts, and national exam toppers.' },
              { icon: 'calendar_month', title: 'One-Click Book', desc: 'Instantly schedule a session that fits your timeline with our seamless booking system.' },
              { icon: 'laptop_chromebook', title: 'Learn & Grow', desc: 'Engage in interactive, personalized sessions designed to bridge your learning gaps.' },
              { icon: 'emoji_events', title: 'Excel in Exams', desc: 'Achieve top scores in your classes and national exams with confidence and mastery.' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-[#0B2545] p-8 md:p-10 rounded-[2rem] border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#7C3AED]/50 hover:shadow-2xl hover:shadow-[#7C3AED]/10 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Large Background Number */}
                <div className="absolute top-6 right-8 text-[120px] font-black text-slate-800/20 pointer-events-none transition-colors duration-500 group-hover:text-slate-800/40 leading-none">
                  0{idx + 1}
                </div>

                {/* Icon Container */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-[#7C3AED] group-hover:shadow-lg group-hover:shadow-[#7C3AED]/40">
                  <span className="material-symbols-outlined text-2xl md:text-3xl text-[#7C3AED] transition-colors duration-500 group-hover:text-white font-bold">
                    {item.icon}
                  </span>
                </div>
                
                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold italic text-white mb-4 transition-colors duration-500">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-[15px] font-medium">{item.desc}</p>
                </div>

                {/* Phase Indicator */}
                <div className="flex items-center gap-4 mt-12">
                  <div className="w-12 h-px bg-slate-700 transition-colors duration-500 group-hover:bg-[#7C3AED]"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest transition-colors duration-500 group-hover:text-[#7C3AED]">
                    Phase 0{idx + 1}
                  </span>
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
