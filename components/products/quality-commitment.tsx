import {
  ShieldCheck,
  BadgeCheck,
  Truck,
} from "lucide-react";

import Container from "../shared/container";

const commitments = [
  {
    title: "Quality Standards",
    description:
      "We are committed to supplying pharmaceutical products that meet high standards of quality, consistency, and reliability.",
    icon: BadgeCheck,
  },
  {
    title: "Safe Handling",
    description:
      "Every product is handled with care throughout storage and distribution to help maintain product integrity.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Distribution",
    description:
      "Our efficient distribution network helps ensure timely and dependable delivery to healthcare providers.",
    icon: Truck,
  },
];

export default function QualityCommitment() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-white shadow-2xl md:px-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Our Commitment
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Quality at Every Step
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              At Medsulov Pharmaceutical Pvt. Ltd., quality is at the heart of
              everything we do. From sourcing products to delivering them safely
              to our healthcare partners, we strive to maintain high standards
              of professionalism, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500 text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}