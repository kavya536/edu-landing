import React from 'react';

const Contact = ({ onViewPricing }) => (
  <>
    {/* Section: Final CTA */}
    <section className="py-20 px-6 md:px-12 bg-primary">
      <div className="max-w-4xl mx-auto text-center bg-primary editorial-gradient p-12 rounded-xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <span className="material-symbols-outlined text-[15rem]">history_edu</span>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight">Start Your Journey Today</h2>
          <p className="text-white/90 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Join an elite circle of scholars and redefine what you thought was possible in your academic pursuit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="http://localhost:3006/?view=login" className="bg-white text-[#808080] px-12 py-5 rounded-md font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl flex items-center justify-center">
              Book a Tutor
            </a>
            <button 
              onClick={onViewPricing}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all"
            >
              View Pricing
            </button>
          </div>
          <p className="mt-12 text-white/60 text-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            100% Satisfaction Guarantee or Your First Session is Free.
          </p>
        </div>
      </div>
    </section>

    <section id="contact" className="py-16 px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#353535] mb-6 tracking-tight leading-tight">Have Questions?<br/>Let's Connect</h2>
            <p className="text-[#808080] text-base md:text-lg mb-10 max-w-md leading-relaxed">
              Our academic advisors are here to help you find the perfect tutor and build a roadmap for your success.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100/50">
                  <span className="material-symbols-outlined text-[#1e40af] text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#353535] text-lg">Email Us</h4>
                  <p className="text-[#808080] text-sm">contact@eduqra.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100/50">
                  <span className="material-symbols-outlined text-[#1e40af] text-2xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#353535] text-lg">Visit Us</h4>
                  <p className="text-[#808080] text-sm leading-snug">
                    Allwyn Colony, Road No 45, KPHB, Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100/50">
                  <span className="material-symbols-outlined text-[#1e40af] text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#353535] text-lg">Call Us</h4>
                  <p className="text-[#808080] text-sm">+91 7337312325</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f8faff] p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); e.target.reset(); }}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#353535] uppercase tracking-widest">Full Name</label>
                <input 
                  required 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[#353535] font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#353535] uppercase tracking-widest">Email Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[#353535] font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#353535] uppercase tracking-widest">Message</label>
                <textarea 
                  required 
                  rows="4" 
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-[#353535] font-medium resize-none text-sm"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#1e40af] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a8a] transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
