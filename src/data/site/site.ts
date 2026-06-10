import type { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  brandName: "themodedistrict",
  brandTagline: "Curated Luxury Within Reach",
  footerDescription:
    "themodedistrict is a curated showcase of luxury-inspired fashion and streetwear, bringing together iconic styles and contemporary trends at accessible prices. We focus on refined aesthetics, versatile pieces, and a modern lifestyle approach to fashion.",
  copyright: "Copyright 2026 themodedistrict. All rights reserved.",
  siteUrl: "https://themodedistrict.com",
  defaultOgImage:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  flylinkStoreUrl: "",
  contact: {
    email: "kai@themodedistrict.com",
    phone: "themodedistrictOfficial",
    location: "Fuzhou / China"
  },
  home: {
    hero: {
      eyebrow: "Accessible Luxury Fashion",
      title: "Premium style without the premium price.",
      subtitle:
        "Explore luxury-inspired fashion designed for everyday wear. themodedistrict offers standout pieces across sneakers, apparel and accessories - combining style, quality and value.",
      primaryCtaLabel: "Browse Products",
      primaryCtaHref: "/products",
      secondaryCtaLabel: "Contact Us",
      secondaryCtaHref: "/contact",
      highlights: [
        {
          label: "Value",
          value: "Luxury for Less",
          description:
            "Get the look and feel of high-end fashion at a fraction of the price, without compromising on style."
        },
        {
          label: "Products",
          value: "Hot Styles",
          description:
            "Discover best-selling sneakers, apparel and accessories inspired by top luxury and street brands."
        },
        {
          label: "Order",
          value: "Fast Response",
          description:
            "Contact us anytime to get product details, pricing and quick order support."
        }
      ]
    },
    brandShowcase: {
      eyebrow: "Featured Brands",
      title: "Iconic styles, curated for your everyday wardrobe",
      description:
        "Explore a selection of globally recognized luxury and streetwear-inspired brands. Each piece is chosen for its design, trend relevance and value - making high-end style more accessible."
    },
    categoryShowcase: {
      eyebrow: "Shop by Category",
      title: "Find your style across every category",
      description:
        "Explore sneakers, apparel, bags and accessories - all curated to bring you the latest luxury-inspired and streetwear styles in one place."
    },
    featuredProducts: {
      eyebrow: "Featured Products",
      title: "Standout pieces worth your attention",
      description:
        "Discover our most popular and carefully selected items - from statement sneakers to everyday essentials, all chosen for style, quality and value."
    },
    aboutPreview: {
      eyebrow: "About themodedistrict",
      title: "Luxury style, made more accessible",
      description:
        "themodedistrict is built for those who appreciate high-end fashion without the traditional price barrier. We curate luxury-inspired pieces and trending styles, making it easier to access the look and feel of premium brands.",
      points: [
        "Carefully selected products inspired by top luxury and streetwear brands.",
        "Focus on style, detail and value - not inflated retail pricing.",
        "Direct and simple inquiry process with fast response support."
      ],
      ctaLabel: "Discover Our Story",
      ctaHref: "/about"
    },
    contactCta: {
      eyebrow: "Get in Touch",
      title: "See something you like? Let's make it yours.",
      description:
        "Contact us to get product details, pricing and availability. Whether you're looking for a single item or multiple pieces, we're here to help you move forward quickly.",
      buttonLabel: "Get Pricing & Details",
      buttonHref: "/contact"
    }
  }
};
