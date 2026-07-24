import Container from "../shared/container";
import {
  Pill,
  Syringe,
  Droplets,
  Cross,
  ShieldPlus,
  Stethoscope,
  Package,
  FlaskConical,
} from "lucide-react";

const categories = [
  {
    title: "Tablets",
    description:
      "High-quality tablet formulations sourced from trusted pharmaceutical manufacturers.",
    icon: Pill,
  },
  {
    title: "Injectables",
    description:
      "Sterile injectable medicines for hospitals, clinics, and healthcare institutions.",
    icon: Syringe,
  },
  {
    title: "Syrups",
    description:
      "A wide range of liquid formulations for pediatric and adult healthcare needs.",
    icon: FlaskConical,
  },
  {
    title: "Capsules",
    description:
      "Reliable capsule formulations ensuring consistent quality and efficacy.",
    icon: Package,
  },
  {
    title: "Eye Drops",
    description:
      "Ophthalmic products designed to meet diverse eye care requirements.",
    icon: Droplets,
  },
  {
    title: "Ointments",
    description:
      "Topical pharmaceutical products for dermatological and therapeutic care.",
    icon: Cross,
  },
  {
    title: "Surgical Supplies",
    description:
      "Essential surgical and medical consumables for healthcare professionals.",
    icon: ShieldPlus,
  },
  {
    title: "Medical Devices",
    description:
      "Dependable medical equipment supporting modern healthcare practices.",
    icon: Stethoscope,
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Product Categories
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Comprehensive Pharmaceutical Product Range
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We supply an extensive portfolio of pharmaceutical products to
            hospitals, pharmacies, clinics, and healthcare providers with a
            commitment to  reliability, and timely distribution.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-8 flex h-18 w-18 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-9 w-9" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}