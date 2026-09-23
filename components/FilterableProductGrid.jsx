"use client";

import { useMemo, useState } from "react";
import { useStore } from "@/store/useStore";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "./ProductCard";
import {
  SlidersHorizontal,
  ArrowUpDown,
  Filter,
  RotateCcw,
  Sparkles,
  Check,
  Search,
} from "lucide-react";

export default function FilterableProductGrid() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const selectedCategory = useStore((state) => state.selectedCategory);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);
  const selectedPriceRange = useStore((state) => state.selectedPriceRange);
  const setSelectedPriceRange = useStore((state) => state.setSelectedPriceRange);
  const sortBy = useStore((state) => state.sortBy);
  const setSortBy = useStore((state) => state.setSortBy);
  const sustainableOnly = useStore((state) => state.sustainableOnly);
  const toggleSustainableOnly = useStore((state) => state.toggleSustainableOnly);
  const resetFilters = useStore((state) => state.resetFilters);

  // Filter and sort computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Search query filter (matches title, description, materials, artisan name, or region)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesArtisan = product.artisan.name.toLowerCase().includes(query);
        const matchesRegion = product.artisan.region.toLowerCase().includes(query);
        const matchesCategory = product.categoryLabel.toLowerCase().includes(query);

        if (!matchesTitle && !matchesDesc && !matchesArtisan && !matchesRegion && !matchesCategory) {
          return false;
        }
      }

      // Price filter
      if (selectedPriceRange === "under-40" && product.price >= 40) return false;
      if (selectedPriceRange === "40-75" && (product.price < 40 || product.price > 75)) return false;
      if (selectedPriceRange === "over-75" && product.price <= 75) return false;

      // Sustainable filter
      if (sustainableOnly && !product.isSustainable) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      // Default: featured (ID order or natural curation)
      return 0;
    });
  }, [selectedCategory, searchQuery, selectedPriceRange, sustainableOnly, sortBy]);

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedPriceRange !== "all" ||
    searchQuery.trim() !== "" ||
    sustainableOnly ||
    sortBy !== "featured";

  return (
    <section id="product-catalog" className="py-12 sm:py-16 bg-cream-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-terracotta-600 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artisan Catalog</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Handcrafted Living Collection
            </h2>
            <p className="text-sm text-charcoal-500 mt-1 max-w-xl">
              Authentic heritage creations sourced directly from indigenous Indian artisan clusters.
              No synthetic mass-production.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 text-charcoal-800 text-xs font-semibold focus-ring"
            >
              <SlidersHorizontal className="w-4 h-4 text-terracotta-600" />
              <span>Filters & Sort</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-terracotta-500" />
              )}
            </button>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-charcoal-600 hover:text-terracotta-600 hover:bg-cream-200/60 transition-colors focus-ring"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Navigation (Horizontal Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar border-b border-cream-200/80">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all focus-ring flex items-center gap-2 ${
                  isSelected
                    ? "bg-sage-800 text-white shadow-sm ring-1 ring-sage-800"
                    : "bg-white text-charcoal-700 border border-cream-300 hover:bg-cream-100 hover:border-cream-400"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? "bg-sage-700 text-cream-100"
                      : "bg-cream-200 text-charcoal-600"
                  }`}
                >
                  {cat.id === "all"
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Top Filter Controls: Price Buckets, Eco-toggle & Sorting Bar */}
        <div
          className={`bg-white rounded-2xl border border-cream-200 p-4 sm:p-5 mb-8 shadow-xs ${
            mobileFilterOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Price Filter */}
            <div>
              <label
                htmlFor="price-filter"
                className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5"
              >
                Price Tier
              </label>
              <select
                id="price-filter"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-3 py-2 bg-cream-50 border border-cream-300 rounded-xl text-xs font-medium text-charcoal-900 focus-ring"
              >
                <option value="all">All Prices</option>
                <option value="under-40">Under $40 (Accessible Crafts)</option>
                <option value="40-75">$40 – $75 (Signature Works)</option>
                <option value="over-75">Over $75 (Heirloom Masterpieces)</option>
              </select>
            </div>

            {/* Sorting Dropdown */}
            <div>
              <label
                htmlFor="sort-by"
                className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5"
              >
                Sort By
              </label>
              <div className="relative">
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-cream-50 border border-cream-300 rounded-xl text-xs font-medium text-charcoal-900 focus-ring"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Sustainability Toggle Pill */}
            <div className="flex flex-col justify-end">
              <span className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                Ethical Verification
              </span>
              <button
                type="button"
                onClick={toggleSustainableOnly}
                className={`w-full py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all focus-ring ${
                  sustainableOnly
                    ? "bg-sage-100 border-sage-500 text-sage-800"
                    : "bg-cream-50 border-cream-300 text-charcoal-700 hover:bg-cream-100"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${sustainableOnly ? "bg-sage-600" : "bg-charcoal-300"}`} />
                  100% Eco-Certified Only
                </span>
                {sustainableOnly && <Check className="w-3.5 h-3.5 text-sage-700" />}
              </button>
            </div>

            {/* Active Match Count indicator */}
            <div className="text-right sm:text-left lg:text-right pt-2 lg:pt-0">
              <span className="text-xs text-charcoal-500 block">Current Selection</span>
              <span className="font-serif text-sm font-bold text-charcoal-900">
                {filteredProducts.length} of {PRODUCTS.length} Creations Found
              </span>
            </div>
          </div>

          {/* Active Filter Badges */}
          {hasActiveFilters && (
            <div className="mt-4 pt-3 border-t border-cream-200 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-charcoal-500 font-medium">Active filters:</span>

              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-200 text-charcoal-800 font-medium">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="hover:text-terracotta-600">
                    ×
                  </button>
                </span>
              )}

              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-200 text-charcoal-800 font-medium">
                  Category: {CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                  <button onClick={() => setSelectedCategory("all")} className="hover:text-terracotta-600">
                    ×
                  </button>
                </span>
              )}

              {selectedPriceRange !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-200 text-charcoal-800 font-medium">
                  Price: {selectedPriceRange}
                  <button onClick={() => setSelectedPriceRange("all")} className="hover:text-terracotta-600">
                    ×
                  </button>
                </span>
              )}

              {sustainableOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sage-100 text-sage-800 font-medium border border-sage-300">
                  Eco-Certified
                  <button onClick={toggleSustainableOnly} className="hover:text-terracotta-600">
                    ×
                  </button>
                </span>
              )}

              <button
                onClick={resetFilters}
                className="text-terracotta-600 hover:text-terracotta-700 font-bold ml-auto hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Product Grid: 1-col mobile, 2-col tablet, 4-col desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State when zero results match */
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-cream-200 max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center mx-auto text-charcoal-500">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              No handcrafted works found
            </h3>
            <p className="text-sm text-charcoal-500">
              We couldn't find any artisan pieces matching your current filters or query.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-terracotta-600 text-white text-xs font-semibold hover:bg-terracotta-700 transition-colors focus-ring"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
