import React from 'react';

const Footer = ({ setView }) => (
  <footer className="bg-slate-50 border-t border-slate-200 pt-8 pb-4 px-6 md:px-12">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pr-6 md:pr-12 lg:pr-64">
        <div className="max-w-xs shrink-0">
          <div className="mb-1">
            <img src="/logo.png" alt="Eduqra" className="h-16 w-auto object-contain" loading="lazy" />
          </div>
          <p className="font-body leading-relaxed text-[13px] tracking-wide text-slate-700 font-medium mb-6">
            Empowering students with elite-level tutoring.<br />
            Bridging the gap between classroom learning.<br />
            Achieving excellence in national exams.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/eduqra/?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all group">
              <svg className="w-4 h-4 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/eduqra/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all group">
              <svg className="w-4 h-4 fill-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 lg:gap-40">
          <div>
            <h4 className="text-slate-900 font-black mb-6 text-xs tracking-widest uppercase whitespace-nowrap">Our Services</h4>
            <ul className="space-y-4">
              <li><a className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap" href="#expert-tutors">Our Tutors</a></li>
              <li><a className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap" href="#how-it-works">How it Works</a></li>
              <li><a className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap" href="#curriculum">Curriculum</a></li>
              <li><a className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap" href="#testimonials">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-black mb-6 text-xs tracking-widest uppercase whitespace-nowrap">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setView('privacy')} className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap">Privacy Policy</button></li>
              <li><button onClick={() => setView('terms')} className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap">Terms of Service</button></li>
              <li><button onClick={() => setView('refund')} className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap">Refund Policy</button></li>
              <li><a className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap" href={`${import.meta.env.VITE_TUTOR_DASHBOARD_URL}/?view=login`}>Faculty Portal</a></li>
              <li><a className="font-body text-xs tracking-wide text-slate-600 font-semibold hover:text-primary transition-all whitespace-nowrap" href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="shrink-0">
          <h4 className="text-slate-900 font-black mb-6 text-xs tracking-widest uppercase whitespace-nowrap">Contact Us</h4>
          <ul className="space-y-4 text-xs tracking-wide text-slate-700 font-medium">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-base font-bold">mail</span>
              <a href="mailto:contact@eduqra.com" className="hover:text-primary transition-colors">contact@eduqra.com</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-base font-bold">call</span>
              <span>+91 7337312325</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-base font-bold">location_on</span>
              <span>Allwyn Colony, Road No 45,<br />KPHB, Hyderabad</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body leading-relaxed text-[10px] tracking-wide text-[#808080] opacity-80">© 2026 Eduqra. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
