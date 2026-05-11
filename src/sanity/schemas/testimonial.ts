import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Temoignage",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Citation", type: "localizedString" }),
    defineField({ name: "name", title: "Nom", type: "string" }),
    defineField({ name: "role", title: "Role", type: "localizedString" }),
  ],
});
