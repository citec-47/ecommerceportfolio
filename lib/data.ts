export const profile = {
  name: "Ndonyi Maurice Djam",
  shortName: "Ndonyi Maurice",
  role: "Ecommerce & Digital Marketing Virtual Assistant",
  tagline: "I take the day-to-day digital work off your plate, so you can focus on growth.",
  email: "mauricendonyi40@gmail.com",
  whatsapp: "+237679630287",
  whatsappLink: "https://wa.me/237679630287",
  availability: "20+ hours / week · Available to start a trial immediately",
  location: "Remote · Works across time zones",
  photo: "/profile.jpg",
};

export const stats = [
  { value: "20h+", label: "Weekly availability" },
  { value: "2", label: "Marketplaces (Amazon & TikTok)" },
  { value: "3+", label: "Languages: JS, React, Rails" },
  { value: "24/7", label: "Reliable remote collaboration" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Ecommerce Management",
    icon: "cart",
    description:
      "Day-to-day operations across Amazon & TikTok Shop so your store runs smoothly without you micromanaging it.",
    points: [
      "Product listing creation & optimization",
      "Marketplace & order management",
      "Inventory and catalog upkeep",
      "Store health monitoring",
    ],
  },
  {
    title: "Social Media Marketing",
    icon: "megaphone",
    description:
      "Content planning, scheduling, and audience engagement using Meta Business Suite and TikTok.",
    points: [
      "Content calendars & scheduling",
      "Meta Business Suite management",
      "TikTok content & engagement",
      "Community & comment management",
    ],
  },
  {
    title: "Content Marketing",
    icon: "pen",
    description:
      "The steady behind-the-scenes work that keeps a brand active, consistent, and responsive.",
    points: [
      "Content coordination",
      "Caption & copy support",
      "Brand voice consistency",
      "Customer service support",
    ],
  },
  {
    title: "AI & Workflow Automation",
    icon: "bolt",
    description:
      "I use AI tools and automation to cut repetitive tasks so your business runs leaner and faster.",
    points: [
      "Repetitive task automation",
      "AI-assisted content workflows",
      "Process & reporting systems",
      "Tooling to save hours weekly",
    ],
  },
  {
    title: "Web Development",
    icon: "code",
    description:
      "My technical edge: when your store needs more than upkeep, I can actually build it, not just flag it.",
    points: [
      "Websites & landing pages",
      "Ecommerce platforms",
      "Custom business tools",
      "Integrations & fixes",
    ],
  },
  {
    title: "Structured Collaboration",
    icon: "check",
    description:
      "I'm comfortable working within structured systems and reliable remote routines.",
    points: [
      "Daily reporting & task tracking",
      "Regular check-in meetings",
      "Clear written communication",
      "International team experience",
    ],
  },
];

export const skills = [
  "Amazon Seller Central",
  "TikTok Shop",
  "Meta Business Suite",
  "Product Listing Optimization",
  "Content Scheduling",
  "Customer Service",
  "AI Tools & Automation",
  "JavaScript",
  "React",
  "Ruby on Rails",
  "Web Development",
  "Workflow Systems",
];

export const process = [
  {
    step: "01",
    title: "Onboarding & Access",
    text: "We align on goals, tools, and reporting cadence. I plug into your existing systems quickly and securely.",
  },
  {
    step: "02",
    title: "Daily Operations",
    text: "I run the day-to-day work: listings, scheduling, engagement, and customer support, keeping things moving.",
  },
  {
    step: "03",
    title: "Optimize & Automate",
    text: "I spot repetitive work and automate it with AI and custom tooling, freeing up hours every week.",
  },
  {
    step: "04",
    title: "Report & Grow",
    text: "You get clear daily reports and check-ins, so you always know what's done and what's next.",
  },
];

export const tools = [
  "Amazon",
  "TikTok Shop",
  "Meta Business Suite",
  "Google Chat",
  "React",
  "Ruby on Rails",
  "JavaScript",
];
