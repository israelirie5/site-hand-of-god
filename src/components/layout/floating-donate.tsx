import { ButtonLink } from "@/components/ui/button";
import { siteContact } from "@/data/site";

export function FloatingDonate() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <ButtonLink href={siteContact.whatsappHref} className="shadow-soft">
        WhatsApp direct
      </ButtonLink>
    </div>
  );
}
