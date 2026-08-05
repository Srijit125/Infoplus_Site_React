import { useState } from "react";
import { Plus } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Link } from "react-router-dom";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  badge?: string;
  title?: string;
  subtitle?: string;
  defaultOpen?: number;
}

export function FAQAccordion({
  faqs,
  badge = "FAQs",
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know. Can't find what you're looking for? Reach out to our team.",
  defaultOpen = 0,
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-[-10%] right-[-6%] w-96 h-96 rounded-full bg-[#ecdaff] opacity-55 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[-8%] left-[-4%] w-72 h-72 rounded-full bg-[#6128a6]/10 blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* ── Section header ── */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 pb-10 border-b border-[#e2ddf0]">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-6">
                {badge}
              </span>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-black text-[#0d0517] leading-[1.1] tracking-tight">
                {title.split(" ").slice(0, Math.ceil(title.split(" ").length / 2)).join(" ")}
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg,#6128a6 0%,#aa3bff 60%,#f85d37 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {title.split(" ").slice(Math.ceil(title.split(" ").length / 2)).join(" ")}
                </span>
              </h2>
            </div>
            <div className="lg:max-w-xs shrink-0">
              <p className="text-[15px] text-[#666] leading-relaxed mb-6">{subtitle}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-[#6128a6] hover:text-[#f85d37] transition-colors duration-200 group"
              >
                Still have questions? Contact us
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Accordion ── */}
        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={i} direction="up" delay={i * 50}>
                <div
                  className={`relative border-b transition-colors duration-300 ${
                    isOpen ? "border-[#6128a6]/25" : "border-[#e2ddf0]"
                  }`}
                >
                  {/* Active left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full transition-all duration-500 origin-top"
                    style={{
                      background: "linear-gradient(180deg,#6128a6,#aa3bff)",
                      transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                    }}
                  />

                  {/* Question row */}
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-5 py-7 pl-6 pr-4 text-left group"
                  >
                    {/* Number */}
                    <span
                      className="shrink-0 text-[11px] font-black tracking-widest transition-colors duration-300 w-6"
                      style={{ color: isOpen ? "#6128a6" : "#bbb" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className="flex-1 text-[17px] font-semibold leading-snug transition-colors duration-300"
                      style={{ color: isOpen ? "#6128a6" : "#0d0517" }}
                    >
                      {faq.q}
                    </span>

                    {/* Toggle */}
                    <span
                      className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border"
                      style={{
                        backgroundColor: isOpen ? "#6128a6" : "transparent",
                        borderColor: isOpen ? "#6128a6" : "#d5d0e0",
                        color: isOpen ? "#fff" : "#888",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: isOpen ? "400px" : "0px",
                      opacity: isOpen ? 1 : 0,
                      transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
                    }}
                  >
                    <div className="pl-17 pr-16 pb-8">
                      <p className="text-[15px] text-[#555] leading-[1.85]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
