import Image from "next/image";
import Link from "next/link";
import type { HomePageContent } from "@/types";
import { Container } from "@/components/layout/Container";

type HeroBannerProps = {
  content: HomePageContent["hero"];
};

const heroProducts = [
  {
    name: "Valentino Vl7N Sneaker",
    category: "Signature sneakers",
    href: "/products/valentino-vl7n-sneaker",
    image: "/images/products/valentino-vl7n-sneaker/Black1.webp"
  },
  {
    name: "Louis Vuitton Trainer",
    category: "Luxury trainers",
    href: "/products/louis-vuitton-trainer",
    image: "/images/products/louis-vuitton-trainer/Blue1.webp"
  },
  {
    name: "Chanel Platform Sneaker",
    category: "Statement shoes",
    href: "/products/chanel-chanel-chunky-platform-sneakers",
    image: "/images/products/chanel-chanel-chunky-platform-sneakers/White1.webp"
  },
  {
    name: "Amiri Jeans",
    category: "Streetwear staples",
    href: "/products/amiri-amiri-jeans",
    image: "/images/products/amiri-amiri-jeans/Style 1.webp"
  }
];

export function HeroBanner({ content }: HeroBannerProps) {
  const [featuredProduct, ...supportingProducts] = heroProducts;

  return (
    <section
      className="pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-24"
      aria-labelledby="home-hero-title"
    >
      <Container>
        <div className="surface-panel overflow-hidden rounded-[2.75rem] bg-hero-glow shadow-ambient">
          <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10 lg:py-10 xl:px-12">
            <div className="order-2 space-y-7 px-1 py-6 sm:px-2 lg:order-1 lg:py-10">
              <p className="eyebrow">{content.eyebrow}</p>
              <div className="space-y-5">
                <h1
                  id="home-hero-title"
                  className="max-w-4xl font-serif text-5xl leading-[0.9] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.05rem]"
                >
                  {content.title}
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-soft sm:text-base sm:leading-8">
                  {content.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={content.primaryCtaHref} className="button-primary">
                  {content.primaryCtaLabel}
                </Link>
                <Link href={content.secondaryCtaHref} className="button-secondary">
                  {content.secondaryCtaLabel}
                </Link>
              </div>
              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                {content.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="border-t border-line pt-4"
                  >
                    <p className="eyebrow">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 grid gap-3 sm:grid-cols-[1.18fr_0.82fr] sm:gap-4 lg:order-2">
              <Link
                href={featuredProduct.href}
                className="group relative min-h-[20rem] overflow-hidden rounded-[2rem] bg-panelStrong sm:min-h-[30rem] lg:min-h-[34rem]"
                aria-label={`View ${featuredProduct.name}`}
              >
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 55vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 via-black/26 to-transparent p-5 text-white sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
                    {featuredProduct.category}
                  </p>
                  <p className="mt-2 font-serif text-3xl leading-none sm:text-4xl">
                    {featuredProduct.name}
                  </p>
                </div>
              </Link>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-1 sm:gap-4">
                {supportingProducts.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="group relative min-h-[7rem] overflow-hidden rounded-[1.6rem] bg-panelStrong sm:min-h-[9.65rem] lg:min-h-[10.75rem]"
                    aria-label={`View ${product.name}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 22vw, 31vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 hidden p-4 text-white sm:block">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/70">
                        {product.category}
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        {product.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 rounded-[1.6rem] border border-line bg-white/70 px-5 py-4 sm:col-span-2">
                <div>
                  <p className="eyebrow">Featured edit</p>
                  <p className="mt-1 text-sm text-soft">
                    Sneakers, apparel and accessories selected for everyday luxury styling.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
