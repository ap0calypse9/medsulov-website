import ServicesHero from "@/components/services/services-hero";
import OurServices from "@/components/services/our-services";
import HowWeWork from "@/components/services/how-we-work";
import CtaBanner from "@/components/home/cta-banner";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <OurServices />
      <HowWeWork />
      <CtaBanner />
    </>
  );
}