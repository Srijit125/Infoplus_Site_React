import { Helmet } from "react-helmet-async";

const SITE_NAME  = "Infoplus Technologies UK";
const BASE_URL   = "https://www.infoplustechnologies.co.uk"; // update before go-live
const OG_IMAGE   = "/og-image.jpg";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
  jsonLd?: object;
}

export function PageMeta({
  title,
  description,
  path,
  keywords,
  ogImage = OG_IMAGE,
  noIndex = false,
  jsonLd,
}: PageMetaProps) {
  /* If title already contains the brand name, use it as-is; otherwise append */
  const fullTitle    = title.toLowerCase().includes("infoplus") ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImageUrl   = `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={ogImageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImageUrl} />

      {/* Structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
