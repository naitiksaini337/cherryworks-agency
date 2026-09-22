import { FAQItem, PortfolioProject, PricingTier, ServiceDetail } from '../types';

export const BRAND = {
  name: 'Cherryworks Studios',
  shortName: 'Cherryworks',
  tagline: 'Build beautifully. Grow intelligently.',
  subtitle: 'Digital experiences built to make your brand grow.',
  description:
    'Cherryworks is a digital growth studio helping ambitious brands build high-converting websites, stronger identities, smarter social systems, search visibility, and e-commerce experiences.',
  positioning: 'A premium, minimal, conversion-focused digital growth studio.',
  location: 'India / Worldwide',
  email: 'hello@cherryworks.in',
  whatsappNumber: '+918287464745',
  whatsappDisplay: '+91 8287464745 (WhatsApp Inquiries)',
};

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    shortDescription:
      'Custom websites built around your business, your brand, and your conversion goals.',
    heroHeadline: 'Your website should work as hard as your business.',
    heroSupporting:
      'Custom business websites designed around your brand, your customers, and your conversion goals. Built with high performance, semantic architecture, and seamless integrations.',
    route: 'services/web-development',
    startingPrice: '₹12,000',
    features: [
      'Fully functional bespoke web architecture',
      'Proper technical & semantic SEO foundation',
      'Branding and visual consistency across all breakpoints',
      'Google integrations (Analytics, Search Console, Tag Manager)',
      'Direct WhatsApp conversion routing & chat triggers',
      'Custom Excel / Google Sheets client-data workflow',
      'Automated booking and lead capture setup',
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹12,000',
        billingPeriod: 'One-time build',
        tagline: 'Establish your presence. Note: Missing advanced SEO, fast speeds, and automated lead capture needed for serious ROI.',
        deliverables: [
          '1-3 pages (Template-based design) & Mobile responsive',
          'Basic SEO (meta tags, keywords, sitemap)',
          'Standard Contact form + Email routing',
          'Business hours, location & Google My Business setup',
          'Basic Analytics setup',
          '3-5 day delivery & 1 month support',
        ],
      },
      {
        name: 'Starter',
        price: '₹20,000',
        billingPeriod: 'One-time build',
        isPopular: true,
        tagline: 'The Sweet Spot. For just ₹8k more, unlock advanced SEO, appointment booking, and automation that turns visitors into actual leads.',
        deliverables: [
          '5-6 pages with advanced mobile optimization',
          'Advanced SEO package (content strategy) + Free audit',
          'Multiple contact forms + Email automation & Appointment booking',
          'Google My Business + local SEO & Schema markup',
          'Blog setup (3 posts) & Testimonials section',
          'Speed optimization & Advanced conversion tracking',
          '7-10 day delivery & 2 months support (includes 1 free SEO update)',
        ],
      },
      {
        name: 'Premium',
        price: '₹47,000',
        billingPeriod: 'One-time build',
        tagline: 'The Revenue Engine. Get 3x the firepower for 2.3x the investment. Stand out with bespoke animations, AI features, and a built-in CRM.',
        deliverables: [
          '12-15 pages with bespoke custom branding (React/Next.js)',
          'Custom animations, interactive elements & Video integration',
          'AI-powered SEO & content optimization + Free advanced strategy session',
          'Advanced booking, payment system & CRM integration (Lead dashboard)',
          'Free professional copywriting & Blog with AI recommendations',
          'Advanced contact forms, Email + SMS automation',
          'Advanced analytics (funnel tracking, heat mapping) & Advanced schema',
          'PWA/mobile app ready, Security hardening & CDN global optimization',
          '14-21 day delivery & 3 months support (monthly reports + quarterly sessions)',
        ],
      },
      {
        name: 'Custom',
        price: 'Bespoke',
        billingPeriod: 'Project-Based',
        tagline: 'Unlimited possibilities. Custom software, proprietary integrations, and bespoke AI features built exclusively for market leaders.',
        deliverables: [
          'Unlimited pages, full custom development & Custom software',
          'Proprietary integrations & Unlimited APIs',
          'Advanced AI features & Custom bespoke animations',
          'Database architecture & Membership/subscription systems',
          'E-commerce capabilities & Multi-language support',
          'Unlimited SEO enhancements & Advanced security',
          '6-12 months support with weekly sessions & Dedicated account manager',
        ],
      },
    ],
    maintenanceNote:
      'Optional monthly maintenance available from ₹4,000–₹8,000/month (includes website maintenance, content updates, basic SEO updates, bug fixes, and integration monitoring).',
    whatsappMessage: "Hi Cherryworks, I'm interested in Custom Web Development.",
    imgSrc: '/images/animated/web.jpeg',
    videoSrc: 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/12.mp4',
  },
  {
    id: 'social-media',
    number: '02',
    title: 'Social Media Management',
    shortDescription:
      'AI-assisted content, management, and automation designed to help your brand stay visible and consistent.',
    heroHeadline: 'Turn your social presence into a growth system.',
    heroSupporting:
      'AI-assisted social media management for creators, personal brands, and growing businesses looking to dominate feeds with intent and automated lead capture.',
    route: 'services/social-media',
    startingPrice: '₹5,000',
    features: [
      'DM automation for instant lead qualification',
      'Curated account management & aesthetic styling',
      'High-converting editorial carousels',
      'Content mentorship and strategic positioning',
      'Cinematic reels with professional rhythm and editing',
      'Daily story workflows to nurture followers into buyers',
    ],
    packages: [
      {
        name: 'Starter',
        price: '₹5,000',
        billingPeriod: 'One-time setup / Starter',
        tagline: 'Ideal for initial launch and direct lead capture setup',
        deliverables: [
          'DM automation setup',
          'Curated social media setup & profile curation',
          'Branding support & bio optimization',
          'Initial content strategy guide',
        ],
      },
      {
        name: 'Basic',
        price: '₹18,000',
        billingPeriod: '/month',
        isPopular: true,
        tagline: 'Consistent visibility and dedicated monthly management',
        deliverables: [
          'DM automation workflows',
          'Curated account management & profile curation',
          '15 highly edited Reels',
          '15 Stories',
          'Content mentorship & guidance',
        ],
      },
      {
        name: 'Advanced',
        price: '₹32,000',
        billingPeriod: '/month',
        tagline: 'Maximum growth velocity and content production',
        deliverables: [
          'Advanced DM automation & lead routing',
          'Complete curated account management & profile curation',
          '30 Highly edited Reels',
          '30 Custom-made Reels',
          '30 Stories',
          '5 High-impact carousels',
          'Dedicated strategic content mentorship',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        billingPeriod: 'Bespoke',
        tagline: 'Bespoke video packages with a personalized touch for market leaders.',
        deliverables: [
          'Custom quotation & bespoke strategy',
          'Custom video packages with personalized touch',
          'Enterprise-grade DM automation & CRM routing',
          'Full dedicated profile curation and management',
        ],
      },
    ],
    maintenanceNote:
      'Ongoing content maintenance and engagement scaling is baked directly into our monthly retainers. We handle the posting, aesthetic matching, and community interactions so you can focus on building your business.',
    whatsappMessage: "Hi Cherryworks, I'm interested in Social Media Management.",
    imgSrc: '/images/animated/social.jpeg',
    videoSrc: 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/10.mp4',
  },
  {
    id: 'branding-seo',
    number: '03',
    title: 'Branding + SEO',
    shortDescription:
      'Build a stronger identity while improving how customers discover you across search and AI-powered discovery.',
    heroHeadline: 'Be recognizable. Be discoverable.',
    heroSupporting:
      'Build a stronger brand while improving how customers find you through traditional search engines and next-generation AI/LLM discovery engines.',
    route: 'services/branding-seo',
    startingPrice: '₹5,000/month',
    features: [
      'Comprehensive on-page technical SEO',
      'Google Business Profile curation & local dominance',
      'AI & LLM search optimization (Perplexity, ChatGPT, Gemini readiness)',
      'Strategic brand rebranding & visual guidelines',
      'Targeted keyword and search intent architecture',
      'Ongoing ranking audits and discoverability mentorship',
    ],
    packages: [
      {
        name: 'Starter',
        price: '₹5,000',
        billingPeriod: '/month',
        tagline: 'Foundational visibility & positioning clarity',
        deliverables: [
          'Basic on-page SEO optimization',
          'Branding mentorship & tone direction',
          'Meta tags and keyword mapping',
          'Monthly performance report',
        ],
      },
      {
        name: 'Basic',
        price: '₹8,000',
        billingPeriod: '/month',
        isPopular: true,
        tagline: 'Comprehensive local and search authority',
        deliverables: [
          'Complete on-page SEO optimization',
          'Google Business Profile curation & ranking',
          'AI / LLM search engine optimization',
          'Content structure recommendations',
        ],
      },
      {
        name: 'Advanced',
        price: '₹14,000',
        billingPeriod: '/month',
        tagline: 'Full brand transformation & multi-channel discovery',
        deliverables: [
          'Complete on-page SEO overhaul',
          'Comprehensive brand rebranding & visual system',
          'Google Business Profile high-ranking curation',
          'Advanced AI / LLM search engine indexing',
          'Competitor search intent intelligence',
        ],
      },
    ],
    maintenanceNote:
      'Continuous ranking support is built into our packages, covering monthly backlink audits, local SEO schema updates, content freshness checks, and competitor gap analysis to keep your brand at the top.',
    whatsappMessage: "Hi Cherryworks, I'm interested in Branding + SEO.",
    imgSrc: '/images/animated/seo.jpeg',
    videoSrc: 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/11.mp4',
  },
  {
    id: 'ecommerce',
    number: '04',
    title: 'Shopify E-commerce',
    shortDescription:
      'Shopify stores designed to look premium, work smoothly, and convert visitors into customers.',
    heroHeadline: 'Build a store people want to buy from.',
    heroSupporting:
      'Premium Shopify storefronts designed around product presentation, seamless checkout experience, essential app integrations, and higher average order value.',
    route: 'services/ecommerce',
    startingPrice: '₹15,000',
    features: [
      'Bespoke Liquid-based custom Shopify architecture',
      'Flawless payment gateway, shipping, and pixel integrations',
      'High-converting checkout & dynamic coupon setup',
      'Customized product imagery and art-directed video assets',
      'Automated email workflows for lead recovery and post-purchase',
      'Comprehensive monthly store maintenance & speed optimization',
    ],
    packages: [
      {
        name: 'LaunchPad',
        price: '₹15,000',
        billingPeriod: 'One-time build',
        tagline: 'Perfect for testing products. Get online fast, but missing critical email recovery that often loses ₹3-5k monthly.',
        deliverables: [
          '1 product showcase with Custom landing & product pages',
          'Mobile responsive design & Basic Shopify setup',
          'Payment gateway (Razorpay/PayPal) & Analytics setup',
          'Basic SEO, Contact form + Email capture',
          'Basic product photography & Product reviews',
          'Mobile-optimized checkout',
          '5-7 day delivery & 1 month basic support',
        ],
      },
      {
        name: 'Growth Hub',
        price: '₹25,000',
        billingPeriod: 'One-time build',
        isPopular: true,
        tagline: 'The Sweet Spot. 25x more products, conversion tracking, and email automation to recover lost sales for just ₹10k more.',
        deliverables: [
          'Up to 25 products with advanced mobile optimization',
          'Professional theme customization & Upsell page',
          'Advanced SEO package + Free SEO audit (₹4k value)',
          'Email marketing setup (Mailchimp/Klaviyo) & Cart recovery',
          'Payment gateway integration & Order tracking system',
          'Speed optimization & Schema markup for products',
          '10-14 day delivery, 2 months support + 1 free email campaign',
        ],
      },
      {
        name: 'Powerhouse',
        price: '₹47,000',
        billingPeriod: 'One-time build',
        tagline: 'Enterprise Grade. 4x more products, AI descriptions, video integration (80% conversion boost) & Loyalty programs.',
        deliverables: [
          'Up to 100+ products with bespoke Shopify theme design',
          'Full landing page ecosystem & Advanced mobile optimization (PWA)',
          'AI-powered product descriptions & recommendations',
          'Advanced SEO strategy + Free audit report (₹5k value)',
          'Email + SMS automation (welcome, abandoned cart, post-purchase)',
          'Free professional copywriting (homepage, emails, products)',
          'Advanced analytics dashboard (funnels, heatmaps) & GA4',
          'Video product showcase, Loyalty program & Security hardening',
          '14-21 day delivery, 3 months dedicated support + Monthly reports',
        ],
      },
      {
        name: 'Custom',
        price: 'Bespoke',
        billingPeriod: 'Project-Based',
        tagline: 'Fully tailored scale. Custom features, proprietary integrations, and premium 24/7 support for market leaders.',
        deliverables: [
          'Unlimited products & Fully custom Shopify development',
          'Proprietary integrations (ERP, CRM, accounting)',
          'Advanced AI features (chatbot, predictive inventory)',
          'Custom animations, Custom software & API integrations',
          'Multi-vendor marketplace, B2B wholesale or Subscription setup',
          'International multi-currency & Multi-language localization',
          '6-12 months dedicated support with weekly strategy sessions',
        ],
      },
    ],
    maintenanceNote:
      'Monthly maintenance packages available from ₹2,000–₹5,000/month. Special pricing available for student side hustles, campus resell operations, and digital product launches—DM us for discount codes.',
    whatsappMessage: "Hi Cherryworks, I'm interested in Shopify development.",
    imgSrc: '/images/animated/ecom.jpeg',
    videoSrc: 'https://res.cloudinary.com/w5vliur5/video/upload/f_auto,q_auto/13.mp4',
  },
];

