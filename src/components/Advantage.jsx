import React, { useEffect, useState, useRef } from 'react';

const Advantage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const advantages = [
    { icon: 'language', title: 'Global Expertise', desc: 'Connect with mentors from top institutions across the country.' },
    { icon: 'auto_stories', title: 'Tailored Pedagogy', desc: 'Each session is built around your specific learning style and syllabus.' },
    { icon: 'bolt', title: 'Exam Precision', desc: 'Focus specifically on national competitive exams like JEE, NEET, and Boards.' },
    { icon: 'schedule', title: 'Flexible Scheduling', desc: 'Elite support that fits your lifestyle, available whenever you need it.' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set to true when intersecting, and we keep it true to show content
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
        {/* Left Side: Dynamic Image Frame */}
        <div className="relative group lg:ml-0 mx-auto">
          <div className="absolute -inset-4 bg-slate-200/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-2xl aspect-square w-full max-w-lg">
            <img alt="Personalized Learning" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
        
        {/* Right Side: Unique Vertical Path UI */}
        <div className="relative">
          <h2 className={`text-3xl md:text-5xl font-serif font-bold text-[#202020] mb-10 tracking-tight leading-tight transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            The <span className="italic font-normal text-gradient">Eduqra Advantage</span>
          </h2>
          
          <div className="relative pl-16 md:pl-24">
            {/* The Connecting Path Line */}
            <div className={`absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#38B000] via-[#38B000]/40 to-transparent rounded-full shadow-[0_0_10px_rgba(56,176,0,0.2)] transition-all duration-[2000ms] ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} origin-top`}></div>
            
            <div className="space-y-12">
              {advantages.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`relative transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 250}ms` }}
                >
                  {/* The Path Node (Icon) */}
                  <div className="absolute -left-16 md:-left-20 top-0 group">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-4 border-[#38B000] shadow-lg flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700">
                      <span className="material-symbols-outlined text-[#38B000] text-lg md:text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 600" }}>
                        {item.icon}
                      </span>
                    </div>
                    {/* Restored pulsing animation */}
                    <div className="absolute inset-0 rounded-full bg-[#38B000]/20 animate-ping"></div>
                  </div>
                  
                  {/* Content Block */}
                  <div className="group cursor-default pl-4">
                    <h4 className="font-bold text-[#202020] text-xl md:text-2xl mb-2 tracking-tight group-hover:text-[#38B000] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[#606060] text-base md:text-lg leading-relaxed max-w-lg group-hover:text-[#353535] transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
