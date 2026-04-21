import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <div className="surface-panel rounded-[2.5rem] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">404</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-soft">
            The route does not exist in the current showcase structure.
          </p>
          <Link href="/" className="button-primary mt-8">
            Back Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
