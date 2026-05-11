import { defineField, defineType } from "sanity";

export const donationLink = defineType({
  name: "donationLink",
  title: "Lien de paiement",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string" }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "enabled", title: "Actif", type: "boolean", initialValue: true }),
  ],
});
