import HeroSection from "./components/home/HeroSection";
import FeaturedGallery from "./components/home/FeaturedGallery";
import ServicesPreview from "./components/home/ServicesPreview";
import Testimonials from "./components/home/Testimonials";
import CTASection from "./components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedGallery />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </div>
  );
}
