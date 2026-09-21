import React, { useState } from 'react';
import { InquiryFormData } from '../../types';
import { CheckCircle2, MessageCircle, Send } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';
import { GOOGLE_APPS_SCRIPT_URL } from '../../config/constants';

interface ProjectInquiryFormProps {
  initialService?: string;
  initialBudget?: string;
}

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({
  initialService = 'Web Development',
  initialBudget = '₹25,000–₹50,000',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    full_name: '',
    business_name: '',
    email: '',
    phone_whatsapp: '',
    website_instagram: '',
    service_required: initialService,
    budget_range: initialBudget,
    project_details: '',
    bot_field: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});

  const serviceOptions = [
    'Web Development',
    'Social Media',
    'Branding + SEO',
    'Shopify E-commerce',
    'Multiple Services',
    'Not Sure Yet',
  ];

  const budgetOptions = [
    'Under ₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000–₹1,00,000',
    '₹1,00,000+',
    'Not Sure',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Valid email is required';
    if (!formData.phone_whatsapp.trim())
      newErrors.phone_whatsapp = 'Phone / WhatsApp is required for fast inquiry response';
    if (!formData.service_required.trim())
      newErrors.service_required = 'Please select a service';
    if (!formData.budget_range.trim())
      newErrors.budget_range = 'Please select a budget range';
    if (!formData.project_details.trim())
      newErrors.project_details = 'Please share a brief note about your project goals';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Honeypot check
    if (formData.bot_field) return;

    setIsLoading(true);

    try {
      const urlSearchParams = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        urlSearchParams.append(key, value as string);
      });

      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // fire-and-forget
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlSearchParams,
      });

      // Since mode is no-cors, we can't read response, so assume success if no fetch error
      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      setIsLoading(false);
      // Optional: handle error state here
    }
  };

  const getSummaryWhatsAppText = () => {
    return (
      `*New Project Inquiry for Cherryworks Studios*\n\n` +
      `• *Name:* ${formData.full_name}\n` +
      `• *Brand / Business:* ${formData.business_name || 'N/A'}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Phone / WhatsApp:* ${formData.phone_whatsapp}\n` +
      `• *Website / Instagram:* ${formData.website_instagram || 'N/A'}\n` +
      `• *Service:* ${formData.service_required}\n` +
      `• *Budget Range:* ${formData.budget_range}\n` +
      `• *Project Details:* ${formData.project_details}`
    );
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#7A0F2E] rounded-[2px] space-y-6 text-center animate-fadeIn">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#FDFBF9] border border-[#7A0F2E] flex items-center justify-center text-[#E0A0B0]">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-manrope font-bold uppercase tracking-[0.25em] text-[#7A0F2E]">
            Inquiry Received
          </span>
          <h3 className="font-instrument text-3xl sm:text-4xl text-[#050505]">
            Thanks, {formData.full_name.split(' ')[0]}! Your message has been sent.
          </h3>
          <p className="font-manrope font-medium text-[14px] text-[#7D7578] max-w-md mx-auto leading-relaxed">
            Your project details have been recorded. For the fastest response, you can forward this
            inquiry directly to our team via WhatsApp now.
          </p>
        </div>

        {/* WhatsApp Fast-Forward Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppUrl(getSummaryWhatsAppText())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#7A0F2E] hover:bg-[#8C1835] text-[#FFFFFF] text-xs font-manrope font-bold uppercase tracking-widest rounded-[2px] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Forward to WhatsApp Now →</span>
          </a>

          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full sm:w-auto px-5 py-3.5 border border-[#2B1B22] text-[#7D7578] hover:text-[#050505] text-xs font-manrope font-medium uppercase tracking-widest transition-colors rounded-[2px]"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" id="project-inquiry-form" noValidate>
      {/* Honeypot field (hidden from real users) */}
      <input
        type="text"
        name="bot_field"
        className="hidden"
        style={{ display: 'none' }}
        value={formData.bot_field}
        onChange={(e) => setFormData({ ...formData, bot_field: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Row 1: Name & Business */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-[#7D7578] block">
            Full Name *
          </label>
          <input
            type="text"
            name="full_name"
            placeholder="Jane Doe"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm font-manrope font-medium text-[#3A3537] placeholder-[#4A4045] rounded-[2px] focus:outline-none transition-colors ${
              errors.full_name
                ? 'border-red-500/80 focus:border-red-500'
                : 'border-[#221419] focus:border-[#7A0F2E]'
            }`}
          />
          {errors.full_name && (
            <p className="text-[11px] font-manrope font-medium text-red-400">{errors.full_name}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-[#7D7578] block">
            Business / Brand Name
          </label>
          <input
            type="text"
            name="business_name"
            placeholder="Acme Studio / Persona"
            value={formData.business_name}
            onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
            className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#221419] focus:border-[#7A0F2E] text-sm font-manrope font-medium text-[#3A3537] placeholder-[#4A4045] rounded-[2px] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone/WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-[#7D7578] block">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm font-manrope font-medium text-[#3A3537] placeholder-[#4A4045] rounded-[2px] focus:outline-none transition-colors ${
              errors.email
                ? 'border-red-500/80 focus:border-red-500'
                : 'border-[#221419] focus:border-[#7A0F2E]'
            }`}
          />
          {errors.email && (
            <p className="text-[11px] font-manrope font-medium text-red-400">{errors.email}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-[#7D7578] block">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            name="phone_whatsapp"
            placeholder="+91 98765 43210"
            value={formData.phone_whatsapp}
            onChange={(e) => setFormData({ ...formData, phone_whatsapp: e.target.value })}
            className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm font-manrope font-medium text-[#3A3537] placeholder-[#4A4045] rounded-[2px] focus:outline-none transition-colors ${
              errors.phone_whatsapp
                ? 'border-red-500/80 focus:border-red-500'
                : 'border-[#221419] focus:border-[#7A0F2E]'
            }`}
          />
          {errors.phone_whatsapp && (
            <p className="text-[11px] font-manrope font-medium text-red-400">{errors.phone_whatsapp}</p>
          )}
        </div>
      </div>

      {/* Row 3: Website or Instagram */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-[#7D7578] block">
          Current Website or Instagram Handle (Optional)
        </label>
        <input
          type="text"
          name="website_instagram"
          placeholder="https://yoursite.com or @yourhandle"
          value={formData.website_instagram}
          onChange={(e) => setFormData({ ...formData, website_instagram: e.target.value })}
          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#221419] focus:border-[#7A0F2E] text-sm font-manrope font-medium text-[#3A3537] placeholder-[#4A4045] rounded-[2px] focus:outline-none transition-colors"
        />
      </div>

      {/* Row 4: Service Required Selection */}
      <div className="space-y-2">
        <label className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-[#7D7578] block">
          Service Required *
        </label>
        <input type="hidden" name="service_required" value={formData.service_required} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {serviceOptions.map((srv) => (
            <button
              key={srv}
              type="button"
              onClick={() => setFormData({ ...formData, service_required: srv })}
              className={`p-3 text-left text-xs font-manrope font-medium transition-all rounded-[2px] border ${
                formData.service_required === srv
                  ? 'bg-[#7A0F2E] border-[#7A0F2E] text-[#FFFFFF]'
                  : 'bg-[#FFFFFF] border-[#221419] text-[#7D7578] hover:border-[#382029]'
              }`}
            >
              {srv}
            </button>
          ))}
        </div>
      </div>

      {/* Row 5: Budget Range Selection */}
      <div className="space-y-2">
        <label className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-[#7D7578] block">
          Approximate Budget Range *
        </label>
        <input type="hidden" name="budget_range" value={formData.budget_range} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {budgetOptions.map((bgt) => (
            <button
              key={bgt}
              type="button"
              onClick={() => setFormData({ ...formData, budget_range: bgt })}
              className={`p-3 text-left text-xs font-manrope font-medium transition-all rounded-[2px] border ${
                formData.budget_range === bgt
                  ? 'bg-[#7A0F2E] border-[#7A0F2E] text-[#FFFFFF]'
                  : 'bg-[#FFFFFF] border-[#221419] text-[#7D7578] hover:border-[#382029]'
              }`}
            >
              {bgt}
            </button>
          ))}
        </div>
      </div>

      {/* Row 6: Project Details */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-manrope font-semibold uppercase tracking-wider text-[#7D7578] block">
          Project Goals & Requirements *
        </label>
        <textarea
          name="project_details"
          rows={4}
          placeholder="Describe what you want to build, current challenges, timeline expectations, or links to inspiration..."
          value={formData.project_details}
          onChange={(e) => setFormData({ ...formData, project_details: e.target.value })}
          className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm font-manrope font-medium text-[#3A3537] placeholder-[#4A4045] rounded-[2px] focus:outline-none transition-colors ${
            errors.project_details
              ? 'border-red-500/80 focus:border-red-500'
              : 'border-[#221419] focus:border-[#7A0F2E]'
          }`}
        />
        {errors.project_details && (
          <p className="text-[11px] font-manrope font-medium text-red-400">{errors.project_details}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F4F0EC] text-[#050505] hover:bg-[#EAE4E1] hover:shadow-[0_0_24px_rgba(244,240,236,0.2)] disabled:opacity-70 disabled:cursor-not-allowed text-xs font-manrope font-bold uppercase tracking-[0.16em] transition-all rounded-[2px]"
        >
          {isLoading ? (
            <span className="w-3.5 h-3.5 border-2 border-[#050505]/20 border-t-[#050505] rounded-full animate-spin"></span>
          ) : (
            <Send className="w-3.5 h-3.5" />
          )}
          <span>{isLoading ? 'Sending...' : 'Send Inquiry →'}</span>
        </button>

        <a
          href={getWhatsAppUrl("Hi Cherryworks Studios, I'd like to chat directly about a new project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-manrope font-semibold uppercase tracking-wider text-[#E0A0B0] hover:text-[#FFFFFF] flex items-center gap-2 transition-colors py-2 px-3 rounded-[2px] hover:bg-[#7A0F2E]/20"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#E0A0B0]" />
          <span>Or Chat on WhatsApp Directly →</span>
        </a>
      </div>
    </form>
  );
};
