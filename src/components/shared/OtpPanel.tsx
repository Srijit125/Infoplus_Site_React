import { Shield } from "lucide-react";
import { OTP_LENGTH } from "../../lib/otp";
import type { OtpGate } from "../../hooks/useOtpGate";

/**
 * The "enter the code we emailed you" step shared by every form on the site.
 *
 * Styled with inline styles rather than utility classes so the one component
 * can sit on the light cards (contact page, careers modal) and the dark ones
 * (home page enquiry card, footer) by switching `tone`.
 */

type Tone = "light" | "dark";

const TONES: Record<
  Tone,
  {
    panelBg: string;
    panelBorder: string;
    title: string;
    body: string;
    muted: string;
    inputBg: string;
    inputBorder: string;
    inputText: string;
    noticeBg: string;
    noticeText: string;
  }
> = {
  light: {
    panelBg: "#F8FAFC",
    panelBorder: "#E2E8F0",
    title: "#0F172A",
    body: "#475569",
    muted: "#64748B",
    inputBg: "#FFFFFF",
    inputBorder: "#CBD5E1",
    inputText: "#0F172A",
    noticeBg: "#ECFDF5",
    noticeText: "#047857",
  },
  dark: {
    panelBg: "rgba(255,255,255,0.05)",
    panelBorder: "rgba(169,180,214,0.22)",
    title: "#FFFFFF",
    body: "rgba(255,255,255,0.72)",
    muted: "rgba(255,255,255,0.55)",
    inputBg: "rgba(255,255,255,0.07)",
    inputBorder: "rgba(169,180,214,0.3)",
    inputText: "#FFFFFF",
    noticeBg: "rgba(16,185,129,0.12)",
    noticeText: "#6EE7B7",
  },
};

const DEFAULT_ACCENT = "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)";

export type OtpPanelProps = {
  gate: OtpGate;
  tone?: Tone;
  /** Background of the confirm button - a colour or a gradient. */
  accent?: string;
  /** Label of the confirm button, e.g. "Verify & Send Message". */
  submitLabel?: string;
  /** Tighter spacing for the narrow footer column. */
  compact?: boolean;
};

export function OtpPanel({
  gate,
  tone = "light",
  accent = DEFAULT_ACCENT,
  submitLabel = "Verify & Submit",
  compact = false,
}: OtpPanelProps) {
  const c = TONES[tone];
  const verifying = gate.busy === "verifying";
  const sending = gate.busy === "sending";
  const disabled = verifying || sending;
  const incomplete = gate.code.length !== OTP_LENGTH;

  return (
    <div
      style={{
        background: c.panelBg,
        border: `1px solid ${c.panelBorder}`,
        borderRadius: 14,
        padding: compact ? "14px 16px" : "20px 22px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 6,
        }}
      >
        <Shield style={{ width: 16, height: 16, color: c.title }} />
        <p
          style={{
            color: c.title,
            fontWeight: 700,
            fontSize: compact ? 14 : 15,
            margin: 0,
          }}
        >
          Verify your email
        </p>
      </div>

      <p
        style={{
          color: c.body,
          fontSize: compact ? 12 : 13,
          lineHeight: 1.6,
          margin: "0 0 14px",
          wordBreak: "break-word",
        }}
      >
        Enter the {OTP_LENGTH}-digit code we sent to{" "}
        <strong style={{ color: c.title, fontWeight: 600 }}>{gate.email}</strong>
        .
      </p>

      <input
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        aria-label={`${OTP_LENGTH}-digit verification code`}
        placeholder={"0".repeat(OTP_LENGTH)}
        maxLength={OTP_LENGTH}
        value={gate.code}
        disabled={disabled}
        onChange={(e) => gate.setCode(e.target.value)}
        onKeyDown={(e) => {
          // The panel sits inside each form's own <form>; stop Enter from
          // firing that submit handler and verify the code instead.
          if (e.key === "Enter") {
            e.preventDefault();
            void gate.submitCode();
          }
        }}
        style={{
          width: "100%",
          padding: compact ? "10px 14px" : "12px 16px",
          borderRadius: 10,
          border: `1px solid ${gate.error ? "#EF4444" : c.inputBorder}`,
          background: c.inputBg,
          color: c.inputText,
          fontSize: compact ? 18 : 20,
          fontWeight: 700,
          letterSpacing: "0.4em",
          textAlign: "center",
          outline: "none",
          boxSizing: "border-box",
          opacity: disabled ? 0.7 : 1,
        }}
      />

      {gate.error && (
        <p
          style={{
            color: "#EF4444",
            fontSize: 12,
            fontWeight: 500,
            margin: "8px 0 0",
          }}
        >
          {gate.error}
        </p>
      )}

      {!gate.error && gate.notice && (
        <p
          style={{
            background: c.noticeBg,
            color: c.noticeText,
            fontSize: 12,
            lineHeight: 1.5,
            borderRadius: 8,
            padding: "8px 10px",
            margin: "8px 0 0",
          }}
        >
          {gate.notice}
        </p>
      )}

      <button
        type="button"
        onClick={() => void gate.submitCode()}
        disabled={disabled || incomplete}
        style={{
          width: "100%",
          marginTop: 14,
          background: accent,
          color: "#FFFFFF",
          border: "none",
          borderRadius: 999,
          padding: compact ? "11px 18px" : "13px 22px",
          fontWeight: 700,
          fontSize: compact ? 13 : 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          cursor: disabled || incomplete ? "not-allowed" : "pointer",
          opacity: disabled || incomplete ? 0.6 : 1,
          transition: "opacity 0.2s",
        }}
      >
        {verifying ? (
          <>
            <span
              className="animate-spin"
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                border: "2px solid #FFFFFF",
                borderTopColor: "transparent",
                display: "inline-block",
              }}
            />
            Verifying...
          </>
        ) : (
          submitLabel
        )}
      </button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginTop: 12,
          flexWrap: "wrap",
        }}
      >
        {gate.resendIn > 0 ? (
          <span style={{ color: c.muted, fontSize: 12 }}>
            Resend code in {gate.resendIn}s
          </span>
        ) : (
          <button
            type="button"
            onClick={() => void gate.resend()}
            disabled={disabled}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: c.title,
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "underline",
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.6 : 1,
            }}
          >
            {sending ? "Sending..." : "Resend code"}
          </button>
        )}

        <button
          type="button"
          onClick={gate.cancel}
          disabled={disabled}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            color: c.muted,
            fontSize: 12,
            fontWeight: 500,
            textDecoration: "underline",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.6 : 1,
          }}
        >
          Use a different email
        </button>
      </div>
    </div>
  );
}

export default OtpPanel;
