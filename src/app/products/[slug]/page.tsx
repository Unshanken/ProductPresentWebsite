import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailExperience } from "@/components/products/ProductDetailExperience";
import { getPrimaryProductImages } from "@/lib/product-variants";
import {
  getBrandBySlug,
  getCategoryBySlug,
  getProductBySlug,
  getProducts,
  getRelatedProducts,
  getSiteContent
} from "@/lib/data";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getProducts().map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const site = getSiteContent();

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found."
    };
  }

  const brand = getBrandBySlug(product.brand);
  const category = getCategoryBySlug(product.category);
  const title = `${product.name}${brand ? ` by ${brand.name}` : ""}`;
  const description = product.description;
  const primaryImages = getPrimaryProductImages(product);
  const primaryImage = primaryImages[0];

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      type: "article",
      title: `${title} | ${site.brandName}`,
      description,
      url: `/products/${product.slug}`,
      images: primaryImage
        ? [
            {
              url: primaryImage,
              width: 1200,
              height: 1500,
              alt: `${product.name}${brand ? ` by ${brand.name}` : ""} product image`
            }
          ]
        : []
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.brandName}`,
      description,
      images: primaryImage ? [primaryImage] : []
    },
    keywords: [
      product.name,
      brand?.name,
      category?.name,
      ...product.colors,
      ...product.materials
    ].filter(Boolean) as string[]
  };
}

export default async function ProductDetailPage({
  params
}: ProductDetailPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const brand = getBrandBySlug(product.brand);
  const category = getCategoryBySlug(product.category);
  const relatedProducts = getRelatedProducts(product);

  return (
    <article className="py-14 sm:py-16" aria-labelledby="product-detail-title">
      <Container>
        <ProductDetailExperience product={product} brand={brand} category={category} />

        {relatedProducts.length > 0 ? (
          <section className="mt-20" aria-labelledby="related-products-title">
            <div className="mb-8 space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-muted">
                Related Products
              </p>
              <h2
                id="related-products-title"
                className="font-serif text-4xl text-foreground"
              >
                You may also like
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </article>
  );
}
