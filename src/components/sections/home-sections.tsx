import Link from "next/link";
import { actions, featuredGallery, impactStats, posts, testimonials } from "@/data/site";
import { pick } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Container, SectionHeader } from "@/components/ui/section";

export function ImpactSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-warm-white py-16">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <MotionReveal key={stat.value}>
              <Card className="p-7">
                <p className="text-4xl font-semibold text-deep-blue">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-ink/55">{pick(stat.label, locale)}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutPreview({ locale }: { locale: Locale }) {
  return (
    <section className="bg-white py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <MotionReveal>
          <SectionHeader
            eyebrow={locale === "fr" ? "Qui sommes-nous" : "Who we are"}
            title={locale === "fr" ? "Une presence humanitaire sobre, proche du terrain." : "A grounded humanitarian presence close to the field."}
            text={
              locale === "fr"
                ? "Hand of God mobilise des benevoles, donateurs et partenaires autour d'actions concretes menees principalement dans les orphelinats et structures d'accueil."
                : "Hand of God mobilizes volunteers, donors and partners around practical actions mainly carried out in orphanages and care centers."
            }
          />
          <ButtonLink href={`/about?lang=${locale}`} variant="ghost" className="mt-8">
            {locale === "fr" ? "Decouvrir l'ONG" : "Discover the NGO"}
          </ButtonLink>
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <CinematicImage src="/media/edited/actions/orphelinat-yopougon-mami-adjoua/yopougon-mami-adjoua-03.jpg" alt="Hand of God mission" className="h-[480px] rounded-card" />
        </MotionReveal>
      </Container>
    </section>
  );
}

export function ActionsPreview({ locale }: { locale: Locale }) {
  return (
    <section className="bg-warm-white py-24">
      <Container>
        <SectionHeader
          eyebrow={locale === "fr" ? "Nos actions" : "Our actions"}
          title={locale === "fr" ? "Des interventions simples, utiles et documentees." : "Simple, useful and documented interventions."}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <MotionReveal key={action.title.fr}>
              <Card className="h-full overflow-hidden">
                <CinematicImage src={action.image} alt={pick(action.title, locale)} className="h-52" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-deep-blue">{pick(action.title, locale)}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{pick(action.excerpt, locale)}</p>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProjectsPreview({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-deep-blue py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(235,125,43,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(216,236,247,0.18),transparent_28%)]" />
      <Container>
        <div className="relative">
          <SectionHeader
            light
            eyebrow={locale === "fr" ? "Nos projets" : "Our projects"}
            title={locale === "fr" ? "Le prochain projet est en preparation." : "The next project is being prepared."}
            text={
              locale === "fr"
                ? "Aucune campagne publique n'est ouverte pour le moment. Hand of God prepare la prochaine mission avec la meme exigence : besoins verifies, dons utiles, equipe mobilisee et suivi clair."
                : "No public campaign is open at the moment. Hand of God is preparing the next mission with the same standards: verified needs, useful donations, mobilized team and clear follow-up."
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              locale === "fr" ? "Evaluation des besoins" : "Needs assessment",
              locale === "fr" ? "Mobilisation des dons" : "Donation mobilization",
              locale === "fr" ? "Annonce prochaine" : "Coming announcement",
            ].map((item, index) => (
              <Card key={item} className="border-white/10 bg-white/10 p-6 text-white backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-mist">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function GalleryPreview({ locale }: { locale: Locale }) {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow={locale === "fr" ? "Galerie" : "Gallery"} title={locale === "fr" ? "Fragments de terrain, visages et gestes de solidarite." : "Field fragments, faces and gestures of solidarity."} />
          <ButtonLink href={`/gallery?lang=${locale}`} variant="ghost">{locale === "fr" ? "Voir la galerie" : "View gallery"}</ButtonLink>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGallery.map((item) => (
            <CinematicImage key={item.image} src={item.image} alt={pick(item.title, locale)} className="h-72 rounded-card" />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TestimonialsSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-warm-white py-24">
      <Container>
        <SectionHeader eyebrow={locale === "fr" ? "Temoignages" : "Testimonials"} title={locale === "fr" ? "Ce que l'action laisse derriere elle." : "What action leaves behind."} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-8">
              <p className="text-xl leading-9 text-ink">“{pick(item.quote, locale)}”</p>
              <p className="mt-6 font-semibold text-deep-blue">{item.name}</p>
              <p className="text-sm text-ink/55">{pick(item.role, locale)}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function QuickDonate({ locale }: { locale: Locale }) {
  const amounts = ["5 000 FCFA", "10 000 FCFA", "25 000 FCFA", "50 000 FCFA"];
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="rounded-card bg-deep-blue p-8 text-white md:p-12">
          <SectionHeader light eyebrow={locale === "fr" ? "Don rapide" : "Quick donation"} title={locale === "fr" ? "Chaque contribution peut devenir un repas, un cahier, un trajet, une presence." : "Every contribution can become a meal, a notebook, a ride, a presence."} />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {amounts.map((amount) => (
              <Link key={amount} href={`/donate?amount=${encodeURIComponent(amount)}&lang=${locale}`} className="rounded-full bg-white px-5 py-4 text-center text-sm font-bold text-deep-blue transition hover:bg-sky-mist">
                {amount}
              </Link>
            ))}
            <Link href={`/donate?lang=${locale}`} className="rounded-full border border-white/35 px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10">
              {locale === "fr" ? "Montant libre" : "Custom amount"}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function NewsPreview({ locale }: { locale: Locale }) {
  return (
    <section className="bg-warm-white py-24">
      <Container>
        <SectionHeader eyebrow={locale === "fr" ? "Actualites" : "News"} title={locale === "fr" ? "Dernieres nouvelles de terrain." : "Latest field updates."} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              <CinematicImage src={post.image} alt={pick(post.title, locale)} className="h-56" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-hope-orange">{pick(post.category, locale)} · {post.date}</p>
                <h3 className="mt-3 text-xl font-semibold text-deep-blue">{pick(post.title, locale)}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{pick(post.excerpt, locale)}</p>
                <Link href={`/news/${post.slug}?lang=${locale}`} className="mt-5 inline-flex text-sm font-bold text-deep-blue">
                  {locale === "fr" ? "Lire l'article" : "Read article"}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinalCta({ locale }: { locale: Locale }) {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="image-grain rounded-card bg-[linear-gradient(90deg,rgba(8,31,60,.93),rgba(8,31,60,.52)),url('/media/edited/actions/maison-du-potier-yopougon-niangon-nord/maison-du-potier-42.jpg')] bg-cover bg-center p-8 text-white md:p-14">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            {locale === "fr" ? "Aider, c'est parfois simplement etre la au bon moment." : "Helping is sometimes simply being there at the right time."}
          </h2>
          <p className="mt-5 max-w-2xl text-white/75">
            {locale === "fr" ? "Rejoignez Hand of God comme donateur, benevole ou partenaire de mission." : "Join Hand of God as a donor, volunteer or mission partner."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/donate?lang=${locale}`}>{locale === "fr" ? "Faire un don" : "Donate"}</ButtonLink>
            <ButtonLink href={`/volunteer?lang=${locale}`} variant="secondary">{locale === "fr" ? "Devenir benevole" : "Volunteer"}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
