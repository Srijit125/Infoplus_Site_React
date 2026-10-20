import { useCallback, useEffect, useRef, useState } from "react";
import {
  OTP_LENGTH,
  confirmOtp,
  requestOtp,
  type OtpResult,
} from "../lib/otp";

/** Seconds the visitor must wait before a code can be re-sent. */
const RESEND_COOLDOWN = 30;

export type OtpBusy = false | "sending" | "verifying";

export type OtpGate = {
  /** True once a code has been sent — the form should show the OTP step. */
  open: boolean;
  /** Address the code was sent to. */
  email: string;
  code: string;
  setCode: (value: string) => void;
  busy: OtpBusy;
  error: string;
  notice: string;
  /** Seconds left before "Resend code" becomes available; 0 when ready. */
  resendIn: number;
  /** Sends the first code and opens the step. Returns the API's verdict. */
  start: (email: string) => Promise<OtpResult>;
  resend: () => Promise<void>;
  /** Verifies the typed code, then hands the token to `onVerified`. */
  submitCode: () => Promise<void>;
  /** Closes the step and clears its state (e.g. "Use a different email"). */
  cancel: () => void;
};

/**
 * Drives the send-code / verify-code step that sits between a form's submit
 * button and its API call.
 *
 * The form keeps its own status and error handling: `start` reports back
 * whether the code went out, and `onVerified` runs the form's original
 * submission with the token once the code checks out.
 */
export function useOtpGate(options: {
  /** The form's `type` value, passed through to the OTP email. */
  type: string;
  onVerified: (verificationToken: string) => Promise<void> | void;
}): OtpGate {
  const { type, onVerified } = options;

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCodeState] = useState("");
  const [busy, setBusy] = useState<OtpBusy>(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [resendIn, setResendIn] = useState(0);

  // `onVerified` is usually an inline closure over current form state, so keep
  // a ref to the latest one rather than re-creating the callbacks each render.
  const onVerifiedRef = useRef(onVerified);
  useEffect(() => {
    onVerifiedRef.current = onVerified;
  }, [onVerified]);

  useEffect(() => {
    if (resendIn <= 0) return;
    const id = window.setInterval(
      () => setResendIn((n) => (n <= 1 ? 0 : n - 1)),
      1000,
    );
    return () => window.clearInterval(id);
  }, [resendIn]);

  /** Codes are digits only, so strip anything else as it is typed or pasted. */
  const setCode = useCallback((value: string) => {
    setCodeState(value.replace(/\D/g, "").slice(0, OTP_LENGTH));
    setError("");
  }, []);

  const cancel = useCallback(() => {
    setOpen(false);
    setEmail("");
    setCodeState("");
    setBusy(false);
    setError("");
    setNotice("");
    setResendIn(0);
  }, []);

  const start = useCallback(
    async (address: string): Promise<OtpResult> => {
      setBusy("sending");
      setError("");
      setNotice("");
      const result = await requestOtp(address, type);
      setBusy(false);

      if (result.success) {
        setEmail(address.trim());
        setCodeState("");
        setNotice(result.message);
        setResendIn(RESEND_COOLDOWN);
        setOpen(true);
      }
      return result;
    },
    [type],
  );

  const resend = useCallback(async () => {
    if (busy || resendIn > 0 || !email) return;
    setBusy("sending");
    setError("");
    setNotice("");
    const result = await requestOtp(email, type);
    setBusy(false);

    if (result.success) {
      setCodeState("");
      setNotice(result.message);
      setResendIn(RESEND_COOLDOWN);
    } else {
      setError(result.message);
    }
  }, [busy, email, resendIn, type]);

  const submitCode = useCallback(async () => {
    if (busy) return;
    if (code.length !== OTP_LENGTH) {
      setError(`Enter the ${OTP_LENGTH}-digit code we emailed you.`);
      return;
    }

    setBusy("verifying");
    setError("");
    setNotice("");
    const result = await confirmOtp(email, code);

    if (!result.success || !result.verificationToken) {
      setBusy(false);
      setCodeState("");
      setError(result.message);
      return;
    }

    // Hand off to the form's own submission. It owns the success/error state
    // from here, so close the step first — a failure there leaves the filled
    // form in place and the visitor can submit again for a fresh code.
    const token = result.verificationToken;
    cancel();
    await onVerifiedRef.current(token);
  }, [busy, cancel, code, email]);

  return {
    open,
    email,
    code,
    setCode,
    busy,
    error,
    notice,
    resendIn,
    start,
    resend,
    submitCode,
    cancel,
  };
}
