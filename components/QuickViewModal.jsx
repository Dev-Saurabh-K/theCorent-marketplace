"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";

export default function QuickViewModal() {
  const quickViewProduct = useStore((state) => state.quickViewProduct);
  const closeQuickView = useStore((state) => state.closeQuickView);
  const addToCart = useStore((state) => state.addToCart);
  const wishlist = useStore((state) => state.wishlist);
  const toggleWishlist = useStore((state) => state.toggleWishlist);

  const [quantity, setQuantity] = useState(1);

  // Reset quantity when modal opens for a new product
  useEffect(() => {
    if (quickViewProduct) {
      setQuantity(1);
    }
  }, [quickViewProduct]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && quickViewProduct) {
        closeQuickView();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [quickViewProduct, closeQuickView]);

  // Prevent background scroll
  useEffect(() => {
    if (quickViewProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.some((item) => item.id === quickViewProduct.id);

  const handleAdd = () => {
    addToCart(quickViewProduct, quantity);
    closeQuickView();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      {/* Backdrop */}
      <div
        onClick={closeQuickView}
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div className="relative w-full max-w-3xl transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all border border-cream-300 animate-scale-in">
          {/* Close button */}
          <button
            type="button"
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-cream-100 text-charcoal-500 hover:text-charcoal-900 transition-colors focus-ring"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Image */}
            <div className="relative min-h-[320px] md:min-h-[460px] bg-cream-100">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                {quickViewProduct.badges?.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-cream-50/90 text-charcoal-800 rounded-full border border-cream-200 backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Detailed Product & Artisan Specs */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                {/* Artisan origin pin */}
                <div className="flex items-center gap-1.5 text-xs text-sage-700 bg-sage-50 px-2.5 py-1 rounded-lg border border-sage-200 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-sage-600" />
                  <span>
                    Crafted by {quickViewProduct.artisan.name} • {quickViewProduct.artisan.region}
                  </span>
                </div>

                {/* Title */}
                <h3
                  id="quick-view-title"
                  className="font-serif text-2xl font-bold text-charcoal-900 leading-snug"
                >
                  {quickViewProduct.title}
                </h3>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(quickViewProduct.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-cream-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-charcoal-800">
                    {quickViewProduct.rating.toFixed(1)}
                  </span>
                  <span className="text-charcoal-400">
                    ({quickViewProduct.reviewsCount} customer reviews)
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl font-bold text-charcoal-900">
                    ${quickViewProduct.price.toFixed(2)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm line-through text-charcoal-400">
                      ${quickViewProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-sage-700 bg-sage-100 px-2 py-0.5 rounded-full">
                    Direct Fair-Trade
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Technical Specifications */}
                <div className="p-3 bg-cream-50 rounded-xl border border-cream-200 space-y-1.5 text-xs">
                  <div>
                    <span className="font-bold text-charcoal-700">Materials: </span>
                    <span className="text-charcoal-600">{quickViewProduct.materials}</span>
                  </div>
                  <div>
                    <span className="font-bold text-charcoal-700">Dimensions: </span>
                    <span className="text-charcoal-600">{quickViewProduct.dimensions}</span>
                  </div>
                  <div>
                    <span className="font-bold text-charcoal-700">Heritage: </span>
                    <span className="text-charcoal-600">{quickViewProduct.heritageStory}</span>
                  </div>
                </div>
              </div>

              {/* Actions: Quantity Stepper, Add to Basket, Wishlist */}
              <div className="space-y-3 pt-3 border-t border-cream-200">
                <div className="flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-cream-300 rounded-xl bg-cream-50">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                      className="p-2 text-charcoal-600 hover:text-charcoal-900 disabled:opacity-30 focus-ring"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-xs font-bold text-charcoal-800">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2 text-charcoal-600 hover:text-charcoal-900 focus-ring"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Basket CTA */}
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="flex-1 py-3 px-4 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-terracotta-600/20 active:scale-98 transition-all focus-ring"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Basket (${(quickViewProduct.price * quantity).toFixed(2)})</span>
                  </button>

                  {/* Wishlist Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(quickViewProduct)}
                    className="p-3 rounded-xl border border-cream-300 text-charcoal-700 hover:text-terracotta-600 hover:bg-cream-100 transition-colors focus-ring"
                    aria-label="Toggle wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted ? "fill-terracotta-600 text-terracotta-600" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-3 text-[11px] text-charcoal-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
                    Plastic-Free Packaging
                  </span>
                  <span>•</span>
                  <span>Direct Fair Trade Payout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
