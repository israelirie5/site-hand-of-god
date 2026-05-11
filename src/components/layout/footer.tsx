import Link from "next/link";
import Image from "next/image";
import { navItems, siteContact, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/section";

const socialIcons = {
  Facebook: "f",
  Instagram: "◎",
  TikTok: "♪",
};

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
              <p>{siteContact.email}</p>
              <p>{siteContact.phone}</p>
              <p>{siteContact.location}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const icon = socialIcons[item.name as keyof typeof socialIcons];
                return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="grid size-11 place-items-center rounded-full border border-white/15 text-lg font-black text-white/70 transition hover:border-hope-orange hover:bg-white/10 hover:text-white"
                >
                  <span aria-hidden="true">{icon}</span>
                </Link>
                );
              })}
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
