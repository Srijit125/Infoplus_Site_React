import { Link } from "react-router-dom";
import { ImageWithFallback } from "../helpers/ImageWithFallback";
import { ChevronRight } from "lucide-react";
import imgAiRobot from "../../assets/images/imgAiRobot.png";

function IndexBanner() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20"
      style={{
        backgroundImage:
          "linear-gradient(240.463deg, rgb(56, 31, 85) 13.73%, rgb(102, 39, 169) 47.913%, rgb(69, 44, 148) 82.097%)",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl text-left">
            <span className="inline-block bg-[#ecdaff] text-[#111111] px-4 py-1.5 rounded-full text-[14px] font-medium mb-6">
              Infoplus Technologies
            </span>
            <h1 className="text-[44px] md:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Artificial Intelligence Services
            </h1>
            <p className="text-[18px] text-white/90 leading-relaxed mb-10 font-normal">
              More compelling and memorable products through simplicity in
              design.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="bg-[#f85d37] text-white px-8 py-3.5 rounded-[8px] font-semibold text-[16px] hover:bg-[#e04f2c] transition-colors flex items-center gap-2 group"
              >
                Get Started
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-white text-white px-8 py-3.5 rounded-[8px] font-semibold text-[16px] hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <ImageWithFallback
              src={imgAiRobot}
              alt="AI Robot"
              className="w-[500px] max-w-full h-auto object-contain animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>

      {/* Slider Dots Placeholder */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-8 h-3 rounded-full bg-[#e952b2]"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </div>
    </section>
  );
}

export default IndexBanner;
