import type { Metadata } from "next";
import Link from "next/link";
import { EmptyProductsState } from "@/components/products/EmptyProductsState";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductsFilterPanel } from "@/components/products/ProductsFilterPanel";
import { ProductsResultsHeader } from "@/components/products/ProductsResultsHeader";
import { Container } from "@/components/layout/Container";
import {
  getBrandBySlug,
  getBrands,
  getCategories,
  getCategoryBySlug,
  getProducts,
  getSiteContent
} from "@/lib/data";
import type { BrandSlug, CategorySlug, Product } from "@/types";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
    brand?: string;
    q?: string;
  }>;
};

function filterProducts({
  products,
  category,
  brand,
  query
}: {
  products: Product[];
  category?: string;
  brand?: string;
  query?: string;
}) {
  const normalizedQuery = query?.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesBrand = brand ? product.brand === brand : true;

    if (!normalizedQuery) {
      return matchesCategory && matchesBrand;
    }

    const searchableText = [
      product.name,
      product.description,
      product.priceLabel,
      product.colors.join(" "),
      product.materials.join(" "),
      getBrandBySlug(product.brand)?.name,
      getCategoryBySlug(product.category)?.name
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = searchableText.includes(normalizedQuery);

    return matchesCategory && matchesBrand && matchesQuery;
  });
}

export async function generateMetadata({
  searchParams
}: ProductsPageProps): Promise<Metadata> {
  const site = getSiteContent();
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams?.category as CategorySlug | undefined;
  const activeBrand = resolvedSearchParams?.brand as BrandSlug | undefined;
  const keyword = resolvedSearchParams?.q?.trim();
  const categoryName = activeCategory ? getCategoryBySlug(activeCategory)?.name : undefined;
  const brandName = activeBrand ? getBrandBySlug(activeBrand)?.name : undefined;

  const titleParts = [brandName, categoryName, keyword ? `Search: ${keyword}` : undefined]
    .filter(Boolean)
    .join(" / ");

  const title = titleParts ? `Products - ${titleParts}` : "Products";
  const description = titleParts
    ? `Browse curated products filtered by ${titleParts.toLowerCase()} on ${site.brandName}.`
    : "Browse all fashion showcase products across brands, categories and curated collections.";

  return {
    title,
    description,
    alternates: {
      canonical: "/products"
    },
    openGraph: {
      title: `${title} | ${site.brandName}`,
      description,
      url: "/products",
      images: [
        {
          url: site.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${site.brandName} products listing preview`
        }
      ]
    }
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const products = getProducts();
  const categories = getCategories();
  const brands = getBrands();
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams?.category as CategorySlug | undefined;
  const activeBrand = resolvedSearchParams?.brand as BrandSlug | undefined;
  const keyword = resolvedSearchParams?.q?.trim() ?? "";
  const filteredProducts = filterProducts({
    products,
    category: activeCategory,
    brand: activeBrand,
    query: keyword
  });
  const collectionSummary = [
    {
      label: "Categories",
      value: String(categories.length).padStart(2, "0")
    },
    {
      label: "Brands",
      value: String(brands.length).padStart(2, "0")
    },
    {
      label: "Products",
      value: String(products.length).padStart(2, "0")
    }
  ];
  const activeCategoryItem = activeCategory ? getCategoryBySlug(activeCategory) : undefined;
  const activeBrandItem = activeBrand ? getBrandBySlug(activeBrand) : undefined;

  return (
    <section
      className="pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24"
      aria-labelledby="products-page-title"
    >
      <Container>
        <div className="surface-panel mb-12 rounded-[2.5rem] px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
          <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:gap-10">
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="space-y-5">
                <p className="eyebrow">Product Collection</p>
                <h1
                  id="products-page-title"
                  className="max-w-3xl font-serif text-5xl leading-[0.92] text-foreground sm:text-6xl lg:text-[4.25rem]"
                >
                  Explore the full collection
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-soft sm:text-base sm:leading-8">
                  Browse our complete range of sneakers, apparel, bags and accessories. Use filters to quickly find the styles you want — all curated to deliver luxury-inspired design at better value.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="surface-card rounded-[1.75rem] p-5 sm:p-6">
                  <p className="eyebrow">Collection Access</p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-soft">
                    Start with a category entry point or jump directly into the full
                    product results area to compare styles, brands and pricing in one view.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link href="/products#products-results" className="button-primary">
                      Browse All Products
                    </Link>
                    <Link href="/contact" className="button-secondary">
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {collectionSummary.map((item) => (
                    <div key={item.label} className="surface-card rounded-[1.5rem] p-4">
                      <p className="eyebrow">{item.label}</p>
                      <p className="mt-3 font-serif text-3xl text-foreground">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                  <p className="eyebrow">Shop by Category</p>
                  <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                    Discover your style, your way
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-7 text-soft">
                  Explore curated categories designed around modern luxury and streetwear — making it easy to find pieces that match your style.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((category, index) => (
                  <Link
                    key={category.id}
                    href={`/products?category=${category.slug}#products-results`}
                    className={`group surface-card rounded-[1.6rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#c7b49a] hover:shadow-ambient ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <p className="eyebrow">Category</p>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <p className="font-serif text-2xl text-foreground transition group-hover:text-[#3c413d]">
                        {category.name}
                      </p>
                      <span className="text-xs uppercase tracking-[0.24em] text-muted transition group-hover:text-foreground">
                        Explore
                      </span>
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-7 text-soft">
                      {category.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <ProductsFilterPanel
              categories={categories}
              brands={brands}
              currentFilters={{
                category: activeCategory,
                brand: activeBrand,
                q: keyword
              }}
            />
          </div>

          <section
            id="products-results"
            aria-labelledby="products-results-title"
            className="scroll-mt-28"
          >
            <ProductsResultsHeader
              total={filteredProducts.length}
              activeCategoryName={activeCategoryItem?.name}
              activeBrandName={activeBrandItem?.name}
              keyword={keyword || undefined}
            />

            {filteredProducts.length === 0 ? (
              <EmptyProductsState />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </Container>
    </section>
  );
}
