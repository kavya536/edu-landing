import React from 'react';

const Advantage = () => (
  <section className="py-12 px-6 md:px-12 bg-white">
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="relative rounded-xl overflow-hidden border border-slate-100">
        <img alt="Personalized Learning" className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" loading="lazy" />
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg">
          <p className="text-[#808080] font-serif font-bold italic">"Bridging the Gap to Success"</p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#353535] mb-4 tracking-tight text-center">The Eduqra Advantage</h2>
        <div className="w-24 h-1 bg-amber-400 mb-8 mx-auto"></div>
        <ul className="space-y-6">
          {[
            { title: 'Global Expertise', desc: 'Connect with mentors from top institutions across the country.' },
            { title: 'Tailored Pedagogy', desc: 'Each session is built around your specific learning style and syllabus.' },
            { title: 'Exam Precision', desc: 'Focus specifically on national competitive exams like JEE, NEET, and Boards.' },
            { title: 'Flexible Scheduling', desc: 'Elite support that fits your lifestyle, available whenever you need it.' }
          ].map((item, idx) => (
            <li key={idx} className="p-6 rounded-xl border border-primary/5 hover:border-primary/20 hover:bg-surface transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-[#808080] group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-sm font-bold">check_circle</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#353535]">{item.title}</h4>
                  <p className="text-[#808080] text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Advantage;
