import Image from "next/image";
import Link from "next/link";
import Container from "../shared/container";

export default function AboutPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              About Us
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Committed to Quality Healthcare Distribution
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Medsulov Pharmaceutical Pvt. Ltd. is dedicated to supplying
              high-quality pharmaceutical products through a reliable and
              efficient distribution network. We strive to build long-term
              partnerships with healthcare professionals by ensuring timely
              delivery and trusted service.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-teal-800 hover:-translate-y-1"
            >
              Read More
            </Link>
          </div>

          {/* Right */}
          <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/about.jpg"
              alt="Medsulov Pharmaceutical"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-4 shadow-lg backdrop-blur-sm">
              <p className="text-lg font-bold text-slate-900">
                Trusted Healthcare Partner
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Quality • Reliability • Timely Delivery
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}