export const WHY_CHERRYWORKS = [
  {
    number: '01',
    title: 'AI-Assisted Workflows',
    description:
      'We use artificial intelligence where it genuinely improves speed, consistency, research, content generation, and execution precision — without sacrificing human taste.',
    imgSrc: '/images/animated/ai_workflows_cherry_1788300621903.jpg',
  },
  {
    number: '02',
    title: 'Built for Conversion',
    description:
      'Every website, campaign, and digital experience is architected with a direct business purpose: turning curious visitors into inquiries, leads, and paying customers.',
    imgSrc: '/images/animated/conversion_cherry_1788300631408.jpg',
  },
  {
    number: '03',
    title: 'Automation-First',
    description:
      'We connect lead capture, customer communication, appointment booking, spreadsheets, and follow-up sequences wherever automation saves you hours and closes deals faster.',
    imgSrc: '/images/animated/automation_cherry_1788300643563.jpg',
  },
  {
    number: '04',
    title: 'Brand + Performance',
    description:
      'Beautiful editorial design is only valuable when it produces measurable business outcomes. We fuse high aesthetic standards with rigorous commercial execution.',
    imgSrc: '/images/animated/brand_performance_cherry_1788300654055.jpg',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Deep commercial understanding',
    description:
      'We analyze your business model, target audience, core offer, unit economics, and existing digital footprint to map out the highest-leverage growth strategy.',
    imgSrc: '/images/animated/discover_process_cherry_1788300678957.jpg',
  },
  {
    step: '02',
    title: 'Build',
    tagline: 'Meticulous engineering & design',
    description:
      'We craft the custom website, brand identity, social content framework, Shopify storefront, or automated lead capture infrastructure with zero bloat.',
    imgSrc: '/images/animated/build_process_cherry_1788300693031.jpg',
  },
  {
    step: '03',
    title: 'Optimize',
    tagline: 'Conversion & discovery refinement',
    description:
      'We fine-tune the messaging, on-page SEO, AI search discoverability, checkout flow, email automation, and customer journey for maximum conversion rate.',
    imgSrc: '/images/animated/optimize_process_cherry_1788300716877.jpg',
  },
  {
    step: '04',
    title: 'Scale',
    tagline: 'Continuous systemic compounding',
    description:
      'We provide ongoing maintenance, content cadence, data workflow improvements, and iterative scaling systems that steadily compound your brand authority and revenue.',
    imgSrc: '/images/animated/scale_process_cherry_1788300728748.jpg',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'mogger-island',
    name: 'Mogger Island',
    category: 'E-com',
    tag: 'E-Commerce Platform',
    shortDescription:
      'A high-converting e-commerce storefront engineered for seamless product discovery, bespoke brand aesthetics, and rapid checkout flow.',
    fullOverview:
      'Designed and developed a custom e-commerce shopping experience for Mogger Island emphasizing fluid navigation, high-converting product pages, and streamlined checkout architecture.',
    servicesProvided: [
      'Custom Storefront Architecture',
      'Conversion Rate Optimization',
      'Payment & Logistics Integrations',
      'Mobile-First Responsive UX',
      'Speed & Asset Optimization',
    ],
    platform: 'Next.js & Shopify',
    timeline: 'Live Production',
    liveUrl: 'https://moggerisland.com',
    highlights: [
      'High-converting mobile product landing experience',
      'Instantaneous page load & lightweight asset delivery',
      'Custom brand styling & frictionless checkout',
    ],
    imageUrl: '/images/1.png',
    imagePlaceholderColor: '#150A0E',
    accentGradient: 'from-[#7A0F2E] via-[#2B0914] to-[#050505]',
    techStack: ['React', 'Next.js', 'Shopify Liquid', 'Tailwind'],
  },
  {
    id: 'slyn-shop',
    name: 'SLYN',
    category: 'E-com',
    tag: 'UI Redesign',
    shortDescription:
      'A modern, minimalist storefront tailored for curated product collections with dynamic promotions and seamless checkout.',
    fullOverview:
      'Architected an editorial e-commerce platform for SLYN focused on refined visual storytelling, smooth cart interactions, and high-velocity mobile customer acquisition.',
    servicesProvided: [
      'Custom E-Commerce Storefront',
      'Product Catalog UX Design',
      'Checkout & Payment Gateway Setup',
      'Automated Customer Flows',
      'Full-Stack Store Tuning',
    ],
    platform: 'Figma to Web',
    timeline: 'Live Production',
    liveUrl: 'https://slyn.shop',
    highlights: [
      'Clean minimalist product discovery & storytelling layout',
      'Mobile-optimized cart with quick-buy conversion mechanics',
      'Integrated analytics and automated customer acquisition',
    ],
    imageUrl: '/images/2.png',
    imagePlaceholderColor: '#0D1410',
    accentGradient: 'from-[#3A1F2B] via-[#1A0E14] to-[#050505]',
    techStack: ['Figma', 'Prototyping', 'Design Systems', 'CSS'],
  },
  {
    id: 'health-sync',
    name: 'HealthSync',
    category: 'Websites',
    tag: 'Mobile App',
    shortDescription: 'A personalized health and wellness tracking mobile application designed to simplify daily routines.',
    fullOverview: 'Developed a comprehensive mobile application for HealthSync focusing on user retention, intuitive data visualization, and seamless integration with wearable devices.',
    servicesProvided: ['Mobile App Design', 'Cross-Platform Development', 'API Integrations', 'Performance Optimization'],
    platform: 'iOS & Android',
    timeline: 'Completed 2024',
    highlights: ['Real-time health data sync', 'Customized goal tracking', 'Intuitive data visualization dashboards'],
    imageUrl: '', // Blank for placeholder UI
    imagePlaceholderColor: '#0A1215',
    accentGradient: 'from-[#0A1A2F] via-[#051119] to-[#000000]',
    techStack: ['React Native', 'Expo', 'GraphQL'],
  },
  {
    id: 'nova-branding',
    name: 'Nova Capital',
    category: 'SEO branding',
    tag: 'Brand Identity',
    shortDescription: 'A complete brand overhaul for a modern fintech firm focusing on trust, clarity, and innovation.',
    fullOverview: 'Created a cohesive brand system for Nova Capital, establishing a visual identity that communicates authority while remaining approachable to modern investors.',
    servicesProvided: ['Logo Design', 'Typography Selection', 'Color Palette Strategy', 'Brand Guidelines Creation'],
    platform: 'Brand Guidelines',
    timeline: 'Completed 2023',
    highlights: ['Scalable logo system', 'Comprehensive brand guidelines', 'Marketing asset templates'],
    imageUrl: '', // Blank for placeholder UI
    imagePlaceholderColor: '#1A1A1A',
    accentGradient: 'from-[#2C2C2C] via-[#151515] to-[#050505]',
    techStack: ['Illustrator', 'Figma', 'Typography'],
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What does Cherryworks do?',
    answer:
      'Cherryworks Studios is a digital growth studio. We help ambitious brands grow through custom websites, AI-assisted social media management, strategic branding, SEO & AI-discovery optimization, and high-converting Shopify e-commerce stores.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'We partner with small businesses, creators, personal brands, e-commerce founders, and growing companies in India and worldwide that need a stronger, higher-converting digital presence.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Our custom websites are scoped on a project basis depending on your business goals, required pages, integrations, and complexity. We provide transparent upfront estimates and flexible monthly maintenance options ranging from ₹4,000–₹8,000/month.',
  },
  {
    question: 'Do you offer monthly support and maintenance?',
    answer:
      'Yes. We provide ongoing monthly maintenance across all our pillars — from website bug fixes, content updates, and SEO monitoring (₹4,000–₹8,000/month) to full Shopify catalog management and optimization (₹2,000–₹5,000/month) and social media management.',
  },
  {
    question: 'Can you manage our social media end-to-end?',
    answer:
      'Yes. Our social media packages range from our ₹5,000 Starter setup to our ₹12,000/month Basic and ₹20,000/month Advanced management, including carousels, reels editing, daily stories, content mentorship, and automated direct message (DM) lead qualification.',
  },
  {
    question: 'Do you work with Shopify?',
    answer:
      'Yes, Shopify is our core e-commerce platform. We build custom Liquid stores starting from ₹15,000 (Starter), ₹20,000 (Basic with customized videos/images), up to ₹28,000 (Advanced with automated email sequences and lead capture).',
  },
  {
    question: 'Can you help with SEO and Google Business Profile?',
    answer:
      'Yes. Our Branding + SEO packages (from ₹5,000/month) cover on-page search engine optimization, Google Business Profile local dominance, brand mentoring, and modern AI/LLM discovery optimization so search engines and AI assistants surface your brand.',
  },
  {
    question: 'Can you automate our lead management?',
    answer:
      'Absolutely. We integrate DM automations, instant WhatsApp routing, appointment booking systems, and automated data syncing into Google Sheets or your CRM to turn raw traffic into organized, actionable leads without manual data entry.',
  },
  {
    question: 'Do you work with clients outside India?',
    answer:
      'Yes. While we are based in India, we work seamlessly with founders and brands worldwide, accommodating global payment flows, time zones, and international e-commerce configurations.',
  },
  {
    question: 'How do we get started?',
    answer:
      'You can submit a project inquiry through our Contact page or click "Chat on WhatsApp" anywhere on the site. We will discuss your goals, recommend the right system, and deliver a clear timeline and proposal.',
  },
];

export const ABOUT_BELIEFS = [
  {
    number: '01',
    title: 'Design should create clarity.',
    description:
      'Aesthetics without clarity is decoration. Every layout, headline, and contrast decision must instantly communicate who you are and why a client should trust you.',
  },
  {
    number: '02',
    title: 'Technology should remove friction.',
    description:
      'From load speed to single-click WhatsApp inquiries and frictionless checkouts, digital infrastructure should never make a customer work to buy from you.',
  },
  {
    number: '03',
    title: 'Automation should save time.',
    description:
      'Repetitive lead qualification, inquiry logging, and customer confirmations should run smoothly in the background so you can focus on building your craft.',
  },
  {
    number: '04',
    title: 'Marketing should support business outcomes.',
    description:
      'Vanity metrics mean nothing without conversion. Every piece of content, SEO keyword, and design asset must tie directly to commercial growth.',
  },
  {
    number: '05',
    title: 'Every digital asset should have a purpose.',
    description:
      'We reject unnecessary bloat. If an element does not build trust, clarify value, or drive action, it has no place in your digital system.',
  },
];

export function getWhatsAppUrl(customText?: string): string {
  const text = customText || 'Hi Cherryworks Studios, I would like to discuss a project.';
  const number = BRAND.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
