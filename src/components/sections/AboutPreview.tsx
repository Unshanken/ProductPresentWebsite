import Link from "next/link";
import type { HomePageContent } from "@/types";
import { Container } from "@/components/layout/Container";

type AboutPreviewProps = {
  content: HomePageContent["aboutPreview"];
};

export function AboutPreview({ content }: AboutPreviewProps) {
  return (
    <section className="section-space" aria-labelledby="about-preview-title">
      <Container>
        <div className="surface-panel grid gap-8 rounded-[2.5rem] p-6 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
          <div className="space-y-5">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2
              id="about-preview-title"
              className="max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl"
            >
              {content.title}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-soft sm:leading-8">
              {content.description}
            </p>
            <Link href={content.ctaHref} className="button-secondary">
              {content.ctaLabel}
            </Link>
          </div>

          <div className="grid gap-4">
            {content.points.map((point) => (
              <div
                key={point}
                className="surface-card rounded-[1.75rem] p-5"
              >
                <p className="text-sm leading-7 text-soft sm:leading-8">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
