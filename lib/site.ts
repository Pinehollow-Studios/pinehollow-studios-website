/** Facts the site states. Keep them here so they are said once, and stay in step. */

/** Canonical origin. Vercel 308-redirects the apex to www, so www is the indexable host. */
export const SITE_URL = "https://www.pinehollow.studio";
export const SITE_NAME = "Pinehollow Studios";
export const EMAIL = "hello@pinehollow.studio";
export const VESTIGE_URL = "https://vestige.golf";

/** UK trading-disclosure line (Companies (Trading Disclosures) Regulations 2015, regs 24–25). */
export const COMPANY = {
  name: "Pinehollow Studios Limited",
  jurisdiction: "England and Wales",
  number: "17212889",
  address: "82A James Carter Road, Mildenhall, Bury St Edmunds, IP28 7DE, United Kingdom",
} as const;

/** Vestige status, as published on vestige.golf. Update both places together. */
export const VESTIGE = {
  publicBeta: "October 2026",
  launch: "March 2027",
} as const;
