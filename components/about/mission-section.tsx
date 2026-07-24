import { CheckCircle2 } from "lucide-react";

import Container from "../shared/container";

const missionPoints = [
  "Medsulov Pharmaceutical Company is dedicated to providing healthcare products and medicines.",
  "The company focuses on innovation, and customer satisfaction in the pharmaceutical sector.",
  "Its goal is to improve people's health by delivering safe and effective pharmaceutical solutions.",
];

export default function MissionSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Our Mission
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Committed to Better Healthcare
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our mission is to deliver trusted pharmaceutical solutions while
            maintaining innovation, and
            customer satisfaction.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {missionPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100">
                <CheckCircle2 className="h-6 w-6 text-teal-700" />
              </div>

              <p className="text-lg leading-8 text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}