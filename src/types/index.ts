export type BrandSlug = string;

export type CategorySlug =
  | "shoes"
  | "tops"
  | "pants"
  | "jewelry"
  | "bags";

export type Category = {
  id: string;
  slug: CategorySlug;
  name: string;
  description: string;
  coverImage: string;
};

export type Brand = {
  id: string;
  slug: BrandSlug;
  name: string;
  origin: string;
  logo: string;
};

export type ProductVariant = {
  // Primary color-level data model for the detail page.
  color: string;
  images: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: BrandSlug;
  category: CategorySlug;
  description: string;
  flylinkUrl?: string;
  // Primary field to maintain going forward.
  // Each color should own its own image set here.
  variants?: ProductVariant[];
  // Compatibility field for older product records and non-variant contexts.
  // Keep in sync with the first/default variant images when possible.
  images: string[];
  // Compatibility field for older product records and lightweight UI usage.
  // Keep in sync with variants when possible.
  colors: string[];
  sizes: string[];
  featured: boolean;
  newArrival: boolean;
  priceLabel: string;
  materials: string[];
};

export type HomePageContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    highlights: Array<{
      label: string;
      value: string;
      description: string;
    }>;
  };
  brandShowcase: {
    eyebrow: string;
    title: string;
    description: string;
  };
  categoryShowcase: {
    eyebrow: string;
    title: string;
    description: string;
  };
  featuredProducts: {
    eyebrow: string;
    title: string;
    description: string;
  };
  aboutPreview: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    ctaLabel: string;
    ctaHref: string;
  };
  contactCta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

export type SiteContact = {
  email: string;
  phone: string;
  location: string;
};

export type SiteContent = {
  brandName: string;
  brandTagline: string;
  footerDescription: string;
  copyright: string;
  siteUrl: string;
  defaultOgImage: string;
  flylinkStoreUrl?: string;
  contact: SiteContact;
  home: HomePageContent;
};
