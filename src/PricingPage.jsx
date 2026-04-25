import React, { useState } from 'react';
import { Check, X, Shield, Star, Crown, ChevronRight, ArrowLeft } from 'lucide-react';

const PricingPage = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('schools');

  React.useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  const categories = [
    { id: 'schools', label: 'Schools (K-10)' },
    { id: 'intermediate', label: 'Intermediate (11-12)' },
    { id: 'graduates', label: 'Graduates & Colleges' }
  ];

  const plans = {
    schools: [
      {
        name: 'Basic',
        type: 'Free',
        price: '0',
        period: 'per month',
        description: 'Perfect for getting started with a single focal subject.',
        features: [
          { text: 'Single Subject Access', included: true },
          { text: 'One-on-One Sessions', included: true },
          { text: 'Monthly Payment Cycle', included: true },
          { text: 'Platform Fee Applicable', included: true },
          { text: 'No Added Extra Classes', included: false },
          { text: 'Non-Refundable Plan', included: false },
          { text: 'Assignment Support', included: false }
        ],
        buttonText: 'Start for Free',
        color: 'slate'
      },
      {
        name: 'Standard',
        type: 'Scholar',
        price: '599',
        period: 'every 3 months',
        description: 'Comprehensive support for multiple core subjects.',
        highlight: 'Most Popular',
        features: [
          { text: 'Up to 3 Subjects', included: true },
          { text: 'One-on-One Sessions', included: true },
          { text: '20% Refund Policy (10 days prior)*', included: true },
          { text: 'Extra Doubt Classes', included: true },
          { text: 'Tutor Notes Available', included: true },
          { text: 'No Platform Fee', included: true },
          { text: 'Assignments & Mock Tests', included: false }
        ],
        buttonText: 'Get Standard',
        color: 'blue'
      },
      {
        name: 'Premium',
        type: 'Elite',
        price: '899',
        period: 'every 3 months',
        description: 'The ultimate academic package for complete mastery.',
        features: [
          { text: 'One-on-One Sessions', included: true },
          { text: 'Up to 8 Subjects', included: true },
          { text: '40% Refund Policy (10 days prior)*', included: true },
          { text: 'Extra Classes Available', included: true },
          { text: 'Premium Tutor Notes', included: true },
          { text: 'Assignments & Mock Tests', included: true },
          { text: 'No Platform Fee', included: true }
        ],
        buttonText: 'Go Premium',
        color: 'indigo'
      }
    ],
    intermediate: [
       {
        name: 'Basic',
        type: 'Foundation',
        price: '0',
        period: 'per month',
        description: 'Basic foundational support for one subject.',
        features: [
          { text: 'Single Subject Access', included: true },
          { text: 'One-on-One Sessions', included: true },
          { text: 'Platform Fee Applicable', included: true },
          { text: 'Digital Resources', included: true },
          { text: 'Refund Policy', included: false },
          { text: 'Extra Classes', included: false },
          { text: 'Group Sessions', included: true },
          { text: 'Assignments & Mock Tests', included: false },
          { text: 'Projects', included: false }
        ],
        buttonText: 'Start Now',
        color: 'slate'
      },
      {
        name: 'Standard',
        type: 'Achiever',
        price: '599',
        period: 'every 3 months',
        description: 'Enhanced learning for competitive edge.',
        highlight: 'Best Value',
        features: [
          { text: 'Up to 3 Subjects', included: true },
          { text: 'One-on-One Sessions', included: true },
          { text: '20% Refund Policy (10 days prior)*', included: true },
          { text: 'Extra Doubt Classes', included: true },
          { text: 'No Platform Fee', included: true },
          { text: 'Group Sessions', included: true },
          { text: 'Limited Tutor Notes', included: true },
          { text: 'Assignments & Mock Tests', included: false },
          { text: 'Projects', included: false },
          { text: 'Entrance Exam Strategy', included: false }
        ],
        buttonText: 'Join Standard',
        color: 'blue'
      },
       {
        name: 'Premium',
        type: 'Mastery',
        price: '899',
        period: 'every 3 months',
        description: 'Total prep for Boards and Entrance exams.',
        features: [
          { text: 'All Subjects Included', included: true },
          { text: '40% Refund Policy (10 days prior)*', included: true },
          { text: 'Extra Doubt Classes', included: true },
          { text: 'Unlimited Extra Classes', included: true },
          { text: 'Group Sessions Included', included: true },
          { text: 'Assignments & Mock Tests', included: true },
          { text: 'Entrance Exam Strategy', included: true },
          { text: 'Premium Tutor Notes', included: true },
          { text: 'Projects', included: true },
          { text: 'No Platform Fee', included: true }
        ],
        buttonText: 'Go Premium',
        color: 'indigo'
      }
    ],
    graduates: [
       {
        name: 'Basic',
        type: 'Skill',
        price: '0',
        period: 'per month',
        description: 'Targeted support for specialized topics.',
        features: [
          { text: 'Single Specialization', included: true },
          { text: 'One-on-One Sessions', included: true },
          { text: 'Industry Insights', included: true },
          { text: 'Platform Fee Applies', included: true },
          { text: 'Refunds', included: false },
          { text: 'Group Sessions', included: true },
          { text: 'Internship Leads', included: false }
        ],
        buttonText: 'Start for Free',
        color: 'slate'
      },
      {
        name: 'Standard',
        type: 'Professional',
        price: '599',
        period: 'every 3 months',
        description: 'Advanced curriculum for degree tracks.',
        highlight: 'Recommended',
        features: [
          { text: 'Up to 3 Specialized Subjects', included: true },
          { text: 'One-on-One Mentoring', included: true },
          { text: '20% Refund Policy (10 days prior)*', included: true },
          { text: 'Extra Lab Sessions', included: true },
          { text: 'No Platform Fee', included: true },
          { text: 'Group Sessions', included: true },
          { text: 'Limited Tutor Notes', included: true },
          { text: 'Assignments & Mock Tests', included: false },
          { text: 'Placement Prep', included: false },
          { text: 'Projects', included: false }
        ],
        buttonText: 'Get Standard',
        color: 'blue'
      },
       {
        name: 'Premium',
        type: 'Expert',
        price: '899',
        period: 'every 3 months',
        description: 'Complete professional roadmap and support.',
        features: [
          { text: 'All Semester Subjects', included: true },
          { text: '40% Refund Policy (10 days prior)*', included: true },
          { text: 'Group Sessions Included', included: true },
          { text: 'Extra Classes + Projects', included: true },
          { text: 'Placement Prep', included: true },
          { text: 'No Platform Fee', included: true },
          { text: 'Premium Tutor Notes', included: true },
          { text: 'Assignments & Mock Tests', included: true },
          { text: 'Topic wise tests', included: true },
          { text: 'Doubt Sessions', included: true }
        ],
        buttonText: 'Go Premium',
        color: 'indigo'
      }
    ]
  };

  const currentPlans = plans[activeCategory];

  return (
    <div className="min-h-screen bg-[#FDFCFB] animate-in fade-in duration-700">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-slate-200/60 px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
        <img src="/logo.png" alt="Eduqra" className="h-8 w-auto" />
        <div className="w-24"></div> {/* Spacer */}
      </nav>

      <main className="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 transition-all">Explore plans</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose the perfect learning journey tailored to your academic needs and goals.
          </p>

          {/* Category Toggle */}
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl shadow-inner mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-white text-primary shadow-sm scale-100' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {currentPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col bg-white rounded-[2rem] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border ${
                plan.highlight ? 'border-primary/20 shadow-xl' : 'border-slate-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {plan.highlight}
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 
                  plan.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-600'
                }`}>
                  {plan.name === 'Premium' ? <Crown className="w-6 h-6" /> : 
                   plan.name === 'Standard' ? <Star className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm font-medium text-slate-400 mb-6">{plan.type}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">₹{plan.price}</span>
                  <span className="text-slate-400 text-sm font-medium">{plan.period}</span>
                </div>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-slate-600' : 'text-slate-400'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-md' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section Style Helper */}
        <div className="pt-24 border-t border-slate-200">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Frequently asked questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'When do I need to make the monthly payment?', a: 'Monthly payments must be completed at the very start of the class cycle. Your slot is only confirmed after the payment is successfully processed.' },
              { q: 'Can I change my plan or take a break?', a: 'Yes. After completing your 3-month plan, you can either renew the same plan or choose a different one that better suits your new academic goals.' },
              { q: 'How does the refund policy work?', a: 'We offer a 20% refund for Standard plans and a 40% refund for Premium plans. This is applicable ONLY if the refund is requested at least 10 days before the completion of your classes or course.' },
              { q: 'What payment methods are supported?', a: 'We support all major UPI apps, Debit/Credit cards, and Net Banking for seamless slot confirmation.' }
            ].map((faq, i) => (
              <div key={i} className="group border-b border-slate-100 pb-6">
                <div className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">{faq.q}</h4>
                  <div className="text-slate-400 font-light text-3xl transition-transform duration-300 group-hover:rotate-90">+</div>
                </div>
                <div className="mt-4 text-slate-500 text-sm leading-relaxed hidden group-hover:block transition-all duration-300">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="mt-20 py-12 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest font-bold">
               *Prices shown don’t include applicable tax. Plans are subject to change at Eduqra's discretion.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
