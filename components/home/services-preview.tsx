import Container from "../shared/container";
import {
  Truck,
  Building2,
  Store,
  Package,
} from "lucide-react";

const services = [
  {
    title: "Wholesale Distribution",
    description:
      "Reliable supply of pharmaceutical products to hospitals, pharmacies, and healthcare providers.",
    icon: Truck,
  },
  {
    title: "Hospital Supply",
    description:
      "Efficient pharmaceutical supply solutions tailored for hospitals and healthcare institutions.",
    icon: Building2,
  },
  {
    title: "Retail Pharmacy Supply",
    description:
      "Delivering genuine medicines to retail pharmacies through a trusted distribution network.",
    icon: Store,
  },
  {
    title: "Bulk Orders",
    description:
      "Flexible and scalable pharmaceutical procurement for large volume requirements.",
    icon: Package,
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Comprehensive Pharmaceutical Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We provide dependable pharmaceutical distribution services that
            support hospitals, clinics, pharmacies, and healthcare
            organizations with efficiency and reliability.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}