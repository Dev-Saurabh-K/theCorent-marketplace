"use client";

import Image from "next/image";
import { useStore } from "@/store/useStore";
import { Star, ShoppingBag, Eye, Heart, MapPin } from "lucide-react";

export default function ProductCard({ product }) {
  const addToCart = useStore((state) => state.addToCart);
  const wishlist = useStore((state) => state.wishlist);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const setQuickViewProduct = useStore((state) => state.setQuickViewProduct);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <article className="group bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full focus-within:ring-2 focus-within:ring-terracotta-500">
      {/* Product Image Container with Aspect Ratio to avoid CLS */}
      <div className="relative aspect-square w-full overflow-hidden bg-cream-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Top Badges: Category or Discount */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {discountPercent > 0 && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-terracotta-600 text-white rounded-full shadow-xs">
              Save {discountPercent}%
            </span>
          )}
          {product.badges?.[0] && (
            <span className="px-2.5 py-1 text-[10px] font-medium tracking-wide bg-cream-50/90 backdrop-blur-md text-charcoal-800 rounded-full border border-cream-300 shadow-xs">
              {product.badges[0]}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-cream-300 flex items-center justify-center text-charcoal-700 hover:text-terracotta-600 hover:bg-white transition-all shadow-xs focus-ring"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isWishlisted ? "fill-terracotta-600 text-terracotta-600" : ""
            }`}
          />
        </button>

        {/* Hover Quick View Overlay (Desktop) */}
        <div className="absolute inset-0 bg-charcoal-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setQuickViewProduct(product)}
            className="px-4 py-2.5 rounded-xl bg-white/95 text-charcoal-900 font-semibold text-xs tracking-wider uppercase shadow-lg hover:bg-cream-100 active:scale-95 transition-all flex items-center gap-2 focus-ring"
          >
            <Eye className="w-4 h-4 text-terracotta-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div className="space-y-2">
          {/* Artisan & Location Badge */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sage-700 bg-sage-50 px-2 py-0.5 rounded-md border border-sage-200">
              <MapPin className="w-3 h-3 text-sage-600" />
              <span className="truncate">{product.artisan.name} • {product.artisan.region}</span>
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-serif text-base font-semibold text-charcoal-900 hover:text-terracotta-600 cursor-pointer line-clamp-2 transition-colors leading-snug"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Star Rating & Reviews */}
          <div className="flex items-center gap-1.5 text-xs text-charcoal-500">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-cream-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold text-charcoal-800">{product.rating.toFixed(1)}</span>
            <span className="text-charcoal-400">({product.reviewsCount})</span>
          </div>

          {/* Material Specs Snippet */}
          <p className="text-xs text-charcoal-500 line-clamp-1 italic">
            {product.materials}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-cream-200 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs line-through text-charcoal-400">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[11px] font-medium text-sage-600 bg-sage-50 px-2 py-0.5 rounded">
              In Stock
            </span>
          </div>

          {/* Action Buttons: Add to Cart & Mobile Quick View */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="sm:col-span-3 w-full py-2.5 px-3 rounded-xl bg-sage-700 hover:bg-sage-800 active:scale-98 text-white font-medium text-xs tracking-wide shadow-xs flex items-center justify-center gap-2 transition-all focus-ring"
              aria-label={`Add ${product.title} to shopping basket`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Basket</span>
            </button>

            <button
              type="button"
              onClick={() => setQuickViewProduct(product)}
              className="sm:col-span-1 py-2.5 px-2 rounded-xl bg-cream-100 hover:bg-cream-200 active:scale-98 text-charcoal-700 hover:text-charcoal-900 border border-cream-300 text-xs font-semibold flex items-center justify-center transition-all focus-ring"
              aria-label={`Quick preview for ${product.title}`}
              title="Quick Preview"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
