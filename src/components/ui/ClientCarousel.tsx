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
    <section className="py-14 bg-[#f8f5ff] border-y border-slate-100">
      {/* Constrained viewport — no horizontal padding so overflow clips exactly at the boundary */}
      <div className="relative overflow-hidden container mx-auto max-w-7xl">
        {/* Fade masks anchored at the clip boundary (left-0 / right-0) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-linear-to-r from-[#f8f5ff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-linear-to-l from-[#f8f5ff] to-transparent z-10 pointer-events-none" />

        {/* Marquee track — two sets; -50% keyframe = exactly one set width */}
        <div
          className="flex items-center w-max"
          style={{ animation: "marquee 30s linear infinite", willChange: "transform" }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
        >
          {[0, 1].map(setIdx =>
            LOGOS.map((img, i) => (
              <div key={`${setIdx}-${i}`} className="shrink-0 px-8 sm:px-12">
                <ImageWithFallback
                  src={img}
                  alt="Client Logo"
                  className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default ClientCarousel;
