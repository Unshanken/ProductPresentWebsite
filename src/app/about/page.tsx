import type { Metadata } from "next";
import { BrandShowcaseCard } from "@/components/brands/BrandShowcaseCard";
import { Container } from "@/components/layout/Container";
import { getBrands, getSiteContent } from "@/lib/data";

const site = getSiteContent();

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the brand catalog concept, showroom-inspired design direction and curated product presentation behind themodedistrict.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: `About | ${site.brandName}`,
    description:
      "Learn about the brand catalog concept, showroom-inspired design direction and curated product presentation behind themodedistrict.",
    url: "/about",
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.brandName} about page preview`
      }
    ]
  }
};

export default function AboutPage() {
  const brands = getBrands();

  return (
    <section className="py-14 sm:py-16" aria-labelledby="about-page-title">
      <Container>
        <div className="surface-panel overflow-hidden rounded-[2.5rem] p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.32em] text-muted">About The Site</p>
              <h1
                id="about-page-title"
                className="font-serif text-5xl leading-tight text-foreground sm:text-6xl"
              >
                Luxury style, made more accessible
              </h1>
            </div>

            <div className="space-y-5 text-sm leading-7 text-soft">
              <p>
                We are a curated showcase of luxury-inspired fashion and contemporary streetwear, created for those who appreciate high-end aesthetics without the traditional price barrier.
              </p>
              <p>
                We focus on selecting pieces that reflect the spirit of iconic brands while staying practical for everyday wear. From statement sneakers to essential wardrobe staples, every item is chosen for its design, relevance and value.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {brands.map((brand) => (
            <BrandShowcaseCard key={brand.id} brand={brand} titleTag="h2" />
          ))}
        </div>
      </Container>
    </section>
  );
}
