import type { Metadata } from "next";
import { actions } from "@/data/site";
import { pick } from "@/lib/i18n";
import { pageLocale } from "@/lib/page";
import { Card } from "@/components/ui/card";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = { title: "Nos actions", description: "Actions regulieres de Hand of God." };

export default async function ActionsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = await pageLocale(searchParams);
  return (
    <>
      <PageHero eyebrow={locale === "fr" ? "Nos actions" : "Actions"} title={locale === "fr" ? "Des actions regulieres pour repondre aux besoins essentiels." : "Regular actions responding to essential needs."} />
      <section className="bg-warm-white py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {actions.map((action) => (
            <Card key={action.title.fr} className="overflow-hidden">
              <CinematicImage src={action.image} alt={pick(action.title, locale)} className="h-72" />
              <div className="p-7">
                <h2 className="text-2xl font-semibold text-deep-blue">{pick(action.title, locale)}</h2>
                <p className="mt-3 leading-8 text-ink/65">{pick(action.detail, locale)}</p>
              </div>
            </Card>
          ))}
        </Container>
        <Container className="mt-12 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/donate?lang=${locale}`}>{locale === "fr" ? "Soutenir une action" : "Support an action"}</ButtonLink>
          <ButtonLink href={`/volunteer?lang=${locale}`} variant="ghost">{locale === "fr" ? "Rejoindre l'equipe" : "Join the team"}</ButtonLink>
        </Container>
      </section>
    </>
  );
}
