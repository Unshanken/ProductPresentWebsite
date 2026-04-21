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
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    {
      color: 'White',
      images: [
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    {
      color: 'Grey',
      images: [
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
      ]
    }
  ],
  // Compatibility fields:
  // keep these aligned with variants for older UI paths and fallback logic.
  images: [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
  ],
  colors: [
    'Black',
    'White',
    'Grey'
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
