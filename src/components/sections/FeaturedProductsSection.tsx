import type { HomePageContent, Product } from "@/types";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/products/ProductCard";

type FeaturedProductsSectionProps = {
  content: HomePageContent["featuredProducts"];
  products: Product[];
};

export function FeaturedProductsSection({
  content,
  products
}: FeaturedProductsSectionProps) {
  return (
    <section className="section-space" aria-labelledby="featured-products-title">
      <Container>
        <div className="section-head">
          <div className="space-y-4">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 id="featured-products-title" className="display-title max-w-3xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-soft sm:leading-8">
            {content.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
