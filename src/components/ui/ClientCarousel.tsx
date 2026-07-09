import { ImageWithFallback } from "../helpers/ImageWithFallback";
import imgGmr from "../../assets/images/client_2_GMR.png";
import imgShell from "../../assets/images/client_3_Shell.png";
import imgLng from "../../assets/images/client_7_LNG.png";
import imgToyota from "../../assets/images/client_8_Toyoto.png";
import imgGE from "../../assets/images/client_9_General_Electric.png";
import imgBord from "../../assets/images/client_10_Bord_Na_Mona.png";
import imgBasrah from "../../assets/images/client_11_Basrah.png";
import imgSahara from "../../assets/images/client_14_Sahara.png";

const LOGOS = [imgGmr, imgShell, imgLng, imgToyota, imgGE, imgBord, imgBasrah, imgSahara];

function ClientCarousel() {
  return (
    <section className="py-14 bg-[#f8f5ff] border-y border-slate-100 overflow-hidden relative">

      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-44 bg-linear-to-r from-[#f8f5ff] via-[#f8f5ff]/80 to-transparent z-10 pointer-events-none" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-44 bg-linear-to-l from-[#f8f5ff] via-[#f8f5ff]/80 to-transparent z-10 pointer-events-none" />

      {/* Scroll track full width, no container constraint */}
      <div className="flex items-center gap-20 whitespace-nowrap animate-[scroll_32s_linear_infinite] w-max">
        {LOGOS.map((img, i) => (
          <ImageWithFallback
            key={i}
            src={img}
            alt="Client Logo"
            className="h-14 object-contain grayscale hover:grayscale-0 opacity-55 hover:opacity-100 transition-all duration-300"
          />
        ))}
        {/* Duplicate set for seamless infinite loop */}
        {LOGOS.map((img, i) => (
          <ImageWithFallback
            key={`dup-${i}`}
            src={img}
            alt="Client Logo"
            className="h-14 object-contain grayscale hover:grayscale-0 opacity-55 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default ClientCarousel;
