import type { Metadata } from "next";
import { VolunteerForm } from "@/components/sections/forms";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/section";
import { pageLocale } from "@/lib/page";

export const metadata: Metadata = { title: "Devenir benevole", description: "Rejoindre les benevoles Hand of God." };

export default async function VolunteerPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const locale = await pageLocale(searchParams);
  const fr = locale === "fr";
  return (
    <>
      <PageHero eyebrow={fr ? "Devenir benevole" : "Volunteer"} title={fr ? "Donner du temps avec serieux, pudeur et humanite." : "Give time with care, discretion and humanity."} />
      <section className="bg-white py-24">
        <Container>
          <Card className="p-8">
            <VolunteerForm labels={{
              firstName: fr ? "Prenom" : "First name",
              lastName: fr ? "Nom" : "Last name",
              email: "Email",
              phone: fr ? "Telephone" : "Phone",
              city: fr ? "Ville" : "City",
              availability: fr ? "Disponibilite" : "Availability",
              area: fr ? "Domaine d'aide" : "Area of help",
              motivation: fr ? "Motivation" : "Motivation",
              send: fr ? "Envoyer ma candidature" : "Send application",
              success: fr ? "Merci. Votre candidature benevole a ete preparee." : "Thank you. Your volunteer application has been prepared.",
            }} />
          </Card>
        </Container>
      </section>
    </>
  );
}
