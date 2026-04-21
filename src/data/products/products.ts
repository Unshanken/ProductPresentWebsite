import type { Product } from "@/types";

type ProductSeed = {
  category: Product["category"];
  brand: string;
  name: string;
  priceLabel: string;
};

const categoryDefaults: Record<
  Product["category"],
  Pick<
    Product,
    "images" | "colors" | "sizes" | "featured" | "newArrival" | "materials"
  >
> = {
  shoes: {
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Black", "White"],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    featured: false,
    newArrival: false,
    materials: ["Leather upper", "Rubber outsole", "Signature branded details"]
  },
  tops: {
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Black", "White", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    featured: false,
    newArrival: false,
    materials: ["Cotton blend", "Soft brushed fabric"]
  },
  pants: {
    images: [
      "https://images.unsplash.com/photo-1506629905607-d9d1c6d0e7cf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Blue Wash", "Black"],
    sizes: ["28", "30", "32", "34", "36"],
    featured: false,
    newArrival: false,
    materials: ["Denim fabric", "Premium cotton blend"]
  },
  jewelry: {
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Silver", "Gold"],
    sizes: ["One Size"],
    featured: false,
    newArrival: false,
    materials: ["Plated metal", "Premium finish"]
  },
  bags: {
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: ["Black", "Brown"],
    sizes: ["One Size"],
    featured: false,
    newArrival: false,
    materials: ["Leather body", "Textile lining", "Metal hardware"]
  }
};

