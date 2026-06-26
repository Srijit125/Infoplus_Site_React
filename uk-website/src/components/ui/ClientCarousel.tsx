import { ImageWithFallback } from "../helpers/ImageWithFallback";
import imgGmr from "../../assets/images/imgGmr.png";
import imgShell from "../../assets/images/imgShell.png";
import imgLng from "../../assets/images/imgLng.png";
import imgToyota from "../../assets/images/imgToyota.png";
import imgGE from "../../assets/images/imgGE.png";
import imgBord from "../../assets/images/imgBord.png";
import imgBasrah from "../../assets/images/imgBasrah.png";
import imgSahara from "../../assets/images/imgSahara.png";
function ClientCarousel() {
  return (
    <section className="py-16 bg-[#f8f5ff] border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite] w-max">
          {[
            imgGmr,
            imgShell,
            imgToyota,
            imgGE,
            imgBord,
            imgBasrah,
            imgSahara,
            imgLng,
          ].map((img, i) => (
            <ImageWithFallback
              key={i}
              src={img}
              alt="Client Logo"
              className="h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            />
          ))}
          {/* Duplicate for infinite effect */}
          {[
            imgGmr,
            imgShell,
            imgToyota,
            imgGE,
            imgBord,
            imgBasrah,
            imgSahara,
            imgLng,
          ].map((img, i) => (
            <ImageWithFallback
              key={`dup-${i}`}
              src={img}
              alt="Client Logo"
              className="h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
      <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
    </section>
  );
}

export default ClientCarousel;
