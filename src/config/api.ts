/**
 * Resolves the API URLs for the four site forms.
 *
 * The values come from `public/config.js`, which is copied verbatim into
 * `dist/config.js` at build time and loaded by `index.html` before the app
 * bundle. Hosting can therefore edit `dist/config.js` after the build to point
 * the forms at a different base URL without rebuilding.
 *
 * The constants below are only a fallback for the case where `config.js` is
 * missing or malformed — `config.js` is the source of truth.
 */

export type FormEndpoint =
  | "homeContact"
  | "contact"
  | "career"
  | "newsletter";

type RuntimeConfig = {
  API_BASE_URL?: string;
  API_ENDPOINTS?: Partial<Record<FormEndpoint, string>>;
};

declare global {
  interface Window {
    __APP_CONFIG__?: RuntimeConfig;
  }
}

const FALLBACK_BASE_URL = "https://test.infoplus.co.in/WebMail/api/Email";

const FALLBACK_ENDPOINTS: Record<FormEndpoint, string> = {
  homeContact: "/contact",
  contact: "/contact",
  career: "/career",
  newsletter: "/newsletter",
};

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const isAbsolute = (value: string) => /^https?:\/\//i.test(value);

/**
 * Full URL for one of the four forms.
 *
 * An endpoint entry that is already an absolute URL is used as-is; otherwise it
 * is appended to `API_BASE_URL`.
 */
export function getApiUrl(endpoint: FormEndpoint): string {
  const config = window.__APP_CONFIG__ ?? {};

  const path =
    config.API_ENDPOINTS?.[endpoint]?.trim() || FALLBACK_ENDPOINTS[endpoint];

  if (isAbsolute(path)) return path;

  const base = trimTrailingSlash(
    config.API_BASE_URL?.trim() || FALLBACK_BASE_URL,
  );

  return `${base}/${path.replace(/^\/+/, "")}`;
}
