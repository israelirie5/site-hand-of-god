import type { Metadata } from "next";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { Card } from "@/components/ui/card";
import { Container, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { pageLocale } from "@/lib/page";

export const metadata: Metadata = { title: "A propos", description: "Histoire, mission, vision et valeurs de Hand of God." };

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = await pageLocale(searchParams);
  const fr = locale === "fr";
  return (
    <>
      <PageHero eyebrow={fr ? "A propos" : "About"} title={fr ? "Une ONG nee d'une conviction simple : personne ne devrait etre invisible." : "An NGO born from a simple conviction: no one should be invisible."} />
      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <CinematicImage src="/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-29.jpg" alt="Equipe Hand of God" className="h-[540px] rounded-card" />
          <div className="space-y-8">
            <SectionHeader eyebrow={fr ? "Notre histoire" : "Our story"} title={fr ? "Servir avec methode, respect et constance." : "Serving with method, respect and consistency."} text={fr ? "Hand of God accompagne les personnes vulnerables par des missions de proximite, des collectes organisees et des partenariats responsables." : "Hand of God supports vulnerable people through local missions, organized collections and responsible partnerships."} />
            {[
              [fr ? "Mission" : "Mission", fr ? "Soulager les besoins essentiels et restaurer la dignite." : "Ease essential needs and restore dignity."],
              [fr ? "Vision" : "Vision", fr ? "Des structures d'accueil mieux soutenues, ou chaque enfant peut etre vu, aide et accompagne avec dignite." : "Better-supported care centers where every child can be seen, helped and accompanied with dignity."],
              [fr ? "Valeurs" : "Values", fr ? "Dignite, transparence, humilite, action et responsabilite." : "Dignity, transparency, humility, action and responsibility."],
            ].map(([title, text]) => (
              <Card key={title} className="p-6">
                <h3 className="text-xl font-semibold text-deep-blue">{title}</h3>
                <p className="mt-2 text-ink/65">{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-warm-white py-24">
        <Container>
          <SectionHeader eyebrow={fr ? "Equipe" : "Team"} title={fr ? "Une equipe terrain, administrative et benevole." : "A field, administrative and volunteer team."} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Direction", "Coordination terrain", "Partenariats"].map((role) => (
              <Card key={role} className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-hope-orange">Hand of God</p>
                <h3 className="mt-3 text-xl font-semibold text-deep-blue">{role}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{fr ? "Profil placeholder a remplacer par les responsables officiels." : "Placeholder profile to replace with official leaders."}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
