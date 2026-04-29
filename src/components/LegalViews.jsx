import React from 'react';

const LegalView = ({ title, children, onBack }) => (
  <div className="min-h-screen bg-white pt-8 pb-10 px-6 md:px-12 lg:px-24 xl:px-32">
    <div className="max-w-5xl">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-bold mb-6 hover:gap-3 transition-all group"
      >
        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
        Back to Home
      </button>
      
      <h1 className="text-4xl md:text-6xl font-serif italic text-slate-900 mb-6 border-b border-slate-100 pb-4">
        {title}
      </h1>
      
      <div className="prose prose-xl prose-slate max-w-none font-body text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

export const PrivacyPolicy = ({ onBack }) => (
  <LegalView title="Privacy Policy" onBack={onBack}>
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Information We Collect</h2>
      <p>At Eduqra, we collect personal information that you provide to us directly, such as your name, email address, phone number, and academic preferences when you register for our services.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">2. How We Use Your Information</h2>
      <p>Your information is used to facilitate tutor bookings, manage your subscription plans, and ensure you receive timely updates about your sessions.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">3. Payment Security &amp; Verification</h2>
      <p>We prioritize the security of your financial data. All payment transactions are encrypted and processed through industry-standard secure gateways. We do not store your sensitive payment information (like credit card numbers) on our local servers.</p>
      <p className="mt-3">Every payment undergoes a multi-step verification process to prevent fraud and ensure that your transactions are authorized and secure. This includes secure authentication and real-time monitoring of all booking payments.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">4. Data Protection</h2>
      <p>Your personal data is protected using advanced encryption methods and secure storage protocols. We implement strict access controls to ensure that your information is only accessible to authorized personnel for service delivery purposes. We are committed to maintaining the confidentiality and integrity of your profile at all times.</p>
    </section>
  </LegalView>
);

export const TermsOfService = ({ onBack }) => (
  <LegalView title="Terms of Service" onBack={onBack}>
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Acceptance of Terms</h2>
      <p>By accessing or using the Eduqra platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">2. Subscription Tiers</h2>
      <p>Eduqra offers three tiers of service: Free, Standard, and Premium. Each tier has different features and limits as described on our Pricing page. We reserve the right to modify these features with prior notice.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">3. User Conduct</h2>
      <p>Students and tutors are expected to maintain professional behavior during all sessions. Any form of harassment, cheating, or misuse of the platform will result in immediate account termination without refund.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">4. Limitation of Liability</h2>
      <p>Eduqra acts as a platform to connect students with tutors. While we vet our tutors, we are not liable for any direct or indirect damages arising from the tutoring sessions themselves.</p>
    </section>
  </LegalView>
);

export const RefundPolicy = ({ onBack }) => (
  <LegalView title="Refund &amp; Cancellation Policy" onBack={onBack}>
    <p className="mb-6 italic text-xl">Our policy ensures that your learning journey continues smoothly even if plans change. We prioritize rescheduling and credit-based transitions to new tutors.</p>

    <section className="mb-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">1. Cancellation &amp; Account Credits</h2>
      <p className="mb-4 text-lg">When a session is cancelled, the eligible amount (based on your subscription tier) is first issued as <strong>Eduqra Account Credit</strong>. This allows you to immediately book a session with any other available tutor on our platform.</p>
      
      <div className="space-y-5 ml-6 border-l-2 border-slate-100 pl-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">• Premium Plan</h3>
          <p className="text-lg">Eligible for <strong>40% account credit</strong> of the remaining session value if cancelled at least 10 days before scheduled completion.</p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">• Standard Plan</h3>
          <p className="text-lg">Eligible for <strong>20% account credit</strong> of the remaining session value if cancelled at least 10 days before scheduled completion.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">• Free Plan</h3>
          <p className="text-lg">Sessions under the Free tier are non-refundable and not eligible for account credits.</p>
        </div>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">2. Balance Refunds</h2>
      <p>If you choose to use your account credit to book a new tutor whose rate is lower than your original booking, the <strong>remaining balance will be refunded</strong> to your original payment method upon request.</p>
      <p className="mt-3 bg-slate-50 p-5 rounded-lg text-slate-600">
        <strong>Example:</strong> If you have 7,000 in credit and book a new tutor for 6,500, the remaining 500 will be refunded to you.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">3. Tutor-Side Cancellations</h2>
      <p>If a tutor cancels a session, you receive 100% credit of the session value. You may use this credit to book another tutor on the Eduqra platform.</p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3">4. Processing Timeline</h2>
      <p>All balance refunds are processed securely and will reflect in your bank account within 5-7 business days. Please contact contact@eduqra.com to initiate a balance refund.</p>
    </section>
  </LegalView>
);

