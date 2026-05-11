import { defineField, defineType } from "sanity";

export const impactStat = defineType({
  name: "impactStat",
  title: "Statistique d'impact",
  type: "document",
  fields: [
    defineField({ name: "value", title: "Valeur", type: "string" }),
    defineField({ name: "label", title: "Libelle", type: "localizedString" }),
  ],
});
