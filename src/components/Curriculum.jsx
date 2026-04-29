import React from 'react';

const Curriculum = () => (
  <section className="pt-12 pb-16 px-6 md:px-12 bg-surface-container-low scroll-mt-24" id="curriculum">
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#353535] leading-tight mb-4 text-center">Specialized <br className="hidden md:block" />Curriculum</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg text-[#808080] leading-relaxed mb-10 text-center md:text-left">Our curriculum is designed to simplify complex concepts and providing students with the tools they need for both school and competitive exams.</p>
          <button className="flex items-center gap-2 font-bold text-[#353535] group mx-auto md:ml-0">
            Download Full Prospectus 
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download_for_offline</span>
          </button>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { icon: 'experiment', title: 'Foundation Sciences', desc: 'From middle school basics to advanced Physics and Chemistry, we build strong conceptual foundations.' },
            { icon: 'draw', title: 'Social Studies & Arts', desc: 'Comprehensive coverage of History, Geography, and Civics, tailored for school boards and entrance exams.' },
            { icon: 'functions', title: 'Mathematics Excellence', desc: 'Step-by-step guidance for school math, Olympiads, and mathematical reasoning for national tests.' },
            { icon: 'auto_stories', title: 'Exam Writing Strategies', desc: 'Learn to craft high-scoring answers and manage time effectively for both school and competitive exams.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-lg border border-outline-variant/20 transition-all text-center md:text-left group hover:bg-[#eef4ff]">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto md:ml-0 group-hover:bg-[#002b70] group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-white text-3xl">{item.icon}</span>
              </div>
              <h4 className="text-xl font-serif font-bold text-[#353535] mb-3">{item.title}</h4>
              <p className="text-sm text-[#808080] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Curriculum;
