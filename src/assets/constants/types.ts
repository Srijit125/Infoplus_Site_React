import {
  Activity,
  BrainCircuit,
  Briefcase,
  Building2,
  Database,
  Factory,
  GraduationCap,
  HardHat,
  HeartHandshake,
  Monitor,
  Phone,
  PieChart,
  Radio,
  Rocket,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Wheat,
} from "lucide-react";

export type CareerPosition = {
  role: string;
  team: string;
  location: string;
};

export type OurValue = {
  title: string;
  description: string;
  icon: any;
};

export type Industry = {
  label: string;
  icon: any;
};

export type Service = {
  title: string;
  description: string;
  features: string[];
  icon: any;
};

export type Solution = {
  title: string;
  description: string;
  features: string[];
  icon: any;
};

export const ourValues: OurValue[] = [
  {
    title: "Flexibility",
    description: "We are open to change and maintaining flexibility.",
    icon: Rocket,
  },
  {
    title: "Planning",
    description: "We follow the golden circle of Why, How, and What.",
    icon: Target,
  },
  {
    title: "Performance",
    description: "We value our people, encourage their development.",
    icon: TrendingUp,
  },
  {
    title: "Quality",
    description: "I/We put quality first to deliver WOW services.",
    icon: Shield,
  },
  {
    title: "Business Growth",
    description: "We develop client relationships through customer empathy.",
    icon: Briefcase,
  },
  {
    title: "Financial Planning",
    description:
      "Provide visible positive contribution to the client's IT growth strategy.",
    icon: PieChart,
  },
  {
    title: "Support",
    description:
      "We offer unique digital marketing solutions that'd load your inbox with inquiries.",
    icon: HeartHandshake,
  },
];

export const industries: Industry[] = [
  { label: "Artificial Intelligence", icon: BrainCircuit },
  { label: "Pharmaceutical",          icon: Activity      },
  { label: "Insurance",               icon: ShieldCheck   },
  { label: "Transport",               icon: Truck         },
  { label: "Retail",                  icon: ShoppingCart  },
  { label: "Manufacturing",           icon: Factory       },
  { label: "Broadcasting",            icon: Radio         },
  { label: "Real Estate",             icon: Building2     },
  { label: "Healthcare",              icon: HeartHandshake},
  { label: "Agriculture",             icon: Wheat         },
  { label: "Construction",            icon: HardHat       },
  { label: "Telecommunication",       icon: Phone         },
  { label: "Finance",                 icon: PieChart      },
  { label: "Education",               icon: GraduationCap },
];

export const services: Service[] = [
  {
    title: "Machine Learning",
    description:
      "Build predictive models and unlock data-driven insights that keep your business ahead of the curve.",
    features: [
      "Predictive Analytics",
      "Deep Learning",
      "Model Training & Deployment",
    ],
    icon: BrainCircuit,
  },
  {
    title: "AI-Powered Automation",
    description:
      "Streamline operations with intelligent process automation and smart workflow solutions.",
    features: [
      "Robotic Process Automation",
      "Intelligent Workflows",
      "AI Decision Engines",
    ],
    icon: Activity,
  },
  {
    title: "Natural Language Processing",
    description:
      "Intelligent language understanding powering chatbots, document analysis, and smart search experiences.",
    features: [
      "Conversational AI",
      "Sentiment Analysis",
      "Document Intelligence",
    ],
    icon: Sparkles,
  },
  {
    title: "Generative AI",
    description:
      "Integrate cutting-edge generative models to create content, accelerate development, and solve complex business challenges.",
    features: ["LLM Integration", "AI Content Generation", "Computer Vision"],
    icon: Database,
  },
];

export const ourSolutions: Solution[] = [
  {
    title: "IT Services",
    description:
      "In order for a business to strive and to meet its planned objectives, supporting IT is not just enough but strategically led and proactively managed IT.",
    features: [
      "Artificial Intelligence (AI)",
      "Software Development",
      "Testing",
      "Infrastructure Management",
      "Application Management",
      "SAP Consulting & Implementation",
      "Cyber Security",
    ],
    icon: Monitor,
  },
  {
    title: "Products",
    description:
      "Asset-intensive industries operate in a fast-paced environment with dizzying volumes of data. Lack of data standards, controls, and structure.",
    features: ["Master Data Management", "Education Solutions"],
    icon: Shield,
  },
  {
    title: "Staffing & Consultings",
    description:
      "Having worked with clients from a wide range of services and domains globally over the last two decades, our Staffing and Consulting teams.",
    features: [
      "IT Staffing Solutions",
      "IT Consulting Solutions",
      "Umbrella Service",
    ],
    icon: Briefcase,
  },
  {
    title: "New-Gen Solutions",
    description:
      "We at Infoplus technologies UK Ltd are pleased to inform you that our Digital Centre Of Excellence team can help organizations to stay ahead.",
    features: ["Enterprise Transformations", "Everything Data", "Automation"],
    icon: Rocket,
  },
];

export const careerPositions = [
  {
    role: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Remote / UK",
  },
  {
    role: "AI Research Scientist",
    team: "Data Science",
    location: "Germany",
  },
  { role: "Product Designer", team: "Design", location: "Remote" },
  { role: "Technical Account Manager", team: "Sales", location: "India" },
];
