import React from 'react';

const FAQ = () => (
  <section className="pt-2 pb-12 px-6 md:px-12 bg-white scroll-mt-20" id="faq">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#353535] mb-4">Common Questions</h2>
        <p className="text-[#808080]">Everything you need to know about starting with Eduqra.</p>
      </div>
      <div className="space-y-4">
        {[
          { q: "How are Eduqra tutors selected?", a: "Each tutor undergoes a rigorous 4-step vetting process including subject proficiency tests, demo sessions, and background verification from top academic institutions." },
          { q: "Can I switch tutors if I'm not satisfied?", a: "Absolutely. We offer a 100% satisfaction guarantee. If the chemistry isn't right, we'll help you find a new expert immediately." },
          { q: "Are the sessions recorded for later review?", a: "Yes, every session is recorded and stored in your private dashboard for easy revision before exams." },
          { q: "Do you offer group sessions or only 1-on-1?", a: "While we specialize in intensive 1-on-1 mentorship, we also host small group masterclasses for national exam strategies." },
          { q: "Do you offer a free trial session?", a: "Yes, your first discovery session is always free. This allows you to meet the tutor, discuss your goals, and ensure it's the perfect match before committing." },
          { q: "What subjects and exams do you cover?", a: "We cover all major K-12 subjects and specialize in national competitive exams including JEE (Main & Advanced), NEET, and various board exam preparations." },
          { q: "What equipment do I need for the sessions?", a: "A stable internet connection and a device with a camera/microphone. While phones work, we recommend a laptop or tablet for the best whiteboard interaction." },
          { q: "What are the payment and plan options?", a: "We offer flexible pay-per-session options as well as discounted monthly mastery plans. All major UPI, Cards, and Net Banking methods are supported." }
        ].map((faq, i) => (
          <div key={i} className="group border-b border-primary/10 pb-6 pt-2">
            <div className="flex justify-between items-center cursor-pointer mb-2">
              <h3 className="text-lg font-serif font-bold text-[#353535] group-hover:text-amber-600 transition-colors">{faq.q}</h3>
              <span className="material-symbols-outlined text-[#808080] group-hover:rotate-180 transition-transform">expand_more</span>
            </div>
            <p className="text-[#353535] text-sm leading-relaxed hidden group-hover:block animate-fade-in">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
