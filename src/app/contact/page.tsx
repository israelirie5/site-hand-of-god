import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/forms";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/section";
import { pageLocale } from "@/lib/page";

export const metadata: Metadata = { title: "Contact", description: "Contacter Hand of God." };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = await pageLocale(searchParams);
  const fr = locale === "fr";
  return (
    <>
      <PageHero eyebrow="Contact" title={fr ? "Parlons d'une mission, d'un don ou d'un partenariat." : "Let us discuss a mission, donation or partnership."} />
      <section className="bg-warm-white py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-deep-blue">{fr ? "Informations" : "Information"}</h2>
            <div className="mt-6 space-y-4 text-ink/70">
              <p>contact@handofgod.org</p>
              <p>+225 07 00 00 00 00</p>
              <p>WhatsApp: +225 07 00 00 00 00</p>
              <p>Facebook · Instagram · LinkedIn</p>
            </div>
            <div className="mt-8 grid h-64 place-items-center rounded-card bg-sky-mist text-sm font-semibold text-deep-blue">
              {fr ? "Carte placeholder" : "Map placeholder"}
            </div>
          </Card>
          <Card className="p-8">
            <ContactForm labels={{
              name: fr ? "Nom complet" : "Full name",
              email: "Email",
              phone: fr ? "Telephone" : "Phone",
              message: "Message",
              send: fr ? "Envoyer" : "Send",
              success: fr ? "Merci. Votre message a bien ete prepare." : "Thank you. Your message has been prepared.",
            }} />
          </Card>
        </Container>
      </section>
    </>
  );
}
