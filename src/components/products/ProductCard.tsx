import Image from "next/image";
import Link from "next/link";
import { getBrandBySlug, getCategoryBySlug } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

type ProductCardProps = {
  product: Product;
  featuredLayout?: boolean;
};

export function ProductCard({ product, featuredLayout = false }: ProductCardProps) {
  const brand = getBrandBySlug(product.brand);
  const category = getCategoryBySlug(product.category);
  const productAlt = `${product.name}${brand ? ` by ${brand.name}` : ""}${category ? ` in ${category.name}` : ""}`;

  return (
    <article>
      <Link
        href={`/products/${product.slug}`}
        className="group block overflow-hidden border-b border-line pb-5 transition duration-500 hover:border-[#b7a17f]"
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl bg-panelStrong",
            featuredLayout ? "aspect-[5/6] lg:aspect-[6/5]" : "aspect-[4/5]"
          )}
        >
          <Image
            src={product.images[0]}
            alt={productAlt}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {product.featured ? (
              <span className="bg-foreground px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                Featured
              </span>
            ) : null}
            {product.newArrival ? (
              <span className="border border-line bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur-sm">
                New
              </span>
            ) : null}
          </div>
        </div>

        <div className="space-y-4 pt-5">
          <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-muted">
            <span>{brand?.name}</span>
            <span>{category?.name}</span>
          </div>

          <div className="space-y-2">
            <h3
              className={cn(
                "font-serif leading-tight text-foreground",
                featuredLayout ? "text-4xl sm:text-5xl" : "text-[1.65rem]"
              )}
            >
              {product.name}
            </h3>
            <p className="line-clamp-2 text-sm leading-7 text-soft">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-1 text-sm text-foreground">
            <span className="text-accent">{product.priceLabel}</span>
            <span className="uppercase tracking-[0.22em] text-muted transition group-hover:text-foreground">
              View Detail
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
