import React from 'react';

const LegalView = ({ title, navItems, children, onBack }) => (
  <div className="min-h-screen bg-[#F8FAFC] pb-12">
    {/* Navigation Header */}
    <div className="bg-white border-b border-slate-100 sticky top-0 z-30 px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#5D2FCC] font-bold hover:gap-3 transition-all group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Home
        </button>
        <div className="flex items-center gap-2 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-blue-100 bg-blue-50">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          Official Policy
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto pt-8 px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
      {/* Side Navigation */}
      <div className="hidden lg:block w-64 shrink-0 sticky top-28 h-fit bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="space-y-3">
          <div className="text-[10px] font-black text-[#5D2FCC] uppercase tracking-[0.2em] mb-4">Document Navigation</div>
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="block text-slate-500 hover:text-[#5D2FCC] transition-colors font-semibold text-base py-1"
            >
              {item.label}
            </a>
          ))}
          <a href="#support" className="block text-slate-400 hover:text-[#5D2FCC] transition-colors font-semibold text-base pt-3 border-t border-slate-50">Support</a>
        </div>
      </div>

      {/* Main Document Content Area */}
      <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Title Header - Reduced Bottom Padding */}
        <div className="p-8 md:p-10 md:pb-6 bg-slate-50/50 border-b border-slate-100">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-2 tracking-tight scroll-mt-32" id="overview">
            {title}
          </h1>
          <p className="text-slate-400 font-medium m-0">Effective Date: May 01, 2026</p>
        </div>
        
        <div className="p-8 md:p-12 pt-6 md:pt-8 prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-[#202020] prose-p:text-slate-600 prose-p:leading-relaxed prose-headings:m-0">
          {children}
          
          {/* Dedicated Support Section */}
          <div className="mt-12 pt-10 border-t border-slate-100 scroll-mt-32" id="support">
             <h2 className="text-2xl font-serif font-bold text-[#5D2FCC] mb-4">Legal Support</h2>
             <p className="text-slate-600 text-lg leading-relaxed mb-6">
               If you have any questions regarding these {title} clauses, please contact our team.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F0F7FF] border border-blue-100">
                  <span className="material-symbols-outlined text-[#004AAD] text-xl">mail</span>
                  <span className="font-bold text-slate-700 text-sm">contact@eduqra.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F3FF] border border-purple-100">
                  <span className="material-symbols-outlined text-[#5D2FCC] text-xl">support_agent</span>
                  <span className="font-bold text-slate-700 text-sm">9 AM - 6 PM (Mon-Fri)</span>
                </div>
             </div>
          </div>
        </div>

        {/* Realistic Trust Icons Footer */}
        <div className="bg-slate-50/50 p-8 border-t border-slate-100">
          <div className="flex justify-center gap-10 md:gap-16 mb-6">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-4xl text-[#0EA5E9]" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
              <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400">Secure</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-4xl text-[#92400E]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
              <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400">Legal</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-4xl text-[#10B981]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PrivacyPolicy = ({ onBack }) => (
  <LegalView 
    title="Privacy Policy" 
    onBack={onBack}
    navItems={[
      { id: 'overview', label: 'Overview' },
      { id: 'data-collection', label: 'Data Collection' },
      { id: 'security', label: 'Security Protocols' }
    ]}
  >
    <h2 id="data-collection" className="scroll-mt-32 text-[#5D2FCC] border-b-2 border-[#5D2FCC]/10 pb-1 mb-6 mt-4">Data Collection & Usage</h2>
    <h3 className="mt-8 mb-4">1. Information We Collect</h3>
    <p>At Eduqra, we collect personal information that you provide to us directly, such as your name, email address, phone number, and academic preferences when you register for our services.</p>

    <h3 className="mt-8 mb-4">2. How We Use Your Information</h3>
    <p>Your information is used to facilitate tutor bookings, manage your subscription plans, and ensure you receive timely updates about your sessions.</p>

    <h2 id="security" className="scroll-mt-32 text-[#5D2FCC] border-b-2 border-[#5D2FCC]/10 pb-1 mb-6 mt-12">Security Protocols</h2>
    <h3 className="mt-8 mb-4">3. Payment Security & Verification</h3>
    <p>We prioritize the security of your financial data. All payment transactions are encrypted and processed through industry-standard secure gateways. We do not store your sensitive payment information on our local servers.</p>
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl">
      <p className="m-0 text-blue-900 font-medium">
        Every payment undergoes a multi-step verification process to prevent fraud and ensure that your transactions are authorized and secure.
      </p>
    </div>

    <h3 className="mt-8 mb-4">4. User Data Integrity</h3>
    <p>Your personal data is protected using advanced encryption methods and secure storage protocols. We implement strict access controls to ensure that your information is only accessible to authorized personnel for service delivery purposes.</p>
  </LegalView>
);

