import React, { useEffect, useState, useRef } from 'react';

const Masterclass = () => {
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
    <section ref={sectionRef} className="pb-24 pt-16 px-6 md:px-12 bg-slate-50/50">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Sticky Heading */}
          <div className={`lg:col-span-5 lg:sticky lg:top-24 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#202020] leading-tight mb-4">
              A Masterclass in <span className="italic font-normal text-gradient pr-2">Your Own Progress.</span>
            </h2>
          </div>

          {/* Vertical Progress Items */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 pb-10">
            {[
              { num: '01', title: 'Instant Matching', desc: 'Our smart algorithm instantly pairs you with a tutor whose teaching style matches your specific learning needs and class level.' },
              { num: '02', title: 'Gap Analysis', desc: 'We identify exactly where you are struggling and create a personalized roadmap to bridge those knowledge gaps.' },
              { num: '03', title: 'Exam Readiness', desc: 'Focus on pattern-based learning and previous year questions to ensure you are 100% ready for national competitive exams.' }
            ].map((item, idx) => (
              <div 
                key={item.num} 
                className={`flex flex-col md:flex-row gap-6 items-start group transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="shrink-0">
                  <span className="text-[120px] font-serif text-slate-200 leading-none block">{item.num}</span>
                </div>
                <div className="pt-2 md:pt-6">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#353535] mb-2">{item.title}</h3>
                  <p className="text-lg md:text-xl text-[#808080] leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;
