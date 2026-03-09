import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import ProductGrid from "@/components/ProductGrid";
import DetailedBenefits from "@/components/DetailedBenefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white dark:bg-black">
      <Hero />
      <Divider />
      <ProductGrid />
      <Divider />
      <DetailedBenefits />
      <Divider />
      <Footer />
    </main>
  );
}
