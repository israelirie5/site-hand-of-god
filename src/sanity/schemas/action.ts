import { defineField, defineType } from "sanity";

export const action = defineType({
  name: "action",
  title: "Action",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localizedString" }),
    defineField({ name: "excerpt", title: "Resume", type: "localizedString" }),
    defineField({ name: "detail", title: "Detail", type: "localizedString" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
});
