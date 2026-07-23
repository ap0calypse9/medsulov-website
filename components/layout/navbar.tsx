import Image from "next/image";
import Link from "next/link";

import Container from "../shared/container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

      <Container className="flex h-20 items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Medsulov Pharmaceutical"
            width={170}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
             className="font-medium text-slate-600 transition-all duration-200 hover:text-teal-700"
             >
              {item.title}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          Get a Quote
        </Link>

      </Container>
    </header>
  );
}