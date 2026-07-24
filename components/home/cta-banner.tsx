import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "../shared/container";

export default function CtaBanner() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 px-8 py-16 text-center shadow-2xl md:px-16 md:py-20">
          {/* Decorative Background */}
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur">
              Let's Work Together
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to Partner with a Trusted Pharmaceutical Distributor?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-50">
              Medsulov Pharmaceutical Pvt. Ltd. is committed to delivering
              pharmaceutical products with dependable service,
              professional support, and timely distribution to healthcare
              providers across the region.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 font-semibold text-teal-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Contact Us
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Our Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}