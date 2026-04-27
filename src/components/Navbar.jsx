import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Our Tutors', href: '#expert-tutors', view: 'landing' },
    { label: 'How it Works', href: '#how-it-works', view: 'landing' },
    { label: 'Curriculum', href: '#curriculum', view: 'landing' },
    { label: 'Testimonials', href: '#testimonials', view: 'landing' },
    { label: 'Pricing', href: '#pricing', view: 'pricing' },
  ];

  const handleNavClick = (link) => {
    setView(link.view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/85 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)] border-b border-slate-200/50">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20 md:h-24">
          <a href="#" className="flex items-center gap-3" onClick={() => setView('landing')}>
            <img src="/logo.png" alt="Eduqra Logo" className="h-10 md:h-14 w-auto object-contain" />
          </a>

          {/* Desktop Nav - Full view for Laptop/Tablet */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
            <div className="flex items-center space-x-4 lg:space-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  className="font-headline tracking-tight font-medium text-[#353535] hover:text-primary transition-colors text-sm lg:text-base" 
                  href={link.href} 
                  onClick={() => handleNavClick(link)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-3 lg:space-x-6">
              <a href={`${import.meta.env.VITE_TUTOR_DASHBOARD_URL}/?view=login`} className="hidden lg:inline-flex items-center bg-white text-[#353535] px-5 py-2.5 rounded-none font-bold hover:translate-y-[-2px] transition-all text-sm border-2 border-primary shadow-[4px_4px_0px_0px_rgba(53,53,53,0.1)]">Join as Tutor</a>
              <a href={`${import.meta.env.VITE_STUDENT_HUB_URL}/?view=login`} className="bg-primary text-white px-4 lg:px-6 py-2.5 rounded-md font-bold hover:translate-y-[-2px] transition-transform shadow-lg shadow-primary/20 text-sm">
                Book a Tutor
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle - Only for Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#353535] hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                className="text-xl font-bold text-[#353535] hover:text-primary transition-colors py-2 border-b border-slate-50 flex items-center justify-between group" 
                href={link.href} 
                onClick={() => handleNavClick(link)}
              >
                {link.label}
                <ArrowRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-6">
              <a href={`${import.meta.env.VITE_STUDENT_HUB_URL}/?view=login`} className="w-full text-center bg-primary text-white py-5 rounded-md font-bold shadow-xl shadow-primary/20 text-lg">
                Book a Tutor
              </a>
              <a href={`${import.meta.env.VITE_TUTOR_DASHBOARD_URL}/?view=login`} className="w-full text-center bg-white text-[#353535] py-5 rounded-none font-bold border-2 border-primary shadow-[4px_4px_0px_0px_rgba(53,53,53,0.1)] text-lg">
                Join as Tutor
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
