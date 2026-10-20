/**
 * Email OTP verification used to gate every form submission on the site.
 *
 * Flow for all four forms:
 *   1. the user fills the form and submits
 *   2. `requestOtp` emails a code to the address entered on the form
 *   3. the user types the code and `confirmOtp` exchanges it for a
 *      `verificationToken`
 *   4. the form's own endpoint is called with that token appended to the
 *      FormData under `VERIFICATION_TOKEN_FIELD`
 *
 * Both endpoints are POSTed as multipart FormData and answer with
 * `{ success, message }`, matching the convention of the four form endpoints.
 * Their URLs come from `dist/config.js` via `getApiUrl`.
 */

import { getApiUrl } from "../config/api";

/** Number of digits in the emailed code. */
export const OTP_LENGTH = 6;

/** FormData field the verification token is sent back to the form API under. */
export const VERIFICATION_TOKEN_FIELD = "verificationToken";

export type OtpResult = {
  success: boolean;
  message: string;
};

export type OtpVerifyResult = OtpResult & {
  /** Present only when `success` is true. */
  verificationToken?: string;
};

type ApiPayload = {
  success?: boolean;
  message?: string;
  verificationToken?: string;
};

async function postForm(url: string, fields: Record<string, string>) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.append(key, value);

  const res = await fetch(url, { method: "POST", body });
  const json: ApiPayload = await res.json();
  return json;
}

/**
 * Emails a one-time code to `email`.
 *
 * `type` identifies which form asked for it, so the email copy can match the
 * form the visitor is on — the same `type` value the form itself posts.
 */
export async function requestOtp(
  email: string,
  type: string,
): Promise<OtpResult> {
  try {
    const json = await postForm(getApiUrl("sendOtp"), {
      email: email.trim(),
      type,
    });
    return {
      success: json.success === true,
      message:
        json.message ||
        (json.success === true
          ? `We've sent a ${OTP_LENGTH}-digit code to ${email.trim()}.`
          : "We couldn't send the verification code. Please try again."),
    };
  } catch {
    return {
      success: false,
      message: "We couldn't send the verification code. Please try again.",
    };
  }
}

/**
 * Exchanges the emailed code for a verification token.
 *
 * A response that reports success without a token is treated as a failure —
 * the form submission would be rejected downstream anyway.
 */
export async function confirmOtp(
  email: string,
  otp: string,
): Promise<OtpVerifyResult> {
  try {
    const json = await postForm(getApiUrl("verifyOtp"), {
      email: email.trim(),
      otp: otp.trim(),
    });

    if (json.success === true && json.verificationToken) {
      return {
        success: true,
        message: json.message || "Email verified.",
        verificationToken: json.verificationToken,
      };
    }

    return {
      success: false,
      message:
        json.message ||
        "That code wasn't correct. Please check it and try again.",
    };
  } catch {
    return {
      success: false,
      message: "We couldn't verify that code. Please try again.",
    };
  }
}
