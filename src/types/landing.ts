export type LinkItem = {
  label: string;
  href: string;
};

export type HeroBullet = {
  text: string;
};

export type QuickInsight = {
  label: string;
  value: string;
  tone?: "default" | "alert";
};

export type BookReference = {
  area: string;
  mainSource: string;
  edition: string;
};

export type JourneyOption = {
  tabLabel: string;
  title: string;
  subtitle: string;
  summary: string;
  chips: string[];
  features: Array<{
    title: string;
    description: string;
  }>;
  icon: "school" | "timer";
};

export type ComparisonRow = {
  capability: string;
  genericAi: string;
  medseek: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  subtitle?: string;
  highlights: string[];
  cta: string;
  featured?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LandingContent = {
  navItems: LinkItem[];
  heroBullets: HeroBullet[];
  quickInsights: QuickInsight[];
  library: BookReference[];
  journeyOptions: JourneyOption[];
  comparisonRows: ComparisonRow[];
  testimonials: Testimonial[];
  pricingPlans: PricingPlan[];
  faqs: FaqItem[];
};

