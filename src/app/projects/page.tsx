import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { pageLocale } from "@/lib/page";

export const metadata: Metadata = {
  title: "Nos projets",
  description: "Prochains projets humanitaires Hand of God.",
};

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = await pageLocale(searchParams);
  const fr = locale === "fr";

  return (
    <>
      <PageHero
        eyebrow={fr ? "Nos projets" : "Projects"}
        title={fr ? "Le prochain projet Hand of God arrive bientot." : "The next Hand of God project is coming soon."}
        text={
          fr
            ? "Nous preferons annoncer une campagne lorsqu'elle est clairement preparee : besoins verifies, budget lisible, equipe mobilisee et suivi responsable."
            : "We prefer to announce a campaign when it is clearly prepared: verified needs, readable budget, mobilized team and responsible follow-up."
        }
      />
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="image-grain absolute inset-0 bg-[linear-gradient(90deg,rgba(8,31,60,.95),rgba(8,31,60,.58)),url('/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-56.jpg')] bg-cover bg-center" />
        <Container className="relative">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-sky-mist">
              {fr ? "En preparation" : "In preparation"}
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
              {fr ? "Une nouvelle mission sera annoncee des que tout sera pret." : "A new mission will be announced as soon as everything is ready."}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {fr
                ? "Cette page servira a presenter les prochaines campagnes, leurs objectifs, leur progression et les moyens de contribuer."
                : "This page will present upcoming campaigns, goals, progress and ways to contribute."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/donate?lang=${locale}`}>{fr ? "Soutenir l'ONG" : "Support the NGO"}</ButtonLink>
              <ButtonLink href={`/volunteer?lang=${locale}`} variant="secondary">{fr ? "Devenir benevole" : "Volunteer"}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-warm-white py-24">
        <Container>
          <SectionHeader
            eyebrow={fr ? "Methode" : "Method"}
            title={fr ? "Avant chaque projet, nous clarifions le terrain." : "Before each project, we clarify the field."}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [fr ? "Verifier" : "Verify", fr ? "Identifier les besoins reels avec les responsables d'orphelinat." : "Identify real needs with orphanage managers."],
              [fr ? "Preparer" : "Prepare", fr ? "Organiser les dons, la logistique et l'equipe avant l'annonce." : "Organize donations, logistics and team before announcement."],
              [fr ? "Documenter" : "Document", fr ? "Rendre l'action lisible avec photos, chiffres et suivi." : "Make the action readable with photos, figures and follow-up."],
            ].map(([title, text]) => (
              <Card key={title} className="p-7">
                <h3 className="text-2xl font-semibold text-deep-blue">{title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
