import Link from "next/link";

export function EmptyProductsState() {
  return (
    <div className="surface-panel rounded-[2rem] p-8 text-center sm:p-12">
      <p className="eyebrow">No Results</p>
      <h3 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
        No products matched this filter set
      </h3>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-soft sm:leading-8">
        Try a different keyword, switch brand or category filters, or clear all
        filters to return to the full product collection.
      </p>
      <Link href="/products" className="button-primary mt-8">
        View All Products
      </Link>
    </div>
  );
}
