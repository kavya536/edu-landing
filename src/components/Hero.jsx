import React from 'react';

const Hero = () => (
  <section 
    className="relative overflow-hidden px-6 md:px-12 pt-24 md:pt-28 pb-10 md:pb-16 bg-cover bg-center" 
    id="hero"
    style={{ backgroundImage: "url('/image.png')" }}
  >
    {/* White Shade Overlay */}
    <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
    
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-edu-green/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-edu-azure/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
    
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full relative z-10">
      <div className="lg:col-span-7 text-center lg:text-left pt-0 lg:pl-4">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#000000] tracking-tight mb-6 leading-[1.1] animate-fade-in-up">
          <span className="block">Bridging the Gap</span>
          <span className="block mt-2 italic font-normal text-gradient text-3xl sm:text-4xl lg:text-4xl xl:text-5xl">Between You & Success</span>
        </h1>
        <p className="text-base md:text-lg text-[#333333] max-w-xl font-medium leading-relaxed mb-10 mx-auto lg:mx-0 px-4 lg:px-0 animate-fade-in-up [animation-delay:200ms]">
          Unlock your potential with one-click expert tutor bookings. Professional mentorship tailored for every class, subject, and national competitive exam.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 px-6 sm:px-0 justify-center lg:justify-start">
          <a 
            href={`${import.meta.env.VITE_STUDENT_HUB_URL}/?view=login`} 
            className="text-white px-10 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center shadow-xl hover:scale-[1.05] hover:brightness-110 active:scale-95"
            style={{ backgroundColor: '#004AAD', boxShadow: '0 20px 25px -5px rgba(0, 74, 173, 0.2)' }}
          >
            Book a Tutor
          </a>
          <a 
            href={`${import.meta.env.VITE_TUTOR_DASHBOARD_URL}/?view=login`} 
            className="bg-white px-10 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center border-2 hover:bg-slate-50 hover:scale-[1.05] active:scale-95"
            style={{ color: '#004AAD', borderColor: 'rgba(0, 74, 173, 0.2)' }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#004AAD'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(0, 74, 173, 0.2)'}
          >
            Join as Tutor
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 relative h-full min-h-[300px] lg:h-[400px] mt-8 lg:mt-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-100 overflow-hidden rounded-2xl shadow-2xl aspect-square scale-90">
          <img alt="Classical library desk" fetchpriority="high" loading="eager" decoding="async" className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600" />
        </div>
        <div className="absolute -bottom-2 md:-bottom-2 -left-2 md:-left-4 bg-white p-3 md:p-4 rounded-xl max-w-[180px] md:max-w-[220px] z-20 shadow-xl border border-slate-100 scale-90">
          <p className="font-serif italic text-[#808080] text-base leading-snug">"Eduqra is the gold standard for instant, elite-level academic support."</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-amber-600 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Dean's Choice 2026</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
