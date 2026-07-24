"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "../shared/container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Medsulov Pharmaceutical"
            width={170}
            height={50}
            priority
            className="h-auto w-36 sm:w-40 md:w-[170px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="font-medium text-slate-600 transition-colors duration-200 hover:text-teal-700"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col py-4">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-2 py-3 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-teal-700"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full rounded-lg bg-teal-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-teal-800"
            >
              Get a Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}