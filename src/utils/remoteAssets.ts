/**
 * Every image the site pulls from Firebase Storage, in one place.
 *
 * These are the only remote assets we depend on. Firebase Storage stops
 * serving them if the plan is downgraded or a download token is rotated, so
 * every consumer renders them through <SmartImage />, which falls back to an
 * on-brand placeholder instead of a broken-image icon.
 *
 * If the bucket ever moves, change the URLs here and nowhere else.
 */
export const remoteAssets = {
  headshot:
    "https://firebasestorage.googleapis.com/v0/b/efuas-portfolio-website.firebasestorage.app/o/assets%2Fheadshot.webp?alt=media&token=aafc8028-8231-4db9-a1eb-b02d499f6bf6",
  mcMarine:
    "https://firebasestorage.googleapis.com/v0/b/efuas-portfolio-website.firebasestorage.app/o/assets%2Fmcmarine.webp?alt=media&token=90e717f7-904e-4c21-af27-792a11abd7d0",
  kacha:
    "https://firebasestorage.googleapis.com/v0/b/efuas-portfolio-website.firebasestorage.app/o/assets%2Fkacha.webp?alt=media&token=d46ef3de-7cfd-4744-a8d1-5859ddff338d",
} as const;
