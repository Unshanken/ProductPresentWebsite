import Link from "next/link";
import type { HomePageContent } from "@/types";
import { Container } from "@/components/layout/Container";

type HeroBannerProps = {
  content: HomePageContent["hero"];
};

export function HeroBanner({ content }: HeroBannerProps) {
  return (
    <section
      className="pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-24"
      aria-labelledby="home-hero-title"
    >
      <Container>
        <div className="surface-panel overflow-hidden rounded-[2.75rem] bg-hero-glow shadow-ambient">
          <div className="grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:px-14 lg:py-20 xl:px-16">
            <div className="space-y-7">
              <p className="eyebrow">{content.eyebrow}</p>
              <div className="space-y-5">
                <h1
                  id="home-hero-title"
                  className="max-w-4xl font-serif text-5xl leading-[0.9] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
                >
                  {content.title}
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-soft sm:text-base sm:leading-8">
                  {content.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={content.primaryCtaHref} className="button-primary">
                  {content.primaryCtaLabel}
                </Link>
                <Link href={content.secondaryCtaHref} className="button-secondary">
                  {content.secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {content.highlights.map((item) => (
                <div
                  key={item.label}
                  className="surface-card rounded-[2rem] p-6 sm:p-7"
                >
                  <p className="eyebrow">{item.label}</p>
                  <p className="mt-6 font-serif text-3xl text-foreground sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-soft sm:leading-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
