import { HeroSlider } from "@/components/sections/hero-slider";
import {
  AboutPreview,
  ActionsPreview,
  FinalCta,
  GalleryPreview,
  ImpactSection,
  NewsPreview,
  ProjectsPreview,
  QuickDonate,
  TestimonialsSection,
} from "@/components/sections/home-sections";
import type { Locale } from "@/lib/types";

function resolveLocale(lang?: string): Locale {
  return lang === "en" ? "en" : "fr";
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);

  return (
    <>
      <HeroSlider locale={locale} />
      <ImpactSection locale={locale} />
      <AboutPreview locale={locale} />
      <ActionsPreview locale={locale} />
      <ProjectsPreview locale={locale} />
      <GalleryPreview locale={locale} />
      <TestimonialsSection locale={locale} />
      <QuickDonate locale={locale} />
      <NewsPreview locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
