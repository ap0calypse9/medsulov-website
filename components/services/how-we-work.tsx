import {
  MessageSquareMore,
  ClipboardCheck,
  PackageCheck,
  Truck,
} from "lucide-react";

import Container from "../shared/container";

const steps = [
  {
    title: "Inquiry",
    description:
      "Share your pharmaceutical requirements with our team, and we'll help identify the right products and supply solutions.",
    icon: MessageSquareMore,
  },
  {
    title: "Order Confirmation",
    description:
      "Once your order is finalized, we verify product availability and prepare it for processing with complete attention to detail.",
    icon: ClipboardCheck,
  },
  {
    title: "Quality Check",
    description:
      "Products undergo careful verification to ensure quality standards and proper handling before dispatch.",
    icon: PackageCheck,
  },
  {
    title: "Safe & Timely Delivery",
    description:
      "Orders are delivered efficiently, ensuring dependable supply for hospitals, pharmacies, and healthcare providers.",
    icon: Truck,
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            How We Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We follow a streamlined process to ensure every order is handled
            professionally, delivered on time, and meets the expectations of
            our healthcare partners.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-slate-200 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg">
                    <Icon className="h-9 w-9" />
                  </div>

                  <div className="mt-6">
                    <span className="text-sm font-semibold text-teal-600">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}