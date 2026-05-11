import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/data/site";
import { pick } from "@/lib/i18n";
import { pageLocale } from "@/lib/page";
import { Card } from "@/components/ui/card";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { Container } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = { title: "Actualites", description: "Actualites, recits et nouvelles de Hand of God." };

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = await pageLocale(searchParams);
  return (
    <>
      <PageHero eyebrow={locale === "fr" ? "Actualites" : "News"} title={locale === "fr" ? "Recits de missions, nouvelles et appels solidaires." : "Mission stories, updates and solidarity calls."} />
      <section className="bg-white py-24">
        <Container className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              <CinematicImage src={post.image} alt={pick(post.title, locale)} className="h-60" />
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-hope-orange">{pick(post.category, locale)} · {post.date}</p>
                <h2 className="mt-3 text-2xl font-semibold text-deep-blue">{pick(post.title, locale)}</h2>
                <p className="mt-3 leading-7 text-ink/65">{pick(post.excerpt, locale)}</p>
                <Link href={`/news/${post.slug}?lang=${locale}`} className="mt-5 inline-flex text-sm font-bold text-deep-blue">
                  {locale === "fr" ? "Lire l'article" : "Read article"}
                </Link>
              </div>
            </Card>
          ))}
        </Container>
      </section>
    </>
  );
}
