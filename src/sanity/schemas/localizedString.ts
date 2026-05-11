import { defineField, defineType } from "sanity";

export const localizedString = defineType({
  name: "localizedString",
  title: "Texte bilingue",
  type: "object",
  fields: [
    defineField({ name: "fr", title: "Francais", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "en", title: "English", type: "string" }),
  ],
});
