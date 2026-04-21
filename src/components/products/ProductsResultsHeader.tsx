type ProductsResultsHeaderProps = {
  total: number;
  activeCategoryName?: string;
  activeBrandName?: string;
  keyword?: string;
};

export function ProductsResultsHeader({
  total,
  activeCategoryName,
  activeBrandName,
  keyword
}: ProductsResultsHeaderProps) {
  const filters = [activeCategoryName, activeBrandName, keyword ? `"${keyword}"` : undefined]
    .filter(Boolean)
    .join(" / ");

  return (
    <div className="mb-8 flex flex-col gap-3 border-b border-line pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-2">
        <p className="eyebrow">Results</p>
        <h2
          id="products-results-title"
          className="font-serif text-3xl leading-tight text-foreground sm:text-4xl"
        >
          {total} product{total === 1 ? "" : "s"} found
        </h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-soft">
        {filters
          ? `Current filters: ${filters}`
          : "Browse the full collection across categories, brands and featured picks."}
      </p>
    </div>
  );
}
