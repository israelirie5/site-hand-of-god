import { ButtonLink } from "@/components/ui/button";

export function FloatingDonate() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <ButtonLink href="/contact" className="shadow-soft">
        WhatsApp direct
      </ButtonLink>
    </div>
  );
}
