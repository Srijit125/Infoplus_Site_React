export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  id: number;
  title: string;
  category: string;
  isoDate: string;
  displayDate: string;
  author: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  image: string | null;
  featured?: boolean;
  content: Block[];
};

export const CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "IT Services",
  "Cybersecurity",
  "Data Management",
  "Cloud Computing",
  "SAP Consulting",
  "Digital Transformation",
  "Consulting",
];

export const CAT_COLORS: Record<string, [string, string]> = {
  "Artificial Intelligence": ["#ecdaff", "#6128a6"],
  "IT Services":             ["#fff3ef", "#f85d37"],
  "Cybersecurity":           ["#dbeafe", "#1d4ed8"],
  "Data Management":         ["#dcfce7", "#15803d"],
  "Cloud Computing":         ["#fef9c3", "#854d0e"],
  "SAP Consulting":          ["#f1f5f9", "#475569"],
  "Digital Transformation":  ["#fce7f3", "#9d174d"],
  "Consulting":              ["#ede9fe", "#7c3aed"],
};

export const CAT_GRADIENT: Record<string, string> = {
  "Artificial Intelligence": "bg-linear-to-br from-[#381f55] to-[#6128a6]",
  "IT Services":             "bg-linear-to-br from-[#9a2600] to-[#f85d37]",
  "Cybersecurity":           "bg-linear-to-br from-[#1e3a8a] to-[#3b82f6]",
  "Data Management":         "bg-linear-to-br from-[#064e3b] to-[#10b981]",
  "Cloud Computing":         "bg-linear-to-br from-[#78350f] to-[#f59e0b]",
  "SAP Consulting":          "bg-linear-to-br from-[#1e293b] to-[#475569]",
  "Digital Transformation":  "bg-linear-to-br from-[#831843] to-[#ec4899]",
  "Consulting":              "bg-linear-to-br from-[#3b0764] to-[#8b5cf6]",
};

