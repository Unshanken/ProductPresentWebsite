import type { Product, ProductVariant } from "@/types";

function hasImages(images: string[] | undefined) {
  return Array.isArray(images) && images.length > 0;
}

export function getProductVariants(product: Product): ProductVariant[] {
  const normalizedVariants =
    product.variants?.filter((variant) => variant.color && hasImages(variant.images)) ?? [];

  if (normalizedVariants.length > 0) {
    return normalizedVariants;
  }

  if (product.colors.length > 0 && hasImages(product.images)) {
    return product.colors.map((color) => ({
      color,
      images: product.images
    }));
  }

  if (hasImages(product.images)) {
    return [
      {
        color: "Default",
        images: product.images
      }
    ];
  }

  return [];
}

export function getPrimaryProductImages(product: Product) {
  const variants = getProductVariants(product);

  if (variants[0]?.images?.length) {
    return variants[0].images;
  }

  return product.images;
}
