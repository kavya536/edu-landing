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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white scroll-mt-24" id="expert-tutors">
      <div className="max-w-screen-2xl mx-auto">
        {/* Elite Badge */}
        <div className={`mb-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <span className="px-4 py-1.5 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-200">
            Elite Academic Network
          </span>
        </div>

        <div className="max-w-3xl mb-10">
          <header className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
              Our Expert <span className="italic font-normal text-gradient pr-2">Tutors</span>
            </h2>
          </header>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Side: Content & 2x2 Grid */}
          <div className="lg:w-1/2">
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed italic mb-10">
              We handpick educators who don't just teach, but inspire. Our rigorous selection process ensures only the most passionate subject experts join the Eduqra network.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: 'groups', title: 'Diverse Expertise', desc: 'B.Ed-certified teachers, engineers, and subject specialists from top-tier academic backgrounds.', defaultBg: 'bg-[#EEF3FB]', hoverBg: 'hover:bg-[#F5F8FD]', iconColor: 'text-[#4F7DF3]' },
                { icon: 'person_search', title: 'Personalized Approach', desc: 'Adaptive teaching methods tailored to individual student learning curves and conceptual gaps.', defaultBg: 'bg-[#F2EEFF]', hoverBg: 'hover:bg-[#F8F6FF]', iconColor: 'text-[#7C5CFF]' },
                { icon: 'menu_book', title: 'Academic Mastery', desc: 'Tutors who combine deep subject knowledge with practical industry experience for better clarity.', defaultBg: 'bg-[#EDF2FA]', hoverBg: 'hover:bg-[#F4F8FD]', iconColor: 'text-[#4F7DF3]' },
                { icon: 'trending_up', title: 'Student-First Focus', desc: 'Regular progress tracking and consistent mentorship to ensure sustained improvement.', defaultBg: 'bg-[#F4F0FF]', hoverBg: 'hover:bg-[#FAF8FF]', iconColor: 'text-[#7C5CFF]' }
              ].map((item, idx) => {
                return (
                  <div 
                    key={idx} 
                    className={`group p-8 rounded-[2rem] transition-all duration-500 cursor-pointer transform border-[4px] border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-white/80 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} 
                      ${item.defaultBg} ${item.hoverBg} hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm transition-all duration-500 group-hover:scale-110">
                      <span className={`material-symbols-outlined text-2xl font-bold transition-colors duration-500 ${item.iconColor}`}>
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-black mb-3 italic transition-colors duration-500 text-[#001A3D]">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed italic transition-colors duration-500 group-hover:text-slate-700">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href={`${import.meta.env.VITE_STUDENT_HUB_URL}/?view=login`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0B1221] text-white rounded-2xl text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10"
              >
                Browse All 10,000+ Tutors
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Right Side: Premium Profile Card */}
          <div className={`lg:w-1/2 relative transition-all duration-[1200ms] transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-white border-[12px] group/img">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Sarah Mitchell" 
                className="w-full h-[650px] object-cover transition-transform duration-[2000ms] group-hover/img:scale-105" 
              />
              
              {/* Vetted Status Badge */}
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-[#F8F9FA] px-5 py-3 rounded-2xl shadow-2xl">
                <div className="w-8 h-8 bg-[#00B976] rounded-xl flex items-center justify-center text-white shadow-sm">
                  <span className="material-symbols-outlined text-lg font-bold">verified</span>
                </div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">STATUS</p>
                  <p className="text-xs font-black text-[#0B1221]">Vetted Mentor</p>
                </div>
              </div>

              {/* Profile Details Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#F8F9FA] p-6 rounded-[2.5rem] shadow-2xl">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-black text-[#0B1221] leading-tight mb-1">Dr. Sarah Mitchell</h4>
                    <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest italic">SENIOR PHYSICS MENTOR • PHD MIT</p>
                  </div>
                  <div className="bg-[#0B1221] text-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                    <span className="material-symbols-outlined text-white text-sm fill-white">star</span>
                    <span className="text-sm font-black">4.9</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                      <span className="material-symbols-outlined text-lg">work_history</span>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">12+ YEARS EXP.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                      <span className="material-symbols-outlined text-lg">groups</span>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">1.2K+ STUDENTS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Star Badge (Half Inside/Half Outside) - Moved outside overflow-hidden */}
            <div className="absolute top-1/2 -left-9 -mt-9 w-[72px] h-[72px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center border border-slate-50 z-20 hidden md:flex">
              <span className="material-symbols-outlined text-[36px] font-bold text-[#FF9800] fill-[#FF9800]">star</span>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TutorExpertise;
