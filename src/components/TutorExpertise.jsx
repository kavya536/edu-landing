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


        <div className="max-w-3xl mb-10">
          <header className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A1A1A] tracking-tight leading-tight">
              Our Expert <span className="italic font-normal text-gradient pr-2">Tutors</span>
            </h2>
          </header>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Side: Content & 2x2 Grid */}
          <div className="lg:w-1/2">
            <p className="text-[18px] text-slate-600 font-medium leading-[1.6] italic mb-10">
              We handpick educators who don't just teach, but inspire. Our rigorous selection process ensures only the most passionate subject experts join the Eduqra network.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                { icon: 'groups', title: 'Diverse Expertise', desc: 'B.Ed-certified teachers, engineers, and subject specialists from top-tier academic backgrounds.', defaultBg: 'bg-[#EEF3FB]', hoverBg: 'hover:bg-[#F5F8FD]', iconColor: 'text-[#4F7DF3]' },
                { icon: 'person_search', title: 'Personalized Approach', desc: 'Adaptive teaching methods tailored to individual student learning curves and conceptual gaps.', defaultBg: 'bg-[#F2EEFF]', hoverBg: 'hover:bg-[#F8F6FF]', iconColor: 'text-[#7C5CFF]' },
                { icon: 'menu_book', title: 'Academic Mastery', desc: 'Tutors who combine deep subject knowledge with practical industry experience for better clarity.', defaultBg: 'bg-[#EDF2FA]', hoverBg: 'hover:bg-[#F4F8FD]', iconColor: 'text-[#4F7DF3]' },
                { icon: 'trending_up', title: 'Student-First Focus', desc: 'Regular progress tracking and consistent mentorship to ensure sustained improvement.', defaultBg: 'bg-[#F4F0FF]', hoverBg: 'hover:bg-[#FAF8FF]', iconColor: 'text-[#7C5CFF]' }
              ].map((item, idx) => {
                return (
                  <div 
                    key={idx} 
                    className={`group p-6 rounded-[1.5rem] transition-all duration-500 cursor-pointer transform border-[4px] border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-white/80 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} 
                      ${item.defaultBg} ${item.hoverBg} hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm transition-all duration-500 group-hover:scale-110">
                      <span className={`material-symbols-outlined text-xl font-bold transition-colors duration-500 ${item.iconColor}`}>
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-black mb-2 italic transition-colors duration-500 text-[#001A3D]">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[16px] leading-[1.6] italic transition-colors duration-500 group-hover:text-slate-700">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>


          </div>

          {/* Right Side: Premium Profile Card */}
          <div className={`lg:w-1/2 relative transition-all duration-[1200ms] transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-white border-[8px] group/img">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Sarah Mitchell" 
                className="w-full h-[550px] object-cover transition-transform duration-[2000ms] group-hover/img:scale-105" 
              />
              
              {/* Vetted Status Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2.5 bg-[#F8F9FA] px-4 py-2.5 rounded-xl shadow-2xl">
                <div className="w-7 h-7 bg-[#00B976] rounded-lg flex items-center justify-center text-white shadow-sm">
                  <span className="material-symbols-outlined text-base font-bold">verified</span>
                </div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">STATUS</p>
                  <p className="text-xs font-black text-[#0B1221]">Vetted Mentor</p>
                </div>
              </div>

              {/* Profile Details Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#F8F9FA] p-5 rounded-[2rem] shadow-2xl">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-[20px] font-black text-[#0B1221] leading-tight mb-1">Dr. Sarah Mitchell</h4>
                    <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest italic">SENIOR PHYSICS MENTOR • PHD MIT</p>
                  </div>
                  <div className="bg-[#0B1221] text-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                    <span className="material-symbols-outlined text-white text-sm fill-white">star</span>
                    <span className="text-sm font-black">4.9</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                      <span className="material-symbols-outlined text-base">work_history</span>
                    </div>
                    <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">12+ YEARS EXP.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm border border-slate-100">
                      <span className="material-symbols-outlined text-base">groups</span>
                    </div>
                    <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">1.2K+ STUDENTS</p>
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
