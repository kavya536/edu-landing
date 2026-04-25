import React from 'react';

const Masterclass = () => (
  <section className="pb-16 pt-0 px-6 md:px-12 bg-slate-50/50">
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        {/* Sticky Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-40">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#353535] leading-tight">
            A Masterclass <br className="hidden md:block" />in Your Own <br className="hidden md:block" />Progress.
          </h2>
        </div>

        {/* Vertical Progress Items */}
        <div className="lg:col-span-7 space-y-32 md:space-y-48 pb-20">
          {[
            { num: '01', title: 'Instant Matching', desc: 'Our smart algorithm instantly pairs you with a tutor whose teaching style matches your specific learning needs and class level.' },
            { num: '02', title: 'Gap Analysis', desc: 'We identify exactly where you are struggling and create a personalized roadmap to bridge those knowledge gaps.' },
            { num: '03', title: 'Exam Readiness', desc: 'Focus on pattern-based learning and previous year questions to ensure you are 100% ready for national competitive exams.' }
          ].map((item) => (
            <div key={item.num} className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="shrink-0">
                <span className="text-7xl md:text-9xl font-serif text-slate-200 leading-none block">{item.num}</span>
              </div>
              <div className="pt-4 md:pt-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#353535] mb-6">{item.title}</h3>
                <p className="text-base md:text-lg text-[#808080] leading-relaxed max-w-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Masterclass;
