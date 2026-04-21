import { brands } from "@/data/brands/brands";
import { categories } from "@/data/categories/categories";
import { products } from "@/data/products";
import { siteContent } from "@/data/site/site";
import type { BrandSlug, CategorySlug, Product } from "@/types";

export function getBrands() {
  return brands;
}

export function getCategories() {
  return categories;
}

export function getProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getNewArrivalProducts() {
  return products.filter((product) => product.newArrival);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter(
      (item) =>
        item.slug !== product.slug &&
        (item.brand === product.brand || item.category === product.category)
    )
    .slice(0, 3);
}

export function getBrandBySlug(slug: BrandSlug) {
  return brands.find((brand) => brand.slug === slug);
}

export function getCategoryBySlug(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug);
}

export function getSiteContent() {
  return siteContent;
}
