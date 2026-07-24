import Hero from "@/components/home/hero";
import AboutPreview from "@/components/home/about-preview";
import ServicesPreview from "@/components/home/services-preview";
import WhyChooseUs from "@/components/home/why-choose-us";
import ProductCategories from "@/components/home/products-categories";
import CtaBanner from "@/components/home/cta-banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ProductCategories />
      <CtaBanner />
    
    </main>
  );
}