const productSeeds: ProductSeed[] = [
  {
    category: "shoes",
    brand: "chanel",
    name: "Chanel Chunky Platform Sneakers",
    priceLabel: "$109.99"
  },
  {
    category: "shoes",
    brand: "chrome-heart",
    name: "Chrome Hearts Rick Owens Blister Leather",
    priceLabel: "$109.99"
  },
  {
    category: "shoes",
    brand: "air-jordan",
    name: "Air Jordan 4",
    priceLabel: "$119.99"
  },
  {
    category: "shoes",
    brand: "air-jordan",
    name: "Air Jordan 5",
    priceLabel: "$59.99"
  },
  {
    category: "shoes",
    brand: "air-jordan",
    name: "Air Jordan 12",
    priceLabel: "$59.99"
  },
  {
    category: "shoes",
    brand: "air-jordan",
    name: "Air Jordan 11",
    priceLabel: "$59.99"
  },
  {
    category: "shoes",
    brand: "air-jordan",
    name: "Air Jordan 13",
    priceLabel: "$59.99"
  },
  {
    category: "shoes",
    brand: "ugg",
    name: "UGG Classic Ultra Mini",
    priceLabel: "$69.99"
  },
  {
    category: "shoes",
    brand: "ugg",
    name: "UGG Tazz Platform Slipper",
    priceLabel: "$59.99"
  },
  {
    category: "shoes",
    brand: "birkenstock",
    name: "BirkenStock Boston",
    priceLabel: "$69.99"
  },
  {
    category: "shoes",
    brand: "balenciaga",
    name: "Balenciaga Runner Sneaker 7.0",
    priceLabel: "$109.99"
  },
  {
    category: "shoes",
    brand: "balenciaga",
    name: "Balenciaga Runner Sneaker 3.5",
    priceLabel: "$104.99"
  },
  {
    category: "shoes",
    brand: "air-jordan",
    name: "Air Jordan 1 Low",
    priceLabel: "$54.99"
  },
  {
    category: "shoes",
    brand: "nike",
    name: "Nike Clogposite Slide",
    priceLabel: "$59.99"
  },
  {
    category: "shoes",
    brand: "balenciaga",
    name: "Balenciaga Furry Slippers",
    priceLabel: "$39.99"
  },
  {
    category: "shoes",
    brand: "tory-burch",
    name: "Tory Burch Miller Thong Sandals",
    priceLabel: "$39.99"
  },
  {
    category: "shoes",
    brand: "louis-vuitton",
    name: "Trainer",
    priceLabel: "$199.99"
  },
  {
    category: "shoes",
    brand: "valentino",
    name: "Vl7N Sneaker",
    priceLabel: "$129.99"
  },
  {
    category: "shoes",
    brand: "valentino",
    name: "One Stud Sneaker",
    priceLabel: "$129.99"
  },
  {
    category: "shoes",
    brand: "valentino",
    name: "Runner",
    priceLabel: "$129.99"
  },
  {
    category: "shoes",
    brand: "alexander-mcqueen",
    name: "Oversized Leather Sneaker",
    priceLabel: "$99.99"
  },
  {
    category: "shoes",
    brand: "dior",
    name: "Dior B30 Low-Top Sneaker",
    priceLabel: "$149.99"
  },
  {
    category: "pants",
    brand: "amiri",
    name: "Amiri Jeans",
    priceLabel: "$79.99"
  },
  {
    category: "tops",
    brand: "sp5der",
    name: "SP5DER Hoodies",
    priceLabel: "$69.99"
  },
  {
    category: "tops",
    brand: "alo-yoga",
    name: "Alo Yoga Suit",
    priceLabel: "$99.99"
  },
  {
    category: "bags",
    brand: "gucci",
    name: "Gucci Designer Bag",
    priceLabel: "$119.99"
  },
  {
    category: "shoes",
    brand: "louis-vuitton",
    name: "Women Vintage Sneaker",
    priceLabel: "$129.99"
  },
  {
    category: "tops",
    brand: "chrome-heart",
    name: "Chrome Heart Long Sleeve Shirt",
    priceLabel: "$49.99"
  },
  {
    category: "tops",
    brand: "fog",
    name: "FOG Essentials Suit",
    priceLabel: "$54.99"
  },
  {
    category: "tops",
    brand: "fog",
    name: "FOG Essentials Suit Style 2",
    priceLabel: "$54.99"
  },
  {
    category: "shoes",
    brand: "loro-piana",
    name: "Loro Piana Suede Loafers",
    priceLabel: "$129.99"
  },
  {
    category: "shoes",
    brand: "chanel",
    name: "Chanel Sneaker",
    priceLabel: "$141.99"
  },
  {
    category: "shoes",
    brand: "louis-vuitton",
    name: "Louis Vuitton Sneakerina",
    priceLabel: "$129.99"
  },
  {
    category: "shoes",
    brand: "dior",
    name: "Dior Women Booots",
    priceLabel: "$161.99"
  },
  {
    category: "shoes",
    brand: "dior",
    name: "Dior Sneakers B27",
    priceLabel: "$142.99"
  },
  {
    category: "shoes",
    brand: "dior",
    name: "Dior Sneakers B57",
    priceLabel: "$142.99"
  }
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createDescription(seed: ProductSeed) {
  if (seed.category === "shoes") {
    return `${seed.name} is presented as part of the current shoe catalog, combining recognizable branding, wearable comfort and standout styling for everyday fashion use.`;
  }

  if (seed.category === "tops") {
    return `${seed.name} is included in the current tops selection for its easy-to-style fit, recognizable brand identity and versatile wardrobe appeal.`;
  }

  if (seed.category === "pants") {
    return `${seed.name} is part of the current pants offering, selected for its wearable fit, clean look and easy pairing across casual and fashion-focused outfits.`;
  }

  return `${seed.name} is part of the current bag collection, selected for its brand value, practical daily use and strong visual identity within the catalog.`;
}

export const products: Product[] = productSeeds.map((seed, index) => {
  const defaults = categoryDefaults[seed.category];

  return {
    id: `product-${String(index + 1).padStart(3, "0")}`,
    slug: slugify(`${seed.brand}-${seed.name}`),
    name: seed.name,
    brand: seed.brand,
    category: seed.category,
    description: createDescription(seed),
    images: defaults.images,
    colors: defaults.colors,
    sizes: defaults.sizes,
    featured: index < 8,
    newArrival: index % 3 === 0,
    priceLabel: seed.priceLabel,
    materials: defaults.materials
  };
});
