import Link from "next/link";
import Image from "next/image";
import { navItems, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/section";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image src="/IMG_9022.PNG" alt="Hand of God" width={190} height={190} className="h-20 w-auto object-contain" />
            </div>
            <p className="max-w-md text-sm leading-7 text-white/65">
              ONG humanitaire dediee aux orphelins, aux veuves et aux personnes vulnerables. Presence, dignite et actions concretes.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-mist">Navigation</h3>
            <div className="grid gap-2 text-sm text-white/65">
              {navItems.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label.fr}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-mist">Contact</h3>
            <div className="space-y-2 text-sm text-white/65">
              <p>contact@handofgod.org</p>
              <p>+225 07 00 00 00 00</p>
              <p>Abidjan, Cote d&apos;Ivoire</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/70 transition hover:border-hope-orange hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
          © 2026 Hand of God. Tous droits reserves.
        </div>
      </Container>
    </footer>
  );
}
