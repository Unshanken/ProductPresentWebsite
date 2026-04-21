"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { getSiteContent } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const site = getSiteContent();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/85 backdrop-blur-2xl">
      <Container className="flex min-h-20 items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-end gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-serif text-[1.7rem] uppercase tracking-[0.22em] text-foreground">
            {site.brandName}
          </span>
          <span className="hidden pb-1 text-xs uppercase tracking-[0.3em] text-muted sm:inline">
            {site.brandTagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm uppercase tracking-[0.18em] transition duration-300",
                isActive(link.href)
                  ? "bg-foreground text-white"
                  : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 text-foreground transition hover:border-[#c7b49a] md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </span>
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-line/70 md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-[1.25rem] border px-4 py-3 text-sm uppercase tracking-[0.18em] transition duration-300",
                    isActive(link.href)
                      ? "border-foreground bg-foreground text-white"
                      : "border-line bg-white/70 text-soft hover:border-[#c7b49a] hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
