import React, { useEffect, useState, useRef } from 'react';

const Features = () => {
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
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-[#F0F7FF]">
      <div className={`max-w-screen-2xl mx-auto text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#202020] mb-4 leading-tight">
          Master Every <span className="italic font-normal text-gradient">Subject</span>
        </h2>
      </div>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          { id: '1', icon: 'school', title: 'Class-wise Support', desc: 'Personalized K-12 and Graduate-level coaching for all standards.', color: '#4F46E5', shadow: 'rgba(79, 70, 229, 0.4)' },
          { id: '2', icon: 'menu_book', title: 'Subject Mastery', desc: 'Deep dive into Physics, Chemistry, Math, and Biology.', color: '#10B981', shadow: 'rgba(16, 185, 129, 0.4)' },
          { id: '3', icon: 'local_hospital', title: 'JEE & NEET Prep', desc: 'Excel in national medical and engineering entrance exams.', color: '#F59E0B', shadow: 'rgba(245, 158, 11, 0.4)' },
          { id: '8', icon: 'military_tech', title: 'Olympiads & BEAMS', desc: 'Excel in national-level competitive school exams and BEAMS.', color: '#0D9488', shadow: 'rgba(13, 148, 136, 0.4)' },
          { id: '4', icon: 'laptop_mac', title: 'Technical Support', desc: 'Guidance for Engineering, Coding, and Software Development.', color: '#0EA5E9', shadow: 'rgba(14, 165, 233, 0.4)' },
          { id: '6', icon: 'language', title: 'Language Learning', desc: 'Learn English, Spanish, French, and professional communication.', color: '#8B5CF6', shadow: 'rgba(139, 92, 246, 0.4)' },
          { id: '7', icon: 'psychology', title: 'Career Guidance', desc: 'One-on-one sessions to map your professional future.', color: '#4338CA', shadow: 'rgba(67, 56, 202, 0.4)' }
        ].map((item, idx) => (
          <div 
            key={item.id} 
            className={`bg-white p-8 rounded-[2.5rem] flex flex-col items-start gap-6 transition-all duration-1000 border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200 group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg"
              style={{ backgroundColor: item.color, boxShadow: `0 10px 15px -3px ${item.shadow}` }}
            >
              <span className="material-symbols-outlined text-3xl font-bold text-white">
                {item.icon}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#202020] mb-2 text-xl tracking-tight">{item.title}</h4>
              <p className="text-sm text-[#606060] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
