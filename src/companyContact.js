// Replace every value below with Getvia's real, official contact details.
// Until then, the Contact page shows a "coming soon" state instead of
// fake information — see ContactPage.jsx.
export const COMPANY_CONTACT = {
  email: "REPLACE_WITH_OFFICIAL_EMAIL",
  phone: "REPLACE_WITH_OFFICIAL_PHONE",
  whatsapp: "REPLACE_WITH_OFFICIAL_WHATSAPP",
  location: "REPLACE_WITH_OFFICIAL_LOCATION",
  hours: "REPLACE_WITH_OFFICIAL_HOURS",
};

export const isContactInfoConfigured = () =>
  !Object.values(COMPANY_CONTACT).some((v) => v.startsWith("REPLACE_WITH_"));
