import Link from "next/link";
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

        <div className="grid grid-cols-2 border-y border-line lg:grid-cols-3">
          {brands.map((brand, index) => (
            <Link
              key={brand.id}
              href={`/products?brand=${brand.slug}#products-results`}
              className="group flex min-h-[8rem] flex-col justify-between border-b border-r border-line p-4 transition duration-300 hover:bg-white/58 sm:p-5 lg:min-h-[9rem] lg:p-6 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <span className="font-serif text-xl leading-none text-muted/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-serif text-2xl leading-none text-foreground transition group-hover:translate-x-1 sm:text-3xl">
                  {brand.name}
                </span>
                <span className="mt-2 block text-xs uppercase tracking-[0.28em] text-muted">
                  {brand.origin}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
