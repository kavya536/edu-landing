import React, { useEffect, useState, useRef } from 'react';

const TutorExpertise = () => {
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

  const expertise = [
    { 
      icon: 'verified_user', 
      title: 'Diverse Expertise', 
      desc: 'B.Ed-certified teachers, engineers, and subject specialists from top-tier academic backgrounds.',
      accent: 'bg-emerald-50 text-emerald-600'
    },
    { 
      icon: 'model_training', 
      title: 'Personalized Approach', 
      desc: 'Adaptive teaching methods tailored to individual student learning curves and conceptual gaps.',
      accent: 'bg-blue-50 text-blue-600'
    },
    { 
      icon: 'workspace_premium', 
      title: 'Academic Mastery', 
      desc: 'Tutors who combine deep subject knowledge with practical industry experience for better clarity.',
      accent: 'bg-amber-50 text-amber-600'
    },
    { 
      icon: 'favorite', 
      title: 'Student-First Focus', 
      desc: 'Regular progress tracking and consistent mentorship to ensure sustained improvement.',
      accent: 'bg-rose-50 text-rose-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white scroll-mt-20 overflow-hidden" id="expert-tutors">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Content and Grid */}
          <div className="lg:w-3/5 order-2 lg:order-1">
            <header className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-3xl md:text-5xl tracking-tighter font-black text-[#202020] mb-6 leading-tight whitespace-nowrap">
                Our Expert <span className="italic font-normal text-gradient font-serif pr-2">Tutors</span>
              </h2>
              <p className="text-xl text-[#606060] max-w-xl font-medium leading-relaxed">
                We handpick educators who don't just teach, but inspire. Our rigorous selection process ensures only the most passionate subject experts join the Eduqra network.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`group p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-1000 border border-transparent hover:border-slate-100 hover:-translate-y-2 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.accent} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="material-symbols-outlined text-3xl font-bold">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#202020] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#606060] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Premium Image Section */}
          <div className={`lg:w-2/5 relative order-1 lg:order-2 group/img transition-all duration-[1200ms] transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white bg-slate-100 group-hover/img:shadow-[0_60px_120px_-30px_rgba(0,74,173,0.3)] transition-all duration-700 group-hover/img:-translate-y-3">
              <img 
                src="/tutor-expert.png" 
                alt="Expert Tutor" 
                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover/img:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl group-hover/img:translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#004AAD] rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                    <span className="material-symbols-outlined text-2xl font-bold">star</span>
                  </div>
                  <div>
                    <p className="text-[#202020] font-black text-lg leading-none">Top 1% Tutors</p>
                    <p className="text-[#606060] font-bold text-xs mt-1 uppercase tracking-widest">Rigorous Selection Process</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#004AAD]/10 rounded-full blur-3xl -z-10 group-hover/img:scale-150 transition-transform duration-1000"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TutorExpertise;
