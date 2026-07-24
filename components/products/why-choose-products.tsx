import {
  BadgeCheck,
  Building2,
  ShieldCheck,
  Truck,
  Handshake,
  Headset,
} from "lucide-react";

import Container from "../shared/container";

const features = [
  {
    title: "Quality Assured",
    description:
      "Every product is sourced with a strong commitment to quality, safety, and reliability.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted Manufacturers",
    description:
      "We collaborate with reputable pharmaceutical manufacturers to ensure dependable supply.",
    icon: Building2,
  },
  {
    title: "Safe Storage & Handling",
    description:
      "Products are handled with care throughout the supply chain to maintain their integrity.",
    icon: ShieldCheck,
  },
  {
    title: "Timely Distribution",
    description:
      "Our efficient logistics help ensure medicines reach healthcare providers on schedule.",
    icon: Truck,
  },
  {
    title: "Reliable Partnerships",
    description:
      "We focus on building long-term relationships through transparency and consistent service.",
    icon: Handshake,
  },
  {
    title: "Dedicated Support",
    description:
      "Our team is always ready to assist with product inquiries and order requirements.",
    icon: Headset,
  },
];

export default function WhyChooseProducts() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Why Choose Our Products
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Quality You Can Trust
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are committed to supplying pharmaceutical products that meet high
            standards of quality, reliability, and consistency while supporting
            the needs of healthcare providers.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}