import type { Product } from '@/types';

export const AloYogaAloYogaSuitProduct: Product = {
  id: 'product-025',
  slug: 'alo-yoga-alo-yoga-suit',
  name: 'Alo Yoga Suit',
  brand: 'alo-yoga',
  category: 'tops',
  description: 'Alo Yoga Suit is included in the current tops selection for its easy-to-style fit, recognizable brand identity and versatile wardrobe appeal.',
  flylinkUrl: 'https://store.flylinking.com/g/FDWSXUZKS8',
  // Primary field to maintain:
  // add or replace color-specific imagery here first.
  variants: [
    {
      color: 'Black',
      images: [
        '/images/products/alo-yoga-alo-yoga-suit/Black1.webp',
        '/images/products/alo-yoga-alo-yoga-suit/Black2.webp',
        '/images/products/alo-yoga-alo-yoga-suit/Black3.webp'
      ]
    },
    {
      color: 'Blue',
      images: [
        '/images/products/alo-yoga-alo-yoga-suit/Blue.webp'
      ]
    },
    {
      color: 'Pink',
      images: [
        '/images/products/alo-yoga-alo-yoga-suit/Pink.webp'
      ]
    },
    {
      color: 'White',
      images: [
        '/images/products/alo-yoga-alo-yoga-suit/White.webp'
      ]
    }
  ],
  // Compatibility fields:
  // keep these aligned with variants for older UI paths and fallback logic.
  images: [
    '/images/products/alo-yoga-alo-yoga-suit/Black1.webp',
    '/images/products/alo-yoga-alo-yoga-suit/Blue.webp',
    '/images/products/alo-yoga-alo-yoga-suit/Pink.webp',
    '/images/products/alo-yoga-alo-yoga-suit/White.webp'
  ],
  colors: [
    'Black',
    'Blue',
    'Pink',
    'White'
  ],
  sizes: [
    'S',
    'M',
    'L',
    'XL'
  ],
  featured: false,
  newArrival: true,
  priceLabel: '$99.99',
  materials: [
    'Cotton blend',
    'Soft brushed fabric'
  ]
};
