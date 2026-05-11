import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/data/site";
import { pick } from "@/lib/i18n";
import { pageLocale } from "@/lib/page";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { Container } from "@/components/ui/section";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return { title: post?.title.fr ?? "Actualite", description: post?.excerpt.fr };
}

export default async function PostPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const [{ slug }, locale] = await Promise.all([params, pageLocale(searchParams)]);
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <article className="bg-white pb-24 pt-32">
      <Container className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-hope-orange">{pick(post.category, locale)} · {post.date}</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-deep-blue sm:text-6xl">{pick(post.title, locale)}</h1>
        <p className="mt-6 text-xl leading-9 text-ink/65">{pick(post.excerpt, locale)}</p>
      </Container>
      <Container className="mt-12">
        <CinematicImage src={post.image} alt={pick(post.title, locale)} className="h-[560px] rounded-card" priority />
      </Container>
      <Container className="mt-12 max-w-3xl">
        <p className="text-lg leading-9 text-ink/75">{pick(post.body, locale)}</p>
        {post.sections?.map((section) => (
          <section key={section.title.fr} className="mt-12 border-t border-sky-mist pt-10">
            <h2 className="text-2xl font-semibold text-deep-blue">{pick(section.title, locale)}</h2>
            <p className="mt-4 text-lg leading-9 text-ink/75">{pick(section.text, locale)}</p>
          </section>
        ))}
      </Container>
      {post.gallery?.length ? (
        <Container className="mt-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-hope-orange">
              {locale === "fr" ? "Galerie interne" : "Internal gallery"}
            </p>
            <h2 className="text-3xl font-semibold text-deep-blue">
              {locale === "fr" ? "Images de cette action" : "Images from this action"}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {post.gallery.map((item, index) => (
              <CinematicImage
                key={`${item.image}-${index}`}
                src={item.image}
                alt={pick(item.title, locale)}
                className={`rounded-card ${index === 0 ? "h-96 lg:col-span-2" : "h-72"}`}
              />
            ))}
          </div>
        </Container>
      ) : null}
    </article>
  );
}
