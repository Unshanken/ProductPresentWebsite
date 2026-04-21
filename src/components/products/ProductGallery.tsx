"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  name: string;
  images: string[];
  activeColor?: string;
};

export function ProductGallery({ name, images, activeColor }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  if (!images.length) {
    return (
      <div className="space-y-5 lg:space-y-6">
        <div className="surface-panel flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2.5rem] bg-panelStrong p-8 text-center">
          <p className="text-sm leading-7 text-soft">
            Product imagery for this selection is being updated.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 lg:space-y-6">
      <div className="surface-panel relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-panelStrong">
        <Image
          src={activeImage}
          alt={`${name}${activeColor ? ` in ${activeColor}` : ""} main product image`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f2ea]/72 via-transparent to-transparent" />
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {images.map((image, index) => {
          const isActive = image === activeImage;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              className={cn(
                "relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border bg-panelStrong transition duration-300",
                isActive
                  ? "border-[#c7b49a] shadow-panel-soft"
                  : "border-line hover:border-[#c7b49a]"
              )}
              aria-label={`View ${name} image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${name}${activeColor ? ` in ${activeColor}` : ""} product thumbnail view ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
              <div
                className={cn(
                  "absolute inset-0 transition",
                  isActive ? "bg-transparent" : "bg-black/25"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
