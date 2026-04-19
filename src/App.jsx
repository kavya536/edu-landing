import React from 'react';

function App() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-50/85 backdrop-blur-xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)]">
        <div className="flex justify-between items-center px-12 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-serif font-bold text-blue-950 tracking-tighter">
            Eduqra
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a className="font-headline tracking-[-0.02em] font-medium text-slate-600 hover:text-blue-950 transition-colors" href="#tutors">Our Tutors</a>
            <a className="font-headline tracking-[-0.02em] font-medium text-blue-950 border-b-2 border-amber-400 pb-1" href="#how-it-works">How it Works</a>
            <a className="font-headline tracking-[-0.02em] font-medium text-slate-600 hover:text-blue-950 transition-colors" href="#curriculum">Curriculum</a>
            <a className="font-headline tracking-[-0.02em] font-medium text-slate-600 hover:text-blue-950 transition-colors" href="#testimonials">Testimonials</a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-slate-600 font-medium hover:text-blue-950 transition-colors hover:translate-y-[-2px] duration-300">Sign In</button>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-medium hover:translate-y-[-2px] transition-transform duration-300 scale-95 active:scale-100">
              Book a Tutor
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-12">
        {/* Section 1: Hero */}
        <section className="relative min-h-[700px] flex items-center overflow-hidden px-12 bg-surface">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary tracking-tight mb-6">
                <span className="block">Bridging the Gap</span>
                <span className="block mt-2 italic font-normal text-secondary">Between You & Success</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-body leading-relaxed mb-8">
                Unlock your potential with one-click expert tutor bookings. Professional mentorship tailored for every class, subject, and national competitive exam.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-primary text-on-primary px-10 py-5 rounded-md text-lg font-medium shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex items-center justify-center group">
                  Find Your Tutor
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button className="px-10 py-5 text-primary border-b-2 border-primary/10 hover:border-primary transition-all text-lg font-medium">
                  Explore Curriculum
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative h-full min-h-[500px]">
              <div className="absolute inset-0 bg-surface-container-low rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img alt="Classical library desk" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-md max-w-[280px]">
                <p className="font-serif italic text-primary text-lg leading-snug">"Eduqra is the gold standard for instant, elite-level academic support."</p>
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

        {/* Section 2: Trust Indicators */}
        <section className="py-12 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-12">
            <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-outline mb-8">Expert Guidance for Classes, Subjects, and National Exams</p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-3 font-serif text-2xl font-bold text-primary">
                <span className="material-symbols-outlined">school</span> OXFORD
              </div>
              <div className="flex items-center gap-3 font-serif text-2xl font-bold text-primary">
                <span className="material-symbols-outlined">architecture</span> HARVARD
              </div>
              <div className="flex items-center gap-3 font-serif text-2xl font-bold text-primary">
                <span className="material-symbols-outlined">history_edu</span> CAMBRIDGE
              </div>
              <div className="flex items-center gap-3 font-serif text-2xl font-bold text-primary">
                <span className="material-symbols-outlined">menu_book</span> STANFORD
              </div>
              <div className="flex items-center gap-3 font-serif text-2xl font-bold text-primary">
                <span className="material-symbols-outlined">account_balance</span> YALE
              </div>
            </div>
          </div>
        </section>

        {/* Find the Right Tutor */}
        <section className="py-16 px-12 bg-white">
          <div className="max-w-screen-2xl mx-auto text-center mb-10">
            <h2 className="text-5xl font-serif font-bold text-primary tracking-tight">Expert Tutors for Every Class and Exam</h2>
          </div>
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: '1', icon: 'school', title: 'Class-wise Support', desc: 'Personalized K-12 coaching for all school standards.' },
              { id: '2', icon: 'menu_book', title: 'Subject Mastery', desc: 'Deep dive into Physics, Chemistry, Math, and Biology.' },
              { id: '3', icon: 'local_hospital', title: 'JEE & NEET Prep', desc: 'Excel in national medical and engineering entrance exams.' },
              { id: '4', icon: 'account_balance', title: 'UPSC & Govt Exams', desc: 'Strategic guidance for national civil service exams.' },
              { id: '5', icon: 'description', title: 'GATE & GRE Coaching', desc: 'Master technical and global graduate entrance tests.' },
              { id: '6', icon: 'language', title: 'Language Learning', desc: 'Learn English, Spanish, French, and professional communication.' },
              { id: '7', icon: 'psychology', title: 'Career Guidance', desc: 'One-on-one sessions to map your professional future.' }
            ].map((item) => (
              <div key={item.id} className="bg-surface-container-low p-6 rounded-lg flex items-start gap-4 hover:shadow-lg transition-all border border-transparent hover:border-primary/10">
                <div className="p-2 bg-primary/5 rounded-md text-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="bg-primary/5 p-6 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/10 transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">trending_flat</span>
              <span className="font-bold text-primary">View All Programs</span>
            </div>
          </div>
        </section>

        {/* Section 3: Why Students Love Eduqra */}
        <section className="py-24 px-12 bg-white">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-tertiary/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-700"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img alt="Personalized Learning" className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg">
                  <p className="text-primary font-serif font-bold italic">"Bridging the Gap to Success"</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-serif font-bold text-primary mb-8 tracking-tight">The Eduqra Advantage</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Global Expertise', desc: 'Connect with mentors from top institutions across the country.' },
                  { title: 'Tailored Pedagogy', desc: 'Each session is built around your specific learning style and syllabus.' },
                  { title: 'Exam Precision', desc: 'Focus specifically on national competitive exams like JEE, NEET, and Boards.' },
                  { title: 'Flexible Scheduling', desc: 'Elite support that fits your lifestyle, available whenever you need it.' }
                ].map((item, idx) => (
                  <li key={idx} className="p-6 rounded-xl border border-primary/5 hover:border-primary/20 hover:bg-surface transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined text-sm font-bold">check_circle</span>
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-primary">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: How It Works */}
        <section className="py-20 px-12 bg-white" id="how-it-works">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-serif font-bold text-primary mb-4">How It Works</h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
              <p className="mt-6 text-on-surface-variant max-w-2xl mx-auto text-lg">A refined, four-step journey toward academic excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { step: '01', title: 'Choose Your Expert', desc: 'Browse our vetted list of subject specialists, class-wise experts, and national exam toppers.' },
                { step: '02', title: 'One-Click Book', desc: 'Instantly schedule a session that fits your timeline with our seamless booking system.' },
                { id: '3', step: '03', title: 'Learn & Grow', desc: 'Engage in interactive, personalized sessions designed to bridge your learning gaps.' },
                { step: '04', title: 'Excel in Exams', desc: 'Achieve top scores in your classes and national exams with confidence and mastery.' }
              ].map((item) => (
                <div key={item.step} className="relative group">
                  <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 rounded-full border border-primary/10 bg-surface flex items-center justify-center text-3xl font-serif font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">{item.step}</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Curriculum */}
        <section className="py-20 px-12 bg-surface-container-low" id="curriculum">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <h2 className="text-5xl font-serif font-bold text-primary leading-tight mb-8">Specialized <br />Curriculum</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-10">Our curriculum is designed to simplify complex concepts and providing students with the tools they need for both school and competitive exams.</p>
                <button className="flex items-center gap-2 font-bold text-primary group">
                  Download Full Prospectus 
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download_for_offline</span>
                </button>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: 'experiment', title: 'Foundation Sciences', desc: 'From middle school basics to advanced Physics and Chemistry, we build strong conceptual foundations.' },
                  { icon: 'draw', title: 'Social Studies & Arts', desc: 'Comprehensive coverage of History, Geography, and Civics, tailored for school boards and entrance exams.' },
                  { icon: 'functions', title: 'Mathematics Excellence', desc: 'Step-by-step guidance for school math, Olympiads, and mathematical reasoning for national tests.' },
                  { icon: 'auto_stories', title: 'Exam Writing Strategies', desc: 'Learn to craft high-scoring answers and manage time effectively for both school and competitive exams.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-4">{item.icon}</span>
                    <h4 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Expert Tutors */}
        <section className="py-20 px-12 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-serif font-bold text-primary">Meet Our Expert Tutors</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Dr. Elizabeth Harmon', subject: 'Physics • NEET Expert', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=75&w=500' },
                { name: 'Dr. Mark Caldwell', subject: 'Mathematics • JEE Specialist', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=75&w=500' },
                { name: 'Rose Chen', subject: 'Biology • K-12 Specialist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=75&w=500' },
                { name: 'Dr. Sarah Sharma', subject: 'Chemistry • GATE Coach', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=75&w=500' }
              ].map((tutor, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden group flex flex-col h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img alt={tutor.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={tutor.img} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif font-bold text-primary">{tutor.name}</h3>
                    <p className="text-sm text-on-surface-variant font-medium mt-1 uppercase tracking-wider">{tutor.subject}</p>
                    <div className="flex items-center gap-1 mt-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                      <span className="text-primary font-bold ml-1 text-sm">5.0</span>
                    </div>
                    <div className="mt-auto">
                    <button className="w-full mt-6 py-3 bg-primary text-on-primary rounded-md font-bold text-sm flex justify-between items-center px-4 group/btn">
                      Book Session
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">chevron_right</span>
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <button className="px-8 py-3 bg-primary/5 text-primary font-bold rounded-md hover:bg-primary/10 transition-all flex items-center gap-2 mx-auto group">
                View All Programs
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">trending_flat</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section: Masterclass */}
        <section className="py-20 px-12 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-4">
                <h2 className="text-5xl font-serif font-bold text-primary leading-tight sticky top-32">
                  A Masterclass <br />in Your Own <br />Progress.
                </h2>
              </div>
              <div className="md:col-span-8 space-y-24">
                {[
                  { num: '01', title: 'Instant Matching', desc: 'Our smart algorithm instantly pairs you with a tutor whose teaching style matches your specific learning needs and class level.' },
                  { num: '02', title: 'Gap Analysis', desc: 'We identify exactly where you are struggling and create a personalized roadmap to bridge those knowledge gaps.' },
                  { num: '03', title: 'Exam Readiness', desc: 'Focus on pattern-based learning and previous year questions to ensure you are 100% ready for national competitive exams.' }
                ].map((item) => (
                  <div key={item.num} className="group relative flex gap-12 items-start">
                    <span className="text-8xl font-serif text-outline-variant/30 leading-none">{item.num}</span>
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                      <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Success Stories */}
        <section id="testimonials" className="py-20 px-12 overflow-hidden bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-5/12 relative mx-auto md:mx-0">
                <div className="aspect-square max-w-sm bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl relative group">
                  <img alt="Students in library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/testimonial.png" />
                  <div className="absolute top-6 right-6">
                    <span className="material-symbols-outlined text-white text-4xl drop-shadow-lg opacity-80 hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-7/12">
                <h2 className="text-5xl font-serif font-bold text-primary mb-12">Voices of Success</h2>
                <div className="space-y-10">
                  <div>
                    <p className="text-2xl font-serif italic text-primary leading-relaxed mb-6">
                      "The one-click booking on Eduqra changed how I study. I could find a specialized Physics tutor for my JEE prep in seconds. The class-wise support made my school subjects so much easier to handle."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center text-white font-serif font-bold">SC</div>
                      <div>
                        <p className="font-bold text-primary">Sophia Chen</p>
                        <p className="text-sm text-outline tracking-wider uppercase">Graduate Student, MPhil Cambridge</p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12 border-l-4 border-surface-container-highest">
                    <p className="text-xl font-serif italic text-on-surface-variant leading-relaxed mb-6">
                      "I finally understood the 'why' behind the equations. My tutor made complex particle physics feel like a narrative we were decoding together."
                    </p>
                    <p className="font-bold text-primary">Marcus Aurelius Thorne</p>
                    <p className="text-sm text-outline tracking-wider uppercase">Undergraduate, MIT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Horizontal Testimonials */}
        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="px-12 max-w-screen-2xl mx-auto overflow-hidden">
            <h3 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Loved by Students Nationwide</h3>
            <div className="flex gap-8 no-scrollbar py-8">
              <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused]">
                {(() => {
                  const items = [
                    { name: "Rahul S.", role: "JEE Aspirant", quote: "Eduqra's physics sessions was the missing piece in my preparation.", initial: "RS" },
                    { name: "Ananya P.", role: "Class 10 Student", quote: "The way complex biology concepts were simplified was amazing.", initial: "AP" },
                    { name: "Vikram K.", role: "NEET Candidate", quote: "Found a brilliant chemistry mentor in minutes. Truly a success platform.", initial: "VK" },
                    { name: "Sneha G.", role: "GATE Aspirant", quote: "Top-notch specialized coaching. Managed to clear my doubts in one session.", initial: "SG" },
                    { name: "Priya M.", role: "UPSC Student", quote: "The writing strategy sessions were exactly what I needed for my mains.", initial: "PM" },
                    { name: "Arjun T.", role: "K-12 Student", quote: "Math doesn't feel scary anymore. My tutor is more like a friendly mentor.", initial: "AT" }
                  ];
                  return [...items, ...items].map((item, i) => (
                    <div key={i} className="min-w-[280px] md:min-w-[340px] h-[240px] bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col">
                      <p className="text-slate-600 font-body text-sm leading-relaxed flex-grow italic">"{item.quote}"</p>
                      <div className="flex items-center gap-3 border-t-2 border-amber-400 pt-4">
                        <div className="w-10 h-10 rounded-full bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-xs shadow-inner">
                          {item.initial}
                        </div>
                        <div>
                          <p className="font-bold text-primary">{item.name}</p>
                          <p className="text-xs text-outline tracking-wider uppercase">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
              <div className="w-2 h-1 bg-slate-200 rounded-full"></div>
              <div className="w-2 h-1 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="py-24 px-12 bg-white" id="faq">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-serif font-bold text-primary mb-4">Common Questions</h2>
              <p className="text-on-surface-variant">Everything you need to know about starting with Eduqra.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: "How are Eduqra tutors selected?", a: "Each tutor undergoes a rigorous 4-step vetting process including subject proficiency tests, demo sessions, and background verification from top academic institutions." },
                { q: "Can I switch tutors if I'm not satisfied?", a: "Absolutely. We offer a 100% satisfaction guarantee. If the chemistry isn't right, we'll help you find a new expert immediately." },
                { q: "Are the sessions recorded for later review?", a: "Yes, every session is recorded and stored in your private dashboard for easy revision before exams." },
                { q: "Do you offer group sessions or only 1-on-1?", a: "While we specialize in intensive 1-on-1 mentorship, we also host small group masterclasses for national exam strategies." },
                { q: "Do you offer a free trial session?", a: "Yes, your first discovery session is always free. This allows you to meet the tutor, discuss your goals, and ensure it's the perfect match before committing." },
                { q: "What subjects and exams do you cover?", a: "We cover all major K-12 subjects and specialize in national competitive exams including JEE (Main & Advanced), NEET, and various board exam preparations." },
                { q: "What equipment do I need for the sessions?", a: "A stable internet connection and a device with a camera/microphone. While phones work, we recommend a laptop or tablet for the best whiteboard interaction." },
                { q: "What are the payment and plan options?", a: "We offer flexible pay-per-session options as well as discounted monthly mastery plans. All major UPI, Cards, and Net Banking methods are supported." }
              ].map((faq, i) => (
                <div key={i} className="group border-b border-primary/10 pb-6 pt-2">
                  <div className="flex justify-between items-center cursor-pointer mb-2">
                    <h3 className="text-lg font-serif font-bold text-primary group-hover:text-amber-600 transition-colors">{faq.q}</h3>
                    <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">expand_more</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed hidden group-hover:block animate-fade-in">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Final CTA */}
        <section className="py-20 px-12 bg-primary">
          <div className="max-w-4xl mx-auto text-center bg-primary editorial-gradient p-12 rounded-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <span className="material-symbols-outlined text-[15rem]">history_edu</span>
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight">Start Your Journey Today</h2>
              <p className="text-primary-fixed text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                Join an elite circle of scholars and redefine what you thought was possible in your academic pursuit.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-tertiary-fixed text-on-tertiary-fixed px-12 py-5 rounded-md font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl">
                  Book Your Initial Consult
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all">
                  View Pricing
                </button>
              </div>
              <p className="mt-12 text-slate-400 text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                100% Satisfaction Guarantee or Your First Session is Free.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 w-full py-8 px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start border-t border-white/10 pt-12">
            <div className="col-span-1 md:col-span-1">
              <div className="text-xl font-serif text-white mb-6">Eduqra</div>
              <p className="font-body leading-relaxed text-sm tracking-wide text-slate-300">
                Empowering students with instant access to elite-level tutoring. bridging the gap between classroom learning and national exam excellence.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs tracking-widest uppercase">Quick Links</h4>
              <ul className="space-y-4">
                <li><a className="font-body leading-relaxed text-sm tracking-wide text-slate-400 hover:text-white hover:underline decoration-amber-400 underline-offset-8 transition-all" href="#">Privacy Policy</a></li>
                <li><a className="font-body leading-relaxed text-sm tracking-wide text-slate-400 hover:text-white hover:underline decoration-amber-400 underline-offset-8 transition-all" href="#">Terms of Service</a></li>
                <li><a className="font-body leading-relaxed text-sm tracking-wide text-slate-400 hover:text-white hover:underline decoration-amber-400 underline-offset-8 transition-all" href="#">Faculty Portal</a></li>
                <li><a className="font-body leading-relaxed text-sm tracking-wide text-slate-400 hover:text-white hover:underline decoration-amber-400 underline-offset-8 transition-all" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs tracking-widest uppercase">Contact</h4>
              <p className="font-body leading-relaxed text-sm tracking-wide text-slate-300">
                Allwyn Colony, Road No 45<br />
                KPHB, Hyderabad<br />
                +91 7337312325<br />
                payakulatarunchandra@gmail.com
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs tracking-widest uppercase">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-400 transition-all duration-300 group">
                  <svg className="w-5 h-5 fill-slate-400 group-hover:fill-blue-950" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-400 transition-all duration-300 group">
                  <svg className="w-5 h-5 fill-slate-400 group-hover:fill-blue-950" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-400 transition-all duration-300 group">
                  <svg className="w-5 h-5 fill-slate-400 group-hover:fill-blue-950" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-body leading-relaxed text-sm tracking-wide text-slate-300 opacity-80">© 2026 Eduqra. All rights reserved.</p>
            <div className="flex items-center gap-2 text-amber-200 text-sm">
              <span className="material-symbols-outlined text-xs">verified</span>
              ISO 9001:2015 Certified Educational Institution
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
