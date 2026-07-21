
export const COMPANY_CONTACT = {
  email: "getviaofficial@gmail.com",
  phone: "7994466024",
  whatsapp: "7994466024",
  location: "Wisemove consultancy, 15/972, Nedumkulangara Rd, Athani, Kakkanad, Kerala 682030",
  hours: "",
};

export const isContactInfoConfigured = () =>
  !Object.values(COMPANY_CONTACT).some((v) => v.startsWith("REPLACE_WITH_"));
