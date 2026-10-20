/* ============================================================================
 *  Infoplus UK Website — Runtime API Configuration
 * ----------------------------------------------------------------------------
 *  EDIT THIS FILE AFTER THE BUILD. It is a plain file inside /dist and is read
 *  by the browser at page load, so changing a URL here takes effect on the next
 *  page refresh — NO REBUILD REQUIRED.
 *
 *  HOW IT WORKS
 *    Each URL = API_BASE_URL + its path below.
 *    To point a single entry somewhere else, put a full URL (starting with
 *    "http://" or "https://") in it and API_BASE_URL is ignored for that one.
 *
 *  RULES
 *    - Keep the quotes and the commas exactly as they are.
 *    - Do not rename the keys.
 *    - After editing, hard-refresh the browser (Ctrl+F5) to clear the cache.
 * ========================================================================== */

window.__APP_CONFIG__ = {
  /* Base URL shared by every endpoint — usually the only line you need to change. */
  API_BASE_URL: "https://test.infoplus.co.in/WebMail/api/Email",

  API_ENDPOINTS: {
    /* ---- The four forms -------------------------------------------------
     * Each is called only after the visitor's email has been verified, and
     * receives the `verificationToken` from /otp/verify as a form field.
     */

    /* 1. Home page  — "Get in touch" contact form   (src/pages/Index.tsx)        */
    homeContact: "/contact",

    /* 2. Contact page — "Send us a message" form    (src/pages/ContactPage.tsx)  */
    contact: "/contact",

    /* 3. Careers page — job application form        (src/pages/CareersPage.tsx)  */
    career: "/career",

    /* 4. Footer — newsletter subscription form      (src/components/FooterComponent.tsx) */
    newsletter: "/newsletter",

    /* ---- Email verification --------------------------------------------
     * Every one of the four forms above calls these two first:
     *   sendOtp   — POST { email, type }      -> { success, message }
     *   verifyOtp — POST { email, otp }       -> { success, message, verificationToken }
     */
    sendOtp: "/otp/send",
    verifyOtp: "/otp/verify",
  },
};
