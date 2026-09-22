/* ============================================================================
 *  Infoplus UK Website — Runtime API Configuration
 * ----------------------------------------------------------------------------
 *  EDIT THIS FILE AFTER THE BUILD. It is a plain file inside /dist and is read
 *  by the browser at page load, so changing a URL here takes effect on the next
 *  page refresh — NO REBUILD REQUIRED.
 *
 *  HOW IT WORKS
 *    Each form URL = API_BASE_URL + its path below.
 *    To point a single form somewhere else, put a full URL (starting with
 *    "http://" or "https://") in its entry and API_BASE_URL is ignored for it.
 *
 *  RULES
 *    - Keep the quotes and the commas exactly as they are.
 *    - Do not rename the keys.
 *    - After editing, hard-refresh the browser (Ctrl+F5) to clear the cache.
 * ========================================================================== */

window.__APP_CONFIG__ = {
  /* Base URL shared by all four forms — usually the only line you need to change. */
  API_BASE_URL: "https://test.infoplus.co.in/WebMail/api/Email",

  API_ENDPOINTS: {
    /* 1. Home page  — "Get in touch" contact form   (src/pages/Index.tsx)        */
    homeContact: "/contact",

    /* 2. Contact page — "Send us a message" form    (src/pages/ContactPage.tsx)  */
    contact: "/contact",

    /* 3. Careers page — job application form        (src/pages/CareersPage.tsx)  */
    career: "/career",

    /* 4. Footer — newsletter subscription form      (src/components/FooterComponent.tsx) */
    newsletter: "/newsletter",
  },
};
