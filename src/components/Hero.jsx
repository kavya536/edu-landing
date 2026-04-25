import React from 'react';

const Hero = () => (
  <section className="relative min-h-screen md:min-h-[700px] flex items-center overflow-hidden px-6 md:px-12 bg-surface py-20 md:py-0">
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7 z-10 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#353535] tracking-tight mb-6">
          <span className="block">Bridging the Gap</span>
          <span className="block mt-2 italic font-normal text-[#353535]">Between You & Success</span>
        </h1>
        <p className="text-base md:text-xl text-[#808080] max-w-xl font-body leading-relaxed mb-8 mx-auto md:mx-0">
          Unlock your potential with one-click expert tutor bookings. Professional mentorship tailored for every class, subject, and national competitive exam.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="http://localhost:3006/?view=login" className="bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-md text-base md:text-lg font-medium shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex items-center justify-center group">
            Book a Tutor
          </a>
          <a href="http://localhost:3001/?view=login" className="bg-white text-[#808080] px-8 md:px-10 py-4 md:py-5 rounded-none text-base md:text-lg font-medium shadow-[8px_8px_0px_0px_rgba(53,53,53,0.1)] hover:translate-y-[-4px] transition-all duration-300 flex items-center justify-center group border-2 border-primary">
            Join as Tutor
          </a>
        </div>
      </div>
      <div className="md:col-span-5 relative h-full min-h-[300px] md:min-h-[500px] mt-12 md:mt-0">
        <div className="absolute inset-0 bg-slate-100 overflow-hidden">
          <img alt="Classical library desk" fetchpriority="high" loading="eager" className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80" />
        </div>
        <div className="absolute -bottom-6 md:-bottom-8 -left-4 md:-left-8 bg-surface-container-lowest p-4 md:p-8 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-md max-w-[200px] md:max-w-[280px] z-20">
          <p className="font-serif italic text-[#808080] text-lg leading-snug">"Eduqra is the gold standard for instant, elite-level academic support."</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-tertiary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-outline">Dean's Choice 2026</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
