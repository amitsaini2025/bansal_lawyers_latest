import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function ImmigrationMatterCtaBanner() {
  return (
    <section className="immigration-matter-cta" aria-labelledby="immigration-matter-cta-title">
      <Container>
        <div className="immigration-matter-cta__inner">
          <div className="immigration-matter-cta__visual" aria-hidden="true">
            <Image
              src="/images/logo-white.webp"
              alt=""
              width={160}
              height={160}
              className="immigration-matter-cta__scales"
            />
          </div>
          <div className="immigration-matter-cta__copy">
            <h2 id="immigration-matter-cta-title">Need Advice on Your Immigration Matter?</h2>
            <p>
              Speak with our experienced immigration lawyers in Melbourne. When you book, we confirm the
              consultation fee before any work starts, and later costs depend on the matter.
            </p>
          </div>
          <Link className="immigration-matter-cta__button" href="/contact">
            Request a Consultation →
          </Link>
        </div>
      </Container>
    </section>
  );
}
