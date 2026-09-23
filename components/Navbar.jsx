"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Sparkles,
  Leaf,
  SlidersHorizontal,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);
  const openCart = useStore((state) => state.openCart);
  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const selectedCategory = useStore((state) => state.selectedCategory);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistCount = wishlist.length;

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    setMobileMenuOpen(false);
    const gridEl = document.getElementById("product-catalog");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Ethical Craft Banner */}
      <div className="bg-sage-800 text-cream-100 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <Leaf className="w-3.5 h-3.5 text-sage-200" />
          Direct Fair Trade to Master Artisans
        </span>
        <span className="hidden sm:inline text-sage-400">•</span>
        <span className="hidden sm:inline">100% Plastic-Free Packaging</span>
        <span className="hidden md:inline text-sage-400">•</span>
        <span className="hidden md:inline text-cream-200">
          Complimentary Carbon-Neutral Delivery over $75
        </span>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className="bg-cream-50/95 backdrop-blur-md border-b border-cream-300 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-charcoal-700 hover:text-charcoal-900 hover:bg-cream-200/60 focus-ring"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo & Origin Tagline */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="group flex flex-col focus-ring rounded-lg p-1"
                aria-label="Terra & Weft Homepage"
              >
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-900 group-hover:text-terracotta-600 transition-colors">
                    TERRA <span className="text-terracotta-500 font-light">&</span> WEFT
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-widest uppercase bg-sage-100 text-sage-700 rounded-full border border-sage-200">
                    Artisan Guild
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-charcoal-500 uppercase">
                  Conscious Living • Handcrafted Heritage
                </span>
              </a>
            </div>

            {/* Live Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <label htmlFor="search-crafts" className="sr-only">
                  Search handcrafted goods or master artisans
                </label>
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  id="search-crafts"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search organic cotton, jute, pottery, or artisan..."
                  className="w-full pl-10 pr-9 py-2.5 bg-cream-100/80 border border-cream-300 rounded-xl text-sm text-charcoal-900 placeholder-charcoal-400 focus-ring transition duration-200 hover:border-cream-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-charcoal-400 hover:text-charcoal-700"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Quick Nav (Desktop) */}
            <div className="hidden xl:flex items-center gap-1">
              {[
                { id: "all", label: "All Crafts" },
                { id: "cotton", label: "Cotton & Weaves" },
                { id: "jute", label: "Jute & Natural Fibres" },
                { id: "ceramics", label: "Terracotta & Clay" },
                { id: "handicrafts", label: "Handicrafts" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all focus-ring ${
                    selectedCategory === category.id
                      ? "bg-terracotta-500 text-white shadow-sm"
                      : "text-charcoal-700 hover:bg-cream-200/80 hover:text-charcoal-900"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Action Badges: Wishlist & Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => {
                  const gridEl = document.getElementById("product-catalog");
                  if (gridEl) gridEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative p-2.5 rounded-xl text-charcoal-700 hover:text-terracotta-600 hover:bg-cream-200/60 transition-all focus-ring group"
                aria-label={`Wishlist with ${totalWishlistCount} saved items`}
                title="Saved Craft Creations"
              >
                <Heart className={`w-5 h-5 ${totalWishlistCount > 0 ? "fill-terracotta-500 text-terracotta-500" : ""}`} />
                {totalWishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-scale-in">
                    {totalWishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={openCart}
                className="relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-sage-800 text-cream-50 hover:bg-sage-700 active:scale-95 transition-all shadow-sm focus-ring group"
                aria-label={`Shopping Basket with ${totalCartCount} items`}
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-cream-100 group-hover:scale-110 transition-transform" />
                  {totalCartCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 bg-terracotta-500 text-white font-bold text-[10px] min-w-5 h-5 px-1 rounded-full flex items-center justify-center shadow-md animate-bounce">
                      {totalCartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase">
                  Basket
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar Row */}
          <div className="md:hidden pb-3">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search handcrafted goods..."
                className="w-full pl-10 pr-9 py-2 bg-cream-100/90 border border-cream-300 rounded-xl text-sm text-charcoal-900 placeholder-charcoal-400 focus-ring"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-charcoal-400"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cream-300 bg-cream-100/95 px-4 pt-4 pb-6 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500 px-2">
              Browse Categories
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "all", label: "All Crafts" },
                { id: "cotton", label: "Organic Cotton" },
                { id: "jute", label: "Golden Jute" },
                { id: "ceramics", label: "Terracotta Clay" },
                { id: "handicrafts", label: "Wood & Brass" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-3 py-2 rounded-xl text-left text-xs font-semibold transition-all ${
                    selectedCategory === category.id
                      ? "bg-terracotta-500 text-white"
                      : "bg-white/80 text-charcoal-800 hover:bg-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-cream-200">
              <a
                href="#artisan-stories"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-2 py-2 text-xs font-medium text-sage-800 hover:text-sage-900"
              >
                <Sparkles className="w-4 h-4 text-terracotta-500" />
                Artisan Stories & Heritage
              </a>
              <a
                href="#sustainability-pledge"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-2 py-2 text-xs font-medium text-sage-800 hover:text-sage-900"
              >
                <Leaf className="w-4 h-4 text-sage-600" />
                Our Eco-Friendly Pledge
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
