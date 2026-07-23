import Hero from "@/components/home/hero";
import AboutPreview from "@/components/home/about-preview";
import ServicesPreview from "@/components/home/services-preview";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
    </main>
  );
}