"use client";

import Link from "next/link";
import { getSiteContent } from "@/lib/data";
import type { Brand, Category, Product } from "@/types";

type ProductDetailSummaryProps = {
  product: Product;
  brand?: Brand;
  category?: Category;
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
};

export function ProductDetailSummary({
  product,
  brand,
  category,
  colors,
  selectedColor,
  onColorSelect
}: ProductDetailSummaryProps) {
  const site = getSiteContent();
  const flylinkHref = product.flylinkUrl || site.flylinkStoreUrl;
  const hasFlylinkHref = Boolean(flylinkHref);

  return (
    <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
      <div className="space-y-5 pb-8">
        <Link
          href="/products"
          className="text-xs uppercase tracking-[0.28em] text-muted transition hover:text-foreground"
        >
          Back to products
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {product.featured ? (
            <span className="rounded-full bg-foreground px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
              Featured
            </span>
          ) : null}
          {product.newArrival ? (
            <span className="rounded-full border border-line bg-white/75 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground">
              New Arrival
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted">
          <span>{brand?.name}</span>
          <span className="h-1 w-1 rounded-full bg-muted" />
          <span>{category?.name}</span>
        </div>

        <div className="space-y-4">
          <h1
            id="product-detail-title"
            className="font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl"
          >
            {product.name}
          </h1>
          <p className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            {product.priceLabel}
          </p>
        </div>

        <p className="text-sm leading-7 text-soft">{product.description}</p>
      </div>

      <div className="border-y border-line py-8">
        <div className="rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(244,236,224,0.58))] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Inquiry</p>
          <p className="mt-4 text-sm leading-7 text-soft">
            Orders are not processed on this site. Please complete your purchase through our Flylink store.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            {hasFlylinkHref ? (
              <a
                href={flylinkHref}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Shop via Flylink
              </a>
            ) : (
              <span
                className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full border border-line bg-white/60 px-6 text-sm uppercase tracking-[0.18em] text-muted opacity-70"
                aria-disabled="true"
              >
                Flylink Link Coming Soon
              </span>
            )}
            <Link
              href="/products"
              className="button-secondary"
            >
              Continue Browsing
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-8 py-8 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Brand</p>
          <p className="mt-4 text-sm leading-7 text-foreground">{brand?.name}</p>
          <p className="mt-2 text-sm leading-7 text-soft">{brand?.origin}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Category</p>
          <p className="mt-4 text-sm leading-7 text-foreground">{category?.name}</p>
          <p className="mt-2 text-sm leading-7 text-soft">{category?.description}</p>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Colors</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => onColorSelect(color)}
                className={
                  color === selectedColor
                    ? "rounded-full border border-[#c7b49a] bg-[#f2e7d7] px-4 py-2 text-sm text-foreground shadow-panel-soft transition duration-300"
                    : "rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-foreground transition duration-300 hover:border-[#c7b49a] hover:bg-white"
                }
                aria-pressed={color === selectedColor}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Sizes</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-foreground"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Materials</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {product.materials.map((material) => (
              <li
                key={material}
                className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-soft"
              >
                {material}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