export const TermsOfService = ({ onBack }) => (
  <LegalView 
    title="Terms of Service" 
    onBack={onBack}
    navItems={[
      { id: 'overview', label: 'Agreement Overview' },
      { id: 'user-terms', label: 'User Conduct' },
      { id: 'subscription', label: 'Subscription Tiers' }
    ]}
  >
    <h2 id="user-terms" className="scroll-mt-32 text-[#5D2FCC] border-b-2 border-[#5D2FCC]/10 pb-1 mb-6 mt-4">User Conduct & Terms</h2>
    <h3 className="mt-8 mb-4">1. Acceptance of Terms</h3>
    <p>By accessing or using the Eduqra platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

    <h3 className="mt-8 mb-4">2. Professional Behavior</h3>
    <p>Students and tutors are expected to maintain professional behavior during all sessions. Any form of harassment, cheating, or misuse of the platform will result in immediate account termination without refund.</p>

    <h2 id="subscription" className="scroll-mt-32 text-[#5D2FCC] border-b-2 border-[#5D2FCC]/10 pb-1 mb-6 mt-12">Subscription & Membership</h2>
    <h3 className="mt-8 mb-4">3. Tier Benefits</h3>
    <p>Eduqra offers three tiers of service: Free, Standard, and Premium. Each tier has different features and limits as described on our Pricing page. We reserve the right to modify these features with prior notice.</p>

    <h3 className="mt-8 mb-4">4. Limitation of Liability</h3>
    <p>Eduqra acts as a platform to connect students with tutors. While we vet our tutors, we are not liable for any direct or indirect damages arising from the tutoring sessions themselves.</p>
  </LegalView>
);

export const RefundPolicy = ({ onBack }) => (
  <LegalView 
    title="Refund & Cancellation Policy" 
    onBack={onBack}
    navItems={[
      { id: 'overview', label: 'Policy Overview' },
      { id: 'credits', label: 'Account Credits' },
      { id: 'rules', label: 'Refund Timelines' }
    ]}
  >
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
      <p className="italic text-lg text-slate-700 m-0 leading-relaxed">
        "Our policy ensures that your learning journey continues smoothly even if plans change. We prioritize rescheduling and credit-based transitions to new tutors."
      </p>
    </div>

    <h2 id="credits" className="scroll-mt-32 text-[#5D2FCC] border-b-2 border-[#5D2FCC]/10 pb-1 mb-6 mt-4">Account Credits & Eligibility</h2>
    <h3 className="mt-8 mb-4">1. Cancellation Credits</h3>
    <p>When a session is cancelled, the eligible amount (based on your subscription tier) is first issued as <strong>Eduqra Account Credit</strong>. This allows you to immediately book a session with any other available tutor on our platform.</p>
    
    <div className="my-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-3 font-bold text-slate-700 text-sm">Subscription Tier</th>
            <th className="px-6 py-3 font-bold text-slate-700 text-sm">Account Credit Eligibility</th>
            <th className="px-6 py-3 font-bold text-slate-700 text-sm">Condition</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          <tr>
            <td className="px-6 py-4 font-bold text-[#5D2FCC]">Premium Plan</td>
            <td className="px-6 py-4">40% Account Credit</td>
            <td className="px-6 py-4 text-slate-500">10 days before completion</td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-bold text-[#004AAD]">Standard Plan</td>
            <td className="px-6 py-4">20% Account Credit</td>
            <td className="px-6 py-4 text-slate-500">10 days before completion</td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-bold text-slate-400">Free Plan</td>
            <td className="px-6 py-4 text-slate-400">Not Eligible</td>
            <td className="px-6 py-4 text-slate-400">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="rules" className="scroll-mt-32 text-[#5D2FCC] border-b-2 border-[#5D2FCC]/10 pb-1 mb-6 mt-12">Refund Rules & Timelines</h2>
    <h3 className="mt-8 mb-4">2. Balance Refunds</h3>
    <p>If you choose to use your account credit to book a new tutor whose rate is lower than your original booking, the <strong>remaining balance will be refunded</strong> to your original payment method upon request.</p>
    <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl text-amber-900 font-medium my-6 flex gap-4 items-start">
      <span className="material-symbols-outlined text-amber-600">lightbulb</span>
      <span className="text-sm"><strong>Example:</strong> If you have 7,000 in credit and book a new tutor for 6,500, the remaining 500 will be refunded.</span>
    </div>

    <h3 className="mt-8 mb-4">3. Tutor-Side Cancellations</h3>
    <p>If a tutor cancels a session, you receive 100% credit of the session value. You may use this credit to book another tutor on the Eduqra platform.</p>

    <h3 className="mt-8 mb-4">4. Processing Timeline</h3>
    <p>All balance refunds are processed securely and will reflect in your bank account within 5-7 business days. Please contact contact@eduqra.com to initiate a balance refund.</p>
  </LegalView>
);
