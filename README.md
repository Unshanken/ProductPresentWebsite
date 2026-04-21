# themodedistrict Product Showcase Website

## Project Overview

This project is a fashion / luxury-inspired product showcase website built with Next.js.

Its main purpose is to:

- present products in a clean, premium way
- show brands and categories
- help visitors browse products and contact you for inquiries
- act as a customizable front-end template for your own business

This is not a checkout-focused store. There is no cart, payment flow, login system, or admin panel. The site is designed first for product presentation, brand image, and inquiry conversion.

## Tech Stack

This project uses a modern front-end stack, but most day-to-day updates only require editing data files.

- `Next.js`
  Handles pages, routing, SEO metadata, and site rendering.
- `TypeScript`
  Keeps product, brand, and site data structured and easier to maintain.
- `Tailwind CSS`
  Controls the visual style and component appearance.
- Local data files in `src/data/`
  Store your site copy, products, brands, categories, and contact information.

Most content updates happen in:

- `src/data/site/site.ts`
- `src/data/brands/brands.ts`
- `src/data/categories/categories.ts`
- `src/data/products/items/*.ts`
- `src/data/products/index.ts`

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start the project locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### 3. Build the project

Use this before deployment or after larger edits:

```bash
npm run build
```

### 4. Run the production build locally

```bash
npm run start
```

## Customization Guide

This is the most important section. Use it as your editing guide when replacing the template content with your own business information.

### Brand name

What it controls:

- the site name in the header
- the site name in the footer
- parts of the metadata and page sharing titles

Edit:

- `src/data/site/site.ts`

Field:

- `brandName`

Example:

```ts
brandName: "themodedistrict"
```

### Brand tagline

What it controls:

- the small line beside the site name in the header

Edit:

- `src/data/site/site.ts`

Field:

- `brandTagline`

Example:

```ts
brandTagline: "Curated Luxury Within Reach"
```

### Footer description

What it controls:

- the short paragraph in the footer

Edit:

- `src/data/site/site.ts`

Field:

- `footerDescription`

Expected value:

- a short paragraph describing your store, audience, and style direction

### Copyright text

What it controls:

- the copyright line in the footer

Edit:

- `src/data/site/site.ts`

Field:

- `copyright`

Example:

```ts
copyright: "© 2026 Your Brand. All rights reserved."
```

### Site URL

What it controls:

- canonical URLs
- metadata base URL
- Open Graph URL references

Edit:

- `src/data/site/site.ts`

Field:

- `siteUrl`

Example:

```ts
siteUrl: "https://yourdomain.com"
```

### Default OG image

What it controls:

- the default social sharing image used by metadata

Edit:

- `src/data/site/site.ts`

Field:

- `defaultOgImage`

Expected value:

- a full image URL

Example:

```ts
defaultOgImage: "https://yourdomain.com/og-image.jpg"
```

### Contact information

What it controls:

- footer contact information
- contact CTA references
- general contact details used across the site

Edit:

- `src/data/site/site.ts`

Fields:

- `contact.email`
- `contact.phone`
- `contact.location`

Example:

```ts
contact: {
  email: "hello@yourbrand.com",
  phone: "+1 000 000 0000",
  location: "New York / USA"
}
```

Important:

- the Contact page also contains page-specific text in `src/app/contact/page.tsx`

### Homepage hero section

What it controls:

- the main homepage title
- the intro text
- the two CTA buttons
- the small highlight cards

Edit:

- `src/data/site/site.ts`

Fields:

- `home.hero.eyebrow`
- `home.hero.title`
- `home.hero.subtitle`
- `home.hero.primaryCtaLabel`
- `home.hero.primaryCtaHref`
- `home.hero.secondaryCtaLabel`
- `home.hero.secondaryCtaHref`
- `home.hero.highlights`

Example:

```ts
hero: {
  eyebrow: "Luxury Fashion",
  title: "Premium style without the premium price.",
  subtitle: "Explore curated footwear, apparel and accessories.",
  primaryCtaLabel: "Browse Products",
  primaryCtaHref: "/products",
  secondaryCtaLabel: "Contact Us",
  secondaryCtaHref: "/contact",
  highlights: [
    {
      label: "Value",
      value: "Luxury for Less",
      description: "A short supporting sentence."
    }
  ]
}
```

### Homepage highlights

What it controls:

- the small supporting cards in the homepage hero area

Edit:

- `src/data/site/site.ts`

Field:

