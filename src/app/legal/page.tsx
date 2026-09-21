'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FadeIn, SlideUp } from '@/components/animations/MotionWrappers';
import { SectionLabel } from '@/components/ui/SectionLabel';

function LegalContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'tos' ? 'tos' : 'pp';
  const [activeTab, setActiveTab] = useState<'pp' | 'tos'>(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'tos' || tab === 'pp') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="w-full bg-[#050505] text-[#FFFFFF] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Header section */}
        <SlideUp className="mb-12 text-center flex flex-col items-center">
          <SectionLabel label="LEGAL DOCUMENTS" dotColor="cherry" />
          <h1 className="font-instrument text-5xl sm:text-6xl text-[#FFFFFF] mt-6 mb-4">
            Cherryworks Legal
          </h1>
          <p className="font-manrope text-sm text-[#A09895] uppercase tracking-wider">
            Effective Date: September 22, 2026
          </p>
        </SlideUp>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-[#1C1417] mb-12">
          <button
            onClick={() => setActiveTab('pp')}
            className={`px-6 sm:px-8 py-4 font-manrope font-semibold text-xs sm:text-sm tracking-widest uppercase transition-colors relative ${
              activeTab === 'pp' ? 'text-[#7A0F2E]' : 'text-[#A09895] hover:text-[#FFFFFF]'
            }`}
          >
            Privacy Policy
            {activeTab === 'pp' && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7A0F2E]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('tos')}
            className={`px-6 sm:px-8 py-4 font-manrope font-semibold text-xs sm:text-sm tracking-widest uppercase transition-colors relative ${
              activeTab === 'tos' ? 'text-[#7A0F2E]' : 'text-[#A09895] hover:text-[#FFFFFF]'
            }`}
          >
            Terms & Conditions
            {activeTab === 'tos' && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7A0F2E]" />
            )}
          </button>
        </div>

        {/* Content Area */}
        <FadeIn key={activeTab} className="bg-[#0A0507] p-6 sm:p-12 border border-[#1C1417] rounded-[2px] shadow-sm">
          {activeTab === 'pp' ? <PrivacyPolicyContent /> : <TermsContent />}
        </FadeIn>
        
        <div className="mt-16 text-center text-sm font-lora text-[#A09895]">
          © 2026 Cherryworks Studios.
        </div>
      </div>
    </div>
  );
}

export default function LegalPage() {
  return (
    <Suspense fallback={<div className="w-full bg-[#050505] min-h-screen" />}>
      <LegalContent />
    </Suspense>
  );
}

