import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projet",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localizedString" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.fr" } }),
    defineField({ name: "excerpt", title: "Resume", type: "localizedString" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "goal", title: "Objectif", type: "string" }),
    defineField({ name: "raised", title: "Collecte", type: "string" }),
    defineField({ name: "progress", title: "Progression", type: "number", validation: (Rule) => Rule.min(0).max(100) }),
  ],
});
