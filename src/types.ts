export type PageRoute =
  | 'home'
  | 'services'
  | 'services/web-development'
  | 'services/social-media'
  | 'services/branding-seo'
  | 'services/ecommerce'
  | 'work'
  | 'about'
  | 'pricing'
  | 'contact';

export interface NavItem {
  label: string;
  route: PageRoute;
  badge?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  billingPeriod?: string;
  isPopular?: boolean;
  tagline?: string;
  deliverables: string[];
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSupporting: string;
  route: PageRoute;
  startingPrice?: string;
  features: string[];
  deliverablesList?: string[];
  packages?: PricingTier[];
  maintenanceNote?: string;
  whatsappMessage: string;
  imgSrc?: string;
  videoSrc?: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  tag: string;
  shortDescription: string;
  fullOverview: string;
  servicesProvided: string[];
  platform: string;
  timeline: string;
  liveUrl?: string;
  highlights: string[];
  imageUrl?: string;
  imagePlaceholderColor: string;
  accentGradient: string;
  techStack?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface InquiryFormData {
  full_name: string;
  business_name: string;
  email: string;
  phone_whatsapp: string;
  website_instagram: string;
  service_required: string;
  budget_range: string;
  project_details: string;
  bot_field?: string;
}