- `home.hero.highlights`

Expected value:

- an array of objects with `label`, `value`, and `description`

### Brand showcase section

What it controls:

- the heading and intro text for the homepage Featured Brands section
- the actual brand cards shown in that section

Edit:

- section copy: `src/data/site/site.ts`
- brand card data: `src/data/brands/brands.ts`

Fields:

- `home.brandShowcase.eyebrow`
- `home.brandShowcase.title`
- `home.brandShowcase.description`

Brand data structure:

```ts
{
  id: "brand-001",
  slug: "chanel",
  name: "Chanel",
  origin: "Paris",
  logo: "/images/brands/chanel-logo.png"
}
```

Important:

- each brand card links to the Products page using the `slug`
- if you add a new brand, make sure product items use the same brand slug

### Category showcase section

What it controls:

- the heading and intro text for the homepage category section
- the category cards shown there

Edit:

- section copy: `src/data/site/site.ts`
- category data: `src/data/categories/categories.ts`

Fields:

- `home.categoryShowcase.eyebrow`
- `home.categoryShowcase.title`
- `home.categoryShowcase.description`

Category structure:

```ts
{
  id: "category-001",
  slug: "shoes",
  name: "Shoes",
  description: "Luxury sneakers, boots and statement footwear.",
  coverImage: "https://..."
}
```

### Featured products section

What it controls:

- the heading and intro text for the homepage Featured Products section
- which products appear there

Edit:

- section copy: `src/data/site/site.ts`
- product item files in `src/data/products/items/`

Fields:

- `home.featuredProducts.eyebrow`
- `home.featuredProducts.title`
- `home.featuredProducts.description`
- product field: `featured`

Example:

```ts
featured: true
```

### About preview section

What it controls:

- the About preview section on the homepage

Edit:

- `src/data/site/site.ts`

Fields:

- `home.aboutPreview.eyebrow`
- `home.aboutPreview.title`
- `home.aboutPreview.description`
- `home.aboutPreview.points`
- `home.aboutPreview.ctaLabel`
- `home.aboutPreview.ctaHref`

### Contact CTA section

What it controls:

- the contact call-to-action section on the homepage

Edit:

- `src/data/site/site.ts`

Fields:

- `home.contactCta.eyebrow`
- `home.contactCta.title`
- `home.contactCta.description`
- `home.contactCta.buttonLabel`
- `home.contactCta.buttonHref`

### Product data

What it controls:

- all product titles
- prices
- descriptions
- images
- colors
- sizes
- materials
- featured / new arrival flags

Edit:

- individual files in `src/data/products/items/`
- product aggregation in `src/data/products/index.ts`

Each product is now a full standalone object. Example:

```ts
import type { Product } from "@/types";

export const ChanelChanelChunkyPlatformSneakersProduct: Product = {
  id: "product-001",
  slug: "chanel-chanel-chunky-platform-sneakers",
  name: "Chanel Chunky Platform Sneakers",
  brand: "chanel",
  category: "shoes",
  description: "Longer product description here",
  images: [
    "https://example.com/image-1.jpg",
    "https://example.com/image-2.jpg"
  ],
  colors: ["Black", "White"],
  sizes: ["36", "37", "38"],
  featured: true,
  newArrival: false,
  priceLabel: "$109.99",
  materials: ["Leather", "Rubber outsole"]
};
```

Important:

- `variants` is now the primary field to maintain for product detail imagery
- `images` and `colors` are still kept as compatibility fields
- when updating a product, update `variants` first
- keep `images` and `colors` aligned with the default variant set when possible

Recommended structure for future products:

```ts
variants: [
  {
    color: "Black",
    images: [
      "/images/products/example-black-01.jpg",
      "/images/products/example-black-02.jpg"
    ]
  },
  {
    color: "White",
    images: [
      "/images/products/example-white-01.jpg",
      "/images/products/example-white-02.jpg"
    ]
  }
],
images: [
  "/images/products/example-black-01.jpg",
  "/images/products/example-black-02.jpg"
],
colors: ["Black", "White"]
```

### Product images

What it controls:

- product cards on the Products page
- product detail page gallery
- featured product cards on the homepage

Edit:

- `images` inside each file in `src/data/products/items/`

You can use:

- external image URLs
- local images from a future `public/` folder

Recommended local folder structure:

```text
public/images/products/
public/images/brands/
```

Example local path in a product:

