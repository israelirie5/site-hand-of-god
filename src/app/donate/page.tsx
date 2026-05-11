import type { Metadata } from "next";
import Image from "next/image";
import { donationLinks } from "@/data/site";
import { pageLocale } from "@/lib/page";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = { title: "Faire un don", description: "Soutenir les actions Hand of God." };

export default async function DonatePage({ searchParams }: { searchParams: Promise<{ lang?: string; amount?: string }> }) {
  const params = await searchParams;
  const locale = await pageLocale(Promise.resolve(params));
  const fr = locale === "fr";
  const amounts = ["5 000 FCFA", "10 000 FCFA", "25 000 FCFA", "50 000 FCFA"];
  return (
    <>
      <PageHero eyebrow={fr ? "Faire un don" : "Donate"} title={fr ? "Votre don finance une aide directe, visible et documentee." : "Your donation funds direct, visible and documented aid."} />
      <section className="bg-warm-white py-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-deep-blue">{fr ? "Choisir un montant" : "Choose an amount"}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {amounts.map((amount) => (
                <button key={amount} className={`rounded-card border px-5 py-4 text-left font-bold ${params.amount === amount ? "border-hope-orange bg-white" : "border-sky-mist bg-white"}`}>
                  {amount}
                </button>
              ))}
              <input className="rounded-card border border-sky-mist px-5 py-4 font-semibold outline-none focus:border-hope-orange" placeholder={fr ? "Montant libre" : "Custom amount"} />
            </div>
          </Card>
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-deep-blue">{fr ? "Moyen de paiement" : "Payment method"}</h2>
            <p className="mt-3 leading-7 text-ink/65">{fr ? "Liens placeholder a remplacer par les vrais comptes de paiement." : "Placeholder links to replace with real payment accounts."}</p>
            <div className="mt-6 grid gap-3">
              {donationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex min-h-16 items-center gap-4 rounded-card px-5 py-3 text-left font-bold transition hover:-translate-y-0.5 ${
                    link.tone === "blue"
                      ? "bg-[#0070ba] text-white hover:bg-[#005ea6]"
                      : link.tone === "white"
                        ? "border border-sky-mist bg-white text-black hover:border-hope-orange"
                        : "bg-black text-white hover:bg-ink"
                  }`}
                >
                  <Image src={link.icon} alt="" width={64} height={32} className="h-10 w-20 object-contain" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
