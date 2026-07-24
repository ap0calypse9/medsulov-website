import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import Container from "../shared/container";

const highlights = [
  "Quality pharmaceutical products from trusted manufacturers.",
  "Reliable distribution with timely deliveries.",
  "Strong commitment to ethical business practices.",
  "Dedicated support for hospitals, pharmacies, and healthcare providers.",
];

export default function CompanyStory() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/gg.jpg"
                alt="About Medsulov Pharmaceutical"
                width={700}
                height={700}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-teal-600 px-8 py-6 text-white shadow-xl md:block">
              <p className="text-3xl font-bold">Quality</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-teal-100">
                You Can Trust
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Delivering Healthcare with Trust and Excellence
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Medsulov Pharmaceutical Pvt. Ltd. is committed to supplying
              high-quality pharmaceutical products that support better healthcare
              outcomes. We work closely with trusted manufacturers and healthcare
              professionals to ensure dependable product availability and timely
              distribution.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Our focus is on building long-term relationships through integrity,
              consistent service, and an unwavering commitment to quality. Every
              product we deliver reflects our dedication to supporting hospitals,
              pharmacies, clinics, and healthcare providers with confidence.
            </p>

            <div className="mt-10 grid gap-5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-teal-600" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}