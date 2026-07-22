// Replace every value below with Getvia's real, official details.
// Until replaced, pages show a "coming soon" state instead of fake info.
export const COMPANY_CONTACT = {
  email: "REPLACE_WITH_OFFICIAL_EMAIL",
  phone: "REPLACE_WITH_OFFICIAL_PHONE",
  whatsapp: "REPLACE_WITH_OFFICIAL_WHATSAPP",
  address: "REPLACE_WITH_OFFICIAL_ADDRESS",
  hours: "REPLACE_WITH_OFFICIAL_HOURS",
  instagram: "REPLACE_WITH_OFFICIAL_INSTAGRAM",
  facebook: "REPLACE_WITH_OFFICIAL_FACEBOOK",
  linkedin: "REPLACE_WITH_OFFICIAL_LINKEDIN",
  twitter: "REPLACE_WITH_OFFICIAL_TWITTER",
};

export const isContactInfoConfigured = () =>
  !Object.values(COMPANY_CONTACT).some((v) => v.startsWith("REPLACE_WITH_"));

export const isSocialConfigured = (key) =>
  !COMPANY_CONTACT[key]?.startsWith("REPLACE_WITH_");
