import Image from "next/image";
import Link from "next/link";
import Container from "../shared/container";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="grid min-h-[calc(100vh-80px)] items-center gap-16 py-20 lg:grid-cols-2">
        {/* Left */}
        <div>
         

          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
            Delivering  Medicines with Trust & Reliability
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Medsulov Pharmaceutical Pvt. Ltd. specializes in wholesale
            distribution of  pharmaceutical products to hospitals,
            pharmacies, clinics, and healthcare providers across the region.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-teal-700 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 hover:shadow-xl"
            >
              Contact Us
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h3 className="text-3xl font-bold text-teal-700">100%</h3>
              <p className="text-slate-600">Trust</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-teal-700">Fast</h3>
              <p className="text-slate-600">Distribution</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-teal-700">Trusted</h3>
              <p className="text-slate-600">Healthcare Partner</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-teal-100 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-100 blur-3xl" />

          <Image
            src="/newhero.jpeg"
            alt="Pharmaceutical Distribution"
            width={700}
            height={500}
            priority
            className="relative rounded-[32px] object-cover shadow-2xl"
          />
        </div>
      </Container>
    </section>
  );
}