export const POSTS: Post[] = [
  {
    id: 1,
    title: "The Future of Generative AI in Enterprise Solutions",
    category: "Artificial Intelligence",
    isoDate: "2026-06-15",
    displayDate: "Jun 15, 2026",
    author: "James Mitchell",
    readTime: "6 min read",
    tags: ["Generative AI", "Enterprise", "Machine Learning", "Automation"],
    excerpt:
      "Explore how generative AI is reshaping enterprise workflows, from automating complex data processes to enabling smarter decision-making at scale. Organisations that embrace this shift are seeing measurable gains in productivity and innovation.",
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcnRpZmljaWFsJTIwSW50ZWxsaWdlbmNlJTIwVGVjaG5vbG9neXxlbnwxfHx8fDE3ODE1MjYwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
    content: [
      { type: "p", text: "Generative AI has shifted from research curiosity to boardroom priority at an unprecedented pace. In 2025, over 60% of Fortune 500 companies reported active GenAI pilots by 2026, the majority have moved from pilot to production. But what does this actually mean for enterprise operations, and how do you navigate the transition from experimentation to measurable value?" },
      { type: "h2", text: "From Automation to Intelligent Creation" },
      { type: "p", text: "Unlike traditional automation that executes predefined rules, generative AI creates new content, insights, and decisions from learned patterns. This shifts the paradigm from 'if-then' workflows to adaptive, context-aware systems that improve with every interaction. For enterprises, this means rethinking not just individual processes, but entire operating models." },
      { type: "h2", text: "High-Impact Enterprise Use Cases" },
      { type: "ul", items: [
        "AI-powered customer service agents that resolve 70–80% of tier-1 queries autonomously, freeing human agents for complex cases",
        "Intelligent code generation and review tooling that cuts development cycles by 30–50% and reduces defect rates",
        "Automated document processing for contracts, invoices, compliance reports, and due diligence packages",
        "Personalised marketing content at scale, reducing production time from days to hours without sacrificing quality",
        "Knowledge management systems that surface answers from vast internal document repositories in seconds",
      ]},
      { type: "h2", text: "Governance: The Differentiator Between Hype and Value" },
      { type: "p", text: "The organisations succeeding with enterprise AI are those that pair technological capability with rigorous governance defining clear policies around data access, model behaviour, human oversight, and output validation. Those that rush deployment without these guardrails face reputational and regulatory risk. Those that move thoughtfully are building durable competitive advantage that compounds over time." },
    ],
  },
  {
    id: 2,
    title: "How to Build a Scalable IT Infrastructure for 2027",
    category: "IT Services",
    isoDate: "2026-06-05",
    displayDate: "Jun 05, 2026",
    author: "Priya Sharma",
    readTime: "8 min read",
    tags: ["Infrastructure", "Scalability", "Cloud", "IT Planning"],
    excerpt:
      "A practical guide to designing IT infrastructure that scales with your organisation's growth while maintaining reliability, security, and cost efficiency for the years ahead.",
    image: null,
    content: [
      { type: "p", text: "Every CTO knows the pain of infrastructure that can't keep pace with growth. Systems that work beautifully at 10,000 users buckle under 500,000. Building for tomorrow's scale requires deliberate architectural choices made today not expensive retrofits when the problem becomes critical and the pressure is greatest." },
      { type: "h2", text: "The Four Pillars of Scalable Infrastructure" },
      { type: "ul", items: [
        "Cloud-native architecture that leverages elasticity and avoids single points of failure across availability zones",
        "Infrastructure as Code (IaC) using Terraform or Pulumi for repeatable, auditable, and version-controlled deployments",
        "Containerisation with Kubernetes for workload portability, efficient resource utilisation, and rapid scaling",
        "Observability-first design with distributed tracing, structured logging, and proactive alerting before users are impacted",
      ]},
      { type: "h2", text: "Planning for 2027: Emerging Patterns to Adopt Now" },
      { type: "p", text: "Edge computing, AI inference at the infrastructure layer, and sustainable 'green cloud' architectures are no longer emerging they are becoming table stakes. Organisations that bake these patterns into their infrastructure roadmap now will avoid costly architectural pivots in 18–24 months when these become competitive differentiators or regulatory requirements." },
      { type: "h2", text: "Balancing Cost and Capability" },
      { type: "p", text: "Scalability should not mean unconstrained spend. Effective FinOps practices rightsizing compute, leveraging spot and reserved instances, and enforcing cost tagging can reduce cloud bills by 25–40% without sacrificing performance or reliability. The goal is infrastructure that scales intelligently, not just expensively." },
    ],
  },
  {
    id: 3,
    title: "Master Data Management: The Silent Engine of Growth",
    category: "Data Management",
    isoDate: "2026-05-22",
    displayDate: "May 22, 2026",
    author: "Anita Rajan",
    readTime: "5 min read",
    tags: ["MDM", "Data Governance", "Enterprise Data", "Quality"],
    excerpt:
      "Discover how Master Data Management empowers organisations to bring structure, standards, and control to their enterprise data, enabling accurate reporting and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1549637642-90187f64f420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3Jwb3JhdGUlMjBPZmZpY2UlMjBNb2Rlcm58ZW58MXx8fHwxNzgxNTI2MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: [
      { type: "p", text: "Most data quality problems aren't technology problems they're process and governance failures that manifest as technology symptoms. Duplicate customer records, inconsistent product data across channels, mismatched supplier identifiers: these are the symptoms of an organisation that has scaled without a master data strategy. MDM is the cure, and its value compounds with every system you connect." },
      { type: "h2", text: "What MDM Actually Does" },
      { type: "p", text: "Master Data Management creates a single, authoritative, trusted record for core business entities customers, products, suppliers, employees, assets and ensures this record is consistent across all downstream systems. Done well, MDM becomes the connective tissue of your enterprise data architecture, enabling AI, analytics, and automation to work from clean, reliable inputs." },
      { type: "h2", text: "Core Components of an Effective MDM Programme" },
      { type: "ul", items: [
        "Data governance framework: ownership, stewardship roles, and clear accountability for data quality",
        "Master data modelling: defining canonical data models for each entity domain aligned to business needs",
        "Data quality rules: validation, deduplication, standardisation, and enrichment pipelines at ingestion",
        "Integration architecture: bidirectional synchronisation with ERP, CRM, and operational systems",
        "Ongoing stewardship: processes for exception management, continuous improvement, and policy enforcement",
      ]},
      { type: "h2", text: "The Business Payoff" },
      { type: "p", text: "Organisations with mature MDM programmes report measurable improvements in reporting accuracy, customer experience consistency, and regulatory compliance. More practically, they spend less time arguing about whose data is correct and more time acting on insights that drive growth. In industries like financial services and healthcare, MDM is not optional it is a regulatory and operational imperative." },
    ],
  },
  {
    id: 4,
    title: "Top 5 Cybersecurity Threats Every IT Leader Must Know in 2026",
    category: "Cybersecurity",
    isoDate: "2026-05-10",
    displayDate: "May 10, 2026",
    author: "Raj Patel",
    readTime: "7 min read",
    tags: ["Cybersecurity", "Threats", "Ransomware", "Zero Trust"],
    excerpt:
      "From ransomware to supply chain attacks, the threat landscape is evolving fast. Here are the top 5 cybersecurity challenges IT leaders must prepare for right now to protect their organisations.",
    image: null,
    content: [
      { type: "p", text: "The cybersecurity threat landscape has fundamentally changed. Attacks are more sophisticated, more targeted, and more damaging than at any point in the past decade. For IT leaders, the question is no longer 'if' but 'when' and how prepared your organisation is to detect, respond, and recover at speed." },
      { type: "h2", text: "The Five Threats Demanding Your Attention Right Now" },
      { type: "ul", items: [
        "Ransomware-as-a-Service (RaaS): Criminal groups now offer ransomware toolkits on subscription, dramatically lowering the barrier to entry for attacks against mid-market organisations",
        "AI-powered phishing: Generative AI enables hyper-personalised spear-phishing campaigns at scale, making traditional security awareness training insufficient on its own",
        "Supply chain compromise: Attackers increasingly target vendors and partners as vectors into larger organisations, exploiting trusted software update channels",
        "Insider threats: Whether malicious or accidental, employees with excessive access privileges remain one of the highest-risk and hardest-to-detect threat vectors",
        "Cloud misconfigurations: Misconfigured S3 buckets, overly permissive IAM policies, and exposed APIs remain the leading cause of cloud data breaches in 2026",
      ]},
      { type: "h2", text: "Building a Zero-Trust Security Posture" },
      { type: "p", text: "Zero Trust 'never trust, always verify' has moved from security philosophy to operational imperative. Implementing zero trust means enforcing least-privilege access, micro-segmenting networks, using multi-factor authentication universally, and continuously monitoring for anomalous behaviour. It is not a product purchase; it is an architectural shift that requires sustained executive commitment." },
      { type: "h2", text: "Where to Start: The Four Fundamentals" },
      { type: "p", text: "Organisations overwhelmed by the breadth of the cybersecurity landscape should start with fundamentals: identify and catalogue your critical assets, patch regularly and ruthlessly, implement MFA everywhere, and ensure you have a tested incident response plan. These four steps alone address the majority of real-world attack vectors and provide immediate, measurable risk reduction." },
    ],
  },
  {
    id: 5,
    title: "Why Staffing & Consulting Firms Are Shifting to Digital Platforms",
    category: "Consulting",
    isoDate: "2026-04-18",
    displayDate: "Apr 18, 2026",
    author: "Sarah Williams",
    readTime: "4 min read",
    tags: ["Staffing", "Digital", "Consulting", "Platforms"],
    excerpt:
      "The consulting industry is undergoing a digital revolution. We explore the key drivers pushing staffing and consulting firms towards integrated digital platforms and what it means for clients.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXNpbmVzcyUyMFBlb3BsZSUyMENvbGxhYm9yYXRpb258ZW58MXx8fHwxNzgxNTI3MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: [
      { type: "p", text: "The staffing and consulting industry built itself on relationship networks, manual candidate matching, and paper-heavy compliance processes. That model is not just inefficient in today's market, it is a competitive disadvantage. Digital-native competitors and talent marketplaces are capturing market share by offering what clients and candidates increasingly expect: speed, transparency, and data-driven matching." },
      { type: "h2", text: "What Digital Platforms Enable" },
      { type: "ul", items: [
        "Real-time candidate pipelines with AI-driven skills matching, ranking, and bias reduction",
        "Automated compliance checking for right-to-work, IR35 status, and sector-specific regulatory requirements",
        "Client-facing portals providing live visibility into requisition status, interview scheduling, and placement progress",
        "Integrated analytics dashboards tracking placement rates, time-to-fill, margin performance, and consultant utilisation",
        "Digital onboarding workflows that reduce contractor start times from weeks to two or three days",
      ]},
      { type: "h2", text: "The Shift Is as Much Cultural as Technological" },
      { type: "p", text: "Firms that have successfully digitalised know that the transformation requires as much change management as technology investment. Consultants who previously valued their personal black books of contacts need to see digital tools as amplifiers, not replacements. Leadership buy-in, training, and clear communication of the 'why' are as important as the platform chosen." },
    ],
  },
  {
    id: 6,
    title: "Navigating the Complexities of SAP S/4HANA Migration",
    category: "SAP Consulting",
    isoDate: "2026-03-30",
    displayDate: "Mar 30, 2026",
    author: "David Chen",
    readTime: "9 min read",
    tags: ["SAP", "S/4HANA", "Migration", "ERP"],
    excerpt:
      "SAP S/4HANA migration is one of the most complex IT undertakings an enterprise can face. Our experts break down the key phases, common pitfalls, and best practices for a smooth transition.",
    image: null,
    content: [
      { type: "p", text: "SAP's deadline for mainstream maintenance of ECC 6.0 has concentrated minds across the enterprise landscape. Thousands of organisations must migrate to S/4HANA, and the window for a measured, planned transition is narrowing. For those yet to start, the time to act is now not because of the deadline alone, but because the operational and analytical capabilities of S/4HANA deliver real, compounding business value." },
      { type: "h2", text: "The Three Migration Approaches" },
      { type: "ul", items: [
        "Greenfield: A fresh implementation of S/4HANA, rethinking and re-engineering processes from the ground up. Highest effort, highest long-term reward, and the only option for organisations with heavily customised ECC landscapes",
        "Brownfield (System Conversion): Technical migration of your existing ECC system to S/4HANA with minimal business process change. Faster time-to-value, but limits the opportunity to eliminate technical debt and inefficiency",
        "Selective Data Transition (SDT): A hybrid approach selectively migrating data and processes from one or more ECC systems into a new S/4HANA instance. Ideal for organisations with complex, multi-system landscapes",
      ]},
      { type: "h2", text: "Common Pitfalls That Derail Migrations" },
      { type: "ul", items: [
        "Underestimating custom code remediation SAP custom developments often require significant rework for S/4HANA compatibility and simplified data model",
        "Inadequate data quality preparation migrating poor-quality master and transactional data creates a poor-quality S/4HANA that frustrates users from day one",
        "Treating it as a pure IT project business stakeholder engagement, process redesign, and change management are essential from discovery onwards",
        "Skipping the business process review migration is the ideal moment to eliminate decades of accumulated inefficiency, not embed it in the new system",
      ]},
      { type: "h2", text: "Building for a Successful Go-Live" },
      { type: "p", text: "Successful S/4HANA migrations share common traits: strong executive sponsorship, dedicated programme governance, phased go-live strategies to manage risk, and a structured hypercare period post go-live. Organisations that invest in these foundations consistently outperform those that treat migration as a purely technical lift-and-shift exercise." },
    ],
  },
  {
    id: 7,
    title: "Cloud Migration Strategies for Enterprise Organisations",
    category: "Cloud Computing",
    isoDate: "2026-03-08",
    displayDate: "Mar 08, 2026",
    author: "Michael Torres",
    readTime: "6 min read",
    tags: ["Cloud", "Migration", "AWS", "Azure", "Strategy"],
    excerpt:
      "Moving enterprise workloads to the cloud requires careful planning and the right strategy. Explore the 6 R's of cloud migration and how to choose the best path for your organisation.",
    image: null,
    content: [
      { type: "p", text: "Cloud migration is no longer a 'whether' conversation it is a 'how' conversation. But choosing the right migration strategy for your specific workloads is what separates successful transformations from expensive regrets. The 6 R's framework provides a practical taxonomy for making these decisions systematically at portfolio scale." },
      { type: "h2", text: "The 6 R's of Cloud Migration" },
      { type: "ul", items: [
        "Rehost (Lift & Shift): Move workloads as-is to cloud IaaS. Fastest execution, lowest risk, moderate benefit. Best for legacy applications that aren't worth re-engineering",
        "Replatform (Lift, Tinker & Shift): Minor optimisations during migration such as moving to managed databases or containerising applications without full re-architecture",
        "Repurchase (Move to SaaS): Replace on-premises applications with cloud-native SaaS equivalents. Eliminates maintenance overhead but requires process change and data migration",
        "Refactor (Re-architect): Redesign applications to be cloud-native, leveraging serverless, containers, and microservices. Highest effort, highest long-term benefit for critical applications",
        "Retire: Identify and decommission redundant or unused applications typically 10–20% of enterprise portfolios. Reduces cost and complexity before migration",
        "Retain: Keep specific workloads on-premises where cloud migration isn't justified by ROI, latency requirements, or compliance constraints",
      ]},
      { type: "h2", text: "Executing a Successful Migration Programme" },
      { type: "p", text: "The most effective migrations begin with a thorough discovery and assessment phase that maps every application, its dependencies, its business criticality, and its cloud readiness. This portfolio view enables prioritisation quick wins first to build momentum and cloud capability within the organisation, complex refactor workloads later when the team has accumulated cloud-native expertise and confidence." },
    ],
  },
  {
    id: 8,
    title: "Digital Transformation: A Practical Roadmap for 2026–2027",
    category: "Digital Transformation",
    isoDate: "2026-02-14",
    displayDate: "Feb 14, 2026",
    author: "Priya Sharma",
    readTime: "10 min read",
    tags: ["Digital Transformation", "Strategy", "Innovation", "Change Management"],
    excerpt:
      "Digital transformation isn't just about technology it's about changing how your entire organisation operates and delivers value. Here's a practical framework that actually works.",
    image: null,
    content: [
      { type: "p", text: "Digital transformation has become one of the most overused and most misunderstood terms in business strategy. Many organisations equate it with deploying new software. They discover too late that technology is the easy part. The hard part is the cultural, process, and organisational change that makes technology deliver value rather than create new complexity and shadow IT." },
      { type: "h2", text: "Start with the Problem, Not the Technology" },
      { type: "p", text: "The most common transformation failure pattern is technology-first thinking: choosing a platform, then looking for problems it solves. The organisations that succeed invert this: they identify their most critical business challenges, quantify the cost of the status quo in revenue lost and time wasted, and then select and implement technology that directly addresses those challenges with measurable outcomes." },
      { type: "h2", text: "A Practical 5-Step Transformation Framework" },
      { type: "ul", items: [
        "Diagnose: Map current processes end-to-end, identify friction points, and quantify the cost of inefficiency in hard numbers",
        "Vision: Define what 'transformed' looks like in concrete, measurable business outcomes not technology deployments",
        "Prioritise: Select the 3–5 highest-impact initiatives that build momentum, deliver early ROI, and demonstrate the transformation's value to sceptics",
        "Build: Implement iteratively with cross-functional product teams, not isolated IT projects that hand off a finished system",
        "Embed: Invest seriously in training, change management, and continuous improvement to sustain gains and build organisational capability",
      ]},
      { type: "h2", text: "Measuring Transformation ROI" },
      { type: "p", text: "Transformation investments must be tied to business outcomes that leadership can track and communicate to boards: revenue growth, cost reduction, customer satisfaction scores, employee productivity, and time-to-market for new products. Transformation programmes that cannot demonstrate ROI within 12–18 months typically lose executive sponsorship and stall. Build measurement in from day one, not as an afterthought." },
    ],
  },
  {
    id: 9,
    title: "AI-Powered Predictive Maintenance for Asset-Intensive Industries",
    category: "Artificial Intelligence",
    isoDate: "2026-01-25",
    displayDate: "Jan 25, 2026",
    author: "Anita Rajan",
    readTime: "7 min read",
    tags: ["AI", "Predictive Maintenance", "IoT", "Manufacturing"],
    excerpt:
      "Asset-intensive industries are leveraging AI and IoT to predict equipment failures before they happen, reducing downtime and maintenance costs by up to 40%. Learn how to get started.",
    image: null,
    content: [
      { type: "p", text: "Unplanned equipment downtime costs asset-intensive industries an average of $250,000 per hour. For manufacturing, utilities, oil and gas, and aviation, this is not an occasional disruption it is a structural drag on profitability and safety performance. AI-powered predictive maintenance is changing this equation, enabling organisations to catch failures days or weeks before they occur and act on precise, data-driven maintenance schedules." },
      { type: "h2", text: "How Predictive Maintenance Works" },
      { type: "p", text: "Predictive maintenance systems combine sensor data vibration, temperature, pressure, acoustic signatures, electrical consumption with machine learning models trained on historical failure patterns. These models learn the 'normal' operational signature of each asset and raise alerts when sensor readings begin to deviate in ways historically associated with impending failure modes. The result is maintenance that is predictive and right-timed rather than reactive or time-based." },
      { type: "h2", text: "The Business Case: Measurable Impact" },
      { type: "ul", items: [
        "25–40% reduction in unplanned downtime for instrumented assets across manufacturing and utilities sectors",
        "15–25% reduction in overall maintenance costs through right-timed intervention replacing calendar-based schedules",
        "Extension of asset useful life by 20–30% through early identification and resolution of degradation before damage compounds",
        "Reduced spare parts inventory through demand-driven ordering based on predicted failure timelines",
        "Improved safety outcomes by catching failure modes before they progress to catastrophic or injurious events",
      ]},
      { type: "h2", text: "Getting Started: The Practical Path" },
      { type: "p", text: "Successful predictive maintenance programmes start small and prove value quickly: identify your two or three most critical and costly assets, instrument them with appropriate sensors, and build proof-of-concept models using 12–24 months of historical failure and operational data. Early wins build the business case for broader rollout. The technology is proven the challenge is the change management, data infrastructure, and operational integration required to make adoption stick across maintenance teams." },
    ],
  },
];
