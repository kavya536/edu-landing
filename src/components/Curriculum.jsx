import React, { useState, useEffect, useRef } from 'react';

const Curriculum = () => {
  const [activePanel, setActivePanel] = useState(0);
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

  const panels = [
    { 
      icon: 'experiment', 
      title: 'Foundation Sciences', 
      desc: 'From middle school basics to advanced Physics and Chemistry, we build strong conceptual foundations.', 
      color: '#5D2FCC', // Purple
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200' 
    },
    { 
      icon: 'functions', 
      title: 'Mathematics Excellence', 
      desc: 'Step-by-step guidance for school math, Olympiads, and mathematical reasoning for national tests.', 
      color: '#004AAD', // Blue
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200' 
    },
    { 
      icon: 'draw', 
      title: 'Social Studies & Arts', 
      desc: 'Comprehensive coverage of History, Geography, and Civics, tailored for school boards and entrance exams.', 
      color: '#0D9488', // Teal
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200' 
    },
    { 
      icon: 'auto_stories', 
      title: 'Exam Writing Strategies', 
      desc: 'Learn to craft high-scoring answers and manage time effectively for both school and competitive exams.', 
      color: '#F59E0B', // Amber
      img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200' 
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-[#F8F9FA] scroll-mt-24 overflow-hidden" id="curriculum">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#202020] mb-2 leading-tight">
            Specialized <span className="italic font-normal text-gradient">Curriculum</span>
          </h2>
          <p className="text-[#606060] max-w-2xl text-lg mx-auto">
            Deep academic mastery through a curriculum designed for the modern learner.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row h-[500px] gap-4">
          {panels.map((panel, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActivePanel(idx)}
              className={`relative overflow-hidden rounded-[2rem] transition-all duration-700 cursor-pointer group shadow-xl ${
                activePanel === idx ? 'flex-[5]' : 'flex-1'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img src={panel.img} alt={panel.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div 
                  className="absolute inset-0 opacity-50 transition-colors duration-500" 
                  style={{ backgroundColor: activePanel === idx ? '#00000080' : panel.color }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                <div className={`flex items-center gap-6 mb-6 transition-all duration-500 ${activePanel === idx ? 'translate-y-0' : 'translate-y-4'}`}>
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 border-2 border-white/40 backdrop-blur-md shadow-lg"
                    style={{ backgroundColor: `${panel.color}B3` }}
                  >
                    <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">{panel.icon}</span>
                  </div>
                  <h3 className={`text-xl md:text-3xl font-serif font-bold whitespace-nowrap transition-all duration-500 ${activePanel === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {panel.title}
                  </h3>
                </div>

                <div className={`overflow-hidden transition-all duration-700 ${activePanel === idx ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-xl font-medium">
                    {panel.desc}
                  </p>
                  <button className="mt-6 flex items-center gap-2 font-bold text-[#5D2FCC] bg-white px-6 py-3 rounded-xl hover:gap-4 transition-all w-fit shadow-lg">
                    Explore Modules <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
                
                {/* Vertical Title for Collapsed State - More Visible */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 pointer-events-none ${activePanel === idx ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                   <span className="block rotate-90 text-xl md:text-2xl font-serif font-bold whitespace-nowrap tracking-[0.2em] uppercase text-white drop-shadow-md">
                     {panel.title.split(' ')[0]}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 font-bold text-white bg-[#5D2FCC] px-12 py-5 rounded-full hover:bg-[#004AAD] transition-all shadow-xl shadow-[#5D2FCC]/20 group">
            Download Full Prospectus 
            <span className="material-symbols-outlined text-2xl group-hover:translate-y-1 transition-transform">download_for_offline</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
