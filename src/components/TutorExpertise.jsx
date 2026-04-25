import React from 'react';

const TutorExpertise = () => (
  <section className="pt-8 pb-12 px-6 md:px-12 bg-slate-50/50 scroll-mt-20" id="expert-tutors">
    <div className="max-w-screen-2xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#353535] mb-4">Our Expert Tutors</h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: 'verified_user', title: 'Diverse Expertise', desc: 'Our tutors come from varied backgrounds including B.Ed-certified teachers, engineers, and subject specialists across multiple fields.' },
          { icon: 'model_training', title: 'Strong Teaching Approach', desc: 'They focus on concept clarity, practical understanding, and personalized methods tailored to each student.' },
          { icon: 'workspace_premium', title: 'Industry + Academic Knowledge', desc: 'Students benefit from tutors who combine real-world experience with strong academic foundations, especially for technical subjects.' },
          { icon: 'favorite', title: 'Student-Centric Focus', desc: 'Every tutor understands student needs, tracks progress, and ensures consistent improvement.' },
          { icon: 'auto_awesome', title: 'Empowering Future Educators', desc: 'We support passionate fresh graduates and aspiring teachers by providing the right platform to start and grow their teaching careers.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-primary/20 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-[#808080] mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-3xl">{item.icon}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#353535] mb-4">{item.title}</h3>
            <p className="text-[#808080] leading-relaxed text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TutorExpertise;
