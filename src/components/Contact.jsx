import React from 'react';

const Contact = ({ onViewPricing }) => (
  <>
    {/* Section: Final CTA */}
    <section className="py-24 px-6 md:px-12 bg-primary">
      <div className="max-w-4xl mx-auto text-center editorial-gradient p-12 rounded-3xl relative overflow-hidden shadow-2xl shadow-edu-blue/40">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 tracking-tight">Start Your Journey Today</h2>
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Join an elite circle of scholars and redefine what you thought was possible in your academic pursuit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`${import.meta.env.VITE_STUDENT_HUB_URL}/?view=login`} className="bg-white text-edu-blue px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center shadow-lg">
              Book a Tutor
            </a>
            <button 
              onClick={onViewPricing}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              View Pricing
            </button>
          </div>
          <p className="mt-12 text-white/60 text-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm text-edu-green">verified_user</span>
            100% Satisfaction Guarantee or Your First Session is Free.
          </p>
        </div>
      </div>
    </section>

    <section id="contact" className="py-24 px-6 md:px-12 bg-[#F1F5F9] scroll-mt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#202020] mb-6 tracking-tight leading-tight text-center lg:text-left">
              <span className="block">Have Questions?</span>
              <span className="block italic font-normal text-gradient pr-2">Let's Connect</span>
            </h2>
            <p className="text-[#606060] text-lg md:text-xl mb-12 max-w-md mx-auto lg:mx-0 text-center lg:text-left leading-relaxed">
              Our academic advisors are here to help you find the perfect tutor and build a roadmap for your success.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-edu-blue text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#202020] text-lg">Email Us</h4>
                  <p className="text-[#606060] text-base font-medium">contact@eduqra.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-edu-green text-2xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#202020] text-lg">Visit Us</h4>
                  <p className="text-[#606060] text-base font-medium leading-snug">
                    Allwyn Colony, Road No 45, KPHB, Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-edu-teal text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#202020] text-lg">Call Us</h4>
                  <p className="text-[#606060] text-base font-medium">+91 7337312325</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); e.target.reset(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/5 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/5 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">How can we help you?</label>
                <textarea 
                  required 
                  rows="5" 
                  placeholder="Describe your requirements or questions here..."
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:border-[#4F46E5] focus:ring-4 focus:ring-[#4F46E5]/5 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#004AAD] text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 active:transform active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                >
                  Send Message
                  <span className="material-symbols-outlined text-xl">send</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <p className="text-xs font-medium text-slate-500">Typical response time: 2-4 hours</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
