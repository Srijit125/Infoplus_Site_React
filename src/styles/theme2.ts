/**
 * Theme 2 — Infoplus amber / navy design tokens
 * Single source of truth for all Theme 2 color values.
 * Import from any page or component that needs to match the Theme 2 palette.
 */

/* ── Core backgrounds ─────────────────────────────── */
export const T2_BG   = "linear-gradient(135deg, #0D112D 0%, #242E72 100%)";
export const T2_DARK = "#0D112D";   // deep navy — dark section background
export const T2_SRF  = "#141A3D";   // surface — elevated dark card / band
export const T2_SAL  = "#1A2444";   // alt surface — secondary dark card

/* ── Light backgrounds ────────────────────────────── */
export const T2_LIGHT = "#FFFFFF";  // light section background
export const T2_LCARD = "#F3F5FF";  // light card / map tile background

/* ── Accent gradient & individual stops ──────────── */
export const T2_ACC  = "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)";
export const T2_AMB  = "#EB9B3D";  // primary amber
export const T2_ORG  = "#DA4D33";  // orange-red
export const T2_AMB2 = "#F5A623";  // bright amber
export const T2_AMB3 = "#F0783A";  // mid orange
export const T2_AMB4 = "#F5C66A";  // light gold
export const T2_AMB5 = "#E8841E";  // deep amber

/** Amber → orange gradient text, used on section titles */
export const T2_GRAD_TEXT: import("react").CSSProperties = {
  background: "linear-gradient(90deg, #EB9B3D 0%, #DA4D33 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ── Text colours ─────────────────────────────────── */
export const T2_TP  = "#FFFFFF";   // primary text on dark
export const T2_TS  = "#A9B4D6";   // secondary text on dark
export const T2_TA  = "#DB5434";   // accent text
export const T2_WH1 = "#101223";   // dark heading on light bg
export const T2_WH2 = "#4A4F63";   // muted text on light bg

/* ── Borders ──────────────────────────────────────── */
export const T2_BRD = "rgba(169,180,214,0.15)";

/* ── Typography ───────────────────────────────────── */
export const T2_FF = "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

/* ── Composite card styles ────────────────────────── */
export const t2Card = {
  background: T2_SAL,
  border: `1px solid ${T2_BRD}`,
  borderRadius: 12,
} as const;

export const t2LCard = {
  background: T2_LCARD,
  border: "1px solid rgba(13,17,45,0.07)",
  borderRadius: 12,
} as const;
