/**
 * Every image the site references, in one place.
 *
 * The split matters, and it is about failure modes rather than tidiness:
 *
 * `local` files ship from public/ and are served by Firebase Hosting on the
 * same connection as the HTML. They cannot break when Storage billing lapses
 * or a download token is rotated, and they deploy atomically with the markup
 * that references them — so anything load-bearing for the site's identity
 * belongs here.
 *
 * `remote` files live in the Firebase Storage bucket. They are heavier and
 * grow with the portfolio, so they stay out of the repo. Every consumer
 * renders them through <SmartImage />, which falls back to an on-brand
 * placeholder rather than a broken-image icon if the bucket stops serving.
 *
 * If the bucket ever moves, change the remote URLs here and nowhere else.
 */
export const siteAssets = {
  local: {
    headshot: "/headshot.webp",
    /** Keep this in step with the filename in public/. */
    resume: "/Lawrencia_Cobbina_Resume.pdf",
  },
  remote: {
    mcMarine:
      "https://firebasestorage.googleapis.com/v0/b/efuas-portfolio-website.firebasestorage.app/o/assets%2Fmcmarine.webp?alt=media&token=90e717f7-904e-4c21-af27-792a11abd7d0",
    kacha:
      "https://firebasestorage.googleapis.com/v0/b/efuas-portfolio-website.firebasestorage.app/o/assets%2Fkacha.webp?alt=media&token=d46ef3de-7cfd-4744-a8d1-5859ddff338d",
  },
} as const;
