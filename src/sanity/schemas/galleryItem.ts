import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Galerie",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localizedString" }),
    defineField({ name: "type", title: "Type", type: "string", options: { list: ["photo", "video"] } }),
    defineField({ name: "category", title: "Categorie", type: "string", options: { list: ["missions", "children", "distribution", "community"] } }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "videoUrl", title: "URL video", type: "url" }),
  ],
});
