import { type ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
  variant?: "centered" | "split" | "gradient";
  image?: string;
  children?: ReactNode;
}

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

function heroStyle(delay: number, from: "up" | "down" | "fade" = "up") {
  const transform =
    from === "up"
      ? "translateY(32px)"
      : from === "down"
      ? "translateY(-32px)"
      : "none";
  return {
    animation: `heroEnter 750ms ${ease} ${delay}ms both`,
    ["--hero-from" as string]: transform,
  } as React.CSSProperties;
}

export function PageHero({
  title,
  description,
  badge,
  variant = "centered",
  image,
  children,
}: PageHeroProps) {
  if (variant === "split") {
    return (
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#0d0517]">
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* gradient orb */}
        <div className="absolute top-0 left-0 w-150 h-150 rounded-full bg-[#6128a6] opacity-20 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              {badge && (
                <span
                  className="inline-block py-1.5 px-4 rounded-full bg-[#f85d37]/10 border border-[#f85d37]/30 text-[#f85d37] text-[11px] font-bold uppercase tracking-widest mb-7"
                  style={heroStyle(80)}
                >
                  {badge}
                </span>
              )}
              <h1
                className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold text-white leading-[1.1] mb-6"
                style={heroStyle(200)}
              >
                {title}
              </h1>
              <p
                className="text-[clamp(1rem,2vw,1.2rem)] text-white/70 leading-relaxed mb-10"
                style={heroStyle(310)}
              >
                {description}
              </p>
              <div style={heroStyle(420)}>{children}</div>
            </div>

            {image && (
              <div className="relative" style={heroStyle(280, "down")}>
                <div className="absolute inset-0 bg-[#6128a6] rounded-3xl translate-x-4 translate-y-4 opacity-30 blur-2xl" />
                <img
                  src={image}
                  alt={title}
                  className="w-full h-135 object-cover rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 z-20" />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "gradient") {
    return (
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-40 overflow-hidden bg-[#0d0517] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-[#381f55] rounded-full blur-[120px] opacity-60" />
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-[#6128a6] rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[70%] bg-[#f85d37] rounded-full blur-[140px] opacity-15" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          {badge && (
            <span
              className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest mb-7"
              style={heroStyle(80)}
            >
              {badge}
            </span>
          )}
          <h1
            className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tight mb-8 leading-none text-white"
            style={heroStyle(200)}
          >
            {title}
          </h1>
          <p
            className="text-[clamp(1rem,2vw,1.25rem)] text-white/60 font-light leading-relaxed mb-12 max-w-3xl mx-auto"
            style={heroStyle(320)}
          >
            {description}
          </p>
          <div style={heroStyle(430)}>{children}</div>
        </div>
      </section>
    );
  }

  // Default: centered — dark brand background (matches transparent white-text header)
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden bg-[#0d0517]">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* subtle orb */}
      <div className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full bg-[#6128a6] opacity-20 blur-[120px] pointer-events-none" />
      {/* brand accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#6128a6]/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        {badge && (
          <span
            className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold uppercase tracking-widest mb-7"
            style={heroStyle(80)}
          >
            {badge}
          </span>
        )}
        <h1
          className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white tracking-tight mb-6"
          style={heroStyle(200)}
        >
          {title}
        </h1>
        <p
          className="text-[clamp(1rem,2vw,1.2rem)] text-white/60 leading-relaxed mb-10 font-light"
          style={heroStyle(320)}
        >
          {description}
        </p>
        <div style={heroStyle(430)}>{children}</div>
      </div>
    </section>
  );
}
