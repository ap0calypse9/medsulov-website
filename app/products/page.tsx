import ProductsHero from "@/components/products/products-hero";
import ProductCategories from "@/components/home/products-categories";
import WhyChooseProducts from "@/components/products/why-choose-products";
import QualityCommitment from "@/components/products/quality-commitment";
import CtaBanner from "@/components/home/cta-banner";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategories />
      <WhyChooseProducts />
      <QualityCommitment />
      <CtaBanner />
    </>
  );
}