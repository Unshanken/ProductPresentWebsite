import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getCategories, getSiteContent } from "@/lib/data";

export function Footer() {
  const site = getSiteContent();
  const categories = getCategories();

  return (
    <footer className="border-t border-line/80 bg-white/50">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-serif text-[1.7rem] uppercase tracking-[0.22em] text-foreground">
              {site.brandName}
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              {site.brandTagline}
            </p>
            <p className="max-w-md text-sm leading-7 text-muted">
              {site.footerDescription}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Quick Links
            </p>
            <div className="flex flex-col gap-3 text-sm text-soft">
              <Link href="/" className="transition hover:text-foreground">
                Home
              </Link>
              <Link href="/products" className="transition hover:text-foreground">
                Products
              </Link>
              <Link href="/about" className="transition hover:text-foreground">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Categories
            </p>
            <div className="flex flex-col gap-3 text-sm text-soft">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products?category=${category.slug}`}
                  className="transition hover:text-foreground"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Contact</p>
            <div className="space-y-3 text-sm text-soft">
              <p>{site.contact.location}</p>
              <p>{site.contact.email}</p>
              <p>{site.contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <p>Presentation Only</p>
        </div>
      </Container>
    </footer>
  );
}
