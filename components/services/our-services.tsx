import {
  Truck,
  Pill,
  Building2,
  Boxes,
  ShieldCheck,
  Headset,
} from "lucide-react";

import Container from "../shared/container";

const services = [
  {
    title: "Pharmaceutical Distribution",
    description:
      "We ensure the efficient distribution of quality pharmaceutical products to hospitals, pharmacies, clinics, and healthcare institutions with reliability and consistency.",
    icon: Truck,
  },
  {
    title: "Wholesale Medicine Supply",
    description:
      "Our wholesale medicine supply service provides healthcare businesses with access to a broad range of pharmaceutical products from trusted manufacturers.",
    icon: Pill,
  },
  {
    title: "Hospital & Institutional Supply",
    description:
      "We support hospitals, nursing homes, clinics, and healthcare organizations with dependable product availability and professional service.",
    icon: Building2,
  },
  {
    title: "Inventory Support",
    description:
      "Helping healthcare providers maintain a consistent supply of essential medicines through efficient inventory planning and dependable fulfillment.",
    icon: Boxes,
  },
  {
    title: "Quality Assurance",
    description:
      "Every product supplied is sourced responsibly with a strong focus on quality standards, safety, and regulatory compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Support",
    description:
      "Our dedicated team is committed to providing prompt assistance and building long-term relationships through responsive customer service.",
    icon: Headset,
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Supporting Healthcare Through Reliable Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide dependable pharmaceutical distribution and wholesale
            supply solutions designed to support hospitals, pharmacies, clinics,
            and healthcare providers with efficiency, professionalism, and
            quality.
          </p>
        </div>

        <div className="mt-20 space-y-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="group w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                      <Icon className="h-10 w-10" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {service.title}
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}