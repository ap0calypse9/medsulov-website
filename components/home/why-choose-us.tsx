import Container from "../shared/container";
import {
  ShieldCheck,
  Truck,
  Users,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    title: "Quality Assured",
    description:
      "Every product we distribute comes from trusted manufacturers and meets high quality standards.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Distribution",
    description:
      "An efficient supply chain ensures timely deliveries across our distribution network.",
    icon: Truck,
  },
  {
    title: "Experienced Team",
    description:
      "Our professionals are committed to delivering dependable pharmaceutical services.",
    icon: Users,
  },
  {
    title: "Customer Focused",
    description:
      "Building long-term relationships through trust, transparency, and exceptional support.",
    icon: Handshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            A Trusted Partner in Healthcare Distribution
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We are committed to delivering pharmaceutical products with quality,
            consistency, and professional service that healthcare providers can
            rely on.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}