import React from 'react';

const LegalView = ({ title, children, onBack }) => (
  <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
    <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Home
      </button>
      
      <h1 className="text-3xl md:text-4xl font-serif italic text-slate-900 mb-8 border-b border-slate-100 pb-4">
        {title}
      </h1>
      
      <div className="prose prose-slate max-w-none font-body text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

export const PrivacyPolicy = ({ onBack }) => (
  <LegalView title="Privacy Policy" onBack={onBack}>
    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
      <p>At Eduqra, we collect personal information that you provide to us directly, such as your name, email address, phone number, and academic preferences when you register for our services.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">2. How We Use Your Information</h2>
      <p>Your information is used to:</p>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>Facilitate tutor bookings and session scheduling.</li>
        <li>Process payments through our secure partner, Razorpay.</li>
        <li>Send important updates regarding your classes or subscription plans.</li>
        <li>Improve our platform's user experience.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">3. Data Security & Third Parties</h2>
      <p>We do not sell your personal data. We share information only with necessary service providers like <strong>Razorpay</strong> (for payment processing) and <strong>Firebase</strong> (for secure data storage). We do not store your credit card or bank details on our servers.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">4. Your Rights</h2>
      <p>You have the right to access, update, or request the deletion of your personal information at any time by contacting us at contact@eduqra.com.</p>
    </section>
  </LegalView>
);

export const TermsOfService = ({ onBack }) => (
  <LegalView title="Terms of Service" onBack={onBack}>
    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
      <p>By accessing or using the Eduqra platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">2. Subscription Tiers</h2>
      <p>Eduqra offers three tiers of service: Free, Standard, and Premium. Each tier has different features and limits as described on our Pricing page. We reserve the right to modify these features with prior notice.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">3. User Conduct</h2>
      <p>Students and tutors are expected to maintain professional behavior during all sessions. Any form of harassment, cheating, or misuse of the platform will result in immediate account termination without refund.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">4. Limitation of Liability</h2>
      <p>Eduqra acts as a platform to connect students with tutors. While we vet our tutors, we are not liable for any direct or indirect damages arising from the tutoring sessions themselves.</p>
    </section>
  </LegalView>
);

export const RefundPolicy = ({ onBack }) => (
  <LegalView title="Refund & Cancellation Policy" onBack={onBack}>
    <p className="mb-6 italic">Our policy ensures that your learning journey continues smoothly even if plans change. We prioritize rescheduling and credit-based transitions to new tutors.</p>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">1. Cancellation & Account Credits</h2>
      <p className="mb-4">When a session is cancelled, the eligible amount (based on your subscription tier) is first issued as <strong>Eduqra Account Credit</strong>. This allows you to immediately book a session with any other available tutor on our platform.</p>
      
      <div className="space-y-4">
        <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-primary">
          <h3 className="font-bold text-slate-900">Premium Plan</h3>
          <p>Eligible for <strong>40% account credit</strong> of the remaining session value if cancelled at least 10 days before scheduled completion.</p>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400">
          <h3 className="font-bold text-slate-900">Standard Plan</h3>
          <p>Eligible for <strong>20% account credit</strong> of the remaining session value if cancelled at least 10 days before scheduled completion.</p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-200">
          <h3 className="font-bold text-slate-900">Free Plan</h3>
          <p>Sessions under the Free tier are non-refundable and not eligible for account credits.</p>
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">2. Balance Refunds</h2>
      <p>If you choose to use your account credit to book a new tutor whose rate is lower than your original booking, the <strong>remaining balance will be refunded</strong> to your original payment method upon request.</p>
      <p className="mt-2 text-sm text-slate-500">Example: If you have 7,000 in credit and book a new tutor for 6,500, the remaining 500 will be refunded to you.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">3. Tutor-Side Cancellations</h2>
      <p>If a tutor cancels a session, you receive <strong>100% credit</strong> of the session value. You may use this to book another tutor or request a full refund to your original payment method.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">4. Processing Timeline</h2>
      <p>All balance refunds are processed via Razorpay and will reflect in your bank account within <strong>5-7 business days</strong>. Please contact contact@eduqra.com to initiate a balance refund.</p>
    </section>
  </LegalView>
);
