import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Parametres du site",
  type: "document",
  fields: [
    defineField({ name: "phone", title: "Telephone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
    defineField({ name: "address", title: "Adresse", type: "string" }),
    defineField({ name: "facebook", title: "Facebook", type: "url" }),
    defineField({ name: "instagram", title: "Instagram", type: "url" }),
    defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
  ],
});
