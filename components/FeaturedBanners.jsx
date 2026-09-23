"use client";

import Image from "next/image";
import { useStore } from "@/store/useStore";
import { ArrowUpRight, Sparkles } from "lucide-react";

const FEATURED_COLLECTIONS = [
  {
    id: "cotton",
    categoryKey: "cotton",
    title: "Organic Desi Cotton & Weaves",
    subtitle: "Spun on traditional pit looms with natural madder & wild indigo",
    tag: "Handloom Heritage",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    itemCount: "3 Curated Pieces",
  },
  {
    id: "jute",
    categoryKey: "jute",
    title: "Bengal Riverbed Golden Jute",
    subtitle: "Naturally water-retted fibres braided with unbleached organic hemp",
    tag: "Zero Plastic Fibre",
    image:
      "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?auto=format&fit=crop&w=700&q=80",
    itemCount: "3 Braided Designs",
  },
  {
    id: "ceramics",
    categoryKey: "ceramics",
    title: "Wood-Fired Terracotta & Clay",
    subtitle: "Thrown on foot wheels and cured with raw herbal mineral slips",
    tag: "Earth & Wood Fired",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=700&q=80",
    itemCount: "3 Pit Kiln Works",
  },
];

export default function FeaturedBanners() {
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  const handleSelectCollection = (categoryKey) => {
    setSelectedCategory(categoryKey);
    const catalog = document.getElementById("product-catalog");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-terracotta-600 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Guild Collections</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900">
              Rooted in Nature, Shaped by Hand
            </h2>
          </div>
          <p className="text-sm text-charcoal-500 max-w-md">
            Explore works categorized by core raw elements harvested responsibly from Indian riverbeds,
            cotton fields, and fallen forest timber.
          </p>
        </div>

        {/* 3-Column Split Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => handleSelectCollection(col.categoryKey)}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-cream-200"
            >
              {/* Background Image with Zoom Micro-interaction */}
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent transition-opacity group-hover:from-charcoal-900/95" />

              {/* Top Tag & Count */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-cream-50/90 backdrop-blur-sm text-charcoal-800 border border-cream-200">
                  {col.tag}
                </span>
                <span className="text-xs font-medium text-cream-200 bg-charcoal-900/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {col.itemCount}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-4 left-4 right-4 text-cream-50 space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug group-hover:text-terracotta-200 transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-cream-200/90 line-clamp-2 leading-relaxed">
                  {col.subtitle}
                </p>

                <div className="pt-2 flex items-center text-xs font-semibold text-terracotta-300 group-hover:text-white transition-colors gap-1">
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
