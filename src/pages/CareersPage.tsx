import { PageMeta } from "../components/shared/PageMeta";
import { useState, useEffect, useCallback, type ChangeEvent, useRef } from "react";
import { PageHero } from "../components/shared/PageHero";
import imgCareerHero from "../assets/images/career_hero.jpg";
import {
  Coffee,
  Heart,
  Globe,
  Zap,
  MapPin,
  Briefcase,
  X,
  ChevronRight,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";
import { fileToBase64Raw } from "../assets/helpers";
import { getApiUrl } from "../config/api";
import { useOtpGate } from "../hooks/useOtpGate";
import { OtpPanel } from "../components/shared/OtpPanel";
import { VERIFICATION_TOKEN_FIELD } from "../lib/otp";

/* ── Types ─────────────────────────────────────────── */
type DetailSection = { heading: string; items: string[]; mainBullets?: boolean; noBullet?: boolean };
type IndentedItem = { indented: string };
type DetailItem = string | DetailSection | IndentedItem;

type Job = {
  id: number;
  role: string;
  team: string;
  location: string;
  type: string;
  skills: string[];
  desc: string;
  details: DetailItem[];
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  experience: string;
  noticePeriod: string;
  linkedin: string;
  coverLetter: string;
  file: File | null;
};

const CAREER_FORM_TYPE = "Infoplus Career Application";

const EMPTY_FORM: FormState = {
  fullName: "",
  email: "",
  phone: "",
  currentLocation: "",
  experience: "",
  noticePeriod: "",
  linkedin: "",
  coverLetter: "",
  file: null,
};

const TEAM_BADGE: Record<string, string> = {
  Engineering:
    "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
  "Data Science":
    "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
  Design:
    "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
  Sales:
    "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
  Education:
    "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
  Operations:
    "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
};

const CAREERS_FAQS: FAQItem[] = [
  {
    q: "Do I need years of experience to apply, or is there room for people just starting out?",
    a: "Both are welcome. We hire experienced specialists and people building their first career through our internship programme- what matters more to us is curiosity and ownership, not just years on a CV.",
  },
  {
    q: "What actually happens during the internship- real work, or just observing?",
    a: "Real work, from day one. Our interns get placed on live projects with the best mentorship from people who've been in the industry for years, not shadowing meetings or making coffee.",
  },
  {
    q: "If there's no open role listed right now, is it still worth applying?",
    a: "Yes. We're always interested in hearing from strong candidates, even without a live vacancy- send your CV, and we'll keep it on file for when the right opportunity comes up.",
  },
  {
    q: "What actually makes day-to-day work at Infoplus different from a typical IT job?",
    a: "You're trusted with real responsibility early on, working across a genuinely global business spanning 17 countries – not stuck waiting for permission to contribute.",
  },
];

/* ── Component ─────────────────────────────────────── */
function CareersPage() {
  const [teamFilter, setTeamFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [viewJob, setViewJob] = useState<Job | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB raw → ~6.7 MB as base64
  const [errors, setErrors] = useState({ fullName: "", email: "", phone: "" });
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  /* lock body scroll when any modal is open */
  useEffect(() => {
    document.body.style.overflow = (applyJob || viewJob) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [applyJob, viewJob]);

  /* close modals on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (applyJob) closeModal();
      else if (viewJob) closeViewModal();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [applyJob, viewJob]);

  type ITField = "fullName" | "email" | "phone";
  const closeViewModal = () => setViewJob(null);
  const closeModal = () => {
    setApplyJob(null);
    setSubmitted(false);
    setForm(EMPTY_FORM);
  };

  const validateField = (field: ITField, value: string): string => {
    const s = value.trim();
    if (field === "fullName") {
      if (!s) return "Full name is required.";
      if (s.length < 2) return "Full name must be at least 2 characters.";
      if (s.length > 100) return "Full name must be under 100 characters.";
      if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'\-.]+$/.test(s))
        return "Full name may only contain letters, spaces, hyphens, periods and apostrophes.";
      return "";
    }
    if (field === "email") {
      if (!s) return "Email is required.";
      if (s.length > 254) return "Email address is too long.";
      if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(s))
        return "Enter a valid email (e.g. john@company.com).";
      return "";
    }
    if (field === "phone") {
      if (!s) return "Contact number is required.";
      if (!/^[+\d\s()\-]+$/.test(s))
        return "Only digits, spaces, +, – and parentheses are allowed.";
      const digits = s.replace(/\D/g, "");
      if (digits.length < 7) return "Must contain at least 7 digits.";
      if (digits.length > 15) return "Must not exceed 15 digits.";
      return "";
    }
    return "";
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] ?? null;

    if (file && file.size > MAX_FILE_BYTES) {
      setFileError("Resume must be under 5 MB.");
      setForm((prev) => ({ ...prev, file: null }));
      e.target.value = "";
      return;
    }
    setFileError("");
    setForm((prev) => ({ ...prev, file }));
  };

  /* Sends the application once the emailed code has been verified. */
  const sendApplication = useCallback(
    async (verificationToken: string) => {
      setStatus("sending");
      setStatusMessage("");
      try {
        const formData = new FormData();
        formData.append("full_name", form.fullName.trim());
        formData.append("email", form.email.trim());
        formData.append("phone", form.phone.trim());
        formData.append("cover_letter", form.coverLetter.trim());
        formData.append("location", form.currentLocation.trim());
        formData.append("experience", form.experience.trim());
        formData.append("notice_period", form.noticePeriod.trim());
        formData.append("linkedin", form.linkedin.trim());
        if (form.file) {
          const base64 = await fileToBase64Raw(form.file);
          formData.append("filename", form.file.name);
          formData.append("base64", base64);
        }
        formData.append("job_title", applyJob?.role ?? "");
        formData.append("type", CAREER_FORM_TYPE);
        formData.append(VERIFICATION_TOKEN_FIELD, verificationToken);
        const res = await fetch(
          getApiUrl("career"),
          { method: "POST", body: formData },
        );
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        if (json.success) {
          setStatus("success");
          setStatusMessage(json.message || "Application submitted successfully.");
          setForm(EMPTY_FORM);
          setSubmitted(true);
          setErrors({ fullName: "", email: "", phone: "" });
          if (fileInputRef.current) fileInputRef.current.value = "";
        } else {
          setStatus("error");
          setStatusMessage(json.message || "Something went wrong sending your application. Please try again.");
        }
      } catch (err: unknown) {
        console.error(err instanceof Error ? err.message : err);
        setStatus("error");
        setStatusMessage("Something went wrong sending your application. Please try again.");
      }
      setTimeout(() => { setStatus("idle"); setStatusMessage(""); }, 5000);
    },
    [applyJob, form],
  );

  const otp = useOtpGate({
    type: CAREER_FORM_TYPE,
    onVerified: sendApplication,
  });

  /* Closing the modal or switching jobs drops any half-finished verification. */
  const cancelOtp = otp.cancel;
  useEffect(() => {
    cancelOtp();
  }, [applyJob, cancelOtp]);

  /* Submit emails a code first; the application goes out after it checks out. */
  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (otp.open) return;

    const errs: Record<ITField, string> = {
      fullName: validateField("fullName", form.fullName),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
    };
    setErrors(errs);
    if (Object.values(errs).some((msg) => msg !== "")) {
      setStatus("idle");
      return; // ← stop here
    }

    setStatus("sending");
    setStatusMessage("");
    const result = await otp.start(form.email);
    if (!result.success) {
      setStatus("error");
      setStatusMessage(result.message);
      setTimeout(() => { setStatus("idle"); setStatusMessage(""); }, 5000);
      return;
    }
    setStatus("idle");
  };

  /* ── Static data ───────────────────────────────── */
  const perks = [
    {
      icon: Heart,
      title: "Real Responsibility, From Day One",
      desc: "Here you don't need to wait for the \"real\" work. You'll be handed the genuine problem to solve from the day you start, with support when you need it.",
    },
    {
      icon: Globe,
      title: "Global Exposure, Local Team Feel",
      desc: "As we are operating across 17 countries, you'll work on projects with real international people; you can exchange and gain more knowledge and skills.",
    },
    {
      icon: Zap,
      title: "Learning that's Part of the Journey, Not an Afterthought",
      desc: "Technology is moving so fast - SAP, AI, Cybersecurity. In Infoplus, you'll get the chance to build skills, and you'll get the encouragement to grow with the technology, while working with the most experienced & talented people.",
    },
    {
      icon: Coffee,
      title: "Who we're Looking For",
      desc: "We hire based on skills and attitude over the ticking boxes of what you achieved. We care more about how you work than what's on the paper. All we see is whether you're taking pride in what you do or not. And then you can be trusted to get on with the job- you'll do well here. This applies to everyone, whether you're an experienced specialist or just starting your career, including throughout the internship programme.",
    },
  ];

  const positions: Job[] = [
    {
      id: 8,
      role: "Instructional Designer – Civil, ECE & CSE",
      team: "Engineering",
      location: "India",
      type: "Full-time",
      skills: ["Instructional Design", "E-Learning", "Storyboarding", "2D/3D Animation", "LMS"],
      desc: "Design and develop high-quality instructional content for technical education in Civil, ECE, and CSE disciplines.",
      details: [
        "Design and develop high-quality instructional content for technical education (Engineering, Polytechnic, ITI trades, etc.).",
        "Leverage 2 to 4 years of teaching experience as a Professor, Assistant Professor, or HOD — preferably in Engineering, Polytechnic, or ITI — to create impactful learning materials.",
        "As per the syllabus, develop content based on university standards for Engineering, Polytechnic, and ITI trades, including:",
        { indented: "(i) Theory Content: Preparing detailed textual content and explanations." },
        { indented: "(ii) Storyboards: Creating scripts and interactive visual plans for video lessons." },
        { indented: "(iii) Graphics: Designing 2D and 3D images/animations." },
        { indented: "(iv) Assessments: Developing quizzes and question-answer banks." },
        "Create visual-rich e-learning modules, including 2D/3D animations (Storyboard & Audio script), simulations, and interactive elements.",
        "Develop virtual lab activities, practical demonstrations, and skill-based learning content aligned with curriculum.",
        "Collaborate closely with Subject Matter Experts (SMEs) to ensure technical accuracy and relevance.",
        "Work with graphic designers, 3D animators, and multimedia teams to convert concepts into engaging visuals.",
        "Coordinate with project managers to ensure timely delivery of instructional assets and modules.",
        "Develop e-Learning content and storyboards with excellent writing and communication skills.",
        "Review, refine, and update existing modules based on feedback, syllabus changes, or quality audits.",
        "Integrate content into LMS or platform and ensure usability, accessibility, and learner engagement.",
        "You will be responsible for preparing the technical and educational content in accordance with the university syllabus and its core objectives.",
        { heading: "Preferred Skills / Added Advantages (E-Learning & Multimedia Tools):", noBullet: true, items: [] },
        "Experience with e-learning authoring tools such as Articulate Storyline, Adobe Captivate, or iSpring.",
        "Familiarity with LMS platforms, SCORM packaging, and digital learning delivery standards.",
        "Ability to use tools for storyboarding, scripting, wireframing (e.g., MS PowerPoint, Figma, Miro).",
        "Comfort working with multimedia teams using tools like Adobe Animate CC, After Effects, Blender, Maya, or similar.",
        "Teaching experience in Engineering, Polytechnic, or ITI is preferred.",
      ],
    },
    {
      id: 9,
      role: "Contract Administrator Executive",
      team: "Engineering",
      location: "India",
      type: "Full-time",
      skills: ["Contract Management", "Legal Documentation", "Negotiation", "Risk Analysis"],
      desc: "Negotiate and manage company contracts to ensure favourable terms, regulatory compliance, and effective vendor relationships.",
      details: [
        "Negotiates and manages all the contracts of the company to ensure that the business signs favourable terms and conditions. They understand the requirements of any contract or agreement their employer is entering and advise on how to get the most favourable terms and conditions.",
        { heading: "Other duties and responsibilities include:", items: [] },
        "Developing and maintaining relationships with independent contractors, vendors, suppliers, and customers.",
        "Creating standard contracts for the company's dealings with internal and external partners.",
        "Studying the requirements, duties, and obligations under contracts to ensure alignment with company goals and industry regulations.",
        "Supervising contract execution to ensure compliance with regulatory guidelines.",
        "Researching business partners and their history prior to writing contracts.",
        "Monitoring the implementation of signed contracts.",
        "Training, supervising, and managing the contract team.",
        "Maintaining, updating, and improving contractual records.",
        "The role will involve reviewing and issuing commercial contracts and will be required to liaise internally with the business and support functions, as well as externally with clients, third parties and external advisors to follow a contract review through to completion.",
        "Reviewing and amending various third-party agreements through to execution.",
        "Advising the business on risks within any contractual provisions, including research into resolving contract issues.",
        "Conducting and supporting negotiations with clients to achieve the best position for the business.",
        "Analyzing the legal issues, identifying risks involved in the agreements and capture the same in excel sheets and informing team as well as sales & presales teams on the same.",
        "Coordinating with sales/business functional teams to effectively address customer's insurance requirements.",
        "Responding to internal queries from business team with regards to rights and obligations under the existing agreements. To ensure appropriate processes are followed and required approvals received.",
        "Maintaining efficient, complete, auditable filing in line with department's filing policies for all documentation and correspondence.",
        "Dealing promptly with any contractual queries and/or requests from the business and internal support teams.",
        "Responding to client, consultant, and supplier emails; liaising between UK/EU offices and offshore locations.",
        "Generating internal reports and management information; ensuring contract lists are kept up-to-date.",
        "Reviewing insurance requirements in agreements before finalisation and informing project and business teams.",
        "Maintaining all legal records and files, coordinating with the Billings department for timely payments, and providing daily contractual correspondence.",
        "Checking background clauses in finalised agreements and initiating the same with background agencies.",
        { heading: "You will need to have:", mainBullets: true, noBullet: true, items: [
          "Experience of reviewing and negotiating a variety of commercial contracts.",
          "Good understanding of key contractual terms and conditions, including experience interpreting complex documents.",
          "Experience of managing competing deadlines and priorities.",
          "Meticulous attention to detail with excellent written and verbal communication skills.",
          "Ability to prioritise and manage a high volume of work.",
          "Ability to work effectively under pressure.",
          "Demonstrable approach to problem solving and decision making.",
        ]},
      ],
    },
    {
      id: 10,
      role: "3D Asset Artist",
      team: "Engineering",
      location: "India",
      type: "Full-time",
      skills: ["Blender", "Maya", "Substance Painter", "Unity", "PBR Texturing"],
      desc: "Create high-quality 3D models and assets, and set up production-ready scenes within Unity Engine.",
      details: [
        "We are looking for a skilled and creative 3D Asset Artist with strong experience in creating high-quality 3D models and assets based on concepts, drawings, photographs, and real-world references.",
        "The candidate will be responsible for the complete 3D asset creation workflow, including modeling, UV mapping, texturing, material creation, optimization, and preparation of production-ready assets.",
        "The candidate should also have hands-on knowledge of Unity Engine and be capable of taking completed 3D assets into Unity, setting up the stage/scene, applying materials, arranging assets, setting up lighting and cameras, and preparing the final scene for presentation or further development.",
        { heading: "Key Responsibilities:", noBullet: true, items: [] },
        "Create high-quality 3D models and assets based on concepts, drawings, photographs, and real-world references.",
        "Create high-poly and low-poly models according to project requirements.",
        "Perform retopology and mesh optimization while maintaining the required visual quality.",
        "Create clean and efficient UV layouts and UV maps.",
        "Create realistic PBR materials and textures.",
        "Perform texture baking and prepare required texture maps.",
        "Optimize geometry, textures, and materials for the intended application.",
        "Maintain proper scale, proportions, topology, naming conventions, pivots, and file organization.",
        "Prepare finished assets for integration and further production.",
        "Import completed assets into Unity.",
        "Set up and organize the Unity stage/scene using the finished 3D assets.",
        "Apply and configure materials and textures within Unity.",
        "Set up basic lighting, cameras, environment elements, and scene composition.",
        "Create and manage Unity prefabs where required.",
        "Ensure the final Unity scene represents the intended quality and appearance of the completed 3D assets.",
        "Make revisions and improvements based on feedback.",
        "Work closely with designers, developers, and other artists to meet project requirements.",
        { heading: "Key Requirements:", noBullet: true, items: [] },
        "Strong proficiency in Blender and/or Autodesk Maya.",
        "Strong understanding of 3D modeling, topology, edge flow, and mesh optimization.",
        "Experience with high-poly and low-poly modeling workflows.",
        "Good knowledge of UV unwrapping and UV optimization.",
        "Experience with Substance Painter and/or other texturing software.",
        "Strong understanding of PBR materials and texturing workflows.",
        "Knowledge of Base Color, Roughness, Metallic, Normal, and Ambient Occlusion maps.",
        "Good understanding of materials, shaders, and texture application.",
        "Ability to create accurate and detailed models from references.",
        "Strong understanding of proportion, scale, form, and visual detail.",
        "Ability to optimize assets without compromising the required visual quality.",
        "Hands-on experience with Unity Engine.",
        "Ability to import and integrate completed 3D assets into Unity.",
        "Ability to set up a complete stage/scene in Unity using finished assets.",
        "Basic knowledge of Unity lighting, materials, cameras, prefabs, and scene organization.",
        "Good understanding of real-time asset workflows.",
        "Strong attention to detail and ability to maintain consistent quality.",
        { heading: "Good to Have:", noBullet: true, items: [] },
        "Experience in product, prop, environment, architectural, or character modeling.",
        "Basic knowledge of rigging, skinning, and animation.",
        "Experience with V-Ray, Arnold, Cycles, or other rendering engines.",
        "Experience with ZBrush or other sculpting tools.",
        "Knowledge of Photoshop for texture editing and post-processing.",
        "Understanding of LOD, texture optimization, draw calls, and real-time performance.",
        "Knowledge of Unity URP/HDRP.",
        "Basic knowledge of Shader Graph.",
        "Experience creating complete Unity environments or scenes.",
        "Experience working with large 3D asset libraries and maintaining asset pipelines.",
        { heading: "Preferred Candidate Profile:", noBullet: true, items: [] },
        "Candidates with practical experience in 3D asset creation along with Unity scene/stage setup would be preferred.",
        "The candidate should be capable of handling the complete workflow: Reference → 3D Modeling → High Poly → Low Poly/Retopology → UV → Baking → Texturing → Materials → Final 3D Asset → Unity Import → Material Setup → Prefab → Stage/Scene Setup → Lighting & Camera → Final Output.",
        "A portfolio or demo reel showcasing high-quality 3D assets, materials, environments, and Unity scenes will be an advantage.",
      ],
    },
    {
      id: 11,
      role: "Instructional Designer (E&I)",
      team: "Engineering",
      location: "India",
      type: "Full-time",
      skills: ["Instructional Design", "E-Learning", "SCORM", "Storyboarding", "LMS"],
      desc: "Design and develop instructional content for Electrical & Instrumentation technical education programmes.",
      details: [
        "Design and develop high-quality instructional content for technical education (Engineering, Polytechnic, ITI trades, etc.).",
        "Leverage 2 to 4 years of teaching experience as a Professor, Assistant Professor, or HOD — preferably in Engineering, Polytechnic, or ITI — to create impactful learning materials.",
        "As per the syllabus, develop content based on university standards for Engineering, Polytechnic, and ITI trades, including:",
        { indented: "(i) Theory Content: Preparing detailed textual content and explanations." },
        { indented: "(ii) Storyboards: Creating scripts and interactive visual plans for video lessons." },
        { indented: "(iii) Graphics: Designing 2D and 3D images/animations." },
        { indented: "(iv) Assessments: Developing quizzes and question-answer banks." },
        "Create visual-rich e-learning modules, including 2D/3D animations (Storyboard & Audio script), simulations, and interactive elements.",
        "Develop virtual lab activities, practical demonstrations, and skill-based learning content aligned with curriculum.",
        "Collaborate closely with Subject Matter Experts (SMEs) to ensure technical accuracy and relevance.",
        "Work with graphic designers, 3D animators, and multimedia teams to convert concepts into engaging visuals.",
        "Coordinate with project managers to ensure timely delivery of instructional assets and modules.",
        "Develop e-Learning content and storyboards with excellent writing and communication skills.",
        "Review, refine, and update existing modules based on feedback, syllabus changes, or quality audits.",
        "Integrate content into LMS or platform and ensure usability, accessibility, and learner engagement.",
        "You will be responsible for preparing the technical and educational content in accordance with the university syllabus and its core objectives.",
        { heading: "Preferred Skills / Added Advantages (E-Learning & Multimedia Tools):", noBullet: true, items: [] },
        "Experience with e-learning authoring tools such as Articulate Storyline, Adobe Captivate, or iSpring.",
        "Familiarity with LMS platforms, SCORM packaging, and digital learning delivery standards.",
        "Ability to use tools for storyboarding, scripting, wireframing (e.g., MS PowerPoint, Figma, Miro).",
        "Comfort working with multimedia teams using tools like Adobe Animate CC, After Effects, Blender, Maya, or similar.",
        "Teaching experience in Engineering, Polytechnic, or ITI is preferred.",
      ],
    },
    {
      id: 12,
      role: "Unity Developer",
      team: "Engineering",
      location: "India",
      type: "Full-time",
      skills: ["Unity", "C#", "OOP", "WebGL", "Android"],
      desc: "Develop and maintain interactive real-time applications using Unity Engine and C#, working closely with 3D asset teams.",
      details: [
        "We are looking for skilled Unity Developers with strong experience in Unity Engine and C# to develop and maintain interactive real-time applications.",
        "The candidates will be responsible for developing, integrating, testing, and optimizing Unity applications while working closely with the 3D Asset and Unity Artist teams to integrate 3D assets and create interactive experiences.",
        { heading: "Key Responsibilities:", noBullet: true, items: [] },
        "Develop interactive applications and experiences using Unity and C#.",
        "Implement gameplay/application logic, UI, interactions, animations, and other required functionality.",
        "Integrate 3D assets, animations, materials, and environments into Unity.",
        "Work closely with 3D Artists and Unity Artists to ensure proper asset integration.",
        "Set up and manage Unity scenes, prefabs, lighting, cameras, and interactive elements.",
        "Optimize applications for performance, memory usage, loading time, and overall stability.",
        "Debug and resolve technical issues within Unity projects.",
        "Build and deploy applications for Windows, Android, WebGL, and other required platforms.",
        "Maintain clean, organized, and reusable C# code.",
        "Collaborate with the development and creative teams to deliver projects according to requirements.",
        "Test applications and ensure functionality and visual quality before final delivery.",
        { heading: "Key Requirements:", noBullet: true, items: [] },
        "Strong proficiency in C# and Unity Engine.",
        "Good understanding of Object-Oriented Programming (OOP).",
        "Hands-on experience developing applications using Unity.",
        "Strong understanding of Unity scenes, Game Objects, Components, Prefabs, UI, Animations, and Asset Management.",
        "Experience integrating 3D models, materials, textures, animations, and other assets into Unity.",
        "Good understanding of Unity physics, colliders, ray casting, and interactions.",
        "Experience with performance optimization and debugging.",
        "Experience with Git or other version-control systems.",
        "Ability to work with existing Unity projects and understand established project structures.",
        "Good problem-solving and debugging skills.",
        { heading: "Good to Have:", noBullet: true, items: [] },
        "Experience developing VR/AR/XR applications.",
        "Knowledge of OpenXR and XR Interaction Toolkit.",
        "Experience with Meta Quest, HTC Vive, or other XR devices.",
        "Experience with AR Foundation.",
        "Experience with WebGL and Android deployment.",
        "Knowledge of Unity URP/HDRP.",
        "Experience with Unity Addressables or other asset management systems.",
        "Basic understanding of 3D modeling tools such as Blender or Maya.",
        "Experience working with interactive simulations, training applications, or real-time 3D applications.",
        { heading: "Preferred Candidate Profile:", noBullet: true, items: [] },
        "Candidates with strong hands-on experience in Unity development, C#, real-time 3D applications, and project deployment would be preferred.",
        "Candidates with previous experience working closely with 3D Artists and Unity Artists will be an added advantage.",
        "Portfolio or demos showcasing previous Unity projects is an advantage.",
      ],
    },
    {
      id: 1,
      role: "Pega Lead Systems Architect",
      team: "Engineering",
      location: "UK",
      type: "Full-time",
      skills: ["Pega PRPC", "CLSA", "BPM/BRE", "Agile", "Cloud"],
      desc: "Architect and design enterprise business applications using Pega PRPC frameworks, leading teams from inception to transition.",
      details: [
        "Should be a Pega Certified Lead System Architect (CLSA) responsible for architecting and designing business applications using Pega PRPC and other Pega frameworks.",
        "Should have very good hands-on experience in delivering Pega skill based solutions to the customer with high output.",
        "Should have effective communication and interpretation skills to discuss business and technical implementations with internal teams and clients to deliver user interface requirements like Graphical User Interfaces, Screen, and Interface mock-ups.",
        "Should be responsible for Design & Technical leadership of Pega PRPC program / application / solution (8.x) — including designing of enterprise class structure, data and application framework model.",
        "Should provide architecture and design guidance to project teams developing BPM/BRE solutions using Pega.",
        "Should have a strong technical background and hands-on experience in developing applications and exploring new capabilities of Pega technology.",
        "Should have experience working with Product Owners to assist in developing requirements, solution concepts and prototypes.",
        "Should have a good understanding of interface/integration technologies and customers' needs so they can be translated into requirements.",
        "Should possess the ability to lead requirements conversations and help drive discussions to out-of-the-box capabilities to meet business requirements.",
        "Should ensure Pega application/solutions are scalable and robust and follow Pega best practices in terms of security, performance and integrations.",
        "Should possess strong leadership skills to lead a team independently from Inception to Transition.",
        "Should have very good experience and understanding in Agile methodology.",
        "Should provide in-depth technical consultation to business partners and IT management/development to ensure efficient application systems.",
        "Should possess good knowledge of cloud systems and hands-on experience with application servers.",
      ],
    },
    {
      id: 2,
      role: "Data / Business Analyst",
      team: "Data Science",
      location: "UK",
      type: "Full-time",
      skills: ["Business Analysis", "Data Analysis", "GAP Analysis", "Data Visualisation"],
      desc: "Perform business and data analysis, GAP analysis, and data visualisation for enterprise clients.",
      details: [
        "Should have good knowledge in Business Analysis, Data, GAP Analysis, and Data Visualisation.",
        "Should have 7+ Years of Experience.",
      ],
    },
    {
      id: 3,
      role: ".NET Full Stack Developer",
      team: "Engineering",
      location: "UK",
      type: "Full-time",
      skills: ["C#", ".NET Core", "SQL Server", "Azure"],
      desc: "Develop full-stack enterprise applications using .NET Core, C#, SQL Server, and Azure cloud services.",
      details: [
        "Should have good knowledge in C#, .Net, .NET Core, Microsoft SQL Server, and Azure.",
        "Should have 6+ Years of Experience.",
      ],
    },
    {
      id: 4,
      role: "Test Analyst",
      team: "Engineering",
      location: "UK",
      type: "Full-time",
      skills: ["Manual Testing", "Automation Testing", "Regression Testing"],
      desc: "Conduct manual, automation, and regression testing for enterprise-grade applications.",
      details: [
        "Should have good knowledge in Manual, Automation, and Regression Testing.",
        "Should have 6+ Years of Experience.",
      ],
    },
    {
      id: 5,
      role: "Front End Developer",
      team: "Engineering",
      location: "UK",
      type: "Full-time",
      skills: ["Vue.js", "React", "JavaScript"],
      desc: "Build high-quality user interfaces using Vue.js, React and JavaScript for enterprise clients.",
      details: [
        "Should have good knowledge in Vue and React JS, JavaScript.",
        "Should have 6 Years of Experience.",
      ],
    },
    {
      id: 6,
      role: "Senior Software Engineer",
      team: "Engineering",
      location: "UK",
      type: "Full-time",
      skills: ["Java/J2EE", "Oracle SQL", "Microservices", "Pega"],
      desc: "Develop enterprise software solutions using Java/J2EE, Oracle SQL, Microservices, and Pega frameworks.",
      details: [
        "Should have good knowledge in Java/J2EE, Oracle SQL, Microservices, JavaScript, and Pega.",
        "Should have 7+ Years of Experience.",
      ],
    },
    {
      id: 7,
      role: "Analyst Programmer",
      team: "Engineering",
      location: "UK",
      type: "Full-time",
      skills: ["Java", "Spring Boot", "Microservices", "AWS/Azure/GCP"],
      desc: "Design and develop scalable applications using Java, Spring Boot, Microservices, and cloud platforms.",
      details: [
        "Should have good knowledge in Java, Oracle, JavaScript frameworks — preferably Angular, TypeScript, Node.js, NPM, server-side frameworks, Java Spring, Spring Cloud, Hibernate, Spring Boot, Microservices.",
        "Should have experience with AWS, Azure, and/or GCP cloud platforms.",
        "Should have 6 Years of Experience.",
      ],
    },
  ];

  const teams = ["All", "Engineering", "Data Science"];
  const locs = ["All", "UK", "India"];

  const filtered = positions.filter((p) => {
    const matchTeam = teamFilter === "All" || p.team === teamFilter;
    const matchLoc =
      locationFilter === "All" || p.location.includes(locationFilter);
    return matchTeam && matchLoc;
  });

  const inputCls =
    "w-full px-4 py-3 border border-[#e5e4e7] rounded-xl text-[14px] text-[#111111] focus:outline-none focus:border-[#EB9B3D] focus:ring-2 focus:ring-[#EB9B3D]/20 transition-all placeholder:text-[#bbb]";

  return (
    <div className="w-full">
      <PageMeta
        title="Careers at Infoplus Technologies | Find Your Next Opportunity"
        description="Looking for a place where your skills and ideas can make a difference? Explore career opportunities at Infoplus Technologies across different teams, locations, and areas of expertise."
        keywords="Careers at Infoplus Technologies, Infoplus careers, jobs at Infoplus, Infoplus job opportunities, career opportunities, technology jobs, IT careers"
        path="/careers"
      />

      {/* ── 1. HERO ───────────────────────────────────── */}
      <PageHero
        title="Global Career Opportunities for a Better Tomorrow"
        description="Join a global team of passionate builders, thinkers, and innovators dedicated to shaping the digital landscape."
        badge="CAREERS"
        variant="split"
        image={imgCareerHero}
      >
        <div className="mt-8">
          <button
            onClick={() =>
              document
                .getElementById("open-positions")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] text-white px-8 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)] cursor-pointer"
          >
            View Open Roles
          </button>
        </div>
      </PageHero>

      {/* ── 2. WHY ARE YOU WAITING ────────────────────── */}
      <section className="py-14 lg:py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #EB9B3D 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left: decorative card */}
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#141A3D] p-10 overflow-hidden min-h-110 flex flex-col justify-between">
                {/* Watermark */}
                <div className="absolute -top-4 -right-4 text-[13rem] font-black text-white/4 leading-none select-none pointer-events-none">
                  ?
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#EB9B3D] opacity-25 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-[#EB9B3D] text-white text-[11px] font-bold uppercase tracking-widest mb-8">
                    Join Us
                  </span>
                  <h2 className="text-[26px] lg:text-[42px] font-black text-white leading-[1.1]">
                    Why are
                    <br />
                    you <span className="text-[#DA4D33]">waiting?</span>
                  </h2>
                </div>

                <div className="relative z-10 border-t border-white/10 pt-6">
                  <p className="text-white/40 text-[13px] italic leading-relaxed">
                    "We have excellent opportunities for passionate people who
                    love technology and innovation."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: text */}
            <div className="lg:col-span-7 space-y-7">
              <ScrollReveal direction="right">
                <p className="text-[16px] text-[#555555] leading-[1.85] text-justify">
                  We need you by our side for developing high-end applications
                  that will change the life of our clients and their end users
                  for better. Also, if you love being part of the web, then, we
                  have got excellent opportunities for you in digital marketing
                  to help our clients take their business soaring beyond
                  unexplored horizons.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={110}>
                <div className="pl-5 border-l-4 border-[#EB9B3D] bg-[rgba(235,155,61,0.06)] rounded-r-2xl py-4 pr-6">
                  <span className="text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-2 block">
                    Our Expertise
                  </span>
                  <p className="text-[16px] font-semibold text-[#0D112D] leading-snug">
                    Specializes in finding and placing professionals across all
                    sectors.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={210}>
                <p className="text-[16px] text-[#555555] leading-[1.85] text-justify">
                  With our fantastic teams, cutting-edge technology and
                  extensive branch network, we are big enough to really deliver
                  while local enough to truly care. Our teams of Recruiters,
                  Resourcers and Relationship Managers pride themselves on their
                  expert knowledge and understanding of the local job market and
                  their specialist Industry sectors; with many of our staff
                  joining us directly from the sectors they now recruit into.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY WORK WITH US ───────────────────────── */}
      <section className="py-14 lg:py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #EB9B3D 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Why Us
              </span>
              <h2 className="text-[24px] lg:text-[38px] font-bold text-[#111111] mb-5 leading-tight">
                Why work with us?
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75]">
                We believe that great work happens when you&apos;re happy,
                healthy, and challenged. We&apos;ve built a culture that
                prioritises autonomy, continuous learning, and cross-border
                collaboration.
              </p>
            </div>
          </ScrollReveal>

          {/* Top 3 perk cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {perks.slice(0, 3).map((perk, i) => {
              const PIcon = perk.icon;
              return (
                <ScrollReveal key={i} variant="card" delay={i * 110}>
                  <div className="group h-full bg-white border border-[#FDE8C0] rounded-2xl p-7 hover:border-[#EB9B3D]/30 hover:shadow-[0_12px_40px_-8px_rgba(235,155,61,0.13)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <PIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#111111] mb-3 group-hover:text-[#EB9B3D] transition-colors leading-snug">
                      {perk.title}
                    </h3>
                    <p className="text-[13.5px] text-[#555555] leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* 4th card – full-width feature */}
          <ScrollReveal direction="up" delay={330}>
            <div className="group bg-white border border-[#FDE8C0] rounded-2xl p-8 hover:border-[#EB9B3D]/30 hover:shadow-[0_12px_40px_-8px_rgba(235,155,61,0.10)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-7 h-7 text-white" strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold text-[#111111] mb-3 group-hover:text-[#EB9B3D] transition-colors leading-snug">
                    {perks[3].title}
                  </h3>
                  <p className="text-[14.5px] text-[#555555] leading-[1.8]">
                    {perks[3].desc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. OPEN POSITIONS ─────────────────────────── */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Join Us
              </span>
              <div className="flex flex-col min-[376px]:flex-row min-[376px]:items-baseline min-[376px]:justify-between gap-2 min-[376px]:gap-4">
                <h2 className="text-[22px] lg:text-[36px] font-bold text-[#111111]">
                  Open Positions
                </h2>
                <p className="text-[15px] text-[#555555]">
                  <span className="font-bold text-[#EB9B3D]">
                    {filtered.length}
                  </span>{" "}
                  {filtered.length === 1 ? "role" : "roles"} available
                  {(teamFilter !== "All" || locationFilter !== "All") && (
                    <span className="ml-2 text-[#EB9B3D] font-semibold text-[13px]">
                      · Filtered
                    </span>
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Filter bar ── */}
          <ScrollReveal direction="up" delay={80}>
            <div className="bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl p-5 mb-10">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Team */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-3">
                    Team
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {teams.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTeamFilter(t)}
                        className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                          teamFilter === t
                            ? "bg-[#EB9B3D] text-white shadow-[0_4px_12px_rgba(235,155,61,0.30)]"
                            : "bg-white border border-[#e5e4e7] text-[#555555] hover:border-[#EB9B3D]/50 hover:text-[#EB9B3D]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-px bg-[#e5e4e7] hidden sm:block shrink-0" />

                {/* Location */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-3">
                    Location
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {locs.map((l) => (
                      <button
                        key={l}
                        onClick={() => setLocationFilter(l)}
                        className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                          locationFilter === l
                            ? "bg-[#EB9B3D] text-white shadow-[0_4px_12px_rgba(235,155,61,0.30)]"
                            : "bg-white border border-[#e5e4e7] text-[#555555] hover:border-[#EB9B3D]/50 hover:text-[#EB9B3D]"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset */}
                {(teamFilter !== "All" || locationFilter !== "All") && (
                  <button
                    onClick={() => {
                      setTeamFilter("All");
                      setLocationFilter("All");
                    }}
                    className="flex items-center gap-1.5 text-[13px] font-semibold text-[#555555] hover:text-[#EB9B3D] transition-colors shrink-0 self-end pb-0.5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" /> Reset
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Job cards ── */}
          {filtered.length === 0 ? (
            <ScrollReveal direction="up">
              <div className="text-center py-24 bg-white rounded-2xl border border-[rgba(13,17,45,0.10)]">
                <p className="text-[18px] font-semibold text-[#111111] mb-2">
                  No roles match your filters
                </p>
                <p className="text-[15px] text-[#555555] mb-6">
                  Try adjusting your team or location selection.
                </p>
                <button
                  onClick={() => {
                    setTeamFilter("All");
                    setLocationFilter("All");
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#EB9B3D] text-white rounded-full font-bold text-[15px] hover:bg-[#0D112D] transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((job, idx) => (
                <ScrollReveal key={job.id} variant="card" delay={idx * 80}>
                  <div className="group h-full flex flex-col bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl overflow-hidden hover:border-[rgba(235,155,61,0.35)] hover:shadow-[0_12px_40px_rgba(235,155,61,0.10)] hover:-translate-y-1 transition-all duration-300">
                    <div className="p-6 flex flex-col flex-1">
                      {/* Team + Location badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${TEAM_BADGE[job.team] ?? "bg-[rgba(13,17,45,0.05)] text-[#4A4F63] border border-[rgba(13,17,45,0.08)]"}`}
                        >
                          {job.team}
                        </span>
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(13,17,45,0.05)] text-[#4A4F63] text-[11px] font-medium border border-[rgba(13,17,45,0.08)]">
                          <MapPin className="w-3 h-3 shrink-0" />
                          {job.location}
                        </span>
                      </div>

                      <h3
                        className="text-[18px] font-bold text-[#111111] mb-2 group-hover:text-[#EB9B3D] transition-colors cursor-pointer hover:text-[#EB9B3D] hover:underline underline-offset-2"
                        onClick={() => setViewJob(job)}
                      >
                        {job.role}
                      </h3>
                      <p className="text-[14px] text-[#555555] leading-relaxed mb-4 flex-1">
                        {job.desc}
                      </p>

                      {/* Job Type */}
                      <div className="mb-4">
                        <span className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                          <Briefcase className="w-3.5 h-3.5 shrink-0" />
                          {job.type}
                        </span>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {job.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-lg bg-[rgba(13,17,45,0.04)] text-[#4A4F63] text-[11px] font-medium border border-[rgba(13,17,45,0.08)]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setViewJob(job)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#141A3D] text-white text-[14px] font-bold hover:bg-[#EB9B3D] transition-colors duration-200 group-hover:bg-[#EB9B3D] cursor-pointer whitespace-nowrap"
                        >
                          <span className="flex items-center gap-1.5 leading-none">
                            View Details
                            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                          </span>
                        </button>
                        <button
                          onClick={() => setApplyJob(job)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-[#141A3D] text-[#141A3D] text-[14px] font-bold hover:bg-[#141A3D] hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <FAQAccordion
        faqs={CAREERS_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about careers at Infoplus."
      />

      {/* ── VIEW DETAILS MODAL ────────────────────────── */}
      {viewJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeViewModal}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#141A3D] px-7 py-6 flex items-start justify-between shrink-0">
              <div>
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest mb-1">
                  Job Description
                </p>
                <h3 className="text-white text-[20px] font-bold leading-snug">
                  {viewJob.role}
                </h3>
                <p className="text-white/50 text-[13px] mt-1">
                  {viewJob.team} · {viewJob.location} · {viewJob.type}
                </p>
              </div>
              <button
                onClick={closeViewModal}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shrink-0 mt-0.5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-7">
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {viewJob.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg bg-[rgba(13,17,45,0.05)] text-[#4A4F63] text-[12px] font-medium border border-[rgba(13,17,45,0.08)]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Requirements */}
              <h4 className="text-[15px] font-bold text-[#111111] mb-4">Requirements</h4>
              <ul className="space-y-3 mb-8">
                {viewJob.details.map((entry, i) =>
                  typeof entry === "string" ? (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#EB9B3D] shrink-0" />
                      <p className="text-[14px] text-[#555555] leading-relaxed">{entry}</p>
                    </li>
                  ) : "indented" in entry ? (
                    <li key={i} className="flex items-start gap-3 ml-6">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EB9B3D]/70 shrink-0" />
                      <p className="text-[14px] text-[#555555] leading-relaxed">{entry.indented}</p>
                    </li>
                  ) : (
                    <li key={i}>
                      <div className="flex items-start gap-3">
                        {entry.items.length > 0 && !entry.noBullet && <span className="mt-1.5 w-2 h-2 rounded-full bg-[#EB9B3D] shrink-0" />}
                        <p className="text-[14px] font-semibold text-[#333333] leading-relaxed">{entry.heading}</p>
                      </div>
                      {entry.items.length > 0 && (
                        <ul className="mt-2 ml-5 space-y-2">
                          {entry.items.map((sub, j) => (
                            <li key={j} className="flex items-start gap-2.5">
                              <span className={`mt-1.5 shrink-0 rounded-full ${entry.mainBullets ? "w-2 h-2 bg-[#EB9B3D]" : "w-1.5 h-1.5 bg-[#EB9B3D]/60"}`} />
                              <p className="text-[14px] text-[#555555] leading-relaxed">{sub}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                )}
              </ul>

              {/* Apply CTA */}
              <button
                onClick={() => { closeViewModal(); setApplyJob(viewJob); }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] text-white text-[15px] font-bold hover:brightness-110 transition-all cursor-pointer"
              >
                Apply for this Role
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── APPLY MODAL ───────────────────────────────── */}
      {applyJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#141A3D] px-7 py-6 flex items-start justify-between shrink-0">
              <div>
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest mb-1">
                  Applying for
                </p>
                <h3 className="text-white text-[20px] font-bold leading-snug">
                  {applyJob.role}
                </h3>
                <p className="text-white/50 text-[13px] mt-1">
                  {applyJob.team} · {applyJob.location}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shrink-0 mt-0.5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-7">
              {submitted ? (
                /* ── Success state ── */
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-[22px] font-bold text-[#111111] mb-2">
                    Application Submitted!
                  </h4>
                  <p className="text-[15px] text-[#555555] mb-8 max-w-sm mx-auto">
                    {statusMessage || "Thank you for your interest. We'll review your application and get back to you soon."}
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#EB9B3D] text-white rounded-full text-[15px] font-bold hover:bg-[#0D112D] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* ── Application form ── */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-[13px] text-[#777777] mb-5">
                    Fields marked{" "}
                    <span className="text-[#EB9B3D] font-bold">*</span> are
                    mandatory.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Full Name <span className="text-[#EB9B3D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) =>
                          setForm({ ...form, fullName: e.target.value })
                        }
                        placeholder="John Doe"
                        disabled={otp.open}
                        className={inputCls}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[12px] text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Email Address <span className="text-[#EB9B3D]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        disabled={otp.open}
                        className={inputCls}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[12px] text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Phone Number <span className="text-[#EB9B3D]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="+44 7700 000000"
                        disabled={otp.open}
                        className={inputCls}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[12px] text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Current Location */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Current Location
                      </label>
                      <input
                        type="text"
                        value={form.currentLocation}
                        onChange={(e) =>
                          setForm({ ...form, currentLocation: e.target.value })
                        }
                        placeholder="London, UK"
                        disabled={otp.open}
                        className={inputCls}
                      />
                    </div>
                    {/* Years of Experience */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Years of Experience{" "}
                        <span className="text-[#EB9B3D]">*</span>
                      </label>
                      <select
                        required
                        value={form.experience}
                        onChange={(e) =>
                          setForm({ ...form, experience: e.target.value })
                        }
                        disabled={otp.open}
                        className={inputCls + " bg-white"}
                      >
                        <option value="">Select years</option>
                        <option>0 – 1 year</option>
                        <option>1 – 3 years</option>
                        <option>3 – 5 years</option>
                        <option>5 – 8 years</option>
                        <option>8 – 12 years</option>
                        <option>12+ years</option>
                      </select>
                    </div>

                    {/* Notice Period */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Notice Period
                      </label>
                      <select
                        value={form.noticePeriod}
                        onChange={(e) =>
                          setForm({ ...form, noticePeriod: e.target.value })
                        }
                        disabled={otp.open}
                        className={inputCls + " bg-white"}
                      >
                        <option value="">Select period</option>
                        <option>Immediate</option>
                        <option>2 weeks</option>
                        <option>1 month</option>
                        <option>2 months</option>
                        <option>3 months</option>
                        <option>More than 3 months</option>
                      </select>
                    </div>
                  </div>

                  {/* Upload Resume */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                      Upload Resume
                    </label>
                    <label className={`${inputCls} flex items-center cursor-pointer`}>
                      <span className={`flex-1 truncate text-[14px] ${form.file ? "text-[#222]" : "text-[#aaa]"}`}>
                        {form.file ? form.file.name : "Choose file"}
                      </span>
                      <span
                        className="ml-3 shrink-0 px-3 py-1 rounded-lg text-[12px] font-semibold text-white"
                        style={{ background: "linear-gradient(135deg,#EB9B3D 0%,#DA4D33 100%)" }}
                      >
                        Browse
                      </span>
                      <input
                        type="file"
                        disabled={otp.open}
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                    {fileError && (
                      <p className="mt-1 text-[12px] text-red-600">
                        {fileError}
                      </p>
                    )}
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      value={form.linkedin}
                      onChange={(e) =>
                        setForm({ ...form, linkedin: e.target.value })
                      }
                      placeholder="https://linkedin.com/in/yourname"
                      disabled={otp.open}
                      className={inputCls}
                    />
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                      Cover Letter
                    </label>
                    <textarea
                      rows={4}
                      value={form.coverLetter}
                      onChange={(e) =>
                        setForm({ ...form, coverLetter: e.target.value })
                      }
                      placeholder="Tell us why you're the perfect fit for this role..."
                      disabled={otp.open}
                      className={inputCls + " resize-none"}
                    />
                  </div>
                  {status === "error" && statusMessage && (
                    <p className="text-[13px] text-red-600">
                      {statusMessage}
                    </p>
                  )}
                  {otp.open ? (
                    <OtpPanel
                      gate={otp}
                      tone="light"
                      accent="#EB9B3D"
                      submitLabel="Verify & Submit Application"
                    />
                  ) : (
                    <button
                      type="submit"
                      disabled={status === "sending" || status === "success"}
                      className="w-full py-4 bg-[#EB9B3D] text-white rounded-xl font-semibold text-[15px] hover:bg-[#0D112D] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#EB9B3D] flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Submitting…
                        </>
                      ) : "Submit Application"}
                    </button>
                  )}
                  <div className="flex items-start gap-2 text-[12px] text-[#888] mt-2">
                    <Shield className="w-4 h-4 text-[#EB9B3D]/50 shrink-0 mt-0.5" />
                    <span>
                      We respect your privacy. We promise we won't spam you :)
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareersPage;
