import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Our Tutors', href: '#expert-tutors', view: 'landing' },
    { label: 'How it Works', href: '#how-it-works', view: 'landing' },
    { label: 'Curriculum', href: '#curriculum', view: 'landing' },
    { label: 'Success Stories', href: '#testimonials', view: 'landing' },
    { label: 'Pricing', href: '#pricing', view: 'pricing' },
  ];

  const handleNavClick = (link) => {
    setView(link.view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/85 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)] border-b border-slate-200/50">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#" className="flex items-center gap-3" onClick={() => setView('landing')}>
            <img src="/logo.png" alt="Eduqra Logo" className="h-8 md:h-12 w-auto object-contain" />
          </a>

          {/* Desktop Nav - Full view for Laptop/Tablet */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <div className="flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  className="font-headline tracking-tight font-bold text-[#404040] hover:text-edu-blue transition-colors text-sm lg:text-base" 
                  href={link.href} 
                  onClick={() => handleNavClick(link)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <a 
                href={`${import.meta.env.VITE_TUTOR_DASHBOARD_URL}/?view=login`} 
                className="hidden lg:inline-flex items-center bg-white px-6 py-3 rounded-xl font-bold transition-all text-sm border-2 active:scale-95"
                style={{ color: '#004AAD', borderColor: 'rgba(0, 74, 173, 0.2)' }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#004AAD'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(0, 74, 173, 0.2)'}
              >Join as Tutor</a>
              <a 
                href={`${import.meta.env.VITE_STUDENT_HUB_URL}/?view=login`} 
                className="text-white px-6 lg:px-8 py-3 rounded-xl font-bold transition-all text-sm shadow-lg hover:scale-[1.05] active:scale-95"
                style={{ backgroundColor: '#004AAD', boxShadow: '0 10px 15px -3px rgba(0, 74, 173, 0.2)' }}
              >
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
