# React Migration Plan

## Goal

Convert the existing static InfoPlus website into a React single-page application (SPA) with reusable components, clean routing, and modern JavaScript patterns.

## Recommended Stack

- React + Vite
- React Router DOM for routing
- CSS imported globally initially, with ability to migrate to CSS Modules / Styled Components later
- Swiper or React Slick for carousels
- react-hook-form or plain React for form handling
- react-helmet-async for page metadata

## Proposed Project Structure

```
react-app/
  public/
    favicon.ico
    robots.txt
    assets/       # copied static images and fonts
  src/
    App.jsx
    main.jsx
    index.css
    data/
      navigation.js
      services.js
      products.js
      testimonials.js
      clients.js
      careers.js
    pages/
      Home.jsx
      About.jsx
      Services.jsx
      ServiceDetail.jsx
      Products.jsx
      ProductDetail.jsx
      Careers.jsx
      Contact.jsx
      Blog.jsx
      Cookies.jsx
    components/
      Header.jsx
      Footer.jsx
      NavMenu.jsx
      HeroSection.jsx
      ContentSection.jsx
      ServiceCard.jsx
      FeatureGrid.jsx
      StatsCounter.jsx
      TestimonialCarousel.jsx
      ClientLogoCarousel.jsx
      ContactForm.jsx
      CareerForm.jsx
      FAQAccordion.jsx
      SectionBanner.jsx
    hooks/
      useDocumentTitle.js
    styles/
      globals.css
      layout.css
      components.css
```

## Important Pages and Routes

- `/` => `Home.jsx`
- `/about` => `About.jsx`
- `/services` => `Services.jsx`
- `/services/ai` => `ServiceDetail.jsx` (or route param)
- `/services/software-development`
- `/services/testing`
- `/services/infrastructure-management`
- `/services/sap-consultant`
- `/services/cyber-security`
- `/services/cloud-portfolio`
- `/services/staffing-consultant`
- `/services/it-staffing-solutions`
- `/services/it-consultant-solutions`
- `/services/umbrella-service`
- `/services/new-generation`
- `/services/enterprise-transformation`
- `/services/everything-data`
- `/services/automation`
- `/products`
- `/products/master-data-management`
- `/products/education-solutions`
- `/careers`
- `/contact`
- `/blog`
- `/cookies`

## Migration Phases

### Phase 1: Scaffold & Shared Layout

1. Create a new React app (Vite) inside `react-app/`.
2. Copy shared static assets from `images/`, `fonts/`, and any root assets to `react-app/public/assets/`.
3. Create `Header.jsx` and `Footer.jsx` using the header/footer markup from `index.html`.
4. Create navigation data in `src/data/navigation.js` and render it in `Header.jsx`.
5. Set up React Router in `App.jsx`.
6. Add route skeletons for all primary pages.

### Phase 2: Global Styles & Layout

1. Import common CSS files: `style.min.css`, `common.css`, `bootstrap.min.css`, and `owl.carousel.min.css` into `src/index.css` or `main.jsx`.
2. Verify the site visually on the home and a couple of pages.
3. Remove or disable legacy global scripts in the React app.

### Phase 3: Home & Content Components

1. Build `Home.jsx` by extracting major sections from `index.html`.
2. Create reusable components for repeated patterns:
   - hero sections
   - feature/service cards
   - stats/counters
   - carousels
   - testimonial blocks
3. Use data files for repeated content so pages are driven by JSON-like structures.

### Phase 4: Services & Products

1. Build `Services.jsx` as a landing page for all service categories.
2. Build `ServiceDetail.jsx` and `ProductDetail.jsx` for individual service/product pages.
3. Use dynamic routing for detail pages, e.g. `/services/:slug`.
4. Move page-specific content into `src/data/services.js` and `src/data/products.js`.

### Phase 5: Forms and Interaction

1. Convert all forms to React controlled forms.
2. Replace jQuery validation with React validation or `react-hook-form`.
3. Implement any email or API submission endpoints if available.
4. Build `ContactForm.jsx` and `CareerForm.jsx` components.

### Phase 6: Carousel / Animation Replacement

1. Replace `owl.carousel` and any Swiper initialization with React-compatible components.
2. Migrate any `data-aos` scroll animations to CSS or a React animation library.
3. Convert header menu and mobile dropdowns to pure React state.

### Phase 7: Cleanup & SEO

1. Remove the static HTML page duplicates and old files from the React app path.
2. Add `react-helmet-async` for `title` and `meta` tags per route.
3. Verify route aliasing and direct-load support for SPA deployment.
4. Audit and remove unused styles or duplicate assets.

## Key Notes

- `js/script.min.js` contains core interactive behavior. It should be replaced rather than imported directly.
- The navigation structure is repeated on every page; it must become centralized data.
- The `alpha/` folder looks like an alternate version with a newer layout; do not mix with root pages unless you want a second theme.
- Duplicate files such as `index - Copy.html`, `career-old.html`, and `contact-us - Copy.html` are legacy and should be excluded from the new React build.

## Page Template Checklist

Use this checklist for each page migration:

- [ ] Import shared `Header` and `Footer`
- [ ] Map original page route to React route
- [ ] Extract hero/intro section
- [ ] Extract body sections into reusable components or data-driven blocks
- [ ] Recreate any carousel or interactive block in React
- [ ] Add page metadata
- [ ] Test responsiveness and mobile menu behavior

## Suggested First Implementation

1. Build `Header.jsx` and `Footer.jsx`.
2. Add `Home.jsx`, `About.jsx`, `Contact.jsx`.
3. Add `services.js` data and route `/services`.
4. Add `ContactForm.jsx` and wire basic validation.
5. Replace one carousel on Home with React Swiper.
6. Confirm that static assets are loading correctly.

---

If you want, I can now scaffold `react-app/` with Vite and generate the initial `App.jsx`, `Header.jsx`, `Footer.jsx`, and route files automatically.
