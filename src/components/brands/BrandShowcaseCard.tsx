import Link from "next/link";
import { BrandLogo } from "@/components/brands/BrandLogo";
import type { Brand } from "@/types";

type BrandShowcaseCardProps = {
  brand: Brand;
  titleTag?: "h2" | "h3";
};

export function BrandShowcaseCard({
  brand,
  titleTag: TitleTag = "h3"
}: BrandShowcaseCardProps) {
  return (
    <Link
      href={`/products?brand=${brand.slug}#products-results`}
      className="group surface-card flex min-h-[16.5rem] flex-col items-center justify-center rounded-[2rem] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#c7b49a] hover:shadow-ambient sm:p-8"
    >
      <div className="flex w-full flex-1 items-center justify-center">
        <BrandLogo
          name={brand.name}
          logo={brand.logo}
          className="min-h-[8.75rem] w-full max-w-[13rem]"
        />
      </div>
      <div className="mt-5 flex w-full flex-col items-center justify-center gap-2">
        <TitleTag className="font-serif text-3xl text-foreground transition group-hover:text-[#353a36]">
          {brand.name}
        </TitleTag>
        <p className="text-xs uppercase tracking-[0.28em] text-muted">
          {brand.origin}
        </p>
      </div>
    </Link>
  );
}
