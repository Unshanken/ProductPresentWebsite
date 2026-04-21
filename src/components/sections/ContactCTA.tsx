import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getSiteContent } from "@/lib/data";
import type { HomePageContent } from "@/types";

type ContactCTAProps = {
  content?: HomePageContent["contactCta"];
};

export function ContactCTA({ content }: ContactCTAProps) {
  const site = getSiteContent();

  return (
    <section className="section-space" aria-labelledby="contact-cta-title">
      <Container>
        <div className="surface-panel overflow-hidden rounded-[2.75rem] bg-hero-glow px-6 py-12 shadow-ambient sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <p className="eyebrow">
                {content?.eyebrow ?? "Contact & Collaboration"}
              </p>
              <h2
                id="contact-cta-title"
                className="max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-[3.6rem]"
              >
                {content?.title ??
                  "Turn the product showcase into a stronger brand conversation"}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-soft sm:leading-8">
                {content?.description ??
                  "Perfect for directing visitors toward showroom appointments, wholesale inquiries, media requests or private client service."}
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link href={content?.buttonHref ?? "/contact"} className="button-primary">
                {content?.buttonLabel ?? "Contact Us"}
              </Link>
              <p className="text-sm text-muted">{site.contact.email}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