const PrivacyPolicyContent = () => (
  <div className="legal-content">
    <div className="bg-[#7A0F2E]/10 border-l-2 border-[#7A0F2E] p-5 my-8 font-lora text-[#A09895] text-[15px] leading-relaxed">
      <strong className="text-[#FFFFFF]">Plain-language summary:</strong> We collect only what you give us through our inquiry form or WhatsApp. We do not sell your data. We use Google Workspace to store it securely. You can request deletion at any time.
    </div>

    <div className="space-y-10">
      <section id="pp-1">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">1. Who We Are</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          This Privacy Policy applies to <strong className="text-[#FFFFFF]">Cherryworks Studios</strong> ("Cherryworks," "we," "us," or "our"), a premium digital growth partner providing web development, e-commerce, branding, SEO, social media management, and automation services. Our website is operated at <strong className="text-[#FFFFFF]">cherryworks.studio</strong> (the "Site").
        </p>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          For the purposes of applicable data protection law — including the EU General Data Protection Regulation (GDPR) and, where relevant, the California Consumer Privacy Act (CCPA) — Cherryworks Studios is the data controller in respect of personal data we collect about you.
        </p>
      </section>

      <section id="pp-2">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">2. Information We Collect</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">We collect personal information in the following ways:</p>
        
        <p className="font-lora text-[16px] text-[#FFFFFF] font-semibold mt-6 mb-2">2.1 Information You Provide Directly (Project Inquiry Form)</p>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">When you submit a project inquiry through our Site, we collect:</p>
        <ul className="list-disc pl-5 font-lora text-[16px] text-[#A09895] leading-relaxed mb-6 space-y-2">
          <li>Full name</li>
          <li>Business or brand name</li>
          <li>Email address</li>
          <li>Phone number and/or WhatsApp number</li>
          <li>Current website URL or Instagram handle</li>
          <li>Service(s) required and approximate budget range</li>
          <li>Project goals and requirements (as described by you)</li>
        </ul>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">This information is transmitted securely via a POST request to a <strong className="text-[#FFFFFF]">Google Apps Script</strong> web application and is stored within our Google Workspace environment (typically Google Sheets).</p>

        <p className="font-lora text-[16px] text-[#FFFFFF] font-semibold mt-6 mb-2">2.2 Direct Communication via WhatsApp</p>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">Our Site provides an option to forward your inquiry summary directly to our team via WhatsApp (a service operated by Meta Platforms, Inc.). If you choose to initiate WhatsApp communication, we will process your phone number and any messages you send through WhatsApp. Such communications are subject to Meta's own Privacy Policy in addition to this Policy.</p>

        <p className="font-lora text-[16px] text-[#FFFFFF] font-semibold mt-6 mb-2">2.3 Automatically Collected Information</p>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">When you visit our Site, our hosting infrastructure (Vercel) and analytics tools may automatically collect:</p>
        <ul className="list-disc pl-5 font-lora text-[16px] text-[#A09895] leading-relaxed mb-6 space-y-2">
          <li>IP address and approximate geographic location</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages visited, time on site, and referral URL</li>
          <li>Date and time of access</li>
        </ul>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">This data is collected primarily via server logs and analytics tools and is generally aggregated or pseudonymised.</p>

        <p className="font-lora text-[16px] text-[#FFFFFF] font-semibold mt-6 mb-2">2.4 Information We Do Not Collect</p>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">We do not collect payment card details, passwords, or any special categories of personal data (as defined under GDPR Article 9) through our Site. We do not maintain user accounts or a backend database on our Site.</p>
      </section>

      <section id="pp-3">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">3. How We Use Your Information</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-5 font-lora text-[16px] text-[#A09895] leading-relaxed mb-6 space-y-2">
          <li><strong className="text-[#FFFFFF]">Responding to Inquiries:</strong> To evaluate your project requirements, prepare a proposal, and communicate with you about potential engagement.</li>
          <li><strong className="text-[#FFFFFF]">Service Delivery:</strong> To perform the services agreed upon in any subsequent contract between us.</li>
          <li><strong className="text-[#FFFFFF]">Communication:</strong> To contact you via email, phone, or WhatsApp regarding your inquiry or project status.</li>
          <li><strong className="text-[#FFFFFF]">Business Operations:</strong> To manage our internal records, track project pipelines, and improve our services.</li>
          <li><strong className="text-[#FFFFFF]">Analytics & Site Improvement:</strong> To understand how visitors use our Site, identify technical issues, and optimise content and performance.</li>
          <li><strong className="text-[#FFFFFF]">Legal Compliance:</strong> To comply with applicable laws and respond to lawful requests from public authorities.</li>
        </ul>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">We do not use your personal information for automated decision-making or profiling as defined under GDPR Article 22.</p>
      </section>

      <section id="pp-4">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">4. Legal Bases for Processing (GDPR)</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">Where the GDPR applies to you (e.g., if you are located in the European Economic Area, United Kingdom, or Switzerland), we process your personal data on the following legal bases:</p>
        <ul className="list-disc pl-5 font-lora text-[16px] text-[#A09895] leading-relaxed mb-6 space-y-2">
          <li><strong className="text-[#FFFFFF]">Contractual Necessity (Article 6(1)(b)):</strong> Processing necessary to take steps at your request prior to entering into a contract and to perform our contractual obligations.</li>
          <li><strong className="text-[#FFFFFF]">Legitimate Interests (Article 6(1)(f)):</strong> Processing necessary for our legitimate interests in operating and improving our business, managing client relationships, and preventing fraud — where such interests are not overridden by your rights.</li>
          <li><strong className="text-[#FFFFFF]">Consent (Article 6(1)(a)):</strong> Where we rely on your consent, you may withdraw consent at any time by contacting us.</li>
          <li><strong className="text-[#FFFFFF]">Legal Obligation (Article 6(1)(c)):</strong> Processing necessary to comply with applicable law.</li>
        </ul>
      </section>

      <section id="pp-5">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">5. Cookies & Tracking Technologies</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">Our Site uses cookies and similar tracking technologies. Cookies are small data files placed on your device when you visit our Site.</p>
        <ul className="list-disc pl-5 font-lora text-[16px] text-[#A09895] leading-relaxed mb-6 space-y-2">
          <li><strong className="text-[#FFFFFF]">Essential / Strictly Necessary:</strong> Required for the Site to function. These cannot be disabled.</li>
          <li><strong className="text-[#FFFFFF]">Analytics Cookies:</strong> Used to understand how visitors interact with our Site. These collect anonymised, aggregated data.</li>
          <li><strong className="text-[#FFFFFF]">Functional Cookies:</strong> Remember your preferences to improve your experience.</li>
          <li><strong className="text-[#FFFFFF]">Third-Party Cookies:</strong> Set by services like Google Analytics and Google Tag Manager.</li>
        </ul>
      </section>

      <section id="pp-6">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">6. Third-Party Services & Integrations</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">We use the following third-party services in connection with our Site and operations:</p>
        <ul className="list-disc pl-5 font-lora text-[16px] text-[#A09895] leading-relaxed mb-6 space-y-2">
          <li><strong className="text-[#FFFFFF]">Google Apps Script / Workspace</strong> — To receive and process inquiry form submissions.</li>
          <li><strong className="text-[#FFFFFF]">Google Analytics 4 & Tag Manager</strong> — For website analytics and tracking.</li>
          <li><strong className="text-[#FFFFFF]">WhatsApp & Instagram (Meta)</strong> — For direct communication and social media.</li>
          <li><strong className="text-[#FFFFFF]">Vercel</strong> — Website hosting and infrastructure provider.</li>
        </ul>
      </section>

      <section id="pp-7">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">7. Data Storage & Security</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          Your inquiry data is stored within <strong className="text-[#FFFFFF]">Google Workspace</strong>, which employs industry-standard security measures including encryption at rest and in transit.
        </p>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
        </p>
      </section>

      <section id="pp-14">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">Contact Us</h2>
        <div className="bg-[#1C1417]/50 border border-[#221419] p-6 rounded-[2px] font-lora text-[#A09895]">
          <p className="mb-2">If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
          <p className="mb-0"><strong className="text-[#FFFFFF]">Cherryworks Studios</strong><br/>
          Email: <a href="mailto:cherryworksagency@outlook.com" className="text-[#7A0F2E] hover:underline">cherryworksagency@outlook.com</a><br/>
          WhatsApp: <a href="https://wa.me/91828764745" className="text-[#7A0F2E] hover:underline">+91 82876 4745</a></p>
        </div>
      </section>
    </div>
  </div>
);

const TermsContent = () => (
  <div className="legal-content">
    <div className="bg-[#7A0F2E]/10 border-l-2 border-[#7A0F2E] p-5 my-8 font-lora text-[#A09895] text-[15px] leading-relaxed">
      <strong className="text-[#FFFFFF]">Important:</strong> These Terms govern your use of this website and, together with any separate project agreement or proposal, form the basis of our client relationship. Please read them carefully.
    </div>

    <div className="space-y-10">
      <section id="tc-1">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">1. Acceptance of Terms</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          By accessing or using the website located at <strong className="text-[#FFFFFF]">cherryworks.studio</strong> (the "Site"), submitting a project inquiry, or engaging Cherryworks Studios ("Cherryworks," "we," "us," or "our") for any services, you ("Client," "you," or "your") agree to be bound by these Terms and Conditions ("Terms"), together with our Privacy Policy.
        </p>
      </section>

      <section id="tc-3">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">3. Services</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">Cherryworks offers the following categories of services:</p>
        <ul className="list-disc pl-5 font-lora text-[16px] text-[#A09895] leading-relaxed mb-6 space-y-2">
          <li><strong className="text-[#FFFFFF]">Web Development:</strong> Custom-coded websites built using Next.js and React.</li>
          <li><strong className="text-[#FFFFFF]">E-Commerce Solutions:</strong> Shopify store development and integration.</li>
          <li><strong className="text-[#FFFFFF]">Branding & SEO:</strong> Brand identity, on-page SEO, local SEO.</li>
          <li><strong className="text-[#FFFFFF]">Social Media Management:</strong> Conversion-focused content creation.</li>
          <li><strong className="text-[#FFFFFF]">Automations & Integrations:</strong> WhatsApp routing, booking systems, CRM setup.</li>
        </ul>
      </section>

      <section id="tc-6">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">6. Intellectual Property</h2>
        <p className="font-lora text-[16px] text-[#FFFFFF] font-semibold mt-6 mb-2">6.1 Cherryworks IP</p>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          All content on this Site is the exclusive property of Cherryworks Studios or its licensors and is protected by applicable intellectual property laws.
        </p>
        <p className="font-lora text-[16px] text-[#FFFFFF] font-semibold mt-6 mb-2">6.2 Client Deliverables</p>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          Unless expressly specified in the applicable Project Agreement, upon receipt of full payment, Cherryworks assigns to the Client all rights to the final deliverables created specifically for that Client. Cherryworks retains the right to display the Work Product in its portfolio.
        </p>
      </section>

      <section id="tc-9">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">9. Payment Terms</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          All fees for services are as specified in the applicable Project Agreement or invoice. A deposit is typically required before work commences. Invoices are payable within 7 days of issuance unless otherwise specified.
        </p>
      </section>

      <section id="tc-12">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">12. Limitation of Liability</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4 uppercase">
          To the fullest extent permitted by applicable law, in no event shall Cherryworks Studios be liable for any indirect, incidental, special, consequential, or punitive damages.
        </p>
      </section>

      <section id="tc-17">
        <h2 className="font-instrument text-2xl sm:text-3xl text-[#FFFFFF] mb-4 border-t border-[#1C1417] pt-8">17. Governing Law & Dispute Resolution</h2>
        <p className="font-lora text-[16px] text-[#A09895] leading-relaxed mb-4">
          These Terms shall be governed by and construed in accordance with the laws of India. Any dispute shall be referred to and finally resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 (India).
        </p>
      </section>
    </div>
  </div>
);
