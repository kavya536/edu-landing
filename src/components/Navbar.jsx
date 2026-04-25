import React from 'react';

const Navbar = ({ setView }) => (
  <nav className="fixed top-0 w-full z-50 bg-slate-50/85 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)]">
    <div className="flex justify-between items-center px-6 md:px-12 py-2 max-w-screen-2xl mx-auto">
      <a href="#" className="flex items-center gap-3">
        <img src="/logo.png" alt="Eduqra Logo" className="h-14 w-auto object-contain" />
      </a>
      <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
        <div className="flex items-center space-x-6 lg:space-x-10 mr-4">
          <a className="font-headline tracking-[-0.02em] font-medium text-[#353535] hover:text-blue-950 transition-colors" href="#expert-tutors" onClick={() => setView('landing')}>Our Tutors</a>
          <a className="font-headline tracking-[-0.02em] font-medium text-[#353535] hover:text-blue-950 transition-colors" href="#how-it-works" onClick={() => setView('landing')}>How it Works</a>
          <a className="font-headline tracking-[-0.02em] font-medium text-[#353535] hover:text-blue-950 transition-colors" href="#curriculum" onClick={() => setView('landing')}>Curriculum</a>
          <a className="font-headline tracking-[-0.02em] font-medium text-[#353535] hover:text-blue-950 transition-colors" href="#testimonials" onClick={() => setView('landing')}>Testimonials</a>
          <button className="font-headline tracking-[-0.02em] font-medium text-[#353535] hover:text-blue-950 transition-colors" onClick={() => setView('pricing')}>Pricing</button>
        </div>
        <div className="flex items-center space-x-3 md:space-x-6">
          <a href="http://localhost:3001/?view=login" className="hidden sm:inline-flex items-center bg-white text-[#353535] px-5 py-2 md:py-2.5 rounded-none font-medium hover:translate-y-[-2px] transition-all duration-300 scale-95 active:scale-100 text-sm md:text-base border-2 border-primary shadow-[4px_4px_0px_0px_rgba(53,53,53,0.1)]">Join as Tutor</a>
          <a href="http://localhost:3006/?view=login" className="bg-primary text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-md font-medium hover:translate-y-[-2px] transition-transform duration-300 scale-95 active:scale-100 text-sm md:text-base">
            Book a Tutor
          </a>
          <button className="md:hidden p-2 text-[#808080]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
