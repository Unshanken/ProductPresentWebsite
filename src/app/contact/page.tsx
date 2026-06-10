import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getSiteContent } from "@/lib/data";

const site = getSiteContent();

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact themodedistrict for showroom appointments, wholesale inquiries, media requests and product consultation.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: `Contact | ${site.brandName}`,
    description:
      "Contact themodedistrict for showroom appointments, wholesale inquiries, media requests and product consultation.",
    url: "/contact",
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.brandName} contact page preview`
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-16" aria-labelledby="contact-page-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="surface-panel overflow-hidden rounded-[2.5rem] bg-hero-glow p-6 shadow-ambient sm:p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">Contact</p>
            <h1
              id="contact-page-title"
              className="mt-6 font-serif text-5xl leading-tight text-foreground sm:text-6xl"
            >
              Let’s find your next piece
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-soft">
              Get in touch with us for product details, pricing and availability. 
              Whether you're looking for a single item or multiple pieces, 
              our team is here to help you move forward quickly.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="surface-card rounded-[1.75rem] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Email</p>
                <p className="mt-4 text-lg text-foreground">kai@themodedistrict.com</p>
              </div>
              <div className="surface-card rounded-[1.75rem] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Tiktok</p>
                <p className="mt-4 text-lg text-foreground">themodedistrictOfficial</p>
              </div>
              <div className="surface-card rounded-[1.75rem] p-5 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Studio</p>
                <p className="mt-4 text-lg text-foreground">Fuzhou, China</p>
                <p className="mt-2 text-sm leading-6 text-soft">
                  Mon - Fri / 9:00 - 18:00 / Appointment preferred
                </p>
              </div>
            </div>
          </div>

          <div className="surface-panel rounded-[2.5rem] p-6 sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-muted">Next Steps</p>
            <h2 className="mt-5 font-serif text-4xl text-foreground">Partner with us and grow together</h2>
            <div className="mt-8 space-y-6 text-sm leading-7 text-soft">
              <p>
                We are actively looking for partners, resellers and content 
                creators to join our affiliate program.
              </p>
              <p>
                 With a <span className="font-semibold text-foreground">zero-inventory model</span>, you can promote our products and earn up to{" "}
                  <span className="font-semibold text-foreground">20% commission</span> on every successful order — while we handle sourcing, packing and worldwide shipping.
              </p>

              <p>
                Whether you're running an online store, building a social media audience or looking for new income streams, we provide a simple and scalable way to grow with us.
              </p>

              <p>
                Get started today by reaching out — we’ll guide you through the process and help you begin quickly.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="mailto:kai@themodedistrict.com"
                className="button-primary"
              >
                Send Email
              </Link>
              <Link
                href="/products"
                className="button-secondary"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
