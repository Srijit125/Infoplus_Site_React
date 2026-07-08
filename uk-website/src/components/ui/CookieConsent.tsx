import { useState, useEffect } from "react";
import { Cookie, X, ShieldCheck, BarChart3, Settings2, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "infoplus-cookie-consent";

const COOKIE_TYPES = [
  { icon: ShieldCheck, label: "Necessary",   color: "#6128a6", always: true },
  { icon: BarChart3,   label: "Analytics",   color: "#aa3bff", always: false },
  { icon: Settings2,   label: "Functional",  color: "#aa3bff", always: false },
  { icon: Target,      label: "Targeting",   color: "#f85d37", always: false },
];

export function CookieConsent() {
  const [show, setShow]       = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const local   = localStorage.getItem(CONSENT_KEY);
    const session = sessionStorage.getItem("cookie-banner-dismissed");
    if (!local && !session) {
      setShow(true);
      // A second RAF + timeout ensures the element has painted before CSS transition fires
      requestAnimationFrame(() => {
        setTimeout(() => setVisible(true), 80);
      });
    }
  }, []);

  const dismiss = (choice: "accepted" | "rejected" | "managed") => {
    setVisible(false);
    setTimeout(() => {
      if (choice === "managed") {
        sessionStorage.setItem("cookie-banner-dismissed", "true");
      } else {
        localStorage.setItem(CONSENT_KEY, choice);
      }
      setShow(false);
    }, 420);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[9999] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
      style={{
        transition: "transform 0.48s cubic-bezier(0.22,1,0.36,1), opacity 0.42s ease",
        transform:  visible ? "translateY(0)" : "translateY(115%)",
        opacity:    visible ? 1 : 0,
      }}
    >
      <div className="max-w-5xl mx-auto pointer-events-auto relative">
        {/* Card */}
        <div className="relative bg-[#130826]/97 border border-[#aa3bff]/25 rounded-2xl shadow-[0_-8px_48px_rgba(97,40,166,0.30),0_24px_64px_rgba(0,0,0,0.55)] overflow-hidden backdrop-blur-xl">

          {/* Rainbow top accent */}
          <div className="h-[2px] bg-linear-to-r from-[#6128a6] via-[#aa3bff] to-[#f85d37]" />

          <div className="px-5 py-5 sm:px-6 sm:py-5">
            <div className="flex flex-col lg:flex-row gap-5 lg:items-center pr-8 lg:pr-0">

              {/* Icon + text */}
              <div className="flex gap-3.5 items-start flex-1 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#aa3bff]/15 border border-[#aa3bff]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5 text-[#aa3bff]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-bold text-white mb-1 leading-tight">
                    Cookie Preferences
                  </p>
                  <p className="text-[13px] text-white/55 leading-relaxed">
                    We use cookies to enhance your experience, analyse site traffic, and personalise content.
                    Clicking{" "}
                    <span className="text-white/80 font-semibold">"Accept All"</span>{" "}
                    consents to all cookies.{" "}
                    <Link
                      to="/cookie-policy"
                      onClick={() => dismiss("managed")}
                      className="text-[#aa3bff] hover:underline underline-offset-2 whitespace-nowrap"
                    >
                      Cookie Policy →
                    </Link>
                  </p>

                  {/* Cookie type pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {COOKIE_TYPES.map((ct) => (
                      <span
                        key={ct.label}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                        style={{
                          borderColor: `${ct.color}35`,
                          backgroundColor: `${ct.color}12`,
                          color: ct.color,
                        }}
                      >
                        <ct.icon className="w-2.5 h-2.5" />
                        {ct.label}
                        {ct.always && <span className="opacity-60 ml-0.5">· always on</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 shrink-0">
                <Link
                  to="/cookie-policy"
                  onClick={() => dismiss("managed")}
                  className="px-4 py-2 rounded-xl text-[12px] font-semibold text-white/50 border border-white/12 hover:text-white/80 hover:border-white/25 transition-all duration-200 whitespace-nowrap"
                >
                  Manage Preferences
                </Link>
                <button
                  onClick={() => dismiss("rejected")}
                  className="px-4 py-2 rounded-xl text-[12px] font-semibold text-white/50 border border-white/12 hover:text-white/80 hover:border-white/25 transition-all duration-200 whitespace-nowrap"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => dismiss("accepted")}
                  className="px-5 py-2 rounded-xl text-[13px] font-bold bg-[#f85d37] hover:bg-[#e84d27] text-white transition-colors duration-200 shadow-[0_4px_16px_rgba(248,93,55,0.40)] whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* X close treats as "reject" */}
        <button
          onClick={() => dismiss("rejected")}
          aria-label="Close cookie banner"
          className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/6 hover:bg-white/14 border border-white/10 flex items-center justify-center text-white/40 hover:text-white/80 transition-all duration-200"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
