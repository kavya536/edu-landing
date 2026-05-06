import React, { useState, useEffect, useRef } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
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

  const faqs = [
    { q: "How are Eduqra tutors selected?", a: "Each tutor undergoes a rigorous 4-step vetting process including subject proficiency tests, demo sessions, and background verification from top academic institutions." },
    { q: "Can I switch tutors if I'm not satisfied?", a: "Absolutely. We offer a 100% satisfaction guarantee. If the chemistry isn't right, we'll help you find a new expert immediately." },
    { q: "Do you offer group sessions or only 1-on-1?", a: "While we specialize in intensive 1-on-1 mentorship, we also host small group masterclasses for national exam strategies." },
    { q: "Do you offer a free trial session?", a: "Yes, your first discovery session is always free. This allows you to meet the tutor, discuss your goals, and ensure it's the perfect match before committing." },
    { q: "What subjects and exams do you cover?", a: "We cover all major K-12 subjects and specialize in national competitive exams including JEE (Main & Advanced), NEET, and various board exam preparations." },
    { q: "What equipment do I need for the sessions?", a: "A stable internet connection and a device with a camera/microphone. While phones work, we recommend a laptop or tablet for the best whiteboard interaction." }
  ];

  return (
    <section ref={sectionRef} className="pt-16 pb-20 px-6 md:px-12 bg-[#F8F9FA] scroll-mt-20" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#202020] mb-2 leading-tight">
            Common <span className="italic font-normal text-gradient pr-2">Questions</span>
          </h2>
          <p className="text-[#808080] text-lg md:text-xl">Everything you need to know about starting with Eduqra.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group border-b border-primary/10 pb-6 pt-2">
              <div 
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3 className="text-lg font-serif font-bold text-[#353535] hover:text-amber-600 transition-colors">{faq.q}</h3>
                <span className={`material-symbols-outlined text-[#808080] transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>expand_more</span>
              </div>
              {openIndex === i && (
                <p className="text-[#353535] text-sm leading-relaxed animate-fade-in">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
