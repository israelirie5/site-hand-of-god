import type { Locale } from "./types";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export const dictionary = {
  fr: {
    nav: {
      donate: "Prendre rendez-vous",
      volunteer: "Voir nos services",
      language: "EN",
    },
    common: {
      learnMore: "En savoir plus",
      readMore: "Lire l'article",
      amountFree: "Montant libre",
      send: "Envoyer",
      success: "Merci. Votre message a bien ete prepare.",
    },
  },
  en: {
    nav: {
      donate: "Book a call",
      volunteer: "View services",
      language: "FR",
    },
    common: {
      learnMore: "Learn more",
      readMore: "Read article",
      amountFree: "Custom amount",
      send: "Send",
      success: "Thank you. Your message has been prepared.",
    },
  },
} as const;

export function pick<T extends Record<Locale, string>>(value: T, locale: Locale) {
  return value[locale] ?? value[defaultLocale];
}
