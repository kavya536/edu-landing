import React, { useEffect, useState, useRef } from 'react';

const Advantage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); 
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const advantages = [
    { 
      icon: 'public', 
      title: 'Global Expertise', 
      desc: 'Connect with elite educators from Ivy League and top-tier global institutions.',
      gradient: 'from-[#60A5FA] to-[#3B82F6]'
    },
    { 
      icon: 'lightbulb', 
      title: 'Tailored Pedagogy', 
      desc: 'Adaptive learning pathways that evolve with your progress and unique pace.',
      gradient: 'from-[#A78BFA] to-[#7C3AED]' 
    },
    { 
      icon: 'track_changes', 
      title: 'Exam Precision', 
      desc: 'Master JEE, NEET, and SAT with surgical accuracy using results-driven strategies.',
      gradient: 'from-[#2DD4BF] to-[#0D9488]'
    },
    { 
      icon: 'calendar_month', 
      title: 'Flexible Scheduling', 
      desc: 'Learn on your own terms, across any timezone, with seamless 24/7 access.',
      gradient: 'from-[#F87171] to-[#DC2626]'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white overflow-hidden" id="advantage">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Heading - Now at the top */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className={`text-[28px] md:text-[32px] font-serif font-bold text-[#202020] mb-4 tracking-tight leading-tight transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            The <span className="italic font-normal text-gradient pr-2">Eduqra Advantage</span>
          </h2>
          <p className={`text-slate-600 text-[18px] leading-[1.6] transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Experience a paradigm shift in learning with our result-driven mentorship and elite academic network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side: Dynamic Image Frame */}
          <div className="relative group lg:ml-0 mx-auto w-full mb-12 lg:mb-0 transition-all duration-[1200ms] transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}">
            <div className="absolute -inset-4 bg-[#004AAD]/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative rounded-[2.5rem] overflow-visible border border-slate-100 shadow-2xl aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <img 
                  alt="Personalized Learning" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004AAD]/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Achievement Card */}
              <div className="absolute -bottom-8 -right-4 md:-right-10 z-20 bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-50 max-w-[280px] md:max-w-[320px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#001A3D] flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined text-2xl font-bold">trending_up</span>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-[#001A3D] leading-none tracking-tight">98%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">Growth Rate</p>
                  </div>
                </div>
                <p className="text-sm md:text-[15px] text-slate-600 font-medium italic leading-relaxed mb-6">
                  "The transformation in my problem-solving speed was visible in just 3 weeks."
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i+25}`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] md:text-xs font-bold text-slate-500 tracking-tight">Joined by 10k+ achievers</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Content Section */}
          <div className={`relative transition-all duration-[1200ms] transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative space-y-8 max-w-2xl mx-auto lg:mx-0">
              {advantages.map((item, idx) => {
                const isHighlit = activeIndex === idx || hoveredIndex === idx;
                return (
                  <div 
                    key={idx} 
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(idx)}
                    className="group relative flex items-center gap-6 md:gap-8 cursor-pointer"
                  >
                    {/* Triple Layer Icon Node */}
                    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-[1rem] md:rounded-[1.25rem] bg-white shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-500 ${isHighlit ? 'scale-110 shadow-2xl -translate-y-1' : ''}`}>
                      {/* Middle Colored Gradient Card */}
                      <div className={`w-7 h-7 md:w-10 md:h-10 rounded-[0.6rem] md:rounded-[0.8rem] bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {/* Top Icon Symbol */}
                        <span className="material-symbols-outlined text-sm md:text-xl font-bold">{item.icon}</span>
                      </div>
                    </div>
                    
                    {/* Content Block */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className={`text-[18px] font-bold tracking-tight transition-all duration-300 ${isHighlit ? 'text-[#3B82F6]' : 'text-[#202020]'}`}>
                          {item.title}
                        </h4>
                        {isHighlit && (
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-[3px] border-emerald-50 flex items-center justify-center animate-in zoom-in duration-300">
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                              <span className="material-symbols-outlined text-emerald-500 text-[8px] md:text-[10px] font-black">check</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="mt-1 md:mt-2 text-[16px] leading-[1.6] text-slate-600 font-normal transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
