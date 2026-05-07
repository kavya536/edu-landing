import React from 'react';
import { Star, Users, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden pt-20 pb-10 md:pt-28 md:pb-16 bg-gradient-to-r from-[#f8fbff] via-[#e6f3ff] to-[#b3dbff]" 
      id="hero"
    >
      {/* Abstract Backgrounds */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#004AAD]/20 to-transparent -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#004AAD]/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute inset-0 dot-pattern opacity-30 -z-10"></div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content Section */}
        <div className="animate-fade-in-up pr-0 lg:pr-10">


          <h1 className="text-[32px] md:text-[52px] font-bold text-[#000000] tracking-tight leading-[1.1] mb-6">
            Bridging the Gap <br />
            <span className="italic font-medium text-gradient pr-2">Between You & Success</span>
          </h1>

          <p className="text-[18px] text-slate-600 max-w-xl font-medium leading-[1.6] mb-10">
            Unlock your potential with one-click expert tutor bookings. 
            Professional mentorship tailored for every class, subject, and national competitive exam.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href={`${import.meta.env.VITE_STUDENT_HUB_URL}/?view=login`} 
              className="px-8 py-4 bg-[#004AAD] text-white rounded-2xl text-base font-bold transition-all shadow-[0_20px_30px_-10px_rgba(0,74,173,0.3)] hover:scale-105 hover:shadow-[0_25px_40px_-10px_rgba(0,74,173,0.4)] active:scale-95 flex items-center gap-2"
            >
              Book a Tutor
              <Users className="w-5 h-5 opacity-80" />
            </a>
            <a 
              href={`${import.meta.env.VITE_TUTOR_DASHBOARD_URL}/?view=login`} 
              className="px-8 py-4 bg-white text-[#004AAD] border-2 border-[#004AAD]/20 rounded-2xl text-base font-bold transition-all hover:bg-slate-50 hover:border-[#004AAD] hover:scale-105 active:scale-95"
            >
              Join as Tutor
            </a>
          </div>
        </div>

        {/* Right Side: 3-Image Grid Layout */}
        <div className="relative w-full h-[400px] md:h-[500px] flex gap-3 md:gap-5 animate-fade-in-up [animation-delay:200ms] mt-6 lg:mt-0">
          



          {/* Left Large Image */}
          <div className="relative w-7/12 h-full flex flex-col justify-end rounded-3xl md:rounded-[2.5rem] shadow-2xl group animate-float">
            {/* Attached Trust Badge - Floats with image */}
            <div className="absolute -top-3 -right-3 z-30 bg-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-50">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Verified • Top 1% Experts</span>
            </div>
            
            <div className="absolute inset-0 rounded-3xl md:rounded-[2.5rem] overflow-hidden">
              <img 
                src="/tutor img.jpeg" 
                alt="Tutor" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Overlay card for tutor name */}
            <div className="relative z-10 m-4 md:m-6 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg w-max mb-2 md:mb-4 border border-slate-50 shadow-xl">
               <p className="text-[9px] md:text-[10px] font-bold text-[#38B000] uppercase tracking-widest mb-0.5 md:mb-1">Expert Tutor</p>
               <p className="text-xs md:text-sm font-black text-slate-800">Mr. James Carter</p>
            </div>
            
            {/* Stats Black Card */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20 bg-[#0B0F19] p-3 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl flex items-center justify-between text-white">
              <div className="text-center">
                <p className="text-sm md:text-xl font-black">150+</p>
                <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 md:mt-1">Expert Tutors</p>
              </div>
              <div className="w-px h-6 md:h-8 bg-white/20"></div>
              <div className="text-center">
                <p className="text-sm md:text-xl font-black">1-on-1</p>
                <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 md:mt-1">Live Classes</p>
              </div>
              <div className="w-px h-6 md:h-8 bg-white/20"></div>
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-0.5 md:gap-1 text-sm md:text-xl font-black">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-[#38B000] fill-[#38B000]" /> 4.9
                </div>
                <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 md:mt-1">Student Rating</p>
              </div>
            </div>
          </div>

          {/* Right Stacked Images */}
          <div className="w-5/12 flex flex-col gap-3 md:gap-5 h-full relative">
            <div className="flex-1 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl group animate-float">
               <img src="/b-techstud.jpeg" alt="B-Tech Student" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl group relative animate-float">
               <img src="/scholstud.jpeg" alt="School Student" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
