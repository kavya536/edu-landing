import React from 'react';

const HowItWorks = () => (
  <section className="pt-10 pb-16 px-6 md:px-12 bg-white scroll-mt-24" id="how-it-works">
    <div className="max-w-screen-2xl mx-auto w-full">
      <div className="max-w-screen-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#353535] mb-4">How It Works</h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
        <p className="text-[#808080] max-w-2xl text-lg mx-auto">A refined, four-step journey toward academic excellence.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {[
          { step: '01', title: 'Choose Your Expert', desc: 'Browse our vetted list of subject specialists, class-wise experts, and national exam toppers.' },
          { step: '02', title: 'One-Click Book', desc: 'Instantly schedule a session that fits your timeline with our seamless booking system.' },
          { id: '3', step: '03', title: 'Learn & Grow', desc: 'Engage in interactive, personalized sessions designed to bridge your learning gaps.' },
          { step: '04', title: 'Excel in Exams', desc: 'Achieve top scores in your classes and national exams with confidence and mastery.' }
        ].map((item) => (
          <div key={item.step} className="relative group">
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="w-20 h-20 rounded-full border border-primary/10 bg-surface flex items-center justify-center text-3xl font-serif font-bold text-[#808080] group-hover:bg-primary group-hover:text-white transition-all duration-500">{item.step}</div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif font-bold text-[#353535] mb-3">{item.title}</h3>
              <p className="text-[#808080] text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
