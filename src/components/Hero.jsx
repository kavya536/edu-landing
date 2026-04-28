import React from 'react';

const Hero = () => (
  <section className="relative min-h-[90vh] md:min-h-[700px] flex items-center overflow-hidden px-6 md:px-12 bg-surface py-20 md:py-32">
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
      <div className="lg:col-span-7 z-10 text-center lg:text-left pt-10 lg:pt-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#353535] tracking-tight mb-8">
          <span className="block leading-tight">Bridging the Gap</span>
          <span className="block mt-2 italic font-normal text-primary text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Between You & Success</span>
        </h1>
        <p className="text-base md:text-xl text-[#808080] max-w-2xl font-body leading-relaxed mb-10 mx-auto lg:mx-0 px-4 lg:px-0">
          Unlock your potential with one-click expert tutor bookings. Professional mentorship tailored for every class, subject, and national competitive exam.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 px-6 sm:px-0 justify-center lg:justify-start">
          <a href={`${import.meta.env.VITE_STUDENT_HUB_URL}/?view=login`} className="bg-primary text-white px-10 py-5 rounded-md text-base md:text-lg font-bold shadow-xl shadow-primary/20 hover:translate-y-[-4px] transition-all flex items-center justify-center">
            Book a Tutor
          </a>
          <a href={`${import.meta.env.VITE_TUTOR_DASHBOARD_URL}/?view=login`} className="bg-white text-[#353535] px-10 py-5 rounded-none text-base md:text-lg font-bold shadow-[8px_8px_0px_0px_rgba(53,53,53,0.1)] hover:translate-y-[-4px] transition-all flex items-center justify-center border-2 border-primary">
            Join as Tutor
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px] mt-10 lg:mt-0">
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
