import HeroSection from "/src/components/Guest/HeroSection";
import AboutSection from "/src/components/Guest/AboutSection";
import ProductGrid from "/src/components/Guest/ProductGrid";
import TestimonialSection from "/src/components/Guest/TestimonialSection";

export default function HomeGuest() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductGrid />
      <TestimonialSection />
    </div>
  );
}