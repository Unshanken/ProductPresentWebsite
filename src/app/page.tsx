import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BrandSection } from "@/components/sections/BrandSection";
import { CategorySection } from "@/components/sections/CategorySection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { getBrands, getCategories, getFeaturedProducts, getSiteContent } from "@/lib/data";

const site = getSiteContent();

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore a curated fashion showcase featuring premium brands, category-led browsing and standout products.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${site.brandName} | ${site.brandTagline}`,
    description:
      "Explore a curated fashion showcase featuring premium brands, category-led browsing and standout products.",
    url: "/",
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.brandName} homepage featuring luxury fashion categories and products`
      }
    ]
  }
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const brands = getBrands();
  const categories = getCategories();
  const home = getSiteContent().home;

  return (
    <>
      <HeroBanner content={home.hero} />
      <BrandSection brands={brands} content={home.brandShowcase} />
      <CategorySection categories={categories} content={home.categoryShowcase} />
      <FeaturedProductsSection
        content={home.featuredProducts}
        products={featuredProducts}
      />
      <AboutPreview content={home.aboutPreview} />
      <ContactCTA content={home.contactCta} />
    </>
  );
}
