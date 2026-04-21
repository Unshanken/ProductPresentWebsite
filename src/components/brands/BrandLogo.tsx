"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  name: string;
  logo: string;
  className?: string;
};

export function BrandLogo({ name, logo, className }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !logo) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-[1.5rem] border border-line bg-white/60 px-6 py-8 text-center",
          className
        )}
      >
        <span className="font-serif text-3xl uppercase tracking-[0.14em] text-foreground">
          {name.slice(0, 1)}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-[1.5rem] border border-line bg-white/60 px-6 py-8",
        className
      )}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={220}
        height={96}
        className="h-16 w-full object-contain object-center"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
