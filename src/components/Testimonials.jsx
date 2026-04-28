import React from 'react';

const Testimonials = () => (
  <section className="pt-8 pb-24 px-6 md:px-12 bg-white scroll-mt-20" id="testimonials">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-5/12 relative mx-auto md:mx-0">
          <div className="aspect-square max-w-sm bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl relative group">
            <img alt="Students in library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/testimonial.png" loading="lazy" />
            <div className="absolute top-6 right-6">
              <span className="material-symbols-outlined text-white text-4xl drop-shadow-lg opacity-80 hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#353535] mb-12">Success Stories</h2>
          <div className="space-y-10">
            <div>
              <p className="text-lg md:text-2xl font-serif italic text-[#808080] leading-relaxed mb-6">
                "The one-click booking on Eduqra changed how I study. I could find a specialized Physics tutor for my JEE prep in seconds. The class-wise support made my school subjects so much easier to handle."
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center text-white font-serif font-bold">SC</div>
                <div className="text-left">
                  <p className="font-bold text-[#353535]">Sophia Chen</p>
                  <p className="text-sm text-outline tracking-wider uppercase">Graduate Student, MPhil Cambridge</p>
                </div>
              </div>
            </div>
            <div className="pl-6 md:pl-12 border-l-4 border-surface-container-highest text-left">
              <p className="text-xl font-serif italic text-[#808080] leading-relaxed mb-6">
                "I finally understood the 'why' behind the equations. My tutor made complex particle physics feel like a narrative we were decoding together."
              </p>
              <p className="font-bold text-[#353535]">Marcus Aurelius Thorne</p>
              <p className="text-sm text-outline tracking-wider uppercase">Undergraduate, MIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
