"use client";

import { useMemo, useState } from "react";
import { ProductDetailSummary } from "@/components/products/ProductDetailSummary";
import { ProductGallery } from "@/components/products/ProductGallery";
import { getProductVariants } from "@/lib/product-variants";
import type { Brand, Category, Product } from "@/types";

type ProductDetailExperienceProps = {
  product: Product;
  brand?: Brand;
  category?: Category;
};

export function ProductDetailExperience({
  product,
  brand,
  category
}: ProductDetailExperienceProps) {
  const variants = useMemo(() => getProductVariants(product), [product]);
  const fallbackColor = product.colors[0] ?? variants[0]?.color ?? "Default";
  const [selectedColor, setSelectedColor] = useState(variants[0]?.color ?? fallbackColor);

  const selectedVariant =
    variants.find((variant) => variant.color === selectedColor) ?? variants[0];
  const activeImages =
    selectedVariant?.images?.length
      ? selectedVariant.images
      : product.images;
  const colorOptions =
    variants.length > 0 ? variants.map((variant) => variant.color) : product.colors;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <ProductGallery
        name={product.name}
        images={activeImages}
        activeColor={selectedVariant?.color}
      />
      <ProductDetailSummary
        product={product}
        brand={brand}
        category={category}
        colors={colorOptions}
        selectedColor={selectedVariant?.color ?? selectedColor}
        onColorSelect={setSelectedColor}
      />
    </div>
  );
}
