import { type ReactNode } from "react";
import { ArrowDown } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
  variant?: "centered" | "split" | "gradient";
  image?: string;
  children?: ReactNode;
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              {badge && (
                <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-6">
                  {badge}
                </span>
              )}
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                {title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                {description}
              </p>
              {children}
            </div>
            {image && (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-20 blur-2xl"></div>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "gradient") {
    return (
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-40 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[70%] bg-emerald-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"></div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          {badge && (
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            {title}
          </h1>
          <p className="text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            {description}
          </p>
          {children}
        </div>
      </section>
    );
  }

  // Default centered
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        {badge && (
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold tracking-wide mb-8 border border-slate-200 shadow-sm">
            {badge}
          </span>
        )}
        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8">
          {title}
        </h1>
        <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 font-light">
          {description}
        </p>
        {children}
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}
