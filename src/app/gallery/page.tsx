import type { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/section";
import { pageLocale } from "@/lib/page";

export const metadata: Metadata = { title: "Galerie", description: "Photos et videos des missions Hand of God." };

export default async function GalleryPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = await pageLocale(searchParams);
  return (
    <>
      <PageHero eyebrow={locale === "fr" ? "Galerie" : "Gallery"} title={locale === "fr" ? "Photos, videos et moments de terrain." : "Photos, videos and field moments."} />
      <section className="bg-warm-white py-24">
        <Container>
          <GalleryGrid locale={locale} />
        </Container>
      </section>
    </>
  );
}
