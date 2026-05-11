import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Actualite",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localizedString" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.fr" } }),
    defineField({ name: "excerpt", title: "Resume", type: "localizedString" }),
    defineField({ name: "category", title: "Categorie", type: "localizedString" }),
    defineField({ name: "publishedAt", title: "Date", type: "datetime" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "bodyFr", title: "Corps FR", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "bodyEn", title: "Body EN", type: "array", of: [{ type: "block" }] }),
  ],
});
