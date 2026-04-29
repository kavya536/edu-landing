import React from 'react';

const Features = () => (
  <section className="py-12 px-6 md:px-12 bg-white">
    <div className="max-w-screen-2xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#353535] tracking-tight mb-4">Expert Tutors for Every Class and Exam</h2>
      <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
    </div>
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[
        { id: '1', icon: 'school', title: 'Class-wise Support', desc: 'Personalized K-12 and Graduate-level coaching for all standards.' },
        { id: '2', icon: 'menu_book', title: 'Subject Mastery', desc: 'Deep dive into Physics, Chemistry, Math, and Biology.' },
        { id: '3', icon: 'local_hospital', title: 'JEE & NEET Prep', desc: 'Excel in national medical and engineering entrance exams.' },
        { id: '8', icon: 'military_tech', title: 'Olympiads & BEAMS', desc: 'Excel in national-level competitive school exams and BEAMS.' },
        { id: '4', icon: 'laptop_mac', title: 'Technical Support', desc: 'Guidance for Engineering, Coding, and Software Development.' },
        { id: '6', icon: 'language', title: 'Language Learning', desc: 'Learn English, Spanish, French, and professional communication.' },
        { id: '7', icon: 'psychology', title: 'Career Guidance', desc: 'One-on-one sessions to map your professional future.' }
      ].map((item) => (
        <div key={item.id} className="bg-surface-container-low p-6 rounded-lg flex items-start gap-4 transition-all border border-transparent hover:border-blue-100 group">
          <div className="p-2 bg-primary rounded-md text-white shrink-0 group-hover:bg-[#002b70] group-hover:scale-110 transition-all duration-300">
            <span className="material-symbols-outlined">{item.icon}</span>
          </div>
          <div>
            <h4 className="font-bold text-[#353535] mb-1">{item.title}</h4>
            <p className="text-sm text-[#808080] leading-tight">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
