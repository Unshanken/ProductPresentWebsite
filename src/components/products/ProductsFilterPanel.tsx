"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Brand, Category } from "@/types";
import { cn } from "@/lib/utils";

type FilterState = {
  category?: string;
  brand?: string;
  q?: string;
};

type ProductsFilterPanelProps = {
  categories: Category[];
  brands: Brand[];
  currentFilters: FilterState;
};

function buildQuery({
  q,
  category,
  brand
}: {
  q?: string;
  category?: string;
  brand?: string;
}) {
  const params = new URLSearchParams();

  if (q) {
    params.set("q", q);
  }

  if (category) {
    params.set("category", category);
  }

  if (brand) {
    params.set("brand", brand);
  }

  const query = params.toString();
  return query ? `/products?${query}#products-results` : "/products#products-results";
}

export function ProductsFilterPanel({
  categories,
  brands,
  currentFilters
}: ProductsFilterPanelProps) {
  const router = useRouter();
  const searchValue = currentFilters.q ?? "";

  function handleSearchSubmit(formData: FormData) {
    const q = String(formData.get("q") ?? "").trim() || undefined;
    const category = currentFilters.category;
    const brand = currentFilters.brand;

    router.push(
      buildQuery({
        q,
        category,
        brand
      })
    );
  }

  return (
    <aside className="surface-panel rounded-[2rem] p-6 sm:p-7">
      <div className="space-y-6">
        <div>
          <p className="eyebrow">Search</p>
          <form action={handleSearchSubmit} className="mt-4 space-y-3">
            <input
              type="text"
              name="q"
              defaultValue={searchValue}
              placeholder="Search products, brands, categories"
              className="w-full rounded-full border border-line bg-white/75 px-5 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-[#c7b49a] focus:bg-white"
            />
            <button
              type="submit"
              className="button-primary w-full"
            >
              Search
            </button>
          </form>
        </div>

        <div className="border-t border-line pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="eyebrow">Category</p>
            <Link
              href={buildQuery({ q: currentFilters.q, brand: currentFilters.brand })}
              className="text-xs uppercase tracking-[0.2em] text-muted transition hover:text-foreground"
            >
              Clear
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = currentFilters.category === category.slug;

              return (
                <Link
                  key={category.id}
                  href={buildQuery({
                    q: currentFilters.q,
                    brand: currentFilters.brand,
                    category: category.slug
                  })}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition duration-300",
                    isActive
                      ? "border-foreground bg-foreground text-white"
                      : "border-line bg-white/70 text-soft hover:border-[#c7b49a] hover:text-foreground"
                  )}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-line pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="eyebrow">Brand</p>
            <Link
              href={buildQuery({
                q: currentFilters.q,
                category: currentFilters.category
              })}
              className="text-xs uppercase tracking-[0.2em] text-muted transition hover:text-foreground"
            >
              Clear
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => {
              const isActive = currentFilters.brand === brand.slug;

              return (
                <Link
                  key={brand.id}
                  href={buildQuery({
                    q: currentFilters.q,
                    category: currentFilters.category,
                    brand: brand.slug
                  })}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition duration-300",
                    isActive
                      ? "border-foreground bg-foreground text-white"
                      : "border-line bg-white/70 text-soft hover:border-[#c7b49a] hover:text-foreground"
                  )}
                >
                  {brand.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-line pt-6">
          <Link
            href="/products#products-results"
            className="button-secondary w-full"
          >
            Reset All Filters
          </Link>
        </div>
      </div>
    </aside>
  );
}
