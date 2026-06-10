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
  const [leadProduct, ...supportingProducts] = products;

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

        {leadProduct ? (
          <div className="grid gap-8 lg:grid-cols-[1.12fr_1fr] lg:items-start">
            <ProductCard product={leadProduct} featuredLayout />
            <div className="grid gap-8 sm:grid-cols-2">
              {supportingProducts.slice(0, 4).map((product, index) => (
                <div
                  key={product.id}
                  className={index > 1 ? "hidden sm:block" : undefined}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
