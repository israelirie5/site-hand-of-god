import type { Locale } from "./types";

export async function pageLocale(searchParams: Promise<{ lang?: string }>): Promise<Locale> {
  const { lang } = await searchParams;
  return lang === "en" ? "en" : "fr";
}
