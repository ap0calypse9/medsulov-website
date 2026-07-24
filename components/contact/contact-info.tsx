import {
  Building2,
  Clock3,
  Mail,
  Phone,
} from "lucide-react";

import Container from "../shared/container";

const contactDetails = [
  {
    title: "Office Address",
    value: (
      <>
        103/6 Raipur Road
        <br />
        Mailing Address:
        <br />
        99, Ganguly Bagan, Ground Floor
        <br />
        Kolkata – 700047
        <br />
        West Bengal, India
      </>
    ),
    icon: Building2,
  },
  {
    title: "Phone",
   
    value: <>
     Mr. Tirtha Pratim Biswas
     <br/>
      +91 90624 63317
      </>,
    icon: Phone,
  },
  {
    title: "Email",
    value: " medsulovpharma@gmail.com",
    icon: Mail,
  },
  // {
  //   title: "Business Hours",
  //   value: (
  //     <>
  //       Monday – Saturday
  //       <br />
  //       9:00 AM – 6:00 PM
  //     </>
  //   ),
  //   icon: Clock3,
  // },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Contact Information
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are committed to supporting hospitals, pharmacies, clinics, and
            healthcare professionals with dependable pharmaceutical solutions.
            Reach out to us, and we'll be happy to assist.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-4 leading-8 text-slate-600">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}