```ts
images: [
  "/images/products/chanel-sneaker-01.jpg",
  "/images/products/chanel-sneaker-02.jpg"
]
```

Example local path in a brand:

```ts
logo: "/images/brands/chanel-logo.png"
```

Important:

- the project currently does not include a `public/` folder yet
- if you want local images, create `public/images/products/` and `public/images/brands/` yourself

### Brand logos or brand list

What it controls:

- homepage Featured Brands cards
- About page brand cards
- brand filter options on the Products page

Edit:

- `src/data/brands/brands.ts`

If you add a brand:

- add the brand object to `brands.ts`
- use a unique `slug`
- make sure product item files reference the same brand slug

### Navigation links

What it controls:

- the top navigation in the Header
- the mobile menu links

Edit:

- `src/components/layout/Header.tsx`

Look for:

```ts
const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];
```

### About page content

What it controls:

- About page headline
- About page paragraphs
- page-specific metadata
- brand card section on the About page

Edit:

- page text and metadata: `src/app/about/page.tsx`
- brand cards data: `src/data/brands/brands.ts`

Important:

- the About page layout is in `src/app/about/page.tsx`
- the brand cards themselves are driven by `src/data/brands/brands.ts`

### Contact page content

What it controls:

- Contact page title
- supporting text
- any hardcoded inquiry instructions or page copy

Edit:

- page text and metadata: `src/app/contact/page.tsx`
- contact details: `src/data/site/site.ts`

## File Map / What to Edit

Use this section as a quick reference.

- To update the site name, tagline, footer copy, site URL, OG image, or contact details → edit `src/data/site/site.ts`
- To update homepage text and CTA labels → edit `src/data/site/site.ts`
- To update homepage brand cards or About page brand cards → edit `src/data/brands/brands.ts`
- To add or remove a brand → edit `src/data/brands/brands.ts`
- To update category names, descriptions, or category cover images → edit `src/data/categories/categories.ts`
- To update one product’s title, price, images, colors, sizes, materials, or description → edit that product’s file in `src/data/products/items/`
- To add a new product to the site → create a new file in `src/data/products/items/` and register it in `src/data/products/index.ts`
- To remove a product from the site → remove it from `src/data/products/index.ts` and delete its file in `src/data/products/items/`
- To change the About page text → edit `src/app/about/page.tsx`
- To change the Contact page text → edit `src/app/contact/page.tsx`
- To change the Products page top intro text or collection section copy → edit `src/app/products/page.tsx`
- To change the global visual style → edit `src/app/globals.css`
- To change the header links or mobile menu → edit `src/components/layout/Header.tsx`
- To change footer layout or footer presentation → edit `src/components/layout/Footer.tsx`

## Recommended Editing Workflow

When customizing the site for your own business, this order is the safest:

1. Update the shared site information in `src/data/site/site.ts`
2. Update your brand list in `src/data/brands/brands.ts`
3. Update your category list in `src/data/categories/categories.ts`
4. Update product item files in `src/data/products/items/`
5. Add your local images if needed in `public/images/products/` and `public/images/brands/`
6. Check the page-specific copy in `src/app/about/page.tsx`, `src/app/contact/page.tsx`, and `src/app/products/page.tsx`
7. Run the site locally with `npm run dev`
8. Run `npm run build` before deployment

## Notes / Tips

- Keep `slug` values unique for both products and brands.
- If a product uses `brand: "chanel"`, that same slug must exist in `src/data/brands/brands.ts`.
- If a product uses `category: "shoes"`, that same slug must exist in `src/data/categories/categories.ts`.
- Keep image sizes and proportions reasonably consistent so cards and galleries look clean.
- If you switch to local images, create the `public/` directory yourself because it does not exist yet in this project.
- Check all links and contact information before deployment.
- After large content changes, run `npm run build` to catch missing fields or invalid imports.
- If you add a new product file but forget to include it in `src/data/products/index.ts`, it will not appear on the site.

## Current Product Data Structure

The project no longer uses template-generated product seeds.

Products are now maintained like this:

```text
src/data/products/
├── index.ts
└── items/
    ├── chanel-chanel-chunky-platform-sneakers.ts
    ├── air-jordan-air-jordan-4.ts
    ├── dior-dior-b30-low-top-sneaker.ts
    └── ...
```

This makes it much easier to:

- update one product without affecting others
- replace only one product’s images
- change one product’s sizes or colors
- add new items
- delete old items

That is now the recommended way to maintain the catalog.
