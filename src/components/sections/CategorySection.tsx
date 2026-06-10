import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { Category, HomePageContent } from "@/types";

type CategorySectionProps = {
  categories: Category[];
  content?: HomePageContent["categoryShowcase"];
};

export function CategorySection({ categories, content }: CategorySectionProps) {
  return (
    <section className="section-space" aria-labelledby="category-showcase-title">
      <Container>
        <div className="section-head">
          <div className="space-y-4">
            <p className="eyebrow">{content?.eyebrow ?? "Categories"}</p>
            <h2 id="category-showcase-title" className="display-title max-w-3xl">
              {content?.title ?? "Clear product groupings for scalable growth"}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-soft sm:leading-8">
            {content?.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-6 md:auto-rows-[11rem] lg:auto-rows-[12.5rem]">
          {categories.map((category, index) => {
            const isFeature = index === 0 || index === 3;

            return (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className={`group relative min-h-[17rem] overflow-hidden rounded-2xl border border-line bg-panelStrong transition duration-500 hover:border-[#b7a17f] md:min-h-0 ${
                  isFeature
                    ? "md:col-span-3 md:row-span-2"
                    : "md:col-span-3 lg:col-span-3"
                }`}
              >
                <Image
                  src={category.coverImage}
                  alt={`${category.name} category`}
                  fill
                  sizes={
                    isFeature
                      ? "(min-width: 1024px) 44vw, (min-width: 768px) 50vw, 100vw"
                      : "(min-width: 768px) 50vw, 100vw"
                  }
                  priority
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/40 to-black/8" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="relative z-10 flex h-full min-h-[17rem] flex-col justify-end p-5 text-white md:min-h-0 sm:p-6">
                  <div className="max-w-md bg-black/36 p-4 backdrop-blur-[2px] sm:p-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/76">
                      Category
                    </p>
                    <h3 className="mt-3 font-serif text-3xl leading-none text-white drop-shadow-sm">
                      {category.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/86 drop-shadow-sm">
                      {category.description}
                    </p>
                    <span className="mt-5 inline-block text-xs uppercase tracking-[0.24em] text-white transition group-hover:translate-x-1">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
