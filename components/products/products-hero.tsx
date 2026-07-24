import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import Container from "../shared/container";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/herox.jpg"
          alt="Our Products"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />

      {/* Decorative Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <Container>
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-medium text-white">
              Products
            </span>
          </div>

          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-200 backdrop-blur">
            Our Products
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Comprehensive Pharmaceutical Product Range
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            We supply a diverse range of high-quality pharmaceutical products
            to hospitals, pharmacies, clinics, and healthcare providers,
            ensuring dependable availability and trusted distribution.
          </p>
        </div>
      </Container>
    </section>
  );
}