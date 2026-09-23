import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FeaturedBanners from "@/components/FeaturedBanners";
import FilterableProductGrid from "@/components/FilterableProductGrid";
import ArtisanSpotlight from "@/components/ArtisanSpotlight";
import SustainabilityPledge from "@/components/SustainabilityPledge";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import ToastNotification from "@/components/ToastNotification";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-charcoal-900 selection:bg-terracotta-100 selection:text-terracotta-700">
      {/* Sticky Header & Nav with search, categories, cart & wishlist counters */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Split Hero Banner */}
        <HeroBanner />

        {/* Curated Collection Feature Banners */}
        <FeaturedBanners />

        {/* Filterable Product Grid with Category Pills, Price & Sort */}
        <FilterableProductGrid />

        {/* Interactive Master Artisan Storytelling Section */}
        <ArtisanSpotlight />

        {/* Sustainability & Fair-Trade Guarantee Pledge */}
        <SustainabilityPledge />
      </main>

      {/* Footer with certifications, newsletter and artisan charter */}
      <Footer />

      {/* Interactive Overlays & Modals */}
      <CartDrawer />
      <QuickViewModal />
      <ToastNotification />
    </div>
  );
}
