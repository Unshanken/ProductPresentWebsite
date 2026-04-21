import { BrandShowcaseCard } from "@/components/brands/BrandShowcaseCard";
import { Container } from "@/components/layout/Container";
import type { Brand, HomePageContent } from "@/types";

type BrandSectionProps = {
  brands: Brand[];
  content?: HomePageContent["brandShowcase"];
};

export function BrandSection({ brands, content }: BrandSectionProps) {
  return (
    <section className="section-space" aria-labelledby="brand-showcase-title">
      <Container>
        <div className="section-head">
          <div className="space-y-4">
            <p className="eyebrow">
              {content?.eyebrow ?? "Brand Focus"}
            </p>
            <h2 id="brand-showcase-title" className="display-title max-w-3xl">
              {content?.title ?? "Curated labels with distinctive attitudes"}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-soft sm:leading-8">
            {content?.description ??
              "Built for premium product storytelling, the structure is ready for future CMS content, lookbooks or seasonal brand campaigns."}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandShowcaseCard key={brand.id} brand={brand} titleTag="h3" />
          ))}
        </div>
      </Container>
    </section>
  );
}
