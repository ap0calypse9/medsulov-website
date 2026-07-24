import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

import Container from "../shared/container";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Pharmaceutical Distribution",
  "Wholesale Supply",
  "Hospital Supplies",
  "Inventory Support",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Medsulov Pharmaceutical Pvt. Ltd."
                width={48}
                height={48}
                className="rounded-lg"
              />

              <div>
                <h3 className="text-lg font-bold text-white">
                  Medsulov
                </h3>
                <p className="text-sm text-slate-400">
                  Pharmaceutical Pvt. Ltd.
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-7 text-slate-400">
              Delivering quality pharmaceutical products through trusted
              partnerships, dependable service, and timely distribution to
              healthcare providers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-teal-400"
                  >
                    <ChevronRight className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Our Services
            </h4>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2"
                >
                  <ChevronRight className="mt-1 h-4 w-4 text-teal-400" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Contact Information
            </h4>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-teal-400" />
                <span>
                  Kolkata, West Bengal
                  <br />
                  India
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span>info@medsulov.com</span>
              </div>

              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-teal-400" />
                <span>
                  Mon – Sat
                  <br />
                  9:00 AM – 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Medsulov Pharmaceutical Pvt. Ltd.
              All rights reserved.
            </p>

           
          </div>
        </div>
      </Container>
    </footer>
  );
}