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
        <div className="mb-10 space-y-4 md:mb-12">
          <p className="eyebrow">{content?.eyebrow ?? "Categories"}</p>
          <h2 id="category-showcase-title" className="display-title max-w-3xl">
            {content?.title ?? "Clear product groupings for scalable growth"}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-soft sm:leading-8">
            {content?.description}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-panelStrong p-6 transition duration-500 hover:-translate-y-1.5 hover:border-[#c7b49a]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${category.coverImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f4ecde]/95 via-[#f7f3eb]/35 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <p className="eyebrow">Category</p>
                <h3 className="mt-4 font-serif text-2xl text-foreground">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-soft">
                  {category.description}
                </p>
                <span className="mt-6 inline-block text-xs uppercase tracking-[0.24em] text-sand transition group-hover:text-foreground">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
