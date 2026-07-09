import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";
type Variant   = "slide" | "card";

interface ScrollRevealProps {
  children:   ReactNode;
  className?: string;
  /** Extra delay before the animation starts use for staggering siblings */
  delay?:     number;
  /** Slide direction (ignored when variant="card") */
  direction?: Direction;
  /** Animation duration in ms */
  duration?:  number;
  /** How many px from the bottom viewport edge to trigger */
  offset?:    number;
  /**
   * "slide" simple translate + fade (default)
   * "card"  3-D perspective tilt-in reveal
   */
  variant?:   Variant;
}

const ANIM: Record<Direction, string> = {
  up:    "revealUp",
  down:  "revealDown",
  left:  "revealLeft",
  right: "revealRight",
  fade:  "revealFade",
};

export function ScrollReveal({
  children,
  className,
  delay     = 0,
  direction = "up",
  duration  = 680,
  offset    = 60,
  variant   = "slide",
}: ScrollRevealProps) {
  const ref     = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);   // fire once
        }
      },
      { threshold: 0.07, rootMargin: `0px 0px -${offset}px 0px` }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [offset]);

  const animName = variant === "card" ? "cardTiltIn" : ANIM[direction];
  const easing   = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? {
              /* "both" fill-mode:
                 - before delay: holds the 0% keyframe (opacity 0)
                 - after finish: holds the 100% keyframe (fully visible) */
              animation: `${animName} ${duration}ms ${easing} ${delay}ms both`,
            }
          : {
              /* hidden until IntersectionObserver fires */
              opacity: 0,
            }
      }
    >
      {children}
    </div>
  );
}
