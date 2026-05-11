import { Container, SectionHeader } from "@/components/ui/section";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="bg-deep-blue pb-20 pt-36 text-white">
      <Container>
        <SectionHeader light eyebrow={eyebrow} title={title} text={text} />
      </Container>
    </section>
  );
}
